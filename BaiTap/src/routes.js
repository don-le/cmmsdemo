import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Report = React.lazy(() => import('./views/Report'));
const Statistics = React.lazy(() => import('./views/Statistics'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Widgets = React.lazy(() => import('./views/Widgets'));
const Tables = React.lazy(() => import('./views/Tables'));
const Insight1 = React.lazy(() => import('./views/Mockups/Insight1'));
const Insight2 = React.lazy(() => import('./views/Mockups/Insight2'));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/report', name: 'Report', component: Report },
  { path: '/statistics', name: 'Statistics', component: Statistics },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/tables', name: 'Tables', component: Tables },

  { path: '/mockups/insight1', name: 'Insight1', component: Insight1 },
  { path: '/mockups/insight2', name: 'Insight2', component: Insight2 },
];

export default routes;
