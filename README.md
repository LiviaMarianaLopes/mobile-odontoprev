# 🦷 Odontoprev - Aplicativo Mobile

## 📌 Objetivo da Aplicação

O aplicativo mobile da Odontoprev foi desenvolvido para complementar a solução de gerenciamento de pacientes, oferecendo uma interface acessível e intuitiva para os usuários. O principal objetivo da aplicação é reduzir os casos de sinistros fraudulentos e não usufruídos na Odontoprev, garantindo maior segurança e confiabilidade no processo de atendimento odontológico.

O app permite o cadastro completo de pacientes, login com autenticação via API e gerenciamento das consultas (CRUD), funcionando como uma extensão prática e funcional do sistema principal.

## 👥 Equipe

Celeste Mayumi Pereira Tanaka (RM552865) – Responsável pela API em C# e desenvolvimento do modelo preditivo.

Lívia Mariana Lopes (RM552558) – Responsável pela API em Java e DevOps.

Luana Vieira Santos da Silva (RM552994) – Responsável pelo desenvolvimento do banco de dados, compliance e quality assurance do projeto.

Todas – Responsáveis pelo desenvolvimento mobile.

## 🏗️ Arquitetura da Solução

O aplicativo foi desenvolvido utilizando React Native com Expo, seguindo uma estrutura modularizada para facilitar a escalabilidade e manutenção.


## ✅ Requisitos atendidos

- Telas completas de **CRUD de Consultas**:
  - Criar consulta
  - Listar consultas do paciente
  - Desmarcar consulta
- Integração com **API em Java (backend)**.
- Utilização do **Async Storage** para armazenar o ID do paciente logado localmente, garantindo persistência e controle de sessão.

---

## 📲 Prints das Telas


## 🔑 Credenciais de Teste
Você pode utilizar as credenciais abaixo para testar o login e navegar nas funcionalidades:

Email: thiago@gmail.com

Senha: senha

## 📌 Estrutura do projeto:

📦 odontoprev-mobile <br/>
 ┣ 📂 .expo <br/>
 ┣ 📂 assets <br/>
 ┣ 📂 node_modules <br/>
 ┣ 📂 src <br/>
 ┃ ┣ 📂 components <br/>
 ┃ ┃ ┣ 📄 AgendamentoForm.js <br/>
 ┃ ┃ ┣ 📄 FormCadastroInfo.js <br/>
 ┃ ┃ ┣ 📄 FormEndereco.js <br/>
 ┃ ┃ ┗ 📄 FormLogin.js <br/>
 ┃ ┃ ┗ 📄 FormSenha.js <br/>
 ┃ ┃ ┗ 📄 HeaderHome.js <br/>
 ┃ ┃ ┣ 📄 HeaderServices.js <br/>
 ┃ ┃ ┣ 📄 HistoricoConsultas.js <br/>
 ┃ ┃ ┗ 📄 ServicesGrid.js <br/>
 ┃ ┣ 📂 pages <br/>
 ┃ ┃ ┣ 📄 TelaAgendamento.js  <br/>
 ┃ ┃ ┣ 📄 TelaCadastroEnd.js  <br/>
 ┃ ┃ ┣ 📄 TelaCadastroInfo.js <br/>
 ┃ ┃ ┣ 📄 TelaCadastroSenha.js <br/>
 ┃ ┃ ┣ 📄 TelaHistorico.js  <br/>
 ┃ ┃ ┣ 📄 TelaInicial.js <br/>
 ┃ ┃ ┗ 📄 TelaUserHome.js <br/>
 ┣ 📄 App.js <br/>
 ┣ 📄 app.json <br/>
 ┗ 📄 index.js <br/>
 ┣ 📄 package.json <br/>
 ┣ 📄 package-lock.json <br/>
 ┗ 📄 .gitignore <br/>

## 🔗 Comunicação com a API

O aplicativo realiza requisições HTTP para a API backend, utilizando fetch para interação com os endpoints.



## O aplicativo pode ser testado localmente usando Expo:

✅ Passo a passo para execução:
1️⃣ Clone o repositório:
```sh
git clone https://github.com/LiviaMarianaLopes/mobile-odontoprev.git

cd mobile-odontoprev

```
2️⃣ Instale as dependências:
```sh
npm install
```


3️⃣ Inicie o projeto com Expo:
```sh
npm start
```

O Expo Developer Tools abrirá, permitindo a execução no emulador ou dispositivo físico.
