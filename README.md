# Desafio

**Desafio** é uma solução abrangente que recebe um número inteiro e retorna o somatório de todos os valores inteiros divisíveis por 3 e por 5, que sejam inferiores ao número fornecido.

## Estrutura de Pastas:

- **src**
  - **app**
    - **controller:** Responsável pela manipulação da regra de negócio
    - **errors:** Armazena todos os erros personalizados da API.
    - **interfaceDTO:** Contém o DTO usado no projeto.
    - **middleware:** Contém todos os middlewares de erro usados na aplicação.
    - **utils:** Contém códigos reutilizáveis da aplicação.
    - **router:** Contém as rotas.
    - **index:** Código principal para inicialização do projeto.
  - **services:** Contém a lógica de negócio da aplicação.
- **tests:** Contém todos os testes da aplicação

## Instruções de Uso

Antes de tudo, instale as dependências do projeto e adicione o aquivo **.env**:

### Configuração do Arquivo **.env**

O arquivo **.env** está incluído aqui por questões didáticas. Em um projeto normal, ele seria removido.

## Instalação das Dependências

Se você não alterou as variáveis VERSION e PORT, seu projeto será executado em http://localhost:8000/. Lá, você terá uma interface básica para testar a API.

```bash
yarn
```

ou

```bash
npm install
```

### Teste

Para executar os testes:

```bash
yarn test
```

ou

```bash
npm run test
```

### Executando o Projeto com docker

Se voÇe estiver o docker e o docker-compose instalado na maquina so roda este comando abaixo:

```bash
docker-compose up -d
```

logo apos o docker vai esta rodando em localhost:8000.

### Executando o Projeto em Produção

Siga as etapas abaixo:

1. Gere o build:

```bash
yarn build
```

ou

```bash
npm run build
```

2. Após gerar o build, inicie o projeto com o comando:

```bash
yarn start
```

ou

```bash
npm start
```

logo apos isso o projeto vai esta rodando em rodando em localhost:8000.

### Executando o Projeto em Desenvolvimento

Para executar o projeto em modo de desenvolvimento:

```bash
yarn dev
```

ou

```bash
npm run dev
```

logo apos isso o projeto vai esta rodando em rodando em localhost:8000.

## Utils

### **swagger:**

Se desejar visualizar a documentação de rota, ela estará disponível em sua **localhost:{{sua porta}}/v1/desafio/documentation**. Lá mostrará todos os possíveis erros e o que é retornado nas rotas.
