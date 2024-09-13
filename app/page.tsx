import PostsOnBlog from "./_components/ui/pages/PostsOnBlog";
import PostOnQiita from "./_components/ui/pages/PostsOnQiita";

export default async function Page() {
  return (
    <>
      <div className="mb-16">
        <PostOnQiita />
        <PostsOnBlog />
      </div>
    </>
  );
}
