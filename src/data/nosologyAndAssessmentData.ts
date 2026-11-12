import { DiagnosticEntity, AssessmentInstrumentEntity, ClinicalReportTemplate } from '../types/vaultTypes';

export const diagnosticEntities: DiagnosticEntity[] = [
  {
    id: 'tdm_depresion',
    title: 'Trastorno Depresivo Mayor (Episodio Único / Recurrente)',
    entity_type: 'diagnostic',
    tags: ['#dsm5/depressive', '#icd11/6A70', '#mood_disorders', '#rdoc/negative_valence'],
    summary: 'Cuadro nuclear del estado de ánimo caracterizado por anhedonia, tristeza profunda, inhibición o agitación psicomotriz y riesgo vital.',
    dsm5_code: '296.2x (Único) / 296.3x (Recurrente)',
    icd11_mms_code: '6A70 (Trastorno Depresivo de Episodio Único) / 6A71 (Recurrente)',
    icd11_foundation_uri: 'http://id.who.int/icd/entity/1563447989',
    diagnostic_chapter: 'Capítulo 06: Trastornos mentales, del comportamiento o del neurodesarrollo',
    rdoc_domains: ['Sistemas de Valencia Negativa (Pérdida y Frustración)', 'Sistemas de Valencia Positiva (Déficit de Recompensa / Anhedonia)'],
    operational_criteria: [
      { id: 'c1', text: 'Estado de ánimo deprimido la mayor parte del día, casi todos los días (reporte subjetivo u observación)', required: true },
      { id: 'c2', text: 'Disminución marcada del interés o placer en todas o casi todas las actividades (anhedonia)', required: true },
      { id: 'c3', text: 'Pérdida o aumento significativo de peso sin dieta, o disminución/aumento del apetito casi diario' },
      { id: 'c4', text: 'Insomnio (conciliación, medio o tardío) o hipersomnia casi todos los días' },
      { id: 'c5', text: 'Agitación o enlentecimiento psicomotor observable por terceros (no mera sensación subjetiva)' },
      { id: 'c6', text: 'Fatiga o pérdida de energía casi todos los días (anergia)' },
      { id: 'c7', text: 'Sentimientos de inutilidad o culpabilidad excesiva o inapropiada (delirante en depresión psicótica)' },
      { id: 'c8', text: 'Disminución de la capacidad para pensar, concentrarse o tomar decisiones' },
      { id: 'c9', text: 'Pensamientos recurrentes de muerte (no solo temor a morir), ideación suicida recurrente con/sin plan o tentativa' }
    ],
    differential_diagnoses: [
      { disorder: 'Duelo No Complicado', differentiator: 'El dolor en el duelo viene en "olas" intercaladas con calidez y consuelo; en el TDM el aplanamiento y la autorreprobación son continuos y universales.' },
      { disorder: 'Trastorno Bipolar (Fase Depresiva)', differentiator: 'Preguntar activamente por episodios pasados de hiperactividad, verborragia, gastos excesivos o insomnio sin cansancio (hipomanía/manía).' },
      { disorder: 'Hipotiroidismo / Causas Médicas', differentiator: 'Solicitar TSH y hemograma para descartar causa orgánica de astenia y lentitud.' }
    ],
    first_line_treatments: [
      { modality: 'TCC / Activación Conductual', medication: 'Sertralina / Escitalopram (ISRS)', notes: 'Sinergia demostrada: la medicación alivia síntomas vegetativos graves y la psicoterapia modifica esquemas cognitivos disfuncionales.' }
    ]
  },
  {
    id: 'trastorno_bipolar_1',
    title: 'Trastorno Bipolar I (Manía y Episodios Afectivos)',
    entity_type: 'diagnostic',
    tags: ['#dsm5/bipolar', '#icd11/6A60', '#mania', '#mood_stabilizers', '#suicide_risk'],
    summary: 'Trastorno afectivo episódico caracterizado por al menos un episodio maníaco completo. Alta recurrencia y riesgo de conducta suicida sin profilaxis.',
    dsm5_code: '296.4x (Maníaco) / 296.5x (Depresivo)',
    icd11_mms_code: '6A60 (Trastorno Bipolar Tipo I)',
    icd11_foundation_uri: 'http://id.who.int/icd/entity/452899478',
    diagnostic_chapter: 'Capítulo 06: Trastornos Bipolares y Relacionados',
    rdoc_domains: ['Arousal y Sistemas Regulatorios', 'Sistemas de Valencia Positiva (Sensibilidad al Refuerzo Hiperactiva)'],
    operational_criteria: [
      { id: 'b1', text: 'Período bien definido de estado de ánimo anormalmente y persistentemente elevado, expansivo o irritable, con aumento de la actividad o energía dirigida a un objetivo, de al menos 1 semana de duración', required: true },
      { id: 'b2', text: 'Autoestima exagerada o grandiosidad (megalomanía)' },
      { id: 'b3', text: 'Disminución de la necesidad de dormir (se siente descansado con solo 3 horas de sueño)' },
      { id: 'b4', text: 'Más hablador de lo habitual o presión para mantener la conversación (taquipsiquia y logorrea)' },
      { id: 'b5', text: 'Fuga de ideas o experiencia subjetiva de que los pensamientos van a mil por hora' },
      { id: 'b6', text: 'Facilidad de distracción reportada o constatada (hiperprosexia superficial)' },
      { id: 'b7', text: 'Participación desmedida en actividades con alto riesgo de consecuencias dolorosas (compras descontroladas, indiscreciones sexuales, inversiones imprudentes)' }
    ],
    differential_diagnoses: [
      { disorder: 'Trastorno por Déficit de Atención (TDAH)', differentiator: 'El TDAH es crónico desde la infancia; la manía bipolar es episódica y discontinua respecto a la personalidad habitual.' },
      { disorder: 'Intoxicación por Estimulantes (Cocaína/Anfetaminas)', differentiator: 'Descartar mediante pesquisa toxicológica en guardia médica.' }
    ],
    first_line_treatments: [
      { modality: 'Psicoeducación Bipolar (Colom & Vieta) + Terapia del Ritmo Social (IPSRT)', medication: 'Carbonato de Litio / Ácido Valproico + Quetiapina', notes: 'La psicoterapia es inviable durante la manía aguda; se inicia en fase de eutimia para asegurar adherencia farmacológica e identificar pródromos.' }
    ]
  },
  {
    id: 'trastorno_limite_personalidad',
    title: 'Trastorno Límite de la Personalidad (TLP) / Patrón Límite',
    entity_type: 'diagnostic',
    tags: ['#dsm5/borderline', '#icd11/6D10', '#personality', '#dbt', '#affective_instability'],
    summary: 'Patrón dominante de inestabilidad en las relaciones interpersonales, la autoimagen y los afectos, con marcada impulsividad y conductas autolesivas/suicidas.',
    dsm5_code: '301.83 (TLP)',
    icd11_mms_code: '6D10 (Trastorno de la Personalidad) con Calificador 6D11.5 (Patrón Límite)',
    icd11_foundation_uri: 'http://id.who.int/icd/entity/131758983',
    diagnostic_chapter: 'Capítulo 06: Trastornos de la Personalidad y Rasgos Relacionados',
    rdoc_domains: ['Sistemas de Valencia Negativa', 'Procesos Sociales (Apego Inseguro)', 'Sistemas de Control Cognitivo'],
    ampd_picd_traits: ['Afectividad Negativa (Labilidad, Ansiedad, Inseguridad)', 'Desinhibición (Impulsividad, Asunción de Riesgos)', 'Antagonismo / Disocialidad (Hostilidad en crisis)'],
    operational_criteria: [
      { id: 'tlp1', text: 'Esfuerzos desesperados para evitar el desamparo real o imaginado (fobia al abandono)' },
      { id: 'tlp2', text: 'Patrón de relaciones interpersonales inestables e intensas caracterizado por alternancia entre idealización y devaluación (escisión)' },
      { id: 'tlp3', text: 'Alteración de la identidad: inestabilidad notable y persistente de la autoimagen o del sentido de sí mismo' },
      { id: 'tlp4', text: 'Impulsividad en al menos dos áreas potencialmente dañinas (gastos, sexo, drogas, conducción temeraria, atracones)' },
      { id: 'tlp5', text: 'Comportamiento, actitud o amenazas recurrentes de suicidio, o conductas autolesivas recurrentes (CASIS/NSSI)' },
      { id: 'tlp6', text: 'Inestabilidad afectiva debida a una reactividad notable del estado de ánimo (disforia episódica, irritabilidad de horas)' },
      { id: 'tlp7', text: 'Sensación crónica de vacío' },
      { id: 'tlp8', text: 'Enfado inapropiado e intenso, o dificultad para controlar la ira' },
      { id: 'tlp9', text: 'Ideas paranoides transitorias relacionadas con el estrés o síntomas disociativos graves' }
    ],
    differential_diagnoses: [
      { disorder: 'Trastorno Bipolar II', differentiator: 'En el TLP los virajes del ánimo son ultrarrápidos (horas), reactivos a conflictos interpersonales y con sentimiento de vacío; en el Bipolar los episodios duran semanas de forma autónoma.' },
      { disorder: 'TEPT Complejo (TEPT-C)', differentiator: 'Gran solapamiento dimensional; el TEPT-C enfatiza la presencia de traumatización interpersonal prolongada (abuso infantil).' }
    ],
    first_line_treatments: [
      { modality: 'Terapia Dialéctico Conductual (DBT) de Marsha Linehan', medication: 'Quetiapina / Lamotrigina (sintomáticos; evitar Benzodiazepinas)', notes: 'DBT es el Gold Standard con evidencia Grado 1A. El fármaco solo acompaña síntomas diana.' }
    ]
  },
  {
    id: 'trastorno_panico',
    title: 'Trastorno de Pánico con/sin Agorafobia',
    entity_type: 'diagnostic',
    tags: ['#dsm5/panic', '#icd11/6B01', '#anxiety', '#cbt', '#interoceptive_exposure'],
    summary: 'Ataques de pánico imprevistos y recurrentes acompañados de inquietud persistente por la aparición de nuevas crisis (ansiedad anticipatoria) y cambios desadaptativos en la conducta.',
    dsm5_code: '300.01 (Trastorno de Pánico)',
    icd11_mms_code: '6B01 (Trastorno de Pánico)',
    diagnostic_chapter: 'Capítulo 06: Trastornos de Ansiedad y Relacionados con el Miedo',
    rdoc_domains: ['Sistemas de Valencia Negativa (Amenaza Aguda / Miedo)'],
    operational_criteria: [
      { id: 'p1', text: 'Ataques de pánico imprevistos recurrentes (oleada repentina de miedo intenso que alcanza su pico en minutos)', required: true },
      { id: 'p2', text: 'Palpitaciones, taquicardia o elevación de frecuencia cardíaca' },
      { id: 'p3', text: 'Sudoración, temblores o sacudidas' },
      { id: 'p4', text: 'Sensación de dificultad para respirar o de asfixia' },
      { id: 'p5', text: 'Sensación de ahogo o atragantamiento' },
      { id: 'p6', text: 'Dolor o molestias en el tórax (frecuente motivo de consulta en guardia cardiológica)' },
      { id: 'p7', text: 'Náuseas o malestar abdominal' },
      { id: 'p8', text: 'Inestabilidad, mareo o sensación de desmayo' },
      { id: 'p9', text: 'Desrealización (sensación de irrealidad) o despersonalización (separarse de uno mismo)' },
      { id: 'p10', text: 'Miedo a perder el control o "volverse loco"' },
      { id: 'p11', text: 'Miedo a morir (inminencia letal)' },
      { id: 'p12', text: 'Al menos a uno de los ataques le ha seguido 1 mes o más de inquietud o conductas de evitación agorafóbica', required: true }
    ],
    differential_diagnoses: [
      { disorder: 'Causas Cardiovasculares / Feocromocitoma', differentiator: 'ECG y análisis de tiroides previo indispensable para descartar arritmias o hipertiroidismo.' },
      { disorder: 'Fobia Social o Fobias Específicas', differentiator: 'En las fobias el ataque es previsible y ligado al estímulo temido; en el pánico es inicialmente espontáneo/inesperado ("de la nada").' }
    ],
    first_line_treatments: [
      { modality: 'TCC con Exposición Interoceptiva', medication: 'Sertralina / Paroxetina + Clonazepam a corto plazo', notes: 'Desactivar la catastrofización de las sensaciones corporales interoceptivas.' }
    ]
  }
];

