export interface Stub {
  operation: string;
  response: {
    data: object;
  };
}

export function mockGraphql(stubs: Stub[]) {
  cy.on('window:before:load', (win) => {
    const originalFetch = win.fetch;
    cy.stub(win, 'fetch', (...args) => {
      const [url, request] = args;
      let promise;
      if (url.indexOf('graphql') !== -1) {
        const postBody = JSON.parse(request?.body) || {};
        stubs.some((stub) => {
          if (postBody.operationName === stub.operation) {
            console.log('STUBBING', stub.operation);
            promise = Promise.resolve({
              ok: true,
              text() {
                return Promise.resolve(JSON.stringify(stub.response));
              },
            });
            return true;
          }
          return false;
        });
      }

      if (promise) {
        return promise;
      }

      console.log('Could not find a stub for the operation.');
      return originalFetch(url, request);
    });
  });
}
