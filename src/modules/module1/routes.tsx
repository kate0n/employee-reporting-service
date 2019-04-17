
export const routes = [
  {
    exact: true,
    name: 'Module1Page',
    path: '/',
    load: () => import(/* webpackChunkName: 'Module1Page'  */ './view'),
  },
];
