
export const routes = [
  {
    exact: false,
    name: 'Module2Page',
    path: '/module-2',
    load: () => import(/* webpackChunkName: 'module-2'  */ './view'),
  },
];
