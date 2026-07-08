// Anesthetick — Comprehensive Anesthesia Curriculum Database
// Merged & curated from data.js + datass.js
// Target: EDAIC Part I & II, Primary FRCA, Final FRCA
// References legend:
//   MM = Morgan & Mikhail's Clinical Anesthesiology (6th ed)
//   MIL = Miller's Anesthesia (10th ed)
//   DD = Dorsch & Dorsch Understanding Anesthesia Equipment (5th ed)
//   OX = OpenAnesthesia (openanesthesia.org)
//   ATOTW = Anaesthesia Tutorial of the Week (WFSA/AnaesthesiaUK)
//   PS = PhysiologyWeb / Free open physiology texts
//   GS = GeeksforGeeks/NYSORA free regional resources
//   LITFL = Life in the Fast Lane (education)
//   ALLN = Anaesthesia & Intensive Care Medicine journal
//   RCoA = Royal College of Anaesthetists Syllabus 2026

const CURRICULUM = [
{
  id: "physics-measurement",
  name: "Physics & Clinical Measurement",
  icon: "atom",
  color: "#0ea5e9",
  sections: [
    {
      id: "basic-physics",
      name: "Basic Physical Principles",
      topics: [
        {
          id: "units-mechanics",
          name: "Units, Mechanics & Force",
          icon: "zap",
          refs: ["RCoA F2"],
          sub: [
            "SI units: fundamental and derived",
            "Non-SI units in anesthesia (mmHg, cmH2O, bar, atm, PSI)",
            "Mass, force, weight, gravity",
            "Work, energy, power",
            "Newton's laws of motion"
          ],
          subLinks: []
        },
        {
          id: "thermo-physics",
          name: "Heat & Thermodynamics",
          icon: "thermometer",
          refs: ["RCoA F2"],
          sub: [
            "Temperature scales & absolute zero",
            "Heat transfer: conduction, convection, radiation, evaporation",
            "Latent heat & specific heat capacity",
            "Relevance to clinical anesthesia (heat loss in theatre)",
            "Humidity & absolute vs relative humidity"
          ],
          subLinks: []
        },
        {
          id: "gas-laws-physics",
          name: "Gas Laws & Properties",
          icon: "thermometer",
          refs: ["RCoA F2", "DD Ch.1-2", "MM Ch.4"],
          sub: [
            "Kinetic theory of gases",
            "Boyle's Law (P/V relationship)",
            "Charles' Law (V/T relationship)",
            "Gay-Lussac's Law (P/T relationship)",
            "Dalton's Law of partial pressures",
            "Henry's Law (gas dissolution)",
            "Avogadro's hypothesis",
            "Fick's law of diffusion",
            "Graham's law (effusion)",
            "Ideal gas law & universal gas constant",
            "Critical temperature & critical pressure",
            "Adiabatic processes & Joule-Thomson effect",
            "Physics of vapours vs gases",
            "Saturated vapour pressure (SVP)",
            "Latent heat of vaporization",
            "Viscosity, density, Reynolds number"
          ],
          subLinks: []
        },
        {
          id: "flow-dynamics",
          name: "Flow & Fluid Dynamics",
          icon: "droplets",
          refs: ["RCoA F2", "DD Ch.5"],
          sub: [
            "Laminar flow & Hagen-Poiseuille equation",
            "Turbulent flow & Reynolds number",
            "Effect of gas density (Helium) and viscosity",
            "Bernoulli principle & Venturi effect",
            "Entrainment devices (nebulizers, Venturi masks)",
            "Orifice flow & flowmeters"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "optics-spectrophotometry",
      name: "Optics, Spectrophotometry & Light",
      topics: [
        {
          id: "optics-principles",
          name: "Optics & Light Principles",
          icon: "radio",
          refs: ["RCoA F2", "MM Ch.5"],
          sub: [
            "Electromagnetic spectrum & light properties",
            "Reflection, refraction, absorption",
            "Fiberoptics: total internal reflection, light transmission",
            "Laser physics: spontaneous vs stimulated emission",
            "Laser types: CO2, Nd:YAG, KTP, Argon",
            "Laser safety & classification"
          ],
          subLinks: []
        },
        {
          id: "spectrophotometry",
          name: "Spectrophotometry",
          icon: "radio",
          refs: ["RCoA F2", "MM Ch.5"],
          sub: [
            "Beer-Lambert law principles",
            "Infrared absorption spectroscopy",
            "Pulse oximetry: red/IR light absorption",
            "Oxyhemoglobin & deoxyhemoglobin absorption spectra",
            "CO-oximetry: multiple wavelength analysis",
            "Dyshemoglobin detection (COHb, MetHb)"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "electricity-electronics",
      name: "Electricity & Electronics",
      topics: [
        {
          id: "electrical-principles",
          name: "Electrical Principles",
          icon: "zap",
          refs: ["RCoA F2", "DD Ch.19"],
          sub: [
            "Current, voltage, resistance, impedance",
            "Ohm's law & power calculations",
            "Capacitance and inductance",
            "Alternating vs direct current",
            "Transformers (step-up/step-down)"
          ],
          subLinks: []
        },
        {
          id: "electrical-safety-theatre",
          name: "Electrical Safety & Hazards",
          icon: "zap",
          refs: ["RCoA F2", "DD Ch.19", "MM Ch.4"],
          sub: [
            "Macroshock vs microshock",
            "Earth leakage currents",
            "Line isolation monitors & isolated power",
            "Equipotential bonding & grounding",
            "Ground fault circuit interrupters",
            "Defibrillator physics (capacitor discharge, thoracic impedance)",
            "Diathermy: monopolar vs bipolar circuits, grounding pad safety",
            "Pacemaker sensitivity to electromagnetic interference",
            "Fire triad: oxidizer, fuel, ignition",
            "Laser & electrosurgery plume hazards",
            "Bowel prep & methane explosion risk",
            "Fire risk assessment score",
            "Waste anesthetic gas exposure limits"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "ultrasound-physics",
      name: "Ultrasound Physics",
      topics: [
        {
          id: "us-principles",
          name: "Principles of Ultrasound",
          icon: "radio",
          refs: ["RCoA F2", "MM Ch.5"],
          sub: [
            "Piezoelectric effect",
            "Frequency, wavelength, propagation speed",
            "Attenuation, impedance, depth tradeoff",
            "Resolution: axial vs lateral vs penetration",
            "Modes: B-mode, M-mode, Doppler",
            "Acoustic artifacts (shadowing, enhancement, reverberation)",
            "Doppler effect principle & color Doppler",
            "Probes: linear, curvilinear, phased array"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "clinical-measurement",
      name: "Clinical Measurement Principles",
      topics: [
        {
          id: "measurement-theory",
          name: "Measurement Theory",
          icon: "bar-chart",
          refs: ["RCoA F3"],
          sub: [
            "Accuracy vs precision",
            "Linearity, drift, hysteresis",
            "Signal-to-noise ratio",
            "Static vs dynamic response",
            "Calibration principles (zeroing, spanning)",
            "Limits of monitoring equipment"
          ],
          subLinks: []
        },
        {
          id: "specific-measurements",
          name: "Equipment & Measurement Applications",
          icon: "monitor",
          refs: ["RCoA F3", "DD Ch.14-16"],
          sub: [
            "Pressure transducers: strain gauge principle",
            "Blood pressure: oscillotonometer physics",
            "Capnography: infrared absorption physics",
            "Pulse oximetry: Beer-Lambert law application",
            "Temperature measurement: thermistor vs thermocouple",
            "Gas analysis: paramagnetic (O2), mass spectrometry, Raman",
            "Blood gas analysis: electrode principles, pH/blood gas electrodes",
            "Flow measurement: pneumotachograph",
            "Electrical interference: causes and reduction"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "biochemistry-cell",
  name: "Biochemistry, Cell Biology & Mathematics",
  icon: "flask-conical",
  color: "#22c55e",
  sections: [
    {
      id: "cell-biology",
      name: "Cell Biology & Genetics",
      topics: [
        {
          id: "cell-structure-function",
          name: "Cell Structure & Function",
          icon: "flask-conical",
          refs: ["RCoA G2"],
          sub: [
            "Cell components and organelles (mitochondria, ER, ribosomes)",
            "Cell membrane: phospholipid bilayer, proteins, cholesterol",
            "Cell junctions (tight, gap, desmosomes)",
            "Receptors: membrane bound, intracellular, nuclear",
            "Ion channels: voltage-gated, ligand-gated, leak channels",
            "Active vs passive transport mechanisms",
            "Genes and expression (DNA to RNA to protein)"
          ],
          subLinks: []
        },
        {
          id: "body-fluids",
          name: "Body Fluids & Homeostasis",
          icon: "droplets",
          refs: ["RCoA G2"],
          sub: [
            "Water compartments (ICF, ECF, Interstitial, Plasma)",
            "Osmolarity vs osmolality vs tonicity",
            "Colligative properties (osmotic pressure, freezing point depression)",
            "Capillary dynamics (Starling forces, glycocalyx model)",
            "Special fluids: CSF, pleural, pericardial, peritoneal",
            "Lymphatic system structure and function"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "molecular-biochem",
      name: "Molecular Biochemistry",
      topics: [
        {
          id: "organic-chemistry",
          name: "Organic & Physical Chemistry",
          icon: "flask-conical",
          refs: ["RCoA G3"],
          sub: [
            "Intermolecular bonds (van der Waals, hydrogen, ionic)",
            "Ionization of molecules, pKa, pH effect",
            "Isomers: structural and stereo (optical isomers in anesthesia)",
            "Oxidation and reduction reactions",
            "Quaternary ammonium compounds (permanently charged drugs)",
            "Drug solubility and partition coefficients"
          ],
          subLinks: []
        },
        {
          id: "metabolism-nutrition",
          name: "Metabolism & Nutrition",
          icon: "flask-conical",
          refs: ["RCoA G2"],
          sub: [
            "Carbohydrate metabolism (glycolysis, TCA cycle, gluconeogenesis)",
            "Lactate production and metabolism",
            "Lipid metabolism (beta-oxidation, ketogenesis)",
            "Protein metabolism and nitrogen balance",
            "Energy requirements and measurement (indirect calorimetry)",
            "Vitamins and minerals (cofactors)",
            "Body mass index and body composition"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "pharm-math",
      name: "Mathematics for Pharmacology",
      topics: [
        {
          id: "pharmacokinetic-math",
          name: "Pharmacokinetic Mathematics",
          icon: "pill",
          refs: ["RCoA G3"],
          sub: [
            "Exponential functions (wash-in, wash-out curves)",
            "Logarithms (base 10, natural logs)",
            "Area Under the Curve (AUC) and integration",
            "Rate of change and differentiation",
            "Half-life calculation and time constants",
            "Clearance calculations"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "applied-anatomy",
  name: "Applied Anatomy",
  icon: "bone",
  color: "#a855f7",
  sections: [
    {
      id: "airway-anatomy",
      name: "Airway & Respiratory Anatomy",
      topics: [
        {
          id: "upper-airway",
          name: "Upper Airway",
          icon: "lungs",
          refs: ["RCoA G1", "MM Ch.19"],
          sub: [
            "Mouth, nose, pharynx structural anatomy",
            "Larynx: cartilages, ligaments, joints",
            "Vocal cords & glottic aperture",
            "Innervation: external branch of superior laryngeal, recurrent laryngeal nerve",
            "Blood supply to the airway",
            "Age-related changes (neonate to adult)",
            "Surface anatomy of the airway"
          ],
          subLinks: []
        },
        {
          id: "lower-respiratory-tract",
          name: "Lower Respiratory Tract",
          icon: "lungs",
          refs: ["RCoA G1"],
          sub: [
            "Trachea: structure, length, rings",
            "Main bronchi & segmental bronchi (anatomical differences)",
            "Lung lobes and microstructure (alveoli)",
            "Pleura: layers, surface anatomy, reflections",
            "Mediastinum: compartments and contents",
            "Diaphragm: attachments, apertures, innervation (phrenic C3-5)",
            "Intercostal muscles & neurovascular bundle orientation"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "spine-neuraxial-anatomy",
      name: "Spinal & Neuraxial Anatomy",
      topics: [
        {
          id: "vertebral-column",
          name: "Vertebral Column & Spinal Cord",
          icon: "brain",
          refs: ["RCoA G1"],
          sub: [
            "Cervical, thoracic, lumbar vertebrae: distinguishing features",
            "Sacrum & sacral hiatus anatomy",
            "Ligaments of vertebral column (Supraspinous, Ligamentum Flavum, PLL, ALL)",
            "Spinal cord: length vs vertebral column length",
            "Spinal meninges (Dura, Arachnoid, Pia)",
            "Epidural space: contents (fat, veins, nerves)",
            "Subarachnoid space & CSF",
            "Surface anatomy of vertebral spaces",
            "Major ascending tracts (DCML, Spinothalamic)",
            "Major descending tracts (Corticospinal)",
            "Blood supply (Anterior spinal artery, Radicular arteries)",
            "Spinal nerves: structure and formation",
            "Dermatomes: clinical mapping and relevance",
            "Autonomic outflow from spinal cord"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "cardiovascular-anat",
      name: "Cardiovascular Anatomy",
      topics: [
        {
          id: "heart-great-vessels",
          name: "Heart & Great Vessels",
          icon: "heart",
          refs: ["RCoA G1"],
          sub: [
            "Heart chambers: internal features",
            "Cardiac valves: anatomy and relations",
            "Conducting system (SA node, AV node, bundles)",
            "Coronary artery dominance and supply",
            "Pericardium: layers and sinuses",
            "Great vessels: aorta, SVC, IVC, pulmonary arteries/veins"
          ],
          subLinks: []
        },
        {
          id: "peripheral-vasculature",
          name: "Peripheral Vasculature",
          icon: "heart",
          refs: ["RCoA G1"],
          sub: [
            "Large veins of the neck (IJV anatomy for CVC)",
            "Anterior triangle of the neck (surface & US anatomy)",
            "Axilla & antecubital fossa structures",
            "Femoral triangle anatomy",
            "Arteries of upper and lower limbs",
            "Celiac plexus & autonomic ganglia"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "regional-anatomy",
      name: "Regional Anaesthesia Anatomy",
      topics: [
        {
          id: "plexus-anatomy",
          name: "Brachial & Lumbar Plexuses",
          icon: "needle",
          refs: ["RCoA G1", "GS"],
          sub: [
            "Brachial plexus: roots, trunks, divisions, cords, terminal branches",
            "Brachial plexus relations (scalene muscles, clavicle, axilla)",
            "Lumbar plexus: roots and branches (femoral, lateral cutaneous, obturator)",
            "Sacral plexus: roots and branches (sciatic, posterior cutaneous)",
            "Nerves of the abdominal wall (intercostals, ilioinguinal, iliohypogastric)"
          ],
          subLinks: []
        },
        {
          id: "head-neck-eye-anat",
          name: "Head, Neck & Eye Anatomy",
          icon: "bone",
          refs: ["RCoA G1"],
          sub: [
            "Cranial nerves (overview and specific relevant nerves)",
            "Cervical plexus: roots and branches",
            "Stellate ganglion anatomy",
            "Eye and orbit anatomy",
            "Functional anatomy of hypothalamic/pituitary, adrenal, thyroid glands",
            "Trigeminal & facial nerve anatomy",
            "Surface markings of relevant structures"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "physiology",
  name: "Physiology for Anesthesia",
  icon: "activity",
  color: "#10b981",
  sections: [
    {
      id: "cellular-physio",
      name: "Cellular & General Physiology",
      topics: [
        {
          id: "membrane-potential",
          name: "Membrane & Resting Potential",
          icon: "activity",
          refs: ["RCoA G2"],
          sub: [
            "Resting membrane potential genesis (Na/K ATPase)",
            "Nernst equation & equilibrium potential",
            "Action potential generation and phases",
            "Conduction velocity and myelination",
            "Synaptic transmission (neurotransmitter release)",
            "Changes with advancing age"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "ans-physio",
      name: "Autonomic Nervous System",
      topics: [
        {
          id: "ans-physiology",
          name: "ANS Pharmacology & Physiology",
          icon: "pill",
          refs: ["MM Ch.13", "PS"],
          sub: [
            "Sympathetic vs parasympathetic anatomy",
            "Neurotransmitters & receptors",
            "Adrenergic receptor distribution & effects",
            "Baroreceptor reflex",
            "Direct vs reflex effects of drugs"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "cardio-physio",
      name: "Cardiovascular Physiology",
      topics: [
        {
          id: "cardiac-muscle",
          name: "Cardiac Muscle & Electrophysiology",
          icon: "heart",
          refs: ["MM Ch.20", "PS", "RCoA G2"],
          sub: [
            "Cardiac vs skeletal vs smooth muscle contraction",
            "Excitation-contraction coupling in heart",
            "Cardiac cycle: pressure-volume loops, work, power",
            "Rhythmicity and impulse generation (SA node)",
            "Action potentials (nodal vs ventricular)",
            "Refractory periods",
            "ECG origin and interval meanings",
            "Effects of temperature, ischaemia, electrolytes on ECG",
            "Arrhythmia mechanisms (reentry, ectopic, afterdepolarizations)",
            "Effect of anesthetics on conduction"
          ],
          subLinks: []
        },
        {
          id: "haemodynamics",
          name: "Haemodynamics & Control",
          icon: "heart",
          refs: ["MM Ch.20", "PS", "RCoA G2"],
          sub: [
            "Preload, afterload, contractility (Frank-Starling)",
            "Laplace's law & wall stress",
            "Determinants of myocardial oxygen supply/demand",
            "Coronary perfusion & autoregulation",
            "Compliance & elastance",
            "Fluid challenge and heart failure response",
            "Autonomic control of BP (baroreceptors, vasomotor centre)",
            "Humoral control (RAAS, ADH, catecholamines)",
            "Local metabolic control of circulation",
            "Effects of ventilation & intrathoracic pressure on circulation",
            "Peripheral circulation: endothelium, arteriolar smooth muscle",
            "Special circulations: pulmonary, coronary, cerebral, renal, fetal"
          ],
          subLinks: []
        },
        {
          id: "shock-oxygen-delivery",
          name: "Shock States & Oxygen Delivery",
          icon: "lungs",
          refs: ["MM Ch.20", "MM Ch.57"],
          sub: [
            "DO2 = CO x CaO2; VO2 & extraction ratio",
            "Types: hypovolemic, cardiogenic, distributive, obstructive",
            "Compensated vs decompensated shock",
            "Lactate & base excess as markers"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "resp-physio",
      name: "Respiratory Physiology",
      topics: [
        {
          id: "lung-mechanics",
          name: "Lung Mechanics & Ventilation",
          icon: "lungs",
          refs: ["MM Ch.21", "PS", "RCoA G2"],
          sub: [
            "Lung volumes & capacities (definitions)",
            "Dead space: anatomical, alveolar, physiological",
            "Compliance & elastance, hysteresis (static vs dynamic)",
            "Surfactant function & Laplace's law",
            "Airway resistance: laminar vs turbulent flow",
            "Work of breathing components",
            "Closing capacity & aging",
            "Flow-volume loops",
            "Effect of IPPV on lungs"
          ],
          subLinks: []
        },
        {
          id: "gas-exchange",
          name: "Gas Exchange & Transport",
          icon: "lungs",
          refs: ["MM Ch.21", "PS", "RCoA G2"],
          sub: [
            "V/Q relationships, shunt equation & regional V/Q",
            "Oxygen cascade & alveolar gas equation",
            "PAO2 = FiO2(Patm-PH2O) - PaCO2/R",
            "Diffusion capacity & Fick law",
            "A-a gradient causes",
            "Hypoxic pulmonary vasoconstriction",
            "Hemoglobin dissociation curve & P50",
            "Bohr & Haldane effects",
            "2,3-DPG, pH, temperature shifts on O2 dissociation",
            "CO2 transport (bicarbonate, carbamino, dissolved)",
            "Henderson-Hasselbalch",
            "CO2 stores & apneic diffusion",
            "Hypoxia and hyper/hypocapnia effects",
            "Effects of altitude and hyperbaric pressures",
            "Non-respiratory functions of the lungs"
          ],
          subLinks: []
        },
        {
          id: "control-ventilation",
          name: "Control of Ventilation",
          icon: "lungs",
          refs: ["MM Ch.21", "PS"],
          sub: [
            "Central & peripheral chemoreceptors",
            "Effect of anesthetics on ventilatory drive",
            "Hypoxic ventilatory response",
            "Apneic threshold & CO2 response curve",
            "Sleep-disordered breathing",
            "Acute and chronic ventilatory failure"
          ],
          subLinks: []
        },
        {
          id: "anesthesia-resp-effects",
          name: "Effects of Anesthesia on Respiration",
          icon: "lungs",
          refs: ["MM Ch.21"],
          sub: [
            "Reduced FRC, atelectasis, V/Q mismatch",
            "Reduced hypoxic pulmonary vasoconstriction",
            "Apnea, altered CO2 response",
            "Changes in dead space & compliance",
            "Positioning & cephalad diaphragm shift"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "renal-physio",
      name: "Renal Physiology",
      topics: [
        {
          id: "renal-hemodynamics",
          name: "Renal Hemodynamics & GFR",
          icon: "kidney",
          refs: ["MM Ch.31", "PS", "RCoA G2"],
          sub: [
            "Renal circulation and autoregulation",
            "GFR determinants & clearance concepts",
            "Tubuloglomerular feedback",
            "Effects of anesthesia on RBF",
            "Assessment of renal function (GFR, clearance, urea/creatinine, cystatin C)",
            "Pathophysiology of acute kidney injury"
          ],
          subLinks: []
        },
        {
          id: "tubular-function",
          name: "Tubular Function & Handling",
          icon: "kidney",
          refs: ["MM Ch.31", "PS"],
          sub: [
            "Sodium, water, potassium handling",
            "Loop of Henle & countercurrent multiplier",
            "ADH/vasopressin & aquaporins",
            "RAAS & aldosterone",
            "Acid-base regulation by kidney"
          ],
          subLinks: []
        },
        {
          id: "perioperative-renal",
          name: "Perioperative Renal Evaluation",
          icon: "kidney",
          refs: ["MM Ch.31"],
          sub: [
            "BUN/Cr, eGFR, cystatin C",
            "Fractional excretion of sodium",
            "AKI biomarkers (NGAL, KIM-1)",
            "Contrast nephropathy & prevention",
            "Effects of drugs (NSAIDs, ACE-I)"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "hepatic-physio",
      name: "Hepatic Physiology",
      topics: [
        {
          id: "liver-function-metabolism",
          name: "Liver Function & Measurement",
          icon: "liver",
          refs: ["MM Ch.7", "PS", "RCoA G2"],
          sub: [
            "Hepatic blood flow (dual supply)",
            "Drug metabolism phases I/II",
            "Bilirubin metabolism",
            "Coagulation factor synthesis",
            "Protein synthesis & drug binding",
            "Liver function tests (ALT, AST, ALP, GGT, bilirubin)",
            "Synthetic function (albumin, INR, clotting factors)",
            "Child-Pugh & MELD scoring"
          ],
          subLinks: []
        },
        {
          id: "anesthesia-liver",
          name: "Anesthesia & Liver Disease",
          icon: "liver",
          refs: ["MM Ch.7", "MM Ch.39"],
          sub: [
            "Effects of anesthetics on hepatic blood flow",
            "Altered pharmacokinetics in cirrhosis",
            "Hepatorenal syndrome",
            "Hepatic encephalopathy"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "endocrine-physio",
      name: "Endocrine Physiology",
      topics: [
        {
          id: "dm-physio",
          name: "Diabetes Mellitus",
          icon: "gauge",
          refs: ["MM Ch.35", "RCoA G2"],
          sub: [
            "Type 1 vs type 2 pathophysiology",
            "Insulins (rapid, short, intermediate, long)",
            "DKA & HHS",
            "Perioperative insulin management & glucose targets",
            "Hypoglycemia recognition"
          ],
          subLinks: []
        },
        {
          id: "thyroid-adrenal",
          name: "Thyroid, Adrenal & Pituitary",
          icon: "kidney",
          refs: ["MM Ch.35", "RCoA G2"],
          sub: [
            "Hormone types, receptors, and feedback mechanisms",
            "Hypothalamic and pituitary function",
            "Thyroid storm & myxedema coma",
            "Hyperthyroid perioperative risks",
            "Adrenal insufficiency & steroid replacement",
            "Pheochromocytoma physiology & blockade",
            "Cushing & Addison syndromes",
            "Parathyroid hormones & calcium homeostasis",
            "Metabolic response to trauma and stress",
            "Physiological changes in starvation and exercise",
            "Body temperature regulation (including extremes of age)"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "neurophysiology",
      name: "Neurophysiology",
      topics: [
        {
          id: "cbf-icp",
          name: "Cerebral Blood Flow & ICP",
          icon: "brain",
          refs: ["MM Ch.26", "PS", "RCoA G2"],
          sub: [
            "Brain: functional divisions",
            "Brainstem: organization, ICP, CSF flow",
            "CBF autoregulation (50-150 mmHg)",
            "PaCO2 & PaO2 effects on CBF",
            "Intracranial compliance & Monro-Kellie doctrine",
            "Cerebral metabolic rate & effects of anesthetics",
            "Lund vs CPP-targeted therapy"
          ],
          subLinks: []
        },
        {
          id: "pain-neurophysio",
          name: "Pain Pathways & Nociception",
          icon: "triangle-alert",
          refs: ["MM Ch.47", "RCoA G2"],
          sub: [
            "Nociceptors & transduction",
            "A-delta vs C fibers",
            "Spinal cord processing & gate control",
            "Descending inhibition",
            "Central & peripheral sensitization",
            "Wind-up & NMDA receptor",
            "Neuropathic vs visceral pain mechanisms",
            "Physiology of nausea and vomiting"
          ],
          subLinks: []
        },
        {
          id: "neuroprotection-eeg",
          name: "Neuroprotection & EEG",
          icon: "brain",
          refs: ["MM Ch.26", "MIL Ch.81"],
          sub: [
            "EEG patterns & anesthetic depth",
            "Burst suppression",
            "Ischemic preconditioning",
            "Hypothermia for neuroprotection",
            "Glucose control in neuro injury"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "acid-base-electrolytes",
      name: "Acid-Base & Electrolytes",
      topics: [
        {
          id: "acid-base-interp",
          name: "Acid-Base Interpretation",
          icon: "flask-conical",
          refs: ["MM Ch.51", "MM Ch.52", "RCoA G2"],
          sub: [
            "pH definition (negative log of H+)",
            "Strong vs weak acids",
            "Buffer systems (bicarbonate, haemoglobin, protein, phosphate)",
            "Henderson-Hasselbalch equation",
            "Anion gap & osmolar gap",
            "Base excess interpretation",
            "Boston vs Stewart approach",
            "Strong ion difference",
            "Compensatory mechanisms & expected values",
            "Renal regulation of acid-base",
            "Respiratory compensation limits",
            "Common perioperative derangements"
          ],
          subLinks: []
        },
        {
          id: "electrolyte-disorders",
          name: "Electrolyte Disorders",
          icon: "droplets",
          refs: ["MM Ch.52"],
          sub: [
            "Sodium: hyponatremia/hypernatremia (DKA, SIADH, diabetes insipidus)",
            "Potassium: causes & ECG changes",
            "Calcium: ionized vs total, citrate chelation",
            "Magnesium: treatment of pre-eclampsia, arrhythmias",
            "Phosphate disorders"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "blood-immune-physio",
      name: "Blood & Immune Physiology",
      topics: [
        {
          id: "coagulation-physio",
          name: "Coagulation & Fibrinolysis",
          icon: "droplets",
          refs: ["MM Ch.22"],
          sub: [
            "Coagulation cascade (intrinsic/extrinsic/common)",
            "Cell-based model of coagulation",
            "Platelet function",
            "Fibrinolysis & D-dimer",
            "Inherited disorders (vWD, hemophilia A/B)",
            "Viscoelastic testing interpretation (TEG/ROTEM)",
            "Coagulation measurement (aPTT, PT/INR, anti-Xa)"
          ],
          subLinks: []
        },
        {
          id: "transfusion-physio",
          name: "Transfusion Physiology",
          icon: "droplets",
          refs: ["MM Ch.51"],
          sub: [
            "ABO/Rh & crossmatch",
            "Component therapy",
            "Massive transfusion ratios",
            "TACO vs TRALI",
            "Transfusion reactions"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "obstetric-physio",
      name: "Obstetric Physiology",
      topics: [
        {
          id: "pregnancy-physio",
          name: "Maternal Physiology & Fetal Circulation",
          icon: "baby",
          refs: ["RCoA G2", "MM Ch.40", "MM Ch.41"],
          sub: [
            "Physiological alterations in pregnancy (CVS, Resp, GI, Renal)",
            "Materno-fetal circulation",
            "Fetal and neonatal circulation transitions at birth",
            "Functions of the placenta and placental transfer",
            "Pain pathways relevant to stages of labour"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "pharmacology",
  name: "Pharmacology",
  icon: "pill",
  color: "#ef4444",
  sections: [
    {
      id: "pkpd",
      name: "Pharmacokinetics & Pharmacodynamics",
      topics: [
        {
          id: "pk",
          name: "Pharmacokinetics",
          icon: "pill",
          refs: ["RCoA G3", "MM Ch.7", "MIL Ch.30"],
          sub: [
            "Absorption, distribution, metabolism, excretion (ADME)",
            "Bioavailability and first-pass metabolism",
            "Volume of distribution and compartments (1, 2, 3 compartment models)",
            "Clearance mechanisms (hepatic, renal)",
            "First-order vs zero-order kinetics",
            "Half-life and context-sensitive half-time",
            "Protein binding (plasma and tissue)",
            "Enzyme induction and inhibition",
            "Effect-site concentration (ke0)",
            "Target Controlled Infusion (TCI) principles",
            "Pharmacogenetics (CYP450 variants, pseudocholinesterase)"
          ],
          subLinks: []
        },
        {
          id: "pd",
          name: "Pharmacodynamics",
          icon: "pill",
          refs: ["RCoA G3", "MM Ch.7", "MIL Ch.30"],
          sub: [
            "Drug-receptor interactions (lock and key, induced fit)",
            "Dose-response curves (Emax, EC50, slope)",
            "Agonists, partial agonists, antagonists",
            "Potency vs efficacy",
            "Reversible and irreversible antagonism",
            "Receptor types & signal transduction",
            "Receptor regulation, downregulation, tachyphylaxis",
            "Therapeutic index & margin of safety",
            "Non-specific drug actions (chelation, adsorption)",
            "Drug interactions (synergism, additivity, isobolograms)"
          ],
          subLinks: []
        },
        {
          id: "uptake-distribution",
          name: "Uptake & Distribution of Inhaled Agents",
          icon: "pill",
          refs: ["MM Ch.8", "MIL Ch.31"],
          sub: [
            "Solubility (blood/gas partition coefficient, oil/gas)",
            "Cardiac output effects on uptake",
            "Alveolar-venous partial pressure difference",
            "Concentration effect & second gas effect",
            "Overpressurization technique",
            "Effect of minute ventilation"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "inhalational",
      name: "Inhalational Anesthetics",
      topics: [
        {
          id: "inh-properties",
          name: "Properties of Inhaled Agents",
          icon: "pill",
          refs: ["MM Ch.8", "MIL Ch.31", "RCoA G3"],
          sub: [
            "Mechanisms of anaesthetic action (Meyer-Overton hypothesis)",
            "MAC concept and factors affecting MAC",
            "Vapor pressure & boiling points",
            "Halogenation & chemical stability",
            "Solubility: blood/gas and oil/gas coefficients — onset/offset",
            "Distribution: vessel-rich group vs vessel-poor",
            "Metabolism & toxicity (halothane hepatitis, compound A, CO formation)",
            "Greenhouse & ozone effects of volatile agents"
          ],
          subLinks: []
        },
        {
          id: "sevoflurane",
          name: "Sevoflurane",
          icon: "pill",
          refs: ["MM Ch.8", "MIL Ch.31"],
          sub: [
            "Properties & metabolism (CYP2E1)",
            "Compound A formation",
            "Renal effects debate",
            "Slow washout vs desflurane",
            "Use in inhalational induction"
          ],
          subLinks: []
        },
        {
          id: "iso-des-nt",
          name: "Isoflurane, Desflurane & Nitrous Oxide",
          icon: "pill",
          refs: ["MM Ch.8", "MIL Ch.31"],
          sub: [
            "Isoflurane: vasodilation, pungency",
            "Desflurane: airway irritation, Tec 6 vaporizer, sympathetic surge",
            "N2O: diffusion hypoxia, expansion of gas spaces, B12/methionine synthase, PONV, teratogenicity"
          ],
          subLinks: []
        },
        {
          id: "inha-clinical",
          name: "Clinical Pharmacology of Inhaled Agents",
          icon: "pill",
          refs: ["MM Ch.7", "MIL Ch.27", "OX"],
          sub: [
            "Effects on CMR, CBF, ICP, cerebral autoregulation",
            "Effects on bronchial tone & hypoxic pulmonary vasoconstriction"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "iv-anesthetics",
      name: "Intravenous Anesthetics",
      topics: [
        {
          id: "propofol",
          name: "Propofol",
          icon: "pill",
          refs: ["MM Ch.9", "MIL Ch.30"],
          sub: [
            "Pharmacokinetics (high clearance, redistribution)",
            "Pharmacodynamics (GABA-A agonist)",
            "Effect on BP, CO, SVR, ventilation",
            "Pain on injection, lipid formulation",
            "Propofol infusion syndrome (PRIS)",
            "TCI models (Marsh, Schnider, Eleveld)"
          ],
          subLinks: []
        },
        {
          id: "thiopental-etomidate",
          name: "Thiopental & Etomidate",
          icon: "pill",
          refs: ["MM Ch.9", "MIL Ch.30"],
          sub: [
            "Thiopental: pharmacokinetics, status epilepticus, porphyria contraindication",
            "Etomidate: adrenal suppression, hemodynamic stability, myoclonus, pain",
            "Induction doses & contexts"
          ],
          subLinks: []
        },
        {
          id: "ketamine-benzodiazepines",
          name: "Ketamine & Benzodiazepines",
          icon: "pill",
          refs: ["MM Ch.9", "MIL Ch.30"],
          sub: [
            "Ketamine: NMDA antagonism, dissociative anesthesia, bronchodilation, sympathetic stimulation, emergence phenomena, catecholamine depletion risk",
            "Midazolam vs diazepam vs lorazepam pharmacokinetics",
            "Flumazenil reversal & risks"
          ],
          subLinks: []
        },
        {
          id: "dexmedetomidine",
          name: "Dexmedetomidine & Alpha-2 Agonists",
          icon: "pill",
          refs: ["MM Ch.9", "MIL Ch.30"],
          sub: [
            "Alpha-2 selectivity",
            "Cooperative sedation, analgesia, no respiratory depression",
            "Hemodynamic effects (biphasic BP)",
            "Uses in extubation, awake intubation, delirium"
          ],
          subLinks: []
        },
        {
          id: "droperidol-haloperidol",
          name: "Butyrophenones & Adjuncts",
          icon: "pill",
          refs: ["MM Ch.9"],
          sub: [
            "Droperidol: dopamine antagonist, QT prolongation, PONV dosing & black box warning",
            "Haloperidol for delirium"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "opioids-analgesics",
      name: "Opioids & Analgesics",
      topics: [
        {
          id: "opioid-pharm",
          name: "Opioid Pharmacology",
          icon: "pill",
          refs: ["MM Ch.10", "MIL Ch.31"],
          sub: [
            "Receptors (mu, kappa, delta, ORL-1) & signaling",
            "Full vs partial agonists",
            "Equianalgesic dosing & conversion",
            "Pharmacokinetics of morphine, fentanyl, sufentanil, alfentanil, remifentanil",
            "Remifentanil: ester hydrolysis, context-insensitive half-time",
            "Methadone: NMDA action, long half-life",
            "Tramadol & tapentadol mechanisms"
          ],
          subLinks: []
        },
        {
          id: "opioid-effects",
          name: "Opioid Effects & Toxicity",
          icon: "pill",
          refs: ["MM Ch.10", "MIL Ch.31"],
          sub: [
            "Respiratory depression kinetics",
            "Tolerance, hyperalgesia, dependence",
            "Naloxone & naltrexone",
            "Opioid-induced constipation & mu antagonists (methylnaltrexone)",
            "Rapid opioid tolerance",
            "Serotonin syndrome risk (tramadol, meperidine, fentanyl)"
          ],
          subLinks: []
        },
        {
          id: "nonopioid-analgesics",
          name: "Non-Opioid Analgesics",
          icon: "pill",
          refs: ["MM Ch.10", "RCoA G3"],
          sub: [
            "Paracetamol: mechanism, metabolism, toxicity",
            "Aspirin: mechanism, Reye's syndrome, antiplatelet effects",
            "NSAIDs: COX-1 vs COX-2 selectivity, classification, side effects (renal, GI, asthma, CV)",
            "Gabapentinoids (gabapentin, pregabalin) for acute pain",
            "Ketamine (low dose), lidocaine infusion, dexmedetomidine",
            "Magnesium & alpha-2 agonists as adjuncts"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "nmbs",
      name: "Neuromuscular Blocking Agents",
      topics: [
        {
          id: "nmj-physiology",
          name: "NMJ Physiology & Depolarizing Agents",
          icon: "pill",
          refs: ["MM Ch.11", "MIL Ch.32", "RCoA G3"],
          sub: [
            "NMJ physiology and transmission",
            "Succinylcholine: depolarizing phase I block",
            "Pharmacokinetics (plasma cholinesterase)",
            "Hyperkalemia (burns, denervation, immobilization)",
            "Malignant hyperthermia trigger",
            "Phase II block",
            "Pseudocholinesterase deficiency (genetics, dibucaine number)",
            "Bradycardia, myalgia, increased ICP/IOP/Intragastric pressure"
          ],
          subLinks: []
        },
        {
          id: "nondepolarizing",
          name: "Nondepolarizing NMBAs",
          icon: "pill",
          refs: ["MM Ch.11", "MIL Ch.32"],
          sub: [
            "Benzylisoquinoliniums (atracurium, cisatracurium, mivacurium, doxacurium)",
            "Aminosteroids (rocuronium, vecuronium, pancuronium)",
            "Hofmann elimination & Laudanosine",
            "Histamine release (atracurium, mivacurium)",
            "Vagolytic & sympathomimetic (pancuronium)",
            "Onset/duration comparison & dosing"
          ],
          subLinks: []
        },
        {
          id: "reversal-nmb",
          name: "Reversal Agents & Monitoring",
          icon: "pill",
          refs: ["MM Ch.11", "MIL Ch.33", "RCoA G3"],
          sub: [
            "Acetylcholinesterase inhibitors (neostigmine, edrophonium)",
            "Muscarinic co-administration (glycopyrrolate, atropine)",
            "Sugammadex: encapsulation, dosing, contraindications, allergic reactions",
            "Comparison of reversal strategies",
            "Residual blockade detection & monitoring (TOF, double burst, PTC)",
            "Dantrolene & Malignant Hyperthermia management"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "local-anesthetics",
      name: "Local Anesthetics",
      topics: [
        {
          id: "la-pharm",
          name: "LA Pharmacology",
          icon: "pill",
          refs: ["MM Ch.16", "MIL Ch.34", "RCoA G3"],
          sub: [
            "Structure: amide vs ester, pKa, lipid solubility, protein binding",
            "Mechanism of action (voltage-gated Na+ channels)",
            "Differential block (small fibers first)",
            "pH and effect of additives",
            "Pregnancy effects on LA",
            "Anti-arrhythmic effects of LAs"
          ],
          subLinks: []
        },
        {
          id: "la-toxicity",
          name: "Local Anesthetic Systemic Toxicity (LAST)",
          icon: "pill",
          refs: ["MM Ch.16", "ASRA guidelines", "MIL Ch.34"],
          sub: [
            "CNS toxicity: circumoral, tinnitus, seizures",
            "Cardiac toxicity (more with bupivacaine)",
            "Bupivacaine cardiotoxicity mechanism",
            "Lipid emulsion therapy protocol (20%)",
            "Prevention: test dose, incremental dosing, aspiration",
            "Treatment algorithm (ASRA)"
          ],
          subLinks: []
        },
        {
          id: "la-additives",
          name: "Additives & Formulations",
          icon: "flask-conical",
          refs: ["MM Ch.16"],
          sub: [
            "Epinephrine (vasoconstriction, test dose, duration)",
            "Bicarbonate (speeds onset)",
            "Clonidine, dexmedetomidine, opioids",
            "Dextran for prolonged effect",
            "EMLA cream"
          ],
          subLinks: []
        },
        {
          id: "la-agents",
          name: "Specific Agents & Max Doses",
          icon: "pill",
          refs: ["MM Ch.16"],
          sub: [
            "Lidocaine, mepivacaine, bupivacaine, ropivacaine, levobupivacaine, prilocaine, chloroprocaine",
            "Maximum doses with/without epinephrine",
            "Methemoglobinemia (prilocaine, benzocaine)",
            "Plain vs hyperbaric formulations for spinal"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "cardiovascular-drugs",
      name: "Cardiovascular Drugs",
      topics: [
        {
          id: "vasopressors-inotropes",
          name: "Vasopressors & Inotropes",
          icon: "pill",
          refs: ["MM Ch.14", "MIL Ch.35"],
          sub: [
            "Norepinephrine, epinephrine, phenylephrine, vasopressin",
            "Dopamine, dobutamine, milrinone",
            "Receptor profiles & clinical choice",
            "Dobutamine vs milrinone (PDE inhibitor comparison)",
            "Vasopressin in vasodilatory shock"
          ],
          subLinks: []
        },
        {
          id: "antiarrhythmics",
          name: "Antiarrhythmics & Antihypertensives",
          icon: "pill",
          refs: ["MM Ch.14", "MM Ch.18"],
          sub: [
            "Vaughan-Williams classification",
            "Amiodarone, lidocaine, adenosine, beta-blockers, calcium channel blockers",
            "Esmolol, labetalol, metoprolol",
            "Nitroglycerin, nitroprusside, hydralazine",
            "ACE-I, ARBs, alpha-blockers"
          ],
          subLinks: []
        },
        {
          id: "anticoag-antiplatelet",
          name: "Anticoagulants & Antiplatelets",
          icon: "pill",
          refs: ["MM Ch.22", "RCoA G3"],
          sub: [
            "Heparin (UFH, LMWH) & protamine reversal",
            "Warfarin & vitamin K, FFP/PCC",
            "DOACs (dabigatran, rivaroxaban, apixaban) & reversal (idarucizumab, andexanet)",
            "Aspirin, clopidogrel, prasugrel, ticagrelor, GPIIb/IIIa",
            "Pro-coagulants: vitamin K, FFP, specific factor concentrates",
            "Coagulation monitoring (aPTT, anti-Xa, viscoelastic)",
            "Neuraxial timing guidelines (ASRA)"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "respiratory-drugs",
      name: "Respiratory Drugs",
      topics: [
        {
          id: "resp-drugs",
          name: "Drugs for Respiratory System",
          icon: "lungs",
          refs: ["RCoA G3"],
          sub: [
            "Bronchodilators: beta-agonists, anticholinergics, methylxanthines",
            "Drugs for acute severe asthma",
            "Volatile agents as bronchodilators",
            "Pulmonary vasodilators (Nitric oxide, prostacyclin)",
            "Surfactant therapy",
            "Mucolytics"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "other-periop-drugs",
      name: "Other Perioperative Drugs",
      topics: [
        {
          id: "gi-endocrine-cns",
          name: "GI, Endocrine & CNS Drugs",
          icon: "pill",
          refs: ["RCoA G3"],
          sub: [
            "Antisialogogues (glycopyrrolate, atropine)",
            "Drugs reducing gastric acidity (H2 blockers, PPIs, antacids)",
            "Prokinetic agents (metoclopramide, erythromycin)",
            "Antiemetics: sites of action, dexamethasone, 5HT3 antagonists",
            "Insulins: types, perioperative management, DKA/HHS",
            "Corticosteroids: effects, perioperative supplementation",
            "Thyroid drugs (carbimazole, levothyroxine, liothyronine)",
            "Antiepileptics: mechanisms, anaesthetic relevance",
            "Antidepressants: classes (SSRI, TCA, MAOI), toxicity/interactions"
          ],
          subLinks: []
        },
        {
          id: "fluids-blood-pharm",
          name: "Fluids & Blood Products",
          icon: "droplets",
          refs: ["RCoA G3"],
          sub: [
            "Crystalloids: composition (Na, Cl, K, buffer), maintenance vs replacement",
            "Colloids: gelatins, starches, albumin",
            "Blood products: PRBC, FFP, platelets, cryoprecipitate composition",
            "Electrolyte solutions (molar, %, mg/ml conversions)",
            "Diuretics: classification (loop, thiazide, K-sparing), mechanisms"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "clinical-anaesthesia",
  name: "Clinical Anaesthesia",
  icon: "syringe",
  color: "#f97316",
  sections: [
    {
      id: "preop-assessment",
      name: "Preoperative Assessment & Preparation",
      topics: [
        {
          id: "preop-general",
          name: "Preoperative Assessment",
          icon: "clipboard-check",
          refs: ["MM Ch.20", "RCoA G4"],
          sub: [
            "History, examination, airway assessment",
            "ASA Physical Status classification",
            "Mallampati, Wilson, thyromental distance, mouth opening",
            "Investigations (ECG, CXR, labs) — NICE & ASA guidelines",
            "Medication optimisation (antiplatelets, anticoagulants, antihypertensives)",
            "Fasting guidelines (ASA, RCoA)",
            "PONV risk scoring (Apfel, Koivuranta)"
          ],
          subLinks: []
        },
        {
          id: "aspiration-risk",
          name: "Aspiration Risk & Prophylaxis",
          icon: "triangle-alert",
          refs: ["MM Ch.20", "RCoA G4"],
          sub: [
            "Risk factors: emergency, obesity, pregnancy, GERD, ileus",
            "Prevention: fasting, H2 blockers, PPIs, metoclopramide",
            "Rapid Sequence Induction (RSI) — drugs, cricoid pressure evidence"
          ],
          subLinks: []
        },
        {
          id: "preop-cardiac",
          name: "Preoperative Cardiac Evaluation",
          icon: "heart",
          refs: ["MM Ch.18", "ESC guidelines"],
          sub: [
            "Revised Cardiac Risk Index (Lee criteria)",
            "METs assessment & functional capacity",
            "ECG interpretation & stress testing indication",
            "Valvular heart disease evaluation",
            "Coronary stent types & antiplatelet management",
            "Beta-blocker & statin continuation"
          ],
          subLinks: []
        },
        {
          id: "preop-resp",
          name: "Preoperative Respiratory Evaluation",
          icon: "lungs",
          refs: ["MM Ch.19"],
          sub: [
            "Preoperative spirometry & ABG indication",
            "Optimization in COPD, OSA, asthma",
            "Smoking cessation timing & benefit",
            "Prehabilitation: inspiratory muscle training, exercise",
            "OSA screening (STOP-BANG, Berlin questionnaire)"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "intraop-care",
      name: "Intraoperative Care & Monitoring",
      topics: [
        {
          id: "iv-access",
          name: "IV Access & Invasive Monitoring",
          icon: "monitor",
          refs: ["MM Ch.21", "RCoA G4"],
          sub: [
            "Peripheral IV, central venous access (IJ, SC, femoral) — Seldinger & landmark",
            "Arterial line insertion & complications",
            "Pulmonary artery catheter & complications",
            "CVP waveform analysis",
            "Ultrasound-guided vascular access"
          ],
          subLinks: []
        },
        {
          id: "gas-monitoring",
          name: "Gas Monitoring & Ventilation",
          icon: "lungs",
          refs: ["MM Ch.21"],
          sub: [
            "Capnography waveform analysis (normal, obstructed, rebreathing)",
            "Oxygen analysers (paramagnetic, fuel cell, galvanic)",
            "Anaesthetic agent monitoring",
            "Volumetric capnography & dead space calculation (Bohr, Enghoff)",
            "Ventilator modes during anaesthesia (VC, PC, PRVC, PSV)"
          ],
          subLinks: []
        },
        {
          id: "depth-monitoring",
          name: "Depth of Anaesthesia Monitoring",
          icon: "monitor",
          refs: ["MM Ch.21"],
          sub: [
            "BIS, entropy, Narcotrend, evoked potentials (AEP, SSEP)",
            "Frontalis EMG and isolated forearm technique",
            "Awareness incidence and risk factors",
            "Techniques to reduce awareness (MAC-wake, end-tidal agent monitoring)"
          ],
          subLinks: []
        },
        {
          id: "temperature",
          name: "Temperature Management",
          icon: "thermometer",
          refs: ["MM Ch.21"],
          sub: [
            "Hypothermia complications (coagulopathy, infection, prolonged recovery)",
            "Forced-air warming, fluid warmers, passive insulation",
            "Malignant hyperthermia recognition and treatment",
            "Site-specific temperature monitoring (nasopharynx, esophagus, bladder, tympanic)"
          ],
          subLinks: []
        },
        {
          id: "positioning",
          name: "Surgical Positioning & Complications",
          icon: "move",
          refs: ["MM Ch.20"],
          sub: [
            "Supine, prone (complications: blindness, nerve injury, VAE), Trendelenburg, lithotomy",
            "Lateral position: axillary roll, dependent lung considerations",
            "Nerve injury physics: stretch, compression, ischemia",
            "Pressure injuries (arms, eyes, genitalia)"
          ],
          subLinks: []
        },
        {
          id: "electrical-safety",
          name: "Electrical Safety & Diathermy",
          icon: "zap",
          refs: ["RCoA G2"],
          sub: [
            "Electrosurgery (monopolar vs bipolar) — circuit, dispersive pad",
            "Burns: diathermy pad burns, direct coupling, capacitive coupling",
            "Explosion risk (alcohol prep, bowel gas)",
            "Fire triangle & airway fires during laser surgery"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "airway",
      name: "Airway Management",
      topics: [
        {
          id: "basic-airway",
          name: "Basic Airway & Supraglottic Devices",
          icon: "lungs",
          refs: ["MM Ch.15", "MIL Ch.27", "RCoA G4"],
          sub: [
            "Bag-mask ventilation technique & adjuncts (OPA, NPA)",
            "LMA types (Classic, ProSeal, Supreme, i-gel)",
            "Second generation SADs",
            "LMA insertion, complications (aspiration, sore throat, nerve injuries)"
          ],
          subLinks: []
        },
        {
          id: "endotracheal",
          name: "Endotracheal Intubation",
          icon: "syringe",
          refs: ["MM Ch.15", "MIL Ch.27"],
          sub: [
            "Direct laryngoscopy (Macintosh vs Miller blades) & C-L grade",
            "RSI: sequence, drugs, evidence for cricoid pressure",
            "Tube types: reinforced, RAE, microlaryngeal, double-lumen, MLT",
            "Confirmation (ETCO2, auscultation, ultrasound)",
            "Complications: esophageal intubation, dental injury, laryngospasm"
          ],
          subLinks: []
        },
        {
          id: "difficult-airway",
          name: "Difficult Airway Management",
          icon: "lungs",
          refs: ["DAS guidelines", "MM Ch.15", "MIL Ch.27"],
          sub: [
            "DAS algorithm (Plan A–D)",
            "Airway assessment: Mallampati, Wilson, thyromental, mouth opening",
            "Videolaryngoscopy (MacGrath, GlideScope, Airtraq)",
            "Fiberoptic intubation (awake, asleep, nasal, oral)",
            "Front-of-neck access (cricothyroidotomy, tracheostomy)",
            "CICO (Can't Intubate, Can't Oxygenate) management",
            "Difficult Airway Society 2015 guidelines"
          ],
          subLinks: []
        },
        {
          id: "one-lung",
          name: "One-Lung Ventilation",
          icon: "lungs",
          refs: ["MM Ch.19", "MIL Ch.91"],
          sub: [
            "Indications (thoracic, esophageal, aortic surgery)",
            "Double-lumen tube vs bronchial blocker vs EZ-blocker",
            "Hypoxic pulmonary vasoconstriction",
            "Hypoxia during OLV: management",
            "TIVA vs volatile for OLV (effect on HPV)",
            "Prevention of lung injury (VILI, protective ventilation)"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "general-anaesthesia",
      name: "General Anaesthesia Techniques",
      topics: [
        {
          id: "tci",
          name: "TIVA & TCI",
          icon: "syringe",
          refs: ["MM Ch.9", "RCoA G4"],
          sub: [
            "TIVA components & advantages",
            "TCI pumps: Diprifusor (Marsh), Schnider, Eleveld",
            "Target setting: plasma vs effect-site",
            "Context-sensitive half-time",
            "TIVA vs volatile comparison (PONV, emergence, cost)"
          ],
          subLinks: []
        },
        {
          id: "induction-maintenance",
          name: "Induction & Maintenance Techniques",
          icon: "syringe",
          refs: ["MM Ch.7"],
          sub: [
            "Inhalational induction (sevoflurane vs halothane)",
            "IV induction vs inhalational: choice rationale",
            "IV vs volatile maintenance and recovery profile",
            "LM vs circle system and fresh gas flow management"
          ],
          subLinks: []
        },
        {
          id: "emergence",
          name: "Emergence & Postoperative Care",
          icon: "syringe",
          refs: ["MM Ch.20"],
          sub: [
            "Tracheal extubation criteria",
            "Deep vs awake extubation",
            "Atropine/neostigmine reversal",
            "Transport & handover to recovery"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "special-anaesthesia",
      name: "Anaesthesia for Special Surgery",
      topics: [
        {
          id: "cardiac-anes",
          name: "Cardiac Anaesthesia",
          icon: "heart",
          refs: ["RCoA G4"],
          sub: [
            "CPB physiology & complication management",
            "Pharmacology of cardioplegia",
            "Myocardial protection strategies",
            "TEE monitoring & interpretation",
            "Fast-tracking & early extubation",
            "Aortic surgery, cerebral protection",
            "Off-pump vs on-pump CABG"
          ],
          subLinks: []
        },
        {
          id: "neuro-anes",
          name: "Neuroanaesthesia",
          icon: "brain",
          refs: ["RCoA G4"],
          sub: [
            "ICP management & brain relaxation",
            "Cerebral protection strategies",
            "TIVA vs volatile for neurosurgery",
            "Supratentorial, infratentorial, spinal surgery",
            "Awake craniotomy techniques",
            "Positioning: sitting (VAE risk), prone, park bench"
          ],
          subLinks: []
        },
        {
          id: "thoracic-anes",
          name: "Thoracic Anaesthesia",
          icon: "activity",
          refs: ["RCoA G4"],
          sub: [
            "One-lung ventilation: double-lumen tube + bronchial blockers",
            "Hypoxia management during OLV",
            "Lung isolation, lung separation",
            "Thoracoscopic surgery (VATS) anaesthetic considerations",
            "Bronchopleural fistula management",
            "Mediastinal mass: anaesthetic risks & management"
          ],
          subLinks: []
        },
        {
          id: "transplant-anes",
          name: "Transplant Anaesthesia",
          icon: "activity",
          refs: ["RCoA G4"],
          sub: [
            "Brainstem death criteria & organ donor management",
            "Liver transplant: venovenous bypass, reperfusion syndrome",
            "Renal transplant: fluid, electrolyte, immunosuppression"
          ],
          subLinks: []
        },
        {
          id: "ambulatory",
          name: "Ambulatory & Day-Case Anaesthesia",
          icon: "activity",
          refs: ["RCoA G4"],
          sub: [
            "Patient selection criteria and scoring systems",
            "Anaesthetic technique (TIVA, volatile, regional)",
            "PONV & pain management for day case",
            "Discharge criteria (Aldrete, PADSS)"
          ],
          subLinks: []
        },
        {
          id: "bariatric",
          name: "Bariatric Anaesthesia",
          icon: "activity",
          refs: ["RCoA G4"],
          sub: [
            "Pathophysiology of obesity (CV, respiratory, metabolic)",
            "Airway management challenges & strategies",
            "Pharmacokinetic alterations in obesity",
            "Positioning, RSI, PONV prophylaxis",
            "Enhanced recovery after bariatric surgery"
          ],
          subLinks: []
        },
        {
          id: "trauma-anes",
          name: "Trauma & Emergency Anaesthesia",
          icon: "ambulance",
          refs: ["RCoA G4"],
          sub: [
            "Damage control resuscitation & MTP",
            "RSI in trauma",
            "Hybrid resuscitation (REBOA)",
            "Massive transfusion protocol & complications",
            "Burn anaesthesia: fluid resuscitation (Parkland), airway, escharotomy",
            "Traumatic brain injury & spinal cord injury management",
            "Polytrauma: prioritisation (ATLS framework)"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "postop-care",
      name: "Postoperative Care & Complications",
      topics: [
        {
          id: "postop-complications",
          name: "Postoperative Complications",
          icon: "activity",
          refs: ["MM Ch.20", "RCoA G4"],
          sub: [
            "Postoperative nausea & vomiting: risk factors, prophylaxis, treatment",
            "Delayed emergence: causes and management",
            "Postoperative cognitive dysfunction & delirium",
            "Shivering: physiology, prevention, treatment",
            "Postoperative respiratory failure (atelectasis, pneumonia, PE)",
            "Postoperative oliguria: pre-renal, renal, post-renal",
            "Surgical site infection (SSI) prevention",
            "VTE prophylaxis (Caprini score, mechanical, pharmacological)"
          ],
          subLinks: []
        },
        {
          id: "enhanced-recovery",
          name: "Enhanced Recovery After Surgery (ERAS)",
          icon: "activity",
          refs: ["RCoA G4"],
          sub: [
            "Multimodal analgesia, goal-directed fluid therapy",
            "Early feeding, early mobilisation",
            "Prehabilitation, carbohydrate loading",
            "Audit & outcome measurement"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "fluid-electrolytes-haematology",
  name: "Fluid, Electrolytes & Haematology",
  icon: "droplets",
  color: "#ec4899",
  sections: [
    {
      id: "fluid-therapy",
      name: "Fluid Therapy & Composition",
      topics: [
        {
          id: "crystalloids",
          name: "Crystalloids & Colloids",
          icon: "droplets",
          refs: ["MM Ch.22", "MIL Ch.35", "RCoA G3"],
          sub: [
            "Composition of crystalloids (plasmalyte, hartmanns, 0.9% saline, dextrose)",
            "Maintenance vs replacement vs resuscitation fluids",
            "Colloid vs crystalloid controversy (SALTIRE, SAFE, CHEST, 6S trials)",
            "Albumin: SAFE study, indications",
            "Starches: renal injury, coagulation effects, FDA/EMA warnings",
            "Gelatins: low molecular weight, allergic reactions",
            "Balanced solutions vs 0.9% saline: hyperchloraemic acidosis"
          ],
          subLinks: []
        },
        {
          id: "fluid-assessment",
          name: "Fluid Status Assessment & GDFT",
          icon: "droplets",
          refs: ["MM Ch.22", "RCoA G4"],
          sub: [
            "Dynamic vs static measures (PPV, SVV, passive leg raise)",
            "Lactate, base deficit, ScvO2",
            "Goal-directed fluid therapy protocols",
            "Oesophageal Doppler, PiCCO, LiDCO, FloTrac",
            "Resuscitation end-points"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "electrolytes",
      name: "Electrolytes & Acid-Base",
      topics: [
        {
          id: "sodium-water",
          name: "Sodium and Water Balance",
          icon: "droplets",
          refs: ["MM Ch.22", "MIL Ch.35"],
          sub: [
            "Hyponatraemia: causes, SIADH vs CSW, treatment",
            "Hypernatraemia: causes, diabetes insipidus, management",
            "Osmolality and ADH physiology",
            "Syndrome of Inappropriate ADH (SIADH)",
            "Cerebral salt wasting",
            "Osmotic demyelination syndrome"
          ],
          subLinks: []
        },
        {
          id: "k-mg-ca-phos",
          name: "Potassium, Magnesium, Calcium & Phosphate",
          icon: "droplets",
          refs: ["MM Ch.22", "MIL Ch.35"],
          sub: [
            "Hypokalaemia & hyperkalaemia: ECG changes, causes, emergency management (insulin/dextrose, Ca2+, salbutamol, resonium)",
            "Hypomagnesaemia & hypermagnesaemia: causes, ECG, treatment",
            "Hypocalcaemia & hypercalcaemia: causes, signs, treatment",
            "Phosphate: hypophosphataemia in refeeding, hyperphosphataemia in renal failure"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "haematology",
      name: "Haematology & Transfusion",
      topics: [
        {
          id: "coagulation",
          name: "Coagulation & Haemostasis",
          icon: "droplets",
          refs: ["MM Ch.22", "RCoA G3"],
          sub: [
            "Coagulation cascade (intrinsic, extrinsic, common pathway)",
            "Platelet function, adhesion, aggregation",
            "Fibrinolysis & D-dimer",
            "Viscoelastic testing (TEG, ROTEM, Sonoclot)",
            "Tests of coagulation: PT, aPTT, TT, fibrinogen, bleeding time",
            "Liver disease coagulopathy",
            "Disseminated intravascular coagulation (DIC)"
          ],
          subLinks: []
        },
        {
          id: "blood-products",
          name: "Blood Products & Transfusion",
          icon: "droplets",
          refs: ["MM Ch.22", "RCoA G3"],
          sub: [
            "Components: PRBC, FFP, platelets, cryoprecipitate, factor concentrates",
            "Transfusion triggers (restrictive vs liberal)",
            "Massive transfusion protocol & damage control resuscitation",
            "Complications: TRALI, TACO, haemolytic, febrile, allergic, infection",
            "Blood storage lesion",
            "Crossmatch, group & screen, emergency O-negative blood",
            "Cell salvage: indications, contraindications, leukocyte depletion",
            "Patient Blood Management (PBM) principles"
          ],
          subLinks: []
        },
        {
          id: "anaemia",
          name: "Anaemia & Haemoglobinopathies",
          icon: "droplets",
          refs: ["MM Ch.22", "RCoA G3"],
          sub: [
            "Preoperative anaemia: causes, investigation, treatment (Fe, EPO, B12, folate)",
            "Sickle cell disease: pathophysiology, perioperative management",
            "Thalassaemia: alpha vs beta, perioperative considerations",
            "G6PD deficiency: triggers, hemolysis, drug avoidance",
            "Hereditary spherocytosis, elliptocytosis"
          ],
          subLinks: []
        },
        {
          id: "antiplatelet-anticoag",
          name: "Antiplatelet & Anticoagulant Drugs",
          icon: "pill",
          refs: ["MM Ch.22", "RCoA G3"],
          sub: [
            "Aspirin, clopidogrel, prasugrel, ticagrelor, GPIIb/IIIa inhibitors",
            "Heparin (UFH, LMWH) & protamine",
            "Warfarin, DOACs (dabigatran, rivaroxaban, apixaban, edoxaban)",
            "Reversal: vitamin K, PCC, idarucizumab, andexanet alfa",
            "Neuraxial timing (ASRA/ESRA guidelines)"
          ],
          subLinks: []
        },
        {
          id: "haematological-malignancy",
          name: "Haematological Malignancy & Disorders",
          icon: "droplets",
          refs: ["RCoA G3"],
          sub: [
            "Preoperative optimization in haematological malignancy",
            "Myeloproliferative disorders & thrombosis risk",
            "Thrombophilia: factor V Leiden, antiphospholipid syndrome",
            "Thrombocytopenia: ITP, HIT (types I & II), TTP, aHUS",
            "HIT: 4Ts score, alternative anticoagulation (danaparoid, argatroban, fondaparinux)"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "perioperative-medicine",
  name: "Perioperative Medicine & Coexisting Disease",
  icon: "heart-pulse",
  color: "#8b5cf6",
  sections: [
    {
      id: "cardiac-disease",
      name: "Cardiovascular Disease",
      topics: [
        {
          id: "ihd",
          name: "Ischaemic Heart Disease",
          icon: "heart",
          refs: ["MM Ch.18", "RCoA G4", "ESC guidelines"],
          sub: [
            "Pathophysiology of IHD",
            "Perioperative cardiac risk assessment (RCRI, NSQIP MICA)",
            "Preoperative investigations (ECG, ECHO, stress testing, coronary angiography)",
            "Beta-blocker controversy (POISE, POISE-2)",
            "Statin continuation",
            "Anti-platelet management & stent types (BMS vs DES)",
            "Management of perioperative myocardial injury (MINS)"
          ],
          subLinks: []
        },
        {
          id: "valvular",
          name: "Valvular Heart Disease",
          icon: "heart",
          refs: ["MM Ch.18", "RCoA G4"],
          sub: [
            "Aortic stenosis: pathophysiology, anaesthetic goals",
            "Aortic regurgitation: HR goals, afterload reduction",
            "Mitral stenosis: rate control, pulmonary hypertension",
            "Mitral regurgitation: afterload reduction",
            "Prosthetic valves & anticoagulation",
            "Infective endocarditis prophylaxis (NICE guidelines)"
          ],
          subLinks: []
        },
        {
          id: "arrhythmias",
          name: "Cardiac Arrhythmias & Devices",
          icon: "heart",
          refs: ["MM Ch.18", "MM Ch.21"],
          sub: [
            "AF: perioperative management, rate vs rhythm control, anticoagulation",
            "Pacemakers & ICDs: perioperative management, magnet use, reprogramming",
            "ECG interpretation: ischemia, electrolyte abnormalities, heart block",
            "Perioperative arrhythmia management"
          ],
          subLinks: []
        },
        {
          id: "heart-failure",
          name: "Heart Failure & Cardiomyopathy",
          icon: "heart",
          refs: ["MM Ch.18", "RCoA G4"],
          sub: [
            "Chronic HF management (ACE-I, beta-blockers, diuretics, SGLT2i)",
            "Acute decompensated HF management",
            "Hypertrophic cardiomyopathy: LVOT obstruction, anaesthetic implications",
            "Dilated cardiomyopathy: low EF management",
            "Perioperative management of VADs and transplant patients"
          ],
          subLinks: []
        },
        {
          id: "pulmonary-hypertension",
          name: "Pulmonary Hypertension & Cor Pulmonale",
          icon: "lungs",
          refs: ["MM Ch.19", "RCoA G4"],
          sub: [
            "WHO PH classification",
            "Anaesthetic implications of PH",
            "Pulmonary vasodilators: NO, prostacyclin, sildenafil, bosentan"
          ],
          subLinks: []
        },
        {
          id: "hypertension",
          name: "Systemic Hypertension",
          icon: "activity",
          refs: ["MM Ch.18", "RCoA G4"],
          sub: [
            "Perioperative BP targets",
            "Antihypertensive classes & perioperative management",
            "Urgency vs emergency management",
            "End-organ damage assessment"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "respiratory-disease",
      name: "Respiratory Disease",
      topics: [
        {
          id: "copd",
          name: "COPD & Asthma",
          icon: "lungs",
          refs: ["MM Ch.19", "RCoA G4"],
          sub: [
            "GOLD staging, optimization, perioperative management",
            "Asthma: stepwise management, acute severe asthma protocols",
            "Anaesthetic implications of bronchodilators & steroids",
            "Smoking cessation & perioperative pulmonary risk",
            "Risk of barotrauma & air trapping in COPD"
          ],
          subLinks: []
        },
        {
          id: "osa-obesity",
          name: "OSA & Obesity Hypoventilation Syndrome",
          icon: "lungs",
          refs: ["MM Ch.19", "RCoA G4"],
          sub: [
            "OSA screening (STOP-BANG, Berlin)",
            "CPAP/ BiPAP: perioperative management",
            "OHS: pathophysiology, perioperative care",
            "Sedation risks, airway challenges, CPAP continuation"
          ],
          subLinks: []
        },
        {
          id: "restrictive-lung",
          name: "Restrictive Lung Disease & Infections",
          icon: "lungs",
          refs: ["MM Ch.19", "RCoA G4"],
          sub: [
            "Interstitial lung disease, pulmonary fibrosis, sarcoidosis",
            "Ankylosing spondylitis: airway considerations",
            "Chest infections: pneumonia, bronchiectasis, cystic fibrosis",
            "Preoperative physiotherapy & pulmonary rehabilitation"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "renal-disease",
      name: "Renal Disease",
      topics: [
        {
          id: "aki-ckd",
          name: "Acute Kidney Injury & Chronic Kidney Disease",
          icon: "kidney",
          refs: ["MM Ch.22", "RCoA G4"],
          sub: [
            "AKI: RIFLE/AKIN/KDIGO criteria, causes, prevention",
            "CKD: staging, anaemia, electrolyte management",
            "Perioperative fluid & drug management in CKD",
            "Dialysis: perioperative timing, types (HD, PD), complications",
            "Renal transplant: anaesthesia, fluid, immunosuppression",
            "Contrast-induced nephropathy prevention"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "hepatic-disease",
      name: "Hepatic & Biliary Disease",
      topics: [
        {
          id: "liver-disease",
          name: "Liver Disease & Failure",
          icon: "liver",
          refs: ["MM Ch.22", "RCoA G4"],
          sub: [
            "Child-Pugh & MELD scoring",
            "Coagulopathy in liver disease",
            "Hepatorenal syndrome",
            "Hepatic encephalopathy",
            "Portal hypertension & varices",
            "Perioperative mortality risk in cirrhosis",
            "Acute liver failure: ICP management, transplant listing",
            "Liver function test & synthetic function assessment"
          ],
          subLinks: []
        },
        {
          id: "cholestasis",
          name: "Cholestasis & Biliary Disease",
          icon: "liver",
          refs: ["RCoA G4"],
          sub: [
            "Obstructive jaundice: coagulopathy, renal risk",
            "Gallstone pancreatitis",
            "Cholangitis"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "endocrine-disease",
      name: "Endocrine Disease",
      topics: [
        {
          id: "dm",
          name: "Diabetes Mellitus",
          icon: "gauge",
          refs: ["MM Ch.23", "RCoA G4"],
          sub: [
            "Type 1 vs Type 2: pathophysiology, complications",
            "Perioperative glucose management (JBDS guidelines)",
            "Variable-rate IV insulin infusion protocol",
            "DKA & HHS: diagnosis and management",
            "Metformin: lactic acidosis risk, NPO timing",
            "SGLT2i: euglycaemic DKA risk",
            "Long-term complications: autonomic neuropathy, gastroparesis, silent ischaemia"
          ],
          subLinks: []
        },
        {
          id: "thyroid",
          name: "Thyroid & Adrenal Disease",
          icon: "kidney",
          refs: ["MM Ch.23", "RCoA G4"],
          sub: [
            "Hyperthyroidism: thyroid storm prevention, beta-blockers, antithyroid drugs",
            "Hypothyroidism: myxoedema coma, drug sensitivity",
            "Goitre: airway assessment, retrosternal extension",
            "Adrenal insufficiency: perioperative steroid coverage",
            "Phaeochromocytoma: alpha-blockade first, beta-blockade, intraoperative BP management",
            "Cushing's syndrome & Conn's syndrome",
            "Pituitary disease: acromegaly (airway), DI, SIADH"
          ],
          subLinks: []
        },
        {
          id: "obesity-metabolic",
          name: "Obesity & Metabolic Syndrome",
          icon: "activity",
          refs: ["MM Ch.23", "RCoA G4"],
          sub: [
            "Obesity: classification, CV/Respiratory pathophysiology",
            "Metabolic syndrome and NAFLD",
            "Anaesthetic drug dosing in obesity",
            "Bariatric anaesthesia specific considerations"
          ],
          subLinks: []
        },
        {
          id: "porphyria-mh",
          name: "Porphyria & Inherited Metabolic Disorders",
          icon: "triangle-alert",
          refs: ["MM Ch.23", "RCoA G3"],
          sub: [
            "Acute intermittent porphyria: triggers, safe/unsafe drugs",
            "Malignant hyperthermia susceptibility",
            "Pseudocholinesterase deficiency",
            "Carcinoid syndrome: perioperative management, octreotide"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "neuromuscular-disease",
      name: "Neurological & Neuromuscular Disease",
      topics: [
        {
          id: "neurologic-conditions",
          name: "Neurological Conditions",
          icon: "brain",
          refs: ["MM Ch.24", "RCoA G4"],
          sub: [
            "Epilepsy: perioperative antiepileptic management",
            "Parkinson's disease: dopaminergic drug timing, MH-like syndrome",
            "Multiple sclerosis: anaesthetic implications, regional vs GA",
            "Stroke & TIA: perioperative antiplatelet, timing of surgery",
            "Myasthenia gravis: anticholinesterase management, Sux sensitivity, NMB selection",
            "Guillain-Barré syndrome & Eaton-Lambert syndrome",
            "Spinal cord injury: autonomic hyperreflexia, sux risk (hyperkalemia)"
          ],
          subLinks: []
        },
        {
          id: "muscular-dystrophy",
          name: "Muscular Dystrophies & Myopathies",
          icon: "dumbbell",
          refs: ["MM Ch.24", "RCoA G4"],
          sub: [
            "Duchenne & Becker: cardiac/respiratory involvement, MH risk",
            "Myotonic dystrophy: sensitivity to sedatives, respiratory depression, MH-like reactions",
            "Mitochondrial myopathies: avoid propofol, lactate monitoring",
            "Rhabdomyolysis: causes, complications, management"
          ],
          subLinks: []
        },
        {
          id: "cerebral-palsy",
          name: "Cerebral Palsy & Learning Disability",
          icon: "brain",
          refs: ["RCoA G4"],
          sub: [
            "Perioperative management: communication, consent, behavioural challenges",
            "Associated comorbidities: reflux, scoliosis, seizures, contractures"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "misc-comorbidities",
      name: "Miscellaneous Comorbidities",
      topics: [
        {
          id: "rheumatology",
          name: "Rheumatological & Connective Tissue Diseases",
          icon: "bone",
          refs: ["RCoA G4"],
          sub: [
            "Rheumatoid arthritis: airway (atlantoaxial instability, TMJ, cricoarytenoid), CV risk",
            "Ankylosing spondylitis: difficult airway, spinal/epidural challenges",
            "Scleroderma: pulmonary fibrosis, difficult IV access, Raynaud's",
            "Marfan syndrome: aortic root, valvular, pneumothorax",
            "Ehlers-Danlos: vascular fragility, easy bruising"
          ],
          subLinks: []
        },
        {
          id: "renal-hepatic-transplant",
          name: "Transplant Patients",
          icon: "activity",
          refs: ["RCoA G4"],
          sub: [
            "Immunosuppression: drugs, interactions, infection risk",
            "Post-transplant renal/liver function & drug dosing",
            "Infection prophylaxis timing"
          ],
          subLinks: []
        },
        {
          id: "psychiatric-substance",
          name: "Psychiatric & Substance Use Disorders",
          icon: "brain",
          refs: ["RCoA G4"],
          sub: [
            "Depression: SSRIs, SNRIs, TCAs, MAOIs — perioperative interactions",
            "Lithium toxicity & monitoring",
            "Antipsychotics: neuroleptic malignant syndrome, QT prolongation",
            "Alcohol dependence: withdrawal (CIVVA-Ar), Wernicke-Korsakoff",
            "Opioid dependence: methadone, buprenorphine, pain management challenges",
            "Illicit drugs: cocaine (MI, arrhythmias), amphetamines, cannabis"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "obstetric-anaesthesia",
  name: "Obstetric Anaesthesia",
  icon: "baby",
  color: "#14b8a6",
  sections: [
    {
      id: "obstetric-physiology",
      name: "Obstetric Physiology",
      topics: [
        {
          id: "maternal-physiology",
          name: "Maternal Physiological Changes",
          icon: "baby",
          refs: ["MM Ch.26", "OX Ob", "RCoA G4"],
          sub: [
            "CV: increased CO, SVR decrease, aortocaval compression",
            "Resp: FRC decrease, O2 consumption increase, airway oedema",
            "Haematological: hypercoagulable, anaemia of pregnancy",
            "GIT: delayed gastric emptying, reduced LOS tone (aspiration risk)",
            "Renal: increased GFR, glycosuria",
            "Endocrine: placental hormones, cortisol, thyroid changes",
            "Pharmacological: MAC reduction, altered protein binding",
            "Pain pathways relevant to stages of labour"
          ],
          subLinks: []
        },
        {
          id: "placental-physiology",
          name: "Placental Physiology & Drug Transfer",
          icon: "pill",
          refs: ["MM Ch.26", "OX Ob"],
          sub: [
            "Placental circulation & gas exchange",
            "Drug transfer mechanisms: passive diffusion, active transport",
            "Factors affecting transfer: lipid solubility, pKa, protein binding, molecular weight",
            "Uteroplacental blood flow autoregulation",
            "Fetal drug distribution & elimination"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "obstetric-anaesthesia-techniques",
      name: "Anaesthesia for Labour & Delivery",
      topics: [
        {
          id: "labour-analgesia",
          name: "Labour Analgesia",
          icon: "triangle-alert",
          refs: ["MM Ch.26", "OX Ob", "RCoA G4"],
          sub: [
            "Epidural analgesia: technique, drugs, PCEA, CSE",
            "Complications: dural puncture, post-dural puncture headache, PDPH management (blood patch)",
            "Systemic analgesia: remifentanil PCA (monitoring required), nitrous oxide",
            "Non-pharmacological: water immersion, TENS, positions",
            "Contraindications to neuraxial blockade in labour"
          ],
          subLinks: []
        },
        {
          id: "cd-anaesthesia",
          name: "Anaesthesia for Caesarean Section",
          icon: "baby",
          refs: ["MM Ch.26", "OX Ob", "RCoA G4"],
          sub: [
            "Spinal anaesthesia for elective CD: dosing, positioning, hypotension management",
            "Epidural anaesthesia: top-up for emergency CD",
            "CSE technique",
            "General anaesthesia for CD: RSI, aspiration prophylaxis, thiopental/propofol, sux/rocuronium",
            "Failed intubation in obstetrics: incidence, algorithm (OB DAS)",
            "Maternal hypotension: prevention (co-load, vasopressors, lateral tilt)"
          ],
          subLinks: []
        },
        {
          id: "high-risk-obstetric",
          name: "High-Risk Obstetric Conditions",
          icon: "baby",
          refs: ["MM Ch.26", "OX Ob", "RCoA G4"],
          sub: [
            "Pre-eclampsia & eclampsia: pathophysiology, MgSO4 protocol, fluid management",
            "Haemorrhage: PPH (causes, 4Ts, MTP, uterotonics)",
            "Placenta praevia & accreta: planning, blood products, interventional radiology",
            "Amniotic fluid embolism: recognition, management",
            "Morbid obesity in pregnancy",
            "Cardiac disease in pregnancy (ESC guidelines)",
            "Obstetric DIC & transfusion"
          ],
          subLinks: []
        },
        {
          id: "maternal-resus",
          name: "Maternal Resuscitation & MBRRACE-UP",
          icon: "baby",
          refs: ["RCoA G4", "MBRRACE-UP"],
          sub: [
            "Maternal cardiac arrest: perimortem C-section within 5 mins",
            "MBRRACE-UP reports: lessons, recurrent themes, Safer Maternity Care",
            "Modified obstetric early warning systems (MEOWS)",
            "Maternal death review & reporting"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "fetal-neonatal",
      name: "Fetal Assessment & Neonatal Resuscitation",
      topics: [
        {
          id: "fetal-monitoring",
          name: "Fetal Wellbeing & Monitoring",
          icon: "baby",
          refs: ["OX Ob", "RCoA G4"],
          sub: [
            "Cardiotocography (CTG) interpretation: NICE categories",
            "Fetal scalp blood sampling & lactate",
            "Fetal acid-base physiology",
            "Umbilical cord gases: interpretation",
            "Fetal heart rate patterns & anaesthetic implications"
          ],
          subLinks: []
        },
        {
          id: "neonatal-resus",
          name: "Neonatal Resuscitation",
          icon: "child",
          refs: ["MM Ch.27", "RCoA G4"],
          sub: [
            "APGAR scoring",
            "Neonatal resuscitation algorithm (NLS/ILCOR)",
            "Thermoregulation & temperature management",
            "Oxygen delivery & saturation targets",
            "Meconium aspiration management",
            "Umbilical venous access & drugs"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "pain-medicine",
  name: "Pain Medicine",
  icon: "triangle-alert",
  color: "#f43f5e",
  sections: [
    {
      id: "pain-physiology",
      name: "Pain Physiology & Mechanisms",
      topics: [
        {
          id: "pain-pathways",
          name: "Pain Pathways & Nociception",
          icon: "triangle-alert",
          refs: ["MM Ch.30", "RCoA G4", "OX Pain"],
          sub: [
            "Nociception: transduction, transmission, modulation, perception",
            "A-delta, C fibres, A-beta: function, myelination, speed",
            "Spinothalamic tract & ascending pathways",
            "Descending inhibitory pathways: PAG, RVM, NA/5-HT",
            "Gate control theory of pain",
            "Neuroplasticity: peripheral & central sensitisation",
            "Wind-up, long-term potentiation, referred pain",
            "Visceral vs somatic pain: differences"
          ],
          subLinks: []
        },
        {
          id: "pain-classification",
          name: "Pain Classification & Assessment",
          icon: "triangle-alert",
          refs: ["MM Ch.30", "OX Pain"],
          sub: [
            "Acute vs chronic vs cancer pain",
            "Nociceptive vs neuropathic vs nociplastic pain",
            "Neuropathic pain: features, screening tools (LANSS, DN4, painDETECT)",
            "Pain assessment tools: VAS, NRS, BPS, FLACC, PAINAD",
            "WHO analgesic ladder & acute pain escalation",
            "Chronic pain: biopsychosocial model, fear-avoidance model",
            "Catastrophising, kinesiophobia, central sensitisation syndromes",
            "Psychological aspects of pain: anxiety, depression, coping"
          ],
          subLinks: []
        },
        {
          id: "pain-genetics",
          name: "Genetic & Psychological Factors",
          icon: "brain",
          refs: ["OX Pain"],
          sub: [
            "COMT, OPRM1, MC1R polymorphisms and pain sensitivity",
            "Placebo & nocebo mechanisms",
            "Conditioned pain modulation (CPM), diffuse noxious inhibitory control (DNIC)"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "acute-pain",
      name: "Acute Pain Management",
      topics: [
        {
          id: "multimodal-analgesia",
          name: "Multimodal Analgesia",
          icon: "triangle-alert",
          refs: ["MM Ch.30", "OX Pain", "RCoA G4"],
          sub: [
            "Multimodal analgesia concept & evidence",
            "Paracetamol, NSAIDs, COX-2 inhibitors",
            "Gabapentinoids (gabapentin, pregabalin)",
            "Ketamine (low dose), lidocaine infusion, magnesium",
            "Alpha-2 agonists (clonidine, dexmedetomidine)",
            "NMDA antagonists: ketamine mechanisms, S-ketamine vs racemic",
            "Corticosteroids: single-dose dexamethasone effects"
          ],
          subLinks: []
        },
        {
          id: "opioid-acute",
          name: "Opioids in Acute Pain",
          icon: "pill",
          refs: ["MM Ch.10", "OX Pain"],
          sub: [
            "PCA: morphine, fentanyl, hydromorphone",
            "Opioid switching & rotation",
            "PONV interaction, ileus, urinary retention",
            "Respiratory depression monitoring (capnography)",
            "Equianalgesic dosing charts",
            "Opioid induced hyperalgesia"
          ],
          subLinks: []
        },
        {
          id: "regional-acute-pain",
          name: "Regional Analgesia Techniques",
          icon: "triangle-alert",
          refs: ["MM Ch.30", "OX Pain"],
          sub: [
            "Epidural analgesia: indications, drugs, PCEA",
            "Continuous peripheral nerve blocks (catheter techniques)",
            "Local infiltration & wound catheters",
            "Interfascial plane blocks: TAP, erector spinae, quadratus lumborum, PECS",
            "Evidence for regional vs systemic analgesia"
          ],
          subLinks: []
        },
        {
          id: "acute-pain-special",
          name: "Special Populations & Acute Pain",
          icon: "triangle-alert",
          refs: ["OX Pain", "RCoA G4"],
          sub: [
            "Elderly: altered physiology, dosing, delirium risk",
            "Opioid-tolerant & substance use disorder patients",
            "Acute on chronic pain management",
            "Sickle cell disease pain crisis",
            "Procedural sedation & analgesia"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "chronic-pain",
      name: "Chronic Pain Management",
      topics: [
        {
          id: "chronic-pain-assessment",
          name: "Assessment & Diagnosis",
          icon: "clipboard-check",
          refs: ["OX Pain", "RCoA G4"],
          sub: [
            "History taking: PQRST, red flags, yellow flags",
            "Widespread pain index & symptom severity (Fibromyalgia criteria)",
            "Neuropathic pain assessment scales (LANSS, DN4)",
            "Quantitative sensory testing (QST) basics",
            "Psychosocial assessment: HADS, PHQ-9, PCS, Tampa Kinesiophobia"
          ],
          subLinks: []
        },
        {
          id: "neuropathic-pain",
          name: "Neuropathic Pain & Medications",
          icon: "brain",
          refs: ["OX Pain", "RCoA G4"],
          sub: [
            "NICE guidelines for neuropathic pain: first-line (gabapentinoids, amitriptyline, duloxetine)",
            "Second-line: lidocaine patch, capsaicin, tramadol",
            "Third-line: strong opioids, botulinum toxin, TENS",
            "Antidepressants: amitriptyline, nortriptyline, duloxetine, venlafaxine",
            "Anticonvulsants: gabapentin, pregabalin, carbamazepine, lamotrigine",
            "Topical agents: lidocaine, capsaicin, amitriptyline/ketamine",
            "Cannabinoids for pain: evidence & legal status"
          ],
          subLinks: []
        },
        {
          id: "interventional-chronic",
          name: "Interventional Pain Procedures",
          icon: "triangle-alert",
          refs: ["OX Pain", "RCoA G4"],
          sub: [
            "Epidural steroid injections & transforaminal vs interlaminar",
            "Facet joint injections & medial branch blocks / RF denervation",
            "Sacroiliac joint injections & RF",
            "Sympathetic blocks: stellate, coeliac plexus, lumbar sympathetic",
            "Spinal cord stimulation: indications, trial, complications",
            "Intrathecal drug delivery systems",
            "Vertebroplasty & kyphoplasty",
            "Trigger point injections & dry needling",
            "Radiofrequency ablation: pulsed vs thermal",
            "Peripheral nerve stimulation"
          ],
          subLinks: []
        },
        {
          id: "chronic-pain-conditions",
          name: "Specific Chronic Pain Conditions",
          icon: "triangle-alert",
          refs: ["OX Pain", "RCoA G4"],
          sub: [
            "Low back pain: red flags, radiculopathy, spinal stenosis, cauda equina",
            "Fibromyalgia: diagnosis criteria (ACR 2016), management",
            "Complex Regional Pain Syndrome (CRPS): Budapest criteria, types I/II, treatment",
            "Post-herpetic neuralgia: prevention (vaccination), management",
            "Phantom limb pain: prevention, treatment",
            "Peripheral neuropathy: diabetic, alcoholic, HIV",
            "Headache: migraine, tension, cluster, medication overuse",
            "Myofascial pain syndrome & trigger points",
            "Pelvic pain: assessment, management",
            "Cancer pain: WHO ladder, neuropathic component, interventional options"
          ],
          subLinks: []
        },
        {
          id: "rehab-psychology",
          name: "Rehabilitation & Psychological Therapies",
          icon: "activity",
          refs: ["OX Pain", "RCoA G4"],
          sub: [
            "Cognitive Behavioural Therapy (CBT) for pain",
            "Acceptance and Commitment Therapy (ACT)",
            "Graded exposure & graded exercise therapy",
            "Pain management programmes (PMPs): multidisciplinary approach",
            "Biofeedback & relaxation techniques",
            "Physiotherapy & occupational therapy role"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "intensive-care",
  name: "Intensive Care",
  icon: "monitor",
  color: "#06b6d4",
  sections: [
    {
      id: "icu-basics",
      name: "ICU Basics & Monitoring",
      topics: [
        {
          id: "icu-monitoring",
          name: "ICU Monitoring",
          icon: "monitor",
          refs: ["MM Ch.21", "MIL Ch.36", "RCoA G4"],
          sub: [
            "Standard monitoring: ECG, SpO2, NIBP, IBP, CVP, temp",
            "Advanced hemodynamic monitoring: PiCCO, LiDCO, FloTrac/Vigileo, oesophageal Doppler",
            "Cardiac output measurement: thermodilution, Fick, Doppler, pulse contour analysis",
            "ScvO2, SvO2, lactate, base deficit as resuscitation endpoints",
            "Echocardiography in ICU (FOCUS, TTE, TOE)",
            "ICP monitoring: EVD, parenchymal bolt, Camino",
            "Intracranial pressure waveform analysis",
            "Near-infrared spectroscopy (NIRS)", 
            "EEG, BIS, entropy, evoked potentials in ICU",
            "Blood gas analysis: pH, PaO2, PaCO2, HCO3, BE, lactate, electrolytes"
          ],
          subLinks: []
        },
        {
          id: "icu-sedation",
          name: "Sedation, Delirium & Mobilisation",
          icon: "monitor",
          refs: ["MM Ch.9", "RCoA G4"],
          sub: [
            "Sedation targets (RASS, SAS) & sedation holidays",
            "Drugs: propofol, midazolam, dexmedetomidine, volatile (isocapnic)",
            "Delirium: CAM-ICU, ICDSC, prevention, haloperidol, dexmedetomidine",
            "PAD (Pain, Agitation, Delirium) & ABCDEF bundle",
            "Early mobilisation & family engagement"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "respiratory-failure",
      name: "Respiratory Failure & Ventilation",
      topics: [
        {
          id: "ventilation",
          name: "Mechanical Ventilation",
          icon: "lungs",
          refs: ["MM Ch.19", "MIL Ch.24", "RCoA G4"],
          sub: [
            "Ventilator modes: VC, PC, PRVC, SIMV, PSV, BiPAP, APRV, HFO",
            "ARDS: Berlin definition, severity",
            "Lung protective ventilation: tidal volume 6ml/kg, PEEP, plateau pressure <30",
            "Recruitment manoeuvres: indications, contraindications",
            "Prone ventilation: physiology, evidence (PROSEVA), complications",
            "Permissive hypercapnia: indications, contraindications",
            "Ventilator-induced lung injury (VILI): volutrauma, barotrauma, atelectrauma, biotrauma",
            "Ventilator waveforms: flow, pressure, volume — interpretation",
            "Extubation: readiness testing, SBT, cuff leak test",
            "Tracheostomy: timing (TracMan), percutaneous vs surgical, complications"
          ],
          subLinks: []
        },
        {
          id: "non-invasive",
          name: "Non-Invasive Ventilation & High-Flow",
          icon: "lungs",
          refs: ["MM Ch.19", "RCoA G4"],
          sub: [
            "NIV/CPAP/BiPAP: indications, settings, monitoring",
            "High-flow nasal oxygen (HFNO / Optiflow): physiology, applications",
            "NIV in acute respiratory failure vs cardiogenic pulmonary oedema",
            "Helmet NIV vs face mask"
          ],
          subLinks: []
        },
        {
          id: "weaning",
          name: "Weaning & Liberation from Ventilation",
          icon: "lungs",
          refs: ["MM Ch.19"],
          sub: [
            "Readiness criteria, SBT methods (T-piece, PSV, CPAP)",
            "Failed extubation: causes, prevention, cuff leak test",
            "Respiratory muscle weakness: ICU-acquired weakness",
            "Weaning protocols: nurse-led, daily screening"
          ],
          subLinks: []
        },
        {
          id: "ecmo",
          name: "ECMO & Advanced Respiratory Support",
          icon: "lungs",
          refs: ["RCoA G4"],
          sub: [
            "ECMO: VV vs VA, indications (EOLIA, CESAR trials), circuit components",
            "Cannulation strategies, anticoagulation management",
            "Complications: bleeding, thrombosis, limb ischemia, neurological",
            "ECMO weaning & decannulation",
            "ECCO2R: indications, role in ARDS"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "shock-circulation",
      name: "Shock & Haemodynamics",
      topics: [
        {
          id: "shock-classification",
          name: "Classification & Management of Shock",
          icon: "monitor",
          refs: ["MM Ch.18", "MM Ch.19", "RCoA G4"],
          sub: [
            "Hypovolaemic, cardiogenic, distributive (septic, anaphylactic), obstructive",
            "Initial assessment: history, exam, lactate, ScvO2, echo",
            "Goal-directed therapy: EGDT vs liberal (ProCESS, ARISE, ProMISe)",
            "Vasopressors: norepinephrine first-line, vasopressin, epinephrine",
            "Inotropes: dobutamine, milrinone, levosimendan",
            "Cardiogenic shock: IABP, Impella, LVAD, ECMO",
            "Obstructive shock: tension pneumothorax, tamponade, PE — diagnosis and management"
          ],
          subLinks: []
        },
        {
          id: "sepsis",
          name: "Sepsis & Septic Shock",
          icon: "monitor",
          refs: ["MM Ch.19", "SSC guidelines", "RCoA G4"],
          sub: [
            "Sepsis definitions: Sepsis-3, SOFA, qSOFA, SIRS",
            "SSC 1-hour bundle: lactate, cultures, Abx, fluids, vasopressors",
            "Source control: identification and intervention",
            "Antibiotic stewardship in ICU: de-escalation, procalcitonin",
            "Adjunctive therapies: hydrocortisone, vitamin C, thiamine (ACTT-1)",
            "Vasopressor choice & timing: norepinephrine, vasopressin, angiotensin II",
            "Fluid resuscitation in sepsis: crystalloid, albumin, restrictive vs liberal"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "icu-conditions",
      name: "Specific ICU Conditions",
      topics: [
        {
          id: "aki-icu",
          name: "Acute Kidney Injury",
          icon: "kidney",
          refs: ["MM Ch.22", "RCoA G4"],
          sub: [
            "KDIGO criteria, staging",
            "Causes: pre-renal, intrinsic, post-renal",
            "RRT: CVVH, CVVHD, CVVHDF, SLED, IHD — indications, anticoagulation",
            "CRRT prescription & dose, fluid balance management",
            "Complications of RRT: hypotension, arrhythmias, electrolyte imbalance, filter clotting"
          ],
          subLinks: []
        },
        {
          id: "neurocritical",
          name: "Neurocritical Care",
          icon: "brain",
          refs: ["MM Ch.24", "RCoA G4"],
          sub: [
            "Traumatic brain injury: ICP/CPP targets (Brain Trauma Foundation)",
            "Subarachnoid haemorrhage: WFNS grade, vasospasm, nimodipine",
            "Intracerebral haemorrhage: BP targets, surgical evacuation role",
            "Ischaemic stroke: thrombolysis, thrombectomy, hemicraniectomy",
            "Status epilepticus: treatment algorithm, EEG monitoring",
            "Spinal cord injury: MAP goals, steroids controversy, surgical timing"
          ],
          subLinks: []
        },
        {
          id: "icu-gi-nutrition",
          name: "Gastrointestinal & Nutrition",
          icon: "utensils-crossed",
          refs: ["MM Ch.22", "RCoA G4"],
          sub: [
            "Stress ulcer prophylaxis",
            "Intra-abdominal hypertension & abdominal compartment syndrome",
            "Acute pancreatitis: management, nutrition",
            "Nutrition: enteral vs parenteral, timing, composition, overfeeding",
            "Refeeding syndrome: pathophysiology, prevention, monitoring"
          ],
          subLinks: []
        },
        {
          id: "icu-endocrine",
          name: "Endocrine & Metabolic in ICU",
          icon: "monitor",
          refs: ["RCoA G4"],
          sub: [
            "Glycaemic control: NICE-SUGAR, targets, hypoglycaemia avoidance",
            "Adrenal insufficiency in critical illness: ACTH test, steroid replacement",
            "Diabetes insipidus & SIADH in ICU",
            "Electrolyte derangements: Na, K, Ca, Mg, phosphate — ICU-specific"
          ],
          subLinks: []
        },
        {
          id: "icu-prognostication",
          name: "Prognostication & Scoring in ICU",
          icon: "monitor",
          refs: ["RCoA G4"],
          sub: [
            "APACHE II/IV, SAPS II/III, SOFA, MPM0",
            "Limitations: lead-time bias, case-mix, calibration",
            "Frailty scoring (Clinical Frailty Scale) in ICU prognostication",
            "Neuro-prognostication after cardiac arrest: SSEP, EEG, neuron-specific enolase"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "icu-procedures",
      name: "ICU Procedures & Organisation",
      topics: [
        {
          id: "icu-procedures",
          name: "Procedures & Certification",
          icon: "monitor",
          refs: ["RCoA G4"],
          sub: [
            "Central line insertion: US-guided, complications (pneumothorax, arterial puncture, infection)",
            "Arterial line insertion & complications (thrombosis, infection, hematoma)",
            "Chest drain insertion: Seldinger vs open, underwater seal, complications",
            "Bronchoscopy in ICU: indications, technique, BAL",
            "Percutaneous tracheostomy: technique, complications (bleeding, infection, fistula)",
            "Lumbar puncture: indications, technique, opening pressure, complications",
            "Death certification: legal requirements, MCCD, coroner referrals"
          ],
          subLinks: []
        },
        {
          id: "icu-bioethics",
          name: "Ethics, Withdrawal & Organ Donation",
          icon: "scale",
          refs: ["RCoA G4"],
          sub: [
            "Brainstem death testing: criteria, apnoea test, pitfalls",
            "Donation after Brainstem Death (DBD) & Donation after Circulatory Death (DCD)",
            "Withdrawal of life-sustaining therapy: process, palliation",
            "DNACPR, treatment limitation plans, ReSPECT forms",
            "Futility & best interests decisions",
            "Communication with families in ICU"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "paediatric-anaesthesia",
  name: "Paediatric Anaesthesia",
  icon: "child",
  color: "#f59e0b",
  sections: [
    {
      id: "paediatric-physiology",
      name: "Paediatric Physiology & Pharmacology",
      topics: [
        {
          id: "paed-physiology",
          name: "Physiological Differences",
          icon: "child",
          refs: ["MM Ch.27", "MIL Ch.47", "RCoA G4"],
          sub: [
            "Airway: narrower, more cephalad larynx (C3-4), large tongue, funnel-shaped",
            "Respiratory: higher O2 consumption, lower FRC, rib compliance, diaphragmatic breathing",
            "CV: higher HR, lower BP, limited cardiac reserve, transition from fetal circulation",
            "Fluids: higher TBW, insensible losses, immature renal function",
            "Temperature: large SA:weight, brown fat, limited shivering",
            "Hepatic/renal: immature metabolism, clearance (CYP450, GFR maturation)",
            "Neurological: immature blood-brain barrier, NMDA/GABA balance"
          ],
          subLinks: []
        },
        {
          id: "paed-pharmacology",
          name: "Pharmacological Differences",
          icon: "pill",
          refs: ["MM Ch.27", "RCoA G4"],
          sub: [
            "MAC: higher in neonates, decreases with age",
            "Sux: bradycardia risk (pre-treat with atropine)",
            "Volatile: induction characteristics, halothane vs sevoflurane",
            "Opioid sensitivity: increased risk of respiratory depression",
            "Propofol: dosing by age, neonatal caution",
            "Paracetamol & NSAID dosing in children",
            "Inhalational induction technique"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "paediatric-anaesthesia-techniques",
      name: "Paediatric Anaesthesia Techniques",
      topics: [
        {
          id: "paed-airway",
          name: "Paediatric Airway & Equipment",
          icon: "lungs",
          refs: ["MM Ch.27", "RCoA G4"],
          sub: [
            "Face mask sizing, oral/nasal airways",
            "LMA sizes and insertion technique",
            "ET tube sizes: formula (age/4 + 4), uncuffed vs cuffed",
            "Endotracheal intubation: straight blade, depth formula (age/2 + 12)",
            "Circuit: Mapleson F (Jackson-Rees), circle system with paediatric adaptations",
            "Preoxygenation limitations in children"
          ],
          subLinks: []
        },
        {
          id: "paed-fluid",
          name: "Paediatric Fluid & Transfusion",
          icon: "droplets",
          refs: ["MM Ch.27", "RCoA G4"],
          sub: [
            "Maintenance: 4-2-1 rule (Holliday-Segar)",
            "Deficit & replacement: NPO deficit + third space losses",
            "Intraoperative fluid: isotonic solutions (plasmalyte, hartmanns)",
            "Hypoglycaemia risk & glucose management",
            "Blood volume: 80-100 ml/kg, transfusion triggers",
            "Massive haemorrhage in children"
          ],
          subLinks: []
        },
        {
          id: "paed-regional",
          name: "Paediatric Regional Anaesthesia",
          icon: "child",
          refs: ["MM Ch.27", "RCoA G4"],
          sub: [
            "Caudal epidural: dosing (1ml/kg), drugs (bupivacaine, ropivacaine, additives)",
            "Ilioinguinal/iliohypogastric, TAP, rectus sheath blocks",
            "Penile block for circumcision: technique, dose, contraindications",
            "Femoral, sciatic, supraclavicular blocks in children",
            "Ultrasound guidance in paediatric regional"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "paediatric-special",
      name: "Special Paediatric Considerations",
      topics: [
        {
          id: "paed-neonatal-surgery",
          name: "Neonatal Surgery & Congenital Conditions",
          icon: "child",
          refs: ["MM Ch.27", "RCoA G4"],
          sub: [
            "Congenital diaphragmatic hernia: pathophysiology, anaesthetic management",
            "Oesophageal atresia & TEF: aspiration risk, lung isolation, Replogle tube",
            "Gastroschisis & omphalocele: fluid losses, heat loss, primary vs staged closure",
            "Pyloric stenosis: electrolyte (hypochloraemic hypokalaemic metabolic alkalosis), RSI",
            "Necrotising enterocolitis (NEC): sick neonate, haemodynamic instability",
            "Myelomeningocoele: positioning, latex allergy",
            "Exomphalos: large defect, abdominal compartment syndrome risk"
          ],
          subLinks: []
        },
        {
          id: "paed-common",
          name: "Common Paediatric Surgical Conditions",
          icon: "child",
          refs: ["MM Ch.27", "RCoA G4"],
          sub: [
            "Tonsillectomy & adenoidectomy: bleeding risk, airway concerns, PONV",
            "Cleft lip & palate: airway management, difficult intubation risk",
            "Circumcision: penile block, caudal, GIRFT guidelines",
            "Inguinal hernia: preterm infant risk (apnoea), spinal/GA debate",
            "Strabismus surgery: oculocardiac reflex, PONV prophylaxis",
            "Myringotomy/grommets: day-case, sevoflurane induction"
          ],
          subLinks: []
        },
        {
          id: "paed-trauma",
          name: "Paediatric Trauma & Emergency",
          icon: "child",
          refs: ["RCoA G4"],
          sub: [
            "Paediatric trauma: epidemiology, ATLS modifications, non-accidental injury",
            "Paediatric burns: Parkland formula, airway oedema, escharotomy",
            "Epiglottitis vs croup: airway management differences",
            "Foreign body aspiration: anaesthetic concerns, rigid bronchoscopy",
            "Status epilepticus in children"
          ],
          subLinks: []
        },
        {
          id: "paed-sedation",
          name: "Paediatric Sedation & Non-OR Anaesthesia",
          icon: "child",
          refs: ["RCoA G4"],
          sub: [
            "Sedation for MRI, CT, dental, procedures (chloral hydrate, midazolam, ketamine, propofol)",
            "NICE sedation guidelines: competencies, monitoring, discharge criteria",
            "Scanning under anaesthesia: implications for transport, monitoring"
          ],
          subLinks: []
        },
        {
          id: "paed-periop",
          name: "Perioperative Care & Resuscitation",
          icon: "ambulance",
          refs: ["MM Ch.27", "RCoA G4"],
          sub: [
            "Preoperative: fasting (RCoA/APAGBI guidelines), EMLA, oral premedication (midazolam, ketamine)",
            "Parental presence at induction: evidence, local policy",
            "Paediatric resuscitation: PILS algorithm, weight estimation (PAWPER tape, APLS formula)",
            "Difficult airway in child: APA difficult airway algorithm",
            "PONV in children: risk factors, prophylaxis, rescue"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "regional-anaesthesia",
  name: "Regional Anaesthesia",
  icon: "needle",
  color: "#a855f7",
  sections: [
    {
      id: "regional-science",
      name: "Science of Regional Anaesthesia",
      topics: [
        {
          id: "regional-physiology",
          name: "Nerve Physiology & Blockade",
          icon: "brain",
          refs: ["MM Ch.16", "MIL Ch.34", "RCoA G4"],
          sub: [
            "Nerve structure: epineurium, perineurium, endoneurium",
            "Myelination & saltatory conduction",
            "Differential block: small fibres blocked first",
            "Local anaesthetic mechanism on Na+ channels (closed, open, inactivated states)",
            "Factors affecting block: concentration, volume, pH, additives",
            "Anatomy of nerve plexuses: brachial, lumbar, sacral"
          ],
          subLinks: []
        },
        {
          id: "regional-drugs",
          name: "Drugs & Additives",
          icon: "pill",
          refs: ["MM Ch.16", "MIL Ch.34"],
          sub: [
            "Lidocaine (short), bupivacaine (long), ropivacaine, levobupivacaine",
            "Chloroprocaine (spinal/epidural ultra-short)",
            "Epinephrine: prolongation, test dose, systemic absorption reduction",
            "Clonidine, dexmedetomidine, opioids, bicarbonate",
            "Dexamethasone as adjunct: evidence, perineural vs IV"
          ],
          subLinks: []
        },
        {
          id: "ultrasound-ns",
          name: "Ultrasound & Nerve Stimulation",
          icon: "brain",
          refs: ["MM Ch.16", "RCoA G4"],
          sub: [
            "Ultrasound physics: frequency, depth, anisotropy, acoustic enhancement",
            "Needle types: echogenic vs non-echogenic, short-bevel vs long-bevel",
            "Nerve stimulator: current, frequency, response (DCS, PNS, MS)",
            "In-plane vs out-of-plane technique",
            "Hydrodissection, perineural vs extrafascial injection"
          ],
          subLinks: []
        },
        {
          id: "regional-complications",
          name: "Complications & Safety",
          icon: "triangle-alert",
          refs: ["MM Ch.16", "RCoA G4"],
          sub: [
            "LAST: presentation, prevention, treatment (lipid emulsion 20%)",
            "Nerve injury: mechanisms, risk factors, medicolegal",
            "Haematoma: risk factors, ASRA anticoagulant guidelines",
            "Infection: prevention, epidural abscess management",
            "Pneumothorax (supraclavicular, paravertebral)",
            "Phrenic nerve palsy (interscalene): risk, contraindications",
            "Horner's syndrome, recurrent laryngeal nerve block (stretched)"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "upper-limb",
      name: "Upper Limb Blocks",
      topics: [
        {
          id: "interscalene",
          name: "Interscalene Block",
          icon: "needle",
          refs: ["MM Ch.17", "MIL Ch.34", "RCoA G4"],
          sub: [
            "Indications: shoulder, proximal humerus surgery",
            "Approach: Winnie (C6 root level), US-guided technique",
            "Dermatomal coverage: C5-C7",
            "Phrenic nerve palsy (100% at standard volumes)", 
            "Complications: vertebral artery injection, epidural spread, pneumothorax (rare)"
          ],
          subLinks: []
        },
        {
          id: "supraclavicular",
          name: "Supraclavicular Block",
          icon: "monitor",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "Indications: elbow, forearm, hand surgery",
            "Approach: 'Stoplight' sign, US-guided (subclavian artery, pleura)",
            "Coverage: C5-T1, entire upper limb except medial arm",
            "Pneumothorax risk: US reduces but not eliminates",
            "Phrenic nerve involvement: ~20-30% risk"
          ],
          subLinks: []
        },
        {
          id: "infraclavicular",
          name: "Infraclavicular Block",
          icon: "monitor",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "Indications: elbow, forearm, hand surgery (catheter-friendly)",
            "Approach: coracoid, vertical infraclavicular, US-guided (axillary artery, cords)",
            "Coverage: C7-T1 best, C5-6 variable (musculocutaneous often missed)",
            "Advantages: catheter site, lower pneumothorax vs supraclavicular"
          ],
          subLinks: []
        },
        {
          id: "axillary",
          name: "Axillary Block",
          icon: "needle",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "Indications: forearm, hand surgery",
            "Approach: perivascular, transarterial, US (axillary artery, median/ulnar/radial/musculocutaneous)",
            "Coverage: C5-T1 (musculocutaneous often missed — separate injection)",
            "Advantages: no phrenic/pneumothorax risk",
            "Limitations: high tourniquet pain (lack of intercostobrachial)"
          ],
          subLinks: []
        },
        {
          id: "distal-upper",
          name: "Distal Upper Limb Blocks",
          icon: "needle",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "Elbow blocks: median, ulnar, radial, LACN",
            "Wrist blocks: median, ulnar, radial",
            "Digital block: technique, contraindication to epinephrine (debate)"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "lower-limb",
      name: "Lower Limb Blocks",
      topics: [
        {
          id: "lumbar-plexus",
          name: "Lumbar Plexus & Psoas Block",
          icon: "needle",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "Indications: hip, proximal femur, knee surgery",
            "Approach: posterior (psoas compartment), US landmark (L4 transverse process)",
            "Coverage: femoral, obturator, lateral femoral cutaneous (LFCN)",
            "Complications: epidural spread, bilateral block, retroperitoneal haematoma"
          ],
          subLinks: []
        },
        {
          id: "femoral",
          name: "Femoral Nerve Block",
          icon: "brain",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "Indications: femur, knee, quadriceps tendon, patella surgery",
            "Approach: US (femoral artery landmark, fascia iliaca below)",
            "Coverage: anterior thigh, femur, patella, medial leg (saphenous)",
            "Quadriceps weakness: fall risk, discharge precautions",
            "Adductor canal block as alternative: motor sparing"
          ],
          subLinks: []
        },
        {
          id: "adductor-canal",
          name: "Adductor Canal Block",
          icon: "needle",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "Indications: knee surgery, ACL reconstruction, total knee arthroplasty",
            "Approach: US (mid-thigh, femoral artery in sartorius canal)",
            "Coverage: saphenous nerve, vastus medialis (variable motor)"
          ],
          subLinks: []
        },
        {
          id: "sciatic",
          name: "Sciatic Nerve Block",
          icon: "brain",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "Indications: foot, ankle, posterior knee, below-knee amputation",
            "Approaches: Labat (posterior), subgluteal, popliteal (lateral/intertendinous)",
            "Popliteal fossa: tibial vs common peroneal bifurcation — US-guided",
            "Complete foot/ankle anaesthesia with saphenous block"
          ],
          subLinks: []
        },
        {
          id: "ankle-foot",
          name: "Ankle Block & Foot Blocks",
          icon: "needle",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "Posterior tibial, sural, superficial peroneal, deep peroneal, saphenous",
            "Field block vs individual nerve blocks",
            "Mayo block for hallux surgery"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "neuraxial",
      name: "Neuraxial Blockade",
      topics: [
        {
          id: "spinal",
          name: "Spinal Anaesthesia",
          icon: "needle",
          refs: ["MM Ch.17", "MIL Ch.33", "RCoA G4"],
          sub: [
            "Anatomy: lumbar puncture, conus medullaris (L1-2), dural sac (S2)",
            "Technique: median vs paramedian, Whitacre vs Quincke, pencil-point vs cutting",
            "Baricity: hyperbaric (dextrose 10%), isobaric, hypobaric — effect on spread",
            "Factors affecting spread: volume, dose, baricity, patient position, age, pregnancy",
            "Complications: PDPH, spinal haematoma, infection, TNS, cauda equina syndrome",
            "Total spinal: recognition, management",
            "Spinal vs epidural vs CSE comparison"
          ],
          subLinks: []
        },
        {
          id: "epidural",
          name: "Epidural Anaesthesia & Analgesia",
          icon: "triangle-alert",
          refs: ["MM Ch.17", "MIL Ch.33", "RCoA G4"],
          sub: [
            "Lumbar vs thoracic epidural: indication differences",
            "Loss of resistance technique (saline vs air)",
            "Test dose: lidocaine + epinephrine",
            "Dosing: volume, concentration, age, pregnancy adjustments",
            "Combined spinal-epidural: technique, indication, complications",
            "Complications: dural puncture, PDPH, haematoma, abscess, catheter shearing",
            "Epidural top-up for emergency CS"
          ],
          subLinks: []
        },
        {
          id: "caudal",
          name: "Caudal Anaesthesia",
          icon: "needle",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "Indications: paediatric surgery (circumcision, hernia, hypospadias)",
            "Technique: sacral hiatus, loss of resistance (pop), US guidance",
            "Dosing: 0.5-1 ml/kg, bupivacaine 0.25% + additives",
            "Complications: IV injection, rectal puncture, failed block"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "truncal-blocks",
      name: "Truncal & Fascial Plane Blocks",
      topics: [
        {
          id: "abdominal-wall",
          name: "Abdominal Wall Blocks",
          icon: "needle",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "TAP block: classical (triangle of Petit) vs US-guided subcostal/lateral",
            "Rectus sheath block: umbilical/ventral hernia repair",
            "Ilioinguinal/iliohypogastric block: hernia repair, orchidopexy",
            "PECS I & II: breast surgery, serratus anterior plane block",
            "Quadratus lumborum block: abdominal surgery (hip, nephrectomy, colectomy)",
            "Erector spinae plane block: thoracic, abdominal, hip — mechanism debate"
          ],
          subLinks: []
        },
        {
          id: "truncal-other",
          name: "Other Truncal Blocks",
          icon: "needle",
          refs: ["MM Ch.17", "RCoA G4"],
          sub: [
            "Paravertebral block: thoracic for breast, thoracotomy, rib fractures",
            "Intercostal block: rib fractures, chest drain insertion",
            "Cervical plexus block: carotid endarterectomy (superficial vs deep)"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "education-management",
  name: "Education, Training & Management",
  icon: "graduation-cap",
  color: "#64748b",
  sections: [
    {
      id: "ed-education",
      name: "Education & Training",
      topics: [
        {
          id: "ed-curriculum",
          name: "Curriculum & Training Structure",
          icon: "monitor",
          refs: ["RCoA G1", "RCoA G4"],
          sub: [
            "RCoA 2021 Curriculum: domains, capabilities in practice (CiPs)",
            "Dual ACCS anaesthesia pathway (3 yrs) + higher training (4 yrs)",
            "Primary FRCA & Final FRCA exam structure",
            "EDAIC Part I & Part II structure",
            "Workplace-Based Assessments (WBPA): DOPS, CEX, CBD, MSF",
            "Training portfolios (Lifetime Learning Log, ePortfolio)",
            "Trainer roles: ES, CS, TPD, ARCP panel"
          ],
          subLinks: []
        },
        {
          id: "ed-assessment",
          name: "Assessment & Feedback",
          icon: "clipboard-check",
          refs: ["RCoA G1"],
          sub: [
            "Formative vs summative assessment",
            "Constructive feedback: Pendleton rules, SET-GO, ALOBA",
            "Entrustable Professional Activities (EPAs)",
            "Multi-source feedback (MSF / 360-degree)",
            "Portfolio reflection & quality improvement"
          ],
          subLinks: []
        },
        {
          id: "ed-teaching",
          name: "Teaching & Supervision",
          icon: "graduation-cap",
          refs: ["RCoA G1"],
          sub: [
            "Surgical airway teaching: models, simulation, cadaveric",
            "Simulation-based education: fidelity, debriefing (Diamond, PEARLS)",
            "Direct supervision vs distant supervision",
            "Case-based discussion (CbD) as teaching tool",
            "Near-peer teaching, e-learning, flipped classroom"
          ],
          subLinks: []
        },
        {
          id: "ed-cpd",
          name: "Continuing Professional Development",
          icon: "graduation-cap",
          refs: ["RCoA G1"],
          sub: [
            "CPD requirements: RCoA, GMC revalidation",
            "Appraisal & revalidation: supporting information, CPD diary",
            "Study leave & budget management"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "ed-management",
      name: "Management & Leadership",
      topics: [
        {
          id: "ed-quality",
          name: "Quality Improvement & Patient Safety",
          icon: "clipboard",
          refs: ["RCoA G1", "RCoA G4"],
          sub: [
            "Clinical governance: pillars, framework",
            "Audit cycle: standard setting, data collection, change implementation, re-audit",
            "QI methodology: PDSA, LEAN, Six Sigma, Model for Improvement",
            "National audit projects (NAP: NAP5 awareness, NAP6 allergy, NAP7 perioperative cardiac arrest)",
            "Incident reporting: Datix/SIRMS, duty of candour",
            "Root cause analysis: fishbone, 5 whys, human factors",
            "Never events in anaesthesia: wrong-sided block, retained swabs"
          ],
          subLinks: []
        },
        {
          id: "ed-leadership",
          name: "Leadership & Teamworking",
          icon: "clipboard",
          refs: ["RCoA G1"],
          sub: [
            "Leadership styles: situational, transformational, transactional",
            "Crisis resource management: CRM principles",
            "Human factors: cognitive aids, checklists (WHO Safer Surgery), briefings/debriefings",
            "Team dynamics: Tuckman model, hierarchy flattening, speaking up",
            "Fatigue & resilience: impact on performance, rest provisions"
          ],
          subLinks: []
        },
        {
          id: "ed-health-economics",
          name: "Health Economics & Resource Management",
          icon: "clipboard",
          refs: ["RCoA G1"],
          sub: [
            "NHS structure: ICS, commissioner/provider split, funding flows",
            "Health economics: QALY, ICER, CEA, CUA versus CBA",
            "NICE technology appraisal process",
            "Budgeting: cost-effectiveness, cost-utility, service line reporting",
            "Theatre efficiency: utilisation, turnaround times, scheduling"
          ],
          subLinks: []
        },
        {
          id: "ed-research",
          name: "Research & Evidence-Based Practice",
          icon: "clipboard",
          refs: ["RCoA G1"],
          sub: [
            "Study design: RCT, cohort, case-control, cross-sectional",
            "Bias types: selection, information, confounding, publication",
            "Statistical concepts: P-value, CI, NNT, NNH, sensitivity, specificity, ROC",
            "Critical appraisal: CASP checklist, GRADE, PICO",
            "Research ethics: IRAS, REC, consent, data protection (GDPR)",
            "Good Clinical Practice (GCP) framework"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "ed-regulatory",
      name: "Regulatory & Legal Framework",
      topics: [
        {
          id: "ed-gmc",
          name: "GMC, RCoA & Regulatory Bodies",
          icon: "scale",
          refs: ["RCoA G1"],
          sub: [
            "GMC: Good Medical Practice, fitness to practise, MPTS",
            "RCoA: role in training, examinations, standards",
            "Care Quality Commission (CQC): key lines of enquiry",
            "NICE: clinical guidelines, technology appraisal, interventional procedures",
            "Safeguarding: vulnerable adults, children (Working Together to Safeguard Children)",
            "Mental Capacity Act 2005 & Deprivation of Liberty Safeguards (DoLS)"
          ],
          subLinks: []
        },
        {
          id: "ed-consent",
          name: "Consent & Capacity",
          icon: "scale",
          refs: ["RCoA G1"],
          sub: [
            "Valid consent: capacity, information, voluntariness",
            "Montgomery ruling (2015): reasonable patient standard vs reasonable doctor",
            "Children: Gillick competence, Fraser guidelines, parental responsibility",
            "Emergency treatment without consent (common law",
            "Advance decisions, lasting power of attorney",
            "Court of Protection & best interests decisions"
          ],
          subLinks: []
        },
        {
          id: "ed-medicolegal",
          name: "Medicolegal & Complaints",
          icon: "scale",
          refs: ["RCoA G1"],
          sub: [
            "Complaints handling: local resolution, PHSO, NHS resolution",
            "Duty of candour: statutory (healthcare) vs professional",
            "Liability: NHS indemnity, clinical negligence vs tort",
            "Disclosure & barring service (DBS)",
            "Freedom of Information Act, Data Protection Act/GDPR",
            "Equality Act 2010: protected characteristics, reasonable adjustments"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "emergency-resuscitation",
  name: "Emergency & Resuscitation",
  icon: "ambulance",
  color: "#dc2626",
  sections: [
    {
      id: "basic-life-support",
      name: "Basic & Advanced Life Support",
      topics: [
        {
          id: "bls",
          name: "Basic Life Support",
          icon: "ambulance",
          refs: ["RCUK", "ERC guidelines", "AHA guidelines"],
          sub: [
            "BLS algorithm: CAB, compression rate (100-120/min), depth (5-6 cm)",
            "Chain of survival",
            "AED use & safety",
            "Paediatric BLS (PBLS) modifications",
            "Recovery position & airway opening manoeuvres"
          ],
          subLinks: []
        },
        {
          id: "als",
          name: "Advanced Life Support (ALS)",
          icon: "ambulance",
          refs: ["RCUK", "ERC guidelines", "MM Ch.19"],
          sub: [
            "ALS algorithm: shockable (VF/pVT) vs non-shockable (PEA/asystole)",
            "Defibrillation: energy, positioning, biphasic vs monophasic",
            "Airway management in cardiac arrest: SGA vs ET tube",
            "Vascular access: IV vs IO, drug delivery timing",
            "Drugs: adrenaline (1mg q3-5min), amiodarone (300mg for shockable)",
            "Reversible causes: 4Hs & 4Ts (checklist approach)",
            "ROSC: post-resuscitation care, targeted temperature management"
          ],
          subLinks: []
        },
        {
          id: "peri-arrest",
          name: "Peri-Arrest Arrhythmias",
          icon: "heart",
          refs: ["RCUK", "ERC guidelines"],
          sub: [
            "Bradycardia: algorithm, atropine, transcutaneous pacing, isoprenaline",
            "Tachycardia: stable vs unstable, synchronised cardioversion",
            "AF, atrial flutter, SVT, VT — recognition and management",
            "Electrolyte management in arrest: K+, Ca2+, Mg2+"
          ],
          subLinks: []
        },
        {
          id: "pacd-resus",
          name: "Paediatric & Neonatal Resuscitation",
          icon: "child",
          refs: ["RCUK", "APLS", "NLS"],
          sub: [
            "Paediatric cardiac arrest: causes (asphyxial), IO access, drug doses (weight-based)",
            "Neonatal resuscitation: NLS algorithm, APGAR, cord clamping, thermoregulation",
            "Transitional circulation implications",
            "Meconium aspiration management update"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "trauma-resus",
      name: "Trauma & Emergency Care",
      topics: [
        {
          id: "major-trauma",
          name: "Major Trauma & ATLS",
          icon: "ambulance",
          refs: ["ATLS", "RCoA G4"],
          sub: [
            "ATLS primary & secondary survey",
            "C-spine immobilisation & clearance (NEXUS, Canadian C-spine rules)",
            "Haemorrhagic shock: classes, massive transfusion protocol, REBOA",
            "Chest trauma: tension pneumothorax, haemothorax, flail chest, cardiac tamponade",
            "Abdominal trauma: FAST scan, DPL, CT",
            "Pelvic trauma: binder, retroperitoneal haemorrhage, preperitoneal packing",
            "Traumatic brain injury: ICP monitoring, management, neuroprotection",
            "Spinal cord injury: steroids controversy, MAP goals, timing of surgery",
            "Burns: assessment (Wallace rule of 9s, Lund & Browder), Parkland formula, inhalational injury",
            "Trauma in pregnancy: perimortem C-section"
          ],
          subLinks: []
        },
        {
          id: "prehospital",
          name: "Prehospital Care & Transfer",
          icon: "ambulance",
          refs: ["RCoA G4"],
          sub: [
            "Prehospital trauma triage & MIST handover",
            "Scoop and run vs stay and play",
            "Critical care transfer: primary vs secondary, equipment, monitoring, documentation",
            "Intrahospital transport: ventilated patient, monitoring standards, risk assessment",
            "Crew resource management in prehospital setting"
          ],
          subLinks: []
        },
        {
          id: "toxicology",
          name: "Toxicology & Poisons",
          icon: "ambulance",
          refs: ["MM Ch.32", "RCoA G4"],
          sub: [
            "Approach to poisoned patient: toxidromes (anticholinergic, cholinergic, opioid, sympathomimetic)",
            "Paracetamol overdose: NAC protocol, nomogram",
            "Opioid overdose: naloxone, methadone, buprenorphine partial reversal",
            "Metabolic poisonings: methanol, ethylene glycol (fomepizole, ethanol)",
            "Serotonin syndrome & neuroleptic malignant syndrome",
            "Cyanide poisoning: hydroxocobalamin, sodium thiosulfate",
            "Organophosphate poisoning: atropine, pralidoxime (2-PAM)",
            "Carbon monoxide poisoning: hyperbaric oxygen indications"
          ],
          subLinks: []
        },
        {
          id: "environmental",
          name: "Environmental Emergencies",
          icon: "zap",
          refs: ["RCoA G4"],
          sub: [
            "Malignant hyperthermia: trigger agents, dantrolene, management protocol",
            "Anaphylaxis: diagnosis, management (AIR algorithm), tryptase, allergy testing referral",
            "Drowning: pathophysiology, management, ECMO role",
            "Hypothermia & hyperthermia: passive vs active rewarming",
            "Electrical injuries & lightning strike",
            "Radiation injury & decontamination"
          ],
          subLinks: []
        }
      ]
    }
  ]
},
{
  id: "ethics-law-safeguarding",
  name: "Ethics, Law & Safeguarding",
  icon: "scale",
  color: "#78716c",
  sections: [
    {
      id: "ethics",
      name: "Ethical Principles",
      topics: [
        {
          id: "ethics-principles",
          name: "Core Ethical Principles",
          icon: "scale",
          refs: ["RCoA G1"],
          sub: [
            "Autonomy, beneficence, non-maleficence, justice",
            "Four quadrant approach to ethical dilemmas",
            "Informed consent: Montgomery vs Bolam",
            "Confidentiality: GMC guidance, exceptions, GDPR",
            "Truth-telling & disclosure of errors",
            "Resource allocation & distributive justice",
            "Research ethics: Helsinki Declaration, REC, vulnerable populations"
          ],
          subLinks: []
        },
        {
          id: "end-of-life",
          name: "End-of-Life Ethics",
          icon: "scale",
          refs: ["RCoA G1", "RCoA G4"],
          sub: [
            "Withdrawal of life-sustaining treatment",
            "DNACPR: discussion, documentation (ReSPECT), legal framework",
            "Advance decisions to refuse treatment (ADRT)",
            "Lasting power of attorney (health & welfare)",
            "Euthanasia & assisted dying: legal position, professional guidance",
            "Futility: definition, assessment, communication",
            "Palliative care: symptom management, end-of-life care pathways"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "safeguarding",
      name: "Safeguarding",
      topics: [
        {
          id: "adult-safeguarding",
          name: "Safeguarding Vulnerable Adults",
          icon: "scale",
          refs: ["RCoA G1", "RCoA G4"],
          sub: [
            "Categories of abuse: physical, emotional, financial, sexual, neglect, self-neglect",
            "Mental Capacity Act 2005: 5 principles, capacity assessment",
            "Best interests decision-making & checklist",
            "Deprivation of Liberty Safeguards (DoLS) & Liberty Protection Safeguards (LPS)",
            "Safeguarding Adults Board, local procedures, reporting",
            "Domestic violence & mandatory reporting",
            "Modern slavery: identification, NRM referral"
          ],
          subLinks: []
        },
        {
          id: "child-safeguarding",
          name: "Safeguarding Children",
          icon: "child",
          refs: ["RCoA G1", "RCoA G4", "Working Together"],
          sub: [
            "Types of abuse: physical, emotional, sexual, neglect",
            "Non-accidental injury: patterns, investigations, documentation",
            "Gillick competence & Fraser guidelines",
            "Child protection: LADO, MASH, child protection conferences",
            "Female genital mutilation (FGM): duty to report",
            "Prevent duty: radicalisation, Channel programme",
            "Safeguarding in foster care, residential care, youth offenders"
          ],
          subLinks: []
        },
        {
          id: "vulnerable-groups",
          name: "Vulnerable Groups & Informed Consent",
          icon: "scale",
          refs: ["RCoA G1", "RCoA G4"],
          sub: [
            "Prisoners & detention: ethical considerations",
            "Looked-after children: consent, Independent Reviewing Officer",
            "Adults with learning disability: reasonable adjustments",
            "Consent for minors: age 16-17, parental responsibility hierarchy",
            "Emergency treatment for incapacitated adults"
          ],
          subLinks: []
        }
      ]
    },
    {
      id: "legal-framework",
      name: "Legal Framework",
      topics: [
        {
          id: "legal-medical",
          name: "Medical Law",
          icon: "scale",
          refs: ["RCoA G1"],
          sub: [
            "Clinical negligence vs criminal law",
            "Causation: Bolam test, Bolitho gloss, Montgomery test for consent",
            "Duty of care, breach, causation, damage",
            "Whistleblowing: Freedom to Speak Up, Public Interest Disclosure Act",
            "Criminal law: gross negligence manslaughter, corporate manslaughter",
            "GMC fitness to practise: MPTS, undertakings, sanctions",
            "Mental Health Act 1983: sections 2, 3, 4, 5(2), 136 — anaesthetic implications"
          ],
          subLinks: []
        },
        {
          id: "coroner",
          name: "Coroner's Court & Death Certification",
          icon: "scale",
          refs: ["RCoA G1"],
          sub: [
            "Medical Certificate of Cause of Death (MCCD): completion, cremation forms",
            "Referral to coroner: legal duty, reportable deaths",
            "Coroner's inquest: purpose, process, Article 2 inquests",
            "Death in custody & state obligation",
            "Organ donation: Human Tissue Act 2004, opt-out system (England 2020)"
          ],
          subLinks: []
        },
        {
          id: "data-equality",
          name: "Data Protection & Equality",
          icon: "clipboard",
          refs: ["RCoA G1"],
          sub: [
            "Data Protection Act 2018 & UK GDPR: principles, lawful basis, rights",
            "Information sharing: Caldicott principles, information governance",
            "Equality Act 2010: protected characteristics, reasonable adjustments, discrimination",
            "Access to Health Records Act",
            "Freedom of Information Act 2000"
          ],
          subLinks: []
        }
      ]
    }
  ]
}
];

if (typeof window !== "undefined") {
  window.CURRICULUM = CURRICULUM;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = CURRICULUM;
}
