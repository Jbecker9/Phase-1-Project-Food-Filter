# Phase 1 Project: Food Filter

## Introduction

- Welcome to Food World!

- In Food World, find recipes posted from around the world. 

- Or even post your own recipe to share with the world!


## Installation

- Copy and Paste the SSH Github link to your terminal.

- in Terminal, navigate to /Phase-1-Project-Food-Filter

- In teminal, open /Phase-1-Project-Food-Filter in your text editor

- In terminal, run json-server --watch db.json

- In text editor, reveal index.html in explorer

- The page is up and running!


## Navigation: Add your recipe

- Under Add your recipe: Add your recipe name, the ingredients for the recipe, a link for a picture of the recipe, and a link for a youtube video of the recipe.

- when you submit the form through the  "show off your recipe" button, your newly submited recipe will appear in the list of recipes below the form. 

- Submitting the form will also add your input information to "http://localhost:3000/Recipes"


## Navigation: Recipes

- Here is a list of recipes available from "http://localhost:3000/Recipes"

- Each listed item contains the following child nodes: "id", "img", "h3", and "h4".

- id: the Id contains the id of the listed recipe from "http://localhost:3000/Recipes"

- img: the img element contains the imgLink value of the listed recipe from "http://localhost:3000/Recipes"

- h3: the h3 element contains the name of the listed recipe from "http://localhost:3000/Recipes"

- h4: the h4 element conatins a click event listener. This event listener deletes (PERMANENTLY) the selected recipe from the recipe list, and from "http://localhost:3000/Recipes"

## Navigation: Select a Recipe

- Simply, click on a desired recipe

- Once clicked, the desired recipe will appear with full information, inside a div element, on the top of the page.

- The div element contains the following child nodes: "h2", img, "h4", and "ul".

- h2: This element contains the recipe name from "http://localhost:3000/Recipes"

- img: This element contains the recipe image from "http://localhost:3000/Recipes"

- h4: This element contains the youtube link from "http://localhost:3000/Recipes", just copy and paste the link into another tab, and enjoy!

- ul: This Element contains the listed ingredients for the selected recipe from "http://localhost:3000/Recipes"

- Once another recipe is selected, the previous selected recipe will be removed from, ONLY, the selected div element. 

- To show only the recipes and remove the selected div element, just refresh the page.

## Conclusion

- This is intended to showcase recipes and ingredients from around the world.

- The main idea is for the user to have a simple planning app with everything listed for the user, for a streamlined process of finding something to cook. The user can also add and delete recipes.

- Once the user makes the decision of what to cook, they, then, are directed to YouTube with an instructional video of how to cook.


