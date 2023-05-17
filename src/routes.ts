import { IRouterConfig, lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));
const TestFnComponent = lazy(() => import('@/pages/test-fn-component'));
const TestClassComponent = lazy(() => import('@/pages/test-class-component'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/test-class-component',
    component: TestClassComponent,
  },
  {
    path: '/test-fn-component',
    component: TestFnComponent,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routerConfig;
