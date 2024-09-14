"use client";

import { useParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import { CONSTANTS } from "../../_constants";
import { BlogArticleType } from "../../_types/blogArticleType";
import WhileInView from "../../_components/ui/parts/WhileInView";
import Loading from "../../loading";
import BlogDetail from "../../_components/ui/pages/BlogDetail";

const Page = memo(() => {
  const params = useParams();

  // state
  const [article, setArticle] = useState<BlogArticleType>();

  // 初期処理
  useEffect(() => {
    // データ取得
    (async () => {
      const res = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/blog?id=${params.id}`, { cache: "no-store" });
      setArticle((await res.json()) as BlogArticleType);
    })();
  }, [params.id]);

  return (
    <>
      {!article ? (
        <Loading />
      ) : (
        <WhileInView>
          <BlogDetail article={article} />
        </WhileInView>
      )}
    </>
  );
});

export default Page;
