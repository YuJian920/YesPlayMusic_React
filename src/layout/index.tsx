import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Lyrics from '../components/Lyrics';
import MusicBar from '../components/MusicBar';
import Navigation from '../components/Navigation';
import Spinner from '../components/Spinner';

const Layout = () => {
	return (
		<>
			<Navigation />
			<main className="w-full overflow-auto fixed inset-y-0 right-0 pt-16 pb-24 pr-[10vw] pl-[10vw]">
				<Suspense fallback={<Spinner loading={true} />}>
					<Outlet />
				</Suspense>
			</main>
			<Lyrics />
			<MusicBar />
		</>
	);
};

export default Layout;
