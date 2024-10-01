import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import './App.css';
import { getPosts } from './posts/getPosts';
import { PostsPageRouterLoader } from './posts/PostsPageRouterLoader';
import { LandingPage } from './LandingPage';
import { PostsPage } from './posts/PostsPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PostsPageReactQuery } from './posts/PostsPageReactQuery';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
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
  {
    path: '/PostsPageReactQuery',
    element: <PostsPageReactQuery />,
    loader: async () => defer({ posts: getPosts() }),
  },
]);

const queryClient = new QueryClient();

export default App;
