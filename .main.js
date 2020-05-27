/*import axios from "axios";

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (error) {
      console.warn(error);
    }
  }
}

Api.getUserInfo("bernardogeneroso");*/

//////////////////////////

/*const name = "Camelo";
const age = 18;

const user = {
  name,
  age,
  entreprise: "RocketSeet - Tuturial",
};

console.log(user);*/

//////////////////////////

/*const name = "Camelo";
const idade = 18;

console.log(`A minha alcuna é ${name} e a minha idade é ${idade}`);*/

//////////////////////////

/*const user1 = {
  name: "Camelo",
  age: 18,
  entreprise: "RocketSeet - Tutorial2",
};

const user2 = { ...user1, entreprise: "RocketSeet - Tutorial" };

console.log(user2);*/

/*const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);*/

/*function soma(a, b, ...params) {
  return params;
}

console.log(soma(1, 3, 4, 8, 7, 6, 10, 8));*/

/*function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4, 8));*/

/*const arr = [1, 2, 3, 4];

const [a, b, ...resto] = arr;

console.log(a, b, resto);*/

/*const user = {
  name: "Camelo",
  age: 18,
  entreprise: "RockeSeeat - Tutorial",
};

const { name, ...resto } = user;

console.log(name, resto);*/

//////////////////////////

/*const username = {
  name: "Camelo",
  idade: "18",
  endereco: {
    cidade: "Tuga",
    estado: "Tugarino",
  },
};

function mostraNome({ name, idade, endereco: { cidade } }) {
  console.log(name, idade, cidade);
}

mostraNome(username);*/

//////////////////////////

/*const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());*/

//////////////////////////

/*const arr = [1, 3, 4, 5, 6];

const newArr = arr.map((item) => item * 2);

console.log(newArr);

const teste = () => ({ nome: "Camelo" });

console.log(teste());*/

//////////////////////////

/*const arr = [1, 3, 4, 5, 8, 10];

const newArray = arr.map(function (item, index) {
  return item + index;
});

console.log(newArray);

const sum = arr.reduce((total, next) => total + next);

console.log(sum);

const filter = arr.filter((item) => item % 2 === 0);

console.log(filter);

const find = arr.find((item) => item === 4);

console.log(find);*/