export const assessmentInstruments: AssessmentInstrumentEntity[] = [
  {
    id: 'scl_90_r',
    title: 'SCL-90-R (Cuestionario de 90 Síntomas de Derogatis)',
    entity_type: 'assessment',
    assessment_type: 'psychometric',
    tags: ['#assessment/psychometric', '#scl90r', '#derogatis', '#clinical_screener'],
    summary: 'Instrumento psicométrico multidimensional de autorreporte de 90 ítems para evaluar el nivel de malestar psicológico actual.',
    authors: 'Leonard R. Derogatis (1977, 1994)',
    typical_administration_time: '12 – 15 minutos',
    dimensions_or_scales: [
      { name: 'Somatizaciones (SOM)', description: 'Malestar derivado de la percepción de disfunción corporal (cardiovascular, gastrointestinal, respiratoria).' },
      { name: 'Obsesiones y Compulsiones (OBS)', description: 'Pensamientos, impulsos y acciones egodistónicas y no deseadas.' },
      { name: 'Sensibilidad Interpersonal (SI)', description: 'Sentimientos de timidez, inferioridad e inadecuación social.' },
      { name: 'Depresión (DEP)', description: 'Desesperanza, anhedonia, pérdida de energía y pensamientos suicidas.' },
      { name: 'Ansiedad (ANS)', description: 'Tensión motora, aprensión, nerviosismo y pánico.' },
      { name: 'Hostilidad (HOS)', description: 'Pensamientos, sentimientos o acciones de ira, resentimiento e irritabilidad.' },
      { name: 'Ansiedad Fóbica (FOB)', description: 'Miedo irracional y persistente a viajar, aglomeraciones o espacios abiertos.' },
      { name: 'Ideación Paranoide (PAR)', description: 'Pensamiento suspicaz, delirio de referencia y pérdida de autonomía.' },
      { name: 'Psicoticismo (PSI)', description: 'Estilo de vida solitario, síntomas esquizofrénicos o aislamiento extremo.' },
      { name: 'GSI (Índice de Severidad Global)', description: 'Promedio general de todas las respuestas (Puntuación total / 90). El mejor indicador individual del nivel de malestar global.', clinical_cutoff: 'Puntaje T ≥ 63 (o percentil 85) indica caso clínico de riesgo' },
      { name: 'PST (Total de Síntomas Positivos)', description: 'Recuento del número de ítems calificados con valor > 0 (amplitud sintomática).' },
      { name: 'PSDI (Índice de Malestar Positivo)', description: 'Intensidad media de los síntomas que están presentes (Puntuación total / PST).' }
    ],
    administration_guidelines: [
      'El consultante califica cada síntoma según cómo se sintió durante los últimos 7 días (incluido hoy) en una escala Likert de 0 (Nada) a 4 (Mucho o extremadamente).',
      'Puede administrarse antes de iniciar el tratamiento (línea de base) y periódicamente para medir la eficacia del tratamiento psicoterapéutico/psicofarmacológico.'
    ],
    scoring_interpretation: 'Puntajes T normalizados por sexo y población (clínica vs. general). Un GSI ≥ 63 o dos o más dimensiones con T ≥ 63 definen el criterio de "caso clínico positivo" que amerita intervención inmediata.',
    reliability_validity: 'Consistencia interna (alfa de Cronbach entre 0.77 y 0.90 en todas las dimensiones). Alta validez concurrente con el BDI y STAI.',
    clinical_red_flags: [
      'Ítem 15: "Pensamientos de acabar con su vida" (Puntuación ≥ 2 activa evaluación de protocolo ECCS)',
      'GSI > 1.8 en población ambulatoria sugiere riesgo de descompensación aguda'
    ],
    interactive_tool_id: 'scl_90_calculator'
  },
  {
    id: 'neo_pi_r',
    title: 'NEO-PI-R (Inventario de Personalidad NEO Revisado)',
    entity_type: 'assessment',
    assessment_type: 'psychometric',
    tags: ['#assessment/psychometric', '#neopir', '#big_five', '#costa_mccrae'],
    summary: 'Evaluación exhaustiva de los Cinco Grandes Factores de la Personalidad (Neuroticismo, Extraversión, Apertura, Amabilidad, Responsabilidad) con 30 facetas.',
    authors: 'Paul T. Costa & Robert R. McCrae',
    typical_administration_time: '35 – 45 minutos (240 ítems)',
    dimensions_or_scales: [
      { name: 'Neuroticismo (N)', description: 'Inestabilidad emocional, vulnerabilidad al estrés, ansiedad, hostilidad, depresión, impulsividad.' },
      { name: 'Extraversión (E)', description: 'Sociabilidad, asertividad, actividad, búsqueda de emociones, emociones positivas.' },
      { name: 'Apertura a la Experiencia (O)', description: 'Fantasía, estética, sentimientos, acciones, ideas, valores no convencionales.' },
      { name: 'Amabilidad / Afabilidad (A)', description: 'Confianza, franqueza, altruismo, actitud conciliadora, modestia, sensibilidad a los demás.' },
      { name: 'Responsabilidad / Conciencia (C)', description: 'Competencia, orden, sentido del deber, necesidad de logro, autodisciplina, deliberación.' }
    ],
    administration_guidelines: [
      'Escala de 5 puntos desde "Totalmente en desacuerdo" hasta "Totalmente de acuerdo".',
      'Fundamental verificar escalas de validez y respuestas al azar.'
    ],
    scoring_interpretation: 'Permite comprender el estilo de afrontamiento basal del consultante. Un Neuroticismo alto combinado con baja Responsabilidad anticipa dificultades de adherencia terapéutica.',
    reliability_validity: 'Estandarización mundial con altísima estabilidad temporal (test-retest r > 0.80 a través de décadas).',
    clinical_red_flags: ['Neuroticismo percentil > 90', 'Responsabilidad percentil < 10']
  },
  {
    id: 'tecnicas_proyectivas_godnashe',
    title: 'Batería Proyectiva Gráfica y Verbal (HTP, Persona bajo la lluvia, Desiderativo)',
    entity_type: 'assessment',
    assessment_type: 'projective',
    tags: ['#assessment/projective', '#htp', '#desiderativo', '#rain_person', '#godnashe'],
    summary: 'Manual técnico unificado de pautas formales, de contenido y mecanismos de defensa en psicodiagnóstico proyectivo.',
    authors: 'Buck, Hammer, Querol & Chaves, Celener (Compilado Godnashe)',
    typical_administration_time: '45 – 60 minutos',
    dimensions_or_scales: [
      { name: 'Pautas Formales Gráficas', description: 'Emplazamiento (Arriba: fantasía; Abajo: apego a lo concreto; Izquierda: regresión materna; Derecha: futuro; Centro: aquí y ahora), Tamaño (Macrografía: compensación maníaca; Micrografía: timidez/inhibición), Presión y Trazo.' },
      { name: 'H.T.P. (Casa-Árbol-Persona)', description: 'Casa: vínculo familiar y área de abrigo. Árbol: aspectos más profundos y arcaicos del sí mismo (raíces/tronco/copa). Persona: imagen corporal y relaciones interpersonales.' },
      { name: 'Persona bajo la lluvia', description: 'Evalúa la reacción defensiva del Yo frente a un ambiente percibido como hostil o estresante (la lluvia). Recursos de afrontamiento (paraguas, impermeable).' },
      { name: 'Cuestionario Desiderativo', description: '3 catexias positivas y 3 negativas explorando reinos animal, vegetal e inanimado. Mide fortaleza yoica ante el ataque simbólico de muerte.' }
    ],
    administration_guidelines: [
      'Consignas estandarizadas: "Dibuja una casa, un árbol y una persona", "Dibuja una persona bajo la lluvia", "Si no pudiera ser persona, ¿qué es lo que más le gustaría ser?".',
      'Registro minucioso de la conducta manifiesta, tiempo de reacción (TR) y comentarios espontáneos.'
    ],
    scoring_interpretation: 'Buscar siempre recurrencias (reiteración de un mismo indicador en una o más técnicas) y convergencias (indicadores de distinta naturaleza que apuntan a una misma hipótesis clínica).',
    reliability_validity: 'Basado en los tres niveles de inferencia (Nivel 1: Observacional -> Nivel 2: Interpretativo -> Nivel 3: Metapsicológico).',
    clinical_red_flags: [
      'Falla en la primera disociación instrumental del Desiderativo (no puede fantasear la muerte simbólica sin angustia de aniquilación)',
      'Transparencias grotescas o desintegración de la figura humana en gráficos (alerta de desorganización psicótica)'
    ]
  }
];

