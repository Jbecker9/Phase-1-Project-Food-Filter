document.addEventListener("DOMContentLoaded", () => {
addTitle()
})

function addTitle(){
    const titleBox = document.createElement("div")
    titleBox.id = "title-box"
    const title = document.createElement("h1")
        title.id = "title"
        title.innerText = "Food World!"
        titleBox.append(title)
}