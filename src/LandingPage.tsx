import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen py-10 text-xl font-bold text-slate-600">
      <Link to={'PostsPageUseEffect'} className="hover:underline block mb-2">
        Posts Using useEffect
      </Link>
      <Link to={'PostsPageRouterLoader'} className="hover:underline block mb-2">
        Posts Using Router Loader
      </Link>
    </div>
  );
}
