import { PsychotropicDrugEntity, ClinicalCaseEntity, ReceptorBindingProportion, PharmacokineticProfile } from '../types/vaultTypes';

// ============================================================================
// COMPREHENSIVE PHARMACOKINETICS & RECEPTOR PROPORTIONS (Dr. Papaleo & Ps. Alfonso)
// ============================================================================

export const deepPharmacokineticProfiles: Record<string, PharmacokineticProfile> = {
  sertralina: {
    bioavailability_percent: '44% (aumenta un 25% con la ingesta concomitante de alimentos)',
    protein_binding_percent: '98% (unión casi total a proteínas plasmáticas, principalmente albúmina)',
    peak_plasma_tmax: '4.5 a 8.4 horas tras la administración oral matinal',
    half_life_parent: '26 horas (fármaco madre)',
    half_life_metabolite: '62 a 104 horas (N-desmetilsertralina, metabolito activo pero 10x menos potente)',
    steady_state_days: '7 días (alcanza el 97% del estado estacionario a las 5 vidas medias)',
    washout_period: '5 a 7 días (esperar 14 días antes de iniciar un IMAO irreversible)',
    cyp450_enzymes: ['Sustrato de CYP2B6 y CYP2C19', 'Inhibidor débil de CYP2D6 (el más seguro entre los ISRS clásicos)'],
    elimination_route: 'Eliminación equilibrada: 45% renal (metabolitos hidrosolubles) y 45% fecal/biliar'
  },
  fluoxetina: {
    bioavailability_percent: '72% (absorción oral completa no alterada significativamente por alimentos)',
    protein_binding_percent: '94% a 95%',
    peak_plasma_tmax: '6 a 8 horas',
    half_life_parent: '48 a 72 horas (2 a 3 días)',
    half_life_metabolite: '7 a 15 días (norfluoxetina: potente metabolito activo bloqueador de SERT)',
    steady_state_days: '28 a 35 días (requiere un mes completo de tomas para alcanzar el equilibrio)',
    washout_period: '5 semanas completas (período de lavado obligatorio antes de rotar a un IMAO)',
    cyp450_enzymes: ['Inhibidor potente de CYP2D6 (eleva niveles de betabloqueantes, risperidona y tricíclicos)', 'Inhibidor moderado de CYP2C9 y CYP2C19'],
    elimination_route: 'Renal 80% y fecal 15%'
  },
  escitalopram: {
    bioavailability_percent: '80% (alta y predecible independientemente de los alimentos)',
    protein_binding_percent: '56% (baja unión comparativa: menor riesgo de desplazamiento de otros fármacos)',
    peak_plasma_tmax: '3 a 4 horas',
    half_life_parent: '27 a 32 horas (prolongada a 40 h en adultos mayores)',
    half_life_metabolite: 'Metabolitos S-desmetil y S-didesmetil con actividad clínica insignificante',
    steady_state_days: '7 a 10 días',
    washout_period: '7 días (14 días antes de IMAO)',
    cyp450_enzymes: ['Metabolizado por CYP2C19, CYP3A4 y CYP2D6', 'Inhibición enzimática mínima: fármaco de elección en polimedicados'],
    elimination_route: 'Hepática y renal (8% inalterado por orina)'
  },
  venlafaxina: {
    bioavailability_percent: '45% (metabolismo de primer paso hepático pronunciado)',
    protein_binding_percent: '27% (muy baja unión a proteínas)',
    peak_plasma_tmax: '2.5 horas (fórmula estándar) y 5.5 horas (cápsula liberación prolongada XR)',
    half_life_parent: '5 horas (fármaco madre)',
    half_life_metabolite: '11 horas (O-desmetilvenlafaxina / ODV: metabolito activo equipotente)',
    steady_state_days: '3 a 4 días',
    washout_period: '7 días',
    cyp450_enzymes: ['Sustrato de CYP2D6 que la biotransforma en ODV', 'Poco inhibidor de citocromos'],
    elimination_route: 'Renal 87% (requiere ajuste en insuficiencia renal moderada a severa)'
  },
  bupropion: {
    bioavailability_percent: '87% en animales; biodisponibilidad plasmática relativa por primer paso',
    protein_binding_percent: '84%',
    peak_plasma_tmax: '3 horas (fórmula de liberación modificada XL)',
    half_life_parent: '21 horas (fármaco madre)',
    half_life_metabolite: 'Hidroxibupropión (20 h), eritrohidroxibupropión (33 h), treohidroxibupropión (37 h)',
    steady_state_days: '8 días',
    washout_period: '7 días (14 días antes de IMAO)',
    cyp450_enzymes: ['Metabolizado por CYP2B6 a hidroxibupropión', 'Inhibidor potente de CYP2D6'],
    elimination_route: 'Renal 87% y fecal 10%'
  },
  quetiapina: {
    bioavailability_percent: '100% absorción oral; biodisponibilidad efectiva 9% por alto primer paso',
    protein_binding_percent: '83%',
    peak_plasma_tmax: '1.5 horas (liberación inmediata IR) y 6 horas (liberación prolongada XR)',
    half_life_parent: '6 a 7 horas (quetiapina madre)',
    half_life_metabolite: '12 horas (norquetiapina: responsable clave de la acción antidepresiva vía NET y 5-HT1A)',
    steady_state_days: '2 a 3 días',
    washout_period: '3 días',
    cyp450_enzymes: ['Metabolizada primariamente por CYP3A4 (jugo de pomelo y ketoconazol elevan sus niveles)'],
    elimination_route: 'Renal 73% y fecal 21%'
  },
  litio: {
    bioavailability_percent: '100% (absorción gastrointestinal completa y rápida en el intestino delgado)',
    protein_binding_percent: '0% (no se une a proteínas plasmáticas; viaja libre como catión monovalente Li+)',
    peak_plasma_tmax: '0.5 a 3 horas (cápsulas convencionales) y 4 a 6 horas (comprimidos de liberación lenta)',
    half_life_parent: '18 a 24 horas en adultos jóvenes (36 horas en ancianos o deshidratación)',
    half_life_metabolite: 'No tiene metabolitos; no sufre biotransformación hepática',
    steady_state_days: '5 a 7 días (momento obligatorio para dosar litemia plasmática)',
    washout_period: '7 días',
    cyp450_enzymes: ['Ninguno (no pasa por el citocromo P450; interacción crítica con diuréticos, AINEs e IECA)'],
    elimination_route: '95% a 99% por excreción renal glomerular directa (reabsorbido 80% en túbulo proximal junto con el sodio)'
  },
  clonazepam: {
    bioavailability_percent: '90% (alta y de rápida absorción oral)',
    protein_binding_percent: '85%',
    peak_plasma_tmax: '1 a 4 horas',
    half_life_parent: '30 a 40 horas (vida media intermedia a prolongada: evita picos de abstinencia)',
    half_life_metabolite: '7-amino-clonazepam (inactivo o escasa actividad clínica)',
    steady_state_days: '6 a 8 días',
    washout_period: '10 a 14 días (retirada gradual obligatoria por riesgo de convulsiones de rebote)',
    cyp450_enzymes: ['Sustrato principal de CYP3A4'],
    elimination_route: 'Renal (menos del 2% inalterado)'
  }
};

