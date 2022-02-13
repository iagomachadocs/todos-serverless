# Todos Serverless

> Aplicação serverless de uma lista de tarefas.


## 💻 Sobre

Aplicação desenvolvida como resolução do útilmo desafio do Bootcamp Ignite, na trilha de Node.js. Nela são desenvolvidos dois endpoints, que permitem a criação e a listagem de tarefas de um usuário. Seu desenvolvimento teve como objetivo o aprendizado sobre o modelo de arquitetura serverless, banco de dados DynamoDB e AWS Lambda.

## 🛠 Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- [Serverless framework](https://www.serverless.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [DynamoDB](https://aws.amazon.com/pt/dynamodb/)
- [AWS Lambda](https://aws.amazon.com/pt/lambda/)

## 🔀 Rotas da aplicação

### **POST** `/todos/{userId}`
Recebe o `id` de um usuário pelos parâmetros da rota e os seguintes campos no corpo da requisição: `title` e `deadline`, onde `deadline` é a data limite para a tarefa, e insere uma nova tarefa no banco de dados.

### **GET** `/todos/{userId}`
Recebe o `id` de um usuário pelos parâmetros da rota e retorna todas as tarefas do usuário.

## ⚙️ Como executar (Ubuntu)

- Instale o serverless framework:
  ```bash
    npm install -g serverless
  ```
- Caso não tenha o JRE (Java Runtime Engine) instalado (v6.x ou superior), instale-o:
  ```bash
    sudo apt install default-jre
  ```
- Instale o DynamoDB local:
  ```bash
    yarn dynamodb:install
  ```
- Execute o DynamoDB local:
  ```bash
    yarn dynamodb:start
  ```
- Execute a aplicação em localhost:
  ```bash
    yarn dev
  ```
- Para realizar um deploy na aws, execute:
  ```bash
    yarn deploy
  ```
## 📂 Estrutura do projeto

```
.
├── src
│   ├── functions                   # Diretório contendo as implementações das funções lambda
│   │   ├── createTodo.ts           # Função para a criação de todos
│   │   │
│   │   └── listTodos.ts            # Função para listar todos de um usuário
│   │
|   |
│   └── libs                        # Implementações compartilhadas entre as funções
|       └── dynamodbClient.ts       # Geração de um cliente do DynamoDB de acordo com o ambiente de execução
|   
│
├── package.json
├── serverless.ts                  # Arquivo de serviços serverless
└── tsconfig.json                  # Conigurações do compilador Typescript
```