"use client";

import { useEffect, useState } from "react";
import PostsOnBlog from "./_components/ui/pages/PostsOnBlog";
import PostOnQiita from "./_components/ui/pages/PostsOnQiita";
import { BlogArticleType } from "./_types/blogArticleType";
import { QiitaArticleType } from "./_types/qiitaArticleType";
import Loading from "./loading";

export default function Page() {
  const [qiitaArticles, setQiitaArticles] = useState<QiitaArticleType[]>([]);
  const [blogArticles, setBlogArticles] = useState<BlogArticleType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      // データ取得
      // Qiita記事一覧
      const resFromQiita = await fetch(`/api/qiita?postsNum=4`, { cache: "no-store" });
      if (resFromQiita.ok) {
        const json = await resFromQiita.json();
        setQiitaArticles(json ? (json as QiitaArticleType[]) : []);
      }

      // ブログ記事一覧
      const resFromBlog = await fetch(`/api/blogs?postsNum=4`, { cache: "no-store" });
      if (resFromBlog.ok) {
        const json = await resFromBlog.json();
        setBlogArticles(json ? (json as BlogArticleType[]) : []);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mb-16">
          <PostOnQiita articles={qiitaArticles} />
          <PostsOnBlog articles={blogArticles} />
        </div>
      )}
    </>
  );
}
