import classNames from "../classNames";

describe("classNames", () => {
  it("should return default className if additionalClasses are empty/invalid", () => {
    expect(classNames("one")).toBe("one");
    expect(classNames("one", null)).toBe("one");
    expect(classNames("one", "")).toBe("one");
    expect(classNames("one", "two")).toBe("one");
    expect(classNames("one", 2)).toBe("one");
  });

  it("should generate string of classes separated by spaces", () => {
    expect(classNames("one", ["two"])).toBe("one two");
    expect(classNames("one", ["two", "three"])).toBe("one two three");
    expect(classNames("one", [2, "three"])).toBe("one 2 three");
  });

  test("example usage", () => {
    const isTrue = true;
    const isFalse = false;

    expect(
      classNames("one", [
        isTrue ? "two" : "two-disabled",
        isTrue && "three",
        isFalse && "four",
        isFalse ? "five" : "",
        isFalse ? "six" : null,
      ])
    ).toBe("one two three");
  });
});
