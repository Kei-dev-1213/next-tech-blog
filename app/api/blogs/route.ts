import { NextResponse } from "next/server";
import { NextApiResponse } from "next";

import { BlogArticleType } from "../../_types/blogArticleType";
import { Util } from "../../_utils";
import { CONSTANTS } from "../../_constants";

export async function GET(request: Request, response: NextApiResponse) {
  // 取得する記事数
  const { searchParams } = new URL(request.url);
  const postsNum = searchParams.get("postsNum");

  // 取得
  const res = await Util.microCMSClient.getList({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "blogs",
  });

  // 抽出
  const datas = (postsNum ? res.contents.slice(0, parseInt(postsNum)) : res.contents) as BlogArticleType[];
  datas.filter((data) => {
    data.thumbnail = data.eyecatch.url;
    data.created_at = data.createdAt;
  });
  return NextResponse.json(datas);
}
