# Equilik Prototype

Prototype mobile premium pour la réservation d'expériences équestres: balades, séances et abonnements.

## Aperçu

| Balades | Séances | Abonnements |
| --- | --- | --- |
| ![Balades](docs/screenshots/balades.png) | ![Séances](docs/screenshots/seances.png) | ![Abonnements](docs/screenshots/abonnements.png) |

## Interactions

| Choix du lieu | Calendrier | Filtres Balades | Filtres Séances | Réservation |
| --- | --- | --- | --- | --- |
| ![Choix du lieu](docs/screenshots/location-modal.png) | ![Calendrier](docs/screenshots/calendar-modal.png) | ![Filtres Balades](docs/screenshots/filter-balades.png) | ![Filtres Séances](docs/screenshots/filter-seances.png) | ![Réservation](docs/screenshots/booking-details.png) |

## Interfaces

### Balades

Interface de réservation des balades équestres avec hero cinématique, image premium intégrée au fond, choix du lieu de départ, sélection rapide de date et cartes de balades disponibles. Chaque carte affiche l'image réelle, le niveau, la durée, le nombre maximum de cavaliers et le prix.

### Séances

Interface dédiée aux séances encadrées avec les mêmes codes premium: hero immersif, calendrier horizontal, cartes de séances avec horaire, niveau, durée, coach, image de la séance et bouton Réserver. Le bouton ouvre une page de réservation dynamique correspondant à la séance choisie.

### Abonnements

Interface des formules mensuelles avec banner premium, visuel équestre de marque, cartes tarifaires, avantages inclus et FAQ. Chaque formule peut être sélectionnée et transformée en réservation via le même écran premium.

### Choix du lieu

Modale centrée avec fond flou, recherche de club ou de ville, suggestions de lieux et bouton de validation. Elle est pensée pour un vrai format mobile: compacte, lisible et immersive.

### Calendrier

Calendrier modal centré avec overlay flouté, sélection de date en mai 2024 et actions Annuler / Confirmer. Le format reste volontairement compact pour ne pas prendre trop d'espace sur l'écran mobile.

### Filtres

Deux bottom sheets premium distincts sont utilisés. Les filtres Balades sont orientés exploration, paysages, type de balade, expérience outdoor, budget et groupe. Les filtres Séances sont orientés entraînement, discipline, niveau technique, créneau horaire, coach, niveau du cheval, disponibilités et tri. Les critères appliqués filtrent réellement les cartes affichées.

### Réservation

Page de réservation premium générée dynamiquement après un clic sur Réserver ou Choisir. Elle reprend l'image de l'activité, le titre, le niveau, la durée, le coach, le prix, les détails modifiables, le nombre de participants, les informations client, les notes optionnelles, le total et le bouton de confirmation.

## Fonctionnalités

- Hero premium avec images équestres réelles et overlays cinématiques.
- Onglets Balades, Séances et Abonnements.
- Saisie interactive du lieu de départ.
- Calendrier modal centré avec fond flou.
- Filtres premium en bottom sheet avec options interactives.
- Page de réservation premium dynamique selon la balade, la séance ou l'abonnement choisi.
- Cartes de balades et séances avec images, prix et détails.
- Sélection interactive d'une formule d'abonnement.

## Lancer le projet

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
