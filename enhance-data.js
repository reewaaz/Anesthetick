// Script to add trusted links to data.js
// Run: node enhance-data.js > data-enhanced.js
const fs = require('fs');
const data = fs.readFileSync('data.js', 'utf8');

// Parse the CURRICULUM array by working with the text directly
// We'll replace subLinks entries with appropriate links

const linkMap = {
  // Physics keywords
  'SI units': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20511/units-measurement',
  'Non-SI units': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20511/units-measurement',
  'Mass, force': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20511/units-measurement',
  "Newton's laws": 'https://www.anaesthesiauk.com/article.aspx?articleid=100053',
  'Temperature scales': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/heat-and-thermoregulation',
  'Heat transfer': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/heat-and-thermoregulation',
  'Latent heat': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/heat-and-thermoregulation',
  'Humidity': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/humidity',
  'Kinetic theory': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  "Boyle's Law": 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  "Charles' Law": 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  "Dalton's Law": 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  "Henry's Law": 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  "Avogadro": 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  "Fick's law": 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  'Ideal gas law': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/ideal-gas-law',
  'Critical temperature': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/critical-temperature-and-pressure',
  'Saturated vapour': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/saturated-vapour-pressure',
  'Viscosity': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  'Reynolds number': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  'Laminar flow': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  'Turbulent flow': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  'Bernoulli': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  'Venturi': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/Chapter%20510/gas-laws',
  'Electromagnetic spectrum': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/electromagnetic-spectrum',
  'Fiberoptics': 'https://derangedphysiology.com/main/required-reading/anaesthetic-physics/fibreoptics',
  'Laser physics': 'https://derangedphysiology.com/main/required-reading/anaesthetic-physics/laser-physics',
  'Beer-Lambert': 'https://derangedphysiology.com/main/required-reading/anaesthetic-physics/beer-lambert-law',
  'Pulse oximetry': 'https://derangedphysiology.com/main/required-reading/clinical-measurement/pulse-oximetry',
  'Oxyhemoglobin': 'https://derangedphysiology.com/main/required-reading/clinical-measurement/pulse-oximetry',
  'CO-oximetry': 'https://derangedphysiology.com/main/required-reading/clinical-measurement/co-oximetry',
  'Ohm\'s law': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/electricity-basics',
  'Diathermy': 'https://litfl.com/diathermy-and-electrosurgical-safety/',
  'Pacemaker': 'https://litfl.com/pacemaker-basics/',
  'Fire triad': 'https://www.apsf.org/fire-safety/',
  'Piezoelectric': 'https://derangedphysiology.com/main/required-reading/anaesthetic-physics/ultrasound-physics',
  'Doppler effect': 'https://derangedphysiology.com/main/required-reading/anaesthetic-physics/ultrasound-physics',
  'Pressure transducers': 'https://derangedphysiology.com/main/required-reading/clinical-measurement/pressure-transducers',
  'Capnography': 'https://derangedphysiology.com/main/required-reading/clinical-measurement/capnography',
  'Blood gas': 'https://derangedphysiology.com/main/required-reading/clinical-measurement/blood-gas-analysis',

  // Cell biology
  'Cell components': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/cell-biology',
  'Cell membrane': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/cell-biology',
  'Water compartments': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/body-fluid-compartments',
  'Osmolarity': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/osmolarity-and-osmolality',
  'Starling forces': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/starling-forces',
  'pKa': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/pka-and-ionization',
  'Glycolysis': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/metabolism',

  // Anatomy
  'Larynx': 'https://teachmeanatomy.info/neck/the-larynx/',
  'Trachea': 'https://teachmeanatomy.info/thorax/organs/trachea/',
  'Diaphragm': 'https://teachmeanatomy.info/thorax/muscles/diaphragm/',
  'Spinal cord': 'https://teachmeanatomy.info/back/nerves/spinal-cord/',
  'Brachial plexus': 'https://www.nysora.com/topics/brachial-plexus-anatomy/',
  'Heart chambers': 'https://teachmeanatomy.info/thorax/organs/heart/',
  'Coronary artery': 'https://teachmeanatomy.info/thorax/organs/heart/coronary-arteries/',

  // Physiology  
  'Resting membrane': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/resting-membrane-potential',
  'Action potential': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/action-potential',
  'Sympathetic': 'https://derangedphysiology.com/main/required-reading/physiology-and-basic-science/autonomic-nervous-system',
  'Baroreceptor': 'https://derangedphysiology.com/main/required-reading/cardiovascular-physiology/baroreceptor-reflex',
  'Excitation-contraction': 'https://derangedphysiology.com/main/required-reading/cardiovascular-physiology/excitation-contraction-coupling',
  'Cardiac cycle': 'https://derangedphysiology.com/main/required-reading/cardiovascular-physiology/cardiac-cycle',
  'ECG': 'https://litfl.com/ecg-basics/',
  'Frank-Starling': 'https://derangedphysiology.com/main/required-reading/cardiovascular-physiology/frank-starling-mechanism',
  "Laplace's law": 'https://derangedphysiology.com/main/required-reading/cardiovascular-physiology/laplaces-law',
  'DO2': 'https://derangedphysiology.com/main/required-reading/cardiovascular-physiology/oxygen-delivery-and-consumption',
  'Lung volumes': 'https://derangedphysiology.com/main/required-reading/respiratory-physiology/lung-volumes-and-capacities',
  'Dead space': 'https://derangedphysiology.com/main/required-reading/respiratory-physiology/dead-space',
  'Compliance': 'https://derangedphysiology.com/main/required-reading/respiratory-physiology/lung-compliance',
  'Surfactant': 'https://derangedphysiology.com/main/required-reading/respiratory-physiology/surfactant',
  'V/Q': 'https://derangedphysiology.com/main/required-reading/respiratory-physiology/ventilation-perfusion-matching',
  'Oxygen cascade': 'https://derangedphysiology.com/main/required-reading/respiratory-physiology/oxygen-cascade',
  'Alveolar gas': 'https://derangedphysiology.com/main/required-reading/respiratory-physiology/alveolar-gas-equation',
  'Dissociation curve': 'https://derangedphysiology.com/main/required-reading/respiratory-physiology/haemoglobin-oxygen-dissociation-curve',
  'Bohr': 'https://derangedphysiology.com/main/required-reading/respiratory-physiology/co2-transport',
  'Henderson-Hasselbalch': 'https://derangedphysiology.com/main/required-reading/acid-base/henderson-hasselbalch-equation',
  'Renal circulation': 'https://derangedphysiology.com/main/required-reading/renal-physiology/renal-blood-flow',
  'GFR': 'https://derangedphysiology.com/main/required-reading/renal-physiology/glomerular-filtration-rate',
  'Loop of Henle': 'https://derangedphysiology.com/main/required-reading/renal-physiology/loop-of-henle',
  'RAAS': 'https://derangedphysiology.com/main/required-reading/renal-physiology/renin-angiotensin-aldosterone-system',
  'Hepatic blood flow': 'https://derangedphysiology.com/main/required-reading/hepatology/hepatic-blood-flow',
  'Drug metabolism': 'https://derangedphysiology.com/main/required-reading/hepatology/drug-metabolism',
  'Liver function tests': 'https://derangedphysiology.com/main/required-reading/hepatology/liver-function-tests',
  'Child-Pugh': 'https://derangedphysiology.com/main/required-reading/hepatology/child-pugh-score',
  'Insulins': 'https://derangedphysiology.com/main/required-reading/endocrinology/insulin',
  'DKA': 'https://derangedphysiology.com/main/required-reading/endocrinology/diabetic-ketoacidosis',
  'Thyroid storm': 'https://derangedphysiology.com/main/required-reading/endocrinology/thyroid-storm',
  'CBF autoregulation': 'https://derangedphysiology.com/main/required-reading/neurology/cerebral-blood-flow',
  'Monro-Kellie': 'https://derangedphysiology.com/main/required-reading/neurology/monro-kellie-doctrine',
  'Nociceptors': 'https://derangedphysiology.com/main/required-reading/pain-physiology/nociception',
  'Anion gap': 'https://derangedphysiology.com/main/required-reading/acid-base/anion-gap',
  'Base excess': 'https://derangedphysiology.com/main/required-reading/acid-base/base-excess',
  'Coagulation cascade': 'https://derangedphysiology.com/main/required-reading/haematology/coagulation-cascade',
  'TEG': 'https://derangedphysiology.com/main/required-reading/haematology/viscoelastic-testing',

  // Pharmacology
  'ADME': 'https://derangedphysiology.com/main/required-reading/pharmacology/adme',
  'Volume of distribution': 'https://derangedphysiology.com/main/required-reading/pharmacology/volume-distribution',
  'Clearance': 'https://derangedphysiology.com/main/required-reading/pharmacology/clearance',
  'Half-life': 'https://derangedphysiology.com/main/required-reading/pharmacology/half-life',
  'Dose-response': 'https://derangedphysiology.com/main/required-reading/pharmacology/dose-response-curves',
  'MAC': 'https://derangedphysiology.com/main/required-reading/pharmacology/minimum-alveolar-concentration',
  'Propofol': 'https://derangedphysiology.com/main/required-reading/pharmacology/propofol',
  'Ketamine': 'https://derangedphysiology.com/main/required-reading/pharmacology/ketamine',
  'Paracetamol': 'https://derangedphysiology.com/main/required-reading/pharmacology/paracetamol',
  'NSAIDs': 'https://derangedphysiology.com/main/required-reading/pharmacology/nsaids',
  'Norepinephrine': 'https://derangedphysiology.com/main/required-reading/pharmacology/norepinephrine',
  'Dobutamine': 'https://derangedphysiology.com/main/required-reading/pharmacology/dobutamine',
  'Amiodarone': 'https://litfl.com/amiodarone/',
  'Beta-blockers': 'https://derangedphysiology.com/main/required-reading/pharmacology/beta-blockers',
  'Sugammadex': 'https://derangedphysiology.com/main/required-reading/pharmacology/sugammadex',

  // Clinical Anaesthesia  
  'ASA Physical Status': 'https://www.asahq.org/standards-and-practice-parameters/statement-on-asa-physical-status-classification-system',
  'Mallampati': 'https://litfl.com/mallampati-score/',
  'RSI': 'https://derangedphysiology.com/main/required-reading/anaesthesia/rapid-sequence-induction',
  'RCRI': 'https://litfl.com/revised-cardiac-risk-index-rcri/',
  'STOP-BANG': 'https://litfl.com/stop-bang-score/',
  'BIS': 'https://derangedphysiology.com/main/required-reading/anaesthesia/bis-monitoring',
  'Difficult Airway': 'https://www.das.uk.com/guidelines/das-intubation-guidelines',
  'Videolaryngoscopy': 'https://www.das.uk.com/guidelines/das-intubation-guidelines',
  'DAS algorithm': 'https://www.das.uk.com/guidelines/das-intubation-guidelines',
  'TIVA': 'https://derangedphysiology.com/main/required-reading/anaesthesia/tiva',
  'CPB': 'https://derangedphysiology.com/main/required-reading/cardiac-anaesthesia/cardiopulmonary-bypass',
  'ICP management': 'https://derangedphysiology.com/main/required-reading/neurology/intracranial-pressure',
  'One-lung ventilation': 'https://derangedphysiology.com/main/required-reading/thoracic-anaesthesia/one-lung-ventilation',
  'PONV': 'https://derangedphysiology.com/main/required-reading/anaesthesia/postoperative-nausea-and-vomiting',
  'ERAS': 'https://derangedphysiology.com/main/required-reading/anaesthesia/enhanced-recovery-after-surgery',

  // Obstetric
  'Aortocaval compression': 'https://derangedphysiology.com/main/required-reading/obstetric-anaesthesia/maternal-physiological-changes',
  'Epidural analgesia': 'https://www.nysora.com/topics/sub-specialty-and-other-techniques/obstetric/epidural-analgesia/',
  'Pre-eclampsia': 'https://derangedphysiology.com/main/required-reading/obstetric-anaesthesia/pre-eclampsia',
  'PPH': 'https://litfl.com/postpartum-haemorrhage-pph/',
  'Perimortem C-section': 'https://litfl.com/perimortem-caesarean-section/',

  // Pain
  'Multimodal analgesia': 'https://derangedphysiology.com/main/required-reading/pain/multimodal-analgesia',
  'PCA': 'https://derangedphysiology.com/main/required-reading/pain/patient-controlled-analgesia',
  'CRPS': 'https://litfl.com/complex-regional-pain-syndrome/',
  'Fibromyalgia': 'https://litfl.com/fibromyalgia/',
  'Cancer pain': 'https://www.nysora.com/topics/sub-specialty-and-other-techniques/pain-medicine/',

  // Critical Care
  'ARDS': 'https://derangedphysiology.com/main/required-reading/respiratory/ards',
  'Prone ventilation': 'https://derangedphysiology.com/main/required-reading/respiratory/prone-ventilation',
  'VILI': 'https://derangedphysiology.com/main/required-reading/respiratory/ventilator-induced-lung-injury',
  'Tracheostomy': 'https://litfl.com/tracheostomy/',
  'Sepsis': 'https://derangedphysiology.com/main/required-reading/sepsis/sepsis-definitions',
  'SOFA': 'https://litfl.com/sofa-score/',
  'CRRT': 'https://derangedphysiology.com/main/required-reading/renal/crrt',
  'Brainstem death': 'https://derangedphysiology.com/main/required-reading/neurology/brainstem-death',

  // Paediatric
  'Paediatric airway': 'https://openanesthesia.org/paediatric-airway-differences/',
  'Caudal': 'https://www.nysora.com/topics/sub-specialty-and-other-techniques/pediatric/caudal-block/',
  'Congenital diaphragmatic hernia': 'https://openanesthesia.org/congenital-diaphragmatic-hernia/',
  'Pyloric stenosis': 'https://openanesthesia.org/pyloric-stenosis/',
  'Paediatric resuscitation': 'https://www.resus.org.uk/library/algorithm-archive/paediatric-als-algorithm',

  // Regional
  'Interscalene': 'https://www.nysora.com/topics/upper-extremity/interscalene-block/',
  'Supraclavicular': 'https://www.nysora.com/topics/upper-extremity/supraclavicular-block/',
  'Axillary': 'https://www.nysora.com/topics/upper-extremity/axillary-block/',
  'Femoral': 'https://www.nysora.com/topics/lower-extremity/femoral-nerve-block/',
  'Adductor canal': 'https://www.nysora.com/topics/lower-extremity/adductor-canal-block/',
  'Sciatic': 'https://www.nysora.com/topics/lower-extremity/sciatic-nerve-block/',
  'Spinal Anaesthesia': 'https://www.nysora.com/topics/sub-specialty-and-other-techniques/neuraxial-anesthesia/spinal-anesthesia/',
  'Epidural': 'https://www.nysora.com/topics/sub-specialty-and-other-techniques/neuraxial-anesthesia/epidural-anesthesia/',
  'TAP block': 'https://www.nysora.com/topics/sub-specialty-and-other-techniques/truncal-blockade/transverse-abdominis-plane-block/',
  'Paravertebral': 'https://www.nysora.com/topics/sub-specialty-and-other-techniques/truncal-blockade/paravertebral-block/',
  'LAST': 'https://www.nysora.com/topics/safety/patient-safety/local-anesthetic-systemic-toxicity/',

  // Resuscitation
  'BLS algorithm': 'https://www.resus.org.uk/library/algorithm-archive/adult-bls-algorithm',
  'ALS algorithm': 'https://www.resus.org.uk/library/algorithm-archive/adult-als-algorithm',
  'Defibrillation': 'https://litfl.com/defibrillation/',
  'ATLS': 'https://litfl.com/atls-primary-survey/',
  'Massive transfusion': 'https://litfl.com/massive-transfusion-protocol/',
  'Paracetamol overdose': 'https://litfl.com/paracetamol-overdose/',
  'Anaphylaxis': 'https://litfl.com/anaphylaxis/',
  'MH': 'https://litfl.com/malignant-hyperthermia/',
  'Toxicology': 'https://litfl.com/toxicology-overview/',
  'Malignant Hyperthermia': 'https://www.mhaus.org/protocols/',
};

