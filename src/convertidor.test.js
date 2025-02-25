import convertidor from "./convertidor.js";

describe("Convertidor de romanos: ", () => {
  it("deberia convertir 1 en I: ", () => {
    expect(convertidor(1)).toEqual("I");
  });
});