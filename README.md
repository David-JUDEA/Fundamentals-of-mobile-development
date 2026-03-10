![mobile](https://files.catbox.moe/sm3ftg.svg)

# EtnaFlix

**EtnaFlix** est une application mobile de catalogue de films développée dans le cadre du module **TIC-MOB1**. Elle permet aux utilisateurs de parcourir les films populaires en utilisant les données de l'API **The Movie Database (TMDB)**.

## Fonctionnalités implémentées

L'application est actuellement fonctionnelle jusqu'au début de l'**Étape 5** du sujet. Voici ce qui est opérationnel :

### Authentification & Navigation

- **Écran de connexion (Login) :** Interface utilisateur permettant de simuler une connexion.
- **Navigation fluide :** Possibilité de basculer de la page de connexion vers la page d'accueil principale une fois connecté.

### Catalogue de Films

- **Récupération de données :** Connexion réussie à l'API TMDB pour récupérer les films.
- **Double Affichage :** L'utilisateur peut naviguer entre deux modes de visualisation :
  - **Vue Catalogue (Grille) :** Affiche les films sous forme de miniatures (posters) pour une vue d'ensemble rapide.
  - **Vue Liste :** Affiche une liste plus descriptive incluant des informations sommaires sur chaque film.

## Technologies utilisées

- **Langage :** [Android (Java) ou le langage utilisé]
- **API :** [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)
- **Architecture :** [MVC / MVVM selon ton code]
- **UI :** XML Layouts, Recycler View (ou ListView).

## État d'avancement (Checklist)

Ce projet suit le sujet **TIC-MOB1 - EtnaFlix**.

- [x] **Étape 1 :** Initialisation du projet et configuration de l'environnement.
- [x] **Étape 2 :** Création de l'interface de connexion (Layouts).
- [x] **Étape 3 :** Création des vues Liste et Grille (Adapters & ViewHolders).
- [x] **Étape 4 :** Connexion à l'API TMDB et récupération des données JSON.
- [~]z **Étape 5 :** Création de la page "Détails" (Navigation fonctionnelle, affichage des données en cours).

## Installation et Configuration

Pour tester le projet localement :

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/David-JUDEAz/EtnaFlix.git
    ```
2.  **Ouvrir le projet** dans Android Studio.
3.  **Clé API TMDB :**
    - Le projet nécessite une clé API valide.
    - Ajoutez votre clé dans le fichier de configuration (ex: `gradle.properties` ou une constante globale) :
    ```properties
    TMDB_API_KEY="VOTRE_CLE_ICI"
    ```
4.  **Lancer l'émulateur** ou connecter un appareil physique.

---

_Project realized for the Fundamentals of mobile development module - ETNA._
