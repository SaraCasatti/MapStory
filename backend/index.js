const express = require("express")
const cors = require('cors');
const app = express()


app.use(cors({
    origin: 'http://localhost:8001', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true // If you need to send cookies or authentication headers
}));

const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.use("/usuarios", require("./rotas/rotas-usuarios"))
app.use("/viagens", require("./rotas/rotas-viagens"))
app.use("/rotas", require("./rotas/rotas-rotas"))
app.use("/pontos", require("./rotas/rotas-pontos"))
app.use("/buscas", require("./rotas/rotas-buscas"))
app.use("/solicitacoes", require("./rotas/rotas-solicitacoes"))
app.use("/imagens", require("./rotas/rotas-imagens"))

//rota -- feito? -- affectedRows -- teste completo
//usuarios -- feito -- ok
//viagens -- feito -- ok
//rotas -- foito -- ok
//pontos -- feito -- ok
//buscas -- feito -- ok
//solicitacoes -- feito -- ok
//imagens -- feito -- ok

//script dos testes

//*testes de usuario - ok
//criar usuario teste1 - senha - 1 - ok
//ve se o usuario teste1 existe - ok
//loga o usuario teste  - ok
//atualiza o nome e a senha do usuario teste1 para teste0 e 123 - ok
//criar usuario t - ok
//deletar usuario t - ok
//criar usuario teste 1 - senha 111 - ok

//*testes de viagem ok - e testes de rota ok - e de pontos
//criar uma viagem chamada - ok viagem00 (viagem 0 do usuario teste 0)- ok rota00 - ponto00(nao vis)
//testa os dois gets - ok viagens - ok rotas - 
//atualiza - ok viagem - ok rotas - ponto vai para vis
//deleta - ok viagem - preisa de mais coisa para testar deletar rota - 
//criar uma viagem chamada - ok viagem10 (viagem 1 usuario 0) - ok rota10 - ponto10

//*rota ponto
//adicionar pontos na rotaDel e deletar a rotaDel
//adicionar ponto em uma rota ponto 100 na rota10
//testar o get
//tirar ponto de uma rota

//*solicitaçoes
//fazer uma solicitaçao do teste0 para o teste1 na viagem viagem10
//get solicitacao enviada
//get solicitacao recebida
//responder solicitacao negativamente
//fazer novamente a solicitacao
//responder positivamente
//criar novo usuario - teste2 - senha 222
//criar solicitacao teste1 para o teste2 na viagem10
//teste1 deleta solicitacao

//*imagens
//adicionar imagem - ponto10
//atualizar imagem
//pegar imagem do ponto 
//deletar imagem


//*buscas
// criar ponto101 (naoVis) e ponto102(vis)
//busca por pontos (naoVis) - ponto101
//busca por pontos (vis) - ponto102 e ponto100
//adicionar duas imagems uma no ponto101 e uma no ponto102
//buscar todas as imagens de uma viagem
//buscar viagem por cidade
//pega todos os pontos do usuario  do teste0 e  do teste1 - devem ser os mesmos pq estao apenas na mesma viagem


app.listen(8001)