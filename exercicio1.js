function calcularPreco(nome, preco) {
  let precoEnvio = 0;

  if ( preco > 0 && preco <= 2000) {
  precoEnvio = 300;
      const precoFinal = preco + precoEnvio;

      return `O produto ${nome} custa ${preco}. Seu custo de envio é ${precoEnvio}. Portanto, o preço final é ${precoFinal}.`;
    }

    if ( preco > 2000 && preco <= 4000) {
      precoEnvio = 450;
      const precoFinal = preco + precoEnvio;

      return `O produto ${nome} custa ${preco}. Seu custo de envio é ${precoEnvio}. Portanto, o preço final é ${precoFinal}.`;
    }

    precoEnvio = 700;
    
    const precoFinal = preco + precoEnvio;

    return `O produto ${nome} custa ${preco}. Seu custo de envio é ${precoEnvio}. Portanto, o preço final é ${precoFinal}.`;
}

console.log(calcularPreco('Macbook', 2500));
console.log(calcularPreco('Celular', 500));
console.log(calcularPreco('Playstation', 4500));