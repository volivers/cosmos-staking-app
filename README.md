# Cosmos Staking App

> Cosmos staking desktop app built with React and Electron.

## Overview

The Cosmos Staking App calculates yearly staking rewards and
displays each stake made. It includes a brief onboarding tutorial
for first-time users.

## Install

This project was created using [CRA](https://github.com/facebook/create-react-app).
To run the code, first install all the dependencies needed with:

`npm install`

Then, you will be able to run the project executing the command:

`npm run dev`

It will launch the Electron app by default, so you can get started.

Along with the desktop app, you can also run the web version executing
both commands:

`npm electron`

`npm start`

It will open [http://localhost:3000](http://localhost:3000) (default),
so you can view the project in the browser.

## Architecture

While the `/public` folder includes the Electron configuration,
the `/src` contains all the React codebase:

```
.
├── components
│   ├── button
│   │   └── Button.jsx
│   ├── divider
│   │   └── Divider.jsx
│   ├── form
│   │   └── Form.jsx
│   ├── header
│   │   └── Header.jsx
│   ├── input
│   │   └── Input.jsx
│   ├── range
│   │   └── Range.jsx
│   ├── transaction
│   │   └── Transaction.jsx
│   ├── BaseLayout.jsx
│   └── GlobalStyle.jsx
├── constants
│   ├── staking.jsx
│   └── tutorial.jsx
├── utils
│   ├── calculations.jsx
│   └── theme.jsx
├── _app.jsx
└── index.jsx

```

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.
Please make sure to include or update tests as appropriate.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright © 2021 Vasco Oliveira