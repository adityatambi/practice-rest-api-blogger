import { NewPostData, PostData } from './types';
import { getPosts } from './getPosts';
import { PostsList } from './PostsList';
import { NewPostForm } from './NewPostForm';
import { savePost } from './savePost';
import { useQuery } from '@tanstack/react-query';

export function PostsPageReactQuery() {
  const {
    isLoading,
    isFetching,
    data: posts,
  } = useQuery({
    queryKey: ['postsData'],
    queryFn: getPosts,
  });
  //   const data = useLoaderData();
  //   assertIsData(data);
  async function handleSave(NewPostData: NewPostData) {
    await savePost(NewPostData);
  }

  if (!isLoading || posts === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading...</div>;
  }

  return (
    <div className="w-96 mx-auto mt-6">
      <h2 className="text-xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={handleSave} />
      {isFetching ? <div>Fetching...</div> : <PostsList posts={posts} />}
      {/* <Suspense fallback={<div>Fetching...</div>}>
        <Await resolve={data.posts}>
          {(posts) => {
            assertIsPosts(posts);
            return <PostsList posts={posts} />;
          }}
        </Await>
      </Suspense> */}
    </div>
  );
}

type Data = {
  posts: PostData[];
};

export function assertIsData(data: unknown): asserts data is Data {
  if (typeof data !== 'object') {
    throw new Error("Data isn't an object");
  }
  if (data === null) {
    throw new Error('Data is null');
  }
  if (!('posts' in data)) {
    throw new Error("data doesn't contain posts");
  }
}
