let titreGalerie = document.querySelector(".galery__title");
let galerie = document.querySelector(".galery__grille");

const listeTableaux = {
    Picasso: [
        "Ressources_Graphiques/Picasso/Autoportrait_Picasso.png",
        "Ressources_Graphiques/Picasso/Demoiselles_Avignon.png",
        "Ressources_Graphiques/Picasso/Femme_qui_pleure.png",
        "Ressources_Graphiques/Picasso/guernica.png",
        "Ressources_Graphiques/Picasso/Le_Peintre_et_son_Modele.png",
        "Ressources_Graphiques/Picasso/Marie_Therese.png"
    ],

    Caillebotte: [
        "Ressources_Graphiques/Caillebotte/Jour_de_pluie_à_Paris.png",
        "Ressources_Graphiques/Caillebotte/Peintres_en_batiment.png",
        "Ressources_Graphiques/Caillebotte/Raboteurs_de_parquet.png",
        "Ressources_Graphiques/Caillebotte/Périssoires_sur_l’Yerres.png",
        "Ressources_Graphiques/Caillebotte/Autoportrait_Caillebotte.png"
    ],

    Vermeer: [
        "Ressources_Graphiques/Vermeer/fille_a_la_perle.png",
        "Ressources_Graphiques/Vermeer/La_Laitière.png",
        "Ressources_Graphiques/Vermeer/La_Liseuse_à_la_fenêtre.png"
    ],

    Kandinski: [
        "Ressources_Graphiques/Kandinski/Composition-1939.png",
        "Ressources_Graphiques/Kandinski/Composition-VI-1913.png",
        "Ressources_Graphiques/Kandinski/Jaune_rouge_bleu.png",
        "Ressources_Graphiques/Kandinski/Moscou-1916.png",
        "Ressources_Graphiques/Kandinski/Noir-et-violet-1923.png",
        "Ressources_Graphiques/Kandinski/tableau-en-bleu-1925.png"
    ],

    Monet: [
        "Ressources_Graphiques/Monet/Impression_soleil_levant-1872.png",
        "Ressources_Graphiques/Monet/La_Promenade.png",
        "Ressources_Graphiques/Monet/Le_déjeuner-1873.png",
        "Ressources_Graphiques/Monet/Les_Coquelicots.png",
        "Ressources_Graphiques/Monet/Madame_Monet_et_Enfant-1875.png",
        "Ressources_Graphiques/Monet/Nymphéas-1916.png"
    ],

    VanGogh: [
        "Ressources_Graphiques/VanGogh/Campagne_Montagneuse-1889.jpg",
        "Ressources_Graphiques/VanGogh/La_Chambre_de_van_gogh-1889-.png",
        "Ressources_Graphiques/VanGogh/La_nuit_étoilée-1889.png",
        "Ressources_Graphiques/VanGogh/La_Sieste.png",
        "Ressources_Graphiques/VanGogh/Les_Iris-1889.png",
        "Ressources_Graphiques/VanGogh/Terrasse_café.png"
    ]
}
const titresTableaux = {
    Picasso: [
        "Autoportrait Picasso (1906)",
        "Demoiselles d'Avignon (1907)",
        "Femme qui pleure (1937)",
        "Guernica (1937)",
        "Le Peintre et son Modele (1963)",
        "Le reve (1932)"
    ],

    Caillebotte: [
        "Jour de pluie à Paris (1877)",
        "Peintres en bâtiment (1877)",
        "Les raboteurs de parquet (1875)",
        "Périssoires sur l’Yerres (1877)",
        "Le canotier au chapeau haut de forme (ou 'La partie de bateau') (1878)"
    ],

    Vermeer: [
        "La jeune fille à la perle (1665)",
        "La Laitière (1658)",
        "La Liseuse à la fenêtre (1659)"
    ],

    Kandinski: [
        "Composition (1939)",
        "Composition VI (1913)",
        "Jaune rouge bleu (1925)",
        "Moscou (1916)",
        "Noir et violet (1923)",
        "tableau en bleu (1925)"
    ],

    Monet: [
        "Impression soleil levant (1872)",
        "La Promenade (1875)",
        "Le déjeuner (1873)",
        "Les Coquelicots (1873)",
        "Madame Monet et Enfant (1875)",
        "Nymphéas (1916)"
    ],

    VanGogh: [
        "Campagne Montagneuse (1888)",
        "La Chambre de VanGogh à Arles (1889)",
        "La nuit étoilée (1889)",
        "La Sieste (1890)",
        "Les Iris (1889)",
        "Terrasse de café le soir (1888)"
    ]
}


// CHARGEMENT PAGE
const painterLink = document.querySelectorAll(".nav__link");
Array.from(painterLink).forEach((elem) => {
    elem.classList.remove("nav__link__active");
})
Picasso.classList.add("nav__link__active");

Picasso = Picasso.id;
// console.log(Picasso);

titreGalerie.innerText = "Galerie " + Picasso;

