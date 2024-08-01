const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginInput = login.querySelector(".login__input")

const colors = [
    "DeepSkyBlue",
    "Turquoise",
    "CadetBlue",
    "SpringGreen",
    "GreenYellow",
    "Goldenrod",
    "SaddleBrown",
    "Chocolate",
    "DarkOrchid",
    "DeepPink",
    "Crimson",
    "DarkRed",
    "Salmon",
    "Gold"
]

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const user = { id: "", name: "", color: "" }

const handleSubmit = (event) => {
    event.preventDefault()
    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()
    console.log(user)
}

loginForm.addEventListener("submit", handleSubmit)