

## Getting Started
A AI powred LMS

# pie-frontend

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (version 18.x or later): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **Yarn**: [Yarn Installation Guide](https://classic.yarnpkg.com/en/docs/install)
- **Git**: [Download Git](https://git-scm.com/downloads)


## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **admin** Component :...

2. **other users** Component :...
#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has just one url /... which ties to *Customers* Component



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##Deployment

- create build in local by "npm run build" . it creates .next folder
- zip .next folder in local (to upload quickly in server)
- SSH to dev server using ip address and pem file
- upload zipped file /UI folder
- unzip .next.zip in /UI
- restart server using "pm2 restart dev-app" or start server using "pm2 start npm --name "dev-app" -- start "
-
