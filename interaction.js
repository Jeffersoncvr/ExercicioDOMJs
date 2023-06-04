let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

const itens_section = document.getElementById("itens_section");

ITENS_LOJA.forEach(function(item) {
  const divItem = document.createElement("div");
  divItem.classList.add("item");

  const img = document.createElement("img");
  img.src = item.url_img;
  divItem.appendChild(img);

  const nome = document.createElement("h1");
  nome.textContent = item.nome;
  divItem.appendChild(nome);
  nome.id= "nome";

  const preco = document.createElement("p");
  preco.innerHTML = "<strong>Preço: R$ </strong> " + item.preco.toFixed(2);
  divItem.appendChild(preco);

  const paragrafo= document.createElement("p");
  paragrafo.innerHTML = "<strong>Descrição </strong> <br>";
  divItem.appendChild(paragrafo);

  const descricao = document.createElement("p");
  descricao.textContent = item.descricao;
  divItem.appendChild(descricao);
  descricao.id= "descricao";

  itens_section.appendChild(divItem);
});
