import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import './App.css';
import { getPosts } from './posts/getPosts';
import { PostsPageRouterLoader } from './posts/PostsPageRouterLoader';
import { LandingPage } from './LandingPage';
import { PostsPage } from './posts/PostsPage';

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/PostsPageUseEffect',
    element: <PostsPage />,
  },
  {
    path: '/PostsPageRouterLoader',
    element: <PostsPageRouterLoader />,
    loader: async () => defer({ posts: getPosts() }),
  },
]);

export default App;
