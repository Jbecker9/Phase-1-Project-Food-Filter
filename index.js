document.addEventListener("DOMContentLoaded", () => {
addTitle()
addSubtitle()
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

function addSubtitle(){
    const subTitleBox = document.createElement("div")
        subTitleBox.id = 'subtitle-box'
        document.body.append(subTitleBox)
    const subTitle = document.createElement("h2")
        subTitle.innerHTML = '<center>Cook around the <span>world!</span> Never leave the house!</center>'
        subTitleBox.append(subTitle)
}
