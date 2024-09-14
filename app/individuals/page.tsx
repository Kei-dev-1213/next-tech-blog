"use client";

import { useEffect, useState } from "react";
import AllPostsOnQiita from "../_components/ui/pages/AllPostsOnQiita";
import { QiitaArticleType } from "../_types/qiitaArticleType";
import Loading from "../loading";

export default function Page() {
  const [qiitaArticles, setQiitaArticles] = useState<QiitaArticleType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      // データ取得
      const res = await fetch(`/api/qiita?postsNum=10`, { cache: "no-store" });
      setQiitaArticles((await res.json()) as QiitaArticleType[]);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="my-16">
          <AllPostsOnQiita articles={qiitaArticles} />
        </div>
      )}
    </>
  );
}
