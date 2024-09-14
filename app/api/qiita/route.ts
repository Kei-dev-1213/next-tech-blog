import { NextResponse } from "next/server";
import { NextApiResponse } from "next";
import { CONSTANTS } from "../../_constants";
import { QiitaArticleType } from "../../_types/qiitaArticleType";

export async function GET(request: Request, response: NextApiResponse) {
  // 取得する記事数
  const { searchParams } = new URL(request.url);
  const postsNum = searchParams.get("postsNum");
  const postsNumSuffix = postsNum ? `&per_page=${postsNum}` : "";

  // 取得
  const res = await fetch(`https://qiita.com/api/v2/authenticated_user/items?page=1${postsNumSuffix}`, {
    headers: {
      Authorization: `Bearer ${CONSTANTS.QIITA_API_ACCESS_TOKEN}`,
    },
  });

  // OKの場合
  if (res.ok) {
    const datas = (await res.json()) as QiitaArticleType[];
    datas.filter((data) => (data.thumbnail = CONSTANTS.THUMBNAIL_IMAGE_URL));
    return NextResponse.json(datas, { status: 200 });
  }

  // NGの場合
  console.error(await res.json());
  return NextResponse.json({ message: "データの取得に失敗しました。" }, { status: 500 });
}