export const deepReceptorBindingProportions: Record<string, ReceptorBindingProportion[]> = {
  sertralina: [
    { receptor: 'SERT (Bomba de Serotonina)', affinity_level: 'Alta', proportion_percent: 94, action_type: 'Inhibidor de Bomba (Recaptación)', clinical_effect: 'Efecto antidepresivo, ansiolítico y anti-obsesivo de primera línea' },
    { receptor: 'DAT (Bomba de Dopamina)', affinity_level: 'Baja', proportion_percent: 18, action_type: 'Inhibidor de Bomba (Recaptación)', clinical_effect: 'Leve acción activadora, combate la anhedonia y la fatiga diurna' },
    { receptor: 'Sigma-1 (σ1)', affinity_level: 'Moderada', proportion_percent: 42, action_type: 'Agonista Total', clinical_effect: 'Efecto ansiolítico pro-cognitivo y neuroprotector en depresión psicótica' },
    { receptor: '5-HT2A', affinity_level: 'Insignificante', proportion_percent: 6, action_type: 'Antagonista', clinical_effect: 'Sin impacto sedativo directo' }
  ],
  fluoxetina: [
    { receptor: 'SERT (Bomba de Serotonina)', affinity_level: 'Alta', proportion_percent: 88, action_type: 'Inhibidor de Bomba (Recaptación)', clinical_effect: 'Acción antidepresiva y antibulímica a dosis plenas (60 mg)' },
    { receptor: '5-HT2C', affinity_level: 'Moderada', proportion_percent: 64, action_type: 'Antagonista', clinical_effect: 'Desinhibe la liberación de dopamina y noradrenalina en corteza prefrontal: energizante y supresor del apetito' },
    { receptor: 'CYP2D6', affinity_level: 'Alta', proportion_percent: 85, action_type: 'Inhibidor de Bomba (Recaptación)', clinical_effect: 'Interacción farmacocinética: eleva niveles de risperidona y betabloqueantes' }
  ],
  escitalopram: [
    { receptor: 'SERT (Sitio Primario Catalítico)', affinity_level: 'Alta', proportion_percent: 99, action_type: 'Inhibidor de Bomba (Recaptación)', clinical_effect: 'Inhibición pura y máxima de la recaptación de serotonina' },
    { receptor: 'SERT (Sitio Alostérico)', affinity_level: 'Alta', proportion_percent: 85, action_type: 'Modulador Alostérico Positivo (PAM)', clinical_effect: 'Auto-potencia la unión al transportador: inicio de acción más veloz' },
    { receptor: 'H1 / M1 / Alpha-1', affinity_level: 'Insignificante', proportion_percent: 2, action_type: 'Antagonista', clinical_effect: 'Ausencia de sedación, hipotensión o aumento de peso' }
  ],
  quetiapina: [
    { receptor: 'H1 (Histaminérgico)', affinity_level: 'Alta', proportion_percent: 92, action_type: 'Antagonista', clinical_effect: 'Sedación profunda, inducción del sueño a bajas dosis (25 a 50 mg) y aumento de apetito' },
    { receptor: '5-HT2A (Serotoninérgico)', affinity_level: 'Alta', proportion_percent: 84, action_type: 'Antagonista', clinical_effect: 'Disminuye síntomas extrapiramidales y colabora en la acción antidepresiva' },
    { receptor: 'NET (vía Norquetiapina)', affinity_level: 'Moderada', proportion_percent: 65, action_type: 'Inhibidor de Bomba (Recaptación)', clinical_effect: 'Efecto antidepresivo en Bipolaridad a dosis media (150 a 300 mg/día)' },
    { receptor: 'D2 (Dopaminérgico)', affinity_level: 'Moderada', proportion_percent: 68, action_type: 'Antagonista', clinical_effect: 'Ocupación >60% requerida para efecto antipsicótico en manía y esquizofrenia (400 a 800 mg/día)' }
  ],
  clozapina: [
    { receptor: '5-HT2A', affinity_level: 'Alta', proportion_percent: 95, action_type: 'Antagonista', clinical_effect: 'Prevención total de síntomas extrapiramidales y alivio de síntomas negativos' },
    { receptor: 'D4', affinity_level: 'Alta', proportion_percent: 90, action_type: 'Antagonista', clinical_effect: 'Eficacia indiscutida en esquizofrenia resistente y refractaria' },
    { receptor: 'D2', affinity_level: 'Baja', proportion_percent: 45, action_type: 'Antagonista', clinical_effect: 'Unión rápida y desunión acelerada ("hit and run"): no produce discinesia tardía' },
    { receptor: 'M1 / H1 / Alpha-1', affinity_level: 'Alta', proportion_percent: 88, action_type: 'Antagonista', clinical_effect: 'Hipersalivación nocturna (sialorrea), sedación severa, aumento de peso e hipotensión' }
  ]
};

