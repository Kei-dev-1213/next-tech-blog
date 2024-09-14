import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import "../../../__mocks__/intersectionObserverMock";
import BlogDetail from "./BlogDetail";
import { BlogArticleType } from "../../../_types/blogArticleType";

const mockArticle = {
  id: "1",
  title: "記事1_タイトル",
  createdAt: "2023-01-01T00:00:00Z",
  eyecatch: { url: "https://example.com/image1.jpg" },
  content: "<p>コンテンツ1</p>",
};

describe("初期表示テスト", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("[正常系]ブログの投稿記事詳細が表示されること", async () => {
    // 実行
    render(<BlogDetail article={mockArticle as unknown as BlogArticleType} />);

    // 検証
    await waitFor(async () => {
      const title = screen.getByTestId("article-title");
      const date = screen.getByTestId("article-date");
      const image = screen.getByTestId("article-image");
      const content = screen.getByTestId("article-content");

      expect(title).toHaveTextContent("記事1_タイトル");
      expect(date).toHaveTextContent("2023/1/1 9:00:00");
      expect(image).toHaveAttribute("src", "https://example.com/image1.jpg");
      expect(content).toHaveTextContent("コンテンツ1");
    });
  });
});
