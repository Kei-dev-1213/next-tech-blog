import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("初期表示テスト", () => {
  test("[正常系]タイトルが表示されること", async () => {
    render(<Footer />);

    // 検証
    expect(screen.getByTestId("footer-content")).toHaveTextContent("© Kei-dev-1213 all rights reserved.");
  });
});
