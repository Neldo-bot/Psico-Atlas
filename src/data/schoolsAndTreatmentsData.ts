import { SchoolOfThoughtEntity, ClinicalTreatmentEntity, AppliedDomainEntity } from '../types/vaultTypes';

export const schoolsOfThought: SchoolOfThoughtEntity[] = [
  {
    id: 'tcc_contextuales',
    title: 'Terapias Cognitivo-Conductuales y Contextuales (3ª Ola)',
    entity_type: 'school',
    tags: ['#school/cbt', '#school/third_wave', '#dbt', '#act', '#evidence_based'],
    summary: 'Paradigma empírico basado en el aprendizaje, la cognición y el contexto funcional. Abarca desde la TCC clásica (Beck, Ellis) hasta las terapias de aceptación y mindfulness (DBT, ACT, RO-DBT).',
    school_era: '1960s – Presente (1ª ola conductual, 2ª ola cognitiva, 3ª ola contextual)',
    school_founders: ['Aaron T. Beck', 'Albert Ellis', 'Marsha Linehan (DBT)', 'Steven C. Hayes (ACT)', 'Thomas Lynch (RO-DBT)'],
    parent_paradigm: 'Cognitive-Behavioral & Contextual',
    core_concepts: [
      {
        term: 'Tríada Cognitiva de Beck',
        definition: 'Patrón de esquemas negativos sobre uno mismo ("soy defectuoso"), el mundo ("es hostil y demandante") y el futuro ("no hay esperanza"), nuclear en la depresión.'
      },
      {
        term: 'Teoría Biosocial (Linehan)',
        definition: 'La desregulación emocional severa surge de la transacción recíproca continua entre una vulnerabilidad biológica innata (alta sensibilidad, hiperreactividad, lento retorno a la línea de base) y un ambiente invalidante.'
      },
      {
        term: 'Dialéctica Aceptación vs. Cambio',
        definition: 'Principio rector de DBT: aceptar al consultante exactamente como es en este momento presente mientras simultáneamente se le ayuda a cambiar para construir una vida que merezca ser vivida.'
      },
      {
        term: 'Sobrecontrol vs. Bajo Control (Lynch - RO-DBT)',
        definition: 'Diferencial clínico: Mientras la DBT estándar aborda el bajo control (impulsividad, desregulación abierta), la RO-DBT trata el sobrecontrol desadaptativo (hiper-rigidez, inhibición emocional, soledad profunda en TOCP, anorexia y depresión crónica).'
      },
      {
        term: 'Análisis en Cadena Conductual',
        definition: 'Evaluación funcional paso a paso de una conducta blanco: vulnerabilidad basal -> evento disparador -> eslabones (pensamientos, emociones, sensaciones) -> conducta problema -> consecuencias a corto y largo plazo.'
      }
    ],
    view_of_psychopathology: 'El malestar psíquico no es una enfermedad biológica aislada ni una tara moral, sino el resultado de aprendizajes disfuncionales, sesgos en el procesamiento de la información, déficits de habilidades de autorregulación y conductas de evitación experiencial que perpetúan el sufrimiento.',
    epistemological_foundation: 'Pragmatismo funcional, empirismo científico y contextualismo funcional. El criterio de verdad es la efectividad de la intervención orientada a objetivos acordados colaborativamente.',
    historical_evolution: 'Evolucionó desde el condicionamiento clásico/operante (Watson, Skinner) hacia la mediación cognitiva (Beck, Ellis) y culminó en la 3ª ola contextual, que prioriza la función y la relación con los eventos privados por sobre su contenido.',
    therapist_stance: 'Colaborador activo, empático, validante y dialéctico. Actúa como entrenador de habilidades ("coach") y modelo de aceptación radical, combinando calidez compasiva con irreverencia terapéutica estratégica.',
    empirical_critiques: [
      'Riesgo de mecanicismo o abordaje superficial si se aplican protocolos como meras recetas sin conceptualización funcional individualizada.',
      'Exige alto esfuerzo cognitivo y conductual activo entre sesiones (tareas intersesión), lo que puede generar frustración en consultantes con baja adherencia.'
    ],
    related_treatment_ids: ['dbt_protocol', 'ro_dbt_protocol', 'tcc_clasica', 'eccs_crisis']
  },
  {
    id: 'psicoanalisis',
    title: 'Psicoanálisis (Freud, Klein, Lacan)',
    entity_type: 'school',
    tags: ['#school/psychoanalysis', '#freud', '#lacan', '#klein', '#unconscious'],
    summary: 'Paradigma clínico fundado en el descubrimiento del Inconsciente, la dinámica pulsional, la transferencia y la constitución subjetiva a través del lenguaje y la falta.',
    school_era: '1895 – Presente (Viena -> Londres -> París / Buenos Aires)',
    school_founders: ['Sigmund Freud', 'Melanie Klein', 'Jacques Lacan', 'Donald W. Winnicott'],
    parent_paradigm: 'Psychoanalytic & Psychodynamic',
    core_concepts: [
      {
        term: 'El Inconsciente y el Retorno de lo Reprimido',
        definition: 'Instancia psíquica regida por el proceso primario (condensación y desplazamiento) y el principio del placer. El síntoma es una formación de compromiso entre el deseo reprimido y la defensa yoica.'
      },
      {
        term: 'Segunda Tópica Freudiana (1923)',
        definition: 'Estructura tripartita del aparato psíquico: Ello (reservorio pulsional inconsciente), Yo (instancia mediadora con la realidad y sede de defensas) y Superyó (heredero del complejo de Edipo, juez moral e imperativo pulsional).'
      },
      {
        term: 'Posición Esquizoparanoide vs. Depresiva (Klein)',
        definition: 'Primer año de vida y modos de funcionamiento psíquico: de la escisión pecho bueno/malo con defensas maníacas y angustia persecutoria a la integración del objeto total con culpa, duelo y capacidad de reparación.'
      },
      {
        term: 'Estructuras Clínicas Lacanianas',
        definition: 'Diagnóstico estructural según la operación frente a la castración simbólica (Falo / Nombre del Padre): Neurosis (Represión / Verdrängung), Psicosis (Forclusión / Verwerfung) y Perversión (Denegación / Verleugnung).'
      },
      {
        term: 'Los Tres Registros: Real, Simbólico, Imaginario (RSI)',
        definition: 'Dimensiones anudadas borromeanamente en la subjetividad: lo Real (lo imposible de simbolizar, el trauma, el goce), lo Simbólico (el orden del lenguaje, la ley, el significante) y lo Imaginario (la imagen especular, el yo, la ilusión de totalidad).'
      }
    ],
    view_of_psychopathology: 'El síntoma no es un déficit a erradicar ni una conducta desadaptada, sino una solución subjetiva, una metáfora cifrada de un conflicto inconsciente que denuncia la verdad del sujeto y su modo particular de gozar.',
    epistemological_foundation: 'Ruptura con el positivismo médico-biológico. Reconocimiento de una causalidad psíquica subjetiva basada en la palabra, el significante y la historicidad infantil singular.',
    historical_evolution: 'Nace con el método catártico de Freud y Breuer, se consolida con la técnica de asociación libre y atención flotante, se diversifica con la psicología del yo y la escuela inglesa de relaciones objetales (Klein/Winnicott) y se renueva radicalmente con el "retorno a Freud" de Lacan a través de la lingüística estructural.',
    therapist_stance: 'Abstinencia y neutralidad. El analista ocupa el lugar del "Sujeto Supuesto Saber" para posibilitar la neurosis de transferencia y luego destituir esa suposición, operando como corte significante y causa del deseo.',
    empirical_critiques: [
      'Dificultad histórica para operacionalizar sus constructos en ensayos clínicos controlados aleatorizados (ECA).',
      'Tratamientos habitualmente prolongados que pueden resultar inaccesibles para demandas de crisis agudas o contextos institucionales de alta rotación.'
    ],
    related_treatment_ids: ['cura_psicoanalitica', 'psicoterapia_psicodinamica']
  },
  {
    id: 'sistemica_relacional',
    title: 'Psicología Sistémica y Terapia Familiar',
    entity_type: 'school',
    tags: ['#school/systemic', '#family_therapy', '#watzlawick', '#minuchin', '#milan'],
    summary: 'Paradigma interaccional y relacional. Desplaza el foco del individuo aislado ("paciente identificado") hacia el sistema familiar, sus reglas, axiomas de comunicación y patrones circulares.',
    school_era: '1950s – Presente (Palo Alto MRI, Filadelfia, Milán, Roma)',
    school_founders: ['Ludwig von Bertalanffy (TGS)', 'Gregory Bateson', 'Paul Watzlawick (MRI)', 'Salvador Minuchin (Estructural)', 'Mara Selvini Palazzoli (Milán)', 'Maurizio Andolfi'],
    parent_paradigm: 'Systemic & Relational',
    core_concepts: [
      {
        term: 'Axiomas de la Comunicación Humana (Watzlawick)',
        definition: '1. Es imposible no comunicar. 2. Toda comunicación tiene un nivel de contenido y uno de relación. 3. La naturaleza de una relación depende de la puntuación de las secuencias. 4. Comunicación digital y analógica. 5. Interacción simétrica o complementaria.'
      },
      {
        term: 'Cambio de 1º Orden vs. Cambio de 2º Orden',
        definition: 'Cambio-1: Variaciones cuantitativas dentro de las reglas existentes del sistema ("más de lo mismo", homeostasis). Cambio-2: Modificación cualitativa discontinua de la estructura de reglas del sistema (morfogénesis).'
      },
      {
        term: 'Estructura Familiar y Límites (Minuchin)',
        definition: 'Organización familiar en subsistemas (conyugal, parental, fraterno) regulada por límites: Claros (funcionales), Difusos (familias aglutinadas / enredo) o Rígidos (familias desligadas).'
      },
      {
        term: 'Tríada de Conducción de Sesión (Milán)',
        definition: 'Hipotetización (construcción previa de hipótesis sistémica), Circularidad (preguntas triádicas de diferencias entre miembros) y Neutralidad (alianza con todos y con ninguno).'
      },
      {
        term: 'Paciente Identificado (PI) y Función del Síntoma',
        definition: 'El miembro que porta el síntoma no es el "enfermo", sino el emergente que equilibra o denuncia la disfunción homeostática del juego familiar.'
      }
    ],
    view_of_psychopathology: 'El síntoma no reside intrapsíquicamente en una persona, sino en el circuito de interacciones entre los miembros de un sistema. El síntoma cumple una función protectora o mantenedora del equilibrio familiar frente a una crisis no resuelta.',
    epistemological_foundation: 'Cibernética de 1er orden (sistemas observados) y Cibernética de 2º orden (sistemas observantes / constructivismo: el terapeuta co-construye la realidad con la familia).',
    historical_evolution: 'Nace con la Teoría General de los Sistemas y los estudios sobre doble vínculo en esquizofrenia (Bateson). Se bifurca en la Terapia Breve Estratégica (MRI Palo Alto), el Modelo Estructural de Minuchin, la Escuela de Milán (paradoja y contraparadoja) y los enfoques narrativos contemporáneos.',
    therapist_stance: 'Activo, directivo y relacional. En el modelo estructural entra y sale del sistema ("coping / joining / desestabilización"); en Milán mantiene neutralidad curiosa y realiza preguntas circulares.',
    empirical_critiques: [
      'Riesgo de culpabilizar implícitamente a la familia en cuadros con fuerte base biológica si no se articula con psicoeducación.',
      'Dificultad operativa para citar y comprometer a todo el grupo familiar en consultorio privado.'
    ],
    related_treatment_ids: ['mri_estrategico', 'estructural_minuchin', 'milan_sistemica']
  }
];

