import { NextResponse } from "next/server";
import { NextApiResponse } from "next";
import { BlogArticleType } from "../../_types/blogArticleType";
import { Util } from "../../_utils";

export async function GET(request: Request, response: NextApiResponse) {
  // 取得するブログID
  const { searchParams } = new URL(request.url);
  const contentId = searchParams.get("id");

  // 取得
  const res = await Util.microCMSClient.get({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "blogs",
    contentId,
  });

  // 抽出
  const data = res as BlogArticleType;
  data.thumbnail = data.eyecatch.url;
  data.created_at = data.createdAt;
  return NextResponse.json(data);
}
