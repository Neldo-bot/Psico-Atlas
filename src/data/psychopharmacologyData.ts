import { PsychotropicDrugEntity } from '../types/vaultTypes';

export const psychotropicDrugs: PsychotropicDrugEntity[] = [
  // --- INHIBIDORES SELECTIVOS DE LA RECAPTACIÓN DE SEROTONINA (ISRS) ---
  {
    id: 'sertralina',
    title: 'Sertralina',
    entity_type: 'drug',
    tags: ['#pharmacology/ssri', '#depression', '#anxiety', '#ocd', '#ptsd'],
    summary: 'ISRS de primera elección con acción dual leve sobre DAT (dopamina) y receptores σ1. Excelente perfil de seguridad cardiovascular y tolerabilidad.',
    drug_generic_name: 'Sertralina',
    drug_brand_names: ['Zoloft', 'Aseren', 'Besitran', 'Aremis'],
    drug_class: 'SSRI',
    neurotransmitters: ['5-HT (Serotonina vía SERT)', 'Dopamina (DAT leve)', 'Receptor Sigma-1 (σ1)'],
    indications_fda: [
      'Trastorno Depresivo Mayor (TDM)',
      'Trastorno Obsesivo-Compulsivo (TOC)',
      'Trastorno de Pánico con/sin Agorafobia',
      'Trastorno por Estrés Postraumático (TEPT)',
      'Trastorno de Ansiedad Social (Fobia Social)',
      'Trastorno Disfórico Premenstrual (TDPM)'
    ],
    indications_off_label: [
      'Trastorno de Ansiedad Generalizada (TAG)',
      'Trastorno de la Conducta Alimentaria (Bulimia nerviosa)',
      'Eyaculación precoz'
    ],
    half_life_hours: '26 h (Metabolito N-desmetilsertralina: 62–104 h)',
    dosing_range_mg: '50 – 200 mg/día (Inicio: 25–50 mg en toma matinal)',
    latency_days: '14 a 28 días (Efectos adversos digestivos/ansiedad aparecen en días 1–5 antes del beneficio anímico)',
    pregnancy_category: 'Categoría C (Considerada junto a fluoxetina una de las más seguras si es imprescindible)',
    mechanism_of_action: 'Bloqueo selectivo de la bomba de recaptación de serotonina (SERT), induciendo a mediano plazo la desensibilización de autorreceptores presinápticos 5-HT1A y 5-HT1D. Su leve afinidad por el transportador de dopamina (DAT) le confiere un perfil activador favorable para depresión con anhedonia, fatiga o hipersomnia.',
    psychotherapy_impact: [
      'Acatisia/Inquietud inicial (días 1–10): No confundir con exacerbación del cuadro ansioso; psicoeducar para evitar abandono terapéutico.',
      'Embotamiento afectivo ("Emotional Blunting"): A dosis altas (>150 mg), algunos consultantes reportan aplanamiento vivencial que puede atenuar el involucramiento en técnicas de exposición o trabajo emocional.',
      'Disfunción sexual (30–40%): Anorgasmia o disminución de la libido; requiere escucha empática activa en sesión para no dañar la alianza.'
    ],
    side_effects_monitoring: [
      'Gastrointestinales iniciales (náuseas, diarrea, dispepsia por receptores 5-HT3 periféricos)',
      'Cefalea y temblor fino distal',
      'Insomnio o somnolencia diurna (ajustar horario de toma)',
      'Hiponatremia en adultos mayores (SIADH)'
    ],
    black_box_warnings: [
      'Riesgo paradójico de ideación y conductas suicidas en niños, adolescentes y adultos jóvenes (<25 años) en las primeras 4 semanas de inicio o ajuste de dosis.',
      'Descartar Trastorno Bipolar oculto: riesgo de viraje a manía/hipomanía o ciclación rápida.',
      'Síndrome Serotoninérgico al asociar con IMAO, triptanes, tramadol, litio o hierba de San Juan.'
    ],
    gold_standard_for: [
      'Depresión Mayor Unipolar (1ª Línea de eficacia y tolerabilidad)',
      'Trastorno de Pánico combinado con Clonazepam inicial a corto plazo',
      'TOC (requiere dosis más elevadas, frecuentemente 150–200 mg/día)',
      'Trastornos Depresivos en pacientes con patología cardíaca previa'
    ],
    emergency_red_flags: [
      'Hipertermia + clonus muscular + diarrea + agitación (Alerta Síndrome Serotoninérgico)',
      'Aparición de verborragia, insomnio sin fatiga y gastos impulsivos (Switch Maníaco)'
    ]
  },
  {
    id: 'fluoxetina',
    title: 'Fluoxetina',
    entity_type: 'drug',
    tags: ['#pharmacology/ssri', '#depression', '#bulimia', '#activation'],
    summary: 'Primer ISRS histórico. Perfil activador/energizante por antagonismo 5-HT2C. Vida media muy prolongada que minimiza el síndrome de discontinuación.',
    drug_generic_name: 'Fluoxetina',
    drug_brand_names: ['Prozac', 'Foxetin', 'Neupax', 'Saurat'],
    drug_class: 'SSRI',
    neurotransmitters: ['5-HT (Serotonina vía SERT)', 'Dopamina y Noradrenalina (antagonismo 5-HT2C)'],
    indications_fda: [
      'Trastorno Depresivo Mayor (adultos y niños >8 años)',
      'Trastorno Obsesivo-Compulsivo (TOC)',
      'Bulimia Nerviosa (único antidepresivo aprobado por FDA para este cuadro a 60 mg/día)',
      'Trastorno de Pánico',
      'Depresión Bipolar (en combinación fija con Olanzapina - Symbyax)'
    ],
    indications_off_label: ['Trastorno por Atracón', 'Dismorfia Corporal', 'Fobia Social'],
    half_life_hours: '48 – 72 h (Metabolito activo Norfluoxetina: 7 a 15 días)',
    dosing_range_mg: '20 – 80 mg/día (TDM: 20–40 mg; Bulimia: 60 mg/día)',
    latency_days: '14 a 28 días',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Inhibición potente de SERT más antagonismo en receptores 5-HT2C. El bloqueo 5-HT2C desinhibe la liberación de dopamina y noradrenalina en corteza prefrontal, confiriéndole un marcado efecto pro-cognitivo y energizante.',
    psychotherapy_impact: [
      'Excelente en pacientes con inhibición psicomotriz, anhedonia y fatiga crónica.',
      'Evitar o usar con mucha precaución en pacientes con marcada hiperarousal, pánico severo o agitación motora inicial.',
      'Olvido de tomas: Gracias a su semivida de semanas, si el consultante olvida una toma ocasional, no genera síntomas de retirada abruptos.'
    ],
    side_effects_monitoring: [
      'Ansiedad e insomnio matutino en las primeras dos semanas',
      'Pérdida inicial de peso o apetito',
      'Disfunción eréctil y anorgasmia',
      'Inhibidor potente de CYP2D6 (múltiples interacciones farmacocinéticas)'
    ],
    black_box_warnings: [
      'Black-Box pediátrico de ideación suicida al inicio.',
      'Requiere 5 semanas de lavado antes de rotar a un IMAO debido a la semivida de la norfluoxetina.'
    ],
    gold_standard_for: [
      'Bulimia Nerviosa (a dosis alta de 60 mg)',
      'Depresión unipolar en niños y adolescentes (con indicación estricta)',
      'Depresión unipolar atípica con hipersomnia y anergia'
    ]
  },
  {
    id: 'escitalopram',
    title: 'Escitalopram',
    entity_type: 'drug',
    tags: ['#pharmacology/ssri', '#anxiety', '#depression', '#clean_profile'],
    summary: 'El ISRS más puro y selectivo (S-enantiómero). Menor tasa de interacciones por citocromo P450 y acción ansiolítica potente y limpia.',
    drug_generic_name: 'Escitalopram',
    drug_brand_names: ['Lexapro', 'Cipralex', 'Meridian', 'Humorap'],
    drug_class: 'SSRI',
    neurotransmitters: ['5-HT (Afinidad alostérica exclusiva por SERT)'],
    indications_fda: ['Trastorno Depresivo Mayor', 'Trastorno de Ansiedad Generalizada (TAG)'],
    indications_off_label: ['TOC', 'Trastorno de Pánico', 'Fobia Social', 'Trastorno de Ansiedad por Enfermedad'],
    half_life_hours: '27 – 32 h',
    dosing_range_mg: '10 – 20 mg/día (Dosis inicial: 5–10 mg)',
    latency_days: '10 a 21 días (Suele mostrar inicio de mejoría algo más rápido que otros ISRS)',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Se une con altísima afinidad tanto al sitio catalítico primario como al sitio alostérico del SERT, logrando una inhibición casi 100% pura de la recaptación de serotonina sin interacción significativa con receptores histaminérgicos, muscarínicos o dopaminérgicos.',
    psychotherapy_impact: [
      'Fármaco ideal para pacientes polimedicados o añosos por su mínimo metabolismo de interacción.',
      'Control rápido de la rumiación cognitiva ansiosa, facilitando la reestructuración cognitiva en TCC.'
    ],
    side_effects_monitoring: [
      'Náuseas y sequedad bucal transitorias',
      'Astenia o somnolencia leve en algunos consultantes',
      'Riesgo dependiente de dosis de prolongación del intervalo QTc (dosis máxima en ancianos: 10 mg)'
    ],
    black_box_warnings: [
      'Ideación suicida en jóvenes <25 años.',
      'Precaución con antecedentes de arritmias cardíacas o síndrome de QT largo.'
    ],
    gold_standard_for: [
      'Trastorno de Ansiedad Generalizada (TAG)',
      'Depresión con marcada comorbilidad ansiosa',
      'Pacientes con tratamiento médico concurrente (bajas interacciones)'
    ]
  },
  {
    id: 'paroxetina',
    title: 'Paroxetina',
    entity_type: 'drug',
    tags: ['#pharmacology/ssri', '#anxiety', '#panic', '#sedative'],
    summary: 'ISRS más sedante y potente sobre SERT, con leve acción anticolinérgica (M1) e inhibición de recaptación de noradrenalina a dosis altas. Síndrome de discontinuación más severo.',
    drug_generic_name: 'Paroxetina',
    drug_brand_names: ['Paxil', 'Seroxat', 'Aropax', 'Psicoasten'],
    drug_class: 'SSRI',
    neurotransmitters: ['5-HT (SERT)', 'Anticolinérgico muscarínico leve (M1)', 'NET a dosis altas'],
    indications_fda: ['TDM', 'Trastorno de Pánico', 'Fobia Social', 'TAG', 'TEPT', 'TOC'],
    indications_off_label: ['Eyaculación precoz', 'Sofocos menopáusicos'],
    half_life_hours: '21 – 24 h',
    dosing_range_mg: '20 – 50 mg/día',
    latency_days: '14 a 28 días',
    pregnancy_category: 'Categoría D (Riesgo cardiovascular fetal: defectos septales; evitar en mujeres con deseos de embarazo)',
    mechanism_of_action: 'Bloqueo sumamente potente del transportador SERT con afinidad anticolinérgica moderada que explica su efecto sedativo temprano y mayor propensión al aumento de peso y estreñimiento.',
    psychotherapy_impact: [
      'Muy eficaz para mitigar ataques de pánico agudos por su perfil sedativo.',
      '¡Atención clínica a la suspensión!: Nunca retirar de forma súbita. Genera el síndrome de retirada más intenso entre los ISRS (mareos tipo "descarga eléctrica", náuseas, llanto inexplicable, irritabilidad).'
    ],
    side_effects_monitoring: [
      'Aumento de peso y letargia matutina',
      'Mayor tasa de disfunción sexual entre los ISRS',
      'Efectos anticolinérgicos (boca seca, constipación, visión borrosa)'
    ],
    black_box_warnings: [
      'Contraindicada en el primer trimestre de embarazo por teratogenicidad cardiovascular.',
      'Síndrome de retirada abrupta severo.'
    ],
    gold_standard_for: [
      'Trastorno de Pánico severo con insomnio de inicio',
      'Fobia Social con marcada activación autonómica'
    ]
  },

  // --- ANTIDEPRESIVOS DUALES (IRSN) ---
  {
    id: 'venlafaxina',
    title: 'Venlafaxina',
    entity_type: 'drug',
    tags: ['#pharmacology/snri', '#depression', '#anxiety', '#pain'],
    summary: 'Inhibidor dual de recaptación de serotonina y noradrenalina. A dosis <150 mg actúa casi puramente como ISRS; a dosis ≥150 mg suma bloqueo noradrenérgico.',
    drug_generic_name: 'Venlafaxina',
    drug_brand_names: ['Effexor', 'Efexor XR', 'Elafax', 'Sesaren'],
    drug_class: 'SNRI',
    neurotransmitters: ['5-HT (a cualquier dosis)', 'Noradrenalina / NA (a partir de 150 mg/día)', 'Dopamina leve en corteza frontal'],
    indications_fda: ['Trastorno Depresivo Mayor', 'TAG', 'Trastorno de Pánico', 'Fobia Social'],
    indications_off_label: ['Dolor neuropático', 'Fibromialgia', 'Prevención de migrañas', 'TDAH en adultos'],
    half_life_hours: '5 h (Metabolito activo Desvenlafaxina: 11 h; formulación XR permite una toma diaria)',
    dosing_range_mg: '75 – 225 mg/día (Casos hospitalarios refractarios hasta 375 mg/día)',
    latency_days: '14 a 28 días',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'A dosis bajas (75 mg) inhibe selectivamente el transportador SERT. Al escalar a dosis terapéuticas medias y altas (150–225 mg), bloquea eficazmente el transportador de noradrenalina (NET), aumentando los niveles de NA y DA en la corteza prefrontal.',
    psychotherapy_impact: [
      'Excelente fármaco para pacientes con abulia, fatiga extrema, sensación de pesadez psicomotriz o dolor somático comórbido.',
      'Controlar la tensión arterial en sesión o solicitar monitoreo médico, ya que el tono adrenérgico puede elevar la TA diastólica.',
      'Síndrome de discontinuación muy severo si se omite una sola dosis (náuseas intensas, sensación de descargas en la cabeza o "brain zaps").'
    ],
    side_effects_monitoring: [
      'Elevación de la presión arterial y taquicardia',
      'Sudoración profusa (diaforesis nocturna)',
      'Náuseas y pérdida de peso inicial',
      'Insomnio y pesadillas vívidas'
    ],
    black_box_warnings: [
      'Ideación suicida en adultos jóvenes al inicio.',
      'Crisis hipertensivas en pacientes con hipertensión arterial no controlada.'
    ],
    gold_standard_for: [
      'Depresión Mayor melancólica o resistente que no respondió a dos ensayos con ISRS',
      'Depresión combinada con dolor crónico o fibromialgia',
      'TAG refractario'
    ]
  },
  {
    id: 'duloxetina',
    title: 'Duloxetina',
    entity_type: 'drug',
    tags: ['#pharmacology/snri', '#depression', '#fibromyalgia', '#pain'],
    summary: 'Dual balanceado desde la dosis inicial (inhibe 5-HT y NA en proporción balanceada). Aprobado específicamente para dolor crónico y fibromialgia.',
    drug_generic_name: 'Duloxetina',
    drug_brand_names: ['Cymbalta', 'Duxetin', 'Duloctil'],
    drug_class: 'SNRI',
    neurotransmitters: ['5-HT (Serotonina)', 'Noradrenalina (NA)'],
    indications_fda: [
      'TDM',
      'Trastorno de Ansiedad Generalizada',
      'Fibromialgia',
      'Dolor por Neuropatía Periférica Diabética',
      'Dolor Musculoesquelético Crónico'
    ],
    indications_off_label: ['Incontinencia urinaria de esfuerzo', 'Depresión geriátrica'],
    half_life_hours: '12 h',
    dosing_range_mg: '30 – 120 mg/día (Dosis habitual: 60 mg/día)',
    latency_days: '14 a 28 días (Efecto analgésico puede evidenciarse antes, en 7–14 días)',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Inhibe simultáneamente SERT y NET desde dosis bajas. Al elevar noradrenalina y serotonina en las vías descendentes inhibitorias del dolor de la médula espinal, actúa como un potente modulador del umbral analgésico central.',
    psychotherapy_impact: [
      'Alivio del sufrimiento físico somatomorfo que perpetúa la desesperanza en consultantes con cuadros dolorosos crónicos.',
      'Facilita la activación conductual al reducir las quejas corporales que limitan el movimiento.'
    ],
    side_effects_monitoring: [
      'Náuseas, estreñimiento y sequedad bucal',
      'Somnolencia diurna o fatiga paradójica',
      'Monitoreo de función hepática (contraindicada en hepatopatías o alcoholismo activo)'
    ],
    black_box_warnings: ['Ideación suicida en jóvenes', 'Toxicidad hepática en pacientes con cirrosis o abuso alcohólico.'],
    gold_standard_for: [
      'Depresión Mayor comórbida con Fibromialgia o dolor neuropático',
      'TAG con síntomas somáticos predominantes'
    ]
  },

  // --- ANTIDEPRESIVOS ATÍPICOS Y MULTIMODALES ---
  {
    id: 'bupropion',
    title: 'Bupropión',
    entity_type: 'drug',
    tags: ['#pharmacology/atypical', '#depression', '#adhd', '#smoking_cessation', '#no_sexual_dysfunction'],
    summary: 'Inhibidor de la recaptación de dopamina y noradrenalina (NDRI). Cero disfunción sexual, no aumenta de peso. Muy estimulante.',
    drug_generic_name: 'Bupropión (Anfebutamona)',
    drug_brand_names: ['Wellbutrin', 'Zyban', 'Odranal', 'Buprex'],
    drug_class: 'Atypical Antidepressant',
    neurotransmitters: ['Dopamina (DAT)', 'Noradrenalina (NET)', 'Antagonista nicotínico'],
    indications_fda: ['Trastorno Depresivo Mayor', 'Trastorno Afectivo Estacional', 'Cesación Tabáquica (Zyban)'],
    indications_off_label: [
      'TDAH en adultos',
      'Reversión de la disfunción sexual inducida por ISRS',
      'Apatía o astenia post-ACV',
      'Depresión Bipolar (menor tasa de viraje maníaco)'
    ],
    half_life_hours: '20 – 37 h (Formulaciones XL / SR)',
    dosing_range_mg: '150 – 300 mg/día (Máximo: 450 mg/día)',
    latency_days: '14 a 28 días',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Bloqueo de transportadores de recaptación de noradrenalina (NET) y dopamina (DAT). No tiene acción serotoninérgica directa. Antagonista no competitivo de receptores nicotínicos centrales.',
    psychotherapy_impact: [
      'Fármaco de rescate para el paciente que rehúsa medicarse por miedo a engordar o a perder la libido.',
      '¡Alerta clínica de contraindicación!: Estrictamente contraindicado en bulimia, anorexia nerviosa y pacientes con abstinencia alcohólica por reducción drástica del umbral convulsivo.',
      'Aumenta el foco atencional y la motivación intrínseca.'
    ],
    side_effects_monitoring: [
      'Insomnio (tomar siempre por la mañana)',
      'Ansiedad, temblor y agitación en pacientes con vulnerabilidad ansiosa',
      'Pérdida de apetito y cefalea',
      'Convulsiones (riesgo dosis-dependiente >450 mg)'
    ],
    black_box_warnings: [
      'Riesgo de crisis comiciales (convulsiones) en trastornos de la conducta alimentaria.',
      'Monitoreo psiquiátrico en deshabituación tabáquica por síntomas neuropsiquiátricos raros.'
    ],
    gold_standard_for: [
      'Depresión con anhedonia severa, fatiga y enlentecimiento psicomotor',
      'Depresión en pacientes donde la función sexual es prioritaria',
      'Coadyuvante para revertir anorgasmia por ISRS'
    ]
  },
  {
    id: 'mirtazapina',
    title: 'Mirtazapina',
    entity_type: 'drug',
    tags: ['#pharmacology/atypical', '#depression', '#insomnia', '#anorexia', '#sedative'],
    summary: 'Antidepresivo NaSSA (Noradrenérgico y Serotoninérgico Específico). Fuerte efecto sedativo e inductor del apetito a dosis bajas (15 mg).',
    drug_generic_name: 'Mirtazapina',
    drug_brand_names: ['Remeron', 'Comenter', 'Zispin'],
    drug_class: 'Atypical Antidepressant',
    neurotransmitters: ['Antagonista α2 presináptico (aumenta NA y 5-HT)', 'Antagonista 5-HT2A, 5-HT2C, 5-HT3', 'Antagonista potente H1 (histamina)'],
    indications_fda: ['Trastorno Depresivo Mayor'],
    indications_off_label: ['Insomnio crónico resistente', 'Caquexia o pérdida severa de peso en ancianos o cáncer', 'Náuseas refractarias', 'TEPT'],
    half_life_hours: '20 – 40 h',
    dosing_range_mg: '15 – 45 mg/día en toma nocturna',
    latency_days: 'El efecto hipnótico es inmediato (día 1); el efecto antidepresivo toma 14–28 días',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Bloquea los autorreceptores y heterorreceptores α2 presinápticos, "desfrenando" la liberación de serotonina y noradrenalina. Al bloquear específicamente 5-HT2 y 5-HT3, redirige la serotonina hacia receptores 5-HT1A (ansiolíticos), evitando náuseas y disfunción sexual. Su altísima afinidad por receptores H1 a 15 mg genera potente sedación.',
    psychotherapy_impact: [
      'Paradoja de dosis: A 15 mg es sumamente sedante por bloqueo histamínico H1. Al subir a 30–45 mg, el aumento del tono noradrenérgico contrarresta la sedación y el paciente se siente más despierto.',
      'Monitorear ganancia de peso (voracidad por carbohidratos): trabajar hábitos conductuales con el consultante.'
    ],
    side_effects_monitoring: [
      'Aumento marcado del apetito y peso corporal',
      'Sedación profunda matutina inicial ("pesadez")',
      'Sequedad bucal y mareos',
      'Raro pero descrito: agranulocitosis (fiebre o dolor de garganta súbito)'
    ],
    black_box_warnings: ['Ideación suicida en jóvenes al inicio de terapia.'],
    gold_standard_for: [
      'Depresión melancólica con insomnio de conciliación severo y pérdida de peso',
      'Depresión en adultos mayores caquécticos o con náuseas crónicas',
      'Combinación ("California Rocket Fuel": Venlafaxina + Mirtazapina) en depresión resistente'
    ]
  },

  // --- ESTABILIZADORES DEL ÁNIMO (EUTIMIZANTES) ---
  {
    id: 'litio',
    title: 'Carbonato de Litio',
    entity_type: 'drug',
    tags: ['#pharmacology/mood_stabilizer', '#bipolar', '#suicide_prevention', '#gold_standard'],
    summary: 'Gold Standard indiscutible en Trastorno Bipolar y profilaxis de manía/depresión. Único fármaco con efecto antisuicida directo comprobado. Ventana terapéutica estrecha (0.6–1.2 mEq/L).',
    drug_generic_name: 'Carbonato de Litio',
    drug_brand_names: ['Eskalith', 'Lithobid', 'Ceglution', 'Carbolitium'],
    drug_class: 'Mood Stabilizer',
    neurotransmitters: ['Modulación de cascadas de segundos mensajeros (vía IP3/DAG, GSK-3β, neurogénesis BDNF)'],
    indications_fda: [
      'Trastorno Bipolar I (Episodio Maníaco Agudo)',
      'Trastorno Bipolar I y II (Terapia de Mantenimiento / Prevención de Recaídas)'
    ],
    indications_off_label: [
      'Potenciación en Depresión Mayor Unipolar Resistente',
      'Conducta suicida recurrente independiente del diagnóstico',
      'Agresividad impulsiva en traumatismo de cráneo o discapacidad'
    ],
    half_life_hours: '18 – 24 h (Eliminación 100% renal por filtración glomerular)',
    dosing_range_mg: '600 – 1200 mg/día (Ajustado obligatoriamente por Litemia)',
    latency_days: '7 a 14 días para respuesta maníaca aguda; meses para consolidación profiláctica',
    pregnancy_category: 'Categoría D (Riesgo teratogénico de Anomalía de Ebstein cardiovascular en 1er trimestre; requiere ecocardiograma fetal)',
    therapeutic_window: '0.6 – 1.2 mEq/L (Mantenimiento: 0.6–0.8 mEq/L; Manía aguda: 0.8–1.2 mEq/L; Toxicidad: >1.5 mEq/L)',
    mechanism_of_action: 'Catión monovalente que compite con el sodio. Inhibe la inositol monofosfatasa (IMPasa) reduciendo el ciclo del fosfoinositol neuronal hiperactivo en manía, e inhibe la glucógeno sintasa quinasa-3 (GSK-3), promoviendo neuroprotección, plasticidad sináptica y expresión de BDNF y Bcl-2.',
    psychotherapy_impact: [
      '¡Efecto Anti-Suicida!: Reduce el riesgo de suicidio consumado e intentos en más de un 80% en trastorno bipolar y depresión unipolar recurrente.',
      'Adherencia Terapéutica: Tema crucial en las sesiones de psicología. El paciente extraña la hipomanía/creatividad y suele suspenderlo; trabajar aceptación de la cronicidad y psicoeducación.',
      'Revisar si el consultante toma antiinflamatorios (AINEs como Ibuprofeno) o diuréticos: ¡disminuyen la eliminación renal y pueden disparar una intoxicación por litio!'
    ],
    side_effects_monitoring: [
      'Litemia plasmática periódica (extraer sangre exactamente a las 12 h de la última toma)',
      'Función tiroidea (riesgo de hipotiroidismo inducido por litio; tratable con levotiroxina)',
      'Función renal (creatinina, filtrado glomerular; riesgo de diabetes insípida nefrogénica)',
      'Temblor fino de manos (puede mitigarse con propranolol)',
      'Polidipsia (mucha sed) y poliuria (orinar mucho)'
    ],
    black_box_warnings: [
      'Toxicidad por litio vinculada estrechamente a niveles séricos: la dosis tóxica es muy cercana a la terapéutica.',
      'No administrar en insuficiencia renal severa o deshidratación aguda.'
    ],
    gold_standard_for: [
      'Trastorno Bipolar I (Episodio maníaco y prevención de recaídas a largo plazo)',
      'Prevención específica del Suicidio en trastornos afectivos',
      'Potenciación de antidepresivos en TDM refractario'
    ],
    emergency_red_flags: [
      'Toxicidad leve a moderada (1.5 - 2.0 mEq/L): Temblor grueso, náuseas, vómitos, diarrea, debilidad muscular, ataxia.',
      'Toxicidad severa (>2.0 mEq/L): Confusión, disartria, nistagmo, fasciculaciones, convulsiones, coma y muerte. ¡Derivación médica de urgencia para hidratación o hemodiálisis!'
    ]
  },
  {
    id: 'lamotrigina',
    title: 'Lamotrigina',
    entity_type: 'drug',
    tags: ['#pharmacology/mood_stabilizer', '#bipolar', '#bipolar_depression', '#gold_standard'],
    summary: 'Gold Standard para la depresión bipolar ("estabiliza desde abajo"). No genera aumento de peso. Requiere titulación lenta por riesgo de Síndrome de Stevens-Johnson.',
    drug_generic_name: 'Lamotrigina',
    drug_brand_names: ['Lamictal', 'Lamotrix', 'Latrigin'],
    drug_class: 'Mood Stabilizer',
    neurotransmitters: ['Bloqueo de canales de sodio dependientes de voltaje', 'Inhibición de liberación de Glutamato'],
    indications_fda: [
      'Trastorno Bipolar I (Terapia de Mantenimiento para retrasar episodios depresivos)',
      'Epilepsia (Crisis focales y generalizadas)'
    ],
    indications_off_label: [
      'Depresión Bipolar Aguda (Bipolar I y II)',
      'Trastorno Límite de la Personalidad (para desregulación afectiva e impulsividad)',
      'Depresión Mayor resistente'
    ],
    half_life_hours: '25 – 30 h (Reducida por inductores como carbamazepina; duplicada a 60 h por valproato)',
    dosing_range_mg: '100 – 200 mg/día (Requiere escalado obligatorio: sem 1-2: 25mg; sem 3-4: 50mg; sem 5: 100mg)',
    latency_days: '6 semanas debido a la lentitud requerida en la titulación',
    pregnancy_category: 'Categoría C (Considerada uno de los estabilizadores más seguros en embarazo comparada con litio o valproato)',
    mechanism_of_action: 'Bloquea los canales de sodio voltaje-dependientes en las neuronas presinápticas hiperpolarizadas, inhibiendo la liberación excesiva del neurotransmisor excitatorio glutamato y aspartato.',
    psychotherapy_impact: [
      'Es el fármaco ideal para el paciente con Trastorno Bipolar tipo II que sufre de depresiones recurrentes y teme engordar o sentirse sedado.',
      'Si el paciente olvida tomarla por más de 5 días seguidos, ¡NO debe retomar la dosis habitual!: debe reiniciarse la titulación desde 25 mg para evitar el rash.'
    ],
    side_effects_monitoring: [
      'Cefalea, mareos y diplopía (visión doble)',
      'Insomnio leve',
      'Monitoreo cutáneo diario en las primeras 8 semanas'
    ],
    black_box_warnings: [
      'Erupción cutánea potencialmente mortal (Síndrome de Stevens-Johnson y Necrólisis Epidérmica Tóxica). Cualquier erupción, fiebre o llagas en mucosas exige suspensión inmediata y consulta dermatológica urgente.'
    ],
    gold_standard_for: [
      'Fase Depresiva del Trastorno Bipolar I y II (Prevención y tratamiento "desde abajo")',
      'Inestabilidad afectiva en Trastorno Límite de la Personalidad (TLP)'
    ],
    emergency_red_flags: [
      'Rash cutáneo eritematoso difuso con descamación o compromiso de boca/ojos (Signo de Stevens-Johnson)'
    ]
  },
  {
    id: 'valproato',
    title: 'Ácido Valproico / Divalproato de Sodio',
    entity_type: 'drug',
    tags: ['#pharmacology/mood_stabilizer', '#bipolar', '#mania', '#mixed_episodes'],
    summary: 'Estabilizador de elección en manía disfórica, episodios mixtos y ciclación rápida. Altamente teratogénico (espina bífida).',
    drug_generic_name: 'Ácido Valproico / Divalproato de Sodio',
    drug_brand_names: ['Depakote', 'Valcote', 'Logical', 'Depakene'],
    drug_class: 'Mood Stabilizer',
    neurotransmitters: ['Potenciación de GABA (inhibe GABA transaminasa)', 'Bloqueo canales Na+ y Ca2+ T'],
    indications_fda: ['Episodios Maníacos asociados al Trastorno Bipolar', 'Epilepsia', 'Profilaxis de Migraña'],
    indications_off_label: ['Ciclación Rápida Bipolar', 'Trastorno Límite de la Personalidad (impulsividad/agresión)'],
    half_life_hours: '9 – 16 h',
    dosing_range_mg: '750 – 2000 mg/día (Valproemia en sangre: 50–125 µg/mL)',
    latency_days: '3 a 7 días (Carga rápida oral permite respuesta veloz en manía)',
    pregnancy_category: 'Categoría X / D (Altamente teratogénico: defectos del tubo neural / espina bífida y reducción del CI infantil; contraindicado en mujeres fértiles salvo inexistencia de alternativa)',
    therapeutic_window: '50 – 125 µg/mL',
    mechanism_of_action: 'Aumenta la concentración cerebral de GABA al inhibir su degradación enzimática (GABA-transaminasa) y estimular su síntesis (GAD), reduciendo además las corrientes de calcio tipo T y sodio.',
    psychotherapy_impact: [
      'Muy efectivo para contener a pacientes bipolares en crisis mixtas (con mezcla de euforia, llanto e irritabilidad explosiva).',
      'Monitorear autoestima corporal por aumento de peso y posible alopecia transitoria.'
    ],
    side_effects_monitoring: [
      'Hepatograma y recuento de plaquetas (trombocitopenia)',
      'Aumento de peso significativo y temblor',
      'Alopecia reversible y náuseas',
      'Síndrome de ovario poliquístico (SOP) en mujeres jóvenes'
    ],
    black_box_warnings: [
      'Hepatotoxicidad fatal (especialmente en niños <2 años).',
      'Pancreatitis hemorrágica potencialmente mortal.',
      'Teratogenicidad mayor en embarazo.'
    ],
    gold_standard_for: [
      'Episodios Mixtos de Bipolaridad (Depresión + Manía simultánea)',
      'Cicladores Rápidos (más de 4 episodios afectivos al año)',
      'Manía resistente a Litio'
    ]
  },

  // --- BENZODIAZEPINAS E HIPNÓTICOS ---
  {
    id: 'clonazepam',
    title: 'Clonazepam',
    entity_type: 'drug',
    tags: ['#pharmacology/bzd', '#anxiety', '#panic', '#gold_standard'],
    summary: 'Gold Standard en el manejo agudo de crisis de pánico y ansiedad severa. BZD de alta potencia y vida media intermedia/larga sin los picos de abstinencia inter-dosis del alprazolam.',
    drug_generic_name: 'Clonazepam',
    drug_brand_names: ['Rivotril', 'Klonopin', 'Neuryl', 'Diパax'],
    drug_class: 'BZD Intermediate',
    neurotransmitters: ['Agonista alostérico positivo del receptor GABA-A'],
    indications_fda: ['Trastorno de Pánico con/sin agorafobia', 'Epilepsia (crisis mioclónicas y ausencias)'],
    indications_off_label: [
      'Ansiedad Aguda Severa',
      'Coadyuvante de inicio ("puente") en TDM y TAG mientras actúa el ISRS',
      'Acatisia inducida por antipsicóticos',
      'Manía aguda (como sedativo)'
    ],
    half_life_hours: '30 – 40 h (Alta potencia: 0.5 mg de clonazepam ≈ 10 mg de diazepam)',
    dosing_range_mg: '0.5 – 2.0 mg/día (Fraccionado en 1 a 2 tomas)',
    latency_days: 'Efecto inmediato (20 a 60 minutos tras toma oral o sublingual)',
    pregnancy_category: 'Categoría D (Riesgo de labio leporino y síndrome de abstinencia neonatal si se usa cerca del parto)',
    mechanism_of_action: 'Se une a la interfaz entre las subunidades α y γ del receptor GABA-A, aumentando la frecuencia de apertura del canal de cloruro en respuesta al GABA endógeno, hiperpolarizando la membrana neuronal e inhibiendo la excitabilidad del sistema límbico.',
    psychotherapy_impact: [
      'Uso como "puente": La BZD debe usarse durante 4 a 8 semanas como máximo mientras el ISRS (ej. Sertralina) alcanza su meseta terapéutica, procediendo luego a un desmonte gradual.',
      'Conducta de Seguridad ("Muleta Psicológica"): En terapia cognitivo-conductual del pánico, llevar la pastilla en el bolsillo puede transformarse en una conducta de reaseguro que impide la habituación a los síntomas interoceptivos. Planificar su retirada con el médico.',
      'Tolerancia y Dependencia: Si el consultante la toma por más de 3 meses, desarrollará dependencia física; advertir que nunca se debe suspender bruscamente.'
    ],
    side_effects_monitoring: [
      'Sedación diurna y enlentecimiento psicomotor',
      'Amnesia anterógrada (dificultad para fijar recuerdos nuevos tras la toma)',
      'Ataxia y riesgo de caídas en ancianos',
      'Efecto paradojal (desinhibición, agresividad, hiperactividad) en niños o ancianos con deterioro cognitivo'
    ],
    black_box_warnings: [
      'Riesgo extremo de depresión respiratoria severa, coma y muerte al combinar con opioides o alcohol.',
      'Abuso, adicción y síndrome de abstinencia potencialmente mortal (convulsiones) tras discontinuación brusca.'
    ],
    gold_standard_for: [
      'Control rápido de crisis de pánico en guardia y consultorio',
      'Tratamiento inicial coadyuvante de la ansiedad e insomnio durante la latencia del ISRS'
    ]
  },
  {
    id: 'alprazolam',
    title: 'Alprazolam',
    entity_type: 'drug',
    tags: ['#pharmacology/bzd', '#anxiety', '#panic', '#short_acting'],
    summary: 'BZD de alta potencia y vida media corta. Rápida absorción pero con mayor riesgo de efecto "rebote" entre dosis y alto potencial adictivo.',
    drug_generic_name: 'Alprazolam',
    drug_brand_names: ['Xanax', 'Trankimazin', 'Alplax', 'Tensium'],
    drug_class: 'BZD Short',
    neurotransmitters: ['Agonista GABA-A'],
    indications_fda: ['Trastorno de Pánico', 'Trastorno de Ansiedad Generalizada'],
    indications_off_label: ['Ansiedad situacional aguda'],
    half_life_hours: '11 – 15 h',
    dosing_range_mg: '0.25 – 1.0 mg por toma (Máximo 3–4 mg/día)',
    latency_days: 'Inmediata (15 a 30 minutos)',
    pregnancy_category: 'Categoría D',
    mechanism_of_action: 'Modulación alostérica positiva del receptor GABA-A con rápida penetración en barrera hematoencefálica.',
    psychotherapy_impact: [
      'Patrón de uso en "montaña rusa": Su semivida corta genera que el paciente experimente alivio rápido seguido de un pico de ansiedad anticipatoria a las 4-6 horas, induciendo craving o necesidad de volver a tomar.',
      'Suele ser preferible rotar a Clonazepam para estabilizar el nivel plasmático.'
    ],
    side_effects_monitoring: ['Somnolencia', 'Amnesia', 'Tolerancia rápida'],
    black_box_warnings: ['Alta dependencia y riesgo con depresores centrales.'],
    gold_standard_for: ['Alivio de rescate situacional en fobias específicas o crisis agudas aisladas']
  },
  {
    id: 'lorazepam',
    title: 'Lorazepam',
    entity_type: 'drug',
    tags: ['#pharmacology/bzd', '#hepatotoxicity_safe', '#elderly'],
    summary: 'BZD de elección en pacientes con hepatopatía o ancianos. Metabolismo exclusivo por glucuronidación sin pasar por el citocromo P450 hepático.',
    drug_generic_name: 'Lorazepam',
    drug_brand_names: ['Ativan', 'Orfidal', 'Trapax', 'Aplacasse'],
    drug_class: 'BZD Short',
    neurotransmitters: ['Agonista GABA-A'],
    indications_fda: ['Trastornos de Ansiedad', 'Insomnio por ansiedad', 'Status epiléptico', 'Sedación prequirúrgica'],
    indications_off_label: ['Catatonía (prueba diagnóstica y terapéutica)', 'Abstinencia alcohólica en hepatópatas'],
    half_life_hours: '10 – 20 h',
    dosing_range_mg: '1 – 3 mg/día',
    latency_days: 'Inmediata (20–40 min)',
    pregnancy_category: 'Categoría D',
    mechanism_of_action: 'Agonista alostérico GABA-A. A diferencia de diazepam o clonazepam, no depende de la oxidación hepática (CYP450), metabolizándose directamente por conjugación con glucurónido.',
    psychotherapy_impact: [
      'Seguridad en el paciente con cirrosis, hepatitis o polimedicación geriátrica.',
      'Excelente respuesta en cuadros catatónicos o inhibición severa.'
    ],
    side_effects_monitoring: ['Sedación', 'Ataxia', 'Debilidad muscular'],
    black_box_warnings: ['Interacción letal con alcohol y opioides.'],
    gold_standard_for: [
      'Manejo de ansiedad en pacientes con daño hepático o adultos mayores',
      'Test y tratamiento de primera línea en Catatonía'
    ]
  },
  {
    id: 'zolpidem',
    title: 'Zolpidem',
    entity_type: 'drug',
    tags: ['#pharmacology/z_drug', '#insomnia', '#sleep_architecture', '#gold_standard'],
    summary: 'Hipnótico no benzodiazepínico ("Fármaco Z"). Inductor del sueño selectivo que respeta las fases de sueño REM y de ondas lentas. Sin efecto resaca.',
    drug_generic_name: 'Zolpidem',
    drug_brand_names: ['Ambien', 'Stilnox', 'Somit', 'Dormi-loges'],
    drug_class: 'Z-Drug Non-BZD',
    neurotransmitters: ['Agonista selectivo de la subunidad α1 del receptor GABA-A'],
    indications_fda: ['Tratamiento a corto plazo del insomnio de conciliación (conciliatory insomnia)'],
    indications_off_label: ['Insomnio transitorio situacional'],
    half_life_hours: '2 – 3 h (Ultracorta: permite despertar sin somnolencia residual)',
    dosing_range_mg: '5 – 10 mg inmediatamente antes de acostarse (5 mg en mujeres y ancianos por menor aclaramiento)',
    latency_days: 'Ultra-rápida (15 a 30 minutos; el paciente debe estar ya en la cama al tomarlo)',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Se une preferentemente a los receptores GABA-A que contienen la subunidad α1 (asociados específicamente a la inducción hipnótica/sedación), mostrando nula afinidad por subunidades α2 y α3 (ansiolisis/músculo). No altera la arquitectura natural del sueño tanto como las BZD.',
    psychotherapy_impact: [
      'Coadyuvante de la TCC para el Insomnio (TCC-I): Debe prescribirse por períodos cortos (2 a 4 semanas) mientras se entrenan pautas de higiene del sueño, restricción de tiempo en cama y control de estímulos.',
      'Advertir sobre conductas automáticas complejas: Si no se duerme inmediatamente, el paciente puede comer dormido, enviar mensajes o deambular sin recordarlo al día siguiente.'
    ],
    side_effects_monitoring: [
      'Parasomnias (sonambulismo, ingesta nocturna de alimentos)',
      'Amnesia anterógrada si se despierta antes de cumplir 7-8 horas de sueño',
      'Cefalea y mareo matinal ocasional'
    ],
    black_box_warnings: [
      'Conductas complejas del sueño potencialmente peligrosas (conducir dormido, cocinar, caídas).'
    ],
    gold_standard_for: [
      'Insomnio de conciliación agudo o transitorio',
      'Elección sobre las BZD para dormir por respetar mejor la arquitectura del sueño'
    ]
  },

  // --- ANTIPSICÓTICOS (TÍPICOS Y ATÍPICOS) ---
  {
    id: 'quetiapina',
    title: 'Quetiapina',
    entity_type: 'drug',
    tags: ['#pharmacology/atypical_antipsychotic', '#bipolar', '#depression', '#insomnia', '#tps'],
    summary: 'Antipsicótico atípico camaleónico con perfil dependiente de dosis: 50 mg (Hipnótico H1), 150–300 mg (Antidepresivo dual y Bipolar), 400–800 mg (Antipsicótico D2). Mínimo SEP.',
    drug_generic_name: 'Quetiapina',
    drug_brand_names: ['Seroquel', 'Ketiap', 'Alzen', 'Rocoz'],
    drug_class: 'Antipsychotic Atypical',
    neurotransmitters: [
      'Antagonista H1 (a dosis bajas: 25–50 mg)',
      'Antagonista 5-HT2A y recaptación NET vía metabolito Norquetiapina (150–300 mg)',
      'Antagonista D2 de baja afinidad / disociación rápida (400–800 mg)'
    ],
    indications_fda: [
      'Esquizofrenia (adultos y adolescentes)',
      'Trastorno Bipolar (Manía aguda, Depresión Bipolar I y II, y Mantenimiento)',
      'Terapia coadyuvante en Trastorno Depresivo Mayor resistente (formulación XR)'
    ],
    indications_off_label: [
      'Trastorno Límite de la Personalidad (para ira, disforia e impulsividad)',
      'Insomnio refractario en pacientes psiquiátricos',
      'Agitación en demencia / delirium'
    ],
    half_life_hours: '6 – 7 h (Metabolito activo Norquetiapina: 12 h)',
    dosing_range_mg: '50 – 800 mg/día (Dormir: 25-50mg; Depresión Bipolar: 300mg; Manía/Psicosis: 400-800mg)',
    latency_days: 'Sedación inmediata; efecto antidepresivo en 7–14 días; antipsicótico en 2–4 semanas',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Antipsicótico atípico con "hit-and-run" en receptores D2 (se une y se disocia rápidamente), lo que explica la casi total ausencia de síntomas extrapiramidales e hiperprolactinemia. Su metabolito norquetiapina bloquea NET y receptores 5-HT2C, otorgándole acción antidepresiva.',
    psychotherapy_impact: [
      'Farmacología por pisos: Explicar al consultante por qué toma 50 mg (para dormir/ansiedad) vs. un paciente bipolar que toma 300 mg (para regular ánimo) vs. 600 mg (para psicosis).',
      'Monitoreo del peso y glucemia: Puede inducir síndrome metabólico severo; estimular hábitos nutricionales y ejercicio en sesión.'
    ],
    side_effects_monitoring: [
      'Sedación profunda matutina',
      'Aumento de peso, triglicéridos y resistencia a la insulina',
      'Hipotensión ortostática y taquicardia refleja (por bloqueo α1)',
      'Sequedad bucal y constipación'
    ],
    black_box_warnings: [
      'Aumento de mortalidad en ancianos con psicosis relacionada con demencia.',
      'Ideación suicida en jóvenes en uso como antidepresivo.'
    ],
    gold_standard_for: [
      'Depresión Bipolar (I y II)',
      'Trastorno Límite de la Personalidad para bajar impulsividad e ira desregulada',
      'Potenciación en TDM unipolar resistente con insomnio severo'
    ]
  },
  {
    id: 'risperidona',
    title: 'Risperidona',
    entity_type: 'drug',
    tags: ['#pharmacology/atypical_antipsychotic', '#psychosis', '#schizophrenia', '#bipolar'],
    summary: 'Antipsicótico atípico potente sobre D2 y 5-HT2A. Muy eficaz en síntomas positivos y agitación, pero con mayor tendencia a hiperprolactinemia y SEP a dosis >4 mg.',
    drug_generic_name: 'Risperidona',
    drug_brand_names: ['Risperdal', 'Restelea', 'Sequinan'],
    drug_class: 'Antipsychotic Atypical',
    neurotransmitters: ['Antagonista potente D2 y 5-HT2A', 'Antagonista α1 y α2'],
    indications_fda: [
      'Esquizofrenia',
      'Episodios Maníacos o Mixtos del Trastorno Bipolar',
      'Irritabilidad asociada al Trastorno del Espectro Autista (TEA)'
    ],
    indications_off_label: [
      'Agresividad y descontrol en Trastornos de la Conducta',
      'Psicosis en demencia',
      'Potenciación en TOC refractario'
    ],
    half_life_hours: '20 – 24 h',
    dosing_range_mg: '1 – 6 mg/día (Dosis habitual: 2–4 mg/día)',
    latency_days: 'Control de agitación en horas; efecto antipsicótico en 14–28 días',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Antagonista dual dopaminérgico-serotoninérgico. Al bloquear 5-HT2A en la vía nigroestriatal, amortigua en parte los efectos extrapiramidales comparado con el haloperidol, pero a dosis >4 mg se comporta casi como un típico.',
    psychotherapy_impact: [
      'Permite recuperar contacto con la realidad en psicosis aguda y calma la agitación desbordante.',
      'Preguntar con delicadeza por galactorrea (salida de leche) o amenorrea en mujeres, y disfunción eréctil/ginecomastia en varones por aumento de prolactina.'
    ],
    side_effects_monitoring: [
      'Hiperprolactinemia (bloqueo D2 en vía tuberoinfundibular)',
      'Síntomas extrapiramidales (temblor, rigidez, acatisia) a dosis >4 mg',
      'Aumento de peso moderado e hipotensión ortostática'
    ],
    black_box_warnings: ['Mortalidad aumentada en psicosis asociada a demencia en ancianos.'],
    gold_standard_for: [
      'Primer episodio psicótico en esquizofrenia',
      'Irritabilidad, agresividad y rabietas en Autismo (TEA)'
    ]
  },
  {
    id: 'olanzapina',
    title: 'Olanzapina',
    entity_type: 'drug',
    tags: ['#pharmacology/atypical_antipsychotic', '#schizophrenia', '#bipolar_mania', '#metabolic_risk'],
    summary: 'Antipsicótico atípico de altísima eficacia antipsicótica y antimaniaca, cercano a Clozapina pero sin agranulocitosis. Mayor riesgo de síndrome metabólico y aumento de peso.',
    drug_generic_name: 'Olanzapina',
    drug_brand_names: ['Zyprexa', 'Midax', 'Vilano'],
    drug_class: 'Antipsychotic Atypical',
    neurotransmitters: ['Antagonista D2, 5-HT2A, 5-HT2C, H1, M1, α1'],
    indications_fda: ['Esquizofrenia', 'Manía aguda y mixta en Bipolar I', 'Depresión Bipolar (con Fluoxetina)'],
    indications_off_label: ['Anorexia nerviosa (para aumentar peso y reducir rumiación obsesiva corporal)', 'Agitación en cuidados paliativos'],
    half_life_hours: '30 h',
    dosing_range_mg: '5 – 20 mg/día en toma nocturna',
    latency_days: 'Control de agitación en 24 h; antipsicótico en 2 a 4 semanas',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Bloqueo multirreceptorial potente con disociación moderada de D2 y antagonismo profundo en 5-HT2A y 5-HT2C. Su bloqueo conjunto H1 y 5-HT2C estimula fuertemente el centro del apetito hipotalámico.',
    psychotherapy_impact: [
      'Altamente tranquilizante en manías graves o delirios aterrorizantes.',
      'El aumento de peso puede superar los 10-15 kg en pocos meses: requiere alianza sólida y acompañamiento médico/nutricional sin juzgar al paciente.'
    ],
    side_effects_monitoring: [
      'Síndrome metabólico (dislipidemia, diabetes mellitus tipo 2)',
      'Sedación profunda',
      'Boca seca y constipación por bloqueo muscarínico'
    ],
    black_box_warnings: ['Mortalidad en demencia de adultos mayores.'],
    gold_standard_for: [
      'Manía aguda severa con síntomas psicóticos',
      'Coadyuvante en Anorexia Nerviosa refractaria con caquexia extrema'
    ]
  },
  {
    id: 'clozapina',
    title: 'Clozapina',
    entity_type: 'drug',
    tags: ['#pharmacology/atypical_antipsychotic', '#schizophrenia_refractory', '#anti_suicide', '#gold_standard'],
    summary: 'Gold Standard absoluto e indiscutible en Esquizofrenia Resistente / Refractaria. Único antipsicótico con indicación aprobada para reducción del riesgo de suicidio en psicosis. Requiere hemogramas periódicos por agranulocitosis.',
    drug_generic_name: 'Clozapina',
    drug_brand_names: ['Clozaril', 'Leponex', 'Lapenax'],
    drug_class: 'Antipsychotic Atypical',
    neurotransmitters: ['Baja afinidad D2, alta afinidad D4, 5-HT2A, α1, H1, M1'],
    indications_fda: [
      'Esquizofrenia Resistente al Tratamiento (tras fracaso de al menos 2 antipsicóticos)',
      'Reducción del riesgo de conducta suicida recurrente en Esquizofrenia o Esquizoafectivo'
    ],
    indications_off_label: ['Trastorno Bipolar refractario severo', 'Psicosis en Enfermedad de Parkinson'],
    half_life_hours: '12 h',
    dosing_range_mg: '150 – 450 mg/día (Inicio lento: 12.5–25 mg)',
    latency_days: '4 a 12 semanas (puede continuar mejorando hasta 6 meses después)',
    pregnancy_category: 'Categoría B (Una de las más seguras en su clase)',
    mechanism_of_action: 'Antagonista D2 débil y transitorio pero potente antagonista D4, 5-HT2A y adrenérgico. Modula la neurotransmisión glutamatérgica prefrontal y ejerce neuroprotección anti-suicida única.',
    psychotherapy_impact: [
      'Permite la reinserción social y psicoterapia en pacientes que estuvieron institucionalizados durante años por psicosis resistente.',
      'Sialorrea nocturna (babeo profuso de saliva durante el sueño): síntoma muy molesto; psicoeducar que se debe a estimulación colinérgica/fallo de deglución.'
    ],
    side_effects_monitoring: [
      'Hemograma semanal obligatorio los primeros 6 meses, luego quincenal y mensual (vigilar neutrófilos absolutos por Agranulocitosis)',
      'Miocarditis y miocardiopatía (monitorear troponinas y ECG al inicio)',
      'Constipación severa (puede causar íleo paralítico fatal si no se trata)',
      'Convulsiones dosis-dependientes (>600 mg)'
    ],
    black_box_warnings: [
      'Agranulocitosis severa potencialmente mortal (1%).',
      'Miocarditis y cardiomiopatía.',
      'Convulsiones.',
      'Hipotensión ortostática y síncope.'
    ],
    gold_standard_for: [
      'Esquizofrenia Refractaria / Resistente (Fallo a 2 antipsicóticos, incluido un atípico)',
      'Conducta suicida recurrente en pacientes con psicosis'
    ],
    emergency_red_flags: [
      'Fiebre súbita + dolor de garganta o signos de infección (Alerta Agranulocitosis: hemograma de guardia urgente)',
      'Dolor precordial o taquicardia inexplicable (Alerta Miocarditis)'
    ]
  },
  {
    id: 'haloperidol',
    title: 'Haloperidol',
    entity_type: 'drug',
    tags: ['#pharmacology/typical_antipsychotic', '#acute_psychosis', '#delirium', '#first_generation'],
    summary: 'Antipsicótico típico de primera generación por excelencia. Antagonista D2 potente y limpio. Excelente en agitación psicomotriz aguda y delirios; alto riesgo de extrapiramidalismo (SEP).',
    drug_generic_name: 'Haloperidol',
    drug_brand_names: ['Haldol', 'Halopidol', 'Neurolidol'],
    drug_class: 'Antipsychotic Typical',
    neurotransmitters: ['Antagonista selectivo y potente D2'],
    indications_fda: ['Esquizofrenia y psicosis agudas', 'Síndrome de Tourette (tics severos)', 'Agitación psicomotriz'],
    indications_off_label: ['Delirium hiperactivo en hospital general', 'Náuseas refractarias en oncología'],
    half_life_hours: '15 – 36 h',
    dosing_range_mg: '2 – 10 mg/día (Gotas, comprimidos o ampolla IM)',
    latency_days: 'Sedación y control de agitación en 30 minutos (IM); antipsicótico en 2 a 4 semanas',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Bloqueo masivo y no selectivo de receptores D2 en las cuatro vías dopaminérgicas. Suprime delirios en vía mesolímbica, pero induce SEP en vía nigroestriatal, empeora síntomas negativos en vía mesocortical y dispara prolactina en vía tuberoinfundibular.',
    psychotherapy_impact: [
      'Observar signos de acatisia (inquietud motora de miembros inferiores donde el consultante no puede permanecer sentado en sesión): suele confundirse con aumento de la ansiedad basal.',
      'Distonías agudas (espasmo de cuello/tortícolis o crisis oculógiras): asustan mucho al paciente; se revierten rápidamente con anticolinérgicos (Biperideno) o BZD.'
    ],
    side_effects_monitoring: [
      'Síndrome Extrapiramidal (parkinsonismo: facies inexpresiva, rigidez en rueda dentada, temblor de reposo)',
      'Acatisia',
      'Discinesia tardía (movimientos buco-linguo-masticatorios involuntarios tras uso crónico)',
      'Hiperprolactinemia'
    ],
    black_box_warnings: [
      'Síndrome Neuroléptico Maligno (SNM): Urgencia médica potencialmente mortal (rigidez cérea "en caño de plomo", fiebre alta, CPK elevada, alteración de conciencia).',
      'Mortalidad en ancianos con demencia.'
    ],
    gold_standard_for: [
      'Agitación psicomotriz aguda y cuadros de agresividad en salas de emergencia',
      'Delirium hiperactivo en paciente internado'
    ],
    emergency_red_flags: [
      'Rigidez muscular extrema + hipertermia + sudoración profusa + confusión (Alerta Síndrome Neuroléptico Maligno - UCI)'
    ]
  },
  {
    id: 'aripiprazol',
    title: 'Aripiprazol',
    entity_type: 'drug',
    tags: ['#pharmacology/atypical_antipsychotic', '#third_generation', '#dopamine_stabilizer', '#no_weight_gain'],
    summary: 'Antipsicótico de 3ª generación: agonista parcial D2. Modulador dopaminérgico ("estabilizador del sistema dopaminérgico"). Sin aumento de peso ni sedación.',
    drug_generic_name: 'Aripiprazol',
    drug_brand_names: ['Abilify', 'Irazem', 'Zabil'],
    drug_class: 'Antipsychotic Atypical',
    neurotransmitters: ['Agonista parcial D2', 'Agonista parcial 5-HT1A', 'Antagonista 5-HT2A'],
    indications_fda: [
      'Esquizofrenia',
      'Manía y episodios mixtos en Bipolar I',
      'Potenciación coadyuvante en Trastorno Depresivo Mayor',
      'Irritabilidad en Autismo',
      'Síndrome de Tourette'
    ],
    indications_off_label: ['Trastorno Límite de la Personalidad', 'TOC refractario', 'Impulsividad'],
    half_life_hours: '75 h (Metabolito activo Dehidroaripiprazol: 94 h)',
    dosing_range_mg: '5 – 30 mg/día (Depresión: 2–5 mg; Psicosis/Manía: 10–20 mg)',
    latency_days: '14 a 28 días',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Agonista parcial D2 con actividad intrínseca del 30%. Si hay exceso de dopamina (vía mesolímbica en psicosis), actúa como antagonista bajando la transmisión; si hay déficit (vía mesocortical en depresión), actúa como agonista aumentando el tono dopaminérgico.',
    psychotherapy_impact: [
      'Fármaco moderno con excelente tolerabilidad metabólica (no engorda, no seda).',
      'Vigilar acatisia en las primeras 2 semanas: es el efecto adverso más característico; si aparece, se puede asociar propranolol o bajar la dosis.'
    ],
    side_effects_monitoring: [
      'Acatisia e inquietud interna',
      'Náuseas y cefaleas transitorias',
      'Insomnio leve inicial'
    ],
    black_box_warnings: ['Ideación suicida en jóvenes al usarse como coadyuvante antidepresivo.'],
    gold_standard_for: [
      'Potenciación en Depresión Mayor resistente sin aumento de peso',
      'Esquizofrenia y Bipolaridad en pacientes preocupados por el síndrome metabólico'
    ]
  },

  // --- PSICOESTIMULANTES Y TDAH ---
  {
    id: 'metilfenidato',
    title: 'Metilfenidato',
    entity_type: 'drug',
    tags: ['#pharmacology/stimulant', '#adhd', '#executive_function', '#focus'],
    summary: 'Gold Standard farmacológico en TDAH en niños y adultos. Bloquea la recaptación de dopamina y noradrenalina en corteza prefrontal restaurando el control inhibitorio.',
    drug_generic_name: 'Metilfenidato',
    drug_brand_names: ['Ritalina', 'Concerta', 'Rubifen', 'Aderan'],
    drug_class: 'Stimulant / ADHD',
    neurotransmitters: ['Dopamina (DAT)', 'Noradrenalina (NET)'],
    indications_fda: ['TDAH (Trastorno por Déficit de Atención e Hiperactividad)', 'Narcolepsia'],
    indications_off_label: ['Apatía post-traumatismo encéfalo-craneano', 'Fatiga en cuidados paliativos'],
    half_life_hours: '2 – 3 h (Liberación inmediata); 8 – 12 h (Formulaciones OROS / Concerta)',
    dosing_range_mg: '10 – 60 mg/día',
    latency_days: 'Efecto inmediato (30 a 60 minutos tras la toma)',
    pregnancy_category: 'Categoría C',
    mechanism_of_action: 'Inhibe los transportadores de recaptación de dopamina (DAT) y noradrenalina (NET), aumentando su concentración sináptica en la corteza prefrontal dorsolateral y cuerpo estriado, optimizando la relación señal-ruido en circuitos atencionales.',
    psychotherapy_impact: [
      'Sinergia perfecta con terapia cognitivo-conductual para TDAH: el fármaco aporta el "freno neurobiológico" y la psicoterapia entrena las funciones ejecutivas (agenda, organización, resolución de problemas).',
      'Efecto rebote vespertino: Cuando la medicación cae a la tarde, el paciente puede sentirse más irritable o disperso; planificar actividades de alta demanda en la ventana activa.'
    ],
    side_effects_monitoring: [
      'Supresión del apetito y descenso de peso',
      'Insomnio (no tomar después de las 16:00)',
      'Aumento de frecuencia cardíaca y tensión arterial',
      'Tics motores o tics vocales transitorios'
    ],
    black_box_warnings: [
      'Potencial de abuso y dependencia (Sustancia controlada).',
      'Evaluación cardiovascular previa obligatoria por riesgo de muerte súbita en cardiopatías estructurales.'
    ],
    gold_standard_for: [
      'TDAH en niños, adolescentes y adultos (Tratamiento de 1ª Elección indiscutido)'
    ]
  }
];

