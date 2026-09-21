const http = require("http") // подключаем модуль http

const port = 3000 // порт на котором запускается сервер

const server = http.createServer((req , res)=>{ // создаем сервер
    res.end("Hello World") // ответ клиенту когда он зайдет на наш сервер

})

server.listen(port, ()=>{ // тут расписываем на каком порту запускается сервер
    console.log(`http://localhost:${port}`); // тут делаем уведомление для себя что сервер запущен
    
})


