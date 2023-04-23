import './styles/style.scss'
// // при обьявлении переменной, следующее слово с большой буквы или через "-"
// // const maxNumberNextNextNext=123;
// // const maxTextNextNextNext="123";
// // alert(maxTextNextNextNext);
// // Плохое поведение - обьявлять переменные после вызова ф-ции.
//
// //Типы данных:
// //Булевые значения: True, False.
// //"String" - в кавычах
// //Number
// //Undefined
// //Объект - практически все. (что сложно)
// // const car={
// // name:"Geely"
// // }; //в скобках записывается обьект, внутри свойство.
// const cars=[] //массив, но тоже обьект
// console.log(cars)
//
// // const user={
// //     subject: "",
// //     name: ""
// // };
// //Null
// //Symbols
// //Bigint
//
//
// const x=false;
// const y=true;
// console.log(y/x)
// console.log(5**2)
// //%-остаток от деления, **-возведение в степень
//
// console.log(+"88005553535")
//
// const z=3;
// const c=3;
// console.log(z===c,"проверка равенства");
// //== не строгое равенство
// //=== срогое равенство
// //= присваивание
// let n=3;
// n=n+5;
// n+=5;
// console.log(" \t \n" - 2)
//
// Урок 2
// //function declaration
// function showMessage(){
//     console.log("Hello world");
// }
// //вызов функции
// showMessage()
// //function expression
// const showMessage=function (){
//     console.log("Hello world");
// }
// //стрелочная функция
const showMessage=()=>{
    console.log("helloworld");
};
//
// showMessage()

const contactButton=document.getElementById("contactButton");
contactButton.innerHTML="SEND";
contactButton.classList.add("contact-form__button","button-primary");
// contactButton.addEventListener("click",showMessage);
// class="contact-form__button button-primary"
const validateForm=()=>{
    const input=document.querySelector("input");
    if(input.value.length < 2){
        alert("write two");
        return false;
    }
    return true
};