export const clinicalReportTemplates: ClinicalReportTemplate[] = [
  {
    id: 'template_cisma_dbt',
    title: 'Conceptualización de Caso Clínico DBT (Modelo CISMA)',
    entity_type: 'template',
    clinical_context: 'CISMA DBT',
    target_audience: 'Equipo Interdisciplinario',
    tags: ['#template/dbt', '#cisma', '#case_formulation', '#biosocial'],
    summary: 'Plantilla estructurada para la formulación de casos complejos en DBT, integrando teoría biosocial, jerarquía de conductas blanco y plan de crisis.',
    sections: [
      {
        id: 'datos_filiatorios',
        title: '1. Datos Filiatorios y Demográficos',
        clinical_guidance: 'Registrar edad, ocupación, red de convivencia y derivador (anonimizar datos sensibles).',
        placeholder: 'Consultante de [Edad] años, que convive con [Red de apoyo]...',
        default_text: 'Consultante femenino/masculino de [Edad] años, derivado/a por guardia/psiquiatría. Convive con su familia de origen / vive solo/a. Ocupación actual: estudiante / empleado/a.'
      },
      {
        id: 'motivo_consulta',
        title: '2. Motivo de Consulta y Demanda',
        clinical_guidance: 'Describir el pedido explícito del consultante y el motivo de derivación institucional.',
        placeholder: 'Ingresa a tratamiento tras episodio de descompensación...',
        default_text: 'Ingresa tras consulta de guardia por crisis de desregulación emocional severa con impulsividad y autolesiones recientes. Expresa como demanda: "No puedo controlar lo que siento y arruino mis relaciones".'
      },
      {
        id: 'diagnostico_multiaxial',
        title: '3. Hipótesis Diagnóstica (DSM-5-TR / CIE-11)',
        clinical_guidance: 'Codificar según nosología oficial y evaluar comorbilidades (eje afectivo, trauma, personalidad).',
        placeholder: 'F60.3 / 6D10 Trastorno de la Personalidad...',
        default_text: 'Diagnóstico Principal: Trastorno Límite de la Personalidad (CIE-11: 6D10 con calificador 6D11.5 / DSM-5: 301.83).\nComorbilidades: Trastorno Depresivo Mayor (6A70) recurrente, Episodio actual moderado.'
      },
      {
        id: 'teoria_biosocial',
        title: '4. Formulación Biosocial (Vulnerabilidad + Ambiente)',
        clinical_guidance: 'Detallar los componentes de la vulnerabilidad biológica y los factores del ambiente invalidante histórico y actual.',
        placeholder: 'Vulnerabilidad biológica caracterizada por alta sensibilidad...',
        default_text: 'A) Vulnerabilidad Biológica:\n- Alta sensibilidad a estímulos interpersonales de rechazo.\n- Reactividad emocional de rápida escalada (pasa de 0 a 10 en minutos).\n- Lento retorno a la calma (estado de hiperarousal prolongado).\n\nB) Ambiente Invalidante:\n- Familia de origen con desestimación sistemática del dolor ("exagerás todo", "querés llamar la atención").\n- Consecuencia actual: Incapacidad para rotular emociones y desconfianza en la propia experiencia interna.'
      },
      {
        id: 'jerarquia_blancos',
        title: '5. Jerarquía de Conductas Blanco (DBT)',
        clinical_guidance: 'Organizar las conductas a extinguir/entrenar según la estricta jerarquía de Marsha Linehan.',
        placeholder: 'Blanco 1: Conductas suicidas y parasuicidas...',
        default_text: 'Blanco 1 (Amenazan la vida): Cortes en antebrazos tras discusiones de pareja (último hace 10 días). Ideación suicida pasiva recurrente (ECCS: Nivel moderado con plan inespecífico).\n\nBlanco 2 (Interfieren con la terapia): Llegadas 15 minutos tarde a sesión, silencios prolongados y olvido del registro diario de tarjetas.\n\nBlanco 3 (Calidad de vida): Aislamiento social de fin de semana, consumo episódico de alcohol como automedicación de la disforia.'
      },
      {
        id: 'analisis_cadena_reciente',
        title: '6. Análisis en Cadena de la Conducta Blanco Reciente',
        clinical_guidance: 'Detallar eslabón por eslabón el último evento crítico evaluado.',
        placeholder: 'Vulnerabilidad previa -> Disparador -> Eslabones -> Conducta -> Consecuencias...',
        default_text: '1. Vulnerabilidad: Poco sueño la noche anterior y discusión laboral matutina.\n2. Disparador: Mensaje de texto no respondido por su pareja a las 20:00.\n3. Pensamiento: "Ya no le importo, me va a dejar".\n4. Emoción: Terror al abandono + Angustia intolerable (intensidad 9/10).\n5. Sensación: Opresión torácica, taquicardia, sensación de vacío estomacal.\n6. Conducta Problema: Realiza 3 cortes superficiales con bisturí en el baño.\n7. Consecuencia Inmediata (Refuerzo -): Descenso instantáneo de la angustia por distracción física y shock biológico.\n8. Consecuencia Demorada: Culpa intensa, vergüenza, ocultamiento y aislamiento.'
      },
      {
        id: 'plan_tratamiento',
        title: '7. Plan de Tratamiento e Intervenciones Clave',
        clinical_guidance: 'Habilidades a entrenar, manejo de crisis y objetivos a 6 meses.',
        placeholder: 'Entrenamiento en TIPP, Aceptación Radical...',
        default_text: '- Entrenamiento en Habilidades TIPP (inmersión facial en agua helada, respiración pausada) para frenar la escalada antes de la autolesión.\n- Confección y firma del Plan de Seguridad manuscrito (Protocolo ECCS).\n- Práctica de Mindfulness: Observar y Describir emociones sin juzgar.\n- Consulta psiquiátrica para ajuste farmacológico (Quetiapina 50 mg nocturna).'
      }
    ]
  },
  {
    id: 'template_ovo_informe',
    title: 'Informe Final de Orientación Vocacional (Modelo OVO)',
    entity_type: 'template',
    clinical_context: 'OVO Vocacional',
    target_audience: 'Consultante / Familia',
    tags: ['#template/ovo', '#vocational', '#report', '#bohoslavsky'],
    summary: 'Informe técnico y de devolución del proceso de Orientación Vocacional y Ocupacional, listo para entregar al consultante o institución educativa.',
    sections: [
      {
        id: 'encabezado',
        title: '1. Datos de Identificación y Proceso',
        clinical_guidance: 'Consignar datos del consultante, institución educativa de procedencia y cantidad de encuentros.',
        placeholder: 'Nombre del consultante, edad, colegio...',
        default_text: 'Consultante: [Nombre y Apellido] | Edad: [Edad] años\nInstitución Educativa: [Colegio / Universidad]\nPeríodo del Proceso: [Fecha Inicio] a [Fecha Cierre] (Total de 6 encuentros individuales)'
      },
      {
        id: 'sintesis_proceso',
        title: '2. Síntesis de la Demanda y Evolución del Encuadre',
        clinical_guidance: 'Describir el motivo de consulta vocacional, la actitud inicial y cómo evolucionó a lo largo de las sesiones.',
        placeholder: 'Se presenta con incertidumbre entre dos áreas disímiles...',
        default_text: 'El consultante acude motivado por la proximidad del egreso secundario, manifestando una marcada dispersión entre áreas científicas y humanísticas: "Me gustan muchas cosas pero no sé cuál elegir ni de qué voy a trabajar". A lo largo de los encuentros mostró una participación reflexiva activa, pasando de una actitud pasiva-expectante a un rol protagónico en la exploración.'
      },
      {
        id: 'perfil_intereses_aptitudes',
        title: '3. Perfil de Intereses, Aptitudes y Valores',
        clinical_guidance: 'Integrar lo relevado en entrevistas, cuestionarios de intereses y árbol genealógico ocupacional.',
        placeholder: 'Destacan intereses por el trabajo interdisciplinario...',
        default_text: 'A) Intereses Dominantes: Predominio de intereses en el área social-asistencial e investigativa, con alta motivación por comprender la conducta humana y resolver problemas complejos.\nB) Aptitudes Destacadas: Gran capacidad de análisis crítico, pensamiento abstracto, fluidez verbal y empatía vincular.\nC) Valores Ocupacionales: Prioriza la autonomía en el trabajo, el impacto social positivo y el aprendizaje continuo, relegando la búsqueda de lucro económico inmediato.'
      },
      {
        id: 'matriz_foda_vocacional',
        title: '4. Matriz FODA Vocacional y Mandatos',
        clinical_guidance: 'Identificar fortalezas internas, áreas de vacilación y expectativas familiares identificadas.',
        placeholder: 'Fortalezas vs Obstáculos...',
        default_text: '- Fortalezas: Curiosidad intelectual, perseverancia y apertura al cambio.\n- Oportunidades: Apoyo familiar para cursar estudios universitarios y amplia oferta académica.\n- Debilidades: Perfeccionismo y temor inicial al fracaso en los primeros exámenes.\n- Amenazas: Mandatos familiares tácitos sobre carreras "tradicionales" que fueron trabajados y deconstruidos en el espacio.'
      },
      {
        id: 'conclusion_proyecto',
        title: '5. Conclusión y Proyecto Vocacional',
        clinical_guidance: 'Cierre del proceso con las carreras elegidas en orden de preferencia y plan de acción inmediato.',
        placeholder: 'Concluye eligiendo la carrera de...',
        default_text: 'Como síntesis del proceso, el consultante ha logrado clarificar su proyecto vocacional, definiendo como Primera Opción: Licenciatura en Psicología (Universidad [Nombre]) y como Segunda Opción afín: Licenciatura en Terapia Ocupacional.\nSe acuerda un plan de acción que incluye visitas a las facultades seleccionadas y asistencia a charlas informativas.'
      }
    ]
  },
  {
    id: 'template_ulloa_admision',
    title: 'Informe de Admisión y Evolución Hospitalaria (Modelo Ulloa)',
    entity_type: 'template',
    clinical_context: 'Ulloa Hospitalario / Admisión',
    target_audience: 'Equipo Interdisciplinario',
    tags: ['#template/ulloa', '#hospital', '#admission', '#interdisciplinary'],
    summary: 'Plantilla de admisión clínica institucional basada en los modelos de prácticas hospitalarias (Hospital Ulloa / O\'Gorman).',
    sections: [
      {
        id: 'datos_admision',
        title: '1. Registro de Admisión e Interconsulta',
        clinical_guidance: 'Fecha de ingreso, servicio de derivación (guardia, consultorio externo, sala).',
        placeholder: 'Servicio de Salud Mental - Admisión...',
        default_text: 'Servicio de Salud Mental | Dispositivo: Consultorios Externos / Hospital de Día\nFecha de Entrevista: [Fecha] | Terapeuta tratante: Neldo Camun'
      },
      {
        id: 'examen_psiquico',
        title: '2. Examen Psíquico / Semiología Actual',
        clinical_guidance: 'Describir con precisión semiológica las funciones psíquicas evaluadas en la entrevista de admisión.',
        placeholder: 'Lúcido, orientado témporo-espacialmente...',
        default_text: '- Aspecto y Actitud: Paciente aseado, colaborador, establece buen contacto visual y raport.\n- Conciencia y Orientación: Lúcido, orientado autopsíquicamente y alopsíquicamente en tiempo y espacio.\n- Atención y Memoria: Euprosexia, memoria de fijación y evocación conservadas.\n- Pensamiento: Curso normopsíquico, coherente. En el contenido se evidencia ideación de ruina y minusvalía moderada sin delirios ni alteraciones sensoperceptivas en acto.\n- Afectividad: Hipotimia con llanto fácil y labilidad emocional reactiva al relato de pérdidas recientes.\n- Voluntad e Impulsividad: Hipobulia moderada; niega ideación suicida activa actual.'
      },
      {
        id: 'hipotesis_clinica',
        title: '3. Hipótesis Clínica y Dinámica Vincular',
        clinical_guidance: 'Articular la queja manifiesta con el momento vital y la situación vincular/familiar.',
        placeholder: 'La sintomatología eclosiona tras...',
        default_text: 'El cuadro actual eclosiona en el contexto de una crisis vital por separación de pareja y pérdida de empleo ("encerrona trágica" sin red de contención inmediata). Se observa una estructura neurótica con predominio de rasgos obsesivo-depresivos y dificultades para tramitar el duelo.'
      },
      {
        id: 'estrategia_tratamiento',
        title: '4. Estrategia Terapéutica Propuesta',
        clinical_guidance: 'Frecuencia de sesiones, interconsulta psiquiátrica y articulación con trabajo social.',
        placeholder: 'Espacio individual semanal...',
        default_text: '- Psicoterapia individual de orientación clínica con frecuencia semanal.\n- Interconsulta con Médico Psiquiatra de planta para evaluar indicación de soporte psicofarmacológico (ISRS).\n- Articulación con Servicio Social para evaluar redes comunitarias de sostenimiento.'
      }
    ]
  }
];
