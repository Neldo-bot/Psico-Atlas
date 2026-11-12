import { SchoolOfThoughtEntity } from '../../types/vaultTypes';

export const cbtDeepData: SchoolOfThoughtEntity = {
  id: 'tcc_clasica',
  title: 'Terapias Cognitivo-Conductuales Clásicas (1ª y 2ª Ola)',
  entity_type: 'school',
  tags: ['#school/cbt', '#beck', '#ellis', '#skinner', '#evidence_based', '#cognitive_restructuring'],
  summary: 'Paradigma empírico centrado en los procesos de aprendizaje, la evaluación objetiva de la conducta y la reestructuración de esquemas y distorsiones cognitivas que median el sufrimiento emocional.',
  school_era: '1913 (1ª ola conductual) – 1960s/1970s (2ª ola cognitiva) – Presente',
  school_founders: ['John B. Watson', 'B.F. Skinner', 'Joseph Wolpe', 'Albert Ellis (TREC)', 'Aaron T. Beck (TCC)'],
  parent_paradigm: 'Cognitive-Behavioral & Contextual',

  core_concepts: [
    {
      term: 'Tríada Cognitiva de Beck',
      definition: 'Visión negativa sistemática y distorsionada de uno mismo ("soy un fracaso"), el mundo ("es despiadado y hostil") y el futuro ("nada va a mejorar jamás"), nuclear en el Trastorno Depresivo Mayor.'
    },
    {
      term: 'Modelo A-B-C de Ellis (TREC)',
      definition: 'A (Acontecimiento activador) no causa directamente C (Consecuencia emocional o conductual); lo que determina C es B (Beliefs: sistema de creencias racionales vs. irracionales absolutistas de "debería").'
    },
    {
      term: 'Esquemas Nucleares y Creencias Intermedias',
      definition: 'Estructuras cognitivas estables y profundas consolidadas en el desarrollo infantil (Desamparo, No ser amado, Invalía) que filtran y sesgan la interpretación de la experiencia presente.'
    },
    {
      term: 'Condicionamiento Operante (Skinner)',
      definition: 'La conducta es moldeada y mantenida por sus consecuencias: refuerzo positivo/negativo aumenta la probabilidad de emisión; castigo o extinción la disminuye.'
    },
    {
      term: 'Empirismo Colaborativo y Diálogo Socrático',
      definition: 'Postura terapéutica donde terapeuta y consultante actúan como un equipo de co-investigadores que someten a prueba empírica los pensamientos disfuncionales mediante experimentos conductuales.'
    }
  ],

  view_of_psychopathology: 'El sufrimiento psíquico no es causado directamente por los acontecimientos externos, sino por la manera en que el individuo estructura, interpreta y evalúa cognitivamente la realidad, perpetuado por conductas de evitación y sesgos atencionales.',
  epistemological_foundation: 'Positivismo lógico, empirismo científico y procesamiento de la información. La validez de una formulación clínica se contrasta mediante verificación observacional, diseños experimentales y replicabilidad.',
  historical_evolution: 'Nace con el conductismo radical que rechazaba la introspección (Watson/Skinner), incorpora la inhibición recíproca (Wolpe) y evoluciona en la revolución cognitiva de Beck y Ellis al demostrar que las representaciones internas median necesariamente entre el estímulo y la respuesta.',
  therapist_stance: 'Activo, directivo, psicoeducativo y colaborativo. Actúa como guía socrático, modelador de habilidades y co-investigador.',
  empirical_critiques: [
    'Riesgo de intelectualización si se reduce la terapia al debate lógico sin activación emocional genuina.',
    'Dificultad en consultantes con rigidez esquemática temprana o patología de la personalidad severa (lo que motivó la Terapia de Esquemas de Young y la 3ª Ola).'
  ],
  related_treatment_ids: ['tcc_depresion', 'tcc_ansiedad_panico', 'exposicion_erp_toc'],

  // =========================================================================
  // MÓDULO 1: GLOSARIO EXHAUSTIVO DE PALABRAS CLAVE
  // =========================================================================
  keywords_glossary: [
    {
      term: 'Pensamientos Automáticos Negativos (PAN)',
      original_language_term: 'Negative Automatic Thoughts (NATs)',
      definition: 'Flujo constante de cogniciones telegráficas, involuntarias y rápidas que cruzan la mente en situaciones disparadoras. El sujeto los vivencia como verdades fácticas indiscutibles sin cuestionar su plausibilidad.',
      clinical_distinction: '[VERDAD: Son el nivel más accesible de la jerarquía cognitiva; modificarlos alivia los síntomas agudos] vs [MITO: No son afirmaciones deliberadas o razonadas por el paciente].'
    },
    {
      term: 'Distorsiones Cognitivas',
      original_language_term: 'Cognitive Distortions / Errors in Thinking',
      definition: 'Sesgos sistemáticos en el procesamiento de la información: Inferencia arbitraria, Abstracción selectiva, Sobregeneralización, Magnificación/Catastrofización, Personalización y Pensamiento Dicotómico (Todo o Nada).',
      clinical_distinction: '[VERDAD: Mantienen activos los esquemas depresógenos e hiperansiosos aun ante evidencia fáctica contraria].'
    },
    {
      term: 'Esquema Nuclear (Core Belief)',
      original_language_term: 'Core Belief / Schema',
      definition: 'Creencia nuclear incondicional sobre uno mismo ("Soy incapaz", "No valgo nada", "Soy defectuoso"), los demás ("La gente es abusiva") o el entorno, consolidada en etapas tempranas del apego y aprendizaje infantil.',
      clinical_distinction: '[VERDAD: Opera como un lente que desestima lo positivo y magnifica lo congruente con el esquema] vs [MITO: No se modifica en una sola sesión; requiere cuestionamiento sostenido y experimentos conductuales].'
    },
    {
      term: 'Creencias Intermedias: Reglas, Supuestos y Actitudes',
      original_language_term: 'Intermediate Beliefs (Rules, Assumptions, Attitudes)',
      definition: 'Estrategias compensatorias que el Yo erige para protegerse del esquema nuclear: "Si complazco a todos en todo momento (regla), entonces nadie descubrirá que soy inservible (supuesto condicional)".',
      clinical_distinction: '[VERDAD: Explicar esta articulación ayuda al consultante a entender por qué sus conductas evitativas parecían lógicas].'
    },
    {
      term: 'Técnica de la Flecha Descendente',
      original_language_term: 'Downward Arrow Technique',
      definition: 'Procedimiento de interrogación socrática donde el terapeuta pregunta: "Si este pensamiento fuera cierto, ¿qué significaría para ti? ¿Qué diría sobre tu valor o tu futuro?", profundizando desde el pensamiento automático hasta revelar el esquema nuclear.',
      clinical_distinction: '[VERDAD: No se debate cada pensamiento intermedio; se desciende en la jerarquía conceptual hasta el núcleo ontológico].'
    },
    {
      term: 'Registro de Pensamientos Disfuncionales (RPD)',
      original_language_term: 'Thought Record (Dysfunctional Thought Record - DTR)',
      definition: 'Herramienta estructurada en columnas: 1. Situación disparadora, 2. Emoción y grado de intensidad (0-100%), 3. Pensamiento automático y grado de creencia (0-100%), 4. Evidencia a favor y en contra, 5. Respuesta alternativa adaptativa, 6. Reevaluación emocional.',
      clinical_distinction: '[VERDAD: Estándar de oro empírico de auto-monitoreo intersesión en TCC].'
    },
    {
      term: 'Inhibición Recíproca y Desensibilización Sistemática',
      original_language_term: 'Reciprocal Inhibition (Wolpe)',
      definition: 'Principio bioconductual: dos estados fisiológicos mutuamente antagónicos (relajación muscular profunda vs. respuesta ansiosa simpática) no pueden coexistir simultáneamente. Al aparear estímulos temidos jerárquicos con relajación, la ansiedad se extingue.',
      clinical_distinction: '[VERDAD: Fundamento histórico del tratamiento de fobias específicas y pánico].'
    },
    {
      term: 'Exposición con Prevención de Respuesta (EPR)',
      original_language_term: 'Exposure and Response Prevention (ERP)',
      definition: 'Exposición prolongada y deliberada al estímulo o pensamiento obsesivo disparador bloqueando estrictamente la conducta compulsiva o ritual de escape, facilitando la habituación neurobiológica y la reestructuración cognitiva.',
      clinical_distinction: '[VERDAD: Tratamiento de primera línea indiscutido con máximo nivel de evidencia en TOC].'
    },
    {
      term: 'Experimento Conductual',
      original_language_term: 'Behavioral Experiment',
      definition: 'Actividad planificada en sesión y ejecutada por el consultante en su vida cotidiana diseñada específicamente para poner a prueba empírica la validez de una creencia negativa frente a una hipótesis alternativa adaptativa.',
      clinical_distinction: '[VERDAD: Genera un cambio cognitivo y emocional mucho más potente que el simple debate verbal abstracto en consultorio].'
    },
    {
      term: 'Creencias Irracionales Absolutistas (Ellis - TREC)',
      original_language_term: 'Irrational Beliefs / Musts & Shoulds',
      definition: 'Demandas imperativas absolutistas e inflexibles que el sujeto se impone a sí mismo ("Debo tener éxito"), a los demás ("Debes tratarme bien siempre") o al mundo ("El mundo debe ser justo"), cuya frustración genera baja tolerancia a la frustración (catastrofismo).',
      clinical_distinction: '[VERDAD: La TREC busca transformar los "debería" dogmáticos en preferencias y deseos racionales flexibles].'
    }
  ],

  // =========================================================================
  // MÓDULO 2: AUTORES CANÓNICOS Y OBRAS ORIGINALES
  // =========================================================================
  canonical_authors: [
    {
      name: 'Aaron T. Beck',
      era_years: '1921 – 2021 (Universidad de Pensilvania)',
      core_thesis: 'El núcleo de los trastornos afectivos y de ansiedad radica en esquemas cognitivos disfuncionales y sesgos de procesamiento. Modificar las interpretaciones mediante el empirismo colaborativo reestructura el estado emocional y la conducta.',
      key_works: [
        { title: 'Terapia cognitiva y trastornos emocionales (Cognitive Therapy and the Emotional Disorders)', year: 1976, significance: 'Texto fundacional que sistematiza el modelo cognitivo frente al modelo psicoanalítico previo.' },
        { title: 'Terapia cognitiva de la depresión (Cognitive Therapy of Depression)', year: 1979, significance: 'Manual canónico que describe la tríada cognitiva, el RPD y los protocolos de reestructuración empírica.' },
        { title: 'Trastornos de ansiedad y fobias: una perspectiva cognitiva', year: 1985, significance: 'Modelo del sesgo de sobreestimación de peligro y subestimación de recursos de afrontamiento.' },
        { title: 'Terapia cognitiva de los trastornos de la personalidad', year: 1990, significance: 'Expande la TCC hacia los esquemas nucleares inflexibles de larga data.' }
      ]
    },
    {
      name: 'Albert Ellis',
      era_years: '1913 – 2007 (Nueva York)',
      core_thesis: 'Los seres humanos se perturban no por las cosas que les suceden, sino por los puntos de vista que tienen sobre ellas (Epicteto). Las exigencias absolutistas ("musts" y "shoulds") son la raíz de las neurosis.',
      key_works: [
        { title: 'Razón y emoción en psicoterapia (Reason and Emotion in Psychotherapy)', year: 1962, significance: 'Acta de nacimiento de la Terapia Racional Emotiva Conductual (TREC) y el modelo A-B-C.' },
        { title: 'Una nueva guía para una vida racional', year: 1975, significance: 'Identificación de las 11 creencias irracionales nucleares y técnicas de debate filosófico-empírico.' }
      ]
    },
    {
      name: 'B.F. Skinner',
      era_years: '1904 – 1990 (Harvard)',
      core_thesis: 'La conducta voluntaria es moldeada por sus consecuencias en el medio ambiente físico y social. El análisis funcional de la conducta (Antecedente - Conducta - Consecuencia) explica el mantenimiento de patrones adaptativos y desadaptativos.',
      key_works: [
        { title: 'La conducta de los organismos: un análisis experimental', year: 1938, significance: 'Diferenciación entre condicionamiento respondiente (pavloviano) y operante.' },
        { title: 'Ciencia y conducta humana (Science and Human Behavior)', year: 1953, significance: 'Aplicación de los principios de refuerzo y extinción al comportamiento social e individual.' }
      ]
    },
    {
      name: 'Joseph Wolpe',
      era_years: '1915 – 1997 (Sudáfrica / Temple University)',
      core_thesis: 'La ansiedad es una respuesta refleja condicionada que puede desaprenderse si se induce una respuesta fisiológicamente incompatible como la relajación muscular en presencia gradual de los estímulos fóbicos.',
      key_works: [
        { title: 'Psicoterapia por inhibición recíproca (Psychotherapy by Reciprocal Inhibition)', year: 1958, significance: 'Invención de la Desensibilización Sistemática y las escalas jerárquicas de ansiedad (SUDs).' }
      ]
    }
  ],

  // =========================================================================
  // MÓDULO 3: CITAS TEXTUALES ORIGINALES COMENTADAS
  // =========================================================================
  primary_quotes: [
    {
      author: 'Aaron T. Beck',
      year: 1979,
      work_source: 'Terapia cognitiva de la depresión (Cognitive Therapy of Depression)',
      page_or_seminar: 'The Guilford Press, New York, p. 3',
      quote: 'El modelo cognitivo postula que la emoción y la conducta de un individuo están determinadas en gran medida por la forma en que estructura el mundo. Sus cogniciones («pensamientos verbales o imágenes») se basan en actitudes o supuestos desarrollados a partir de experiencias anteriores (...) El terapeuta ayuda al paciente a identificar sus pensamientos distorsionados y a someterlos a prueba de la misma forma que un científico comprueba una hipótesis.',
      clinical_reflection: 'Pilar de la TCC: el terapeuta no debate dogmáticamente con el paciente ni le impone pensamientos "positivos"; le enseña la metodología del empirismo colaborativo para contrastar sus inferencias con los hechos de la realidad.'
    },
    {
      author: 'Aaron T. Beck',
      year: 1976,
      work_source: 'Terapia cognitiva y trastornos emocionales',
      page_or_seminar: 'International Universities Press, p. 11',
      quote: 'La persona con depresión se percibe a sí misma como desprovista de las cualidades que considera esenciales para la felicidad: cree que es incompetente, indeseable o moralmente defectuosa. Tiende a subestimarse constantemente y a atribuir sus fracasos a defectos sustanciales de su propia persona, mientras que atribuye cualquier éxito a la pura casualidad.',
      clinical_reflection: 'Describe la asimetría atributiva depresiva: internalización de los fracasos y externalización de los logros, producto del sesgo del esquema nuclear activo.'
    },
    {
      author: 'Albert Ellis',
      year: 1962,
      work_source: 'Razón y emoción en psicoterapia (Reason and Emotion in Psychotherapy)',
      page_or_seminar: 'Lyle Stuart, New York, p. 42',
      quote: 'Las personas no se perturban por los acontecimientos activadores externos (A), sino por sus creencias irracionales e inflexibles (B) sobre tales acontecimientos. Cuando un individuo transforma un deseo legítimo en una exigencia absolutista («Tengo que ser amado por todos», «Las cosas deben salir siempre como yo quiero»), crea su propio infierno emocional.',
      clinical_reflection: 'Fundamento de la TREC: la diferencia crucial entre el sufrimiento funcional (tristeza, preocupación adaptativa) y el trastorno emocional disfuncional (depresión, pánico) radica en la tiranía de los deberías.'
    },
    {
      author: 'B.F. Skinner',
      year: 1953,
      work_source: 'Ciencia y conducta humana (Science and Human Behavior)',
      page_or_seminar: 'The Macmillan Company, New York, p. 65',
      quote: 'Las consecuencias de la conducta pueden «reaccionar» sobre el organismo. Cuando lo hacen, pueden alterar la probabilidad de que la conducta que las produjo se repita. No necesitamos atribuir propósitos o deseos subjetivos a la conducta; basta con analizar las contingencias de reforzamiento que la sostienen en el ambiente.',
      clinical_reflection: 'Base del análisis funcional en consulta: toda conducta problema (ej. evitación fóbica, consumo de sustancias) se mantiene porque genera un refuerzo inmediato (alivio de ansiedad a corto plazo), a pesar de las consecuencias destructivas a largo plazo.'
    }
  ],

  // =========================================================================
  // MÓDULO 4: LÍNEAS TEMPORALES DE EVOLUCIÓN Y REINTERPRETACIÓN CONCEPTUAL
  // =========================================================================
  conceptual_timelines: [
    {
      concept_title: '1. Línea Temporal del Modelo Conductual al Procesamiento Cognitivo',
      description: 'Evolución epistemológica desde el conductismo radical hacia la mediación cognitiva y la reestructuración de esquemas.',
      steps: [
        {
          year_or_era: '1913–1938',
          author_milestone: 'John B. Watson & B.F. Skinner — Manifiesto Conductista y La conducta de los organismos',
          definition_or_shift: '1ª Ola: El organismo es una "caja negra" (Black Box). La psicología científica debe limitarse estrictamente a estímulos observables y respuestas mensurables, descartando la cognición interna por inobservable.',
          clinical_impact: 'Técnicas de condicionamiento clásico y extinción operante sin atender a pensamientos o significados.'
        },
        {
          year_or_era: '1958',
          author_milestone: 'Joseph Wolpe — Psicoterapia por inhibición recíproca',
          definition_or_shift: 'Transición Conductual Mediacional: La ansiedad puede inhibirse mediante contracondicionamiento neurofisiológico sistemático utilizando jerarquías de estímulos imaginados.',
          clinical_impact: 'Abre la puerta a la manipulación en imaginación guiada dentro del consultorio.'
        },
        {
          year_or_era: '1962–1979',
          author_milestone: 'Albert Ellis & Aaron T. Beck — Modelo A-B-C y Terapia Cognitiva de la Depresión',
          definition_or_shift: '2ª Ola (Revolución Cognitiva): La cognición no es un epifenómeno; es el mediador causal fundamental. Entre el acontecimiento y la emoción operan esquemas, reglas y pensamientos automáticos que distorsionan el procesamiento.',
          clinical_impact: 'Nacimiento de la TCC moderna: el objetivo terapéutico es identificar, cuestionar empíricamente y reestructurar los pensamientos y esquemas desadaptativos.'
        },
        {
          year_or_era: '1990s',
          author_milestone: 'Jeffrey Young — Terapia de Esquemas (Schema Therapy)',
          definition_or_shift: 'Ampliación a la Personalidad: Para cuadros refractarios con antecedentes de trauma o deprivación afectiva temprana, el foco se desplaza a los Esquemas Tempranos Desadaptativos (ETD) y modos esquemáticos.',
          clinical_impact: 'Integración de técnicas experienciales, re-paternaje limitado en consulta y trabajo con las necesidades emocionales insatisfechas.'
        }
      ]
    },
    {
      concept_title: '2. Línea Temporal del Abordaje de la Ansiedad y el Pánico',
      description: 'De la relajación muscular de Wolpe al desmantelamiento de la evitación experiencial y la reevaluación cognitiva de la amenaza.',
      steps: [
        {
          year_or_era: '1958',
          author_milestone: 'Joseph Wolpe — Desensibilización Sistemática',
          definition_or_shift: 'Contracondicionamiento: La exposición al estímulo fóbico debe realizarse siempre apareada con relajación muscular profunda para evitar que el paciente sienta ansiedad durante la sesión.',
          clinical_impact: 'Proceso lento que evitaba la confrontación directa con la respuesta autonómica.'
        },
        {
          year_or_era: '1986',
          author_milestone: 'David M. Clark & Aaron T. Beck — Modelo Cognitivo del Ataque de Pánico',
          definition_or_shift: 'Catastrofización de Sensaciones Somáticas: El pánico es el resultado de la interpretación catastrófica errónea de sensaciones corporales normales (ej. taquicardia interpretada como "infarto inminente").',
          clinical_impact: 'Protocolo de inducción de síntomas interoceptivos en sesión (hiperventilación) seguido de reatribución cognitiva benigna.'
        },
        {
          year_or_era: '1986–2000s',
          author_milestone: 'Edna Foa & Michelle Craske — Exposición con Prevención de Respuesta y Violación de Expectativas',
          definition_or_shift: 'Habituación y Aprendizaje Inhibitorio: La relajación no es necesaria; el paciente debe tolerar el malestar sin realizar conductas de seguridad para que el cerebro aprenda por desconfirmación fáctica que la catástrofe anticipada no ocurre.',
          clinical_impact: 'Eliminación radical de las "conductas de seguridad" encubiertas (llevar pastillas en el bolsillo, sentarse cerca de la puerta).'
        }
      ]
    }
  ]
};
