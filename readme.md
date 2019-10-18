# Drum Kit 🎶

*Bim bam boom* 🎶 🎵, le tout avec des couleurs. Dans le cadre de cet exercice, nous vous demandons de jouer un son particulier quand l'utiliser presse les touches visibles à l'écran. De plus, la couleur de fond change pendant un bref instant. 



![readme](./readme.gif)





Quand l'utilisateur presse une touche  : 

1. Il faut vérifier si cette touche est *connue*. 
2. SI oui, alors il faut jouer l'audio associé. Attention d'assurer une cohérence quand l'utilisateur presse une seconde fois la touche alors que l'audio précédent n'est pas encore complètement joué. 
3. De plus, il faut ajouter la classe `playing` à l'élément `.key` qu'il faudra retirer quand la transition css se termine.  Cf. [transitionend](https://developer.mozilla.org/fr/docs/Web/Events/transitionend) 



Bonus 🥳

1. Changer la couleur de fond de l'élément `body` en ajoutant la classe qui porte le nom de la touche. Ex: si l'on presse la touche  `s` alors il faut ajouter la classe `s` à l'élément `body`.
2. Permettre la même chose mais au click.





## Quelques ressources 👌

[keycode.info](http://keycode.info) 

[keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)  ⚠️  à lire ! 

[data-*](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/data-*)

[currentTime](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime)

[play()](https://developer.mozilla.org/fr/docs/Web/API/HTMLMediaElement/play)