// ============================================================================
// NEW SPECIALIZED DRUGS FROM GENIALLY 2026 LAUNCHER (22 PRESENTATIONS)
// ============================================================================

export const geniallySpecializedDrugs: PsychotropicDrugEntity[] = [
  // --- PROCOGNITIVOS Y DEMENCIAS (Genially 677d95b7613759c21119218d) ---
  {
    id: 'donepezilo',
    title: 'Donepezilo',
    entity_type: 'drug',
    tags: ['#pharmacology/dementia', '#alzheimer', '#cholinergic', '#procognitive'],
    summary: 'Inhibidor selectivo y reversible de la acetilcolinesterasa (AChEI). Fármaco de primera línea para el tratamiento sintomático de la demencia tipo Alzheimer leve a moderada.',
    drug_generic_name: 'Donepezilo',
    drug_brand_names: ['Aricept', 'Memac', 'Eranz', 'Valpex'],
    drug_class: 'Cognitive Enhancer',
    neurotransmitters: ['Acetilcolina (ACh) en corteza y núcleo basal de Meynert'],
    indications_fda: ['Enfermedad de Alzheimer leve, moderada y severa', 'Demencia vascular (off-label)'],
    indications_off_label: ['Deterioro cognitivo leve (DCL)', 'Demencia por cuerpos de Lewy', 'Traumatismo craneoencefálico'],
    half_life_hours: '70 horas (permite una única toma diaria, preferentemente nocturna)',
    dosing_range_mg: '5 a 10 mg/día (inicio con 5 mg durante al menos 4 a 6 semanas antes de titular)',
    latency_days: '6 a 12 semanas para observar estabilización cognitiva o conductual',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Inhibición reversible y no competitiva de la enzima acetilcolinesterasa (AChE) en la hendidura sináptica del sistema nervioso central, prolongando la disponibilidad y acción de la acetilcolina en los receptores nicotínicos y muscarínicos corticales.',
    psychotherapy_impact: [
      'Facilita la retención en talleres de estimulación cognitiva y memoria.',
      'Mejora los síntomas neuropsiquiátricos secundarios (apatía, irritabilidad, alucinaciones visuales leves).',
      'No detiene la neurodegeneración subyacente; psicoeducar a los familiares para ajustar expectativas y evitar claudicación del cuidador.'
    ],
    side_effects_monitoring: [
      'Gastrointestinales colinérgicos (náuseas, vómitos, diarrea por estimulación vagal periférica)',
      'Bradicardia sinusal y síncope (precaución extrema en pacientes con síndrome del nodo enfermo)',
      'Calambres musculares nocturnos e insomnio con pesadillas vívidas'
    ],
    black_box_warnings: [
      'Riesgo de bloqueo cardíaco auriculoventricular y síncope neurogénico.',
      'Monitoreo obligatorio con electrocardiograma previo al inicio si hay antecedentes de cardiopatía.'
    ],
    gold_standard_for: [
      'Demencia tipo Alzheimer en estadio leve a moderadamente severo',
      'Demencia con Cuerpos de Lewy con fluctuaciones atencionales'
    ],
    emergency_red_flags: [
      'Bradicardia severa (<50 lpm) acompañada de mareo o pérdida súbita de conciencia',
      'Hemorragia digestiva alta en pacientes polimedicados con AINEs'
    ],
    receptor_proportions: [
      { receptor: 'AChE (Acetilcolinesterasa central)', affinity_level: 'Alta', proportion_percent: 95, action_type: 'Inhibidor de Bomba (Recaptación)', clinical_effect: 'Aumento de niveles de acetilcolina sináptica cerebral' },
      { receptor: 'BChE (Butirilcolinesterasa plasmática)', affinity_level: 'Baja', proportion_percent: 10, action_type: 'Inhibidor de Bomba (Recaptación)', clinical_effect: 'Selectividad central: menor toxicidad periférica sistémica' }
    ],
    pharmacokinetics: {
      bioavailability_percent: '100% oral',
      protein_binding_percent: '96% unido a proteínas plasmáticas',
      peak_plasma_tmax: '3 a 4 horas',
      half_life_parent: '70 horas',
      steady_state_days: '15 días (3 semanas)',
      washout_period: '14 días',
      cyp450_enzymes: ['Metabolizado por CYP3A4 y CYP2D6'],
      elimination_route: 'Renal (57%) y fecal (14%)'
    }
  },
  {
    id: 'memantina',
    title: 'Memantina',
    entity_type: 'drug',
    tags: ['#pharmacology/dementia', '#alzheimer', '#glutamatergic', '#nmda', '#neuroprotection'],
    summary: 'Antagonista no competitivo de afinidad moderada para los receptores NMDA del glutamato. Protege contra la excitotoxicidad glutamatérgica patológica sin interferir con la transmisión fisiológica.',
    drug_generic_name: 'Memantina',
    drug_brand_names: ['Ebixa', 'Akatinol', 'Namenda', 'Eutebrol'],
    drug_class: 'Cognitive Enhancer',
    neurotransmitters: ['Glutamato (Receptores NMDA)'],
    indications_fda: ['Enfermedad de Alzheimer moderada a severa'],
    indications_off_label: ['Demencia frontotemporal', 'Dolor neuropático', 'Trastorno obsesivo-compulsivo refractario'],
    half_life_hours: '60 a 100 horas',
    dosing_range_mg: '10 a 20 mg/día (titulación semanal escalonada: 5 -> 10 -> 15 -> 20 mg)',
    latency_days: '4 a 8 semanas',
    pregnancy_category: 'Categoría B',
    mechanism_of_action: 'Bloqueo canalicular dependiente de voltaje de los receptores NMDA. En condiciones basales patológicas de liberación tónica crónica de glutamato, la memantina bloquea la entrada excesiva de calcio neuronal, previniendo la apoptosis y muerte celular. Ante una despolarización fisiológica intensa por aprendizaje, se desprende del canal permitiendo la plasticidad sináptica.',
    psychotherapy_impact: [
      'Permite mantener la autonomía en actividades básicas de la vida diaria (vestirse, comer, aseo personal).',
      'Suele combinarse con Donepezilo en etapas moderadas-avanzadas (sinergia AChEI + NMDA).'
    ],
    side_effects_monitoring: ['Mareos y cefalea leve', 'Confusión transitoria al inicio', 'Constipación e hipertensión leve'],
    black_box_warnings: ['Ajuste riguroso de dosis en insuficiencia renal moderada a grave (depuración de creatinina <30 mL/min).'],
    gold_standard_for: ['Alzheimer en fases moderada y avanzada (sola o en combinación fija con Donepezilo)'],
    emergency_red_flags: ['Alucinaciones de novo o agitación psicomotriz tras el aumento de dosis'],
    pharmacokinetics: {
      bioavailability_percent: '100% oral independiente de alimentos',
      protein_binding_percent: '45% (baja unión)',
      peak_plasma_tmax: '3 a 7 horas',
      half_life_parent: '60 a 100 horas',
      steady_state_days: '14 a 20 días',
      washout_period: '14 días',
      cyp450_enzymes: ['Metabolismo hepático mínimo; casi no pasa por CYP450'],
      elimination_route: 'Eliminación 100% renal inalterada por filtración glomerular y secreción tubular'
    }
  },

  // --- INFANTOJUVENIL Y TDAH (Genially 678058c79634651453c5ee65) ---
  {
    id: 'metilfenidato',
    title: 'Metilfenidato (Ritalina / Concerta OROS)',
    entity_type: 'drug',
    tags: ['#pharmacology/adhd', '#pediatric', '#stimulant', '#dopamine', '#executive_function'],
    summary: 'Psicoestimulante de primera línea para TDAH y Narcolepsia. Inhibidor potente de la recaptación de dopamina y noradrenalina que optimiza la corteza prefrontal.',
    drug_generic_name: 'Clorhidrato de Metilfenidato',
    drug_brand_names: ['Ritalina (IR)', 'Ritalina LA', 'Concerta OROS', 'Rubifen', 'Aderan'],
    drug_class: 'Stimulant / ADHD',
    neurotransmitters: ['Dopamina (DAT)', 'Noradrenalina (NET) en corteza prefrontal dorsolateral'],
    indications_fda: ['Trastorno por Déficit de Atención con Hiperactividad (niños >6 años y adultos)', 'Narcolepsia'],
    indications_off_label: ['Depresión refractaria en adultos mayores apáticos', 'Fatiga asociada a cuidados paliativos o cáncer'],
    half_life_hours: '2 a 3 horas (fórmula IR); duración clínica de 10 a 12 horas en tecnología osmótica Concerta OROS',
    dosing_range_mg: '10 a 60 mg/día (Concerta: 18, 36, 54 mg matinal)',
    latency_days: 'Efecto inmediato (30 a 60 minutos tras la toma); no requiere semanas de latencia',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Bloqueo alostérico de los transportadores presinápticos de dopamina (DAT) y noradrenalina (NET) en la corteza prefrontal y el cuerpo estriado, incrementando la señal fásica neuronal y reduciendo el ruido basal, lo que restablece la función ejecutiva y el control inhibitorio.',
    psychotherapy_impact: [
      'Crea la "ventana neurobiológica" para que el niño o adulto pueda asimilar el entrenamiento en funciones ejecutivas y técnicas TCC de organización.',
      'No sustituye la intervención psicopedagógica y familiar; la terapia combinada es el gold standard empírico.',
      'Efecto rebote vespertino: irritabilidad cuando cae la concentración plasmática (planificar tareas complejas en la mañana).'
    ],
    side_effects_monitoring: [
      'Disminución del apetito diurno (vigilar curva de crecimiento en percentilos pediátricos)',
      'Insomnio de conciliación si se administra después de las 14:00 horas',
      'Taquicardia y elevación leve de la presión arterial (monitoreo periódico de TA y FC)',
      'Aparición o empeoramiento de tics motores o vocales'
    ],
    black_box_warnings: [
      'Alto potencial de abuso y dependencia en poblaciones con antecedentes de adicción.',
      'Descartar patología cardíaca estructural previa antes de la prescripción por riesgo de muerte súbita.'
    ],
    gold_standard_for: ['TDAH del niño, adolescente y adulto (1ª línea indiscutida con tamaño del efecto d = 0.8 a 1.0)'],
    emergency_red_flags: ['Dolor torácico opresivo con palpitaciones o síncope durante el esfuerzo físico'],
    pharmacokinetics: {
      bioavailability_percent: '30% por metabolismo de primer paso (fórmula IR)',
      protein_binding_percent: '15%',
      peak_plasma_tmax: '1 a 2 horas (IR) y 6 a 8 horas (segundo pico OROS)',
      half_life_parent: '2 a 3 horas',
      steady_state_days: '1 día (no se acumula)',
      washout_period: '24 a 48 horas',
      cyp450_enzymes: ['Metabolizado por carboxilesterasa CES1A1 en el hígado; no depende de CYP450'],
      elimination_route: 'Renal (90% en forma de ácido ritalínico inactivo)'
    }
  },

  // --- SUEÑO E HIPNÓTICOS (Genially 661d916f5c98e20014bbb43f) ---
  {
    id: 'zolpidem',
    title: 'Zolpidem',
    entity_type: 'drug',
    tags: ['#pharmacology/hypnotic', '#sleep', '#z_drug', '#gaba', '#insomnia'],
    summary: 'Hipnótico no benzodiazepínico (Fármaco Z) agonista selectivo de la subunidad alfa-1 del receptor GABA-A. Induce el sueño rápido preservando la arquitectura fisiológica sin relajación muscular pronunciada.',
    drug_generic_name: 'Hemitartrato de Zolpidem',
    drug_brand_names: ['Ambien', 'Somit', 'Stilnox', 'Dormizol'],
    drug_class: 'Z-Drug Non-BZD',
    neurotransmitters: ['GABA (subunidad alfa-1 del complejo GABA-A)'],
    indications_fda: ['Insomnio de conciliación a corto plazo (máximo 2 a 4 semanas)'],
    indications_off_label: ['Insomnio situacional o por jet lag'],
    half_life_hours: '2.4 a 2.6 horas (ultracorta: no genera resaca sedativa matinal)',
    dosing_range_mg: '5 a 10 mg inmediatamente antes de acostarse (mujeres y ancianos: 5 mg)',
    latency_days: 'Efecto hipnótico inmediato (15 a 30 minutos)',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Se une preferencialmente con alta afinidad al subtipo de receptor benzodiazepínico omega-1 (que contiene la subunidad alfa-1) del complejo macromolecular GABA-A, promoviendo el influjo de cloro e hiperpolarización selectiva de las vías inductoras del sueño en el núcleo preóptico ventrolateral del hipotálamo, sin alterar significativamente las fases de sueño profundo (fases 3 y 4 NREM) ni el sueño REM.',
    psychotherapy_impact: [
      'Herramienta de rescate temporal mientras se implementa la Terapia Cognitivo-Conductual para el Insomnio (TCC-I: restricción del sueño, control de estímulos y desmantelamiento de la ansiedad de desempeño nocturno).',
      'Riesgo de conductas complejas del sueño en estado de amnesia (sonambulismo, comer dormido, conducir autos dormido).'
    ],
    side_effects_monitoring: [
      'Amnesia retrógrada y anterógrada si el consultante no se acuesta de inmediato tras la toma',
      'Sensación de mareo y riesgo de caídas nocturnas en adultos mayores',
      'Tolerancia y dependencia si se prolonga más allá del mes de uso'
    ],
    black_box_warnings: [
      'Black-Box warning de la FDA por conductas complejas del sueño (sonambulismo, parasomnias y驾驶 nocturno con amnesia completa).'
    ],
    gold_standard_for: ['Insomnio agudo de conciliación donde se requiere preservar el rendimiento diurno matinal'],
    emergency_red_flags: ['Episodios de deambulación nocturna o ingesta compulsiva de alimentos sin recuerdo al día siguiente'],
    pharmacokinetics: {
      bioavailability_percent: '70% (disminuye si se toma con comidas grasas)',
      protein_binding_percent: '92%',
      peak_plasma_tmax: '0.5 a 1.5 horas',
      half_life_parent: '2.5 horas',
      steady_state_days: '1 día',
      washout_period: '24 horas',
      cyp450_enzymes: ['Metabolizado principalmente por CYP3A4 y en menor grado por CYP1A2'],
      elimination_route: 'Metabolitos inactivos por vía renal (60%) y biliar/fecal (40%)'
    }
  },

  // --- CONDUCTA, ADICCIONES Y ANTI-CRAVING (Genially 634eed94e1cd4e0012cd11b4) ---
  {
    id: 'naltrexona',
    title: 'Naltrexona',
    entity_type: 'drug',
    tags: ['#pharmacology/addiction', '#anti_craving', '#alcohol_use_disorder', '#opioid', '#relapse_prevention'],
    summary: 'Antagonista puro de los receptores opioides mu. Reduce el deseo compulsivo (craving) y el efecto placentero del consumo de alcohol y opiáceos en programas de rehabilitación.',
    drug_generic_name: 'Clorhidrato de Naltrexona',
    drug_brand_names: ['Revia', 'Vivitrol (depot mensual)', 'Naltima'],
    drug_class: 'Anti-Craving / Addiction',
    neurotransmitters: ['Sistema Opioide Endógeno (Receptores mu, kappa y delta)', 'Dopamina en núcleo accumbens'],
    indications_fda: ['Trastorno por Consumo de Alcohol (mantenimiento de la abstinencia)', 'Trastorno por Consumo de Opiáceos'],
    indications_off_label: ['Juego Patológico (Ludopatía)', 'Trastorno por Atracón y Obesidad (combinada con Bupropión - Contrave)', 'Tricotilomanía'],
    half_life_hours: '4 horas (fármaco madre) y 13 horas (6-beta-naltrexol: metabolito activo principal)',
    dosing_range_mg: '50 mg/día vía oral (o inyección intramuscular de 380 mg mensual)',
    latency_days: 'Bloqueo opioide inmediato; reducción del craving por alcohol evidente a las 2 semanas',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Bloqueo competitivo potente de los receptores opioides mu. En el alcoholismo, el etanol estimula la liberación de endorfinas que desinhiben la dopamina en el núcleo accumbens produciendo euforia; la naltrexona corta este circuito de recompensa química, de modo que si el consultante consume alcohol, no experimenta el refuerzo placentero que dispara la pérdida de control ("efecto de extinción farmacológica").',
    psychotherapy_impact: [
      'Potencia la prevención de recaídas en terapias cognitivo-conductuales y grupos de autoayuda.',
      'Disminuye la probabilidad de que un desliz puntual ("lapse") se transforme en una recaída masiva ("relapse").'
    ],
    side_effects_monitoring: ['Náuseas y dispepsia inicial', 'Cefaleas y astenia', 'Hepatotoxicidad a dosis elevadas (monitoreo periódico de enzimas hepáticas GOT/GPT)'],
    black_box_warnings: [
      'Contraindicación absoluta: desencadena síndrome de abstinencia agudo severo si el paciente tiene opiáceos en sangre (debe tener al menos 7 a 10 días libres de opioides).'
    ],
    gold_standard_for: ['Prevención de recaídas en el Trastorno por Consumo de Alcohol con craving elevado'],
    emergency_red_flags: ['Ictericia o elevación >3x de transaminasas hepáticas'],
    pharmacokinetics: {
      bioavailability_percent: '5% a 40% por alto metabolismo de primer paso hepático',
      protein_binding_percent: '21%',
      peak_plasma_tmax: '1 hora',
      half_life_parent: '4 horas (metabolito 6-beta-naltrexol: 13 horas)',
      steady_state_days: '3 días',
      washout_period: '3 a 5 días',
      cyp450_enzymes: ['Metabolizado por dihidrodiol deshidrogenasa hepática; no depende de citocromos CYP450'],
      elimination_route: 'Renal (metabolito conjugado)'
    }
  }
];

