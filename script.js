function calculadora(num1, num2, operacao) {
  if (operacao == 1) {
    return num1 + num2;
  } else if (operacao == 2) {
    return num1 - num2;
  } else if (operacao == 3) {
    return num1 * num2;
  } else if (operacao == 4) {
    return num1 / num2;
  } else {
    return 0;
  }
}

// 1. Teste para confirmar se a função faz a conta correta (Soma)
console.log(calculadora(10, 5, 1)); 

// 2. Teste para conferir o "else" (Caso a operação não exista)
console.log(calculadora(10, 5, 9));