# TP 8 : Consommer une API avec Fetch et Axios dans React

Ce projet démontre comment consommer des APIs REST dans React en utilisant deux méthodes différentes : `fetch()` (API native du navigateur) et `axios` (librairie externe).

## 📋 Objectifs

- Comprendre la différence entre `fetch()` et `axios`
- Charger des données d'une API
- Afficher des listes dans React
- Gérer le chargement et les erreurs
- Structurer proprement son code

## 🚀 Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner ou télécharger le projet**

2. **Installer les dépendances**

```bash
npm install
```

Cette commande installe toutes les dépendances nécessaires, y compris :
- React
- React DOM
- Axios

## 🏃 Lancer l'application

Pour démarrer le serveur de développement :

```bash
npm start
```

L'application s'ouvrira automatiquement dans votre navigateur à l'adresse `http://localhost:3000`.

## 📁 Structure du projet

```
tp-api/
├── public/
│   └── ...
├── src/
│   ├── App.js              # Composant principal
│   ├── FetchData.js        # Composant utilisant fetch()
│   ├── AxiosData.js        # Composant utilisant axios
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## 🔍 Composants

### FetchData.js

Ce composant utilise l'API native `fetch()` pour récupérer des articles depuis l'API JSONPlaceholder.

**Fonctionnalités :**
- Récupère 10 articles depuis `https://jsonplaceholder.typicode.com/posts`
- Affiche un message de chargement pendant la requête
- Gère les erreurs réseau
- Bouton pour recharger les données

**Points clés :**
- Utilise `useState` pour gérer l'état (posts, loading, error)
- Utilise `useEffect` pour déclencher la requête au montage du composant
- Vérifie `response.ok` avant de traiter les données
- Utilise `.finally()` pour réinitialiser l'état de chargement

### AxiosData.js

Ce composant utilise la librairie `axios` pour récupérer des utilisateurs depuis l'API JSONPlaceholder.

**Fonctionnalités :**
- Récupère tous les utilisateurs depuis `https://jsonplaceholder.typicode.com/users`
- Affiche le nom, l'email et la ville de chaque utilisateur
- Affiche un message de chargement pendant la requête
- Gère les erreurs réseau
- Bouton pour recharger les données

**Points clés :**
- Utilise `axios.get()` pour faire la requête HTTP
- Les données sont directement disponibles dans `response.data`
- Syntaxe plus simple que `fetch()` pour les requêtes GET

## 🔄 Différences entre fetch() et axios

| Caractéristique | fetch() | axios |
|----------------|---------|-------|
| **Source** | API native du navigateur | Librairie externe |
| **Installation** | Aucune | `npm install axios` |
| **Réponse JSON** | `response.json()` | `response.data` (automatique) |
| **Gestion erreurs** | Vérifier `response.ok` | Gestion automatique |
| **Syntaxe** | Plus verbeuse | Plus concise |
| **Taille** | 0 KB (intégré) | ~13 KB |

## 📚 Concepts React utilisés

### useState

Gère l'état local des composants :
- `posts/users` : données récupérées de l'API
- `loading` : état de chargement (true/false)
- `error` : message d'erreur éventuel

### useEffect

Déclenche la requête HTTP au montage du composant. Le tableau de dépendances vide `[]` garantit que l'effet ne s'exécute qu'une seule fois.

### Gestion des états

1. **Chargement** : Affiche "Chargement en cours..." pendant la requête
2. **Erreur** : Affiche le message d'erreur si la requête échoue
3. **Succès** : Affiche les données récupérées

## 🎯 Exercices implémentés

Les exercices facultatifs suivants ont été implémentés :

✅ **FetchData** : Affiche 10 articles au lieu de 5  
✅ **AxiosData** : Affiche la ville (`user.address.city`) de chaque utilisateur  
✅ **Bouton recharger** : Les deux composants ont un bouton pour recharger les données

## 🌐 API utilisée

Ce projet utilise [JSONPlaceholder](https://jsonplaceholder.typicode.com/), une API REST gratuite pour tester et prototyper.

**Endpoints utilisés :**
- `https://jsonplaceholder.typicode.com/posts` - Liste des articles
- `https://jsonplaceholder.typicode.com/users` - Liste des utilisateurs

## 🛠️ Scripts disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Crée une version de production optimisée
- `npm test` - Lance les tests
- `npm run eject` - Éjecte la configuration (irréversible)

## 📝 Notes importantes

- Les données sont récupérées depuis une API externe, une connexion Internet est nécessaire
- Les données sont fictives (provenant de JSONPlaceholder)
- Le rechargement des données réinitialise l'état de chargement et les erreurs

## 🐛 Dépannage

**L'application ne démarre pas :**
- Vérifiez que Node.js est installé : `node --version`
- Supprimez `node_modules` et réinstallez : `rm -rf node_modules && npm install`

**Les données ne s'affichent pas :**
- Vérifiez votre connexion Internet
- Ouvrez la console du navigateur (F12) pour voir les erreurs éventuelles
- Vérifiez que l'API JSONPlaceholder est accessible

**Erreur "Module not found" :**
- Vérifiez que axios est installé : `npm list axios`
- Réinstallez axios si nécessaire : `npm install axios`

## 📖 Ressources

- [Documentation React](https://react.dev/)
- [Documentation fetch()](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- [Documentation axios](https://axios-http.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## 👨‍💻 Auteur

Projet créé dans le cadre du cours "Développement Front-End moderne avec React"

---

**Bon développement ! 🚀**