listeTableaux[Picasso].forEach((el) => {
    // console.log(el);
    let image = document.createElement("div");
    let tableau = document.createElement("img");
    // console.log(tableau);
    let titre = document.createElement("p");
    galerie.appendChild(image);
    image.setAttribute("class", "galery__elem");
    image.setAttribute("onclick", "lightBox(this)");
    image.setAttribute("data-peintre", Picasso);
    image.setAttribute("data-indx", listeTableaux[Picasso].indexOf(el));
    // console.log(image);
    image.appendChild(tableau);
    tableau.setAttribute("src", el);
    tableau.setAttribute("class", "pic");
    tableau.setAttribute("alt", titresTableaux[Picasso][listeTableaux[Picasso].indexOf(el)])
    image.appendChild(titre);
    titre.setAttribute("class", "pic__title");

    titre.innerText = titresTableaux[Picasso][listeTableaux[Picasso].indexOf(el)];
})

const galeryAnimation = document.querySelector("#galery__animation");
    galeryAnimation.classList.add("galery__anim");
    setTimeout(() => {
        galeryAnimation.classList.remove("galery__anim");
}, 1100);


// BURGER
const burger = document.querySelector(".burger");
burger.onclick = () => {
    document.querySelector(".head__nav").classList.toggle("head__nav__show");
}



// ONCLICK
const linkPeintre = (peintre) => {
    const painterLink = document.querySelectorAll(".nav__link");
    Array.from(painterLink).forEach((elem) => {
        elem.classList.remove("nav__link__active");
    })
    peintre.classList.add("nav__link__active");

    peintre = peintre.id;
    // console.log(peintre);

    const elementGalerie = document.querySelectorAll(".galery__elem");
    // console.log(elementGalerie);
    Array.from(elementGalerie).forEach((elem) => {
        galerie.removeChild(elem)
    })

    
    titreGalerie.innerText = "Galerie " + peintre;
    
    listeTableaux[peintre].forEach((el) => {
        // console.log(el);
        let image = document.createElement("div");
        let tableau = document.createElement("img");
        // console.log(tableau);
        let titre = document.createElement("p");
        galerie.appendChild(image);
        image.setAttribute("class", "galery__elem");
        image.setAttribute("onclick", "lightBox(this)");
        image.setAttribute("data-peintre", peintre);
        image.setAttribute("data-indx", listeTableaux[peintre].indexOf(el));
        // console.log(image);
        image.appendChild(tableau);
        tableau.setAttribute("src", el);
        tableau.setAttribute("class", "pic");
        tableau.setAttribute("alt", titresTableaux[peintre][listeTableaux[peintre].indexOf(el)]);
        image.appendChild(titre);
        titre.setAttribute("class", "pic__title");
        
        titre.innerText = titresTableaux[peintre][listeTableaux[peintre].indexOf(el)];
    })

    const galeryAnimation = document.querySelector("#galery__animation");
    galeryAnimation.classList.add("galery__anim");
    setTimeout(() => {
        galeryAnimation.classList.remove("galery__anim");
    }, 1100);
}

// LIGHTBOX
const container = document.querySelector(".container");
const lightboxTitle = document.querySelector("#lightTitle");
const largePic = document.querySelector("#largepic");

const lightBox = (lightboxPic) => {
    
    document.querySelector(".lightbox").classList.add("lightbox__visible");
    container.classList.add("blur");
    let attrb = lightboxPic.getAttribute("data-peintre");
    let index = lightboxPic.getAttribute("data-indx");
    
    largePic.src = listeTableaux[attrb][index];
    lightboxTitle.innerText = titresTableaux[attrb][index];
    largePic.onclick = () => {
        largePic.classList.toggle("lightbox__largepic__zoom");
    }
    
    const next = document.querySelector("#chevron__right");
    next.addEventListener("click", function() {
        index++;
        if(index == listeTableaux[attrb].length){
            index = 0;
        }
        largePic.src = listeTableaux[attrb][index];
        lightboxTitle.innerText = titresTableaux[attrb][index];
        largePic.classList.remove("lightbox__largepic__zoom");
        // console.log(index);
    })
    
    const previous = document.querySelector("#chevron__left");
    previous.addEventListener("click", function() {
        index--;
        if(index < 0){
            index = listeTableaux[attrb].length - 1;
        }
        largePic.src = listeTableaux[attrb][index];
        lightboxTitle.innerText = titresTableaux[attrb][index];
        largePic.classList.remove("lightbox__largepic__zoom");
        // console.log(index);
    })

    const lightClose = document.querySelector(".lightbox");
    lightClose.onclick = (close) => {
        if(!close.target.matches("#largepic") && !close.target.matches("#chevron__right") && !close.target.matches("#chevron__left") && !close.target.matches("#lightTitle")){
            document.querySelector(".lightbox").classList.remove("lightbox__visible");
            largePic.classList.remove("lightbox__largepic__zoom");
            container.classList.remove("blur");
            index = undefined;
        }
    }
}