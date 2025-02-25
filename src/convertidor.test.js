import convertidor from "./convertidor.js";

describe("Convertidor", () => {
  it("deberia convertir numero a 1 a romano", () => {
    expect(convertidor(1)).toEqual("I");
  });

  it("deberia convertir numero a 2 a romano", () => {
    expect(convertidor(2)).toEqual("II");
  });
});