export const clinicalTreatments: ClinicalTreatmentEntity[] = [
  {
    id: 'dbt_protocol',
    title: 'Terapia Dialéctico Conductual (DBT Estándar)',
    entity_type: 'treatment',
    treatment_school_id: 'tcc_contextuales',
    treatment_school_name: 'Terapias Cognitivo-Conductuales y Contextuales (3ª Ola)',
    tags: ['#dbt', '#bpd', '#suicide_prevention', '#skills_training', '#validation'],
    summary: 'Tratamiento multimodal con el mayor respaldo empírico para el Trastorno Límite de la Personalidad y conductas suicidas/autolesivas recurrentes.',
    target_disorders: [
      'Trastorno Límite de la Personalidad (TLP)',
      'Conducta Suicida Crónica y Tentativas Recurrentes',
      'Conductas Autolesivas Sin Intención Suicida (CASIS/NSSI)',
      'Desregulación Emocional Severa y Multidiagnóstico',
      'Consumo Problemático de Sustancias comórbido'
    ],
    evidence_grade: 'Nivel 1A (Ensayos Clínicos Aleatorizados Múltiples · Guías APA / NICE)',
    session_count_typical: 'Tratamiento completo de 1 año (renovable)',
    delivery_format: 'Combined',
    core_mechanisms: [
      'Dialéctica continua entre Validación (Aceptación) y Resolución de Problemas (Cambio)',
      'Entrenamiento estructurado en 4 módulos de habilidades: Mindfulness, Tolerancia al Malestar, Regulación Emocional y Efectividad Interpersonal',
      'Coaching telefónico en crisis para generalizar habilidades al contexto natural',
      'Equipo de consultoría para terapeutas (el terapeuta no trabaja solo)'
    ],
    protocol_phases: [
      {
        phase_number: 0,
        title: 'Pre-Tratamiento y Orientación',
        objective: 'Evaluar adecuación, obtener compromiso explícito con la terapia y acordar metas.',
        interventions: [
          'Psicoeducación sobre la Teoría Biosocial y el modelo DBT',
          'Establecimiento de las reglas del encuadre (asistencia, llamadas telefónicas, 24 horas tras autolesión)',
          'Firma del Compromiso con el Tratamiento (no contrato de no suicidio)'
        ]
      },
      {
        phase_number: 1,
        title: 'Etapa 1: Estabilización y Control Conductual',
        objective: 'Lograr control sobre conductas desorganizadas según estricta jerarquía de blancos.',
        interventions: [
          'Jerarquía Blanco 1: Conductas que amenazan la vida (suicidio, autolesión, ideación inminente - Protocolo ECCS)',
          'Jerarquía Blanco 2: Conductas que interfieren con la terapia (llegadas tarde, no hacer tareas, llamadas impulsivas)',
          'Jerarquía Blanco 3: Conductas que destruyen la calidad de vida (consumo, desempleo crónico, aislamiento)',
          'Entrenamiento en Habilidades TIPP (Temperatura, Ejercicio Intenso, Respiración Pausada, Relajación Muscular Progresiva)'
        ]
      },
      {
        phase_number: 2,
        title: 'Etapa 2: Procesamiento del Sufrimiento Silencioso (TEPT)',
        objective: 'Experimentar emociones plenamente sin revictimización ni disociación.',
        interventions: [
          'Exposición prolongada adaptada a trauma complejo (DBT-PE)',
          'Duelo por la vida perdida y aceptación del pasado'
        ]
      },
      {
        phase_number: 3,
        title: 'Etapa 3 y 4: Construcción de una Vida Ordinaria y Plenitud',
        objective: 'Auto-respeto, logro de metas vocacionales y capacidad de alegría sostenida.',
        interventions: [
          'Consolidación de autonomía personal',
          'Espiritualidad / conexión profunda con la comunidad'
        ]
      }
    ],
    clinical_vignettes: [
      {
        situation: 'El consultante llega a sesión con cortes recientes y dice: "Nada sirve, el fin de semana me voy a matar".',
        therapist_action: 'Suspende cualquier tema accesorio (Jerarquía Blanco 1). Aplica Validación de Nivel 5 ("Entiendo que el dolor que sentiste el domingo fue insoportable...") y de inmediato activa Análisis en Cadena e intervención ECCS.',
        rationale: 'Validar el dolor sin validar la conducta suicida previene el refuerzo accidental de la crisis manteniendo la primacía de la vida.'
      }
    ],
    outcome_measures: [
      'Frecuencia y letalidad de conductas autolesivas e intentos suicidas',
      'Escala de Dificultades en la Regulación Emocional (DERS)',
      'Días de internación psiquiátrica evitados'
    ],
    has_interactive_tool: true,
    interactive_tool_type: 'chain_analysis'
  },
  {
    id: 'ro_dbt_protocol',
    title: 'RO-DBT (Terapia Dialéctico Conductual Radicamente Abierta)',
    entity_type: 'treatment',
    treatment_school_id: 'tcc_contextuales',
    treatment_school_name: 'Terapias Cognitivo-Conductuales y Contextuales (3ª Ola)',
    tags: ['#ro_dbt', '#overcontrol', '#anorexia', '#ocpd', '#social_signaling'],
    summary: 'Tratamiento pionero de Thomas Lynch para trastornos del Sobrecontrol Emocional (Anorexia Restrictiva, TOCP, Depresión Crónica Resistente).',
    target_disorders: [
      'Trastorno de la Personalidad Obsesivo-Compulsiva (TOCP)',
      'Trastorno de la Personalidad Evitativa y Esquizoide',
      'Anorexia Nerviosa Restrictiva',
      'Depresión Mayor Crónica Resistente a Tratamiento',
      'Trastornos de Ansiedad con Sobrecontrol y Perfeccionismo Desadaptativo'
    ],
    evidence_grade: 'Nivel 1B (Múltiples ECA internacionales - Ensayo RefraMED)',
    session_count_typical: '30 semanas estructuradas',
    delivery_format: 'Combined',
    core_mechanisms: [
      'Receptividad y Apertura Radical (Radical Openness): aprender de lo que el entorno ofrece sin juzgarlo a priori',
      'Flexibilidad Conductual frente a la hiper-planificación rígida',
      'Señalización Social y Conexión Íntima: modificar la expresión facial, tono de voz y postura para restaurar la afiliación social'
    ],
    protocol_phases: [
      {
        phase_number: 1,
        title: 'Módulo 1: Reconocimiento del Sobrecontrol',
        objective: 'Identificar el perfil de sobrecontrolador (OC) y diferenciarlo de la desregulación emocional impulsiva.',
        interventions: [
          'Psicoeducación sobre los 4 rasgos del OC: control inhibitorio excesivo, atención al detalle elevada, hipervigilancia a la amenaza y señalización social no sincera',
          'Evaluación de la soledad como el problema nuclear (no la tristeza ni la ansiedad)'
        ]
      },
      {
        phase_number: 2,
        title: 'Módulo 2: Apertura Radical y Activar el Sistema de Seguridad Social',
        objective: 'Aprender a sonreír con la mirada (Duchenne) y regular el tono vagal ventral.',
        interventions: [
          'Habilidades para activar el sistema neurobiológico de seguridad social (postura abierta, contacto visual suave, cejas levantadas)',
          'Práctica de auto-indagación ("Self-Enquiry") ante lo que genera molestia o crítica'
        ]
      }
    ],
    clinical_vignettes: [
      {
        situation: 'El consultante dice con voz monótona y sonrisa congelada: "Todo está perfecto, no tengo ningún problema", mientras sus puntajes de depresión son extremos.',
        therapist_action: 'El terapeuta señala amablemente la incongruencia en la señalización social: "Noto que me sonríes mientras me cuentas algo doloroso. Tu rostro me dice que todo está bien, pero sospecho que estás sufriendo en soledad".',
        rationale: 'Rompe la máscara de sobrecontrol y modela la vulnerabilidad compartida como puente de conexión humana.'
      }
    ],
    outcome_measures: [
      'Puntaje en Escala de Soledad de UCLA',
      'Inventario de Depresión de Beck (BDI-II)',
      'Flexibilidad psicológica y reducción de conductas de control alimentario/perfeccionismo'
    ]
  },
  {
    id: 'eccs_crisis',
    title: 'Protocolo ECCS: Entrevista con Consultantes con Conductas Suicidas',
    entity_type: 'treatment',
    treatment_school_id: 'tcc_contextuales',
    treatment_school_name: 'Terapias Cognitivo-Conductuales y Contextuales (3ª Ola)',
    tags: ['#crisis', '#suicide_risk', '#safety_planning', '#eccs', '#linehan'],
    summary: 'Guía clínica estructurada basada en evidencia para evaluar el riesgo suicida inminente, desactivar la crisis, obtener el Compromiso con el Tratamiento y confeccionar el Plan de Seguridad.',
    target_disorders: [
      'Ideación Suicida Activa y Pasiva ("Ideas de Puerta Trasera")',
      'Crisis Suicida Aguda en Consultorio o Guardia',
      'Tentativa de Suicidio Reciente',
      'Consultantes con Trastornos Afectivos o de Personalidad en Riesgo'
    ],
    evidence_grade: 'Nivel 1A (Basado en L-RAMP, C-SSRS y Plan de Seguridad de Stanley & Brown)',
    session_count_typical: 'Entrevista de Crisis de 50 a 60 minutos',
    delivery_format: 'Individual',
    core_mechanisms: [
      'Activación directa mediante la pregunta clara: "¿Estás pensando en matarte?" (sin eufemismos)',
      'Diferenciación estricta entre Factores de Riesgo Crónicos (predisponentes) e Indicadores de Riesgo Inminente (gatillantes agudos)',
      'Reemplazo del "Contrato de No Suicidio" (desacreditado e ineficaz) por el Compromiso con el Tratamiento (CT)',
      'Confección colaborativa y manuscrita del Plan de Seguridad (PS) de 6 pasos',
      'Restricción innegociable y física de medios letales'
    ],
    protocol_phases: [
      {
        phase_number: 1,
        title: 'Fase 1: Conexión, Validación y Nomenclatura Descriptiva',
        objective: 'Establecer presencia compasiva, superar el miedo del terapeuta y nombrar la conducta.',
        interventions: [
          'Pregunta directa y abierta sobre ideación suicida',
          'Nomenclatura precisa: CS, IS activa vs pasiva, plan específico vs inespecífico, ensayo suicida',
          'Validar el dolor sin validar la muerte como solución'
        ]
      },
      {
        phase_number: 2,
        title: 'Fase 2: Evaluación del Riesgo y Análisis Funcional',
        objective: 'Determinar la severidad y los detonantes agudos.',
        interventions: [
          'Explorar intención, letalidad del método y grado de planificación',
          'Identificar la "puerta trasera": la ideación como escape al dolor insoportable',
          'Evaluar la ambivalencia (motivos para vivir vs motivos para morir)'
        ]
      },
      {
        phase_number: 3,
        title: 'Fase 3: Compromiso con el Tratamiento (CT) y Plan de Seguridad (PS)',
        objective: 'Comprometer con el proceso terapéutico y construir la herramienta de emergencia.',
        interventions: [
          'Acuerdo explícito de tratamiento por un tiempo mínimo ("La dosis importa")',
          'Paso 1: Señales de alarma personales',
          'Paso 2: Estrategias internas (habilidades TIPP, distracción, autogestión)',
          'Paso 3: Contactos sociales para distracción',
          'Paso 4: Red de apoyo para pedir ayuda',
          'Paso 5: Profesionales y líneas de crisis 24/7',
          'Paso 6: Restricción INNEGOCIABLE del acceso a medios letales'
        ]
      }
    ],
    clinical_vignettes: [
      {
        situation: 'El consultante se niega a entregar las pastillas que tiene guardadas en su mesa de luz.',
        therapist_action: 'El terapeuta se mantiene firme pero afectivo: "Entiendo que tenerlas ahí te da una sensación de control, pero para que yo pueda ayudarte a salir de este dolor necesito que retiremos ese riesgo de tu alcance hoy mismo. Llamemos a tu hermano para que las guarde bajo llave".',
        rationale: 'La restricción del medio letal aumenta el tiempo entre el impulso y la acción, salvando vidas de forma comprobada.'
      }
    ],
    outcome_measures: [
      'Confección efectiva del Plan de Seguridad',
      'Reducción de la urgencia suicida autoinformada (0 a 10)',
      'Seguimiento telefónico coordinado a las 24–48 horas'
    ],
    has_interactive_tool: true,
    interactive_tool_type: 'eccs'
  }
];

