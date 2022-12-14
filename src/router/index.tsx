import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';

const Home = lazy(() => import('../pages/Home'));
const Playlist = lazy(() => import('../pages/Playlist'));
const Explore = lazy(() => import('../pages/Explore'));
const Login = lazy(() => import('../pages/Login'));

const routerConfig: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: '/playlist/:id',
				element: <Playlist />
			},
			{
				path: '/explore',
				element: <Explore />
			},
			{
				path: '/login',
				element: <Login />
			}
		]
	}
];

export default createBrowserRouter(routerConfig);
