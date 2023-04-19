module.exports = {
    sumar: (a, b) => parseFloat(a) + parseFloat(b),
    restar: (a, b) => parseFloat(a) - parseFloat(b),
    multiplicar: (a, b) => parseFloat(a) * parseFloat(b),
    dividir: (a, b) => parseFloat(a) / parseFloat(b),
  };

  /*
Para sumar 2 y 3: http://localhost:3000/calculadora?op=sumar&num1=2&num2=3
Para dividir 10 entre 5: http://localhost:3000/calculadora?op=dividir&num1=10&num2=5
Para extraer la subcadena "quick" de "the quick brown fox": http://localhost:3000/procesador-texto?action=extractSubstring&text=the%20quick%20brown%20fox&start=4&end=9
Para eliminar los espacios de " hello world ": http://localhost:3000/procesador-texto?action=removeSpaces&text=%20%20hello%20world%20%20
  */
  