// Matriz de Diagnóstico -> Tratamiento de Elección (Gold Standard)
export interface GoldStandardPair {
  disorder: string;
  category: string;
  gold_standard_psychotherapy: string;
  gold_standard_pharmacotherapy: string;
  first_choice_drugs: string[];
  clinical_rationale: string;
  danger_notes: string;
}

export const goldStandardMatrix: GoldStandardPair[] = [
  {
    disorder: 'Trastorno Depresivo Mayor (Episodio Unipolar)',
    category: 'Trastornos del Estado de Ánimo',
    gold_standard_psychotherapy: 'Terapia Cognitivo-Conductual (TCC) / Activación Conductual',
    gold_standard_pharmacotherapy: 'ISRS (Inhibidores Selectivos de Recaptación de Serotonina)',
    first_choice_drugs: ['Sertralina', 'Escitalopram', 'Fluoxetina'],
    clinical_rationale: 'Igual eficacia que los antiguos tricíclicos pero con altísima seguridad y baja toxicidad en sobredosis. Mínimo 6 a 12 meses post-remisión.',
    danger_notes: 'Vigilar viraje maníaco en bipolaridad oculta y activación suicida paradójica en <25 años las primeras semanas.'
  },
  {
    disorder: 'Trastorno Bipolar I (Manía y Mantenimiento)',
    category: 'Trastornos del Estado de Ánimo',
    gold_standard_psychotherapy: 'Psicoeducación Bipolar (Colom & Vieta) + Terapia del Ritmo Social e Interpersonal (IPSRT)',
    gold_standard_pharmacotherapy: 'Carbonato de Litio',
    first_choice_drugs: ['Carbonato de Litio', 'Ácido Valproico', 'Quetiapina'],
    clinical_rationale: 'El litio es el estabilizador "desde arriba" por excelencia, con eficacia comprobada en prevención de manía y depresión, y el único con efecto anti-suicida independiente demostrado.',
    danger_notes: 'Ventana terapéutica estrecha (0.6–1.2 mEq/L). Controlar litemia, función renal y tiroidea. Evitar AINEs.'
  },
  {
    disorder: 'Trastorno Bipolar (Fase Depresiva)',
    category: 'Trastornos del Estado de Ánimo',
    gold_standard_psychotherapy: 'TCC adaptada a Bipolaridad + Terapia Centrada en la Familia',
    gold_standard_pharmacotherapy: 'Lamotrigina / Quetiapina',
    first_choice_drugs: ['Lamotrigina', 'Quetiapina (300 mg)', 'Lurasidona'],
    clinical_rationale: 'Lamotrigina estabiliza "desde abajo" sin inducir viraje a manía ni aumento de peso. Quetiapina tiene aprobación específica en monoterapia.',
    danger_notes: 'Evitar antidepresivos en monoterapia (riesgo de viraje maníaco y ciclación rápida). Titulación lenta de lamotrigina por Stevens-Johnson.'
  },
  {
    disorder: 'Trastorno de Pánico y Agorafobia',
    category: 'Trastornos de Ansiedad',
    gold_standard_psychotherapy: 'TCC con Exposición Interoceptiva y Reestructuración Cognitiva',
    gold_standard_pharmacotherapy: 'ISRS (Largo Plazo) + Clonazepam (Corto Plazo como Puente)',
    first_choice_drugs: ['Sertralina', 'Paroxetina', 'Clonazepam'],
    clinical_rationale: 'El ISRS es el tratamiento curativo que previene recidivas (no genera dependencia). Clonazepam brinda alivio rápido inicial mientras corre la latencia del ISRS.',
    danger_notes: 'Desmontar la BZD en 4–8 semanas para no convertirla en conducta de seguridad que frene la exposición en TCC.'
  },
  {
    disorder: 'Trastorno Obsesivo-Compulsivo (TOC)',
    category: 'Espectro Obsesivo-Compulsivo',
    gold_standard_psychotherapy: 'Exposición con Prevención de Respuesta (EPR)',
    gold_standard_pharmacotherapy: 'ISRS a Dosis Altas',
    first_choice_drugs: ['Sertralina (150-200 mg)', 'Fluoxetina (60-80 mg)', 'Clomipramina (Tricíclico en 2ª línea)'],
    clinical_rationale: 'El TOC requiere mayor ocupación del transportador SERT y mayor tiempo de respuesta (8 a 12 semanas) que la depresión.',
    danger_notes: 'No descontinuar anticipadamente; el tratamiento farmacológico suele ser prolongado.'
  },
  {
    disorder: 'Trastorno Límite de la Personalidad (TLP)',
    category: 'Trastornos de la Personalidad',
    gold_standard_psychotherapy: 'Terapia Dialéctico Conductual (DBT) de Marsha Linehan',
    gold_standard_pharmacotherapy: 'Tratamiento Sintomático Integrado (No existe Gold Standard farmacológico curativo)',
    first_choice_drugs: ['Quetiapina (para impulsividad/ira)', 'Lamotrigina (para labilidad)', 'ISRS'],
    clinical_rationale: 'La psicoterapia es el pilar central. Los psicofármacos son coadyuvantes para atenuar picos afectivos e impulsivos.',
    danger_notes: 'Evitar Benzodiazepinas por riesgo de desinhibición conductual paradójica, acting out y abuso adictivo.'
  },
  {
    disorder: 'Esquizofrenia (Fase Aguda y Mantenimiento)',
    category: 'Espectro de la Esquizofrenia y Psicosis',
    gold_standard_psychotherapy: 'Terapia Cognitiva para Psicosis + Entrenamiento en Habilidades Sociales + Psicoeducación Familiar',
    gold_standard_pharmacotherapy: 'Antipsicóticos Atípicos (Segunda Generación)',
    first_choice_drugs: ['Risperidona', 'Olanzapina', 'Aripiprazol'],
    clinical_rationale: 'Eficacia en síntomas positivos con mucha menor tasa de efectos motores extrapiramidales (SEP) que el haloperidol.',
    danger_notes: 'Monitorear síndrome metabólico (peso, lípidos, glucosa) periódicamente.'
  },
  {
    disorder: 'Esquizofrenia Resistente / Refractaria',
    category: 'Espectro de la Esquizofrenia y Psicosis',
    gold_standard_psychotherapy: 'Acompañamiento Terapéutico y Terapia Ocupacional / TCC adaptada',
    gold_standard_pharmacotherapy: 'Clozapina (Gold Standard indiscutido)',
    first_choice_drugs: ['Clozapina'],
    clinical_rationale: 'Fármaco más eficaz de toda la psiquiatría tras el fallo de al menos 2 antipsicóticos convencionales. Único con efecto anti-suicida específico en psicosis.',
    danger_notes: 'Riesgo de agranulocitosis (control de neutrófilos absoluto obligatorio semanal/quincenal), miocarditis y estreñimiento severo.'
  },
  {
    disorder: 'TDAH (Déficit Atencional con/sin Hiperactividad)',
    category: 'Trastornos del Neurodesarrollo',
    gold_standard_psychotherapy: 'TCC enfocada en Funciones Ejecutivas + Psicoeducación + Orientación a Padres/Docentes',
    gold_standard_pharmacotherapy: 'Psicoestimulantes (Metilfenidato)',
    first_choice_drugs: ['Metilfenidato (Concerta / Ritalina)', 'Lisdexanfetamina', 'Atomoxetina (no estimulante)'],
    clinical_rationale: 'Optimiza la neurotransmisión dopaminérgica y noradrenérgica en corteza prefrontal, aumentando la capacidad de autorregulación y memoria de trabajo.',
    danger_notes: 'Evaluar salud cardiovascular previa; vigilar apetito e insomnio vespertino.'
  }
];

