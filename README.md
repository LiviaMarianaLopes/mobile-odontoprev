# 🦷 Odontoprev - Aplicativo Mobile

## 📌 Objetivo da Aplicação

O aplicativo mobile da Odontoprev foi desenvolvido para complementar a solução de gerenciamento de pacientes, oferecendo uma interface acessível e intuitiva para os usuários. O principal objetivo da aplicação é reduzir os casos de sinistros fraudulentos e não usufruídos na Odontoprev, garantindo maior segurança e confiabilidade no processo de atendimento odontológico.

Atualmente, o aplicativo permite o cadastro e login de pacientes, mas a solução como um todo busca implementar um modelo preditivo que analisa padrões suspeitos, além de funcionalidades que reforçam a segurança, como reconhecimento facial para autenticação antes e após as consultas. Dessa forma, o sistema contribui para a redução de fraudes, promovendo um ambiente mais seguro para pacientes e profissionais.
## 👥 Equipe

Celeste Mayumi Pereira Tanaka (RM552865) – Responsável pela API em C# e desenvolvimento do modelo preditivo.

Lívia Mariana Lopes (RM552558) – Responsável pela API em Java e DevOps.

Luana Vieira Santos da Silva (RM552994) – Responsável pelo desenvolvimento do banco de dados, compliance e quality assurance do projeto.

Todas – Responsáveis pelo desenvolvimento mobile.

## 🏗️ Arquitetura da Solução

O aplicativo foi desenvolvido utilizando React Native com Expo, seguindo uma estrutura modularizada para facilitar a escalabilidade e manutenção.

## 📌 Estrutura do projeto:

📦 odontoprev-mobile <br/>
 ┣ 📂 .expo <br/>
 ┣ 📂 assets <br/>
 ┣ 📂 node_modules <br/>
 ┣ 📂 src <br/>
 ┃ ┣ 📂 components <br/>
 ┃ ┃ ┣ 📄 FormCadastroInfo.js <br/>
 ┃ ┃ ┣ 📄 FormEndereco.js <br/>
 ┃ ┃ ┗ 📄 FormLogin.js <br/>
 ┃ ┃ ┗ 📄 FormSenha.js <br/>
 ┃ ┃ ┗ 📄 HeaderHome.js <br/>
 ┃ ┃ ┗ 📄 ServicesGrid.js <br/>
 ┃ ┣ 📂 pages <br/>
 ┃ ┃ ┣ 📄 TelaCadastroEnd.js  <br/>
 ┃ ┃ ┣ 📄 TelaCadastroInfo.js <br/>
 ┃ ┃ ┣ 📄 TelaCadastroSenha.js <br/>
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
