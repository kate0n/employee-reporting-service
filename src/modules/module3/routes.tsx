
export const routes = [
  {
    exact: true,
    name: 'Module3Page',
    path: '/module-3',
    load: () => import(/* webpackChunkName: 'Module3Page'  */ './view'),
  },
];
