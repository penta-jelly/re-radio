import React from 'react';
import { mount, route } from 'navi';

const About = () => <div>Hello from about page</div>;

export default mount({
  '/': route({
    async getView(_request) {
      return <About />;
    },
  }),
});
