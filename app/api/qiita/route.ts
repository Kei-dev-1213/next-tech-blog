import { NextResponse } from "next/server";
import { NextApiResponse } from "next";
import { sampleArticles } from "../sampleDatas";
import { CONSTANTS } from "../../_constants";

export async function GET(request: Request, response: NextApiResponse) {
  // 取得する記事数
  const { searchParams } = new URL(request.url);
  const postsNum = searchParams.get("postsNum");

  // 取得
  const res = await fetch(`https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=${postsNum}`, {
    headers: {
      Authorization: `Bearer ${CONSTANTS.QIITA_API_ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();
  return NextResponse.json(data);
}
