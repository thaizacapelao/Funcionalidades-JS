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

const array = [1, 2, 3, 4, 5, 'teste'];

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
//1 .map = significa percorrer o array
// no .map conseguimos fazer um retorno de dentro do map, no forEach não.
// O map será utilizado para quando eu quero transformar meu array em outro informação, em outro array (por exemplo: condicionais)

// const novoArray = array.map(item => {
//   if (item % 2 === 0 ) {
//     return item * 10;
//   } 

//   return item;
// })

// Metodos: map(), filter(), every(), some(), find(), findIndex(), reduce():

//2. filter():
//.filter = filtrando os itens dentro do array

// === igual
// !== diferente
// se for true ele vai conter no novo array, se for false, não vai, dependendo do valor que colocarmos.

// const novoArray = array
//   .filter(item => item % 2 !== 0)
//   .map(item => item * 10)

//3. every() = Ele vai retornar um true, caso TODOS os itens satisfazem a uma determinada condição.
// Ele vai retornar true ou false caso todos os itens (every) do array forem numeros (true) se não (false).

// const todosItensSãoNumeros = array.every(item => typeof item === 'number');

//4. some():
// Ele não verifica se TODOS os itens satisfazem a condição que colocarmos, mas sim se PELO MENOS UM deles satisfazem.

// const peloMenosUmItemNaoEUmNumero = array.some(item => {
//     return typeof item !== 'number';
// })

//5. find():
// Serve para encontrar UM item dentro desse array.
// findIndex() retorna a posição 2 no array, que seria 1 (porque antes do 1 é 0, o array começa no 0)

// const par = array.find(item => item % 2 === 0)

//6. reduce(): Reduzir meu Array a algo.
// Essa variável esta fazendo a soma dos valores

const soma = array.reduce((acc, item) => {
    return acc + item 
}, 0)

// o 0 zera o valor inicial. (podemos trocar esse valor, é independente e não necessariamente necessita ser 0)
// O Objeto que estamos criando que é = acc (accumulator)

document.body.innerText = JSON.stringify(soma)

  // document.body.innerText = user.address[key]