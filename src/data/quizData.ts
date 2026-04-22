// Auto-generated from QuizMasterProject
export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  hint: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { id: "anc", name: "Ancient History", icon: "temple_buddhist" },
  { id: "bio", name: "Biology", icon: "biotech" },
  { id: "che", name: "Chemistry", icon: "science" },
  { id: "cla", name: "Classical Music", icon: "music_note" },
  { id: "climate", name: "Climate", icon: "eco" },
  { id: "eco", name: "Economics", icon: "trending_up" },
  { id: "folk", name: "Folk Music", icon: "queue_music" },
  { id: "gen", name: "General Knowledge", icon: "lightbulb" },
  { id: "international", name: "International Affairs", icon: "public" },
  { id: "land", name: "Landmarks", icon: "landscape" },
  { id: "med", name: "Medieval History", icon: "castle" },
  { id: "mod", name: "Modern History", icon: "history_edu" },
  { id: "mov", name: "Movies", icon: "movie" },
  { id: "national", name: "National Affairs", icon: "flag" },
  { id: "phy", name: "Physics", icon: "rocket" },
  { id: "physical", name: "Physical Geography", icon: "terrain" },
  { id: "play", name: "Plays & Theatre", icon: "theater_comedy" },
  { id: "pop", name: "Pop Music", icon: "mic" },
  { id: "tech", name: "Technology", icon: "computer" },
];

