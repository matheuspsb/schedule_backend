# Schedule - Guia de Execução

Bem-vindo ao projeto Schedule! Este guia irá levá-lo através dos passos necessários para configurar e iniciar o projeto.

Esse sistema permite salvar, buscar, editar e excluir dados.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

## Passo a Passo para Execução do Projeto

### 1. Clone o repositório

Para clonar o repositório usando HTTPS, execute o seguinte comando no terminal:

```bash
git clone https://github.com/matheuspsb/schedule_backend.git
```

Se você preferir usar SSH, execute este comando:

```bash
git clone git@github.com:matheuspsb/schedule_backend.git
```

### 2. Instalar Dependências

Após clonar o repositório em sua máquina local. No terminal, navegue até o diretório do projeto e execute o comando abaixo para instalar todas as dependências necessárias:

```bash
yarn install
```

### 3. Configurar o ENV

Em seguida, você precisa configurar o arquivo env. Crie um arquivo .env na raiz do projeto e adicione a URL da API conforme mostrado no arquivo env.example.

- Abra o arquivo env.example para ver o formato esperado:

```bash
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
DB_NAME_LOG=
PORT=
IS_DEVELOPMENT=
```
- Crie um novo arquivo .env na raiz do projeto e adicione os dados do banco

```bash
DB_HOST=sql.freedb.tech
DB_USER=freedb_matheus
DB_PASS=kHp6jqNHntFdXx?
DB_NAME=freedb_shedule_officecom
DB_NAME_LOG=freedb_shedule_officecom
PORT=3306
IS_DEVELOPMENT=true
```

### 4. Iniciar o Projeto

Com todas as dependências instaladas e o env configurado, agora você pode iniciar o projeto com o Yarn. Execute o comando abaixo no terminal:

```bash
yarn start:dev
```
