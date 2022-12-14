import React from 'react';
import ReactDOM from 'react-dom/client';
import 'virtual:windi.css';
import './assets/style/index.css';
import AppProvider from './providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppProvider />
	</React.StrictMode>
);