export const QUIZZES: Record<string, Question[]> = {
  "easy_anc": [
    {
      "question": "Which ancient civilization built the Great Sphinx?",
      "options": [
        "Mesopotamians",
        "Egyptians",
        "Greeks",
        "Romans"
      ],
      "correctAnswer": 1,
      "hint": "Located near the Nile"
    },
    {
      "question": "Who was the Greek god of the sea?",
      "options": [
        "Zeus",
        "Hades",
        "Poseidon",
        "Ares"
      ],
      "correctAnswer": 2,
      "hint": "He carries a trident"
    },
    {
      "question": "What was the capital of the Roman Empire?",
      "options": [
        "Athens",
        "Carthage",
        "Rome",
        "Alexandria"
      ],
      "correctAnswer": 2,
      "hint": "The Eternal City"
    },
    {
      "question": "Which ancient civilization is known for its philosophers like Socrates and Plato?",
      "options": [
        "Egypt",
        "China",
        "Greece",
        "India"
      ],
      "correctAnswer": 2,
      "hint": "Home of the Olympics"
    },
    {
      "question": "What material was used for writing in ancient Egypt?",
      "options": [
        "Paper",
        "Papyrus",
        "Parchment",
        "Clay"
      ],
      "correctAnswer": 1,
      "hint": "Made from a river reed"
    },
    {
      "question": "Who was the first emperor of China?",
      "options": [
        "Mao Zedong",
        "Qin Shi Huang",
        "Confucius",
        "Sun Yat-sen"
      ],
      "correctAnswer": 1,
      "hint": "Built the Terracotta Army"
    },
    {
      "question": "Which wonder of the ancient world was a giant statue in Rhodes?",
      "options": [
        "Lighthouse",
        "Colossus",
        "Hanging Gardens",
        "Pyramid"
      ],
      "correctAnswer": 1,
      "hint": "A massive copper statue"
    },
    {
      "question": "What was the main purpose of the Egyptian pyramids?",
      "options": [
        "Houses",
        "Grain stores",
        "Tombs",
        "Temples"
      ],
      "correctAnswer": 2,
      "hint": "Built for Pharaohs"
    },
    {
      "question": "Which civilization invented the concept of zero?",
      "options": [
        "Mayans",
        "Indians",
        "Greeks",
        "Egyptians"
      ],
      "correctAnswer": 1,
      "hint": "Ancient mathematical advancement"
    },
    {
      "question": "What was the primary language of the Roman Empire?",
      "options": [
        "Greek",
        "Latin",
        "French",
        "Italian"
      ],
      "correctAnswer": 1,
      "hint": "Foundation of Romance languages"
    }
  ],
  "medium_anc": [
    {
      "question": "The 'Code of Hammurabi' belongs to which civilization?",
      "options": [
        "Sumerian",
        "Babylonian",
        "Assyrian",
        "Hittite"
      ],
      "correctAnswer": 1,
      "hint": "Eye for an eye"
    },
    {
      "question": "Which battle saw 300 Spartans hold off a massive Persian army?",
      "options": [
        "Marathon",
        "Salamis",
        "Thermopylae",
        "Plataea"
      ],
      "correctAnswer": 2,
      "hint": "Narrow mountain pass"
    },
    {
      "question": "The 'Silk Road' connected China with which empire?",
      "options": [
        "Incan",
        "Roman",
        "Mali",
        "Aztec"
      ],
      "correctAnswer": 1,
      "hint": "Major ancient trade route"
    },
    {
      "question": "Which pharaoh was known as the 'Sun King' of Egypt?",
      "options": [
        "Tutankhamun",
        "Akhenaten",
        "Ramses II",
        "Thutmose III"
      ],
      "correctAnswer": 1,
      "hint": "Promoted monotheism"
    },
    {
      "question": "What was the name of the ancient city destroyed by Mount Vesuvius?",
      "options": [
        "Herculaneum",
        "Pompeii",
        "Ostia",
        "Naples"
      ],
      "correctAnswer": 1,
      "hint": "Preserved in ash"
    },
    {
      "question": "The Punic Wars were fought between Rome and which city?",
      "options": [
        "Sparta",
        "Carthage",
        "Troy",
        "Persia"
      ],
      "correctAnswer": 1,
      "hint": "Hannibal was their general"
    },
    {
      "question": "Who founded the Mauryan Empire in India?",
      "options": [
        "Ashoka",
        "Chandragupta",
        "Bindusara",
        "Harsha"
      ],
      "correctAnswer": 1,
      "hint": "Defeated the Nanda dynasty"
    },
    {
      "question": "Which ancient library was supposedly the largest in the world?",
      "options": [
        "Nineveh",
        "Pergamon",
        "Alexandria",
        "Athens"
      ],
      "correctAnswer": 2,
      "hint": "Lost to fire"
    },
    {
      "question": "What was the name of the Greek marketplace?",
      "options": [
        "Forum",
        "Agora",
        "Acropolis",
        "Parthenon"
      ],
      "correctAnswer": 1,
      "hint": "Center of public life"
    },
    {
      "question": "Which civilization built the city of Machu Picchu?",
      "options": [
        "Inca",
        "Aztec",
        "Maya",
        "Olmec"
      ],
      "correctAnswer": 0,
      "hint": "High in the Andes"
    },
    {
      "question": "Who was the father of Alexander the Great?",
      "options": [
        "Philip II",
        "Darius III",
        "Aristotle",
        "Leonidas"
      ],
      "correctAnswer": 0,
      "hint": "King of Macedon"
    },
    {
      "question": "The 'Epic of Gilgamesh' is from which culture?",
      "options": [
        "Egyptian",
        "Mesopotamian",
        "Greek",
        "Persian"
      ],
      "correctAnswer": 1,
      "hint": "World's oldest epic"
    },
    {
      "question": "What were Roman soldiers called?",
      "options": [
        "Knights",
        "Legionaries",
        "Hoplites",
        "Janissaries"
      ],
      "correctAnswer": 1,
      "hint": "Part of a legion"
    },
    {
      "question": "Which Chinese dynasty is famous for its bronze work?",
      "options": [
        "Shang",
        "Qin",
        "Han",
        "Ming"
      ],
      "correctAnswer": 0,
      "hint": "Early historic dynasty"
    },
    {
      "question": "The 'Rosetta Stone' helped decipher what?",
      "options": [
        "Cuneiform",
        "Hieroglyphics",
        "Sanskrit",
        "Mayan glyphs"
      ],
      "correctAnswer": 1,
      "hint": "Key to ancient Egyptian scripts"
    }
  ],
  "hard_anc": [
    {
      "question": "Which battle in 331 BCE saw Alexander the Great defeat Darius III?",
      "options": [
        "Issus",
        "Gaugamela",
        "Granicus",
        "Hydaspes"
      ],
      "correctAnswer": 1,
      "hint": "Final defeat of Persia"
    },
    {
      "question": "The 'Sea Peoples' are associated with which historical event?",
      "options": [
        "Bronze Age Collapse",
        "Fall of Rome",
        "Persian Invasion",
        "Crusades"
      ],
      "correctAnswer": 0,
      "hint": "Circa 1200 BCE"
    },
    {
      "question": "Who was the Hittite king during the Battle of Kadesh?",
      "options": [
        "Muwatalli II",
        "Suppiluliuma I",
        "Hattusili III",
        "Mursili I"
      ],
      "correctAnswer": 0,
      "hint": "Fought Ramses II"
    },
    {
      "question": "Which ancient script has never been fully deciphered?",
      "options": [
        "Linear B",
        "Indus Script",
        "Demotic",
        "Ogham"
      ],
      "correctAnswer": 1,
      "hint": "From the Harappan civilization"
    },
    {
      "question": "Who was the first female pharaoh of Egypt to rule with full authority?",
      "options": [
        "Nefertiti",
        "Cleopatra VII",
        "Hatshepsut",
        "Nefertari"
      ],
      "correctAnswer": 2,
      "hint": "Often wore a false beard"
    },
    {
      "question": "The 'Twelve Tables' were the foundation of law in which state?",
      "options": [
        "Athens",
        "Sparta",
        "Roman Republic",
        "Carthage"
      ],
      "correctAnswer": 2,
      "hint": "451-450 BCE"
    },
    {
      "question": "Which philosopher wrote 'The Republic'?",
      "options": [
        "Aristotle",
        "Plato",
        "Epicurus",
        "Zeno"
      ],
      "correctAnswer": 1,
      "hint": "Student of Socrates"
    },
    {
      "question": "The 'Venus of Willendorf' is from which era?",
      "options": [
        "Paleolithic",
        "Neolithic",
        "Bronze Age",
        "Iron Age"
      ],
      "correctAnswer": 0,
      "hint": "Upper Paleolithic statuette"
    },
    {
      "question": "Who was the main architect of the Great Pyramid of Giza?",
      "options": [
        "Imhotep",
        "Hemiunu",
        "Senenmut",
        "Khafre"
      ],
      "correctAnswer": 1,
      "hint": "Vizier to Khufu"
    },
    {
      "question": "The 'Bactria-Margiana Archaeological Complex' is found where?",
      "options": [
        "Central Asia",
        "Mesopotamia",
        "India",
        "Egypt"
      ],
      "correctAnswer": 0,
      "hint": "Oxus civilization"
    },
    {
      "question": "Which empire was ruled by the Sassanid dynasty?",
      "options": [
        "Persian",
        "Indian",
        "Chinese",
        "Greek"
      ],
      "correctAnswer": 0,
      "hint": "Pre-Islamic Iranian empire"
    },
    {
      "question": "The 'Battle of Chaeronea' established the dominance of which power?",
      "options": [
        "Thebes",
        "Macedon",
        "Sparta",
        "Athens"
      ],
      "correctAnswer": 1,
      "hint": "Victory for Philip II"
    },
    {
      "question": "Who is the author of the 'History of the Peloponnesian War'?",
      "options": [
        "Herodotus",
        "Thucydides",
        "Xenophon",
        "Polybius"
      ],
      "correctAnswer": 1,
      "hint": "Scientific historian"
    },
    {
      "question": "The 'Aksumite Empire' was located in modern-day which country?",
      "options": [
        "Egypt",
        "Ethiopia",
        "Sudan",
        "Mali"
      ],
      "correctAnswer": 1,
      "hint": "Major trading nation"
    },
    {
      "question": "Which Roman Emperor legalized Christianity with the Edict of Milan?",
      "options": [
        "Augustus",
        "Nero",
        "Constantine",
        "Diocletian"
      ],
      "correctAnswer": 2,
      "hint": "First Christian emperor"
    },
    {
      "question": "The 'Hanging Gardens' were located in which city?",
      "options": [
        "Niniveh",
        "Babylon",
        "Susa",
        "Uruk"
      ],
      "correctAnswer": 1,
      "hint": "Seven Wonders"
    },
    {
      "question": "Who was the queen of the Iceni who led a revolt against Rome?",
      "options": [
        "Boudica",
        "Zenobia",
        "Cartimandua",
        "Cleopatra"
      ],
      "correctAnswer": 0,
      "hint": "British tribal leader"
    },
    {
      "question": "The 'Terracotta Army' was buried with which ruler?",
      "options": [
        "Kublai Khan",
        "Wu Zetian",
        "Qin Shi Huang",
        "Kangxi"
      ],
      "correctAnswer": 2,
      "hint": "First emperor of unified China"
    },
    {
      "question": "Which civilization developed the 'Quipu' system of record-keeping?",
      "options": [
        "Aztec",
        "Maya",
        "Inca",
        "Nazca"
      ],
      "correctAnswer": 2,
      "hint": "Knotted strings"
    },
    {
      "question": "The 'Lion Gate' is the main entrance to which ancient city?",
      "options": [
        "Troy",
        "Mycenae",
        "Knossos",
        "Thebes"
      ],
      "correctAnswer": 1,
      "hint": "Agamemnon's capital"
    }
  ],
  "easy_bio": [
    {
      "question": "What is the powerhouse of the cell?",
      "options": [
        "Nucleus",
        "Ribosome",
        "Mitochondria",
        "Cytoplasm"
      ],
      "correctAnswer": 2,
      "hint": "Produces ATP"
    },
    {
      "question": "What do plants use to make food?",
      "options": [
        "Respiration",
        "Photosynthesis",
        "Digestion",
        "Fermentation"
      ],
      "correctAnswer": 1,
      "hint": "Uses sunlight"
    },
    {
      "question": "How many legs does an insect have?",
      "options": [
        "4",
        "6",
        "8",
        "10"
      ],
      "correctAnswer": 1,
      "hint": "Three pairs"
    },
    {
      "question": "What is the largest mammal in the world?",
      "options": [
        "Elephant",
        "Blue Whale",
        "Giraffe",
        "Hippopotamus"
      ],
      "correctAnswer": 1,
      "hint": "Lives in the ocean"
    },
    {
      "question": "Which part of the plant absorbs water?",
      "options": [
        "Leaf",
        "Stem",
        "Root",
        "Flower"
      ],
      "correctAnswer": 2,
      "hint": "Found underground"
    },
    {
      "question": "What gas do humans breathe out?",
      "options": [
        "Oxygen",
        "Nitrogen",
        "Carbon Dioxide",
        "Hydrogen"
      ],
      "correctAnswer": 2,
      "hint": "Product of respiration"
    },
    {
      "question": "What is the study of living things called?",
      "options": [
        "Geology",
        "Biology",
        "Physics",
        "Astronomy"
      ],
      "correctAnswer": 1,
      "hint": "From Greek 'bios'"
    },
    {
      "question": "Which animal is known as the king of the jungle?",
      "options": [
        "Tiger",
        "Elephant",
        "Lion",
        "Bear"
      ],
      "correctAnswer": 2,
      "hint": "Has a mane"
    },
    {
      "question": "What is the skin of a human?",
      "options": [
        "An organ",
        "A tissue",
        "A cell",
        "A bone"
      ],
      "correctAnswer": 0,
      "hint": "The largest organ"
    },
    {
      "question": "Where do fish breathe through?",
      "options": [
        "Lungs",
        "Gills",
        "Skin",
        "Nose"
      ],
      "correctAnswer": 1,
      "hint": "Extracts oxygen from water"
    }
  ],
  "medium_bio": [
    {
      "question": "What structure in the cell contains the genetic material?",
      "options": [
        "Nucleus",
        "Golgi Body",
        "Vacuole",
        "ER"
      ],
      "correctAnswer": 0,
      "hint": "The brain of the cell"
    },
    {
      "question": "What is the name of the green pigment in plants?",
      "options": [
        "Hemoglobin",
        "Chlorophyll",
        "Melanin",
        "Carotene"
      ],
      "correctAnswer": 1,
      "hint": "Essential for photosynthesis"
    },
    {
      "question": "How many chambers are in the human heart?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correctAnswer": 2,
      "hint": "Atria and ventricles"
    },
    {
      "question": "What is the process by which a caterpillar becomes a butterfly?",
      "options": [
        "Evolution",
        "Metamorphosis",
        "Mutation",
        "Selection"
      ],
      "correctAnswer": 1,
      "hint": "Major physical change"
    },
    {
      "question": "Which vitamin is produced when skin is exposed to sunlight?",
      "options": [
        "Vitamin A",
        "Vitamin B",
        "Vitamin C",
        "Vitamin D"
      ],
      "correctAnswer": 3,
      "hint": "The sunshine vitamin"
    },
    {
      "question": "What is the basic unit of life?",
      "options": [
        "Atom",
        "Molecule",
        "Cell",
        "Organ"
      ],
      "correctAnswer": 2,
      "hint": "Smallest functional unit"
    },
    {
      "question": "Which blood type is known as the universal donor?",
      "options": [
        "A",
        "B",
        "AB",
        "O negative"
      ],
      "correctAnswer": 3,
      "hint": "Can be given to anyone"
    },
    {
      "question": "What are the small pores on leaves called?",
      "options": [
        "Veins",
        "Stomata",
        "Chloroplasts",
        "Xylem"
      ],
      "correctAnswer": 1,
      "hint": "Used for gas exchange"
    },
    {
      "question": "Which organ filters blood in the human body?",
      "options": [
        "Lungs",
        "Liver",
        "Kidneys",
        "Stomach"
      ],
      "correctAnswer": 2,
      "hint": "Produces urine"
    },
    {
      "question": "What is the hard outer covering of an insect called?",
      "options": [
        "Skeleton",
        "Exoskeleton",
        "Shell",
        "Crust"
      ],
      "correctAnswer": 1,
      "hint": "Provides protection"
    },
    {
      "question": "Which hormone regulates blood sugar?",
      "options": [
        "Adrenaline",
        "Thyroxine",
        "Insulin",
        "Estrogen"
      ],
      "correctAnswer": 2,
      "hint": "Produced in the pancreas"
    },
    {
      "question": "What is the longest bone in the human body?",
      "options": [
        "Femur",
        "Humerus",
        "Tibia",
        "Spine"
      ],
      "correctAnswer": 0,
      "hint": "Thigh bone"
    },
    {
      "question": "What kind of animal is a frog?",
      "options": [
        "Reptile",
        "Mammal",
        "Amphibian",
        "Fish"
      ],
      "correctAnswer": 2,
      "hint": "Lives on land and water"
    },
    {
      "question": "What is the name of the protein that carries oxygen in the blood?",
      "options": [
        "Collagen",
        "Hemoglobin",
        "Keratin",
        "Fibrin"
      ],
      "correctAnswer": 1,
      "hint": "Found in red blood cells"
    },
    {
      "question": "Which scientist proposed the theory of evolution by natural selection?",
      "options": [
        "Einstein",
        "Newton",
        "Darwin",
        "Pasteur"
      ],
      "correctAnswer": 2,
      "hint": "Author of 'Origin of Species'"
    }
  ],
  "hard_bio": [
    {
      "question": "What is the specific name for the division of the cell nucleus?",
      "options": [
        "Cytokinesis",
        "Mitosis",
        "Meiosis",
        "Binary Fission"
      ],
      "correctAnswer": 1,
      "hint": "Produces identical daughter cells"
    },
    {
      "question": "Which nitrogenous base is NOT found in DNA?",
      "options": [
        "Adenine",
        "Cytosine",
        "Uracil",
        "Thymine"
      ],
      "correctAnswer": 2,
      "hint": "Found in RNA instead"
    },
    {
      "question": "What is the name of the cycle that produces ATP during aerobic respiration?",
      "options": [
        "Calvin Cycle",
        "Krebs Cycle",
        "Nitrogen Cycle",
        "Water Cycle"
      ],
      "correctAnswer": 1,
      "hint": "Also called the Citric Acid Cycle"
    },
    {
      "question": "Which enzyme is responsible for unwinding the DNA double helix?",
      "options": [
        "Polymerase",
        "Ligase",
        "Helicase",
        "Primase"
      ],
      "correctAnswer": 2,
      "hint": "Acts like a zipper"
    },
    {
      "question": "What is the largest part of the human brain?",
      "options": [
        "Cerebellum",
        "Cerebrum",
        "Medulla",
        "Thalamus"
      ],
      "correctAnswer": 1,
      "hint": "Responsible for high-level functions"
    },
    {
      "question": "Which plant tissue transports water and minerals upwards?",
      "options": [
        "Phloem",
        "Xylem",
        "Cambium",
        "Pith"
      ],
      "correctAnswer": 1,
      "hint": "Woody part of the stem"
    },
    {
      "question": "What is the name of the symbiotic relationship where one organism benefits and the other is harmed?",
      "options": [
        "Mutualism",
        "Commensalism",
        "Parasitism",
        "Competition"
      ],
      "correctAnswer": 2,
      "hint": "Ticks and leeches do this"
    },
    {
      "question": "How many chromosomes are in a normal human gamete?",
      "options": [
        "46",
        "23",
        "22",
        "44"
      ],
      "correctAnswer": 1,
      "hint": "Haploid number"
    },
    {
      "question": "What is the name of the gap between two neurons?",
      "options": [
        "Axon",
        "Dendrite",
        "Synapse",
        "Myelin"
      ],
      "correctAnswer": 2,
      "hint": "Chemicals cross it"
    },
    {
      "question": "Which immunoglobulin is the most abundant in the human body?",
      "options": [
        "IgA",
        "IgE",
        "IgG",
        "IgM"
      ],
      "correctAnswer": 2,
      "hint": "Main type of antibody"
    },
    {
      "question": "What is the primary function of the Golgi apparatus?",
      "options": [
        "Energy production",
        "Protein synthesis",
        "Protein packaging",
        "Waste disposal"
      ],
      "correctAnswer": 2,
      "hint": "The shipping center of the cell"
    },
    {
      "question": "Which hormone is released during the 'fight or flight' response?",
      "options": [
        "Insulin",
        "Melatonin",
        "Epinephrine",
        "Progesterone"
      ],
      "correctAnswer": 2,
      "hint": "Also called adrenaline"
    },
    {
      "question": "In genetics, what describes the physical appearance of an organism?",
      "options": [
        "Genotype",
        "Phenotype",
        "Allele",
        "Locus"
      ],
      "correctAnswer": 1,
      "hint": "Observable traits"
    },
    {
      "question": "What is the term for animals that maintain a constant body temperature?",
      "options": [
        "Ectothermic",
        "Endothermic",
        "Poikilothermic",
        "Cryothermic"
      ],
      "correctAnswer": 1,
      "hint": "Warm-blooded"
    },
    {
      "question": "Which organelle contains digestive enzymes to break down waste?",
      "options": [
        "Lysosome",
        "Ribosome",
        "Vacuole",
        "Nucleus"
      ],
      "correctAnswer": 0,
      "hint": "The cell's trash disposal"
    },
    {
      "question": "What is the name of the process by which bacteria divide?",
      "options": [
        "Meiosis",
        "Mitosis",
        "Binary Fission",
        "Splicing"
      ],
      "correctAnswer": 2,
      "hint": "Simple asexual reproduction"
    },
    {
      "question": "Which vitamin is also known as Ascorbic Acid?",
      "options": [
        "Vitamin A",
        "Vitamin B12",
        "Vitamin C",
        "Vitamin K"
      ],
      "correctAnswer": 2,
      "hint": "Found in citrus fruits"
    },
    {
      "question": "What is the name of the valve between the left atrium and left ventricle?",
      "options": [
        "Tricuspid",
        "Mitral",
        "Aortic",
        "Pulmonary"
      ],
      "correctAnswer": 1,
      "hint": "Also called bicuspid"
    },
    {
      "question": "Which layer of the skin contains the hair follicles and sweat glands?",
      "options": [
        "Epidermis",
        "Dermis",
        "Hypodermis",
        "Stratum corneum"
      ],
      "correctAnswer": 1,
      "hint": "The middle layer"
    },
    {
      "question": "What molecule is known as the 'energy currency' of the cell?",
      "options": [
        "DNA",
        "RNA",
        "ATP",
        "NADPH"
      ],
      "correctAnswer": 2,
      "hint": "Adenosine Triphosphate"
    }
  ],
  "easy_che": [
    {
      "question": "What is the chemical symbol for water?",
      "options": [
        "H2O",
        "CO2",
        "NaCl",
        "O2"
      ],
      "correctAnswer": 0,
      "hint": "Two hydrogen atoms and one oxygen"
    },
    {
      "question": "What is the center of an atom called?",
      "options": [
        "Electron",
        "Proton",
        "Nucleus",
        "Neutron"
      ],
      "correctAnswer": 2,
      "hint": "Contains protons and neutrons"
    },
    {
      "question": "Which gas do plants absorb from the atmosphere?",
      "options": [
        "Oxygen",
        "Carbon Dioxide",
        "Nitrogen",
        "Hydrogen"
      ],
      "correctAnswer": 1,
      "hint": "Essential for photosynthesis"
    },
    {
      "question": "What is the pH of pure water?",
      "options": [
        "0",
        "7",
        "10",
        "14"
      ],
      "correctAnswer": 1,
      "hint": "It is neutral"
    },
    {
      "question": "Which element is represented by the symbol O?",
      "options": [
        "Gold",
        "Oxygen",
        "Osmium",
        "Oganesson"
      ],
      "correctAnswer": 1,
      "hint": "Essential for human life"
    },
    {
      "question": "What state of matter has a definite shape and volume?",
      "options": [
        "Solid",
        "Liquid",
        "Gas",
        "Plasma"
      ],
      "correctAnswer": 0,
      "hint": "Atoms are closely packed"
    },
    {
      "question": "What is the most common gas in the Earth's atmosphere?",
      "options": [
        "Oxygen",
        "Carbon Dioxide",
        "Nitrogen",
        "Argon"
      ],
      "correctAnswer": 2,
      "hint": "About 78% of air"
    },
    {
      "question": "What is the chemical name for table salt?",
      "options": [
        "Sodium Carbonate",
        "Sodium Chloride",
        "Potassium Chloride",
        "Calcium Chloride"
      ],
      "correctAnswer": 1,
      "hint": "NaCl"
    },
    {
      "question": "Which subatomic particle has a negative charge?",
      "options": [
        "Proton",
        "Neutron",
        "Electron",
        "Positron"
      ],
      "correctAnswer": 2,
      "hint": "Orbits the nucleus"
    },
    {
      "question": "What is the lightest chemical element?",
      "options": [
        "Helium",
        "Hydrogen",
        "Lithium",
        "Carbon"
      ],
      "correctAnswer": 1,
      "hint": "Atomic number 1"
    }
  ],
  "medium_che": [
    {
      "question": "What is the atomic number of Carbon?",
      "options": [
        "6",
        "12",
        "14",
        "1"
      ],
      "correctAnswer": 0,
      "hint": "Number of protons in its nucleus"
    },
    {
      "question": "Which group of elements is known as the 'Noble Gases'?",
      "options": [
        "Group 1",
        "Group 2",
        "Group 17",
        "Group 18"
      ],
      "correctAnswer": 3,
      "hint": "They are very stable/unreactive"
    },
    {
      "question": "What type of bond involves the sharing of electrons?",
      "options": [
        "Ionic",
        "Covalent",
        "Metallic",
        "Hydrogen"
      ],
      "correctAnswer": 1,
      "hint": "Often between non-metals"
    },
    {
      "question": "Who is credited with creating the first periodic table?",
      "options": [
        "Newton",
        "Mendeleev",
        "Dalton",
        "Bohr"
      ],
      "correctAnswer": 1,
      "hint": "Russian chemist"
    },
    {
      "question": "What is the name for a substance that speeds up a chemical reaction?",
      "options": [
        "Inhibitor",
        "Catalyst",
        "Reactant",
        "Product"
      ],
      "correctAnswer": 1,
      "hint": "It isn't consumed in the reaction"
    },
    {
      "question": "What is the chemical formula for Methane?",
      "options": [
        "CH4",
        "C2H6",
        "CO2",
        "H2O"
      ],
      "correctAnswer": 0,
      "hint": "Simplest hydrocarbon"
    },
    {
      "question": "Which acid is found in lemons?",
      "options": [
        "Hydrochloric Acid",
        "Sulfuric Acid",
        "Citric Acid",
        "Acetic Acid"
      ],
      "correctAnswer": 2,
      "hint": "Gives it a sour taste"
    },
    {
      "question": "What is the name for an atom that has gained or lost electrons?",
      "options": [
        "Isotope",
        "Ion",
        "Molecule",
        "Crystal"
      ],
      "correctAnswer": 1,
      "hint": "It has an electrical charge"
    },
    {
      "question": "Which element has the symbol 'Fe'?",
      "options": [
        "Fluorine",
        "Iron",
        "Francium",
        "Fermium"
      ],
      "correctAnswer": 1,
      "hint": "From the Latin 'Ferrum'"
    },
    {
      "question": "What is the process of a liquid turning into a gas called?",
      "options": [
        "Freezing",
        "Condensation",
        "Evaporation",
        "Sublimation"
      ],
      "correctAnswer": 2,
      "hint": "Happens at the boiling point"
    },
    {
      "question": "What is the main component of natural gas?",
      "options": [
        "Ethane",
        "Propane",
        "Butane",
        "Methane"
      ],
      "correctAnswer": 3,
      "hint": "CH4"
    },
    {
      "question": "Which scale is used to measure acidity or alkalinity?",
      "options": [
        "Richter Scale",
        "Kelvin Scale",
        "pH Scale",
        "Celsius Scale"
      ],
      "correctAnswer": 2,
      "hint": "Ranges from 0 to 14"
    },
    {
      "question": "What is the chemical formula for Sulfuric Acid?",
      "options": [
        "HCl",
        "H2SO4",
        "HNO3",
        "NaOH"
      ],
      "correctAnswer": 1,
      "hint": "Highly corrosive strong mineral acid"
    },
    {
      "question": "Which element is used in pencils?",
      "options": [
        "Lead",
        "Graphite",
        "Charcoal",
        "Ink"
      ],
      "correctAnswer": 1,
      "hint": "A form of carbon"
    },
    {
      "question": "What is the term for a reaction that releases heat?",
      "options": [
        "Endothermic",
        "Exothermic",
        "Isothermal",
        "Adiabatic"
      ],
      "correctAnswer": 1,
      "hint": "Exo- means out"
    }
  ],
  "hard_che": [
    {
      "question": "What is the hybridization of carbon in benzene?",
      "options": [
        "sp",
        "sp2",
        "sp3",
        "dsp2"
      ],
      "correctAnswer": 1,
      "hint": "Planar hexagonal ring"
    },
    {
      "question": "What is the name of the law stating that volume is inversely proportional to pressure at constant temperature?",
      "options": [
        "Charles's Law",
        "Boyle's Law",
        "Gay-Lussac's Law",
        "Avogadro's Law"
      ],
      "correctAnswer": 1,
      "hint": "P1V1 = P2V2"
    },
    {
      "question": "Which element has the highest electronegativity?",
      "options": [
        "Oxygen",
        "Chlorine",
        "Fluorine",
        "Francium"
      ],
      "correctAnswer": 2,
      "hint": "Top right of the periodic table"
    },
    {
      "question": "What is the name of the functional group -COOH?",
      "options": [
        "Alcohol",
        "Aldehyde",
        "Ketone",
        "Carboxylic Acid"
      ],
      "correctAnswer": 3,
      "hint": "Organic acid"
    },
    {
      "question": "In a redox reaction, what is the term for the loss of electrons?",
      "options": [
        "Reduction",
        "Oxidation",
        "Neutralization",
        "Precipitation"
      ],
      "correctAnswer": 1,
      "hint": "OIL RIG"
    },
    {
      "question": "What describes the geometry of an SF6 molecule?",
      "options": [
        "Tetrahedral",
        "Octahedral",
        "Trigonal Bipyramidal",
        "Square Planar"
      ],
      "correctAnswer": 1,
      "hint": "Six-coordinate central atom"
    },
    {
      "question": "Who proposed that electrons orbit the nucleus in fixed energy levels?",
      "options": [
        "Rutherford",
        "Thomson",
        "Niels Bohr",
        "Heisenberg"
      ],
      "correctAnswer": 2,
      "hint": "Bohr model"
    },
    {
      "question": "What is the molar mass of Sodium Hydroxide (NaOH)?",
      "options": [
        "20 g/mol",
        "30 g/mol",
        "40 g/mol",
        "50 g/mol"
      ],
      "correctAnswer": 2,
      "hint": "Na(23) + O(16) + H(1)"
    },
    {
      "question": "Which quantum number describes the shape of an orbital?",
      "options": [
        "Principal",
        "Azimuthal",
        "Magnetic",
        "Spin"
      ],
      "correctAnswer": 1,
      "hint": "Also known as the angular momentum quantum number"
    },
    {
      "question": "What is the term for molecules with the same formula but different structures?",
      "options": [
        "Isotopes",
        "Allotropes",
        "Isomers",
        "Homologs"
      ],
      "correctAnswer": 2,
      "hint": "Shared components, different arrangement"
    },
    {
      "question": "What is the oxidation state of Chromium in K2Cr2O7?",
      "options": [
        "+3",
        "+4",
        "+5",
        "+6"
      ],
      "correctAnswer": 3,
      "hint": "Potassium Dichromate"
    },
    {
      "question": "Which isotope of carbon is used in radioactive dating?",
      "options": [
        "Carbon-12",
        "Carbon-13",
        "Carbon-14",
        "Carbon-16"
      ],
      "correctAnswer": 2,
      "hint": "Commonly used for archaeological samples"
    },
    {
      "question": "What is the name of the constant 6.022 x 10^23?",
      "options": [
        "Planck's Constant",
        "Boltzmann Constant",
        "Avogadro's Number",
        "Faraday's Constant"
      ],
      "correctAnswer": 2,
      "hint": "Number of particles in a mole"
    },
    {
      "question": "In thermodynamics, what is the measure of disorder in a system?",
      "options": [
        "Enthalpy",
        "Entropy",
        "Gibbs Free Energy",
        "Internal Energy"
      ],
      "correctAnswer": 1,
      "hint": "Symbolized by S"
    },
    {
      "question": "Which metal is used as the target in X-ray tubes for its high melting point?",
      "options": [
        "Gold",
        "Silver",
        "Tungsten",
        "Platinum"
      ],
      "correctAnswer": 2,
      "hint": "Symbol W"
    },
    {
      "question": "What is the IUPAC name for the simplest ketone?",
      "options": [
        "Propanone",
        "Ethanone",
        "Butanone",
        "Methanone"
      ],
      "correctAnswer": 0,
      "hint": "Acetone"
    },
    {
      "question": "A buffer solution resists changes in what?",
      "options": [
        "Temperature",
        "Pressure",
        "pH",
        "Volume"
      ],
      "correctAnswer": 2,
      "hint": "Mix of weak acid and its conjugate base"
    },
    {
      "question": "Which element has the electron configuration [Ar] 4s2 3d10 4p5?",
      "options": [
        "Iodine",
        "Chlorine",
        "Bromine",
        "Astatine"
      ],
      "correctAnswer": 2,
      "hint": "A halogen in period 4"
    },
    {
      "question": "What is the name of the cycle used to synthesize ammonia from nitrogen and hydrogen?",
      "options": [
        "Krebs Cycle",
        "Haber-Bosch Process",
        "Contact Process",
        "Bessemer Process"
      ],
      "correctAnswer": 1,
      "hint": "Uses iron catalyst"
    },
    {
      "question": "Which law states that the total pressure of a gas mixture is the sum of partial pressures?",
      "options": [
        "Henry's Law",
        "Graham's Law",
        "Dalton's Law",
        "Raoult's Law"
      ],
      "correctAnswer": 2,
      "hint": "Partial pressures add up"
    }
  ],
  "easy_cla": [
    {
      "question": "Which instrument has black and white keys?",
      "options": [
        "Guitar",
        "Drums",
        "Piano",
        "Violin"
      ],
      "correctAnswer": 2,
      "hint": "Often used by composers"
    },
    {
      "question": "Who is the composer of the 'Moonlight Sonata'?",
      "options": [
        "Mozart",
        "Beethoven",
        "Bach",
        "Chopin"
      ],
      "correctAnswer": 1,
      "hint": "Famous German composer who went deaf"
    },
    {
      "question": "Which is the largest instrument in the string family?",
      "options": [
        "Viola",
        "Cello",
        "Double Bass",
        "Violin"
      ],
      "correctAnswer": 2,
      "hint": "Stands on the floor"
    },
    {
      "question": "What is a group of people singing together called?",
      "options": [
        "Band",
        "Orchestra",
        "Choir",
        "Troupe"
      ],
      "correctAnswer": 2,
      "hint": "Choral music"
    },
    {
      "question": "Which brass instrument has a slide?",
      "options": [
        "Trumpet",
        "Tuba",
        "Trombone",
        "Horn"
      ],
      "correctAnswer": 2,
      "hint": "Used to change pitch"
    },
    {
      "question": "What is the speed of music called?",
      "options": [
        "Volume",
        "Pitch",
        "Tempo",
        "Tone"
      ],
      "correctAnswer": 2,
      "hint": "Italian for 'time'"
    },
    {
      "question": "How many strings does a standard violin have?",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correctAnswer": 1,
      "hint": "G, D, A, E"
    },
    {
      "question": "Who is known as the 'Red Priest'?",
      "options": [
        "Vivaldi",
        "Handel",
        "Bach",
        "Tartini"
      ],
      "correctAnswer": 0,
      "hint": "Composer of 'The Four Seasons'"
    },
    {
      "question": "Which woodwind instrument is played by blowing across a hole?",
      "options": [
        "Oboe",
        "Clarinet",
        "Flute",
        "Saxophone"
      ],
      "correctAnswer": 2,
      "hint": "Transverse instrument"
    },
    {
      "question": "What is a solo piece in an opera called?",
      "options": [
        "Duet",
        "Aria",
        "Chorus",
        "Recitative"
      ],
      "correctAnswer": 1,
      "hint": "Italian for 'air'"
    }
  ],
  "medium_cla": [
    {
      "question": "In what country was Wolfgang Amadeus Mozart born?",
      "options": [
        "Germany",
        "Austria",
        "Hungary",
        "Italy"
      ],
      "correctAnswer": 1,
      "hint": "City of Salzburg"
    },
    {
      "question": "What is the term for a musical work with four movements for an orchestra?",
      "options": [
        "Sonata",
        "Concerto",
        "Symphony",
        "Oratorio"
      ],
      "correctAnswer": 2,
      "hint": "Haydn is the 'Father' of this"
    },
    {
      "question": "Which string instrument is tuned in fifths starting from C below middle C?",
      "options": [
        "Violin",
        "Viola",
        "Cello",
        "Lute"
      ],
      "correctAnswer": 2,
      "hint": "Larger than a viola"
    },
    {
      "question": "What does 'Piano' mean in musical notation?",
      "options": [
        "Soft",
        "Loud",
        "Fast",
        "Slow"
      ],
      "correctAnswer": 0,
      "hint": "Opposite of 'Forte'"
    },
    {
      "question": "Who wrote the 'Messiah' oratorio?",
      "options": [
        "Bach",
        "Handel",
        "Vivaldi",
        "Telemann"
      ],
      "correctAnswer": 1,
      "hint": "Famous for 'Hallelujah'"
    },
    {
      "question": "Which instrument is often called the 'King of Instruments'?",
      "options": [
        "Pipe Organ",
        "Concert Grand Piano",
        "Harp",
        "Cello"
      ],
      "correctAnswer": 0,
      "hint": "Found in cathedrals"
    },
    {
      "question": "What is the highest female singing voice?",
      "options": [
        "Alto",
        "Mezzo-Soprano",
        "Soprano",
        "Contralto"
      ],
      "correctAnswer": 2,
      "hint": "Above mezzo"
    },
    {
      "question": "Who composed the ballet 'The Nutcracker'?",
      "options": [
        "Prokofiev",
        "Stravinsky",
        "Tchaikovsky",
        "Shostakovich"
      ],
      "correctAnswer": 2,
      "hint": "Russian Romantic composer"
    },
    {
      "question": "How many keys are on a standard modern piano?",
      "options": [
        "76",
        "82",
        "88",
        "94"
      ],
      "correctAnswer": 2,
      "hint": "52 white, 36 black"
    },
    {
      "question": "A 'Quartet' consists of how many performers?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correctAnswer": 2,
      "hint": "Like two pairs"
    },
    {
      "question": "What is the Italian term for 'gradually getting louder'?",
      "options": [
        "Diminuendo",
        "Crescendo",
        "Legato",
        "Staccato"
      ],
      "correctAnswer": 1,
      "hint": "Increasing volume"
    },
    {
      "question": "Which woodwind instrument uses a double reed?",
      "options": [
        "Clarinet",
        "Oboe",
        "Saxophone",
        "Recorder"
      ],
      "correctAnswer": 1,
      "hint": "NASAL tone"
    },
    {
      "question": "Who wrote the 'Brandenburg Concertos'?",
      "options": [
        "Bach",
        "Mozart",
        "Haydn",
        "Brahms"
      ],
      "correctAnswer": 0,
      "hint": "J.S. Bach"
    },
    {
      "question": "What is the name for the stick used by a conductor?",
      "options": [
        "Rod",
        "Wand",
        "Baton",
        "Staff"
      ],
      "correctAnswer": 2,
      "hint": "Used to keep time"
    },
    {
      "question": "Which era of music featured composers like Haydn and Mozart?",
      "options": [
        "Baroque",
        "Classical",
        "Romantic",
        "Modern"
      ],
      "correctAnswer": 1,
      "hint": "Followed the Baroque era"
    }
  ],
  "hard_cla": [
    {
      "question": "What is the name for the scale consisting only of half-steps?",
      "options": [
        "Major",
        "Minor",
        "Pentatonic",
        "Chromatic"
      ],
      "correctAnswer": 3,
      "hint": "12 notes in an octave"
    },
    {
      "question": "Who composed the 'Symphonie Fantastique'?",
      "options": [
        "Liszt",
        "Berlioz",
        "Wagner",
        "Mahler"
      ],
      "correctAnswer": 1,
      "hint": "Programmatic symphony"
    },
    {
      "question": "Which instrument uses a 'mute' called a plunger?",
      "options": [
        "Violin",
        "Trumpet",
        "Flute",
        "Harp"
      ],
      "correctAnswer": 1,
      "hint": "Often seen in jazz"
    },
    {
      "question": "What is the term for a short, recurring musical phrase associated with a character?",
      "options": [
        "Motif",
        "Leitmotif",
        "Coda",
        "Cadenza"
      ],
      "correctAnswer": 1,
      "hint": "Perfected by Richard Wagner"
    },
    {
      "question": "In what year did the premiere of Stravinsky's 'The Rite of Spring' cause a riot?",
      "options": [
        "1901",
        "1913",
        "1925",
        "1939"
      ],
      "correctAnswer": 1,
      "hint": "Parisian scandal"
    },
    {
      "question": "Which brass instrument is the only one in an orchestra to be played with the hand inside the bell?",
      "options": [
        "Trumpet",
        "French Horn",
        "Trombone",
        "Tuba"
      ],
      "correctAnswer": 1,
      "hint": "Used to correct pitch and tone"
    },
    {
      "question": "Who wrote the 'Goldberg Variations'?",
      "options": [
        "Handel",
        "Bach",
        "Scarlatti",
        "Couperin"
      ],
      "correctAnswer": 1,
      "hint": "Harpsichord masterpiece"
    },
    {
      "question": "What is the name for the highest register of the human male voice?",
      "options": [
        "Tenor",
        "Baritone",
        "Bass",
        "Falsetto"
      ],
      "correctAnswer": 3,
      "hint": "Beyond the normal range"
    },
    {
      "question": "Which composer is famous for his 24 'Caprices' for solo violin?",
      "options": [
        "Liszt",
        "Paganini",
        "Sarasate",
        "Kreisler"
      ],
      "correctAnswer": 1,
      "hint": "Virtuoso Italian violinist"
    },
    {
      "question": "What is the term for music written in two or more keys at the same time?",
      "options": [
        "Atonality",
        "Polytonality",
        "Modality",
        "Serialism"
      ],
      "correctAnswer": 1,
      "hint": "Used by Ives and Bartok"
    },
    {
      "question": "Who composed the opera 'Der Ring des Nibelungen'?",
      "options": [
        "Mozart",
        "Verdi",
        "Wagner",
        "Puccini"
      ],
      "correctAnswer": 2,
      "hint": "Four-opera cycle"
    },
    {
      "question": "Which instrument has 47 strings and 7 pedals?",
      "options": [
        "Harp",
        "Lute",
        "Zither",
        "Harpsichord"
      ],
      "correctAnswer": 0,
      "hint": "Orchestral string instrument"
    },
    {
      "question": "What was the name of the first oratorio, composed by Cavalieri?",
      "options": [
        "Messiah",
        "Creation",
        "Rappresentatione di Anima, et di Corpo",
        "St. Matthew Passion"
      ],
      "correctAnswer": 2,
      "hint": "1600, Rome"
    },
    {
      "question": "Which composer wrote the 'Planets' suite?",
      "options": [
        "Elgar",
        "Vaughan Williams",
        "Holst",
        "Britten"
      ],
      "correctAnswer": 2,
      "hint": "Gustav Holst"
    },
    {
      "question": "What is the name for a musical form where a theme is stated and then changed in various ways?",
      "options": [
        "Rondo",
        "Sonata",
        "Theme and Variations",
        "Fugue"
      ],
      "correctAnswer": 2,
      "hint": "A theme is transformed"
    },
    {
      "question": "Who was the teacher of both Beethoven and Mozart (briefly)?",
      "options": [
        "Bach",
        "Haydn",
        "Salieri",
        "Gluck"
      ],
      "correctAnswer": 1,
      "hint": "Papa Haydn"
    },
    {
      "question": "Which string instrument is the 'Viola da Gamba' most similar to in modern usage?",
      "options": [
        "Violin",
        "Viola",
        "Cello",
        "Double Bass"
      ],
      "correctAnswer": 2,
      "hint": "Held between the legs"
    },
    {
      "question": "What is a 'Cadenza'?",
      "options": [
        "A repeating bass line",
        "An improvised solo section",
        "A transition between keys",
        "The end of a movement"
      ],
      "correctAnswer": 1,
      "hint": "Showcase for the soloist"
    },
    {
      "question": "Which Woodwind instrument is considered the 'predecessor' to the modern Clarinet?",
      "options": [
        "Recorder",
        "Chalumeau",
        "Shawm",
        "Crumhorn"
      ],
      "correctAnswer": 1,
      "hint": "Single-reed instrument"
    },
    {
      "question": "What is the 'circle of fifths' primarily used to show?",
      "options": [
        "Tempo changes",
        "Relationship between keys",
        "Rhythmic patterns",
        "Loudness levels"
      ],
      "correctAnswer": 1,
      "hint": "Musical harmony tool"
    }
  ],
  "easy_climate": [
    {
      "question": "What is the main greenhouse gas responsible for global warming?",
      "options": [
        "Oxygen",
        "Nitrogen",
        "Carbon Dioxide",
        "Helium"
      ],
      "correctAnswer": 2,
      "hint": "Produced by burning fossil fuels"
    },
    {
      "question": "What do we call the long-term patterns of temperature and weather?",
      "options": [
        "Meteorology",
        "Season",
        "Climate",
        "Forecast"
      ],
      "correctAnswer": 2,
      "hint": "Longer than weather"
    },
    {
      "question": "Which of these is a renewable energy source?",
      "options": [
        "Coal",
        "Oil",
        "Solar Power",
        "Natural Gas"
      ],
      "correctAnswer": 2,
      "hint": "Energy from the sun"
    },
    {
      "question": "What happens to sea levels as polar ice melts?",
      "options": [
        "They go down",
        "They stay the same",
        "They rise",
        "They freeze"
      ],
      "correctAnswer": 2,
      "hint": "Ice turns to water"
    },
    {
      "question": "What is the 'Greenhouse Effect' related to?",
      "options": [
        "Plant growth",
        "Trapping heat",
        "Building houses",
        "Gardening"
      ],
      "correctAnswer": 1,
      "hint": "Like a glass roof"
    },
    {
      "question": "Which ocean habitat is most affected by warming and acidifying waters?",
      "options": [
        "Kelp forests",
        "Coral Reefs",
        "Abyssal plain",
        "Estuaries"
      ],
      "correctAnswer": 1,
      "hint": "Home to many fish"
    },
    {
      "question": "What can individuals do to reduce their carbon footprint?",
      "options": [
        "Recycle",
        "Use more light",
        "Drive more",
        "Waste food"
      ],
      "correctAnswer": 0,
      "hint": "Reducing waste"
    },
    {
      "question": "What is the name for the melting of a layer of soil that remains frozen year-round?",
      "options": [
        "Glacier melt",
        "Permafrost thaw",
        "Iceberg break",
        "Frostbite"
      ],
      "correctAnswer": 1,
      "hint": "Arctic phenomenon"
    },
    {
      "question": "Which protocol was an early international treaty to reduce greenhouse gases?",
      "options": [
        "Geneva Protocol",
        "Kyoto Protocol",
        "Rome Protocol",
        "Paris Decree"
      ],
      "correctAnswer": 1,
      "hint": "Signed in Japan"
    },
    {
      "question": "What gas do trees absorb to help slow climate change?",
      "options": [
        "Oxygen",
        "Hydrogen",
        "Carbon Dioxide",
        "Argon"
      ],
      "correctAnswer": 2,
      "hint": "CO2"
    }
  ],
  "medium_climate": [
    {
      "question": "What does the 'Albedo Effect' refer to?",
      "options": [
        "Ocean currents",
        "Reflectivity of surfaces",
        "Plant growth",
        "Wind speed"
      ],
      "correctAnswer": 1,
      "hint": "Snow has a high one"
    },
    {
      "question": "Which gas is much more potent than CO2 but lasts for a shorter time in the atmosphere?",
      "options": [
        "Oxygen",
        "Methane",
        "Nitrogen",
        "Helium"
      ],
      "correctAnswer": 1,
      "hint": "CH4"
    },
    {
      "question": "The 'Great Barrier Reef' has suffered from what phenomenon due to heat?",
      "options": [
        "Oversanding",
        "Bleaching",
        "Sinking",
        "Overgrowth"
      ],
      "correctAnswer": 1,
      "hint": "Coral turns white"
    },
    {
      "question": "What is the goal of the 'Paris Agreement' regarding global temperature rise?",
      "options": [
        "Limit to 0.5C",
        "Stay well below 2C",
        "No more rain",
        "Lower it by 5C"
      ],
      "correctAnswer": 1,
      "hint": "International climate goal"
    },
    {
      "question": "What is 'Ocean Acidification' caused by?",
      "options": [
        "Plastic waste",
        "CO2 absorption",
        "Oil spills",
        "Overfishing"
      ],
      "correctAnswer": 1,
      "hint": "CO2 forms carbonic acid"
    },
    {
      "question": "Which sector contributes the most to global greenhouse gas emissions?",
      "options": [
        "Transport",
        "Agriculture",
        "Energy/Electricity",
        "Waste"
      ],
      "correctAnswer": 2,
      "hint": "Burning fuel for power"
    },
    {
      "question": "What is the 'Ozone Layer' protecting us from?",
      "options": [
        "Heat",
        "Rain",
        "UV Radiation",
        "Global Warming"
      ],
      "correctAnswer": 2,
      "hint": "From the sun"
    },
    {
      "question": "What does 'Net Zero' mean?",
      "options": [
        "Zero output",
        "Balancing emissions with removal",
        "Zero money",
        "Zero electricity"
      ],
      "correctAnswer": 1,
      "hint": "Carbon neutrality"
    },
    {
      "question": "Which Arctic animal is often the 'face' of the impact of melting sea ice?",
      "options": [
        "Penguin",
        "Polar Bear",
        "Seal",
        "Walrus"
      ],
      "correctAnswer": 1,
      "hint": "Depends on ice for hunting"
    },
    {
      "question": "What is the term for a tipping point where a change becomes self-sustaining and irreversible?",
      "options": [
        "Feedback Loop",
        "Breakpoint",
        "Cycle",
        "Static State"
      ],
      "correctAnswer": 0,
      "hint": "Self-reinforcing process"
    },
    {
      "question": "How does deforestation contribute to climate change?",
      "options": [
        "More trees",
        "Releases stored carbon",
        "Creates rain",
        "Cools the earth"
      ],
      "correctAnswer": 1,
      "hint": "Trees are carbon sinks"
    },
    {
      "question": "Which scale measures the intensity of Hurricanes?",
      "options": [
        "Richter Scale",
        "Saffir-Simpson Scale",
        "pH Scale",
        "Kelvin Scale"
      ],
      "correctAnswer": 1,
      "hint": "Category 1 to 5"
    },
    {
      "question": "What is 'Direct Air Capture'?",
      "options": [
        "Breathing",
        "Technology to remove CO2 from air",
        "Wind turbines",
        "Cloud seeding"
      ],
      "correctAnswer": 1,
      "hint": "Negative emissions technology"
    },
    {
      "question": "What is a 'Carbon Sink'?",
      "options": [
        "A cleaning product",
        "Something that absorbs more carbon than it releases",
        "A coal mine",
        "A car exhaust"
      ],
      "correctAnswer": 1,
      "hint": "Oceans and forests"
    },
    {
      "question": "Which continent is losing ice the fastest?",
      "options": [
        "Africa",
        "Asia",
        "Antarctica/Greenland",
        "Australia"
      ],
      "correctAnswer": 2,
      "hint": "Due to warming oceans"
    }
  ],
  "hard_climate": [
    {
      "question": "What is the approximate current concentration of CO2 in the atmosphere?",
      "options": [
        "280 ppm",
        "350 ppm",
        "420 ppm",
        "500 ppm"
      ],
      "correctAnswer": 2,
      "hint": "Historical high compared to last 800k years"
    },
    {
      "question": "Which index is used to describe the relative impact of different greenhouse gases on warming?",
      "options": [
        "GWP (Global Warming Potential)",
        "GDP",
        "CPI",
        "R-value"
      ],
      "correctAnswer": 0,
      "hint": "CO2 has a value of 1"
    },
    {
      "question": "What is the 'AMOC' in the context of climate systems?",
      "options": [
        "An Arctic cloud",
        "A carbon measuring tool",
        "Atlantic Meridional Overturning Circulation",
        "A type of solar panel"
      ],
      "correctAnswer": 2,
      "hint": "Major ocean current system"
    },
    {
      "question": "In climate science, what does 'Radiative Forcing' measure?",
      "options": [
        "Wind power",
        "The balance of energy entering/leaving the atmosphere",
        "Ocean pressure",
        "Solar output"
      ],
      "correctAnswer": 1,
      "hint": "W/m2"
    },
    {
      "question": "Which IPCC report is the most recent comprehensive assessment as of 2023?",
      "options": [
        "AR4",
        "AR5",
        "AR6",
        "AR7"
      ],
      "correctAnswer": 2,
      "hint": "Sixth Assessment Report"
    },
    {
      "question": "What is the term for the process where a warming climate causes permafrost to release methane, causing more warming?",
      "options": [
        "Positive Feedback",
        "Negative Feedback",
        "Neutral Effect",
        "Static Link"
      ],
      "correctAnswer": 0,
      "hint": "Self-amplifying cycle"
    },
    {
      "question": "What is the 'Keeling Curve'?",
      "options": [
        "Graphs of ocean depth",
        "Graphs of atmospheric CO2 over time",
        "Temperature of the sun",
        "Wind speed map"
      ],
      "correctAnswer": 1,
      "hint": "Measured at Mauna Loa"
    },
    {
      "question": "Which geoengineering technique involves reflecting sunlight back into space using aerosols?",
      "options": [
        "Carbon Sequestration",
        "Solar Radiation Management",
        "Ocean Fertilization",
        "Reforestation"
      ],
      "correctAnswer": 1,
      "hint": "SRM"
    },
    {
      "question": "What proportion of global warming has been absorbed by the oceans?",
      "options": [
        "10%",
        "30%",
        "60%",
        "Over 90%"
      ],
      "correctAnswer": 3,
      "hint": "Huge thermal reservoir"
    },
    {
      "question": "What is 'Climate Sensitivity'?",
      "options": [
        "How politicians feel about climate",
        "How much the earth warms per doubling of CO2",
        "Sensor accuracy",
        "Plant growth speed"
      ],
      "correctAnswer": 1,
      "hint": "Equilibrium response"
    },
    {
      "question": "Which specific gas was primarily targeted by the Montreal Protocol for the Ozone layer?",
      "options": [
        "CO2",
        "Methane",
        "CFCs",
        "Nitrous Oxide"
      ],
      "correctAnswer": 2,
      "hint": "Chlorofluorocarbons"
    },
    {
      "question": "What is 'Blue Carbon'?",
      "options": [
        "Dye in the water",
        "Carbon stored in coastal and marine ecosystems",
        "Carbon from coal",
        "Atmospheric carbon"
      ],
      "correctAnswer": 1,
      "hint": "Mangroves and seagrasses"
    },
    {
      "question": "Which phenomenon describes the warming of sea surface temperatures in the central and eastern Pacific?",
      "options": [
        "La Ni\u00f1a",
        "El Ni\u00f1o",
        "Gulf Stream",
        "Jet Stream"
      ],
      "correctAnswer": 1,
      "hint": "ENSO cycle"
    },
    {
      "question": "What is the 'Holocene'?",
      "options": [
        "The current geological epoch",
        "A type of gas",
        "A solar event",
        "A rock formation"
      ],
      "correctAnswer": 0,
      "hint": "Last 11,700 years"
    },
    {
      "question": "What is the 'Cryosphere'?",
      "options": [
        "The atmosphere",
        "The frozen parts of the Earth",
        "The oceans",
        "Inner earth"
      ],
      "correctAnswer": 1,
      "hint": "Ice and snow"
    },
    {
      "question": "Which chemical compound is the primary component of 'Dry Ice'?",
      "options": [
        "Oxygen",
        "Nitrogen",
        "Carbon Dioxide",
        "Ammonia"
      ],
      "correctAnswer": 2,
      "hint": "Solid CO2"
    },
    {
      "question": "What is 'Milankovitch cycles' related to?",
      "options": [
        "Industrial cycles",
        "Earth's orbital variations",
        "Ocean tides",
        "Solar flares"
      ],
      "correctAnswer": 1,
      "hint": "Long-term climate drivers"
    },
    {
      "question": "Which gas has a GWP of 265-298 over 100 years?",
      "options": [
        "Methane",
        "Nitrous Oxide",
        "CO2",
        "Water Vapor"
      ],
      "correctAnswer": 1,
      "hint": "N2O"
    },
    {
      "question": "What is the primary driver of the 'Urban Heat Island' effect?",
      "options": [
        "More trees",
        "Waste heat and dark surfaces",
        "High altitude",
        "Nearness to sea"
      ],
      "correctAnswer": 1,
      "hint": "Cities are warmer"
    },
    {
      "question": "Which organization was established by the UN and WMO to assess climate change?",
      "options": [
        "NASA",
        "Greenpeace",
        "IPCC",
        "NOAA"
      ],
      "correctAnswer": 2,
      "hint": "Intergovernmental Panel"
    }
  ],
  "easy_eco": [
    {
      "question": "What is the primary sector of the economy?",
      "options": [
        "Manufacturing",
        "Agriculture",
        "Services",
        "Technology"
      ],
      "correctAnswer": 1,
      "hint": "Involves extracting natural resources"
    },
    {
      "question": "Which of these is a non-renewable resource?",
      "options": [
        "Solar",
        "Wind",
        "Coal",
        "Water"
      ],
      "correctAnswer": 2,
      "hint": "It cannot be replaced after use"
    },
    {
      "question": "What is the term for the total value of goods and services produced in a country?",
      "options": [
        "GNP",
        "GDP",
        "CPI",
        "WPI"
      ],
      "correctAnswer": 1,
      "hint": "Gross Domestic Product"
    },
    {
      "question": "Which country is currently the world's largest exporter?",
      "options": [
        "USA",
        "China",
        "Germany",
        "Japan"
      ],
      "correctAnswer": 1,
      "hint": "Known as the global manufacturing hub"
    },
    {
      "question": "What is the main source of energy for most industrial processes?",
      "options": [
        "Nuclear",
        "Fossil Fuels",
        "Hydroelectric",
        "Geothermal"
      ],
      "correctAnswer": 1,
      "hint": "Coal, oil, and gas"
    },
    {
      "question": "Which sector includes banking and education?",
      "options": [
        "Primary",
        "Secondary",
        "Tertiary",
        "Quaternary"
      ],
      "correctAnswer": 2,
      "hint": "The service sector"
    },
    {
      "question": "What is the term for bringing goods into a country from abroad?",
      "options": [
        "Export",
        "Import",
        "Trade",
        "Tariff"
      ],
      "correctAnswer": 1,
      "hint": "Buying from other nations"
    },
    {
      "question": "Which organization regulates international trade?",
      "options": [
        "UN",
        "WHO",
        "WTO",
        "IMF"
      ],
      "correctAnswer": 2,
      "hint": "World Trade Organization"
    },
    {
      "question": "What is the name for the movement of people from rural areas to cities?",
      "options": [
        "Migration",
        "Emigration",
        "Urbanization",
        "Colonization"
      ],
      "correctAnswer": 2,
      "hint": "Growth of cities"
    },
    {
      "question": "Which crop is the primary staple for over half the world's population?",
      "options": [
        "Wheat",
        "Maize",
        "Rice",
        "Potato"
      ],
      "correctAnswer": 2,
      "hint": "Mainly grown in Asia"
    }
  ],
  "medium_eco": [
    {
      "question": "What was the 'Green Revolution' primarily focused on?",
      "options": [
        "Electronics",
        "Agriculture",
        "Space travel",
        "Medicine"
      ],
      "correctAnswer": 1,
      "hint": "Increased food production in the 60s"
    },
    {
      "question": "Which country has the largest proven oil reserves in the world?",
      "options": [
        "Saudi Arabia",
        "Russia",
        "Venezuela",
        "USA"
      ],
      "correctAnswer": 2,
      "hint": "Located in South America"
    },
    {
      "question": "What is 'Subsistence Farming'?",
      "options": [
        "Farming for profit",
        "Farming to feed one's own family",
        "Farming in water",
        "Large scale industrial farming"
      ],
      "correctAnswer": 1,
      "hint": "Minimal surplus for trade"
    },
    {
      "question": "The 'Rust Belt' in the USA is associated with which industry?",
      "options": [
        "Steel/Manufacturing",
        "IT/Silicon",
        "Agriculture",
        "Oil"
      ],
      "correctAnswer": 0,
      "hint": "Decline of heavy industry"
    },
    {
      "question": "Which canal connects the Atlantic and Pacific Oceans?",
      "options": [
        "Suez Canal",
        "Panama Canal",
        "Kiel Canal",
        "Corinth Canal"
      ],
      "correctAnswer": 1,
      "hint": "Cuts through Central America"
    },
    {
      "question": "What is the term for the outsourcing of business processes to a foreign country?",
      "options": [
        "Globalism",
        "Offshoring",
        "Franchising",
        "Mercantilism"
      ],
      "correctAnswer": 1,
      "hint": "Moving operations abroad"
    },
    {
      "question": "Which mineral is essentially needed for making aluminum?",
      "options": [
        "Iron Ore",
        "Bauxite",
        "Copper",
        "Lithium"
      ],
      "correctAnswer": 1,
      "hint": "Reddish clay-like ore"
    },
    {
      "question": "What is a 'Maquiladora'?",
      "options": [
        "A Spanish explorer",
        "A foreign-owned factory in Mexico",
        "A type of coffee",
        "A traditional dance"
      ],
      "correctAnswer": 1,
      "hint": "Common near the US border"
    },
    {
      "question": "Which ocean is the busiest for international trade?",
      "options": [
        "Indian",
        "Pacific",
        "Atlantic",
        "Arctic"
      ],
      "correctAnswer": 2,
      "hint": "Connects Europe and the Americas"
    },
    {
      "question": "What does 'OPEC' stand for?",
      "options": [
        "Oil Price Export Control",
        "Organization of the Petroleum Exporting Countries",
        "Oil Producers Economic Council",
        "Overseas Petroleum Export Corporation"
      ],
      "correctAnswer": 1,
      "hint": "Intergovernmental organization"
    },
    {
      "question": "What is the 'Quaternary Sector' of the economy?",
      "options": [
        "Agriculture",
        "Manufacturing",
        "Knowledge-based services",
        "Construction"
      ],
      "correctAnswer": 2,
      "hint": "IT, research, and development"
    },
    {
      "question": "Which country is the leading producer of coffee in the world?",
      "options": [
        "Vietnam",
        "Colombia",
        "Brazil",
        "Ethiopia"
      ],
      "correctAnswer": 2,
      "hint": "Accounted for ~40% of production"
    },
    {
      "question": "What is 'Fair Trade'?",
      "options": [
        "Trading without taxes",
        "Ensuring producers get a fair price",
        "Trading on the stock market",
        "Free trade agreements"
      ],
      "correctAnswer": 1,
      "hint": "Ethical trading movement"
    },
    {
      "question": "Which city is considered the financial capital of the world?",
      "options": [
        "London",
        "New York",
        "Hong Kong",
        "Tokyo"
      ],
      "correctAnswer": 1,
      "hint": "Home to Wall Street"
    },
    {
      "question": "What is the primary goal of a 'Special Economic Zone' (SEZ)?",
      "options": [
        "Environmental protection",
        "Attract foreign investment",
        "Restrict trade",
        "Build houses"
      ],
      "correctAnswer": 1,
      "hint": "Business-friendly area with tax breaks"
    }
  ],
  "hard_eco": [
    {
      "question": "What is the 'Weber's Least Cost Theory' used to determine?",
      "options": [
        "Crop rotation",
        "Industrial location",
        "Population growth",
        "Urban planning"
      ],
      "correctAnswer": 1,
      "hint": "Minimize transport and labor costs"
    },
    {
      "question": "Which economic model describes the spatial layout of agriculture based on transport costs?",
      "options": [
        "Von Th\u00fcnen Model",
        "Christaller Model",
        "Burgess Model",
        "Hoyt Model"
      ],
      "correctAnswer": 0,
      "hint": "The Isolated State"
    },
    {
      "question": "What is the 'Resource Curse' or 'Dutch Disease'?",
      "options": [
        "Lack of resources",
        "Economic decline despite/due to resource abundance",
        "Environmental pollution",
        "War over land"
      ],
      "correctAnswer": 1,
      "hint": "Relationship between resources and slow growth"
    },
    {
      "question": "Which country produces the most Rare Earth Elements (REEs)?",
      "options": [
        "USA",
        "Australia",
        "China",
        "Brazil"
      ],
      "correctAnswer": 2,
      "hint": "Dominates over 80% of supply"
    },
    {
      "question": "What is the significance of the 'Strait of Malacca' in economic geography?",
      "options": [
        "It contains gold",
        "It is a major maritime chokepoint",
        "It is a tourist destination",
        "It is where oil is found"
      ],
      "correctAnswer": 1,
      "hint": "Connects Indian and Pacific Oceans"
    },
    {
      "question": "Which theory suggests that core regions exploit peripheral regions for resources?",
      "options": [
        "Modernization Theory",
        "Dependency Theory",
        "Central Place Theory",
        "Gateway Theory"
      ],
      "correctAnswer": 1,
      "hint": "World Systems Theory"
    },
    {
      "question": "What does the 'Gini Coefficient' measure?",
      "options": [
        "Wealth production",
        "Income inequality",
        "Happiness",
        "Birth rate"
      ],
      "correctAnswer": 1,
      "hint": "Statistical dispersion"
    },
    {
      "question": "Which term describes the concentration of related businesses in a specific geographic area?",
      "options": [
        "Decentralization",
        "Agglomeration",
        "Dispersion",
        "Suburbanization"
      ],
      "correctAnswer": 1,
      "hint": "Like Silicon Valley"
    },
    {
      "question": "What was the primary purpose of the 'Bretton Woods Conference'?",
      "options": [
        "Environmental law",
        "Post-war international financial order",
        "Decolonization",
        "Space exploration"
      ],
      "correctAnswer": 1,
      "hint": "Created IMF and World Bank"
    },
    {
      "question": "Which country is the largest producer of Cocoa?",
      "options": [
        "Ghana",
        "Ivory Coast",
        "Nigeria",
        "Brazil"
      ],
      "correctAnswer": 1,
      "hint": "West African nation"
    },
    {
      "question": "What is 'Transhumance'?",
      "options": [
        "Moving goods by rail",
        "Seasonal migration of livestock",
        "Growth of skyscrapers",
        "Changing religions"
      ],
      "correctAnswer": 1,
      "hint": "Vertical or horizontal movement"
    },
    {
      "question": "Which indicator combines life expectancy, education, and per capita income?",
      "options": [
        "GDP",
        "Human Development Index (HDI)",
        "GNH",
        "PQLI"
      ],
      "correctAnswer": 1,
      "hint": "Developed by the UN"
    },
    {
      "question": "What is the 'Informal Economy'?",
      "options": [
        "Government jobs",
        "Under-the-table/unregulated labor",
        "High tech industry",
        "Banking"
      ],
      "correctAnswer": 1,
      "hint": "Black market or street vending"
    },
    {
      "question": "Which term describes the process by which capital is withdrawn from an area and reinvested elsewhere?",
      "options": [
        "Investment",
        "Disinvestment",
        "Gentrification",
        "Speculation"
      ],
      "correctAnswer": 1,
      "hint": "Divestment"
    },
    {
      "question": "What is 'Footloose Industry'?",
      "options": [
        "Shoe manufacturing",
        "Industry not tied to specific locations/materials",
        "Mobile food carts",
        "Traditional crafts"
      ],
      "correctAnswer": 1,
      "hint": "Like software or call centers"
    },
    {
      "question": "Which country is the world's largest producer of Wheat as of 2022?",
      "options": [
        "Russia",
        "USA",
        "China",
        "India"
      ],
      "correctAnswer": 2,
      "hint": "Leading global producer"
    },
    {
      "question": "What is the 'North-South Divide' focused on?",
      "options": [
        "The equator",
        "Socio-economic and political division",
        "Compass directions",
        "Mountain ranges"
      ],
      "correctAnswer": 1,
      "hint": "Global North vs Global South"
    },
    {
      "question": "Which port is the busiest in the world by container volume?",
      "options": [
        "Singapore",
        "Rotterdam",
        "Shanghai",
        "Los Angeles"
      ],
      "correctAnswer": 2,
      "hint": "Major Chinese port"
    },
    {
      "question": "What is 'Break-of-bulk point'?",
      "options": [
        "Where ships sink",
        "A place where goods are transferred from one mode of transport to another",
        "Ending of a trade agreement",
        "A factory failure"
      ],
      "correctAnswer": 1,
      "hint": "Like a seaport or airport"
    },
    {
      "question": "Which model explains the distribution of services based on threshold and range?",
      "options": [
        "Central Place Theory",
        "Gravity Model",
        "Core-Periphery Model",
        "Rank-Size Rule"
      ],
      "correctAnswer": 0,
      "hint": "Walter Christaller's theory"
    }
  ],
  "easy_folk": [
    {
      "question": "What is a traditional story involving supernatural beings or events called?",
      "options": [
        "History",
        "News",
        "Mythology",
        "Biography"
      ],
      "correctAnswer": 2,
      "hint": "Often explains natural phenomena"
    },
    {
      "question": "Which holiday is famous for 'Trick or Treating'?",
      "options": [
        "Christmas",
        "Easter",
        "Halloween",
        "Thanksgiving"
      ],
      "correctAnswer": 2,
      "hint": "Observed on Oct 31"
    },
    {
      "question": "What is a common traditional dance from Scotland involving kilts?",
      "options": [
        "Flamenco",
        "Highland Dance",
        "Hula",
        "Salsa"
      ],
      "correctAnswer": 1,
      "hint": "Often performed with bagpipes"
    },
    {
      "question": "Which mythical creature is known for having a single horn on its forehead?",
      "options": [
        "Dragon",
        "Unicorn",
        "Phoenix",
        "Griffin"
      ],
      "correctAnswer": 1,
      "hint": "Symbol of purity"
    },
    {
      "question": "What instrument is most associated with Irish folk music?",
      "options": [
        "Sitar",
        "Bagpipes",
        "Fiddle/Violin",
        "Koto"
      ],
      "correctAnswer": 2,
      "hint": "Also the Tin Whistle"
    },
    {
      "question": "Which festival is known as the 'Festival of Lights' in India?",
      "options": [
        "Holi",
        "Diwali",
        "Eid",
        "Pongal"
      ],
      "correctAnswer": 1,
      "hint": "Celebrates victory of light over darkness"
    },
    {
      "question": "What do people traditionally exchange on Valentine's Day?",
      "options": [
        "Eggs",
        "Cards and Flowers",
        "Turkeys",
        "Fireworks"
      ],
      "correctAnswer": 1,
      "hint": "Day of love"
    },
    {
      "question": "In folklore, what transforms a person into a werewolf?",
      "options": [
        "Sunlight",
        "A full moon",
        "Rain",
        "Eating garlic"
      ],
      "correctAnswer": 1,
      "hint": "Lunar cycle transformation"
    },
    {
      "question": "What type of creature is 'Bigfoot' often described as?",
      "options": [
        "A giant fish",
        "A large ape-like creature",
        "A winged dragon",
        "A small elf"
      ],
      "correctAnswer": 1,
      "hint": "Also called Sasquatch"
    },
    {
      "question": "Which country is the origin of the 'Day of the Dead' (Dia de los Muertos)?",
      "options": [
        "Spain",
        "Mexico",
        "Brazil",
        "Italy"
      ],
      "correctAnswer": 1,
      "hint": "Honors deceased loved ones"
    }
  ],
  "medium_folk": [
    {
      "question": "Who is the trickster god in Norse mythology?",
      "options": [
        "Odin",
        "Thor",
        "Loki",
        "Freyr"
      ],
      "correctAnswer": 2,
      "hint": "Shape-shifter"
    },
    {
      "question": "What is a 'Selkie' in Scottish and Irish folklore?",
      "options": [
        "A ghost",
        "A seal that can become human",
        "A giant",
        "A helpful fairy"
      ],
      "correctAnswer": 1,
      "hint": "Mythical sea creature"
    },
    {
      "question": "Which hero from Greek mythology performed 12 labors?",
      "options": [
        "Achilles",
        "Odysseus",
        "Heracles (Hercules)",
        "Perseus"
      ],
      "correctAnswer": 2,
      "hint": "Son of Zeus"
    },
    {
      "question": "What is the traditional Japanese art of paper folding called?",
      "options": [
        "Ikebana",
        "Haiku",
        "Origami",
        "Kabuki"
      ],
      "correctAnswer": 2,
      "hint": "Folding squares into shapes"
    },
    {
      "question": "Which Slavic folklore character lives in a house on chicken legs?",
      "options": [
        "Baba Yaga",
        "Koschei",
        "Vasilisa",
        "Rusalka"
      ],
      "correctAnswer": 0,
      "hint": "A powerful witch"
    },
    {
      "question": "What is the name of the 'lost city of gold' in South American legend?",
      "options": [
        "Atlantis",
        "El Dorado",
        "Shangri-La",
        "Camelot"
      ],
      "correctAnswer": 1,
      "hint": "Sought by Conquistadors"
    },
    {
      "question": "Which traditional dance from Spain is known for its footwork and guitar accompaniment?",
      "options": [
        "Polka",
        "Tango",
        "Flamenco",
        "Waltz"
      ],
      "correctAnswer": 2,
      "hint": "Andalusian origin"
    },
    {
      "question": "In Egyptian mythology, who is the god of the afterlife with the head of a jackal?",
      "options": [
        "Osiris",
        "Ra",
        "Anubis",
        "Horus"
      ],
      "correctAnswer": 2,
      "hint": "Weighs the heart"
    },
    {
      "question": "What is the 'Banshee' known for in Irish folklore?",
      "options": [
        "Bringing good luck",
        "Wailing to predict death",
        "Stealing gold",
        "Helping travelers"
      ],
      "correctAnswer": 1,
      "hint": "Spirit of the mounds"
    },
    {
      "question": "Which creature is said to guard the treasures at the end of a rainbow?",
      "options": [
        "Dragon",
        "Leprechaun",
        "Troll",
        "Gnome"
      ],
      "correctAnswer": 1,
      "hint": "Irish folklore icon"
    },
    {
      "question": "What is a 'Totem Pole' primarily used for amongst Indigenous peoples of the Pacific Northwest?",
      "options": [
        "A weapon",
        "To record ancestry and histories",
        "Measurement of height",
        "Lighting"
      ],
      "correctAnswer": 1,
      "hint": "Carved from large trees"
    },
    {
      "question": "In Hindu mythology, who is the elephant-headed god of beginnings?",
      "options": [
        "Shiva",
        "Vishnu",
        "Ganesha",
        "Brahma"
      ],
      "correctAnswer": 2,
      "hint": "Remover of obstacles"
    },
    {
      "question": "What is the 'Krampus' in Central European folklore?",
      "options": [
        "A helpful elf",
        "A horned figure who punishes naughty children",
        "A Christmas saint",
        "A baker"
      ],
      "correctAnswer": 1,
      "hint": "The 'Anti-Santa'"
    },
    {
      "question": "Who pulled the sword Excalibur from the stone?",
      "options": [
        "Lancelot",
        "Merlin",
        "Arthur",
        "Gawain"
      ],
      "correctAnswer": 2,
      "hint": "King of the Britons"
    },
    {
      "question": "Which mythical bird is reborn from its own ashes?",
      "options": [
        "Phoenix",
        "Thunderbird",
        "Griffin",
        "Roc"
      ],
      "correctAnswer": 0,
      "hint": "Symbol of immortality"
    }
  ],
  "hard_folk": [
    {
      "question": "What is the 'Kalevala'?",
      "options": [
        "A Finnish epic poem",
        "A traditional food",
        "A Greek island",
        "A type of sword"
      ],
      "correctAnswer": 0,
      "hint": "Foundation of Finnish national identity"
    },
    {
      "question": "In Japanese mythology, who is the sun goddess and ancestor of the Imperial house?",
      "options": [
        "Izanami",
        "Amaterasu",
        "Tsukuyomi",
        "Susanoo"
      ],
      "correctAnswer": 1,
      "hint": "The 'heaven-shining' goddess"
    },
    {
      "question": "What is an 'Oni' in Japanese folklore?",
      "options": [
        "A ghost",
        "A demon or ogre",
        "A water sprite",
        "A wise animal"
      ],
      "correctAnswer": 1,
      "hint": "Often depicted with horns and clubs"
    },
    {
      "question": "Which figure in Jewish folklore is an animated anthropomorphic being made of clay?",
      "options": [
        "Golem",
        "Dybbuk",
        "Leviathan",
        "Lilith"
      ],
      "correctAnswer": 0,
      "hint": "Created through mystical incantations"
    },
    {
      "question": "Who is the Aztec god depicted as a feathered serpent?",
      "options": [
        "Huitzilopochtli",
        "Quetzalcoatl",
        "Tezcatlipoca",
        "Tlaloc"
      ],
      "correctAnswer": 1,
      "hint": "God of wind and wisdom"
    },
    {
      "question": "What is the 'Wild Hunt' common in European folklore?",
      "options": [
        "A traditional harvest",
        "A ghostly procession of hunters across the sky",
        "A medieval game",
        "A fishing festival"
      ],
      "correctAnswer": 1,
      "hint": "Omen of catastrophe"
    },
    {
      "question": "In Mesopotamian mythology, who is the queen of the Underworld?",
      "options": [
        "Ishtar",
        "Ereshkigal",
        "Tiamat",
        "Enki"
      ],
      "correctAnswer": 1,
      "hint": "Sister of Ishtar"
    },
    {
      "question": "What is a 'Kappa' in Japanese mythology?",
      "options": [
        "A mountain god",
        "A water-dwelling reptilian creature",
        "A fire fox",
        "A dream eater"
      ],
      "correctAnswer": 1,
      "hint": "Has a water-filled depression on its head"
    },
    {
      "question": "Which West African deity (Orisha) is the god of thunder and lightning?",
      "options": [
        "Ogun",
        "Shango",
        "Oshun",
        "Eshu"
      ],
      "correctAnswer": 1,
      "hint": "Yoruba religion"
    },
    {
      "question": "In the Prose Edda, what is the name of the bridge connecting Midgard and Asgard?",
      "options": [
        "Bifrost",
        "Gjallarbru",
        "Yggdrasil",
        "Skidbladnir"
      ],
      "correctAnswer": 0,
      "hint": "The Rainbow Bridge"
    },
    {
      "question": "What is 'Morpheus' the god of in Greek mythology?",
      "options": [
        "Death",
        "Dreams",
        "War",
        "Love"
      ],
      "correctAnswer": 1,
      "hint": "One of the Oneiroi"
    },
    {
      "question": "Which creature in Chinese mythology has the head of a dragon and the body of a horse or deer?",
      "options": [
        "Qilin",
        "Pixiu",
        "Long",
        "Fenhuang"
      ],
      "correctAnswer": 0,
      "hint": "Associated with prosperity"
    },
    {
      "question": "Who is the Welsh goddess associated with horses and sovereignty?",
      "options": [
        "Rhiannon",
        "Cerridwen",
        "Arianrhod",
        "Blodeuwedd"
      ],
      "correctAnswer": 0,
      "hint": "Appears in the Mabinogion"
    },
    {
      "question": "What are 'Hulduf\u00f3lk' in Icelandic folklore?",
      "options": [
        "Fairies",
        "Elves/Hidden people",
        "Giants",
        "Sea monsters"
      ],
      "correctAnswer": 1,
      "hint": "Live in rocks and hills"
    },
    {
      "question": "In Egyptian mythology, what was the 'Duat'?",
      "options": [
        "The sun",
        "The underworld",
        "A mountain",
        "A sacred river"
      ],
      "correctAnswer": 1,
      "hint": "Realm through which the sun god Ra traveled"
    },
    {
      "question": "What is a 'Tulpa' in Tibetan mysticism?",
      "options": [
        "A meditation mat",
        "A thought-form or being created through mental power",
        "A traditional tea",
        "A religious chant"
      ],
      "correctAnswer": 1,
      "hint": "Constructed entity"
    },
    {
      "question": "Which mythological Greek hero was the son of Thetis and was dipped in the River Styx?",
      "options": [
        "Hector",
        "Ajax",
        "Achilles",
        "Paris"
      ],
      "correctAnswer": 2,
      "hint": "Had a vulnerable heel"
    },
    {
      "question": "In Australian Aboriginal mythology, what is 'The Dreaming'?",
      "options": [
        "A type of sleep",
        "The beginning of the world and its spiritual dimension",
        "A ritual dance",
        "A lullaby"
      ],
      "correctAnswer": 1,
      "hint": "The 'Everywhen'"
    },
    {
      "question": "Who is the goddess of the hunt and the moon in Roman mythology?",
      "options": [
        "Venus",
        "Minerva",
        "Diana",
        "Juno"
      ],
      "correctAnswer": 2,
      "hint": "Counterpart to Artemis"
    },
    {
      "question": "What is the 'Wendigo' in Algonquian folklore?",
      "options": [
        "A water spirit",
        "A malevolent cannibalistic spirit associated with winter",
        "A friendly forest giant",
        "A protector of animals"
      ],
      "correctAnswer": 1,
      "hint": "Symbol of greed and excess"
    }
  ],
  "easy_gen": [
    {
      "question": "What is the largest planet in our solar system?",
      "options": [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn"
      ],
      "correctAnswer": 2,
      "hint": "An enormous gas giant"
    },
    {
      "question": "Which part of the body pumps blood?",
      "options": [
        "Brain",
        "Lungs",
        "Heart",
        "Stomach"
      ],
      "correctAnswer": 2,
      "hint": "Cardiac muscle"
    },
    {
      "question": "What do bees collect from flowers to make honey?",
      "options": [
        "Pollen",
        "Nectar",
        "Leaves",
        "Water"
      ],
      "correctAnswer": 1,
      "hint": "Sugary fluid"
    },
    {
      "question": "Which force keeps our feet on the ground?",
      "options": [
        "Magnetism",
        "Gravity",
        "Friction",
        "Electricity"
      ],
      "correctAnswer": 1,
      "hint": "Pulls things toward Earth"
    },
    {
      "question": "What is the frozen form of water called?",
      "options": [
        "Steam",
        "Vapor",
        "Ice",
        "Liquid"
      ],
      "correctAnswer": 2,
      "hint": "Below 0 degrees Celsius"
    },
    {
      "question": "How many planets are in our solar system?",
      "options": [
        "7",
        "8",
        "9",
        "10"
      ],
      "correctAnswer": 1,
      "hint": "Starting from Mercury"
    },
    {
      "question": "What gas do humans need to breathe to stay alive?",
      "options": [
        "Nitrogen",
        "Oxygen",
        "Carbon Dioxide",
        "Hydrogen"
      ],
      "correctAnswer": 1,
      "hint": "About 21% of air"
    },
    {
      "question": "Which animal is known as the 'Ship of the Desert'?",
      "options": [
        "Horse",
        "Camel",
        "Donkey",
        "Elephant"
      ],
      "correctAnswer": 1,
      "hint": "Has humps"
    },
    {
      "question": "What is the center of our solar system?",
      "options": [
        "Earth",
        "The Moon",
        "The Sun",
        "Mars"
      ],
      "correctAnswer": 2,
      "hint": "A yellow dwarf star"
    },
    {
      "question": "What is the boiling point of water in Celsius?",
      "options": [
        "50",
        "100",
        "150",
        "200"
      ],
      "correctAnswer": 1,
      "hint": "At standard pressure"
    }
  ],
  "medium_gen": [
    {
      "question": "Who developed the theory of relativity?",
      "options": [
        "Isaac Newton",
        "Albert Einstein",
        "Nikola Tesla",
        "Thomas Edison"
      ],
      "correctAnswer": 1,
      "hint": "E=mc^2"
    },
    {
      "question": "What is the hardest natural substance on Earth?",
      "options": [
        "Gold",
        "Iron",
        "Diamond",
        "Quartz"
      ],
      "correctAnswer": 2,
      "hint": "Made of pressurized carbon"
    },
    {
      "question": "Which planet is known as the 'Red Planet'?",
      "options": [
        "Venus",
        "Mars",
        "Jupiter",
        "Mercury"
      ],
      "correctAnswer": 1,
      "hint": "Rich in iron oxide"
    },
    {
      "question": "What is the Earth's primary source of energy?",
      "options": [
        "Coal",
        "The Moon",
        "The Sun",
        "Wind"
      ],
      "correctAnswer": 2,
      "hint": "Provides light and heat"
    },
    {
      "question": "How long does it take for the Earth to orbit the Sun?",
      "options": [
        "24 hours",
        "30 days",
        "365 days",
        "10 years"
      ],
      "correctAnswer": 2,
      "hint": "One year"
    },
    {
      "question": "What is the study of stars and planets called?",
      "options": [
        "Astrology",
        "Astronomy",
        "Geology",
        "Meteorology"
      ],
      "correctAnswer": 1,
      "hint": "Scientific study of space"
    },
    {
      "question": "Which metal is liquid at room temperature?",
      "options": [
        "Gold",
        "Silver",
        "Mercury",
        "Copper"
      ],
      "correctAnswer": 2,
      "hint": "Used in old thermometers"
    },
    {
      "question": "What is the name for the colored part of the eye?",
      "options": [
        "Pupil",
        "Retina",
        "Iris",
        "Lens"
      ],
      "correctAnswer": 2,
      "hint": "Controls light intake"
    },
    {
      "question": "Which vitamin is found in abundance in citrus fruits?",
      "options": [
        "Vitamin A",
        "Vitamin B",
        "Vitamin C",
        "Vitamin D"
      ],
      "correctAnswer": 2,
      "hint": "Ascorbic acid"
    },
    {
      "question": "What is the most abundant element in the universe?",
      "options": [
        "Oxygen",
        "Carbon",
        "Helium",
        "Hydrogen"
      ],
      "correctAnswer": 3,
      "hint": "Simplest atom"
    },
    {
      "question": "What is the main function of red blood cells?",
      "options": [
        "Fight infection",
        "Carry oxygen",
        "Clot blood",
        "Digest food"
      ],
      "correctAnswer": 1,
      "hint": "Contains hemoglobin"
    },
    {
      "question": "Which instrument is used to measure atmospheric pressure?",
      "options": [
        "Thermometer",
        "Barometer",
        "Speedometer",
        "Hygrometer"
      ],
      "correctAnswer": 1,
      "hint": "Invented by Torricelli"
    },
    {
      "question": "What process involves plants turning light into chemical energy?",
      "options": [
        "Respiration",
        "Photosynthesis",
        "Fermentation",
        "Transpiration"
      ],
      "correctAnswer": 1,
      "hint": "Produces glucose and oxygen"
    },
    {
      "question": "Who is the scientist known for his work on gravity and laws of motion?",
      "options": [
        "Galileo",
        "Darwin",
        "Newton",
        "Tesla"
      ],
      "correctAnswer": 2,
      "hint": "The apple story"
    },
    {
      "question": "Which layer of the atmosphere contains the ozone layer?",
      "options": [
        "Troposphere",
        "Stratosphere",
        "Mesosphere",
        "Thermosphere"
      ],
      "correctAnswer": 1,
      "hint": "Protects from UV"
    }
  ],
  "hard_gen": [
    {
      "question": "What is the speed of light in a vacuum?",
      "options": [
        "~300,000 km/s",
        "~150,000 km/s",
        "~1,000,000 km/s",
        "~50,000 km/s"
      ],
      "correctAnswer": 0,
      "hint": "The universal speed limit"
    },
    {
      "question": "Which subatomic particle is neutral (no charge)?",
      "options": [
        "Proton",
        "Neutron",
        "Electron",
        "Positron"
      ],
      "correctAnswer": 1,
      "hint": "Inside the nucleus"
    },
    {
      "question": "What is the escape velocity of Earth?",
      "options": [
        "~1.1 km/s",
        "~5.5 km/s",
        "~11.2 km/s",
        "~25.0 km/s"
      ],
      "correctAnswer": 2,
      "hint": "Speed needed to leave orbit"
    },
    {
      "question": "What does DNA stand for?",
      "options": [
        "Deoxyribonucleic Acid",
        "Deribonucleic Acid",
        "Deoxynucleic Acid",
        "Dinucleic Acid"
      ],
      "correctAnswer": 0,
      "hint": "The blueprint of life"
    },
    {
      "question": "Which planet has the most moons?",
      "options": [
        "Jupiter",
        "Saturn",
        "Neptune",
        "Uranus"
      ],
      "correctAnswer": 1,
      "hint": "As of recent counts, it surpassed Jupiter"
    },
    {
      "question": "What is the absolute zero temperature in Celsius?",
      "options": [
        "-100",
        "-273.15",
        "-373.15",
        "0"
      ],
      "correctAnswer": 1,
      "hint": "Lowest possible temperature"
    },
    {
      "question": "Which organ in the human body can regenerate itself?",
      "options": [
        "Heart",
        "Lungs",
        "Liver",
        "Brain"
      ],
      "correctAnswer": 2,
      "hint": "Large gland in the abdomen"
    },
    {
      "question": "Who discovered penicillin?",
      "options": [
        "Louis Pasteur",
        "Alexander Fleming",
        "Marie Curie",
        "Jonas Salk"
      ],
      "correctAnswer": 1,
      "hint": "Accidental discovery from mold"
    },
    {
      "question": "What is the type of galaxy that the Milky Way is?",
      "options": [
        "Elliptical",
        "Spiral",
        "Irregular",
        "Lenticular"
      ],
      "correctAnswer": 1,
      "hint": "Has arms like a pinwheel"
    },
    {
      "question": "Which element has the highest atomic number naturally occurring?",
      "options": [
        "Plutonium",
        "Uranium",
        "Lead",
        "Thorium"
      ],
      "correctAnswer": 1,
      "hint": "Atomic number 92"
    },
    {
      "question": "What is the name of the theory describing the origin of the universe?",
      "options": [
        "Big Bang Theory",
        "Steady State Theory",
        "String Theory",
        "Nebular Hypothesis"
      ],
      "correctAnswer": 0,
      "hint": "Began as a singularity"
    },
    {
      "question": "Which blood cells are responsible for the immune response?",
      "options": [
        "Red Blood Cells",
        "White Blood Cells",
        "Platelets",
        "Plasma"
      ],
      "correctAnswer": 1,
      "hint": "Leukocytes"
    },
    {
      "question": "What is the SI unit of electric current?",
      "options": [
        "Volt",
        "Watt",
        "Ampere",
        "Ohm"
      ],
      "correctAnswer": 2,
      "hint": "Symbol A"
    },
    {
      "question": "Which scientist is famous for her research on radioactivity and was the first woman to win a Nobel Prize?",
      "options": [
        "Rosalind Franklin",
        "Marie Curie",
        "Ada Lovelace",
        "Jane Goodall"
      ],
      "correctAnswer": 1,
      "hint": "Won two Nobel Prizes"
    },
    {
      "question": "What is the chemical formula for Ozone?",
      "options": [
        "O2",
        "O3",
        "O4",
        "CO2"
      ],
      "correctAnswer": 1,
      "hint": "Three oxygen atoms"
    },
    {
      "question": "Which part of the brain controls balance and coordination?",
      "options": [
        "Cerebrum",
        "Cerebellum",
        "Brainstem",
        "Hypothalamus"
      ],
      "correctAnswer": 1,
      "hint": "Located at the back of the head"
    },
    {
      "question": "What is the Half-life of Carbon-14?",
      "options": [
        "~1,500 years",
        "-5,730 years",
        "~10,000 years",
        "~50,000 years"
      ],
      "correctAnswer": 1,
      "hint": "Used for radiocarbon dating"
    },
    {
      "question": "Which law states that energy cannot be created or destroyed?",
      "options": [
        "First Law of Thermodynamics",
        "Second Law of Thermodynamics",
        "Newton's Third Law",
        "Law of Gravity"
      ],
      "correctAnswer": 0,
      "hint": "Conservation of energy"
    },
    {
      "question": "What is the most abundant mineral in the human body?",
      "options": [
        "Iron",
        "Zinc",
        "Calcium",
        "Magnesium"
      ],
      "correctAnswer": 2,
      "hint": "Found in bones and teeth"
    },
    {
      "question": "In astronomy, what is the 'event horizon'?",
      "options": [
        "The edge of a galaxy",
        "The boundary around a black hole",
        "The surface of a star",
        "The end of a comet's tail"
      ],
      "correctAnswer": 1,
      "hint": "Where light cannot escape"
    }
  ],
  "easy_international": [
    {
      "question": "Where is the headquarters of the United Nations located?",
      "options": [
        "London",
        "Paris",
        "New York City",
        "Geneva"
      ],
      "correctAnswer": 2,
      "hint": "The Big Apple"
    },
    {
      "question": "Which country has the largest population in the world as of 2023?",
      "options": [
        "China",
        "India",
        "USA",
        "Indonesia"
      ],
      "correctAnswer": 1,
      "hint": "Recently surpassed China"
    },
    {
      "question": "What is the currency of the European Union?",
      "options": [
        "Dollar",
        "Pound",
        "Euro",
        "Yen"
      ],
      "correctAnswer": 2,
      "hint": "Used by most EU members"
    },
    {
      "question": "Who is the leader of the Roman Catholic Church?",
      "options": [
        "The Dalai Lama",
        "The Pope",
        "The Archbishop",
        "The Patriarch"
      ],
      "correctAnswer": 1,
      "hint": "Resides in Vatican City"
    },
    {
      "question": "What is the international organization dedicated to global health?",
      "options": [
        "WTO",
        "WHO",
        "UNESCO",
        "UNICEF"
      ],
      "correctAnswer": 1,
      "hint": "World Health Organization"
    },
    {
      "question": "What is the term for a person forced to leave their country to escape war or persecution?",
      "options": [
        "Tourist",
        "Refugee",
        "Immigrant",
        "Expat"
      ],
      "correctAnswer": 1,
      "hint": "Seeking asylum"
    },
    {
      "question": "Which country is known as the 'Land of the Rising Sun'?",
      "options": [
        "China",
        "Japan",
        "South Korea",
        "Thailand"
      ],
      "correctAnswer": 1,
      "hint": "Pacific island nation"
    },
    {
      "question": "What is the capital of France?",
      "options": [
        "Rome",
        "Berlin",
        "Paris",
        "Madrid"
      ],
      "correctAnswer": 2,
      "hint": "The City of Light"
    },
    {
      "question": "Which document defines the fundamental human rights worldwide?",
      "options": [
        "Magna Carta",
        "Universal Declaration of Human Rights",
        "US Constitution",
        "Bill of Rights"
      ],
      "correctAnswer": 1,
      "hint": "Adopted by UN in 1948"
    },
    {
      "question": "What color is the flag of the United Nations?",
      "options": [
        "Red and White",
        "Blue and White",
        "Green and White",
        "Black and White"
      ],
      "correctAnswer": 1,
      "hint": "Light blue field"
    }
  ],
  "medium_international": [
    {
      "question": "What does 'NATO' stand for?",
      "options": [
        "North Atlantic Treaty Organization",
        "National Association of Trade Organizations",
        "North American Treaty Office",
        "New Atlantic Trade Order"
      ],
      "correctAnswer": 0,
      "hint": "Military alliance formed in 1949"
    },
    {
      "question": "Which of these is NOT a permanent member of the UN Security Council?",
      "options": [
        "USA",
        "Russia",
        "Germany",
        "China"
      ],
      "correctAnswer": 2,
      "hint": "There are only five permanents"
    },
    {
      "question": "What was the 'Cold War'?",
      "options": [
        "A war in the Arctic",
        "A period of tension between USA and USSR",
        "A war fought with snowballs",
        "The Napoleonic Wars"
      ],
      "correctAnswer": 1,
      "hint": "Era of the Iron Curtain"
    },
    {
      "question": "In which city was the 'G20' summit held in 2023?",
      "options": [
        "New Delhi",
        "Bali",
        "Rome",
        "Osaka"
      ],
      "correctAnswer": 0,
      "hint": "Capital of India"
    },
    {
      "question": "Which international body deals with the rules of trade between nations?",
      "options": [
        "IMF",
        "WTO",
        "World Bank",
        "OECD"
      ],
      "correctAnswer": 1,
      "hint": "World Trade Organization"
    },
    {
      "question": "What is the 'Brexit'?",
      "options": [
        "A British breakfast",
        "The UK leaving the European Union",
        "A new tech company",
        "A type of European currency"
      ],
      "correctAnswer": 1,
      "hint": "Referendum held in 2016"
    },
    {
      "question": "Who was the first woman to be elected as Prime Minister of the UK?",
      "options": [
        "Theresa May",
        "Angela Merkel",
        "Margaret Thatcher",
        "Indira Gandhi"
      ],
      "correctAnswer": 2,
      "hint": "The Iron Lady"
    },
    {
      "question": "What is the main goal of the 'International Monetary Fund' (IMF)?",
      "options": [
        "Environmental protection",
        "Global monetary cooperation and financial stability",
        "Cultural exchange",
        "Military defense"
      ],
      "correctAnswer": 1,
      "hint": "Lender of last resort"
    },
    {
      "question": "The 'Geneva Conventions' are primarily concerned with what?",
      "options": [
        "Trade laws",
        "Treatment of victims of war",
        "Maritime borders",
        "Space exploration"
      ],
      "correctAnswer": 1,
      "hint": "Humanitarian law"
    },
    {
      "question": "Which country is the host of the FIFA World Cup 2026 along with USA and Mexico?",
      "options": [
        "Brazil",
        "Canada",
        "Argentina",
        "Germany"
      ],
      "correctAnswer": 1,
      "hint": "North American neighbor"
    },
    {
      "question": "What is the 'Red Cross' primarily known for?",
      "options": [
        "Banking",
        "Humanitarian aid and disaster relief",
        "Fashion design",
        "Sports equipment"
      ],
      "correctAnswer": 1,
      "hint": "Founded by Henry Dunant"
    },
    {
      "question": "Which agreement aimed to end the conflict in Northern Ireland?",
      "options": [
        "Versailles Treaty",
        "Good Friday Agreement",
        "Oslo Accords",
        "Camp David Accords"
      ],
      "correctAnswer": 1,
      "hint": "1998 peace deal"
    },
    {
      "question": "What is the 'G7'?",
      "options": [
        "A smartphone",
        "A group of seven advanced economies",
        "A military rank",
        "Seven continents"
      ],
      "correctAnswer": 1,
      "hint": "Informal forum of leaders"
    },
    {
      "question": "Which sea has been the subject of significant territorial disputes involving China and its neighbors?",
      "options": [
        "Mediterranean Sea",
        "South China Sea",
        "Black Sea",
        "Red Sea"
      ],
      "correctAnswer": 1,
      "hint": "Nine-dash line"
    },
    {
      "question": "Who is the current Secretary-General of the United Nations (as of 2024)?",
      "options": [
        "Ban Ki-moon",
        "Kofi Annan",
        "Ant\u00f3nio Guterres",
        "Boutros Boutros-Ghali"
      ],
      "correctAnswer": 2,
      "hint": "Former PM of Portugal"
    }
  ],
  "hard_international": [
    {
      "question": "What is the 'R2P' doctrine in international relations?",
      "options": [
        "Right to Petition",
        "Responsibility to Protect",
        "Report to Parliament",
        "Return to Peace"
      ],
      "correctAnswer": 1,
      "hint": "Adopted at the 2005 World Summit"
    },
    {
      "question": "Which treaty established the European Union in 1993?",
      "options": [
        "Treaty of Versailles",
        "Treaty of Rome",
        "Maastricht Treaty",
        "Schengen Agreement"
      ],
      "correctAnswer": 2,
      "hint": "Created the pillar structure"
    },
    {
      "question": "The 'Abraham Accords' normalized relations between Israel and which group of countries?",
      "options": [
        "European nations",
        "Arab nations",
        "South American nations",
        "Asian nations"
      ],
      "correctAnswer": 1,
      "hint": "Signed in 2020"
    },
    {
      "question": "What is 'Soft Power', a term coined by Joseph Nye?",
      "options": [
        "Economic sanctions",
        "Attraction and persuasion rather than coercion",
        "Military force",
        "Nuclear deterrent"
      ],
      "correctAnswer": 1,
      "hint": "Cultural and ideological influence"
    },
    {
      "question": "Which organization was the predecessor to the United Nations?",
      "options": [
        "International Court of Justice",
        "League of Nations",
        "European Coal and Steel Community",
        "The Commonwealth"
      ],
      "correctAnswer": 1,
      "hint": "Established after WWI"
    },
    {
      "question": "What is the 'Nuclear Non-Proliferation Treaty' (NPT) designed to do?",
      "options": [
        "Promote nuclear energy",
        "Prevent the spread of nuclear weapons",
        "Ban all radiation",
        "Regulate hospitals"
      ],
      "correctAnswer": 1,
      "hint": "Signed in 1968"
    },
    {
      "question": "Which country left the International Criminal Court (ICC) in 2017 but later rejoined?",
      "options": [
        "Burundi",
        "Gambia",
        "Philippines",
        "South Africa"
      ],
      "correctAnswer": 1,
      "hint": "West African nation"
    },
    {
      "question": "What does the 'Interpol' facilitate?",
      "options": [
        "International air travel",
        "International police cooperation",
        "International trade",
        "International sports"
      ],
      "correctAnswer": 1,
      "hint": "Headquartered in Lyon"
    },
    {
      "question": "The 'AUKUS' pact is a security partnership between which three countries?",
      "options": [
        "Australia, UK, USA",
        "Austria, Ukraine, USA",
        "Australia, UAE, UK",
        "Argentina, UK, Uruguay"
      ],
      "correctAnswer": 0,
      "hint": "Indo-Pacific security"
    },
    {
      "question": "What is the 'BRICS' group?",
      "options": [
        "Construction companies",
        "Brazil, Russia, India, China, South Africa",
        "British Islands and Colonies",
        "Basic Regional Input Codes"
      ],
      "correctAnswer": 1,
      "hint": "Emerging economies"
    },
    {
      "question": "Which body of the UN is responsible for maintaining international peace and security?",
      "options": [
        "General Assembly",
        "Security Council",
        "Secretariat",
        "Trusteeship Council"
      ],
      "correctAnswer": 1,
      "hint": "Has 15 members"
    },
    {
      "question": "What is the 'Belt and Road Initiative' (BRI)?",
      "options": [
        "A fashion show",
        "China's global infrastructure development strategy",
        "A beltway around London",
        "An Olympic event"
      ],
      "correctAnswer": 1,
      "hint": "One Belt One Road"
    },
    {
      "question": "The 'Kyoto Protocol' was primarily aimed at what?",
      "options": [
        "Reducing income inequality",
        "Reducing greenhouse gas emissions",
        "Preventing nuclear war",
        "Promoting education"
      ],
      "correctAnswer": 1,
      "hint": "Climate change treaty"
    },
    {
      "question": "What is 'Hegemony' in international politics?",
      "options": [
        "Democratic rule",
        "Dominance of one state over others",
        "Equality between nations",
        "Religious leadership"
      ],
      "correctAnswer": 1,
      "hint": "Leadership or dominance"
    },
    {
      "question": "Which conflict was the 'Camp David Accords' of 1978 trying to resolve?",
      "options": [
        "Vietnam War",
        "Egypt-Israel conflict",
        "Korean War",
        "WWI"
      ],
      "correctAnswer": 1,
      "hint": "Mediated by Jimmy Carter"
    },
    {
      "question": "What is the 'World Bank's primarily mission?",
      "options": [
        "Space exploration",
        "Poverty reduction and development",
        "Global news",
        "Weapon control"
      ],
      "correctAnswer": 1,
      "hint": "Provides loans to developing countries"
    },
    {
      "question": "Which judicial body of the UN is located in The Hague?",
      "options": [
        "International Criminal Court",
        "International Court of Justice",
        "European Court of Human Rights",
        "Security Council"
      ],
      "correctAnswer": 1,
      "hint": "ICJ"
    },
    {
      "question": "What is the 'Schengen Agreement'?",
      "options": [
        "A trade deal",
        "An agreement for border-free travel in Europe",
        "A military alliance",
        "A tax treaty"
      ],
      "correctAnswer": 1,
      "hint": "Abolition of internal borders"
    },
    {
      "question": "The 'Quadrilateral Security Dialogue' (Quad) includes which countries?",
      "options": [
        "USA, UK, Canada, Australia",
        "USA, Japan, Australia, India",
        "China, Russia, Iran, North Korea",
        "Germany, France, Italy, UK"
      ],
      "correctAnswer": 1,
      "hint": "Indo-Pacific strategic dialogue"
    },
    {
      "question": "What is 'Realpolitik'?",
      "options": [
        "Politics based on ideals",
        "Politics based on practical and material factors",
        "Royal politics",
        "Religious politics"
      ],
      "correctAnswer": 1,
      "hint": "Often associated with Bismarck"
    }
  ],
  "easy_land": [
    {
      "question": "What is the highest mountain in the world?",
      "options": [
        "K2",
        "Mount Everest",
        "Kangchenjunga",
        "Lhotse"
      ],
      "correctAnswer": 1,
      "hint": "Located in the Himalayas"
    },
    {
      "question": "Which is the longest river in the world?",
      "options": [
        "Amazon",
        "Nile",
        "Yangtze",
        "Mississippi"
      ],
      "correctAnswer": 1,
      "hint": "Flows through Northeastern Africa"
    },
    {
      "question": "What is a large area of flat land called?",
      "options": [
        "Mountain",
        "Valley",
        "Plain",
        "Canyon"
      ],
      "correctAnswer": 2,
      "hint": "Often used for farming"
    },
    {
      "question": "What do we call a body of land surrounded by water on all sides?",
      "options": [
        "Peninsula",
        "Continent",
        "Island",
        "Isthmus"
      ],
      "correctAnswer": 2,
      "hint": "Like Hawaii or Madagascar"
    },
    {
      "question": "What is the largest desert in the world?",
      "options": [
        "Gobi",
        "Sahara",
        "Antarctica",
        "Arabian"
      ],
      "correctAnswer": 2,
      "hint": "A cold desert counts too"
    },
    {
      "question": "Which ocean is the largest?",
      "options": [
        "Atlantic",
        "Indian",
        "Arctic",
        "Pacific"
      ],
      "correctAnswer": 3,
      "hint": "Covers about one-third of the Earth"
    },
    {
      "question": "A piece of land surrounded by water on three sides is called a?",
      "options": [
        "Island",
        "Peninsula",
        "Delta",
        "Plateau"
      ],
      "correctAnswer": 1,
      "hint": "Like Italy or Florida"
    },
    {
      "question": "What is a deep valley with very steep sides called?",
      "options": [
        "Hill",
        "Canyon",
        "Plain",
        "Plateau"
      ],
      "correctAnswer": 1,
      "hint": "The 'Grand' one is in Arizona"
    },
    {
      "question": "What is a large, slow-moving mass of ice called?",
      "options": [
        "Iceberg",
        "Glacier",
        "Avalanche",
        "Frost"
      ],
      "correctAnswer": 1,
      "hint": "Found in polar regions or high mountains"
    },
    {
      "question": "A vent in the Earth's crust that allows molten rock to escape is a?",
      "options": [
        "Cave",
        "Geyser",
        "Volcano",
        "Fjord"
      ],
      "correctAnswer": 2,
      "hint": "Can be active, dormant, or extinct"
    }
  ],
  "medium_land": [
    {
      "question": "What is the name for the point where a river enters the sea, often forming a triangular shape?",
      "options": [
        "Source",
        "Delta",
        "Tributary",
        "Canyon"
      ],
      "correctAnswer": 1,
      "hint": "Named after a Greek letter"
    },
    {
      "question": "Which mountain range runs along the west coast of South America?",
      "options": [
        "Rockies",
        "Andes",
        "Himalayas",
        "Alps"
      ],
      "correctAnswer": 1,
      "hint": "Longest continental mountain range"
    },
    {
      "question": "A 'Plateau' is best described as?",
      "options": [
        "A low area between hills",
        "A flat-topped highland",
        "A narrow strip of water",
        "A sandy beach"
      ],
      "correctAnswer": 1,
      "hint": "Also called a tableland"
    },
    {
      "question": "What is the largest salt lake in the world?",
      "options": [
        "Caspian Sea",
        "Dead Sea",
        "Great Salt Lake",
        "Aral Sea"
      ],
      "correctAnswer": 0,
      "hint": "Bordered by Russia and Iran"
    },
    {
      "question": "An 'Archipelago' is a term used to describe?",
      "options": [
        "A single mountain",
        "A group or chain of islands",
        "A deep trench",
        "A flat plain"
      ],
      "correctAnswer": 1,
      "hint": "Like Indonesia or the Philippines"
    },
    {
      "question": "Which waterfall is the highest in the world?",
      "options": [
        "Niagara Falls",
        "Victoria Falls",
        "Angel Falls",
        "Iguazu Falls"
      ],
      "correctAnswer": 2,
      "hint": "Located in Venezuela"
    },
    {
      "question": "What is a 'Fjord'?",
      "options": [
        "A volcanic crater",
        "A long, narrow inlet with steep sides created by a glacier",
        "A tropical island",
        "A dry river bed"
      ],
      "correctAnswer": 1,
      "hint": "Common in Norway"
    },
    {
      "question": "The 'Great Rift Valley' is located primarily on which continent?",
      "options": [
        "Asia",
        "Africa",
        "South America",
        "Europe"
      ],
      "correctAnswer": 1,
      "hint": "Geological feature stretching 6,000 km"
    },
    {
      "question": "What is the name for a ring-shaped coral reef that surrounds a lagoon?",
      "options": [
        "Fringing reef",
        "Barrier reef",
        "Atoll",
        "Seamount"
      ],
      "correctAnswer": 2,
      "hint": "Often found in the Pacific"
    },
    {
      "question": "Which is the largest hot desert in the world?",
      "options": [
        "Sahara",
        "Gobi",
        "Thar",
        "Kalahari"
      ],
      "correctAnswer": 0,
      "hint": "Spans across North Africa"
    },
    {
      "question": "What is an 'Isthmus'?",
      "options": [
        "A large bay",
        "A narrow strip of land connecting two larger landmasses",
        "A mountain pass",
        "An underground cave"
      ],
      "correctAnswer": 1,
      "hint": "Like the one in Panama"
    },
    {
      "question": "The 'Dead Sea' is famous for being?",
      "options": [
        "The largest lake",
        "The lowest point on Earth's land surface",
        "The coldest sea",
        "The deepest ocean"
      ],
      "correctAnswer": 1,
      "hint": "So salty you can easily float"
    },
    {
      "question": "A 'Tributary' is?",
      "options": [
        "A tax paid to a king",
        "A river or stream flowing into a larger river",
        "The end of a river",
        "A coastal wave"
      ],
      "correctAnswer": 1,
      "hint": "Feeds into a main river"
    },
    {
      "question": "Which desert is known as the driest place on Earth?",
      "options": [
        "Sahara",
        "Atacama",
        "Mojave",
        "Namib"
      ],
      "correctAnswer": 1,
      "hint": "Located in Chile"
    },
    {
      "question": "What is a 'Steppe'?",
      "options": [
        "A high mountain",
        "A large area of flat, unforested grassland",
        "A dense rainforest",
        "A rocky coastline"
      ],
      "correctAnswer": 1,
      "hint": "Common in Eurasia"
    }
  ],
  "hard_land": [
    {
      "question": "What is the 'Altiplano'?",
      "options": [
        "A deep sea trench",
        "A high-altitude plateau in the Andes",
        "A type of volcano",
        "A river in Spain"
      ],
      "correctAnswer": 1,
      "hint": "Second largest high plateau in the world"
    },
    {
      "question": "Which underwater feature is the deepest point in the world's oceans?",
      "options": [
        "Puerto Rico Trench",
        "Mariana Trench",
        "Java Trench",
        "Kuril Trench"
      ],
      "correctAnswer": 1,
      "hint": "Challenger Deep is here"
    },
    {
      "question": "A 'Karst' landscape is primarily shaped by the dissolution of which rock?",
      "options": [
        "Granite",
        "Basalt",
        "Limestone",
        "Sandstone"
      ],
      "correctAnswer": 2,
      "hint": "Features caves and sinkholes"
    },
    {
      "question": "What is an 'Inselberg'?",
      "options": [
        "An ice mountain",
        "An isolated hill or mountain rising abruptly from a plain",
        "A type of island",
        "A deep forest"
      ],
      "correctAnswer": 1,
      "hint": "Example: Uluru (Ayers Rock)"
    },
    {
      "question": "The 'Tibetan Plateau' is often referred to by which nickname?",
      "options": [
        "The Dark Continent",
        "The Roof of the World",
        "The Land of Thousand Lakes",
        "The Garden of Eden"
      ],
      "correctAnswer": 1,
      "hint": "Highest and largest plateau"
    },
    {
      "question": "What is a 'Cirque' in glacial geography?",
      "options": [
        "A circular forest",
        "An amphitheater-like valley carved by a glacier",
        "A mountain peak",
        "A type of iceberg"
      ],
      "correctAnswer": 1,
      "hint": "Looks like a bowl"
    },
    {
      "question": "Which river flows through the Grand Canyon?",
      "options": [
        "Mississippi",
        "Colorado",
        "Rio Grande",
        "Missouri"
      ],
      "correctAnswer": 1,
      "hint": "Responsible for cutting the canyon"
    },
    {
      "question": "A 'Doline' is another name for which geological feature?",
      "options": [
        "A sand dune",
        "A sinkhole",
        "A waterfall",
        "A mountain ridge"
      ],
      "correctAnswer": 1,
      "hint": "Common in Karst regions"
    },
    {
      "question": "What is a 'Yardang'?",
      "options": [
        "A type of tree",
        "A streamlined wind-eroded ridge",
        "A volcanic mudflow",
        "A river delta"
      ],
      "correctAnswer": 1,
      "hint": "Found in desert environments"
    },
    {
      "question": "The 'Great Dividing Range' is the most significant mountain range in which country?",
      "options": [
        "Canada",
        "Australia",
        "New Zealand",
        "South Africa"
      ],
      "correctAnswer": 1,
      "hint": "Eastern Australia"
    },
    {
      "question": "Which term describes the process of coastal land being worn away by waves?",
      "options": [
        "Deposition",
        "Abrasion/Erosion",
        "Sedimentation",
        "Foliation"
      ],
      "correctAnswer": 1,
      "hint": "Forms cliffs and sea stacks"
    },
    {
      "question": "What is a 'Drumlin'?",
      "options": [
        "A musical instrument",
        "A whale-shaped hill formed by glacial action",
        "A type of volcanic rock",
        "A coastal sand bar"
      ],
      "correctAnswer": 1,
      "hint": "Elongated hill of glacial till"
    },
    {
      "question": "Which sea is shrinking rapidly due to irrigation projects diverting its source rivers?",
      "options": [
        "Caspian Sea",
        "Aral Sea",
        "Black Sea",
        "Red Sea"
      ],
      "correctAnswer": 1,
      "hint": "Central Asia environmental disaster"
    },
    {
      "question": "What is an 'Endorheic basin'?",
      "options": [
        "A basin that drains into the sea",
        "A limited drainage basin that retains water and has no outflow to the ocean",
        "A basin formed by a meteor",
        "A flooded valley"
      ],
      "correctAnswer": 1,
      "hint": "Like the Great Salt Lake or the Okavango Delta"
    },
    {
      "question": "Which mountain is known as the 'Savage Mountain' due to its extreme difficulty to climb?",
      "options": [
        "Everest",
        "K2",
        "Annapurna",
        "Matterhorn"
      ],
      "correctAnswer": 1,
      "hint": "Second highest peak"
    },
    {
      "question": "What is a 'Guyot'?",
      "options": [
        "A type of coral",
        "A flat-topped seamount",
        "A deep-sea fish",
        "A volcanic island"
      ],
      "correctAnswer": 1,
      "hint": "Named after Arnold Guyot"
    },
    {
      "question": "The 'Pantanal' is the world's largest tropical wetland, located mostly in which country?",
      "options": [
        "Australia",
        "Brazil",
        "Congo",
        "India"
      ],
      "correctAnswer": 1,
      "hint": "In South America"
    },
    {
      "question": "What is 'Orogeny'?",
      "options": [
        "The study of birds",
        "The process of mountain building",
        "The flow of rivers",
        "The formation of soil"
      ],
      "correctAnswer": 1,
      "hint": "Tectonic plate interaction"
    },
    {
      "question": "Which strait separates the continents of Asia and North America?",
      "options": [
        "Gibraltar",
        "Bering Strait",
        "Strait of Hormuz",
        "Bosporus"
      ],
      "correctAnswer": 1,
      "hint": "Between Russia and Alaska"
    },
    {
      "question": "A 'Hamada' is a type of desert landscape consisting of?",
      "options": [
        "High sand dunes",
        "Hard, rocky plateaus",
        "Salt flats",
        "Dry lake beds"
      ],
      "correctAnswer": 1,
      "hint": "Arabic for 'barren'"
    }
  ],
  "easy_med": [
    {
      "question": "What system of land ownership was common in medieval Europe?",
      "options": [
        "Capitalism",
        "Communism",
        "Feudalism",
        "Socialism"
      ],
      "correctAnswer": 2,
      "hint": "Lord and vassal relationship"
    },
    {
      "question": "Who was the famous king of England who defeated the Vikings and is called 'the Great'?",
      "options": [
        "Arthur",
        "Alfred",
        "Henry VIII",
        "Richard"
      ],
      "correctAnswer": 1,
      "hint": "King of Wessex"
    },
    {
      "question": "What were the religious wars fought by Christians to capture the Holy Land called?",
      "options": [
        "The Crusades",
        "The Revolutions",
        "The Great Wars",
        "The Reformations"
      ],
      "correctAnswer": 0,
      "hint": "Series of military expeditions"
    },
    {
      "question": "Which 14th-century plague killed about a third of Europe's population?",
      "options": [
        "The Flu",
        "The Black Death",
        "Smallpox",
        "Cholera"
      ],
      "correctAnswer": 1,
      "hint": "Bubonic plague"
    },
    {
      "question": "What was the main weapon of a medieval knight on horseback?",
      "options": [
        "Sword",
        "Lance",
        "Bow",
        "Axe"
      ],
      "correctAnswer": 1,
      "hint": "A long wooden spear"
    },
    {
      "question": "Who was the female French hero burned at the stake during the Hundred Years' War?",
      "options": [
        "Marie Antoinette",
        "Joan of Arc",
        "Catherine the Great",
        "Elizabeth I"
      ],
      "correctAnswer": 1,
      "hint": "The Maid of Orleans"
    },
    {
      "question": "What was the primary language of the Church and scholars in medieval Europe?",
      "options": [
        "English",
        "Latin",
        "French",
        "German"
      ],
      "correctAnswer": 1,
      "hint": "Language of ancient Rome"
    },
    {
      "question": "Which document, signed in 1215, limited the power of the English King?",
      "options": [
        "Declaration of Independence",
        "Magna Carta",
        "Bill of Rights",
        "Common Sense"
      ],
      "correctAnswer": 1,
      "hint": "The Great Charter"
    },
    {
      "question": "What was the name of the heavily armored soldiers of the Middle Ages?",
      "options": [
        "Legionaries",
        "Knights",
        "Samurai",
        "Janissaries"
      ],
      "correctAnswer": 1,
      "hint": "Followed a code of chivalry"
    },
    {
      "question": "Which large church was the center of medieval life in a town?",
      "options": [
        "Temple",
        "Cathedral",
        "Mosque",
        "Synagogue"
      ],
      "correctAnswer": 1,
      "hint": "Often built in Gothic style"
    }
  ],
  "medium_med": [
    {
      "question": "Who was crowned the first Holy Roman Emperor in 800 AD?",
      "options": [
        "Clovis",
        "Charlemagne",
        "Louis the Pious",
        "Otto I"
      ],
      "correctAnswer": 1,
      "hint": "King of the Franks"
    },
    {
      "question": "The 'Hundred Years' War' was fought between which two countries?",
      "options": [
        "France and Spain",
        "England and France",
        "Germany and Italy",
        "Spain and Portugal"
      ],
      "correctAnswer": 1,
      "hint": "Actually lasted 116 years"
    },
    {
      "question": "Which Viking leader is said to have reached North America around 1000 AD?",
      "options": [
        "Ragnar Lothbrok",
        "Leif Erikson",
        "Ivar the Boneless",
        "Eric the Red"
      ],
      "correctAnswer": 1,
      "hint": "Son of Eric the Red"
    },
    {
      "question": "What was the name of the capital of the Byzantine Empire?",
      "options": [
        "Rome",
        "Constantinople",
        "Athens",
        "Alexandria"
      ],
      "correctAnswer": 1,
      "hint": "Modern-day Istanbul"
    },
    {
      "question": "Which king led the Third Crusade and was known as 'the Lionheart'?",
      "options": [
        "John",
        "Richard I",
        "William the Conqueror",
        "Edward I"
      ],
      "correctAnswer": 1,
      "hint": "Fought Saladin"
    },
    {
      "question": "The 'War of the Roses' was a civil war in which country?",
      "options": [
        "France",
        "England",
        "Scotland",
        "Spain"
      ],
      "correctAnswer": 1,
      "hint": "Between York and Lancaster"
    },
    {
      "question": "Who was the founder of the Mongol Empire?",
      "options": [
        "Kublai Khan",
        "Genghis Khan",
        "Tamerlane",
        "Attila"
      ],
      "correctAnswer": 1,
      "hint": "Born as Temujin"
    },
    {
      "question": "What is the term for a medieval association of craftsmen or merchants?",
      "options": [
        "Union",
        "Guild",
        "Corporation",
        "Cartel"
      ],
      "correctAnswer": 1,
      "hint": "Regulated quality and prices"
    },
    {
      "question": "Which battle in 1066 saw William the Conqueror become King of England?",
      "options": [
        "Battle of Agincourt",
        "Battle of Hastings",
        "Battle of Waterloo",
        "Battle of Bosworth"
      ],
      "correctAnswer": 1,
      "hint": "Norman conquest"
    },
    {
      "question": "What was the name of the code of honor followed by knights?",
      "options": [
        "Bushido",
        "Chivalry",
        "Fealty",
        "Serfdom"
      ],
      "correctAnswer": 1,
      "hint": "Focused on bravery and courtesy"
    },
    {
      "question": "Which Italian traveler spent 17 years in the court of Kublai Khan?",
      "options": [
        "Christopher Columbus",
        "Marco Polo",
        "Amerigo Vespucci",
        "Galileo"
      ],
      "correctAnswer": 1,
      "hint": "Wrote 'The Travels'"
    },
    {
      "question": "The 'Hanseatic League' was a commercial and defensive confederation in which region?",
      "options": [
        "Mediterranean",
        "Northern Europe/Baltic",
        "Middle East",
        "Southeast Asia"
      ],
      "correctAnswer": 1,
      "hint": "Network of trading cities"
    },
    {
      "question": "Which Byzantine Emperor is famous for his law code and building the Hagia Sophia?",
      "options": [
        "Constantine",
        "Justinian I",
        "Heraclius",
        "Leo III"
      ],
      "correctAnswer": 1,
      "hint": "Husband of Theodora"
    },
    {
      "question": "What was a 'Serf' in the feudal system?",
      "options": [
        "A noble",
        "A peasant tied to the land",
        "A knight's servant",
        "A merchant"
      ],
      "correctAnswer": 1,
      "hint": "Bottom of the social hierarchy"
    },
    {
      "question": "Which French king is often called 'St. Louis'?",
      "options": [
        "Louis VII",
        "Louis IX",
        "Louis XIV",
        "Louis XVI"
      ],
      "correctAnswer": 1,
      "hint": "Only French king to be canonized"
    }
  ],
  "hard_med": [
    {
      "question": "What was the 'Golden Bull of 1356'?",
      "options": [
        "A famous statue",
        "A decree fixing the structure of the Holy Roman Empire election",
        "An economic treaty",
        "A declaration of war"
      ],
      "correctAnswer": 1,
      "hint": "Issued by Emperor Charles IV"
    },
    {
      "question": "Who was the Muslim leader who recaptured Jerusalem in 1187?",
      "options": [
        "Suleiman the Magnificent",
        "Saladin",
        "Baibars",
        "Harun al-Rashid"
      ],
      "correctAnswer": 1,
      "hint": "Founder of the Ayyubid dynasty"
    },
    {
      "question": "The 'Battle of Agincourt' in 1415 was a major victory for which king?",
      "options": [
        "Henry V",
        "Edward III",
        "Richard II",
        "Charles VII"
      ],
      "correctAnswer": 0,
      "hint": "Famous for the use of longbows"
    },
    {
      "question": "What was the 'Investiture Controversy' about?",
      "options": [
        "Taxes",
        "Whether the Pope or Monarch could appoint church officials",
        "Inheritance of land",
        "Marriage of priests"
      ],
      "correctAnswer": 1,
      "hint": "Conflict between Church and State"
    },
    {
      "question": "Which 13th-century document is considered the foundation of the 'Parliament' system in England?",
      "options": [
        "Magna Carta",
        "Provisions of Oxford",
        "Domesday Book",
        "Bill of Rights"
      ],
      "correctAnswer": 1,
      "hint": "1258, following the rebellion of Simon de Montfort"
    },
    {
      "question": "The 'Reconquista' refers to the centuries-long effort to retake which peninsula from the Moors?",
      "options": [
        "Italian",
        "Iberian",
        "Balkan",
        "Arabian"
      ],
      "correctAnswer": 1,
      "hint": "Spain and Portugal"
    },
    {
      "question": "Who was the author of the 'Summa Theologica'?",
      "options": [
        "St. Augustine",
        "St. Thomas Aquinas",
        "Peter Abelard",
        "Duns Scotus"
      ],
      "correctAnswer": 1,
      "hint": "Scholastic philosopher"
    },
    {
      "question": "Which Mongol leader founded the Yuan Dynasty in China?",
      "options": [
        "Genghis Khan",
        "Kublai Khan",
        "Ogodei Khan",
        "Hulagu Khan"
      ],
      "correctAnswer": 1,
      "hint": "Grandson of Genghis"
    },
    {
      "question": "The 'Great Schism' of 1054 resulted in the permanent split of which two groups?",
      "options": [
        "Catholics and Protestants",
        "Eastern Orthodox and Roman Catholic",
        "Sunni and Shia",
        "Jews and Christians"
      ],
      "correctAnswer": 1,
      "hint": "Mutual excommunications"
    },
    {
      "question": "What was the name of the first ruling dynasty of the Franks?",
      "options": [
        "Carolingian",
        "Merovingian",
        "Capetian",
        "Bourbon"
      ],
      "correctAnswer": 1,
      "hint": "Founded by Childeric I"
    },
    {
      "question": "Which council in 1095 saw Pope Urban II call for the First Crusade?",
      "options": [
        "Council of Trent",
        "Council of Clermont",
        "Council of Constance",
        "Council of Nicea"
      ],
      "correctAnswer": 1,
      "hint": "Deus vult!"
    },
    {
      "question": "Who was the English king defeated and killed at the Battle of Hastings?",
      "options": [
        "Harold Godwinson",
        "Harald Hardrada",
        "Edward the Confessor",
        "William Rufus"
      ],
      "correctAnswer": 0,
      "hint": "Last Anglo-Saxon king"
    },
    {
      "question": "The 'Hussite Wars' took place in which kingdom?",
      "options": [
        "Hungary",
        "Bohemia",
        "Poland",
        "Naples"
      ],
      "correctAnswer": 1,
      "hint": "Modern-day Czech Republic"
    },
    {
      "question": "Which female ruler was Queen of both France and England in her lifetime?",
      "options": [
        "Catherine de Medici",
        "Eleanor of Aquitaine",
        "Isabella of Castile",
        "Anne of Brittany"
      ],
      "correctAnswer": 1,
      "hint": "Mother of Richard the Lionheart"
    },
    {
      "question": "What was the 'Domesday Book'?",
      "options": [
        "A religious text",
        "A comprehensive survey of land and resources in England",
        "A book of spells",
        "A chronicle of the plague"
      ],
      "correctAnswer": 1,
      "hint": "Commissioned by William the Conqueror in 1085"
    },
    {
      "question": "Who was the main opponent of Charlemagne's expansion into Saxony?",
      "options": [
        "Widukind",
        "Alaric",
        "Theodoric",
        "Offa"
      ],
      "correctAnswer": 0,
      "hint": "Leader of the Saxons"
    },
    {
      "question": "Which city was the seat of the Papacy during the 'Avignon Papacy' (1309\u20131376)?",
      "options": [
        "Rome",
        "Avignon",
        "Paris",
        "Lyon"
      ],
      "correctAnswer": 1,
      "hint": "The 'Babylonian Captivity' of the Church"
    },
    {
      "question": "The 'Battle of Manzikert' in 1071 was a disastrous defeat for which empire?",
      "options": [
        "Byzantine",
        "Holy Roman",
        "Persian",
        "Abbasid"
      ],
      "correctAnswer": 0,
      "hint": "Lost to the Seljuk Turks"
    },
    {
      "question": "Who won the 'Battle of Tours' in 732, stopping the Umayyad advance into Gaul?",
      "options": [
        "Charles Martel",
        "Pepin the Short",
        "Charlemagne",
        "Clovis"
      ],
      "correctAnswer": 0,
      "hint": "The Hammer"
    },
    {
      "question": "What was the name of the Byzantine secret weapon that could burn on water?",
      "options": [
        "Greek Fire",
        "Liquid Gold",
        "Dragon Breath",
        "Naphtha"
      ],
      "correctAnswer": 0,
      "hint": "Used in naval battles"
    }
  ],
  "easy_mod": [
    {
      "question": "Which country was the first to industrialize?",
      "options": [
        "USA",
        "France",
        "Great Britain",
        "Germany"
      ],
      "correctAnswer": 2,
      "hint": "Home of the steam engine"
    },
    {
      "question": "Who was the leader of Nazi Germany during World War II?",
      "options": [
        "Benito Mussolini",
        "Adolf Hitler",
        "Joseph Stalin",
        "Winston Churchill"
      ],
      "correctAnswer": 1,
      "hint": "The F\u00fchrer"
    },
    {
      "question": "In what year did the French Revolution begin?",
      "options": [
        "1776",
        "1789",
        "1812",
        "1848"
      ],
      "correctAnswer": 1,
      "hint": "Storming of the Bastille"
    },
    {
      "question": "Who was the first President of the United States?",
      "options": [
        "Abraham Lincoln",
        "Thomas Jefferson",
        "George Washington",
        "Benjamin Franklin"
      ],
      "correctAnswer": 2,
      "hint": "General of the Continental Army"
    },
    {
      "question": "Which war was fought between the North and South in the USA (1861-1865)?",
      "options": [
        "Revolutionary War",
        "Civil War",
        "War of 1812",
        "WWI"
      ],
      "correctAnswer": 1,
      "hint": "Focused on slavery and states' rights"
    },
    {
      "question": "What was the name of the ship that sank in 1912 after hitting an iceberg?",
      "options": [
        "Lusitania",
        "Titanic",
        "Britannic",
        "Olympic"
      ],
      "correctAnswer": 1,
      "hint": "The 'unsinkable' ship"
    },
    {
      "question": "Who is known as the 'Father of the Nation' in India?",
      "options": [
        "Jawaharlal Nehru",
        "Mahatma Gandhi",
        "Subhas Chandra Bose",
        "B.R. Ambedkar"
      ],
      "correctAnswer": 1,
      "hint": "Advocated non-violence"
    },
    {
      "question": "The 'Berlin Wall' separated which two countries/sides?",
      "options": [
        "France and Germany",
        "East and West Germany",
        "USA and USSR",
        "North and South Korea"
      ],
      "correctAnswer": 1,
      "hint": "Symbol of the Cold War"
    },
    {
      "question": "Which event triggered the start of World War I?",
      "options": [
        "Bombing of Pearl Harbor",
        "Invasion of Poland",
        "Assassination of Archduke Franz Ferdinand",
        "The Great Depression"
      ],
      "correctAnswer": 2,
      "hint": "In Sarajevo, 1914"
    },
    {
      "question": "Who was the first man to walk on the moon?",
      "options": [
        "Yuri Gagarin",
        "Neil Armstrong",
        "Buzz Aldrin",
        "John Glenn"
      ],
      "correctAnswer": 1,
      "hint": "Apollo 11 mission, 1969"
    }
  ],
  "medium_mod": [
    {
      "question": "The 'Treaty of Versailles' ended which war?",
      "options": [
        "Napoleonic Wars",
        "WWI",
        "WWII",
        "Franco-Prussian War"
      ],
      "correctAnswer": 1,
      "hint": "Signed in 1919"
    },
    {
      "question": "Who was the leader of the Soviet Union during World War II?",
      "options": [
        "Lenin",
        "Stalin",
        "Khrushchev",
        "Gorbachev"
      ],
      "correctAnswer": 1,
      "hint": "Defeated the Nazis at Stalingrad"
    },
    {
      "question": "The 'Industrial Revolution' began with the mechanization of which industry?",
      "options": [
        "Steel",
        "Textiles",
        "Mining",
        "Agriculture"
      ],
      "correctAnswer": 1,
      "hint": "Spinning jenny and water frame"
    },
    {
      "question": "Which US President Issued the Emancipation Proclamation?",
      "options": [
        "George Washington",
        "Andrew Jackson",
        "Abraham Lincoln",
        "Ulysses S. Grant"
      ],
      "correctAnswer": 2,
      "hint": "During the Civil War"
    },
    {
      "question": "In which year did the Russian Revolution take place, leading to the rise of the USSR?",
      "options": [
        "1905",
        "1917",
        "1929",
        "1945"
      ],
      "correctAnswer": 1,
      "hint": "Bolsheviks led by Lenin"
    },
    {
      "question": "Who was the British Prime Minister during most of World War II?",
      "options": [
        "Neville Chamberlain",
        "Winston Churchill",
        "Clement Attlee",
        "Anthony Eden"
      ],
      "correctAnswer": 1,
      "hint": "Known for his 'V' sign"
    },
    {
      "question": "Which movement aimed to end racial segregation and discrimination in the USA during the 1950s and 60s?",
      "options": [
        "Suffragette Movement",
        "Civil Rights Movement",
        "Prohibition",
        "New Deal"
      ],
      "correctAnswer": 1,
      "hint": "MLK Jr. was a leader"
    },
    {
      "question": "The 'Meiji Restoration' took place in which country?",
      "options": [
        "China",
        "Japan",
        "Korea",
        "Thailand"
      ],
      "correctAnswer": 1,
      "hint": "Modernization in the late 19th century"
    },
    {
      "question": "Who was the 'Iron Lady' of British politics?",
      "options": [
        "Queen Victoria",
        "Margaret Thatcher",
        "Theresa May",
        "Elizabeth II"
      ],
      "correctAnswer": 1,
      "hint": "Conservative PM in the 80s"
    },
    {
      "question": "Which country was divided at the 38th parallel after WWII?",
      "options": [
        "Vietnam",
        "Korea",
        "Germany",
        "Yemen"
      ],
      "correctAnswer": 1,
      "hint": "Led to the Korean War"
    },
    {
      "question": "What was the 'Cold War' policy of preventing the spread of communism called?",
      "options": [
        "Appeasement",
        "Containment",
        "Detente",
        "Isolationism"
      ],
      "correctAnswer": 1,
      "hint": "Truman Doctrine"
    },
    {
      "question": "The 'Great Depression' was triggered by a stock market crash in which year?",
      "options": [
        "1914",
        "1929",
        "1939",
        "1945"
      ],
      "correctAnswer": 1,
      "hint": "Black Tuesday"
    },
    {
      "question": "Who was the main author of the American Declaration of Independence?",
      "options": [
        "John Adams",
        "Thomas Jefferson",
        "Alexander Hamilton",
        "James Madison"
      ],
      "correctAnswer": 1,
      "hint": "Third US President"
    },
    {
      "question": "The 'Storming of the Bastille' is associated with which revolution?",
      "options": [
        "American",
        "French",
        "Russian",
        "Industrial"
      ],
      "correctAnswer": 1,
      "hint": "July 14, 1789"
    },
    {
      "question": "Who was the South African leader who fought against apartheid and became president in 1994?",
      "options": [
        "Desmond Tutu",
        "Nelson Mandela",
        "Thabo Mbeki",
        "Robert Mugabe"
      ],
      "correctAnswer": 1,
      "hint": "Spent 27 years in prison"
    }
  ],
  "hard_mod": [
    {
      "question": "What is the 'Marshall Plan'?",
      "options": [
        "A plan to invade Germany",
        "A program of US economic aid to rebuild Europe after WWII",
        "A military strategy in Korea",
        "A space exploration goal"
      ],
      "correctAnswer": 1,
      "hint": "Named after George Marshall"
    },
    {
      "question": "Which conference in 1945 saw the 'Big Three' (Stalin, Roosevelt, Churchill) discuss the post-war reorganization of Europe?",
      "options": [
        "Versailles",
        "Yalta",
        "Potsdam",
        "Munich"
      ],
      "correctAnswer": 1,
      "hint": "Held in Crimea"
    },
    {
      "question": "Who was the dominant figure in the French government during the 'Reign of Terror'?",
      "options": [
        "Napoleon",
        "Louis XVI",
        "Maximilien Robespierre",
        "Lafayette"
      ],
      "correctAnswer": 2,
      "hint": "Leader of the Jacobins"
    },
    {
      "question": "The 'Balfour Declaration' expressed British support for a national home for which people?",
      "options": [
        "Armenians",
        "Kurds",
        "Jewish people",
        "Palestinians"
      ],
      "correctAnswer": 2,
      "hint": "1917 document"
    },
    {
      "question": "Which 19th-century conflict is often called 'The First Modern War' due to the use of trench warfare and telegraphs?",
      "options": [
        "Crimean War",
        "Boer War",
        "Mexican-American War",
        "Franco-Prussian War"
      ],
      "correctAnswer": 0,
      "hint": "Russia vs Ottoman/UK/France"
    },
    {
      "question": "Who was the mastermind behind the unification of Germany in 1871?",
      "options": [
        "Wilhelm I",
        "Otto von Bismarck",
        "Frederick the Great",
        "Metternich"
      ],
      "correctAnswer": 1,
      "hint": "The Iron Chancellor"
    },
    {
      "question": "The 'Boxer Rebellion' was an anti-foreign and anti-Christian uprising in which country?",
      "options": [
        "Japan",
        "China",
        "India",
        "Philippines"
      ],
      "correctAnswer": 1,
      "hint": "Targeted the 'Foreign Devils'"
    },
    {
      "question": "What is the 'Salt March' led by Gandhi a protest against?",
      "options": [
        "Meat consumption",
        "British salt tax",
        "Water pollution",
        "Caste system"
      ],
      "correctAnswer": 1,
      "hint": "1930 non-violent protest"
    },
    {
      "question": "Which event in 1962 brought the USA and USSR to the brink of nuclear war?",
      "options": [
        "Berlin Airlift",
        "Korean War",
        "Cuban Missile Crisis",
        "U-2 Incident"
      ],
      "correctAnswer": 2,
      "hint": "Soviet missiles in Cuba"
    },
    {
      "question": "Who was the leader of the 'Long March' in China?",
      "options": [
        "Sun Yat-sen",
        "Chiang Kai-shek",
        "Mao Zedong",
        "Deng Xiaoping"
      ],
      "correctAnswer": 2,
      "hint": "Retreat of the Red Army"
    },
    {
      "question": "Which country was the first to grant women the right to vote in national elections (in 1893)?",
      "options": [
        "USA",
        "UK",
        "New Zealand",
        "Finland"
      ],
      "correctAnswer": 2,
      "hint": "Kate Sheppard was a key figure"
    },
    {
      "question": "The 'Glorious Revolution' of 1688 took place in which country?",
      "options": [
        "France",
        "England",
        "Netherlands",
        "Spain"
      ],
      "correctAnswer": 1,
      "hint": "Overthrew James II"
    },
    {
      "question": "Which treaty established the modern borders of most Middle Eastern states after WWI?",
      "options": [
        "Treaty of Sevres / Sykes-Picot Agreement",
        "Treaty of London",
        "Treaty of Brest-Litovsk",
        "Versailles"
      ],
      "correctAnswer": 0,
      "hint": "British-French secret deal"
    },
    {
      "question": "Who was the main leader of the 'Indonesian National Revolution' against the Dutch?",
      "options": [
        "Ho Chi Minh",
        "Sukarno",
        "Norodom Sihanouk",
        "Lee Kuan Yew"
      ],
      "correctAnswer": 1,
      "hint": "First President of Indonesia"
    },
    {
      "question": "The 'Tet Offensive' was a major turning point in which war?",
      "options": [
        "Korean War",
        "Vietnam War",
        "Gulf War",
        "Iraq War"
      ],
      "correctAnswer": 1,
      "hint": "1968 communist offensive"
    },
    {
      "question": "What was the 'Apartheid' system in South Africa primarily based on?",
      "options": [
        "Religious belief",
        "Racial segregation",
        "Economic class",
        "Language"
      ],
      "correctAnswer": 1,
      "hint": "System of institutionalized racism"
    },
    {
      "question": "Which 1848 publication authored by Marx and Engels outlined the principles of modern communism?",
      "options": [
        "Das Kapital",
        "The Communist Manifesto",
        "The Wealth of Nations",
        "Social Contract"
      ],
      "correctAnswer": 1,
      "hint": "Called for workers to unite"
    },
    {
      "question": "Who was the UN Secretary-General during the Cuban Missile Crisis?",
      "options": [
        "Trygve Lie",
        "Dag Hammarskj\u00f6ld",
        "U Thant",
        "Kurt Waldheim"
      ],
      "correctAnswer": 2,
      "hint": "Burmese diplomat"
    },
    {
      "question": "The 'Opium Wars' were fought between China and which empire?",
      "options": [
        "Russian",
        "British",
        "French",
        "Japanese"
      ],
      "correctAnswer": 1,
      "hint": "Over trade and sovereignty"
    },
    {
      "question": "In what year did the Berlin Wall finally fall, signaling the end of the Cold War?",
      "options": [
        "1987",
        "1989",
        "1991",
        "1993"
      ],
      "correctAnswer": 1,
      "hint": "November 9"
    }
  ],
  "easy_mov": [
    {
      "question": "Who directed the 1994 film 'Schindler's List'?",
      "options": [
        "James Cameron",
        "Steven Spielberg",
        "Martin Scorsese",
        "Quentin Tarantino"
      ],
      "correctAnswer": 1,
      "hint": "Also directed 'Jaws'"
    },
    {
      "question": "Which movie features the song 'My Heart Will Go On'?",
      "options": [
        "Bodyguard",
        "Titanic",
        "Ghost",
        "Pretty Woman"
      ],
      "correctAnswer": 1,
      "hint": "Celine Dion's big hit"
    },
    {
      "question": "Who played the character Jack Sparrow in 'Pirates of the Caribbean'?",
      "options": [
        "Brad Pitt",
        "Johnny Depp",
        "Tom Cruise",
        "Orlando Bloom"
      ],
      "correctAnswer": 1,
      "hint": "Known for quirky roles"
    },
    {
      "question": "What is the highest-grossing film of all time (unadjusted for inflation)?",
      "options": [
        "Avengers: Endgame",
        "Avatar",
        "Titanic",
        "Star Wars"
      ],
      "correctAnswer": 1,
      "hint": "Directed by James Cameron"
    },
    {
      "question": "Which animated film features the song 'Let It Go'?",
      "options": [
        "Moana",
        "Tangled",
        "Frozen",
        "Brave"
      ],
      "correctAnswer": 2,
      "hint": "Elsa is the main character"
    },
    {
      "question": "Who won the Oscar for Best Actor for his role in 'Joker' (2019)?",
      "options": [
        "Heath Ledger",
        "Joaquin Phoenix",
        "Christian Bale",
        "Robert De Niro"
      ],
      "correctAnswer": 1,
      "hint": "Brother of River Phoenix"
    },
    {
      "question": "In 'Star Wars', what is the name of Han Solo's Wookiee companion?",
      "options": [
        "Yoda",
        "Chewbacca",
        "Jabba",
        "Lando"
      ],
      "correctAnswer": 1,
      "hint": "A loyal co-pilot"
    },
    {
      "question": "Which movie franchise features a character named James Bond?",
      "options": [
        "Mission Impossible",
        "007",
        "Bourne",
        "Die Hard"
      ],
      "correctAnswer": 1,
      "hint": "British secret agent"
    },
    {
      "question": "What was the first feature-length animated movie ever released?",
      "options": [
        "Cinderella",
        "Snow White and the Seven Dwarfs",
        "Dumbo",
        "Bambi"
      ],
      "correctAnswer": 1,
      "hint": "Disney classic (1937)"
    },
    {
      "question": "In 'The Lion King', who is Simba's father?",
      "options": [
        "Scar",
        "Mufasa",
        "Pumbaa",
        "Timon"
      ],
      "correctAnswer": 1,
      "hint": "The rightful king"
    }
  ],
  "medium_mov": [
    {
      "question": "Who composed the iconic theme for 'Star Wars'?",
      "options": [
        "Hans Zimmer",
        "John Williams",
        "Ennio Morricone",
        "Danny Elfman"
      ],
      "correctAnswer": 1,
      "hint": "Most nominated living person for Oscars"
    },
    {
      "question": "Which film won the first-ever Academy Award for Best Picture?",
      "options": [
        "The Jazz Singer",
        "Wings",
        "Sunrise",
        "Metropolis"
      ],
      "correctAnswer": 1,
      "hint": "Silent film about WWI pilots"
    },
    {
      "question": "What was the first movie in the Marvel Cinematic Universe?",
      "options": [
        "Thor",
        "The Incredible Hulk",
        "Iron Man",
        "Captain America"
      ],
      "correctAnswer": 2,
      "hint": "Released in 2008"
    },
    {
      "question": "In the movie 'Inception', what is the term for the object used to check if someone is in a dream?",
      "options": [
        "Relic",
        "Totem",
        "Token",
        "Artifact"
      ],
      "correctAnswer": 1,
      "hint": "Cobb's is a spinning top"
    },
    {
      "question": "Which director is known for the 'Dark Knight' trilogy?",
      "options": [
        "Zack Snyder",
        "Christopher Nolan",
        "Tim Burton",
        "Joel Schumacher"
      ],
      "correctAnswer": 1,
      "hint": "Also directed 'Interstellar'"
    },
    {
      "question": "Who played the lead role in the 1999 film 'The Matrix'?",
      "options": [
        "Will Smith",
        "Keanu Reeves",
        "Tom Cruise",
        "Nicolas Cage"
      ],
      "correctAnswer": 1,
      "hint": "Neo"
    },
    {
      "question": "Which film features the famous 'Here's Johnny!' line?",
      "options": [
        "Psycho",
        "The Shining",
        "Halloween",
        "Alien"
      ],
      "correctAnswer": 1,
      "hint": "Directed by Stanley Kubrick"
    },
    {
      "question": "Who voiced the character Woody in 'Toy Story'?",
      "options": [
        "Tim Allen",
        "Tom Hanks",
        "Billy Crystal",
        "Robin Williams"
      ],
      "correctAnswer": 1,
      "hint": "A beloved cowboy"
    },
    {
      "question": "In which year was the original 'Jurassic Park' released?",
      "options": [
        "1990",
        "1993",
        "1995",
        "1997"
      ],
      "correctAnswer": 1,
      "hint": "Directed by Spielberg"
    },
    {
      "question": "Which movie won the Oscar for Best Picture in 2020, becoming the first non-English language film to do so?",
      "options": [
        "Roma",
        "The Irishman",
        "Parasite",
        "1917"
      ],
      "correctAnswer": 2,
      "hint": "South Korean masterpiece"
    },
    {
      "question": "Who directed 'Pulp Fiction'?",
      "options": [
        "Wes Anderson",
        "David Fincher",
        "Quentin Tarantino",
        "Coen Brothers"
      ],
      "correctAnswer": 2,
      "hint": "Known for nonlinear storytelling"
    },
    {
      "question": "What is the name of the fictional kingdom in 'Black Panther'?",
      "options": [
        "Asgard",
        "Wakanda",
        "Themyscira",
        "Atlantis"
      ],
      "correctAnswer": 1,
      "hint": "Hidden in Africa"
    },
    {
      "question": "Which actress played the lead role in 'The Hunger Games' series?",
      "options": [
        "Emma Watson",
        "Jennifer Lawrence",
        "Shailene Woodley",
        "Margot Robbie"
      ],
      "correctAnswer": 1,
      "hint": "Katniss Everdeen"
    },
    {
      "question": "The song 'Singin' in the Rain' is from a movie of the same name released in which year?",
      "options": [
        "1942",
        "1952",
        "1962",
        "1972"
      ],
      "correctAnswer": 1,
      "hint": "Starring Gene Kelly"
    },
    {
      "question": "Who won the Oscar for Best Female in a Supporting Role for 'Les Mis\u00e9rables' (2012)?",
      "options": [
        "Anne Hathaway",
        "Amanda Seyfried",
        "Helena Bonham Carter",
        "Meryl Streep"
      ],
      "correctAnswer": 0,
      "hint": "Played Fantine"
    }
  ],
  "hard_mov": [
    {
      "question": "What was the first film to win all 'Big Five' Academy Awards (Picture, Director, Actor, Actress, Screenplay)?",
      "options": [
        "The Godfather",
        "It Happened One Night",
        "One Flew Over the Cuckoo's Nest",
        "Silence of the Lambs"
      ],
      "correctAnswer": 1,
      "hint": "1934 romantic comedy"
    },
    {
      "question": "Who is the most nominated performer in Academy Award history?",
      "options": [
        "Jack Nicholson",
        "Katharine Hepburn",
        "Meryl Streep",
        "Daniel Day-Lewis"
      ],
      "correctAnswer": 2,
      "hint": "Over 20 nominations"
    },
    {
      "question": "Which movie features the character 'Keyser S\u00f6ze'?",
      "options": [
        "The Usual Suspects",
        "Se7en",
        "L.A. Confidential",
        "Fargo"
      ],
      "correctAnswer": 0,
      "hint": "Greatest plot twist"
    },
    {
      "question": "What was the first color film to win Best Picture?",
      "options": [
        "The Wizard of Oz",
        "Gone with the Wind",
        "Rebecca",
        "Ben-Hur"
      ],
      "correctAnswer": 1,
      "hint": "1939 epic"
    },
    {
      "question": "Who directed the 1927 silent masterpiece 'Metropolis'?",
      "options": [
        "F.W. Murnau",
        "Fritz Lang",
        "Sergei Eisenstein",
        "Robert Wiene"
      ],
      "correctAnswer": 1,
      "hint": "German Expressionism"
    },
    {
      "question": "Which composer won an Oscar for the score of 'Crouching Tiger, Hidden Dragon'?",
      "options": [
        "Joe Hisaishi",
        "Tan Dun",
        "Ryuichi Sakamoto",
        "A.R. Rahman"
      ],
      "correctAnswer": 1,
      "hint": "Also composed for the Beijing Olympics"
    },
    {
      "question": "In 'The Godfather', what is the name of the eldest son of Vito Corleone?",
      "options": [
        "Michael",
        "Sonny",
        "Fredo",
        "Connie"
      ],
      "correctAnswer": 1,
      "hint": "Hot-headed Santino"
    },
    {
      "question": "Which film holds the record for the most Oscar wins (11) alongside 'Ben-Hur' and 'Titanic'?",
      "options": [
        "The Shape of Water",
        "The Lord of the Rings: The Return of the King",
        "La La Land",
        "Forrest Gump"
      ],
      "correctAnswer": 1,
      "hint": "Completed the fantasy trilogy"
    },
    {
      "question": "Who was the first woman to win the Academy Award for Best Director?",
      "options": [
        "Sofia Coppola",
        "Kathryn Bigelow",
        "Greta Gerwig",
        "Chlo\u00e9 Zhao"
      ],
      "correctAnswer": 1,
      "hint": "Won for 'The Hurt Locker'"
    },
    {
      "question": "Which 1950s actor was known as the 'Rebel Without a Cause'?",
      "options": [
        "Marlon Brando",
        "James Dean",
        "Paul Newman",
        "Montgomery Clift"
      ],
      "correctAnswer": 1,
      "hint": "Died young in a car crash"
    },
    {
      "question": "Who played 'The Man with No Name' in Sergio Leone's Dollars Trilogy?",
      "options": [
        "John Wayne",
        "Clint Eastwood",
        "Gary Cooper",
        "Charles Bronson"
      ],
      "correctAnswer": 1,
      "hint": "Spaghetti Western icon"
    },
    {
      "question": "What is the name of the robot center in 'Blade Runner'?",
      "options": [
        "Tyrell Corporation",
        "Cyberdyne Systems",
        "Weyland-Yutani",
        "Omni Consumer Products"
      ],
      "correctAnswer": 0,
      "hint": "Manufactures replicants"
    },
    {
      "question": "Which movie is the quote 'I love the smell of napalm in the morning' from?",
      "options": [
        "Platoon",
        "Full Metal Jacket",
        "Apocalypse Now",
        "The Deer Hunter"
      ],
      "correctAnswer": 2,
      "hint": "Directed by Francis Ford Coppola"
    },
    {
      "question": "Who directed the 'Three Colors' trilogy (Blue, White, Red)?",
      "options": [
        "Ingmar Bergman",
        "Krzysztof Kie\u015blowski",
        "Andrei Tarkovsky",
        "Jean-Luc Godard"
      ],
      "correctAnswer": 1,
      "hint": "Polish director"
    },
    {
      "question": "What was the name of Hitchcock's first color film?",
      "options": [
        "Rope",
        "Rear Window",
        "Vertigo",
        "North by Northwest"
      ],
      "correctAnswer": 0,
      "hint": "Filmed in a single setting"
    },
    {
      "question": "Who won the Best Director Oscar for 'Life of Pi'?",
      "options": [
        "Christopher Nolan",
        "Ang Lee",
        "Steven Spielberg",
        "Alfonso Cuar\u00f3n"
      ],
      "correctAnswer": 1,
      "hint": "Twice a winner in this category"
    },
    {
      "question": "Which actress starred as the lead in the 1961 film 'Breakfast at Tiffany's'?",
      "options": [
        "Grace Kelly",
        "Elizabeth Taylor",
        "Audrey Hepburn",
        "Marilyn Monroe"
      ],
      "correctAnswer": 2,
      "hint": "Holly Golightly"
    },
    {
      "question": "Which movie is based on the book 'Do Androids Dream of Electric Sheep?'",
      "options": [
        "Blade Runner",
        "Total Recall",
        "Minority Report",
        "A.I. Artificial Intelligence"
      ],
      "correctAnswer": 0,
      "hint": "Philip K. Dick adaptation"
    },
    {
      "question": "Who composed the score for the 1968 film '2001: A Space Odyssey'?",
      "options": [
        "Richard Strauss",
        "Gy\u00f6rgy Ligeti",
        "Various (Compilation)",
        "Jerry Goldsmith"
      ],
      "correctAnswer": 2,
      "hint": "Used existing classical music"
    },
    {
      "question": "What was the first movie to be rated PG-13?",
      "options": [
        "Indiana Jones and the Temple of Doom",
        "Red Dawn",
        "Gremlins",
        "Poltergeist"
      ],
      "correctAnswer": 1,
      "hint": "Rating introduced in 1984"
    }
  ],
  "easy_national": [
    {
      "question": "What is the capital city of India?",
      "options": [
        "Mumbai",
        "Kolkata",
        "New Delhi",
        "Chennai"
      ],
      "correctAnswer": 2,
      "hint": "Home to the Rashtrapati Bhavan"
    },
    {
      "question": "Who was the first Prime Minister of India?",
      "options": [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Sardar Patel",
        "B.R. Ambedkar"
      ],
      "correctAnswer": 1,
      "hint": "Author of 'Discovery of India'"
    },
    {
      "question": "How many states are there in India currently (as of 2023)?",
      "options": [
        "27",
        "28",
        "29",
        "30"
      ],
      "correctAnswer": 1,
      "hint": "Union Territories are separate"
    },
    {
      "question": "What is the national animal of India?",
      "options": [
        "Lion",
        "Elephant",
        "Tiger",
        "Peacock"
      ],
      "correctAnswer": 2,
      "hint": "The Royal Bengal..."
    },
    {
      "question": "Who is known as the 'Father of the Indian Constitution'?",
      "options": [
        "Mahatma Gandhi",
        "B.R. Ambedkar",
        "Rajendra Prasad",
        "Subhas Chandra Bose"
      ],
      "correctAnswer": 1,
      "hint": "Chairman of the Drafting Committee"
    },
    {
      "question": "Which city is known as the 'Silicon Valley of India'?",
      "options": [
        "Hyderabad",
        "Pune",
        "Bengaluru",
        "Gurgaon"
      ],
      "correctAnswer": 2,
      "hint": "IT hub of the South"
    },
    {
      "question": "What is the national flower of India?",
      "options": [
        "Rose",
        "Lotus",
        "Marilyn",
        "Sunflower"
      ],
      "correctAnswer": 1,
      "hint": "Grows in water"
    },
    {
      "question": "In which year did India gain independence from British rule?",
      "options": [
        "1942",
        "1945",
        "1947",
        "1950"
      ],
      "correctAnswer": 2,
      "hint": "August 15th"
    },
    {
      "question": "Who is the current President of India (as of 2024)?",
      "options": [
        "Ram Nath Kovind",
        "Droupadi Murmu",
        "Pranab Mukherjee",
        "Yashwant Sinha"
      ],
      "correctAnswer": 1,
      "hint": "First tribal woman president"
    },
    {
      "question": "What is the national currency of India?",
      "options": [
        "Dollar",
        "Rial",
        "Rupee",
        "Euro"
      ],
      "correctAnswer": 2,
      "hint": "Symbol is \u20b9"
    }
  ],
  "medium_national": [
    {
      "question": "Which house of the Indian Parliament is known as the 'Council of States'?",
      "options": [
        "Lok Sabha",
        "Rajya Sabha",
        "Vidhan Sabha",
        "Vidhan Parishad"
      ],
      "correctAnswer": 1,
      "hint": "The Upper House"
    },
    {
      "question": "Who was the first woman Prime Minister of India?",
      "options": [
        "Pratibha Patil",
        "Indira Gandhi",
        "Sonia Gandhi",
        "Sarojini Naidu"
      ],
      "correctAnswer": 1,
      "hint": "Daughter of Nehru"
    },
    {
      "question": "The 'Panchayati Raj' system is associated with which level of government?",
      "options": [
        "Central",
        "State",
        "Local/Rural",
        "International"
      ],
      "correctAnswer": 2,
      "hint": "Three-tier structure"
    },
    {
      "question": "Who was the first President of India?",
      "options": [
        "S. Radhakrishnan",
        "Rajendra Prasad",
        "Zakir Husain",
        "V.V. Giri"
      ],
      "correctAnswer": 1,
      "hint": "Served two terms"
    },
    {
      "question": "What is the tenure of a member of the Rajya Sabha?",
      "options": [
        "4 years",
        "5 years",
        "6 years",
        "Permanent"
      ],
      "correctAnswer": 2,
      "hint": "One-third retire every two years"
    },
    {
      "question": "Which Indian state has the highest literacy rate?",
      "options": [
        "Tamil Nadu",
        "Kerala",
        "Maharashtra",
        "Gujarat"
      ],
      "correctAnswer": 1,
      "hint": "Near 100%"
    },
    {
      "question": "The 'NITI Aayog' replaced which old body?",
      "options": [
        "Finance Commission",
        "Planning Commission",
        "National Development Council",
        "Zonal Council"
      ],
      "correctAnswer": 1,
      "hint": "Shift from centralized planning"
    },
    {
      "question": "Who appoints the Chief Justice of India?",
      "options": [
        "Prime Minister",
        "President",
        "Law Minister",
        "Governor"
      ],
      "correctAnswer": 1,
      "hint": "Constitutional appointment"
    },
    {
      "question": "Which amendment to the Constitution added the words 'Socialist' and 'Secular' to the Preamble?",
      "options": [
        "42nd",
        "44th",
        "73rd",
        "86th"
      ],
      "correctAnswer": 0,
      "hint": "The Mini Constitution"
    },
    {
      "question": "What is the minimum age to become the Prime Minister of India?",
      "options": [
        "21",
        "25",
        "30",
        "35"
      ],
      "correctAnswer": 1,
      "hint": "Same as Lok Sabha eligibility"
    },
    {
      "question": "Which state in India was the first to be formed on a linguistic basis?",
      "options": [
        "Andhra Pradesh",
        "Tamil Nadu",
        "Karnataka",
        "Punjab"
      ],
      "correctAnswer": 0,
      "hint": "1953 reorganization"
    },
    {
      "question": "Who is the head of the State Government in India?",
      "options": [
        "Governor",
        "Chief Minister",
        "Speaker",
        "Chief Secretary"
      ],
      "correctAnswer": 1,
      "hint": "Real executive head"
    },
    {
      "question": "The 'Right to Education' (RTE) became a fundamental right in which year?",
      "options": [
        "2002",
        "2005",
        "2009",
        "2012"
      ],
      "correctAnswer": 2,
      "hint": "Article 21A"
    },
    {
      "question": "Which city is the financial capital of India?",
      "options": [
        "New Delhi",
        "Mumbai",
        "Bengaluru",
        "Kolkata"
      ],
      "correctAnswer": 1,
      "hint": "Home of RBI and NSE"
    },
    {
      "question": "The 'Mid-day Meal Scheme' was first introduced in which state?",
      "options": [
        "Uttar Pradesh",
        "Tamil Nadu",
        "West Bengal",
        "Bihar"
      ],
      "correctAnswer": 1,
      "hint": "Pioneered in the 1960s"
    }
  ],
  "hard_national": [
    {
      "question": "What is the 'Basic Structure Doctrine' associated with?",
      "options": [
        "Kesavananda Bharati case",
        "Golaknath case",
        "Minerva Mills case",
        "Maneka Gandhi case"
      ],
      "correctAnswer": 0,
      "hint": "1973 landmark judgment"
    },
    {
      "question": "Who was the Chairman of the first Finance Commission of India?",
      "options": [
        "K.C. Neogy",
        "Y.B. Chavan",
        "N.K. Singh",
        "C. Rangarajan"
      ],
      "correctAnswer": 0,
      "hint": "Established in 1951"
    },
    {
      "question": "Which Article of the Constitution deals with the 'Uniform Civil Code'?",
      "options": [
        "Article 40",
        "Article 44",
        "Article 48",
        "Article 51"
      ],
      "correctAnswer": 1,
      "hint": "Part of Directive Principles"
    },
    {
      "question": "The 'Sarkaria Commission' was set up to review what?",
      "options": [
        "Tax reforms",
        "Center-State relations",
        "Educational reforms",
        "Internal security"
      ],
      "correctAnswer": 1,
      "hint": "Submitted report in 1988"
    },
    {
      "question": "Who was the first Chief Election Commissioner of India?",
      "options": [
        "Sukumar Sen",
        "T.N. Seshan",
        "S.Y. Quraishi",
        "Sunil Arora"
      ],
      "correctAnswer": 0,
      "hint": "Conducted first general elections"
    },
    {
      "question": "In which year was the 'National Human Rights Commission' (NHRC) established?",
      "options": [
        "1990",
        "1993",
        "1995",
        "1998"
      ],
      "correctAnswer": 1,
      "hint": "Statutory body"
    },
    {
      "question": "The '91st Amendment Act' limited the size of the Council of Ministers to what percentage of the House?",
      "options": [
        "10%",
        "15%",
        "20%",
        "25%"
      ],
      "correctAnswer": 1,
      "hint": "Article 75(1A)"
    },
    {
      "question": "Which committee recommended the 'Three-tier' Panchayati Raj system?",
      "options": [
        "Balwant Rai Mehta Committee",
        "Ashoka Mehta Committee",
        "L.M. Singhvi Committee",
        "G.V.K. Rao Committee"
      ],
      "correctAnswer": 0,
      "hint": "Report in 1957"
    },
    {
      "question": "Who is the ex-officio Chairman of the Rajya Sabha?",
      "options": [
        "President",
        "Vice-President",
        "Prime Minister",
        "Speaker"
      ],
      "correctAnswer": 1,
      "hint": "Jagdeep Dhankhar currently holds this"
    },
    {
      "question": "What is the quorum required to hold a meeting of the Lok Sabha?",
      "options": [
        "1/5th",
        "1/10th",
        "1/15th",
        "1/20th"
      ],
      "correctAnswer": 1,
      "hint": "Minimum attendance"
    },
    {
      "question": "Which Directive Principle promotes 'Equal Justice and Free Legal Aid'?",
      "options": [
        "Article 38",
        "Article 39A",
        "Article 41",
        "Article 43"
      ],
      "correctAnswer": 1,
      "hint": "Added by 42nd Amendment"
    },
    {
      "question": "The 'Prevention of Money Laundering Act' (PMLA) was enacted in which year?",
      "options": [
        "2000",
        "2002",
        "2005",
        "2008"
      ],
      "correctAnswer": 1,
      "hint": "Key anti-corruption law"
    },
    {
      "question": "Who was the first woman Judge of the Supreme Court of India?",
      "options": [
        "Justice Ruma Pal",
        "Justice Leila Seth",
        "Justice Fathima Beevi",
        "Justice Indu Malhotra"
      ],
      "correctAnswer": 2,
      "hint": "Appointed in 1989"
    },
    {
      "question": "The 'Seventh Schedule' of the Constitution contains what?",
      "options": [
        "List of languages",
        "Oaths and Affirmations",
        "Lists of Union, State, and Concurrent subjects",
        "Salaries of officials"
      ],
      "correctAnswer": 2,
      "hint": "Division of powers"
    },
    {
      "question": "Which case established that the Preamble is a part of the Constitution?",
      "options": [
        "Berubari Union case",
        "Kesavananda Bharati case",
        "Golaknath case",
        "S.R. Bommai case"
      ],
      "correctAnswer": 1,
      "hint": "Overruled earlier Berubari view"
    },
    {
      "question": "What is the term of the 'Comptroller and Auditor General' (CAG) of India?",
      "options": [
        "5 years",
        "6 years or 65 years age",
        "Retires with the PM",
        "At President's pleasure"
      ],
      "correctAnswer": 1,
      "hint": "Guardian of the public purse"
    },
    {
      "question": "Which tribal revolt was led by Birsa Munda?",
      "options": [
        "Santhal Rebellion",
        "Munda Rebellion / Ulgulan",
        "Kol Revolt",
        "Bhil Revolt"
      ],
      "correctAnswer": 1,
      "hint": "In the Chhotanagpur region"
    },
    {
      "question": "The 'Sixth Schedule' of the Constitution applies to which states?",
      "options": [
        "Assam, Meghalaya, Tripura, Mizoram",
        "Nagaland, Manipur, Sikkim, Arunachal",
        "Odisha, Chhattisgarh, Jharkhand, MP",
        "All Himalayan states"
      ],
      "correctAnswer": 0,
      "hint": "Autonomous District Councils"
    },
    {
      "question": "Who was the first Viceroy of India?",
      "options": [
        "Lord Canning",
        "Lord Dalhousie",
        "Lord Mountbatten",
        "Lord Bentinck"
      ],
      "correctAnswer": 0,
      "hint": "After the 1857 Revolt"
    },
    {
      "question": "Which Constitutional Amendment lowered the voting age from 21 to 18?",
      "options": [
        "61st",
        "69th",
        "73rd",
        "84th"
      ],
      "correctAnswer": 0,
      "hint": "1988 amendment"
    }
  ],
  "easy_phy": [
    {
      "question": "Who is famous for the equation E=mc^2?",
      "options": [
        "Isaac Newton",
        "Albert Einstein",
        "Marie Curie",
        "Nikola Tesla"
      ],
      "correctAnswer": 1,
      "hint": "Founder of Modern Physics"
    },
    {
      "question": "What is the unit of force?",
      "options": [
        "Watt",
        "Joule",
        "Newton",
        "Pascal"
      ],
      "correctAnswer": 2,
      "hint": "Named after Sir Isaac"
    },
    {
      "question": "What force pulls objects toward the center of the Earth?",
      "options": [
        "Magnetism",
        "Friction",
        "Gravity",
        "Inertia"
      ],
      "correctAnswer": 2,
      "hint": "Universal attraction"
    },
    {
      "question": "Which state of matter has no definite shape but a definite volume?",
      "options": [
        "Solid",
        "Liquid",
        "Gas",
        "Plasma"
      ],
      "correctAnswer": 1,
      "hint": "Takes the shape of its container"
    },
    {
      "question": "What is the primary source of light for Earth?",
      "options": [
        "The Moon",
        "The Stars",
        "The Sun",
        "Electricity"
      ],
      "correctAnswer": 2,
      "hint": "A massive fusion reactor"
    },
    {
      "question": "What do we call the path an object takes around a star or planet?",
      "options": [
        "Circle",
        "Orbit",
        "Spin",
        "Tide"
      ],
      "correctAnswer": 1,
      "hint": "Like the Moon around Earth"
    },
    {
      "question": "Which instrument is used to measure temperature?",
      "options": [
        "Barometer",
        "Thermometer",
        "Speedometer",
        "Compass"
      ],
      "correctAnswer": 1,
      "hint": "Uses Mercury or Alcohol"
    },
    {
      "question": "What is the center of an atom called?",
      "options": [
        "Nucleus",
        "Proton",
        "Neutron",
        "Electron"
      ],
      "correctAnswer": 0,
      "hint": "Contains almost all mass"
    },
    {
      "question": "Which subatomic particle has a negative charge?",
      "options": [
        "Proton",
        "Neutron",
        "Electron",
        "Positron"
      ],
      "correctAnswer": 2,
      "hint": "Orbits the nucleus"
    },
    {
      "question": "What is the speed of sound roughly in air?",
      "options": [
        "340 m/s",
        "1000 m/s",
        "300,000 km/s",
        "10 m/s"
      ],
      "correctAnswer": 0,
      "hint": "Mach 1"
    }
  ],
  "medium_phy": [
    {
      "question": "What is the unit of electrical resistance?",
      "options": [
        "Volt",
        "Ampere",
        "Ohm",
        "Watt"
      ],
      "correctAnswer": 2,
      "hint": "Symbol \u03a9"
    },
    {
      "question": "Which law states that for every action, there is an equal and opposite reaction?",
      "options": [
        "Newton's First Law",
        "Newton's Second Law",
        "Newton's Third Law",
        "Law of Gravity"
      ],
      "correctAnswer": 2,
      "hint": "Law of recoil"
    },
    {
      "question": "What is the primary way heat is transferred through a solid?",
      "options": [
        "Convection",
        "Radiation",
        "Conduction",
        "Evaporation"
      ],
      "correctAnswer": 2,
      "hint": "Particle vibration"
    },
    {
      "question": "What type of lens is used to correct nearsightedness (myopia)?",
      "options": [
        "Convex",
        "Concave",
        "Bifocal",
        "Plano"
      ],
      "correctAnswer": 1,
      "hint": "Spreads light out"
    },
    {
      "question": "What is the frequency of a sound wave determines its?",
      "options": [
        "Loudness",
        "Pitch",
        "Speed",
        "Echo"
      ],
      "correctAnswer": 1,
      "hint": "High vs Low notes"
    },
    {
      "question": "What is the term for the bending of light as it passes from one medium to another?",
      "options": [
        "Reflection",
        "Refraction",
        "Diffraction",
        "Dispersion"
      ],
      "correctAnswer": 1,
      "hint": "Like in a prism"
    },
    {
      "question": "Who discovered the laws of planetary motion?",
      "options": [
        "Galileo",
        "Copernicus",
        "Johannes Kepler",
        "Tycho Brahe"
      ],
      "correctAnswer": 2,
      "hint": "Elliptical orbits"
    },
    {
      "question": "What is the capacity to do work called?",
      "options": [
        "Power",
        "Force",
        "Energy",
        "Torque"
      ],
      "correctAnswer": 2,
      "hint": "Measured in Joules"
    },
    {
      "question": "Which metal is the best conductor of electricity?",
      "options": [
        "Gold",
        "Copper",
        "Silver",
        "Aluminum"
      ],
      "correctAnswer": 2,
      "hint": "Though Copper is more common"
    },
    {
      "question": "What is the boiling point of water in Kelvin?",
      "options": [
        "100 K",
        "273 K",
        "373 K",
        "0 K"
      ],
      "correctAnswer": 2,
      "hint": "Celsius + 273.15"
    },
    {
      "question": "What is the acceleration due to gravity on Earth (roughly)?",
      "options": [
        "5.8 m/s^2",
        "9.8 m/s^2",
        "12.2 m/s^2",
        "1.6 m/s^2"
      ],
      "correctAnswer": 1,
      "hint": "9.81 approximately"
    },
    {
      "question": "What do we call a material that does not allow electricity to flow through it?",
      "options": [
        "Conductor",
        "Semiconductor",
        "Insulator",
        "Metallic"
      ],
      "correctAnswer": 2,
      "hint": "Plastic, Rubber, etc."
    },
    {
      "question": "What is the unit of power?",
      "options": [
        "Ampere",
        "Watt",
        "Volt",
        "Candela"
      ],
      "correctAnswer": 1,
      "hint": "Joules per second"
    },
    {
      "question": "Which part of the electromagnetic spectrum has the longest wavelength?",
      "options": [
        "X-rays",
        "Visible Light",
        "Radio waves",
        "Gamma rays"
      ],
      "correctAnswer": 2,
      "hint": "Used for broadcasting"
    },
    {
      "question": "What is 'Inertia'?",
      "options": [
        "Resistance to change in motion",
        "Speed of an object",
        "Pull of gravity",
        "Friction"
      ],
      "correctAnswer": 0,
      "hint": "Newton's First Law"
    }
  ],
  "hard_phy": [
    {
      "question": "What is the 'Schr\u00f6dinger's Cat' thought experiment related to?",
      "options": [
        "Classical Mechanics",
        "Quantum Superposition",
        "Nuclear Fusion",
        "Relativity"
      ],
      "correctAnswer": 1,
      "hint": "Dead and alive at same time"
    },
    {
      "question": "What is the name for the minimum energy required to remove an electron from an atom?",
      "options": [
        "Activation Energy",
        "Ionization Energy",
        "Binding Energy",
        "Potential Energy"
      ],
      "correctAnswer": 1,
      "hint": "Measured in eV"
    },
    {
      "question": "Which principle states that it's impossible to know both the position and momentum of a particle simultaneously?",
      "options": [
        "Pauli Exclusion Principle",
        "Heisenberg Uncertainty Principle",
        "Aufbau Principle",
        "Hund's Rule"
      ],
      "correctAnswer": 1,
      "hint": "Quantum limitation"
    },
    {
      "question": "What is the value of the 'Fine Structure Constant' (roughly)?",
      "options": [
        "1/137",
        "0.007",
        "6.626",
        "2.99"
      ],
      "correctAnswer": 0,
      "hint": "Symbol alpha"
    },
    {
      "question": "What is a 'Fermion'?",
      "options": [
        "A particle with integer spin",
        "A particle with half-integer spin",
        "A particle with no mass",
        "A particle with no charge"
      ],
      "correctAnswer": 1,
      "hint": "Follows Fermi-Dirac statistics"
    },
    {
      "question": "Which force is responsible for holding the nucleus of an atom together?",
      "options": [
        "Electromagnetic Force",
        "Weak Nuclear Force",
        "Strong Nuclear Force",
        "Gravity"
      ],
      "correctAnswer": 2,
      "hint": "Strongest of the four fundamental forces"
    },
    {
      "question": "What describes the behavior of objects moving at speeds close to the speed of light?",
      "options": [
        "Newtonian Physics",
        "Special Relativity",
        "General Relativity",
        "Fluid Dynamics"
      ],
      "correctAnswer": 1,
      "hint": "Time dilation and length contraction"
    },
    {
      "question": "What is an 'Adiabatic Process'?",
      "options": [
        "A process with constant temperature",
        "A process with no heat transfer",
        "A process with constant pressure",
        "A process with constant volume"
      ],
      "correctAnswer": 1,
      "hint": "Q = 0"
    },
    {
      "question": "Who proposed that light consists of discrete packets of energy called 'quanta'?",
      "options": [
        "Max Planck",
        "Niels Bohr",
        "Erwin Schr\u00f6dinger",
        "Richard Feynman"
      ],
      "correctAnswer": 0,
      "hint": "Planck's Law"
    },
    {
      "question": "What is the 'Doppler Effect'?",
      "options": [
        "Change in frequency due to motion",
        "Bending of light around a corner",
        "Loss of heat to surroundings",
        "Magnetic attraction"
      ],
      "correctAnswer": 0,
      "hint": "Changes pitch of a siren"
    },
    {
      "question": "which fundamental particle is the carrier of the electromagnetic force?",
      "options": [
        "Gluon",
        "Photon",
        "W Boson",
        "Graviton"
      ],
      "correctAnswer": 1,
      "hint": "Massless boson"
    },
    {
      "question": "What is the 'Entropy' of a perfectly crystalline substance at absolute zero?",
      "options": [
        "One",
        "Infinite",
        "Zero",
        "Negative"
      ],
      "correctAnswer": 2,
      "hint": "Third Law of Thermodynamics"
    },
    {
      "question": "What is the SI unit of magnetic flux?",
      "options": [
        "Tesla",
        "Weber",
        "Henry",
        "Farad"
      ],
      "correctAnswer": 1,
      "hint": "Product of magnetic field and area"
    },
    {
      "question": "Who developed the theory of 'Electromagnetism', unifying electricity and magnetism?",
      "options": [
        "Oersted",
        "Faraday",
        "James Clerk Maxwell",
        "Ampere"
      ],
      "correctAnswer": 2,
      "hint": "Maxwell's Equations"
    },
    {
      "question": "What is the 'Triple Point' of a substance?",
      "options": [
        "Melting point",
        "Boiling point",
        "Temperature/pressure where all three phases coexist",
        "Absolute zero"
      ],
      "correctAnswer": 2,
      "hint": "Equilibrium state"
    },
    {
      "question": "Which particle was discovered at CERN in 2012, confirming the mechanism that gives matter mass?",
      "options": [
        "Top Quark",
        "Muon",
        "Higgs Boson",
        "Neutrino"
      ],
      "correctAnswer": 2,
      "hint": "The 'God Particle'"
    },
    {
      "question": "What is 'Escape Velocity'?",
      "options": [
        "Speed to outrun sound",
        "Minimum speed to break free from a planet's gravity",
        "Light speed",
        "Terminal velocity"
      ],
      "correctAnswer": 1,
      "hint": "11.2 km/s for Earth"
    },
    {
      "question": "What does the 'Big Bang' theory describe?",
      "options": [
        "The end of the sun",
        "The origin and expansion of the universe",
        "A collision of galaxies",
        "The birth of a black hole"
      ],
      "correctAnswer": 1,
      "hint": "Hot dense state"
    },
    {
      "question": "What is the main component of 'Dark Matter' according to current theories?",
      "options": [
        "Neutrons",
        "WIMPs / Non-baryonic matter",
        "Dust",
        "Planets"
      ],
      "correctAnswer": 1,
      "hint": "Interacts only through gravity"
    },
    {
      "question": "Who won the Nobel Prize for the discovery of the 'Photoelectric Effect'?",
      "options": [
        "Niels Bohr",
        "Albert Einstein",
        "Marie Curie",
        "Max Born"
      ],
      "correctAnswer": 1,
      "hint": "Foundation of quantum theory"
    }
  ],
  "easy_physical": [
    {
      "question": "What is the outermost layer of the Earth?",
      "options": [
        "Mantle",
        "Outer Core",
        "Crust",
        "Inner Core"
      ],
      "correctAnswer": 2,
      "hint": "Where we live"
    },
    {
      "question": "What is the name for molten rock when it is underground?",
      "options": [
        "Lava",
        "Magma",
        "Basalt",
        "Granite"
      ],
      "correctAnswer": 1,
      "hint": "Becomes lava when it erupts"
    },
    {
      "question": "What do we call a giant sea wave caused by an underwater earthquake?",
      "options": [
        "Tide",
        "Tsunami",
        "Current",
        "Swell"
      ],
      "correctAnswer": 1,
      "hint": "Japanese word for 'harbor wave'"
    },
    {
      "question": "What is the process of water falling from the sky called?",
      "options": [
        "Evaporation",
        "Condensation",
        "Precipitation",
        "Transpiration"
      ],
      "correctAnswer": 2,
      "hint": "Rain, snow, sleet, etc."
    },
    {
      "question": "What gas do humans breathe out and plants take in?",
      "options": [
        "Oxygen",
        "Nitrogen",
        "Carbon Dioxide",
        "Hydrogen"
      ],
      "correctAnswer": 2,
      "hint": "Greenhouse gas"
    },
    {
      "question": "What is the name for the imaginary line that divides the Earth into Northern and Southern Hemispheres?",
      "options": [
        "Prime Meridian",
        "Equator",
        "Tropic of Cancer",
        "International Date Line"
      ],
      "correctAnswer": 1,
      "hint": "0 degrees latitude"
    },
    {
      "question": "What is the term for the movement of weathered rock and soil from one place to another?",
      "options": [
        "Weathering",
        "Erosion",
        "Deposition",
        "Siltation"
      ],
      "correctAnswer": 1,
      "hint": "Often caused by water, wind, or ice"
    },
    {
      "question": "What kind of rock is formed from cooled lava or magma?",
      "options": [
        "Sedimentary",
        "Metamorphic",
        "Igneous",
        "Quartz"
      ],
      "correctAnswer": 2,
      "hint": "Latin 'ignis' for fire"
    },
    {
      "question": "What do you call a tropical storm with very high winds in the Atlantic Ocean?",
      "options": [
        "Typhoon",
        "Cyclone",
        "Hurricane",
        "Blizzard"
      ],
      "correctAnswer": 2,
      "hint": "Category 1-5"
    },
    {
      "question": "What is the name for the solid part of the Earth's surface?",
      "options": [
        "Atmosphere",
        "Hydrosphere",
        "Lithosphere",
        "Biosphere"
      ],
      "correctAnswer": 2,
      "hint": "Includes the crust and upper mantle"
    }
  ],
  "medium_physical": [
    {
      "question": "What is the 'Ring of Fire'?",
      "options": [
        "A volcanic forest",
        "A path along the Pacific Ocean characterized by active volcanoes and frequent earthquakes",
        "A circle of sunspots",
        "A region in the Sahara"
      ],
      "correctAnswer": 1,
      "hint": "Tectonic plate boundary"
    },
    {
      "question": "Which layer of the atmosphere contains the ozone layer?",
      "options": [
        "Troposphere",
        "Stratosphere",
        "Mesosphere",
        "Thermosphere"
      ],
      "correctAnswer": 1,
      "hint": "Protects from UV radiation"
    },
    {
      "question": "What is the name for rock that has been changed by extreme heat and pressure?",
      "options": [
        "Igneous",
        "Sedimentary",
        "Metamorphic",
        "Conglomerate"
      ],
      "correctAnswer": 2,
      "hint": "Marble is an example"
    },
    {
      "question": "What is 'Pangea'?",
      "options": [
        "A Greek god",
        "The name of the supercontinent that existed millions of years ago",
        "A type of rock",
        "A deep sea trench"
      ],
      "correctAnswer": 1,
      "hint": "Before continental drift"
    },
    {
      "question": "Which cloud type is often associated with thunderstorms?",
      "options": [
        "Cirrus",
        "Stratus",
        "Cumulonimbus",
        "Altocumulus"
      ],
      "correctAnswer": 2,
      "hint": "Large 'anvil' shaped clouds"
    },
    {
      "question": "What is the primary cause of tides on Earth?",
      "options": [
        "Earth's rotation",
        "The Sun's gravity",
        "The Moon's gravitational pull",
        "Wind"
      ],
      "correctAnswer": 2,
      "hint": "Lunar effect"
    },
    {
      "question": "What is a 'Meander'?",
      "options": [
        "A straight river",
        "A curve or bend in a river",
        "A mountain peak",
        "A desert wind"
      ],
      "correctAnswer": 1,
      "hint": "Common in older rivers"
    },
    {
      "question": "What is the 'Richter Scale' used to measure?",
      "options": [
        "Wind speed",
        "The magnitude of an earthquake",
        "Relative humidity",
        "Rainfall amount"
      ],
      "correctAnswer": 1,
      "hint": "Magnitude scale"
    },
    {
      "question": "What is 'Humid Continental'?",
      "options": [
        "A type of soil",
        "A climate type characterized by large seasonal temperature differences",
        "A mountain range",
        "A tropical bird"
      ],
      "correctAnswer": 1,
      "hint": "Found in parts of USA and Europe"
    },
    {
      "question": "A 'Delta' is formed by what process?",
      "options": [
        "Erosion",
        "Deposition of sediment at the mouth of a river",
        "Volcanic eruption",
        "Glacial retreat"
      ],
      "correctAnswer": 1,
      "hint": "Like the Nile Delta"
    },
    {
      "question": "What is the average salinity of ocean water?",
      "options": [
        "2.5%",
        "3.5%",
        "5.5%",
        "10%"
      ],
      "correctAnswer": 1,
      "hint": "35 parts per thousand"
    },
    {
      "question": "Which instrument is used to measure atmospheric pressure?",
      "options": [
        "Anemometer",
        "Hygrometer",
        "Barometer",
        "Rain gauge"
      ],
      "correctAnswer": 2,
      "hint": "Torricelli invented it"
    },
    {
      "question": "What is a 'Watershed'?",
      "options": [
        "A house for water",
        "An area of land that drains all the streams and rainfall to a common outlet",
        "A dam",
        "A flooded field"
      ],
      "correctAnswer": 1,
      "hint": "Also called a drainage basin"
    },
    {
      "question": "The 'Alps' were primarily formed by which process?",
      "options": [
        "Volcanic activity",
        "Glacial erosion",
        "Collision of the African and Eurasian plates",
        "Asteroid impact"
      ],
      "correctAnswer": 2,
      "hint": "Mountain building / Orogeny"
    },
    {
      "question": "What is 'Permafrost'?",
      "options": [
        "Seasonal snow",
        "Ground that remains frozen for two or more years",
        "A polar bear's fur",
        "Frozen lake water"
      ],
      "correctAnswer": 1,
      "hint": "Found in Tundra"
    }
  ],
  "hard_physical": [
    {
      "question": "What is 'Bathymetry'?",
      "options": [
        "The study of clouds",
        "Mapping the topography of the ocean floor",
        "The measurement of rainfall",
        "The study of deep caves"
      ],
      "correctAnswer": 1,
      "hint": "Underwater equivalent of topography"
    },
    {
      "question": "Which atmospheric layer is the coldest?",
      "options": [
        "Troposphere",
        "Stratosphere",
        "Mesosphere",
        "Thermosphere"
      ],
      "correctAnswer": 2,
      "hint": "Temperatures drop to -90\u00b0C"
    },
    {
      "question": "What is the 'Mohorovi\u010di\u0107 discontinuity'?",
      "options": [
        "A fault line in California",
        "The boundary between the Earth's crust and the mantle",
        "A type of solar eclipse",
        "A deep sea trench"
      ],
      "correctAnswer": 1,
      "hint": "Also called the 'Moho'"
    },
    {
      "question": "What is 'Albedo'?",
      "options": [
        "A type of cloud",
        "The fraction of solar energy reflected from the Earth back into space",
        "A desert storm",
        "A measure of ocean depth"
      ],
      "correctAnswer": 1,
      "hint": "Ice has a high albedo"
    },
    {
      "question": "The 'Coriolis Effect' causes winds in the Northern Hemisphere to deflect in which direction?",
      "options": [
        "To the left",
        "To the right",
        "Upwards",
        "Downwards"
      ],
      "correctAnswer": 1,
      "hint": "Due to Earth's rotation"
    },
    {
      "question": "What is an 'Orbital' in atmospheric science?",
      "options": [
        "A moon phase",
        "A closed loop of atmospheric circulation",
        "A type of meteor",
        "The Earth's path"
      ],
      "correctAnswer": 1,
      "hint": "Example: Hadley Cell"
    },
    {
      "question": "Which scale is used to measure the intensity of a hurricane based on wind speed?",
      "options": [
        "Richter Scale",
        "Saffir-Simpson Scale",
        "Beaufort Scale",
        "Fujita Scale"
      ],
      "correctAnswer": 1,
      "hint": "Categories 1-5"
    },
    {
      "question": "What is the 'Jet Stream'?",
      "options": [
        "A type of airplane",
        "Narrow bands of strong wind in the upper atmosphere",
        "A volcanic vent",
        "An ocean current"
      ],
      "correctAnswer": 1,
      "hint": "Affects weather patterns"
    },
    {
      "question": "In geology, what is a 'Graben'?",
      "options": [
        "A mountain ridge",
        "A depressed block of land bordered by parallel faults",
        "A type of granite",
        "A glacial valley"
      ],
      "correctAnswer": 1,
      "hint": "Forms part of a rift valley"
    },
    {
      "question": "What is 'Lixiviation' (or Leaching)?",
      "options": [
        "Water purification",
        "The loss of water-soluble plant nutrients from the soil",
        "Cloud formation",
        "Glacial advance"
      ],
      "correctAnswer": 1,
      "hint": "Common in rainforest soils"
    },
    {
      "question": "What is 'The Wallace Line'?",
      "options": [
        "A shipping route",
        "A faunal boundary line separating the ecozones of Asia and Wallacea",
        "A fault line in England",
        "The edge of the Sahara"
      ],
      "correctAnswer": 1,
      "hint": "Biogeographical transition"
    },
    {
      "question": "Which minerals are the primary components of the Earth's Inner Core?",
      "options": [
        "Silica and Oxygen",
        "Iron and Nickel",
        "Magnesium and Iron",
        "Aluminum and Gold"
      ],
      "correctAnswer": 1,
      "hint": "Solid due to extreme pressure"
    },
    {
      "question": "What is 'Diagenesis'?",
      "options": [
        "The death of a plant",
        "The process of chemical and physical change in sediments during their conversion to rock",
        "The erosion of mountains",
        "The cooling of magma"
      ],
      "correctAnswer": 1,
      "hint": "Formation of sedimentary rock"
    },
    {
      "question": "What is a 'Tombolo'?",
      "options": [
        "A type of drum",
        "A deposition landform in which an island is attached to the mainland by a narrow piece of land such as a spit",
        "A volcanic island",
        "A deep-sea trench"
      ],
      "correctAnswer": 1,
      "hint": "Connected by sand"
    },
    {
      "question": "The 'Hadley Cell' circulation occurs between which latitudes?",
      "options": [
        "The Equator and 30\u00b0 North/South",
        "30\u00b0 and 60\u00b0 North/South",
        "60\u00b0 and the Poles",
        "The Tropics only"
      ],
      "correctAnswer": 0,
      "hint": "Drives tropical weather"
    },
    {
      "question": "What is 'Isostasy'?",
      "options": [
        "A state of tectonic activity",
        "The theoretical balance of all aspects of the Earth's lithosphere",
        "The constant temperature of the core",
        "The melting of glaciers"
      ],
      "correctAnswer": 1,
      "hint": "Buoyancy of the crust on the mantle"
    },
    {
      "question": "What is a 'Nunatak'?",
      "options": [
        "An Inuit boat",
        "An isolated peak of rock projecting above a surface of inland ice or snow",
        "A type of seal",
        "A polar bear's cave"
      ],
      "correctAnswer": 1,
      "hint": "Mountain top poking through ice"
    },
    {
      "question": "The 'El Ni\u00f1o-Southern Oscillation' (ENSO) is a climate pattern that describes the unusual warming of waters in which ocean?",
      "options": [
        "Atlantic",
        "Pacific",
        "Indian",
        "Arctic"
      ],
      "correctAnswer": 1,
      "hint": "Impacts global weather"
    },
    {
      "question": "Which layer of the Earth is liquid?",
      "options": [
        "Crust",
        "Mantle",
        "Outer Core",
        "Inner Core"
      ],
      "correctAnswer": 2,
      "hint": "Generates Magnetic field"
    },
    {
      "question": "What is 'Pedomorphosis' in the context of landscape evolution?",
      "options": [
        "Soil formation",
        "Retaining juvenile traits in geomorphology",
        "The aging of mountains",
        "The growth of trees"
      ],
      "correctAnswer": 1,
      "hint": "Retention of early traits"
    }
  ],
  "easy_play": [
    {
      "question": "Who wrote the famous 'Symphony No. 5', known for its four-note opening motif?",
      "options": [
        "Mozart",
        "Beethoven",
        "Bach",
        "Chopin"
      ],
      "correctAnswer": 1,
      "hint": "Lost his hearing later in life"
    },
    {
      "question": "Which musical era is Mozart associated with?",
      "options": [
        "Baroque",
        "Classical",
        "Romantic",
        "Modern"
      ],
      "correctAnswer": 1,
      "hint": "Mid-to-late 18th century"
    },
    {
      "question": "What is the highest female singing voice?",
      "options": [
        "Alto",
        "Soprano",
        "Tenor",
        "Bass"
      ],
      "correctAnswer": 1,
      "hint": "Think Opera divas"
    },
    {
      "question": "Who is known as the 'King of Pop'?",
      "options": [
        "Elvis Presley",
        "Michael Jackson",
        "Prince",
        "Justin Timberlake"
      ],
      "correctAnswer": 1,
      "hint": "Moonwalk"
    },
    {
      "question": "Which city was the home of the Beatles?",
      "options": [
        "London",
        "Liverpool",
        "Manchester",
        "Birmingham"
      ],
      "correctAnswer": 1,
      "hint": "The Fab Four's origins"
    },
    {
      "question": "What instrument does a 'Cellist' play?",
      "options": [
        "Violin",
        "Cello",
        "Flute",
        "Piano"
      ],
      "correctAnswer": 1,
      "hint": "Large string instrument"
    },
    {
      "question": "Which composer is famous for the 'Four Seasons'?",
      "options": [
        "Bach",
        "Vivaldi",
        "Handel",
        "Tchaikovsky"
      ],
      "correctAnswer": 1,
      "hint": "Baroque Italian violinist"
    },
    {
      "question": "What do we call a musical composition for a full orchestra?",
      "options": [
        "Sonata",
        "Symphony",
        "Concerto",
        "Etude"
      ],
      "correctAnswer": 1,
      "hint": "Usually in four movements"
    },
    {
      "question": "Who sang 'Rolling in the Deep' and 'Hello'?",
      "options": [
        "Rihanna",
        "Beyonc\u00e9",
        "Adele",
        "Taylor Swift"
      ],
      "correctAnswer": 2,
      "hint": "British powerhouse"
    },
    {
      "question": "Which country did the 'Reggae' music genre originate from?",
      "options": [
        "USA",
        "Cuba",
        "Jamaica",
        "Brazil"
      ],
      "correctAnswer": 2,
      "hint": "Bob Marley"
    }
  ],
  "medium_play": [
    {
      "question": "Which composer wrote the 'Moonlight Sonata'?",
      "options": [
        "Beethoven",
        "Mozart",
        "Debussy",
        "Schubert"
      ],
      "correctAnswer": 0,
      "hint": "Piano Sonata No. 14"
    },
    {
      "question": "What was the nationality of Frederic Chopin?",
      "options": [
        "French",
        "Polish",
        "German",
        "Russian"
      ],
      "correctAnswer": 1,
      "hint": "Famous for piano nocturnes"
    },
    {
      "question": "Who composed 'The Nutcracker' and 'Swan Lake'?",
      "options": [
        "Stravinsky",
        "Tchaikovsky",
        "Rimsky-Korsakov",
        "Prokofiev"
      ],
      "correctAnswer": 1,
      "hint": "Russian Romantic composer"
    },
    {
      "question": "What is the term for a musical group of four performers?",
      "options": [
        "Duo",
        "Trio",
        "Quartet",
        "Quintet"
      ],
      "correctAnswer": 2,
      "hint": "Like a string quartet"
    },
    {
      "question": "Which era of music is J.S. Bach associated with?",
      "options": [
        "Classical",
        "Baroque",
        "Romantic",
        "Renaissance"
      ],
      "correctAnswer": 1,
      "hint": "Master of counterpoint"
    },
    {
      "question": "Who wrote the opera 'The Marriage of Figaro'?",
      "options": [
        "Verdi",
        "Wagner",
        "Mozart",
        "Rossini"
      ],
      "correctAnswer": 2,
      "hint": "Comic opera in four acts"
    },
    {
      "question": "Which instrument is known as the 'king of instruments' due to its size and complexity?",
      "options": [
        "Piano",
        "Pipe Organ",
        "Harp",
        "Violin"
      ],
      "correctAnswer": 1,
      "hint": "Found in cathedrals"
    },
    {
      "question": "What is the name of the scale with five notes per octave, common in many folk traditions?",
      "options": [
        "Diatonic",
        "Chromatic",
        "Pentatonic",
        "Major"
      ],
      "correctAnswer": 2,
      "hint": "Penta means five"
    },
    {
      "question": "Who was the leading composer of the 'Impressionist' movement in music?",
      "options": [
        "Ravel",
        "Debussy",
        "Satie",
        "Faure"
      ],
      "correctAnswer": 1,
      "hint": "Wrote 'Clair de Lune'"
    },
    {
      "question": "Which rock band released the album 'The Wall' in 1979?",
      "options": [
        "The Who",
        "Pink Floyd",
        "Led Zeppelin",
        "Queen"
      ],
      "correctAnswer": 1,
      "hint": "Roger Waters led the concept"
    },
    {
      "question": "What is the speed of music called?",
      "options": [
        "Volume",
        "Tempo",
        "Pitch",
        "Dynamic"
      ],
      "correctAnswer": 1,
      "hint": "Italian for 'time'"
    },
    {
      "question": "Who is the composer of the 'Messiah' oratorio, featuring the 'Hallelujah' chorus?",
      "options": [
        "Bach",
        "Handel",
        "Haydn",
        "Mendelssohn"
      ],
      "correctAnswer": 1,
      "hint": "German-British Baroque composer"
    },
    {
      "question": "Which pop star is known as the 'Material Girl'?",
      "options": [
        "Cyndi Lauper",
        "Madonna",
        "Janet Jackson",
        "Britney Spears"
      ],
      "correctAnswer": 1,
      "hint": "80s pop icon"
    },
    {
      "question": "The 'Harpsichord' was a predecessor to which modern instrument?",
      "options": [
        "Guitar",
        "Piano",
        "Organ",
        "Accordion"
      ],
      "correctAnswer": 1,
      "hint": "Strings are plucked, not struck"
    },
    {
      "question": "Who was the 'March King', famous for 'The Stars and Stripes Forever'?",
      "options": [
        "John Philip Sousa",
        "Scott Joplin",
        "George Gershwin",
        "Duke Ellington"
      ],
      "correctAnswer": 0,
      "hint": "American bandmaster"
    }
  ],
  "hard_play": [
    {
      "question": "Which composer is credited with establishing the 'String Quartet' and 'Symphony' as major forms?",
      "options": [
        "Mozart",
        "Haydn",
        "Beethoven",
        "Brahms"
      ],
      "correctAnswer": 1,
      "hint": "The 'Father of the Symphony'"
    },
    {
      "question": "What was the name of the group of five Russian composers who aimed to create a 'national' style?",
      "options": [
        "The Fabulous Five",
        "The Mighty Handful",
        "The St. Petersburg Group",
        "The Great Five"
      ],
      "correctAnswer": 1,
      "hint": "Mussorgsky, Borodin, etc."
    },
    {
      "question": "Who wrote the 'Rite of Spring', which caused a riot at its 1913 premiere?",
      "options": [
        "Schoenberg",
        "Stravinsky",
        "Bartok",
        "Shostakovich"
      ],
      "correctAnswer": 1,
      "hint": "Pioneered polytonality"
    },
    {
      "question": "What is 'Atonality' in music?",
      "options": [
        "Music with two keys",
        "Music that lacks a tonal center or key",
        "Music with very fast tempo",
        "Music with no rhythm"
      ],
      "correctAnswer": 1,
      "hint": "Associated with Schoenberg"
    },
    {
      "question": "Which late-Romantic composer wrote massive symphonies and 'The Song of the Earth'?",
      "options": [
        "Bruckner",
        "Mahler",
        "Richard Strauss",
        "Sibelius"
      ],
      "correctAnswer": 1,
      "hint": "Conductor/Composer"
    },
    {
      "question": "What is a 'Leitmotif'?",
      "options": [
        "A type of opera house",
        "A recurring musical theme associated with a particular person, place, or idea",
        "A singing technique",
        "A brass instrument"
      ],
      "correctAnswer": 1,
      "hint": "Heavily used by Wagner"
    },
    {
      "question": "Who wrote the opera 'Turandot', which features the aria 'Nessun Dorma'?",
      "options": [
        "Verdi",
        "Puccini",
        "Bellini",
        "Donizetti"
      ],
      "correctAnswer": 1,
      "hint": "Final opera, completed by others"
    },
    {
      "question": "Which composer wrote the 'Goldberg Variations' for harpsichord?",
      "options": [
        "Handel",
        "Bach",
        "Scarlatti",
        "Couperin"
      ],
      "correctAnswer": 1,
      "hint": "Written for an insomniac count"
    },
    {
      "question": "What is the 'Enigma Variations'?",
      "options": [
        "A piece by Elgar",
        "A mathematical theorem",
        "A code-breaking machine",
        "A dance move"
      ],
      "correctAnswer": 0,
      "hint": "Sir Edward Elgar's orchestral work"
    },
    {
      "question": "Who was the first female composer to win a Pulitzer Prize for Music?",
      "options": [
        "Ellen Taaffe Zwilich",
        "Florence Price",
        "Amy Beach",
        "Nadia Boulanger"
      ],
      "correctAnswer": 0,
      "hint": "Won in 1983"
    },
    {
      "question": "Which Jazz musician was nicknamed 'Satchmo'?",
      "options": [
        "Miles Davis",
        "Louis Armstrong",
        "Charlie Parker",
        "Thelonious Monk"
      ],
      "correctAnswer": 1,
      "hint": "Famous trumpeter"
    },
    {
      "question": "What is 'Serialism' in 20th-century music?",
      "options": [
        "Music played in a series of concerts",
        "A method of composition using a fixed series of values to admit changes in pitch, etc.",
        "Country music",
        "Opera based on books"
      ],
      "correctAnswer": 1,
      "hint": "Developed from twelve-tone technique"
    },
    {
      "question": "Who composed 'Appalachian Spring'?",
      "options": [
        "Aaron Copland",
        "Samuel Barber",
        "Charles Ives",
        "George Gershwin"
      ],
      "correctAnswer": 0,
      "hint": "American nationalist style"
    },
    {
      "question": "Which opera ciclo by Wagner takes about 15 hours to perform in total?",
      "options": [
        "The Ring of the Nibelung",
        "Tristan and Isolde",
        "Parsifal",
        "Lohengrin"
      ],
      "correctAnswer": 0,
      "hint": "Consists of four operas"
    },
    {
      "question": "Who wrote the 'Finlandia' tone poem?",
      "options": [
        "Grieg",
        "Sibelius",
        "Nielsen",
        "Alfv\u00e9n"
      ],
      "correctAnswer": 1,
      "hint": "Finnish national hero"
    },
    {
      "question": "What is a 'Madrigal'?",
      "options": [
        "A fast dance",
        "A secular vocal music composition of the Renaissance and early Baroque eras",
        "A large drum",
        "A religious hymn"
      ],
      "correctAnswer": 1,
      "hint": "Often for several voices"
    },
    {
      "question": "Which violin maker is considered the greatest of all time?",
      "options": [
        "Amati",
        "Guarneri",
        "Stradivari",
        "Stainer"
      ],
      "correctAnswer": 2,
      "hint": "Cremonese master"
    },
    {
      "question": "Who wrote the 'Clair de Lune' as part of the 'Suite bergamasque'?",
      "options": [
        "Satie",
        "Debussy",
        "Faure",
        "Ravel"
      ],
      "correctAnswer": 1,
      "hint": "French Impressionist"
    },
    {
      "question": "What is the name of the system of tuning modern pianos, developed in the 18th century?",
      "options": [
        "Just Intonation",
        "Equal Temperament",
        "Mean-tone",
        "Pythagorean"
      ],
      "correctAnswer": 1,
      "hint": "Dividing the octave into 12 equal semitones"
    },
    {
      "question": "Who was the founder of the 'Bayreuth Festival' for his own operas?",
      "options": [
        "Verdi",
        "Wagner",
        "Strauss",
        "Weber"
      ],
      "correctAnswer": 1,
      "hint": "Built a special opera house"
    }
  ],
  "easy_pop": [
    {
      "question": "What is the world's most populous country (as of 2023)?",
      "options": [
        "China",
        "India",
        "USA",
        "Indonesia"
      ],
      "correctAnswer": 1,
      "hint": "Recently overtook China"
    },
    {
      "question": "What is the approximate current population of the world?",
      "options": [
        "5 Billion",
        "8 Billion",
        "10 Billion",
        "12 Billion"
      ],
      "correctAnswer": 1,
      "hint": "Hit this milestone in late 2022"
    },
    {
      "question": "What do we call the official count of a population?",
      "options": [
        "Survey",
        "Census",
        "Poll",
        "Audit"
      ],
      "correctAnswer": 1,
      "hint": "Taken every 10 years in many countries"
    },
    {
      "question": "Which continent has the largest population?",
      "options": [
        "Africa",
        "Europe",
        "Asia",
        "North America"
      ],
      "correctAnswer": 2,
      "hint": "Contains more than half the world's people"
    },
    {
      "question": "What is 'Life Expectancy'?",
      "options": [
        "Number of children a person has",
        "The average age people are expected to live",
        "The speed of population growth",
        "Retirement age"
      ],
      "correctAnswer": 1,
      "hint": "Higher in developed nations"
    },
    {
      "question": "What is 'Urbanization'?",
      "options": [
        "Moving to the countryside",
        "The growth of cities/increase in people living in cities",
        "Planting more trees",
        "Building more farms"
      ],
      "correctAnswer": 1,
      "hint": "Global trend"
    },
    {
      "question": "What is 'Migration'?",
      "options": [
        "People moving from one place to another",
        "Studying animals",
        "The birth of babies",
        "Changing jobs"
      ],
      "correctAnswer": 0,
      "hint": "Internal or international"
    },
    {
      "question": "What is 'Density' in population terms?",
      "options": [
        "How many people live in a square unit of area",
        "How heavy people are",
        "The education level of people",
        "The average income"
      ],
      "correctAnswer": 0,
      "hint": "People per square km"
    },
    {
      "question": "Which is the least populated continent?",
      "options": [
        "South America",
        "Australia",
        "Antarctica",
        "Africa"
      ],
      "correctAnswer": 2,
      "hint": "No permanent residents"
    },
    {
      "question": "What is a 'Baby Boom'?",
      "options": [
        "A large increase in the birth rate",
        "A new toy for babies",
        "A medical term",
        "A population decline"
      ],
      "correctAnswer": 0,
      "hint": "Occurred after WWII"
    }
  ],
  "medium_pop": [
    {
      "question": "What is 'Demography'?",
      "options": [
        "The study of maps",
        "The study of human populations",
        "The study of stars",
        "The study of democracy"
      ],
      "correctAnswer": 1,
      "hint": "Statistical study"
    },
    {
      "question": "What is the 'Fertility Rate'?",
      "options": [
        "Percentage of people who can farm",
        "Average number of children born to a woman over her lifetime",
        "The rate of plant growth",
        "Death rate in hospitals"
      ],
      "correctAnswer": 1,
      "hint": "Replacement level is ~2.1"
    },
    {
      "question": "What is a 'Megacity'?",
      "options": [
        "A city with over 1 million people",
        "A city with over 10 million people",
        "A capital city",
        "A floating city"
      ],
      "correctAnswer": 1,
      "hint": "Tokyo, Delhi, etc."
    },
    {
      "question": "What is the 'Dependency Ratio'?",
      "options": [
        "Number of people in jail",
        "Ratio of those not in the labor force to those in the labor force",
        "People who smoke",
        "Number of immigrants"
      ],
      "correctAnswer": 1,
      "hint": "Young and elderly vs working age"
    },
    {
      "question": "Which country has the oldest population average in the world?",
      "options": [
        "Italy",
        "Japan",
        "Germany",
        "USA"
      ],
      "correctAnswer": 1,
      "hint": "Known for longevity and low birth rates"
    },
    {
      "question": "What is 'Brain Drain'?",
      "options": [
        "A medical condition",
        "The emigration of highly trained or intelligent people from a particular country",
        "A type of movie",
        "Lack of schools"
      ],
      "correctAnswer": 1,
      "hint": "Impacts developing nations"
    },
    {
      "question": "What is an 'IDP'?",
      "options": [
        "Internally Displaced Person",
        "Independent Democratic Person",
        "International Doctor Program",
        "Indian Development Plan"
      ],
      "correctAnswer": 0,
      "hint": "Forced to move but stays within borders"
    },
    {
      "question": "What does a population pyramid with a wide base indicate?",
      "options": [
        "Low birth rate",
        "High birth rate / Young population",
        "Aging population",
        "Declining population"
      ],
      "correctAnswer": 1,
      "hint": "Often seen in developing countries"
    },
    {
      "question": "What is 'Malthusian Theory'?",
      "options": [
        "A theory on voting",
        "Theory that population growth will outpace food production",
        "A theory on weather",
        "Theory on space travel"
      ],
      "correctAnswer": 1,
      "hint": "Thomas Malthus"
    },
    {
      "question": "What is the most populous city in the world?",
      "options": [
        "New York",
        "London",
        "Tokyo",
        "Cairo"
      ],
      "correctAnswer": 2,
      "hint": "Over 37 million in the metro area"
    },
    {
      "question": "What is 'Net Migration'?",
      "options": [
        "Number of people using nets",
        "The difference between immigrants and emigrants",
        "Catching fish",
        "Moving for holidays"
      ],
      "correctAnswer": 1,
      "hint": "Impacts total population change"
    },
    {
      "question": "What is 'Replacement Level Fertility'?",
      "options": [
        "0.5",
        "1.0",
        "2.1",
        "3.5"
      ],
      "correctAnswer": 2,
      "hint": "Levels needed to keep population stable"
    },
    {
      "question": "Which region is experiencing the fastest population growth currently?",
      "options": [
        "South Asia",
        "Sub-Saharan Africa",
        "Western Europe",
        "North America"
      ],
      "correctAnswer": 1,
      "hint": "High birth rates continue here"
    },
    {
      "question": "What is a 'Pull Factor' in migration?",
      "options": [
        "Something that makes you leave your home",
        "Something that attracts people to a new location",
        "A type of gravity",
        "A legal restriction"
      ],
      "correctAnswer": 1,
      "hint": "Like better jobs or safety"
    },
    {
      "question": "What is 'Natural Increase'?",
      "options": [
        "Total population growth",
        "Birth rate minus death rate",
        "Importing food",
        "Increase in height"
      ],
      "correctAnswer": 1,
      "hint": "Excludes migration"
    }
  ],
  "hard_pop": [
    {
      "question": "What are the four stages of the 'Demographic Transition Model' (DTM)?",
      "options": [
        "High Stationary, Early Expanding, Late Expanding, Low Stationary",
        "Poor, Developing, Rich, Super Rich",
        "Birth, School, Work, Death",
        "Migration, Urbanization, Density, Fertility"
      ],
      "correctAnswer": 0,
      "hint": "Shift from high B/D rates to low"
    },
    {
      "question": "What was China's 'One Child Policy' (1979-2015) primarily aimed at?",
      "options": [
        "Increasing population",
        "Controlling rapid population growth",
        "Promoting male children",
        "Supporting rural families"
      ],
      "correctAnswer": 1,
      "hint": "Controversial social policy"
    },
    {
      "question": "What is the 'Doubling Time' of a population?",
      "options": [
        "Time to double the land area",
        "Time it takes for a population to double in size",
        "Time to reach the moon",
        "Average age of twins"
      ],
      "correctAnswer": 1,
      "hint": "Calculated with the Rule of 70"
    },
    {
      "question": "What is a 'Gendercide'?",
      "options": [
        "Changing gender",
        "Systematic killing of members of a specific sex (often females)",
        "A type of clothing",
        "A population census"
      ],
      "correctAnswer": 1,
      "hint": "Common in some cultures with son preference"
    },
    {
      "question": "What is 'Ecological Footprint' in population studies?",
      "options": [
        "Size of shoes",
        "The amount of environment needed to produce the goods the population consumes",
        "Walking in forests",
        "Measuring animal tracks"
      ],
      "correctAnswer": 1,
      "hint": "Individual or population level"
    },
    {
      "question": "What is the 'Demographic Dividend'?",
      "options": [
        "A tax refund",
        "Economic growth potential from a shift in a population's age structure (more workers)",
        "A type of stock market boom",
        "Paying for census data"
      ],
      "correctAnswer": 1,
      "hint": "Opportunity for development"
    },
    {
      "question": "What is the 'Greying of the population'?",
      "options": [
        "Air pollution in cities",
        "The aging of a population",
        "Cutting down trees",
        "Lack of hair dye"
      ],
      "correctAnswer": 1,
      "hint": "Trend in developed nations"
    },
    {
      "question": "What is the 'Law of Migration' proposed by Ravenstein?",
      "options": [
        "People must move every year",
        "Most migrants move only a short distance",
        "Rich people never move",
        "Migration is illegal"
      ],
      "correctAnswer": 1,
      "hint": "E.G. Ravenstein, 1880s"
    },
    {
      "question": "What is 'Overpopulation'?",
      "options": [
        "Too many people for the available resources",
        "A country with more than 100 million people",
        "Tall buildings",
        "Traffic jams"
      ],
      "correctAnswer": 0,
      "hint": "Relative to carrying capacity"
    },
    {
      "question": "What is 'ZPG'?",
      "options": [
        "Zero Population Growth",
        "Zone of Population Gain",
        "Zebra Protection Group",
        "Zenith Population Goal"
      ],
      "correctAnswer": 0,
      "hint": "Birth rate equals death rate"
    },
    {
      "question": "Which country has the highest population density (excluding microstates like Monaco)?",
      "options": [
        "India",
        "Bangladesh",
        "Netherlands",
        "South Korea"
      ],
      "correctAnswer": 1,
      "hint": "Over 1,100 people per sq km"
    },
    {
      "question": "What is the 'Total Fertility Rate' (TFR) required for a stable population without migration?",
      "options": [
        "1.5",
        "2.1",
        "2.5",
        "3.0"
      ],
      "correctAnswer": 1,
      "hint": "Accounts for child mortality"
    },
    {
      "question": "What is 'Pronatalism'?",
      "options": [
        "Against having children",
        "Policy that encourages childbearing",
        "Study of newborns",
        "A type of hospital"
      ],
      "correctAnswer": 1,
      "hint": "Adopted by some European countries with low birth rates"
    },
    {
      "question": "Which US state has the largest population?",
      "options": [
        "New York",
        "Texas",
        "California",
        "Florida"
      ],
      "correctAnswer": 2,
      "hint": "Approx 39 million"
    },
    {
      "question": "What is the 'carrying capacity' of an environment?",
      "options": [
        "The weight a person can carry",
        "The maximum population size that a specific environment can support sustainably",
        "The size of a truck",
        "Number of ships in a harbor"
      ],
      "correctAnswer": 1,
      "hint": "Resource dependent"
    },
    {
      "question": "Which decade saw the highest global population growth rate?",
      "options": [
        "1940s",
        "1960s",
        "1980s",
        "2000s"
      ],
      "correctAnswer": 1,
      "hint": "Peaked at about 2.1% per year"
    },
    {
      "question": "What is 'Xenophobia'?",
      "options": [
        "Fear of spiders",
        "Fear or hatred of that which is perceived to be foreign or strange",
        "Fear of heights",
        "Fear of math"
      ],
      "correctAnswer": 1,
      "hint": "Often targeted at immigrants"
    },
    {
      "question": "What is the main reason for the sharp decline in death rates globally since 1850?",
      "options": [
        "Better weapons",
        "Improvements in medicine and sanitation",
        "Space travel",
        "Warmer weather"
      ],
      "correctAnswer": 1,
      "hint": "Public health and antibiotics"
    },
    {
      "question": "What is 'Rural-Urban Fringe'?",
      "options": [
        "A new fashion trend",
        "The transition zone between the city and the country",
        "The edge of a field",
        "A type of bridge"
      ],
      "correctAnswer": 1,
      "hint": "Where suburbia meets nature"
    },
    {
      "question": "How many 'Megadiverse' countries are identified for having high biodiversity/population value?",
      "options": [
        "5",
        "10",
        "17",
        "25"
      ],
      "correctAnswer": 2,
      "hint": "Includes Brazil, India, Australia"
    }
  ],
  "easy_tech": [
    {
      "question": "What does 'WWW' stand for?",
      "options": [
        "World Wide Web",
        "World Wide Weapons",
        "Wild Wild West",
        "Working Web Weekly"
      ],
      "correctAnswer": 0,
      "hint": "The global information system"
    },
    {
      "question": "Who is the co-founder of Microsoft?",
      "options": [
        "Steve Jobs",
        "Bill Gates",
        "Mark Zuckerberg",
        "Jeff Bezos"
      ],
      "correctAnswer": 1,
      "hint": "Now a philanthropist"
    },
    {
      "question": "What is the main brain of a computer called?",
      "options": [
        "RAM",
        "Hard Drive",
        "CPU / Processor",
        "Monitor"
      ],
      "correctAnswer": 2,
      "hint": "Central Processing Unit"
    },
    {
      "question": "Which company makes the iPhone?",
      "options": [
        "Samsung",
        "Google",
        "Apple",
        "Microsoft"
      ],
      "correctAnswer": 2,
      "hint": "Cupertino-based giant"
    },
    {
      "question": "What is the name of the social media platform originally known for 140 character limit?",
      "options": [
        "Facebook",
        "Instagram",
        "Twitter / X",
        "LinkedIn"
      ],
      "correctAnswer": 2,
      "hint": "Blue bird icon"
    },
    {
      "question": "What is the most popular search engine in the world?",
      "options": [
        "Bing",
        "Yahoo",
        "Google",
        "DuckDuckGo"
      ],
      "correctAnswer": 2,
      "hint": "To 'look up' something online"
    },
    {
      "question": "What do you call a self-contained program that runs on a smartphone?",
      "options": [
        "Shortcut",
        "App",
        "Folder",
        "Widget"
      ],
      "correctAnswer": 1,
      "hint": "Application"
    },
    {
      "question": "What does 'USB' stand for?",
      "options": [
        "Universal Serial Bus",
        "United states Browser",
        "User Software Backup",
        "Ultra Speed Band"
      ],
      "correctAnswer": 0,
      "hint": "A common connector"
    },
    {
      "question": "Who founded the company Amazon?",
      "options": [
        "Elon Musk",
        "Larry Page",
        "Jeff Bezos",
        "Tim Cook"
      ],
      "correctAnswer": 2,
      "hint": "Began as an online bookstore"
    },
    {
      "question": "What is the name for the technology that allows devices to connect to the internet wirelessly?",
      "options": [
        "Bluetooth",
        "NFC",
        "Wi-Fi",
        "Infrared"
      ],
      "correctAnswer": 2,
      "hint": "802.11 standards"
    }
  ],
  "medium_tech": [
    {
      "question": "What does 'AI' stand for?",
      "options": [
        "Advanced Integration",
        "Artificial Intelligence",
        "Automated Interface",
        "Actual Information"
      ],
      "correctAnswer": 1,
      "hint": "Simulating human intellect"
    },
    {
      "question": "Who is known as the father of computer science?",
      "options": [
        "Alan Turing",
        "Charles Babbage",
        "Ada Lovelace",
        "John von Neumann"
      ],
      "correctAnswer": 0,
      "hint": "Cracked the Enigma code"
    },
    {
      "question": "What is the primary purpose of 'RAM' in a computer?",
      "options": [
        "To store files permanently",
        "To act as short-term memory for active tasks",
        "To keep the computer cool",
        "To connect to the internet"
      ],
      "correctAnswer": 1,
      "hint": "Random Access Memory"
    },
    {
      "question": "What does 'URL' stand for in web browsing?",
      "options": [
        "Uniform Resource Locator",
        "Universal Radio Link",
        "User Response Level",
        "Unique Regional Label"
      ],
      "correctAnswer": 0,
      "hint": "The web address"
    },
    {
      "question": "Which operating system is based on Linux and used in most smartphones?",
      "options": [
        "iOS",
        "Android",
        "Windows Mobile",
        "Symbian"
      ],
      "correctAnswer": 1,
      "hint": "Owned by Google"
    },
    {
      "question": "In computing, how many bits are there in one byte?",
      "options": [
        "4",
        "8",
        "16",
        "32"
      ],
      "correctAnswer": 1,
      "hint": "Unit of digital information"
    },
    {
      "question": "What is 'The Cloud' in computing terms?",
      "options": [
        "Storage in the sky",
        "Servers accessed over the internet",
        "Weather prediction software",
        "A type of monitor"
      ],
      "correctAnswer": 1,
      "hint": "Remote data processing"
    },
    {
      "question": "Who co-founded Apple with Steve Jobs?",
      "options": [
        "Steve Wozniak",
        "Paul Allen",
        "Sergey Brin",
        "Jack Dorsey"
      ],
      "correctAnswer": 0,
      "hint": "The Woz"
    },
    {
      "question": "What language is primarily used for styling web pages?",
      "options": [
        "HTML",
        "Python",
        "CSS",
        "SQL"
      ],
      "correctAnswer": 2,
      "hint": "Cascading Style Sheets"
    },
    {
      "question": "What is 'Blockchain' the underlying technology for?",
      "options": [
        "Electric cars",
        "Cryptocurrencies",
        "Touch screens",
        "Solar panels"
      ],
      "correctAnswer": 1,
      "hint": "Decentralized ledger"
    },
    {
      "question": "What does 'HTTP' stand for?",
      "options": [
        "Hypertext Transfer Protocol",
        "High Tension Tech Program",
        "Hyper Technical Task Process",
        "Hard Type Text Plugin"
      ],
      "correctAnswer": 0,
      "hint": "Foundation of data exchange on the web"
    },
    {
      "question": "Which company developed the Java programming language?",
      "options": [
        "Microsoft",
        "Sun Microsystems",
        "IBM",
        "Oracle"
      ],
      "correctAnswer": 1,
      "hint": "Write once, run anywhere"
    },
    {
      "question": "What is a 'Firewall' used for?",
      "options": [
        "Heating a server room",
        "Network security / blocking unauthorized access",
        "Speeding up video games",
        "Deleting viruses"
      ],
      "correctAnswer": 1,
      "hint": "Barrier between networks"
    },
    {
      "question": "What does 'GPS' stand for?",
      "options": [
        "Global Positioning System",
        "General Path Search",
        "Geo Point Scanner",
        "Ground Positioning Software"
      ],
      "correctAnswer": 0,
      "hint": "Satellite navigation"
    },
    {
      "question": "Which billionaire owns Tesla and SpaceX?",
      "options": [
        "Bill Gates",
        "Jeff Bezos",
        "Elon Musk",
        "Mark Cuban"
      ],
      "correctAnswer": 2,
      "hint": "Also bought Twitter"
    }
  ],
  "hard_tech": [
    {
      "question": "Who is often called the first computer programmer?",
      "options": [
        "Alan Turing",
        "Ada Lovelace",
        "Grace Hopper",
        "Charles Babbage"
      ],
      "correctAnswer": 1,
      "hint": "Worked on the Analytical Engine"
    },
    {
      "question": "What does 'SQL' stand for in database management?",
      "options": [
        "Structured Query Language",
        "Soft Quality Link",
        "Systems Query Logic",
        "Sequential Query Logic"
      ],
      "correctAnswer": 0,
      "hint": "Used to interact with relational databases"
    },
    {
      "question": "What is 'Moore's Law'?",
      "options": [
        "Internet users double every year",
        "The number of transistors on a microchip doubles every two years",
        "A robot must not harm humans",
        "Technology always gets more expensive"
      ],
      "correctAnswer": 1,
      "hint": "Gordon Moore, Intel co-founder"
    },
    {
      "question": "What was the first message sent over ARPANET, the precursor to the internet?",
      "options": [
        "HELLO",
        "LOGIN",
        "TEST",
        "LO"
      ],
      "correctAnswer": 3,
      "hint": "Sent in 1969; intended to say LOGIN"
    },
    {
      "question": "In cryptography, what is 'End-to-End Encryption'?",
      "options": [
        "Data is decrypted at every server",
        "Only the sender and recipient can read the message",
        "Encryption that uses only numbers",
        "Encryption for long distances"
      ],
      "correctAnswer": 1,
      "hint": "Used by WhatsApp/Signal"
    },
    {
      "question": "What is 'The Turing Test' used to determine?",
      "options": [
        "A computer's speed",
        "If a machine can exhibit intelligent behavior indistinguishable from a human",
        "The strength of a password",
        "Internet bandwidth"
      ],
      "correctAnswer": 1,
      "hint": "Proposed in 1950"
    },
    {
      "question": "Which programming language was created by Guido van Rossum?",
      "options": [
        "Ruby",
        "Python",
        "PHP",
        "Swift"
      ],
      "correctAnswer": 1,
      "hint": "Named after Monty Python"
    },
    {
      "question": "What is 'Quantum Computing' based on?",
      "options": [
        "Binary code",
        "Qubits and superposition/entanglement",
        "Liquid cooled wires",
        "High speed lasers"
      ],
      "correctAnswer": 1,
      "hint": "Uses quantum mechanics"
    },
    {
      "question": "What does 'SaaS' stand for in business software?",
      "options": [
        "Software as a Service",
        "System as a Shortcut",
        "Standard and Advanced Software",
        "Source and Application Sales"
      ],
      "correctAnswer": 0,
      "hint": "Cloud-based delivery"
    },
    {
      "question": "What was the name of the first programmable electronic computer?",
      "options": [
        "ENIAC",
        "UNIVAC",
        "Colossus",
        "IBM PC"
      ],
      "correctAnswer": 0,
      "hint": "Electronic Numerical Integrator and Computer"
    },
    {
      "question": "Which protocol is used for sending emails?",
      "options": [
        "FTP",
        "SMTP",
        "IMAP",
        "POP3"
      ],
      "correctAnswer": 1,
      "hint": "Simple Mail Transfer Protocol"
    },
    {
      "question": "What is a 'Kernel' in an operating system?",
      "options": [
        "A user interface",
        "The core part that manages hardware and tasks",
        "An icon on the desktop",
        "A type of shell"
      ],
      "correctAnswer": 1,
      "hint": "Heart of OS"
    },
    {
      "question": "What is 'Machine Learning' a subset of?",
      "options": [
        "Cloud Computing",
        "Artificial Intelligence",
        "Cybersecurity",
        "Blockchain"
      ],
      "correctAnswer": 1,
      "hint": "Allows systems to learn from data"
    },
    {
      "question": "In 1997, which IBM computer famously defeated world chess champion Garry Kasparov?",
      "options": [
        "Deep Thought",
        "Deep Blue",
        "Watson",
        "AlphaGo"
      ],
      "correctAnswer": 1,
      "hint": "First computer to win a match against a reigning world champion"
    },
    {
      "question": "What does 'BIOS' stand for?",
      "options": [
        "Basic Input/Output System",
        "Binary Input Online Service",
        "Board Integrated Operating Software",
        "Built-In Optical Sensor"
      ],
      "correctAnswer": 0,
      "hint": "Starts the computer hardware"
    },
    {
      "question": "Which organization manages the domain name system (DNS)?",
      "options": [
        "W3C",
        "ICANN",
        "IEEE",
        "ISO"
      ],
      "correctAnswer": 1,
      "hint": "Corporation for Assigned Names and Numbers"
    },
    {
      "question": "What is 'Open Source' software?",
      "options": [
        "Free software",
        "Software with source code that anyone can inspect, modify, and enhance",
        "Software that only runs when the internet is open",
        "Software with no security"
      ],
      "correctAnswer": 1,
      "hint": "Like Linux or Firefox"
    },
    {
      "question": "What is 'BitCoin's' creator's pseudonym?",
      "options": [
        "Satoshi Nakamoto",
        "Vitalik Buterin",
        "Hal Finney",
        "Craig Wright"
      ],
      "correctAnswer": 0,
      "hint": "Identity remains unknown"
    },
    {
      "question": "What does 'IoT' stand for?",
      "options": [
        "Internet of Things",
        "Internal Online Task",
        "Integration of Technology",
        "Input over Time"
      ],
      "correctAnswer": 0,
      "hint": "Network of physical objects with sensors"
    },
    {
      "question": "Which tech giant acquired the mobile app WhatsApp in 2014?",
      "options": [
        "Google",
        "Microsoft",
        "Facebook / Meta",
        "Apple"
      ],
      "correctAnswer": 2,
      "hint": "For approximately $19 billion"
    }
  ]
};

export function getQuiz(category: string, difficulty: Difficulty): Question[] {
  const prefix = difficulty === "easy" ? "" : difficulty;
  return QUIZZES[`${prefix}_${category}`] || [];
}