import { capitalizedText } from "../index";

describe("Testing My Utilsext", () => {
  test("Check capitalizedText() return capitalized text", () => {
    expect(capitalizedText("pokemon")).toBe("Pokemon");
  });
});
