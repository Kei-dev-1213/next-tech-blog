import { NextResponse } from "next/server";
import { NextApiResponse } from "next";

import { BlogArticleType } from "../../_types/blogArticleType";
import { Util } from "../../_utils";

export async function GET(request: Request, response: NextApiResponse) {
  // 取得する記事数
  const { searchParams } = new URL(request.url);
  const postsNum = searchParams.get("postsNum");

  try {
    // 取得
    const res = await Util.microCMSClient.getList({
      customRequestInit: {
        cache: "no-store",
      },
      endpoint: "blogs",
    });

    // OKの場合
    const datas = (postsNum ? res.contents.slice(0, parseInt(postsNum)) : res.contents) as BlogArticleType[];
    datas.filter((data) => {
      data.thumbnail = data.eyecatch.url;
      data.created_at = data.createdAt;
    });
    return NextResponse.json(datas, { status: 200 });
  } catch (e) {
    // NGの場合
    console.error(e);
    return NextResponse.json({ message: "データの取得に失敗しました。" }, { status: 500 });
  }
}
