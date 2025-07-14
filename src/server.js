const express = require("express")
const path = require("node:path")
const router = require("./routes")

const app = express()
const PORT = process.env.PORT || 3000

// Configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuração dos arquivos estáticos
app.use(express.static('public'))

// Configuração para ler dados da requisição
app.use(express.urlencoded({ extended: true }))

// Configuração das rotas da aplicação
app.use(router)

app.listen(PORT, () => console.log(`Servidor iniciado!\nPorta: http://localhost:${PORT}/`))

