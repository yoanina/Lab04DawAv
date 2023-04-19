module.exports = {
    separarPalabra: (text) => text.split(' '),
    extraerCadena: (text, start, end) => text.substring(start, end),
    eliminarEspacios: (text) => text.replace(/\s/g, ''),
    capitalizar: (text) => text.charAt(0).toUpperCase() + text.slice(1),
    minusculas: (text) => text.toLowerCase(),
    mayusculas: (text) => text.toUpperCase(),
    contarCaracteres: (text) => text.length,
  };

    /*
Para sumar 2 y 3: http://localhost:3000/calculadora?op=sumar&num1=2&num2=3
Para restar 6 y 2: http://localhost:3000/calculadora?op=restar&num1=6&num2=2
Para multiplicar 6 y 2: http://localhost:3000/calculadora?op=multiplicar&num1=6&num2=2
Para dividir 10 entre 5: http://localhost:3000/calculadora?op=dividir&num1=10&num2=5
Para eliminar los espacios de " hello world ": http://localhost:3000/procesador-texto?action=eliminarEspacios&text=%20%20hello%20world%20%20
  */
  
  