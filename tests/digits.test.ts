import { describe, expect, test } from "vitest";
import { shapeDigits } from "../src/number";

describe("shapeDigits", () => {
  test("latin passthrough", () => {
    expect(shapeDigits("Version 12", "latin")).toBe("Version 12");
  });

  test("persian digits for fa/fa-AF", () => {
    expect(shapeDigits(1234567890, "persian")).toBe("۱۲۳۴۵۶۷۸۹۰");
  });

  test("arabic-indic digits for ps", () => {
    expect(shapeDigits("2026-01-07", "arabicIndic")).toBe("٢٠٢٦-٠١-٠٧");
  });
});
