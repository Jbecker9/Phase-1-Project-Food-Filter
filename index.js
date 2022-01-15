const imgBarBox = document.createElement("div")
document.addEventListener("DOMContentLoaded", () => {
addTitle()
addSubtitle()
fetch("http://localhost:3000/Recipes")
            .then(resp => resp.json())
            .then(recipeData => recipeData.forEach(recipe => {
                addImgBar(recipe)
            }))

createSelectedRecipe()
userRecipe()
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
        title.innerHTML = "<center>Food W&#127758;rld</center>"
        titleBox.append(title)
}

function addSubtitle(){
    const subTitleBox = document.createElement("div")
        subTitleBox.id = 'subtitle-box'
        document.body.append(subTitleBox)
    const subTitleOne = document.createElement("h2")
        subTitleOne.innerHTML = '<center>Your Ingredients, Endless Recipes!</center>'
        subTitleBox.append(subTitleOne)
}


function addImgBar(rec){
        imgBarBox.id = "ImgBar-Box"
        document.body.append(imgBarBox)
                const imgLi = document.createElement("ul")
                    imgLi.className = "img-row"
                    imgBarBox.appendChild(imgLi)
                const imgPic = document.createElement("img")
                    imgPic.src = rec.imgLink
                    const imgPicId = imgPic.id = rec.id
                    imgPic.style.width = '150px'
                    imgPic.style.height = '150px'
                    imgPic.addEventListener("click",() => {
                        const selectRec = document.getElementById("selected-recipe")
                        const selRecName = document.createElement("h2")
                            selRecName.innerHTML = rec.recipeName
                            selectRec.append(selRecName)
                        const selRecImg = document.createElement("img")
                            selRecImg.src = rec.imgLink
                            selRecImg.style.width = '500px'
                            selRecImg.style.height = '500px'
                            selectRec.append(selRecImg)
                        const recUl = document.createElement("ul")
                            let ingArray = []
                            const splitIng = rec.ingredients.split('\,')
                            ingArray = [...splitIng]
                            ingArray.forEach(ingredient => {
                                const ingLi = document.createElement("li")
                                    ingLi.innerText = ingredient
                                recUl.appendChild(ingLi)
                            })
                            selectRec.append(recUl)
                    })
                    imgLi.appendChild(imgPic)
                const imgName = document.createElement('h3')
                    imgName.innerText = rec.recipeName
                    imgLi.append(imgName)
                const deleteRec = document.createElement("h4")
                    deleteRec.innerHTML = ' DELETE '
                    deleteRec.style.color = "red"
                    imgLi.append(deleteRec)
                deleteRec.addEventListener('click', () => {
                    fetch(`http://localhost:3000/Recipes/${rec.id}`,{
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(response => response.json())
                    imgBarBox.removeChild(imgLi)
                })
            }
        // Render All Images

function createSelectedRecipe(){
    const selectedRecipe = document.createElement("div")
        selectedRecipe.id = "selected-recipe"
        document.body.append(selectedRecipe)
}

function userRecipe(){
    const userForm = document.createElement("form")
        userForm.id = "user-form"
        userForm.style.display = 'inline-block'
        document.body.append(userForm)
        const userNameInput = document.createElement("input")
        userNameInput.name = "nameInput"
        userNameInput.placeholder = "Recipe Name"
        userNameInput.value = ""
        userForm.appendChild(userNameInput)
        const userIngInput = document.createElement("input")
        userIngInput.name = "ingInput"
        userIngInput.placeholder = "Ingredients"
        userIngInput.value = ""
        userForm.appendChild(userIngInput)
        const userImgInput = document.createElement("input")
        userImgInput.name = "imgInput"
        userImgInput.placeholder = "Picture (link only)"
        userImgInput.value = ""
        userForm.appendChild(userImgInput)
        const userYTInput = document.createElement("input")
        userYTInput.name = "yTInput"
        userYTInput.placeholder = "Have a YouTube video?"
        userYTInput.value= ""
        userForm.appendChild(userYTInput)
        const submitNewRec = document.createElement("button")
        submitNewRec.innerText = "Show off your recipe!"
        userForm.appendChild(submitNewRec)
        userForm.addEventListener("submit", (e) => {
            e.preventDefault()
            postNewRecipe(e)
            // postNewRecipe(e)
        })
        // center form
        // post method
        // add new user object with displayed recipe
}

function postNewRecipe(event){
    event.preventDefault()
    let recObject = {
        recipeName: event.target.nameInput.value,
        ingredients: event.target.ingInput.value,
        imgLink: event.target.imgInput.value,
        YTLink: event.target.yTInput.value
    }
    fetch("http://localhost:3000/Recipes", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(recObject)
    })
        .then(resp => resp.json())
        .then(data => addImgBar(data))
}