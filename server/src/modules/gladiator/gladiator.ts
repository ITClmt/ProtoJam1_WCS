const gladiators = [
  {
    firstname: "Maximus",
    lastname: "Decimus",
    biographie:
      "Ancien général romain trahi par l'empereur, il est devenu un gladiateur légendaire.",
    genre: "Homme",
    age: 35,
    gladiatorType: "Murmillo",
    city: "Rome",
    swordSize: "85 cm",
    profilePicture: "/assets/images/maximus_decimus.webp",
    match: false,
  },
  {
    firstname: "Aelia",
    lastname: "Vittoria",
    biographie:
      "Fille d'un sénateur déchu, elle combat pour sa liberté et sa vengeance.",
    genre: "Femme",
    age: 28,
    gladiatorType: "Thraex",
    city: "Pompei",
    profilePicture: "/assets/images/aelia_vittoria.webp",
    match: true,
  },
  {
    firstname: "Spartacus",
    lastname: "Thracian",
    biographie: "Esclave rebelle devenu le symbole de la révolte contre Rome.",
    genre: "Homme",
    age: 32,
    gladiatorType: "Dimachaerus",
    city: "Thrace",
    swordSize: "75 cm",
    profilePicture: "/assets/images/spartacus_thracian.webp",
    match: false,
  },
  {
    firstname: "Cassia",
    lastname: "Aurelia",
    biographie:
      "Capturée après une guerre civile, elle s'est imposée comme une redoutable combattante.",
    genre: "Femme",
    age: 25,
    gladiatorType: "Amazon",
    city: "Carthage",
    profilePicture: "/assets/images/cassia_aurelia.webp",
    match: true,
  },
  {
    firstname: "Titus",
    lastname: "Valerius",
    biographie:
      "Soldat romain devenu gladiateur après avoir été accusé de trahison.",
    genre: "Homme",
    age: 40,
    gladiatorType: "Hoplomachus",
    city: "Alexandrie",
    swordSize: "90 cm",
    profilePicture: "/assets/images/titus_valerius.webp",
    match: true,
  },
  {
    firstname: "Livia",
    lastname: "Drusilla",
    biographie:
      "Princesse gauloise réduite en esclavage, elle combat pour restaurer l'honneur de son peuple.",
    genre: "Femme",
    age: 30,
    gladiatorType: "Secutor",
    city: "Lugdunum",
    profilePicture: "/assets/images/livia_drusilla.webp",
    match: false,
  },
  {
    firstname: "Marcus",
    lastname: "Flavius",
    biographie: "Mercenaire grec recruté dans l'arène pour divertir la foule.",
    genre: "Homme",
    age: 29,
    gladiatorType: "Retiarius",
    city: "Athènes",
    swordSize: "80 cm",
    profilePicture: "/assets/images/marcus_flavius.webp",
    match: false,
  },
  {
    firstname: "Draco",
    lastname: "Magnus",
    biographie:
      "Ancien pirate capturé et jeté dans l'arène, il se bat avec la ruse d'un marin aguerri.",
    genre: "Homme",
    age: 37,
    gladiatorType: "Dimachaerus",
    city: "Massilia",
    swordSize: "70 cm",
    profilePicture: "/images/gladiators/draco.jpg",
    match: false,
  },
  {
    firstname: "Valeria",
    lastname: "Severina",
    biographie:
      "Fille d'un légionnaire tombé au combat, elle s'entraîne depuis l'enfance pour venger sa famille.",
    genre: "Femme",
    age: 26,
    gladiatorType: "Thraex",
    city: "Syracuse",
    profilePicture: "/images/gladiators/valeria.jpg",
    match: false,
  },
  {
    firstname: "Gaius",
    lastname: "Aquilus",
    biographie:
      "Gladiateur vétéran dont la ruse et l'expérience lui permettent de survivre à chaque combat.",
    genre: "Homme",
    age: 42,
    gladiatorType: "Murmillo",
    city: "Capoue",
    swordSize: "88 cm",
    profilePicture: "/images/gladiators/gaius.jpg",
    match: true,
  },
  {
    firstname: "Nysa",
    lastname: "Thebaica",
    biographie:
      "Prêtresse égyptienne condamnée à l'arène pour s'être opposée aux autorités romaines.",
    genre: "Femme",
    age: 31,
    gladiatorType: "Secutor",
    city: "Thèbes",
    profilePicture: "/assets/images/nysa_thebaica.png",
    match: false,
  },
  {
    firstname: "Servius",
    lastname: "Brutus",
    biographie:
      "Descendant d'une lignée de généraux, il s'est rebellé contre Rome et a fini dans l'arène.",
    genre: "Homme",
    age: 34,
    gladiatorType: "Hoplomachus",
    city: "Ravenne",
    swordSize: "85 cm",
    profilePicture: "/assets/images/kevinus_pesetus.png",
    match: false,
  },
  {
    firstname: "Octavia",
    lastname: "Lucilla",
    biographie:
      "Ancienne esclave affranchie, elle s'est imposée comme l'une des guerrières les plus redoutées.",
    genre: "Femme",
    age: 27,
    gladiatorType: "Amazon",
    city: "Corduba",
    profilePicture: "/assets/images/octavia_lucilla.png",
    match: true,
  },
  {
    firstname: "Kevinus",
    lastname: "Pesetus",
    biographie:
      "Un gladiateur légendaire d'origine modeste ayant grimpé au sommet 'from scratch'. Craint dans l'arène pour sa soif de sang et sa brutalité sans égale.",
    genre: "Homme",
    age: 72,
    gladiatorType: "JavaScriptus",
    city: "C'est Ciao !",
    swordSize: "Masterclass",
    profilePicture: "/assets/images/kevinus_pesetus.png",
    match: true,
  },
];

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  res.json(gladiators);
};

export default { browse };
