import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("テスト", () => {
  test("タイトルが表示されること", async () => {
    render(<Header />);

    // 検証
    expect(screen.getByText("これはタイトルです")).toBeInTheDocument();
  });
});
