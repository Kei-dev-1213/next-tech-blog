import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("テスト", () => {
  test("タイトルが表示されること", async () => {
    render(<Title />);

    // 検証
    expect(screen.getByText("これはタイトルです")).toBeInTheDocument();
  });
});
