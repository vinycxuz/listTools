# ListTools

Site com o intuito de facilitar a pesquisa de ferramentas AI.

é também um teste, foi desenvolvido inteiro com engenharia de prompt usando github copilot com gpt 4.0

Você pode pesquisar as feramentas pel descrição ou nome e é filtrado pelas seguintes características:

- Desenvolvimento
- Design, UI/UX
- Áudio e Vídeo
- Documentos

## OBSERVAÇÃO
O JSON da aplicação está na pasta frontend/utils, você pode subir o JSON par um database mongodb ou apenas importar o arquivo para o componente <Tables />

## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Mongoose
- dotenv
- cors
- helmet
- express-rate-limit

### Frontend
- React
- Vite
- TailwindCSS
- Axios

## Como Rodar a Aplicação

### Pré-requisitos
- Node.js >= 18.x
- npm ou yarn

### dotenv

PORT=3000
STRING_CONNECTION=<SUA_STRING_DE_CONEXAO_MONGODB>
API_KEY_EMAIL=<SUA_API_KEY_EMAIL>
NAMESPACE_EMAIL=<SEU_NAMESPACE_EMAIL>

##Scripts Disponíveis

## Backend
npm start: Inicia o servidor backend.
npm run server: Inicia o servidor backend com nodemon.
npm run client: Inicia o frontend usando Vite.
npm run dev: Inicia o backend e o frontend simultaneamente.

## Frontend
npm run dev: Inicia o servidor de desenvolvimento do Vite.
npm run build: Cria o build de produção.
npm run lint: Executa o linter.
npm run preview: Pré-visualiza o build de produção.
