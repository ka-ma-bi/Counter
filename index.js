
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

console.log(saveEl)

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.textContent = count
}

function save() {
    let counter = count + " - "
    saveEl.textContent += counter
    count = 0
    countEl.textContent = count

}