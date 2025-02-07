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
    profilePicture: "/assets/images/Draco.png",
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
    profilePicture: "/assets/images/Valeria.png",
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
    profilePicture: "/assets/images/Gaius.png",
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
    profilePicture: "/assets/images/nysa_thebaica.webp",
    match: true,
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
    profilePicture: "/assets/images/servius.jpg",
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
      "Un gladiateur légendaire d'origine modeste ayant grimpé au sommet 'from scratch'.",
    genre: "Homme",
    age: 72,
    gladiatorType: "JavaScriptus",
    city: "C'est Ciao !",
    swordSize: "Masterclass",
    profilePicture: "/assets/images/kevinus_pesetus.png",
    match: true,
  },
  {
    firstname: "Lucius",
    lastname: "Varius",
    biographie:
      "Ingénieur militaire déchu, il utilise ses compétences pour créer des armes innovantes dans l'arène.",
    genre: "Homme",
    age: 33,
    gladiatorType: "Secutor",
    city: "Antium",
    swordSize: "82 cm",
    profilePicture: "/assets/images/lucius_varius.png",
    match: false,
  },
  {
    firstname: "Helena",
    lastname: "Crassus",
    biographie:
      "Aristocrate romaine tombée en disgrâce, elle combat avec la grâce et la détermination d'une guerrière.",
    genre: "Femme",
    age: 24,
    gladiatorType: "Provocatrix",
    city: "Tusculum",
    profilePicture: "/assets/images/helena_crassus.png",
    match: true,
  },
  {
    firstname: "Quintus",
    lastname: "Maro",
    biographie:
      "Poète devenu gladiateur, il trouve l'inspiration dans la violence de l'arène.",
    genre: "Homme",
    age: 36,
    gladiatorType: "Retiarius",
    city: "Verona",
    swordSize: "78 cm",
    profilePicture: "/assets/images/quintus_maro.jpg",
    match: false,
  },
  {
    firstname: "Sabina",
    lastname: "Flavia",
    biographie:
      "Gladiatrice par choix, elle combat pour prouver que les femmes sont aussi capables que les hommes au combat.",
    genre: "Femme",
    age: 29,
    gladiatorType: "Amazon",
    city: "Antioch",
    profilePicture: "/assets/images/sabina_flavia.png",
    match: true,
  },
  {
    firstname: "Decimus",
    lastname: "Corvus",
    biographie:
      "Ancien légionnaire devenu gladiateur après avoir été injustement accusé de désertion.",
    genre: "Homme",
    age: 45,
    gladiatorType: "Murmillo",
    city: "Aquileia",
    swordSize: "90 cm",
    profilePicture: "/assets/images/decimus_corvus.png",
    match: false,
  },
  {
    firstname: "Clemuscle",
    lastname: "Augustus",
    biographie:
      "Architecte romain devenu gladiateur, utilisant sa connaissance des structures pour vaincre ses adversaires.",
    genre: "Homme",
    age: 28,
    gladiatorType: "Hoplomachus",
    city: "Seattle",
    swordSize: "82 cm",
    profilePicture: "/assets/images/cmoi.jpg",
    match: true,
  },
  {
    firstname: "Theophilus",
    lastname: "Magnus",
    biographie:
      "Philosophe grec devenu gladiateur, il combat avec une stratégie calculée et une précision mathématique.",
    genre: "Homme",
    age: 31,
    gladiatorType: "Dimachaerus",
    city: "Athènes",
    swordSize: "78 cm",
    profilePicture: "/assets/images/theophile.webp",
    match: false,
  },
  {
    firstname: "Brannix",
    lastname: "Celticus",
    biographie:
      "Guerrier celte capturé lors d'une bataille, sa férocité naturelle fait de lui un combattant redoutable dans l'arène.",
    genre: "Homme",
    age: 25,
    gladiatorType: "Thraex",
    city: "Lutèce",
    swordSize: "85 cm",
    profilePicture: "/assets/images/brayan.webp",
    match: true,
  },
  {
    firstname: "Duncor",
    lastname: "Britannicus",
    biographie:
      "Chef tribal britannique qui s'est volontairement engagé comme gladiateur pour apprendre les tactiques de combat romaines.",
    genre: "Homme",
    age: 33,
    gladiatorType: "Murmillo",
    city: "Londinium",
    swordSize: "88 cm",
    profilePicture: "/assets/images/default_gladiator.jpg",
    match: false,
  },
  {
    firstname: "Julius",
    lastname: "Gallicus",
    biographie:
      "Ancien forgeron gaulois, sa connaissance des armes et son habileté à les manier font de lui un adversaire imprévisible.",
    genre: "Homme",
    age: 29,
    gladiatorType: "Secutor",
    city: "Massilia",
    swordSize: "80 cm",
    profilePicture: "/assets/images/default_gladiator.jpg",
    match: true,
  },
];

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  res.json(gladiators);
};

const read: RequestHandler = (req, res) => {
  // Vérifier si le paramètre firstname existe
  if (!req.params.firstname) {
    res.status(400).json({
      message: "Missing firstname parameter",
    });
    return;
  }

  // Normalize the search parameter to handle case-insensitivity
  const searchName = req.params.firstname.toLowerCase().trim();

  // Find gladiator with case-insensitive firstname comparison
  const gladiator = gladiators.find(
    (gladiator) => gladiator.firstname.toLowerCase().trim() === searchName,
  );

  if (!gladiator) {
    res.status(404).json({
      message: `Gladiator with name "${req.params.firstname}" not found`,
    });
    return;
  }

  res.json(gladiator);
};

export default { browse, read };
