const http = require("http") // подключаем модуль http
const express = require("express") // подключаем модуль express

const app = express()
const port = 3000 // порт на котором запускается сервер

app.get("/" , (req , res)=>{
    res.send("Главная страница")
})
app.get("/about" , (req , res)=>{
    res.send("О нас")
})


// const server = http.createServer((req , res)=>{ // создаем сервер
//     res.end("Hello World") // ответ клиенту когда он зайдет на наш сервер

// })

app.listen(port, ()=>{ // тут расписываем на каком порту запускается сервер
    console.log(`http://localhost:${port}`); // тут делаем уведомление для себя что сервер запущен
    
})


