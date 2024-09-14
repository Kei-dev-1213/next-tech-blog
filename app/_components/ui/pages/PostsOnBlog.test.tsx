import "@testing-library/jest-dom";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import PostsOnQiita from "./PostsOnQiita";
import { QiitaArticleType } from "../../../_types/qiitaArticleType";
import "../../../__mocks__/intersectionObserverMock";
import PostsOnBlog from "./PostsOnBlog";
import { BlogArticleType } from "../../../_types/blogArticleType";

const mockArticles = [
  {
    id: "1",
    title: "記事1_タイトル",
    created_at: "2023-01-01T00:00:00Z",
    thumbnail: "https://example.com/image1.jpg",
    content: "<p>コンテンツ1</p>",
    url: "/article1",
  },
  {
    id: "2",
    title: "記事2_タイトル",
    created_at: "2023-01-02T00:00:00Z",
    thumbnail: "https://example.com/image2.jpg",
    content: "<p>コンテンツ2</p>",
    url: "/article2",
  },
  {
    id: "3",
    title: "記事3_タイトル",
    created_at: "2023-01-03T00:00:00Z",
    thumbnail: "https://example.com/image3.jpg",
    content: "<p>コンテンツ3</p>",
    url: "/article3",
  },
  {
    id: "4",
    title: "記事4_タイトル",
    created_at: "2023-01-04T00:00:00Z",
    thumbnail: "https://example.com/image4.jpg",
    content: "<p>コンテンツ4</p>",
    url: "/article4",
  },
];

const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("初期表示テスト", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("[正常系]ブログの投稿記事が表示されること", async () => {
    // 実行
    render(<PostsOnBlog articles={mockArticles as unknown as BlogArticleType[]} />);

    // 検証
    await waitFor(async () => {
      const titles = screen.getAllByTestId("article-title");
      const dates = screen.getAllByTestId("article-date");
      const images = screen.getAllByTestId("article-image");
      // タイトル
      expect(titles[0]).toHaveTextContent("記事1_タイトル");
      expect(titles[1]).toHaveTextContent("記事2_タイトル");
      expect(titles[2]).toHaveTextContent("記事3_タイトル");
      expect(titles[3]).toHaveTextContent("記事4_タイトル");
      // 投稿日時
      expect(dates[0]).toHaveTextContent("2023/1/1 9:00:00");
      expect(dates[1]).toHaveTextContent("2023/1/2 9:00:00");
      expect(dates[2]).toHaveTextContent("2023/1/3 9:00:00");
      expect(dates[3]).toHaveTextContent("2023/1/4 9:00:00");
      // 画像
      expect(images[0]).toHaveAttribute("src", "https://example.com/image1.jpg");
      expect(images[1]).toHaveAttribute("src", "https://example.com/image2.jpg");
      expect(images[2]).toHaveAttribute("src", "https://example.com/image3.jpg");
      expect(images[3]).toHaveAttribute("src", "https://example.com/image4.jpg");
    });
  });
});

describe("ボタン押下テスト", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("[正常系]「もっと見る」ボタン押下時の遷移先が正しいこと", async () => {
    // 実行
    await render(<PostsOnBlog articles={mockArticles as unknown as BlogArticleType[]} />);

    //ボタン押下
    fireEvent.click(screen.getByTestId("more-show-button"));

    // 検証
    await waitFor(async () => {
      expect(mockPush).toHaveBeenCalledWith("blogs");
    });
  });
});
