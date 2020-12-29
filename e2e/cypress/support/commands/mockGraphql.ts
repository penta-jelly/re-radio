export interface Stub {
  operation: string;
  response: {
    data: Record<string, unknown>;
  };
}

export function stubGraphql(stub: Stub) {
  cy.intercept({ url: 'graphql', method: 'POST' }, (req) => {
    if (stub.operation === req.body.operationName) {
      Cypress.log({ name: 'Stub', message: `Operation: ${stub.operation}` });
      req.reply(stub.response);
    }
  });
}
