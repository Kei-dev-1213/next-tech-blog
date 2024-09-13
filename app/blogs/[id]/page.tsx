"use client";

import parse, { domToReact } from "html-react-parser";
import { useParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import { CONSTANTS } from "../../_constants";
import { BlogArticleType } from "../../_types/blogArticleType";

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
      <div className="my-16 w-7/12 mx-auto">
        <img src={article && article.eyecatch.url} alt={article && article.id} className="rounded-lg object-cover" />

        <div className="py-4">
          <h2 className="text-4xl font-bold mb-2">{article && article.title}</h2>
          <span className="text-gray-500">{article && new Date(article.createdAt).toLocaleString()}</span>
          <div className="mt-6">{article && parse(article.content)}</div>
        </div>
      </div>
    </>
  );
});

export default Page;
