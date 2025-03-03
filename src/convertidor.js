function convertidor(numero) {
    if (numero < 1 || numero > 500) {
        return "Número fuera de rango";
    }

    const valores = [
        { valor: 500, simbolo: "D" },
        { valor: 400, simbolo: "CD" },
        { valor: 100, simbolo: "C" },
        { valor: 90, simbolo: "XC" },
        { valor: 50, simbolo: "L" },
        { valor: 40, simbolo: "XL" },
        { valor: 10, simbolo: "X" },
        { valor: 9, simbolo: "IX" },
        { valor: 5, simbolo: "V" },
        { valor: 4, simbolo: "IV" },
        { valor: 1, simbolo: "I" },
    ];

    let resultado = "";

    for (const { valor, simbolo } of valores) {
        while (numero >= valor) {
            resultado += simbolo;
            numero -= valor;
        }
    }

    return resultado;
}

  
  export default convertidor;
  