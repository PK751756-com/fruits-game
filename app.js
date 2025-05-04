const user_input = document.getElementById("input");
const submit = document.getElementById("button");
const result = document.getElementById("result")

let fruits = ["banana","mango","orange","litchi","apple"]

let index = Math.floor(Math.random() * fruits.length);
console.log(index);

function myfunction() {
  if(user_input.value == fruits[index]){
    result.innerText ="you won"
  }
  else{
    result.innerText ="you lose"
  }
}
submit.addEventListener("click",myfunction);


