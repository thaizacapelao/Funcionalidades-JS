// Nullish Coalescing Operator = operador para lidar ocm valores nulos

// const idade = 0;

// o valor 0, '' (string vazia), [] (arrey vazio), false, undefined, null = false, todos serão valores não válidos.
// || = ou
// ?? = É mais restritivo, vai olhar para valores que REALMENTE não são validos (Null, undefined...), neste caso o 0 será um valor real; Diferente de se utilizar o ||.

// document.body.innerText = 'sua idade é: ' + (idade ?? 'não informado' );

// Objectos:

// const user = {
//   name: 'Diego',
//   idade: 27,
//   address: {
//     street: 'Rua teste',
//     number: 176,
//   },
// };

//Desestruturação:


//function mostraIdade({ idade }) {
  //return idade;
//}

//const { address, idade: age } = user


//in = utilizado para saber se existe alguma informação dentro do objeto.

//short Syntax:

// const name = 'Diego';
// const age = 26;

// const user = {
//   name,
//   age, // O proprio javaScript ja entende name como sendo name e age como age (o nome da propriedade = nome da variável, não sendo necessário ser name: name)
// };


// Optional Chaining:

// const user = {
//   name: 'Diego',
//   age: 27,
//   address: {
//     street: 'Rua teste',
//     number: 176,
//     zip: {
//       code: '89160000',
//       city: 'Rio do sul'
//     },

//     showFullAdress() {
//       return 'ok';
//     }
//   },
// };

  // (O que significa a linha abaixo) Eu vou verificar se o endereço existe (?) => se o endereço existe eu vou mostrar => Se não (:) eu mostro o 'Não informado"
 //user.address ? user.address.street : 'Não informado'

 // ? = Existe tal informação dentro do user?
 // : se não existir traga tal mensagem

//  document.body.innerText = user.address
//       ? user.address.zip
//         ? user.address.zip.code
//         : 'Não informado'
//       : 'Não informado'

      //Transformando o seguinte código com optional Chaining:

      
      // ?. = para melhorar o códio utilizamos em cada propriedade que pode não existir 
      
      // document.body.innerText = user.address?.zip?.code ?? 'Não informado';

// const key = 'street';      

      // document.body.innerText = user.address[key]


//Métodos de Array:

const array = ['1, 2, 3, 4, 5'];


// 1º opção para se percorrer um array:

//pega cada posição do nosso array (i), é uma das formas de se percorrer um array
  // for (const i of array) {
  //     document.body.innerText += i;
  // }


// 2º opção para se percorrer um array:

// array.forEach(item => {
//   document.body.innerText += item;
// })

// 3º opção:
// no .map conseguimos fazer um retorno de dentro do map, no forEach não.

const novoArray = array.map(item => {
  return item * 2; 
})

document.body.innerText = JSON.stringify(novoArray)

  // document.body.innerText = user.address[key]