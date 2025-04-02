const minus = () => {
    let son = document.getElementById("son");
    son = +son.textContent
    natija = son - 1
    document.getElementById('son').textContent = natija
}

const plus = () => {
    let son = document.getElementById("son");
    son = +son.textContent
    natija = son + 1
    document.getElementById('son').textContent = natija
}
const nolga = () => {
    document.getElementById('son').textContent = 0
}

let jav = document.querySelector("/javob");
jav = is
jav.style.display = "none";