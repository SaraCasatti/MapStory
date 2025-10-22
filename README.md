# MapStory

## Descrição
**MapStory** é um projeto que combina um backend e um frontend para visualização e gerenciamento de histórias geográficas em um mapa interativo.  
Permite criar, editar e explorar narrativas vinculadas a pontos/rotas no mapa.

---

##  Pré-requisitos
Antes de começar, verifique se você tem instalado:
- Node.js (versão 14 ou superior)
- npm ou yarn
- MySQL ou MariaDB (ou outro banco compatível)
- Git

---

##  Instalação (resumido)
1. Clone o repositório:
```bash
git clone https://github.com/SaraCasatti/MapStory.git
cd MapStory
```

2. Configure o banco de dados:
- Importe o arquivo `pji_banco.sql` que está na raiz do projeto para o seu banco.
- Ajuste as credenciais de conexão no backend.

4. Backend — instalar dependências e rodar:
```bash
cd backend
npm install
node index.js
```
5. Frontend — instalar dependências e rodar:
```bash
cd ../frontend/frontend
npm install
npm run dev
```
