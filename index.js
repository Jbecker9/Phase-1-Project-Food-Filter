document.addEventListener("DOMContentLoaded", () => {
addTitle()
})
const body = document.body

function addTitle(){
    const titleBox = document.createElement("div")
        titleBox.id = "title-box"
        titleBox.style.backgroundColor = 'deepskyblue'
        titleBox.style.border = '3px solid black'
        document.body.append(titleBox)
    const title = document.createElement("h1")
        title.id = "title"
        title.innerHTML = "<center>Food World!</center>"
        titleBox.append(title)
}
