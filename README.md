# Social poster generator

## Lancement

```shell
cd backend/
npm install
export PUBLIC_URL=https://public-url.com
export SECRET_SALT=<random string>
npm start
```

Les images sélectionnables sont à placer dans ` /build/images`.

## Fonctionnement

Le frontend est constitué de deux parties:

- Un bloc de configuration (`<Configuration/>`)
- Un bloc d’affichage du résultat (`<Poster/>`)

Le second est utilisé pour afficher la prévisualisation ainsi que pour générer une image du résultat, nécessaire pour le partage sur les réseaux sociaux et la génération de PDF.

## Configuration

La configuration est séparée en deux fichiers présents dans `src/config`.

- `config.json` réunit tous les choix possibles dans la configuration des posters / social posts.
- `defaultBuilderConfig.json` permet de fixer des choix par défaut au chargement de la page. Ce qui est fixé dans ce fichier doit correspondre à des champs dans `config.json`.  Les noms des champs sont définis dans `src/components/Configuration/Customise.js` et dépendent du layout sélectionné.

> La configuration est un peu brute. Un mauvais formatage des données JSON peut générer un bug dans le frontend.

### Ajout d’une nouvelle configuration

Pour ajouter une nouvelle configuration possible sur un layout:

- Si nécessaire, ajouter les données constantes dans `src/config/config.json`.
- Dans `src/components/Configuration/Customise.js`, ajouter le nouveau composant de configuration en lui donnant un nom (`name`).
- Dans `src/config/defaultBuilderConfig.json`, ajouter un choix par défaut en ajoutant un champ ayant pour clé le `name` fixé et la valeur par défaut.
- Configurer le bloc d’affichage pour afficher la nouvelle donnée dans `<Poster/>`

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
