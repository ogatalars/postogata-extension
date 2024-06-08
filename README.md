# Postman Extension

Postman Extension is a Chrome extension that mimics the functionality of Postman for API testing. It allows you to send HTTP requests and view the responses directly from your browser.

## Features

- Send HTTP requests (GET, POST, PUT, DELETE)
- Add custom headers and body in JSON format
- View responses directly in the extension popup

## Requirements

- Node.js (v14 or later)
- npm (v6 or later)
- Google Chrome browser

## Tools Used

- Next.js: Framework for building React applications
- React: JavaScript library for building user interfaces
- TypeScript: Typed superset of JavaScript
- Axios: Promise-based HTTP client
- Chrome Extension APIs

## Installation

npm install 
npm run build-extension 

### Clone the Repository

```bash
git clone https://github.com/yourusername/postman-extension.git
cd postman-extension



Ótimo! Vamos criar um README detalhado para o projeto "Postman Extension". Esse README incluirá informações sobre o funcionamento da extensão, requisitos, ferramentas usadas e instruções de instalação.

README.md
markdown
Copiar código
# Postman Extension

Postman Extension is a Chrome extension that mimics the functionality of Postman for API testing. It allows you to send HTTP requests and view the responses directly from your browser.

## Features

- Send HTTP requests (GET, POST, PUT, DELETE)
- Add custom headers and body in JSON format
- View responses directly in the extension popup

## Requirements

- Node.js (v14 or later)
- npm (v6 or later)
- Google Chrome browser

## Tools Used

- Next.js: Framework for building React applications
- React: JavaScript library for building user interfaces
- TypeScript: Typed superset of JavaScript
- Axios: Promise-based HTTP client
- Chrome Extension APIs

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/postman-extension.git
cd postman-extension

postman-extension/
├── node_modules/
├── out/
│   ├── index.html
│   ├── next_assets/
│   ├── background.js
│   └── manifest.json
├── public/
│   ├── background.js
│   └── manifest.json
├── src/
│   ├── pages/
│   │   └── index.tsx
├── .gitignore
├── next.config.mjs
├── package.json
├── tsconfig.json
├── package-lock.json
├── README.md
└── rename-assets.js
└── fix-references.js
Scripts
dev: Starts the development server.
build: Builds the project.
start: Starts the production server.
build-extension: Builds and exports the project, renames assets, and fixes references.