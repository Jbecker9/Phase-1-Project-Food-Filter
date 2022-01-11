document.addEventListener("DOMContentLoaded", () => {
addTitle()
addSubtitle()
addImgBar()
renderRecipes()
ingredientForm()
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

function addImgBar(){
    const ImgBarBox = document.createElement("div")
        ImgBarBox.id = "ImgBar-Box"
        document.body.append(ImgBarBox)
        // Render All Images
}

function renderRecipes(){
    fetch("http://localhost:3000/Recipes")
        .then(resp => resp.json())
        .then(data => console.log(data))
        // clean up db.json file
}

function ingredientForm(){
    const ingForm = document.createElement("form")
        ingForm.id = 'ingredient-form'
        document.body.append(ingForm)
    const ingInput = document.createElement("input")
        ingInput.id = 'ingredient-input'
        ingInput.name = "user-ingredients"
        ingInput.value = "Pack your Ingredients!"
        ingForm.appendChild(ingInput)
    const flyButton = document.createElement("button")
        flyButton.id = "fly-button"
        flyButton.innerHTML = "Let's Fly! &#9992;"
    ingForm.appendChild(flyButton)
    // add event listener for button
        // creates div for listed recipes
        // filters user listed ingredients
        // renders matching recipes
            // shows recipe image and name
            // image has event listener (click)
            // click shows selected recipe
                // recipe name
                // image
                // listed ingredients
                // button event listener (click)
                    // takes you to youtube video
}

function userRecipe(){
    const userForm = document.createElement("form")
        userForm.id = "user-form"
        userForm.style.display = 'inline-block'
        document.body.append(userForm)
    const userNameInput = document.createElement("input")
        userNameInput.id = "user-id-input"
        userNameInput.name = "user-name-input"
        userNameInput.value = "Recipe Name"
        userForm.appendChild(userNameInput)
    const userIngInput = document.createElement("input")
        userIngInput.id = "user-ing-input"
        userIngInput.name = "user-img-input"
        userIngInput.value = "Ingredients"
        userForm.appendChild(userIngInput)
    const userImgInput = document.createElement("input")
        userImgInput.id = "user-img-input"
        userImgInput.name = "user-img-input"
        userImgInput.vale = "Show off the final product (link only)"
        userForm.appendChild(userImgInput)
    const userYTInput = document.createElement("input")
        userYTInput.id = "user-YT-input"
        userYTInput.name = "user-YT-input"
        userYTInput.value = "Got an instructional video?"
        userForm.appendChild(userYTInput)
    // center form
    // post method
    // add new user object with displayed recipe
}