// Diferencial de Urgencias Neuropsiquiátricas y Psicofarmacológicas
export interface NeuropsychiatricEmergency {
  name: string;
  trigger_drugs: string[];
  triad_or_symptoms: string[];
  neurological_signs: string[];
  onset_speed: string;
  treatment_urgency: string;
}

export const emergencyDifferential: NeuropsychiatricEmergency[] = [
  {
    name: 'Síndrome Serotoninérgico',
    trigger_drugs: ['ISRS + IMAO', 'ISRS + Tramadol / Triptanes', 'Sobredosis de ISRS/IRSN', 'Litio + ISRS'],
    triad_or_symptoms: ['Alteración del estado mental (agitación, confusión)', 'Hiperactividad autonómica (sudoración, taquicardia, fiebre)', 'Anomalías neuromusculares'],
    neurological_signs: ['Hiperreflexia bilateral', 'Clonus inducible u ocular espontáneo', 'Temblor y rigidez leve'],
    onset_speed: 'Rápido (horas tras la toma o aumento de dosis)',
    treatment_urgency: 'Suspender todos los serotoninérgicos de inmediato. Hidratación, enfriamiento y antagonistas 5-HT2A (Ciproheptadina) en guardia.'
  },
  {
    name: 'Síndrome Neuroléptico Maligno (SNM)',
    trigger_drugs: ['Antipsicóticos típicos (Haloperidol)', 'Antipsicóticos atípicos en menor medida', 'Suspensión brusca de levodopa'],
    triad_or_symptoms: ['Hipertermia severa (>38.5–40 °C)', 'Inestabilidad autonómica (presión lábil, taquicardia extrema)', 'Diaforesis y letargo a coma'],
    neurological_signs: ['Rigidez muscular extrema "en caño de plomo"', 'Hiporreflexia o reflejos normales', 'Elevación masiva de CPK sérica y leucocitosis'],
    onset_speed: 'Gradual (días a semanas tras inicio o ajuste de antipsicóticos)',
    treatment_urgency: 'Urgencia médica en Unidad de Cuidados Intensivos (UCI). Suspender antipsicótico, Dantroleno o Bromocriptina, hidratación agresiva.'
  },
  {
    name: 'Intoxicación Aguda por Litio',
    trigger_drugs: ['Carbonato de Litio + Deshidratación', 'Litio + AINEs (Ibuprofeno/Naproxeno)', 'Litio + Diuréticos tiazídicos'],
    triad_or_symptoms: ['Gastrointestinales iniciales (diarrea copiosa, vómitos repetidos)', 'Apatía, letargia y somnolencia progresiva', 'Falla renal aguda'],
    neurological_signs: ['Temblor grueso e irregular (no fino)', 'Ataxia franca, disartria (dificultad para articular palabra)', 'Fasciculaciones, mioclonías y convulsiones'],
    onset_speed: 'Variable (horas en sobredosis aguda; días en intoxicación crónica por acumulación)',
    treatment_urgency: 'Litemia de emergencia. Hidratación con solución fisiológica para forzar excreción renal de sodio/litio; hemodiálisis si litemia >2.5 mEq/L o daño neurológico.'
  },
  {
    name: 'Acatisia Inducida por Fármacos',
    trigger_drugs: ['Antipsicóticos típicos (Haloperidol)', 'Antipsicóticos atípicos (Aripiprazol, Risperidona)', 'ISRS al inicio'],
    triad_or_symptoms: ['Inquietud motora incontrolable (necesidad imperiosa de mover las piernas o caminar)', 'Intensa angustia subjetiva e irritabilidad', 'Incapacidad de permanecer sentado en sesión'],
    neurological_signs: ['Balanceo continuo de pies, pasos repetitivos en el lugar', 'Sin rigidez cérea ni fiebre (diferencial con SNM)'],
    onset_speed: 'Días a semanas tras iniciar o subir dosis',
    treatment_urgency: 'Reducir dosis del antipsicótico o rotar. Tratamiento médico coadyuvante con Propranolol (betabloqueante) o Benzodiazepinas (Clonazepam).'
  }
];
