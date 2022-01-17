/*
  A função average recebe um array (um valor não tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algnúmerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

function typeValidation(array) {
  for (let index1 = 0; index1 < array.length; index1 += 1) {
    if (typeof array[index1] !== 'number') {
      return true;
    }
  }
}

const average = (array) => {
  if (typeValidation(array) === true) {
    return undefined;
  }

  if (array.length !== 0) {
    let sum = 0;

    for (let index2 = 0; index2 < array.length; index2 += 1) {
      sum += array[index2];
    }

    const averageValue = Math.round(sum / array.length);

    return averageValue;
  }

  return undefined;
};

module.exports = average;
