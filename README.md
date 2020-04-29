# Social poster generator

## Initiation

```shell
npm install
export PUBLIC_URL=https://public-url.com
export SECRET_SALT=<random string>
npm start
```

Selectable images are to be placed in ` /build/images`.

## How it works

The frontend consists of two parts:

- A configuration block (`<Configuration/>`)
- A result display block (`<Poster/>`)

The display block is used to generate the preview as well as the image necessary for sharing on social networks.

## Configuration

The configuration is separated into two files found in `src/config`.

- `config.json` brings together all the possible choices in the configuration of posters / social posts.
- `defaultBuilderConfig.json` allows you to set default choices when the page loads. What is fixed in this file must correspond to fields in `config.json`. The names of the fields are defined in `src/components/Configuration/Customise.js` and depend on the layout selected.

> Improper formatting of JSON data can result a bug in the frontend.

### Adding a new configuration

To add a new configuration on a layout:

- If necessary, add the constant data to `src/config/config.json`.
- In `src/components/Configuration/Customise.js`, add the new configuration component by giving it a (`name`).
- In `src/config/defaultBuilderConfig.json`, add a default choice by adding a field with the fixed `name` and the default value as key.
- Configure the block to display the new data in `<Poster/>`

# Create-React-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Docker

For build: docker-compose -f docker-compose.builder.yml run --rm install
This will run the npm install command and download the dependencies required for the application

Please modify the included docker-compose.yml.dist for your needs.
Then docker-compose up
