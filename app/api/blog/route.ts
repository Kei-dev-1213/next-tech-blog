import { NextResponse } from "next/server";
import { NextApiResponse } from "next";
import { createClient } from "microcms-js-sdk";
import { BlogArticleType } from "../../_types/blogArticleType";

const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

export async function GET(request: Request, response: NextApiResponse) {
  // 取得する記事数
  const { searchParams } = new URL(request.url);
  const postsNum = searchParams.get("postsNum");

  // 取得
  const res = await client.getList({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "blogs",
  });

  // 抽出
  const datas = (postsNum ? res.contents.slice(0, parseInt(postsNum)) : res.contents) as BlogArticleType[];
  // サムネイルの設定
  datas.forEach((data) => (data.thumbnail = data.eyecatch.url));
  return NextResponse.json(datas);
}
