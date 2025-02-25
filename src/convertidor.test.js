import convertidor from "./convertidor.js";

describe("Convertidor", () => {
  it("deberia convertir numero a 1 a romano", () => {
    expect(convertidor(1)).toEqual("I");
  });

  it("deberia convertir numero a 2 a romano", () => {
    expect(convertidor(2)).toEqual("II");
  });

  it("deberia convertir numero a 3 a romano", () => {
    expect(convertidor(3)).toEqual("III");
  });

  it("deberia convertir numero a 4 a romano", () => {
    expect(convertidor(4)).toEqual("IV");
  });

  it("deberia convertir numero a 5 a romano", () => {
    expect(convertidor(5)).toEqual("V");
  });

  it("deberia convertir numero a 6 a romano", () => {
    expect(convertidor(6)).toEqual("VI");
  });

  it("deberia convertir numero a 7 a romano", () => {
    expect(convertidor(7)).toEqual("VII");
  });
});
