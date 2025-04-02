//Dom haqida
//Sarlavhani boshqarish:
console.log(document.title);
document.title ="Natijalar"

//elementni tanlash
//id orqali:
const el = document.getElementById("foiz")
console.log(el);
console.log(el.textContent);


//name orqali:
const element = document.getElementsByName("date")
console.log(element);
console.log(element[0]);
console.log(element[0].textContent);

//class orqali
const elements = document.getElementsByClassName("button")
console.log(elements)
console.log(elements[0])
console.log(elements[0].textContent)

//tag name orqali
const ElsbyTagname = document.getElementsByTagName("button")
console.log(ElsbyTagname)
console.log(ElsbyTagname[0])
console.log(ElsbyTagname[0].textContent)

// const ElsbyQuery = document.querySelector("button")
// console.log(ElsbyQuery)
// console.log(ElsbyQuery[0])
// console.log(ElsbyQuery[0].textContent)
//o'zgartirish

//Events (Hodisalar)

const buttonclicked = () => {
    alert("Hech narsa yo'q");
}