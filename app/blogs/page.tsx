"use client";

import { useEffect, useState } from "react";
import AllPostsOnBlog from "../_components/ui/pages/AllPostsOnBlog";
import { BlogArticleType } from "../_types/blogArticleType";
import Loading from "../loading";

export default function Page() {
  const [blogArticles, setBlogArticles] = useState<BlogArticleType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      // データ取得
      const res = await fetch(`/api/blogs?postsNum=10`, { cache: "no-store" });
      setBlogArticles((await res.json()) as BlogArticleType[]);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="my-16">
          <AllPostsOnBlog articles={blogArticles} />
        </div>
      )}
    </>
  );
}