// ============================================================================
// CLINICAL CASES WITH SLIDES FROM GENIALLY 2026 LAUNCHER
// ============================================================================

export const geniallyClinicalCases: ClinicalCaseEntity[] = [
  {
    id: 'caso_clinico_tdm',
    title: 'Caso Clínico A: Depresión Mayor Severa con Anhedonia (TDM)',
    entity_type: 'case',
    tags: ['#case/tdm', '#depression', '#ssri', '#activation', '#genially2026'],
    summary: 'Consultante masculino de 42 años con cuadro depresivo mayor unipolar de 6 meses de evolución caracterizado por anhedonia total, fatiga psicomotriz severa e inhibición laboral.',
    case_domain: 'TDM',
    consultant_initials: 'M. R.',
    age: 42,
    chief_complaint: '"No siento ganas de levantarme de la cama; nada de lo que antes me apasionaba me produce la más mínima satisfacción y siento que mi mente funciona a cámara lenta."',
    history_of_present_illness: 'Comienzo insidioso tras despido laboral hace 8 meses. Pérdida de 6 kg de peso, despertar precoz a las 4:00 AM con rumiaciones de culpa ("Soy un lastre para mi familia"), abandono del cuidado personal y puntaje en SCL-90-R Dimensión Depresión con T > 75.',
    diagnostic_impression: 'Trastorno Depresivo Mayor, episodio único, grave sin características psicóticas (DSM-5-TR: 296.23 / CIE-11: 6A70).',
    differential_challenges: [
      'Descartar viraje a hipomanía latente previo (Trastorno Bipolar II no diagnosticado).',
      'Descartar hipotiroidismo primario mediante laboratorio con TSH y T4 libre.',
      'Evaluar ideación suicida con protocolo ECCS (actualmente sin plan letal activo; riesgo moderado por psychache).'
    ],
    pharmacological_strategy: [
      {
        drug: 'Sertralina',
        target_symptom: 'Ánimo deprimido y distorsiones cognitivas nucleares',
        dose_trajectory: 'Inicio 25 mg/día por 4 días -> 50 mg/día matinal. A la semana 4 se titula a 100 mg/día por respuesta parcial.',
        monitoring: 'Psicoeducación estricta sobre la latencia de 14 a 21 días y náuseas transitorias iniciales.'
      },
      {
        drug: 'Bupropión XL (co-adyuvante a semana 8)',
        target_symptom: 'Anhedonia residual, fatiga crónica diurna y falta de motivación',
        dose_trajectory: '150 mg/día matinal adicionado a Sertralina 100 mg (estrategia Wellbutrin + Zoloft = "Well-oft").',
        monitoring: 'Monitoreo de presión arterial y descarte de antecedentes comiciales/epilepsia.'
      }
    ],
    psychotherapy_synergy: 'TCC centrada en Activación Conductual (registro de placer y dominio) y desmantelamiento de la tríada cognitiva de Beck ("No sirvo para nada"). La medicación restaura la energía biofísica indispensable para que el paciente pueda cumplir con las tareas intersesión.',
    clinical_pearls: [
      'Perla Genially: En pacientes con anhedonia profunda y apatía marcada, los ISRS de perfil sedativo o puro pueden agravar el aplanamiento afectivo; la asociación con agentes dopaminérgicos (Bupropión) rescata la recompensa motivacional.',
      'Vigilar la ventana de los primeros 10 días: el incremento inicial de energía motriz puede preceder a la mejoría anímica, requiriendo monitoreo estrecho del riesgo autolesivo.'
    ],
    genially_slide_source: 'Lanzador Psicofarmacología 2026 — Caso Clínico TDM (Diapositivas 1 a 22, ID: 69c3f15fe824be1156c9ba6f)'
  },
  {
    id: 'caso_clinico_tlp',
    title: 'Caso Clínico B: Trastorno Límite de la Personalidad en Crisis (TLP)',
    entity_type: 'case',
    tags: ['#case/tlp', '#borderline', '#dbt', '#mood_stabilizer', '#safety_plan', '#genially2026'],
    summary: 'Consultante femenina de 24 años con diagnóstico de TLP en tratamiento ambulatorio que presenta escalada de autolesiones no suicidas, crisis de pánico por miedo al abandono e impulsividad.',
    case_domain: 'TLP',
    consultant_initials: 'L. S.',
    age: 24,
    chief_complaint: '"Cuando siento que mi pareja se aleja o no me responde los mensajes, la angustia en el pecho es tan insoportable que necesito cortarme para calmar el dolor por dentro."',
    history_of_present_illness: 'Historia de inestabilidad afectiva extrema, relaciones interpersonales caóticas con idealización y devaluación súbitas, atracones alimentarios nocturnos y múltiples ingresos a guardias hospitalarias por cortes en antebrazos tras discusiones de pareja.',
    diagnostic_impression: 'Trastorno Límite de la Personalidad (DSM-5-TR: 301.83 / CIE-11: 6D10 & 6D11.5) con desregulación emocional severa.',
    differential_challenges: [
      'Diferenciar de Trastorno Bipolar de ciclación rápida: en TLP los cambios de humor duran horas y son disparados por eventos interpersonales; en Bipolaridad los episodios duran semanas sin necesidad de detonante vincular.',
      'Evitar la polifarmacia masiva (sedantes múltiples, BZDs de alta potencia) que desinhibe la impulsividad y perpetúa la sensación de invalidez.'
    ],
    pharmacological_strategy: [
      {
        drug: 'Lamotrigina',
        target_symptom: 'Desregulación afectiva e inestabilidad del estado de ánimo',
        dose_trajectory: 'Titulación extremadamente lenta anti-Stevens-Johnson: 25 mg/día por 2 semanas -> 50 mg/día por 2 semanas -> hasta 150-200 mg/día.',
        monitoring: 'Inspección de piel ante cualquier erupción cutánea o rash febril.'
      },
      {
        drug: 'Quetiapina (dosis baja nocturna)',
        target_symptom: 'Hiperarousal nocturno, insomnio de conciliación e impulsividad de autolesión',
        dose_trajectory: '25 a 50 mg al acostarse.',
        monitoring: 'Sedación matinal y peso corporal.'
      }
    ],
    psychotherapy_synergy: 'Terapia Dialéctico Conductual (DBT) individual semanal + Grupo de Entrenamiento en Habilidades (Mente Sabia, TIPP para crisis, Aceptación Radical y Efectividad Interpersonal) + Plan de Seguridad de Stanley & Brown activo bajo custodia compartida.',
    clinical_pearls: [
      'Perla Genially: En TLP, ningún psicofármaco cura el trastorno nuclear; la psicoterapia DBT es el tratamiento de 1ª elección indiscutido. La farmacoterapia solo cumple un rol coadyuvante de estabilización para permitir la adquisición de habilidades.',
      'Las Benzodiazepinas de vida media corta (Alprazolam) están contraindicadas en TLP por alto riesgo de desinhibición paradójica del impulso suicida y dependencia química.'
    ],
    genially_slide_source: 'Lanzador Psicofarmacología 2026 — Caso Clínico TLP (Diapositivas 1 a 10, ID: 665f3f87625942001457d079)'
  },
  {
    id: 'caso_clinico_psicosis',
    title: 'Caso Clínico C: Primer Episodio Psicótico en Adulto Joven',
    entity_type: 'case',
    tags: ['#case/psychosis', '#schizophrenia', '#antipsychotic', '#first_episode', '#genially2026'],
    summary: 'Consultante masculino de 21 años derivado por la familia tras 3 meses de aislamiento progresivo, suspicacia persecutoria marcada y convicción delirante de estar siendo vigilado.',
    case_domain: 'Psicosis',
    consultant_initials: 'T. V.',
    age: 21,
    chief_complaint: '"Los vecinos instalaron dispositivos en el módem de internet para intervenir mis pensamientos; escucho susurros en las paredes que me insultan cuando intento dormir."',
    history_of_present_illness: 'Estudiante universitario con caída abrupta del rendimiento académico. Aislamiento en habitación a oscuras con persianas cerradas y papel aluminio en las ventanas. Desorganización del discurso con pensamiento tangencial, alucinaciones auditivas fonemáticas en tercera persona y delirio persecutorio no encapsulado.',
    diagnostic_impression: 'Primer Episodio Psicótico / Trastorno Esquizofreniforme (DSM-5-TR: 295.40 / CIE-11: 6A20).',
    differential_challenges: [
      'Screening toxicológico de drogas de abuso en orina (descartar psicosis inducida por cannabis o estimulantes sintéticos).',
      'Neuroimagen (RMN cerebral con contraste) y analítica completa para descartar encefalitis autoinmune anti-NMDAR o lesión ocupante de espacio.'
    ],
    pharmacological_strategy: [
      {
        drug: 'Aripiprazol',
        target_symptom: 'Alucinaciones auditivas, convicción delirante y preservación cognitiva',
        dose_trajectory: 'Inicio 5 mg/día matinal por 3 días -> titular a 10-15 mg/día.',
        monitoring: 'Evaluar acatisia (inquietud motora en piernas) en las primeras 2 semanas y monitoreo metabólico basal.'
      }
    ],
    psychotherapy_synergy: 'Intervención temprana en psicosis (FEP): Alianza terapéutica no confrontativa con el delirio ("Entiendo que escuchar esas voces te cause un terror enorme, trabajemos para que puedas estar más tranquilo"), psicoeducación familiar y prevención del estigma.',
    clinical_pearls: [
      'Perla Genially: En primeros episodios psicóticos se debe priorizar antipsicóticos atípicos con bajo perfil de sedación y bajo riesgo metabólico/extrapiramidal (como Aripiprazol), titulando con dosis mínimas eficaces ("Start low, go slow").',
      'Nunca confrontar de choque la falsedad de la idea delirante en la primera entrevista; validar el afecto de angustia y construir una alianza de seguridad.'
    ],
    genially_slide_source: 'Lanzador Psicofarmacología 2026 — Caso Clínico Psicosis y Antipsicóticos (Diapositivas 1 a 28, ID: 6643b4f5241f7500142c7dd6)'
  }
];
