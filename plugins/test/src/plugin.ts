import { createPlugin, createRouteRef } from '@backstage/core';
import ExampleComponent from './components/ExampleComponent';

export const rootRouteRef = createRouteRef({
  path: '/test',
  title: 'test',
});

export const plugin = createPlugin({
  id: 'test',
  register({ router }) {
    router.addRoute(rootRouteRef, ExampleComponent);
  },
});
