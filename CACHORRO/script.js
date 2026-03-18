const dogContainer = document.getElementById("dogContainer")
const button = document.getElementById("novocachorro")
//const é uma variável que não pode ser reatribuída, ou seja, seu valor não pode ser alterado depois de definido. No entanto, se a variável for um objeto ou array, suas propriedades ou elementos podem ser modificados.

//document.getElementById é um método que retorna o elemento do documento que possui o ID especificado. No caso, estamos selecionando o elemento com o ID "dogContainer" e armazenando-o na variável dogContainer, e o elemento com o ID "novocachorro" e armazenando-o na variável button.

function loadDog() {
  fetch("https://dog.ceo/api/breeds/image/random") 
  //fetch é uma função nativa do JavaScript que permite fazer requisições HTTP para obter recursos de um servidor. Ela retorna uma promessa que resolve com a resposta da requisição. ou seja o res.
  
  
  //.then(function(res) {
  // return res.json()
  .then(res => res.json()) // serve para converter a resposta da API em um objeto JavaScript. O método json() é uma função de conveniência que analisa a resposta como JSON e retorna uma promessa que resolve com o resultado da análise. e depois de passar por isso ele vira um dado JavaScript que pode ser manipulado no código, ou seja o data.
   
  .then(data => { //data é o objeto JavaScript resultante da análise do JSON. Ele contém as informações retornadas pela API, como a URL da imagem do cachorro.
      dogContainer.innerHTML = `<img src="${data.message}" alt="Foto de cachorro">`
    //innerHTML é uma propriedade que permite acessar ou modificar o conteúdo HTML de um elemento. No caso, estamos definindo o conteúdo do dogContainer como uma imagem, onde a URL da imagem é obtida do data.message, que é a propriedade que contém a URL da imagem do cachorro retornada pela API.
   
    // o data.massage é para especificar que eu quero o o link de imagem do cachorro, pois a resposta da API tem uma estrutura onde a URL da imagem está dentro da propriedade "message". Então, ao usar data.message, estamos acessando essa URL específica para exibir a imagem do cachorro na página.

})
}

 button.addEventListener("click", loadDog)