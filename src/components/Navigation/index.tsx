import { Link, useLocation } from 'react-router-dom';

const linkDict = [
	{
		name: '首页',
		path: '/'
	},
	{
		name: '发现',
		path: '/explore'
	},
	{
		name: '音乐库',
		path: '/login'
	}
];

const Navigation = () => {
	const { pathname } = useLocation();
	return (
		<nav className="fixed top-0 inset-x-0 z-10 flex justify-center text-lg py-3 font-bold bg-white/[.86] backdrop-filter backdrop-saturate-[180%] backdrop-blur-lg">
			{linkDict.map((mapItem) => (
				<Link
					className="py-1.5 px-2.5 mx-3 rounded-md transition-all duration-300 hover:bg-gray-300/[.28] active:scale-90 active:transition"
					style={pathname === mapItem.path ? { color: '#335eea' } : {}}
					to={mapItem.path}
					key={mapItem.name}
				>
					{mapItem.name}
				</Link>
			))}
		</nav>
	);
};

export default Navigation;
