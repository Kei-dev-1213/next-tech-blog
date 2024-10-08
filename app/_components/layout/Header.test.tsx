import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("初期表示テスト", () => {
  test("[正常系]タイトルが表示されること", async () => {
    render(<Header />);

    // 検証
    expect(screen.getByTestId("header-title")).toHaveTextContent("Next-Tech-Blog");
  });
});
