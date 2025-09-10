## 📂 Encurtador de URL

Aplicativo desenvolvido para fins de praticar o conhecimento, com a proposta de gerar links curtos para links longos.

## Funcionalidades

- Responsivo
- Gerar links curtos


## Implantação

Para fazer a implementação desse projeto basta executar as seguintes instruções.

* **Pré-requisitos**: Docker (docker compose), NPM, PHP, Composer

* Clone o projeto

```bash
  git clone https://github.com/caiofelipexd1/encurtador-de-url
```

* Entre no diretório do projeto

```bash
  cd encurtador-de-url
```

* Na pasta **backend** faça uma cópia do arquivo .env-example e renomeie para .env
```bash
  sudo cp .env-example .env
```

* Execute o comando de instalação dos modulos.
```bash
  composer install && php artisan key:generate
```

* Volte para a raiz do projeto e acesse a pasta **frontend**.
```bash
  cd ..
```
* Execute o comando de instalação dos modulos e compile o projeto.
```bash
  npm install && npm run build
```

* Volte para a raiz do projeto e suba os containers.
```bash
  sudo docker compose up --build
```

* Abra seu navegador e acesse a URL (ou apenas segure ctrl e click no link): http://localhost:3000


## Stack utilizada

**Front-end:** NextJS (https://nextjs.org/), TailwindCSS (https://tailwindcss.com/docs/installation/framework-guides)

**Back-end:** PHP (https://www.php.net/), Laravel (https://laravel.com/)

