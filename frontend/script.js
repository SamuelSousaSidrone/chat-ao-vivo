const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginInput = login.querySelector(".login__input")

const chat = document.querySelector(".chat")
const chatForm = chat.querySelector(".chat__form")
const chatInput = chat.querySelector(".chat__input")

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
const user = { id: "", name: "", color: "" }

let websocket

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const processMessage = ({ data }) => {
    console.log(data)
}

const handleLogin = (event) => {
    event.preventDefault()

    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    login.style.display = "none"
    chat.style.display = "flex"

    websocket = new WebSocket("ws://localhost:8080")
    websocket.onmessage = processMessage

    websocket.onopen = () => websocket.send(`Usuario: ${user.name} entrou no chat`)

}

const sendMessage = (event) => {
    event.preventDefault()
    websocket.send(chatInput.value)
}

loginForm.addEventListener("submit", handleLogin)
chatForm.addEventListener("submit", sendMessage)