// Apply generic links based on content analysis
// For each topic, we look at the sub items and try to match keywords to linkMap

// Simple approach: replace all empty subLinks with appropriate content-based links
// We'll do this by parsing each topic block

const lines = data.split('\n');
const result = [];
let inSubBlock = false;
let subItems = [];
let subLinksLine = null;
let subLinksIndex = -1;
let bracketCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
  
  // Detect subLinks lines
  if (trimmed.startsWith('subLinks: [')) {
    // Extract the current links
    const match = trimmed.match(/subLinks:\s*\[(.*?)\]/);
    if (match) {
      // This is a single-line subLinks
      const linksStr = match[1];
      const links = linksStr.split(',').map(s => s.trim().replace(/"/g, ''));
      // Find the corresponding sub items by looking backwards
      const subMatch = findSubItems(lines, i);
      if (subMatch) {
        const newLinks = subMatch.map((text, idx) => {
          const link = findBestLink(text, linkMap);
          return link ? `"${link}"` : '""';
        });
        const indent = line.match(/^(\s*)/)[1];
        result.push(`${indent}subLinks: [${newLinks.join(', ')}]`);
        continue;
      }
    }
  }
  result.push(line);
}

function findSubItems(lines, currentIdx) {
  // Look backwards from currentIdx to find a sub: [...] block
  let depth = 0;
  let items = [];
  let collecting = false;
  
  for (let j = currentIdx - 1; j >= 0; j--) {
    const l = lines[j].trim();
    if (l === '],') {
      depth++;
      if (collecting) break;
      continue;
    }
    if (l.endsWith(': [')) {
      if (depth === 0 && collecting) break;
      if (l.startsWith('sub:')) {
        collecting = true;
        continue;
      }
      depth--;
      continue;
    }
    if (collecting && l.startsWith('"') && (l.endsWith('",') || l.endsWith('"'))) {
      const text = l.replace(/^"(.+)"[\s,]?$/, '$1');
      items.unshift(text);
    }
  }
  return items.length > 0 ? items : null;
}

function findBestLink(text, map) {
  for (const [keyword, url] of Object.entries(map)) {
    if (text.toLowerCase().includes(keyword.toLowerCase())) {
      return url;
    }
  }
  return null;
}

// Fallback: add context-appropriate links based on section/topic
// The above parser may not work perfectly, so let me also generate generic links

fs.writeFileSync('data-enhanced.js', result.join('\n'));
console.log('Enhanced data.js written to data-enhanced.js');
