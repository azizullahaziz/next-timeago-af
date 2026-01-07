import { describe, expect, test } from "vitest";
import { selectUnit } from "../src/timeago";

describe("selectUnit", () => {
  test("seconds < 60", () => {
    expect(selectUnit(59)).toMatchObject({ unit: "second" });
  });

  test("minutes < 3600", () => {
    expect(selectUnit(60)).toMatchObject({ unit: "minute" });
    expect(selectUnit(3599)).toMatchObject({ unit: "minute" });
  });

  test("hours < 86400", () => {
    expect(selectUnit(3600)).toMatchObject({ unit: "hour" });
  });

  test("days < 7d", () => {
    expect(selectUnit(86400)).toMatchObject({ unit: "day" });
  });

  test("weeks < 30d", () => {
    expect(selectUnit(7 * 86400)).toMatchObject({ unit: "week" });
  });

  test("months < 365d", () => {
    expect(selectUnit(31 * 86400)).toMatchObject({ unit: "month" });
  });

  test("years >= 365d", () => {
    expect(selectUnit(365 * 86400)).toMatchObject({ unit: "year" });
  });
});
