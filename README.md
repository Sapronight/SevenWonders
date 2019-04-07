# TP Seven Wonders
Projet JavaScript par Mathilde AMAR et Adrien TRAN

**Bonjour et bienvenue dans le répertoire regroupant notre projet en JavaScript!**

Ce projet est inspiré du jeu de plateau Seven Wonders où chaque joueur se doit de développer sa ville. Ici, nous cherchons à simuler
divers évènements qui conduisent au développement ou non d'une ville instanciée.

Nous détaillons plus bas les différentes classes présentes dans le dossier [app](app/).

## Installation et exécution
Pour lancer la simulation, il faut exécuter [index.js](index.js).

## Classe [City](app/city.js)
Cette classe permet d'instancier une ville et d'y appliquer plusieurs actions telle que lever une armée ou la possibilité de faire du 
commerce. Elle applique les méthodes des classes [Army](app/army.js) et [Trade](trade.js).

## Classe [Army](app/army.js)
Cette classe permet de créer des troupes utilisables par la ville. Elle gère leur suppression que ce soit lorsqu'elles sont trop vieilles
ou lorsqu'elles sont mortes lors d'un combat.

## Classe [Trade](app/trade.js)
Cette classe permet de gérer le commerce pour une ville vers un marché fictif. Elle permet de créer une caravane qui récupère un stock selon les ressources de la ville pour les vendre contre des golds.


## Améliorations possibles
Les améliorations possibles à apporter à ce projet sont les suivantes : 

- Commerce vers une autre ville instanciée
- Ajout de nouveaux évènements pour army comme des temps de paix et de guerre
