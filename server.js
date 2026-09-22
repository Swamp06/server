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

app.get("/contacts" , (req , res)=>{
    res.send("Контакты")
})

app.get("/product/:id" , (req , res)=>{
    console.log(req.params.id);
    

    res.send(`Продукт id: ${req.params.id}`)
})

app.get("/phone/:numbers" , (req , res)=>{
    console.log(req.params.numbers);
    

    res.send(`Номер телефона: ${req.params.numbers}`)
})

app.post("/addproduct" , (req , res) =>{
    const {name , age } = req.body

    

} )


// const server = http.createServer((req , res)=>{ // создаем сервер
//     res.end("Hello World") // ответ клиенту когда он зайдет на наш сервер
// })

app.listen(port, ()=>{ // тут расписываем на каком порту запускается сервер
    console.log(`http://localhost:${port}`); // тут делаем уведомление для себя что сервер запущен
    
})


