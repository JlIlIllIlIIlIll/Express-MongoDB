# API Chicken

Une API pour gérer les poulets et les poulaillers, développée avec Node.js, Express, et MongoDB.

## Table des matières

1. [Fonctionnalités](#fonctionnalités)
2. [Technologies utilisées](#technologies-utilisées)
3. [Installation](#installation)
4. [Utilisation](#utilisation)
5. [Documentation API](#documentation-api)
6. [Tests](#tests)

## Fonctionnalités

- CRUD complet pour les poulets et les poulaillers.
- Possibilité d'associer un poulet à un poulailler spécifique.
- Documentation API interactive avec Swagger.
- Gestion d'erreurs robuste.

## Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) avec [Mongoose](https://mongoosejs.com/)
- [Swagger](https://swagger.io/) pour la documentation de l'API.

## Installation

1. **Prérequis** : Vous devez avoir Node.js et MongoDB installés sur votre machine.
2. Clonez ce dépôt.
3. Naviguez jusqu'au dossier du projet via la ligne de commande.
4. Installez les dépendances :
   ```bash
   npm install
   ```
5. Configurez vos variables d'environnement dans le fichier `.env`.
   ```
   MONGODB_URI=
   PORT=
   ```

## Utilisation

1. Assurez-vous que MongoDB est en cours d'exécution.
2. Démarrer le serveur avec Nodemon :
   ```bash
   npm run dev
   ```
3. L'API sera accessible à `http://localhost:3000`.

## Documentation API

Une documentation interactive est disponible grâce à Swagger à `http://localhost:3000/api-docs`.

## Tests

(TBD) Pour exécuter les tests, utilisez :

```bash
npm test
```