export const appliedDomains: AppliedDomainEntity[] = [
  {
    id: 'ovo_vocacional',
    title: 'Orientación Vocacional y Ocupacional (OVO)',
    entity_type: 'domain',
    domain_name: 'Orientación Vocacional (OVO)',
    tags: ['#domain/ovo', '#vocational', '#bohoslavsky', '#identity', '#pps'],
    summary: 'Ámbito de intervención clínica y psicosocial centrado en el acompañamiento en la toma de decisiones vocacionales, laborales y de proyecto de vida.',
    primary_role_description: 'El orientador facilita un espacio reflexivo donde el consultante transita el duelo por las opciones descartadas, desmitifica mandatos familiares y articula sus intereses, aptitudes y valores con la realidad del mercado educativo y laboral.',
    key_methodologies: [
      'Enfoque Clínico de Rodolfo Bohoslavsky (no actuarial o psicotécnico ciego)',
      'Técnicas reflexivas: Frases Incompletas Vocacionales, R.O.V. (Registro de Opciones Vocacionales)',
      'Matriz FODA Vocacional (Fortalezas, Oportunidades, Debilidades, Amenazas)',
      'Árbol Genealógico Ocupacional y análisis de mandatos transgeneracionales',
      'Entrevistas informativas con profesionales y exploración de planes de estudio'
    ],
    legal_and_regulatory_framework: [
      'Ley Nacional de Ejercicio Profesional de la Psicología (Ley 23.277 en Argentina)',
      'Consentimiento informado específico en menores de edad'
    ],
    common_deliverables: [
      'Informe Final de Orientación Vocacional (Síntesis del proceso, perfil de intereses, aptitudes destacadas y proyecto académico/ocupacional)',
      'Plan de Acción Vocacional por etapas'
    ],
    critical_competencies: [
      'Manejo de la ansiedad ante la elección y tolerancia a la incertidumbre',
      'Diferenciación entre fantasía de éxito social y vocación genuina',
      'Conocimiento actualizado de la oferta universitaria y mercado laboral actual'
    ]
  },
  {
    id: 'juridica_forense',
    title: 'Psicología Jurídica y Forense',
    entity_type: 'domain',
    domain_name: 'Psicología Jurídica y Forense',
    tags: ['#domain/forensic', '#legal', '#peritaje', '#imputabilidad', '#dano_psiquico'],
    summary: 'Práctica pericial y de asesoramiento técnico dentro del ámbito del derecho civil, penal, laboral y de familia.',
    primary_role_description: 'El perito psicólogo (oficial o de parte) evalúa el daño psíquico, la capacidad civil, la imputabilidad penal y la dinámica vincular en litigios judiciales, respondiendo estrictamente a los puntos de pericia fijados por el juez.',
    key_methodologies: [
      'Entrevista Pericial Forense (Encuadre no terapéutico, advertencia sobre la falta de secreto profesional ante el juez)',
      'Batería Psicodiagnóstica Combinada (Técnicas psicométricas MMPI-2/SCL-90-R + Proyectivas Rorschach/Bender)',
      'Detección de Simulación (inventar síntomas) y Disimulación (ocultar patología)',
      'Determinación de causalidad jurídica: Causa directa vs. Concausa vs. Estado anterior'
    ],
    legal_and_regulatory_framework: [
      'Código Procesal Civil y Comercial de la Nación (CPCCN)',
      'Código Penal (Artículo 34: Inimputabilidad por alteración morbosa de las facultades)',
      'Ley de Salud Mental 26.657 (Presunción de capacidad jurídica)'
    ],
    common_deliverables: [
      'Dictamen Pericial Psicológico Forense formal con fundamentación técnico-científica',
      'Informe de Puntos de Pericia (Daño psíquico porcentual según baremos, secuelas e incapacidad)'
    ],
    critical_competencies: [
      'Rigurosidad metodológica y fundamentación empírica libre de sesgos ideológicos',
      'Claridad redaccional para operadores del derecho (sin jerga incomprensible)',
      'Manejo de la ratificación pericial en audiencia oral'
    ]
  },
  {
    id: 'laboral_rrhh',
    title: 'Psicología Laboral, Organizacional y Selección de Personal',
    entity_type: 'domain',
    domain_name: 'Psicología Laboral y RR.HH.',
    tags: ['#domain/labor', '#hr', '#selection', '#competencies', '#assessment'],
    summary: 'Gestión del comportamiento humano en contextos organizacionales: evaluación de potencial, selección por competencias y clima laboral.',
    primary_role_description: 'Evaluar la adecuación entre el perfil psicológico y competencial del candidato y los requerimientos del puesto laboral, promoviendo el bienestar y la productividad.',
    key_methodologies: [
      'Modelo de Gestión por Competencias (Spencer & Spencer, Martha Alles)',
      'Entrevista por Competencias (Modelo STAR: Situación, Tarea, Acción, Resultado)',
      'Assessment Center (Juegos de roles, dinámicas grupales y estudios de casos in-basket)',
      'Batería Psicotécnica Laboral: Test de Persona bajo la lluvia (reacción ante presiones), Luscher, Wartegg, Zulliger'
    ],
    legal_and_regulatory_framework: [
      'Ley de Contrato de Trabajo (LCT)',
      'Ley de Protección de Datos Personales (Habeas Data)',
      'No discriminación e inclusión en procesos de empleo'
    ],
    common_deliverables: [
      'Informe Psicotécnico Laboral (Adecuación al perfil, fortalezas, áreas de mejora y potencial de desarrollo)',
      'Matriz Comparativa de Candidatos'
    ],
    critical_competencies: [
      'Objetividad y estandarización en la evaluación',
      'Comprensión del negocio y cultura organizacional',
      'Devolución constructiva y ética a postulantes'
    ]
  },
  {
    id: 'salud_publica_institucional',
    title: 'Salud Pública, Institucional y Comunitaria',
    entity_type: 'domain',
    domain_name: 'Salud Pública y Comunitaria',
    tags: ['#domain/public_health', '#institutional', '#ulloa', '#mental_health_law'],
    summary: 'Abordaje psicosocial en hospitales, dispositivos comunitarios y organizaciones, fundamentado en la Ley de Salud Mental y los aportes de Fernando Ulloa.',
    primary_role_description: 'Intervenir en la promoción, prevención primaria y restitución de derechos en salud mental, transformando dispositivos asilares en redes interdisciplinarias de base comunitaria.',
    key_methodologies: [
      'Dispositivos grupales y asambleas comunitarias',
      'Análisis Institucional y detección de la "Cultura de la Mortificación" (Fernando Ulloa)',
      'Estrategia de la "Ternura como fundamento ético" frente a la encerrona trágica',
      'Epidemiología crítica en salud mental'
    ],
    legal_and_regulatory_framework: [
      'Ley Nacional de Salud Mental Nº 26.657 (Desmanicomialización, consentimiento, internación como último recurso)',
      'Convención sobre los Derechos de las Personas con Discapacidad (ONU)'
    ],
    common_deliverables: [
      'Informes Interdisciplinarios de Admisión y Seguimiento Hospitalario (Modelo Ulloa / Sala)',
      'Diagnósticos Situacionales Comunitarios y Proyectos de Intervención Barrial'
    ],
    critical_competencies: [
      'Capacidad de trabajo interdisciplinario (médicos, trabajadores sociales, enfermería)',
      'Sensibilidad social y perspectiva de derechos humanos',
      'Manejo de la implicación institucional'
    ]
  },
  {
    id: 'etica_deontologia',
    title: 'Ética y Deontología Profesional',
    entity_type: 'domain',
    domain_name: 'Ética y Deontología Profesional',
    tags: ['#domain/ethics', '#deontology', '#confidentiality', '#consent'],
    summary: 'Marco regulatorio normativo y ético que rige la práctica profesional del psicólogo en todos sus campos de actuación.',
    primary_role_description: 'Garantizar el respeto por la dignidad, autonomía, confidencialidad y bienestar integral de los consultantes y sujetos de investigación.',
    key_methodologies: [
      'Consentimiento Informado (proceso continuo, libre, esclarecido y documentado)',
      'Gestión del Secreto Profesional y sus Justas Causas de Levantamiento (riesgo inminente de daño grave para sí o para terceros)',
      'Detección y resolución de Relaciones Múltiples o Conflictos de Intereses',
      'Juicio ético deliberativo en situaciones de dilema clínico'
    ],
    legal_and_regulatory_framework: [
      'Código de Ética de la Federación de Psicólogos de la República Argentina (FePRA)',
      'Código Civil y Comercial de la Nación (Responsabilidad profesional y derechos personalísimos)'
    ],
    common_deliverables: [
      'Documento de Consentimiento Informado Terapéutico / Pericial',
      'Actas de notificación ante levantamiento fundado de secreto profesional'
    ],
    critical_competencies: [
      'Discernimiento ético por sobre la mera conveniencia legal o corporativa',
      'Cuidado estricto del archivo y confidencialidad de historias clínicas',
      'Reconocimiento de los propios límites competenciales y derivación oportuna'
    ]
  }
];
