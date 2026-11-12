import { SchoolOfThoughtEntity } from '../../types/vaultTypes';

export const thirdWaveDeepData: SchoolOfThoughtEntity = {
  id: 'terapias_contextuales_3a_ola',
  title: 'Terapias Contextuales y de 3ª Ola (DBT, RO-DBT, ACT)',
  entity_type: 'school',
  tags: ['#school/third_wave', '#dbt', '#ro_dbt', '#act', '#linehan', '#lynch', '#hayes', '#evidence_based'],
  summary: 'Paradigma contextual que enfatiza la función y la relación del sujeto con sus eventos privados (emociones, pensamientos) por sobre su contenido literal, integrando aceptación radical, mindfulness, dialéctica y señalización social.',
  school_era: '1990s – Presente (Seattle, Reno, Southampton)',
  school_founders: ['Marsha M. Linehan (DBT)', 'Thomas R. Lynch (RO-DBT)', 'Steven C. Hayes (ACT)', 'Kirk Strosahl', 'Kelly Wilson'],
  parent_paradigm: 'Cognitive-Behavioral & Contextual',

  core_concepts: [
    {
      term: 'Teoría Biosocial (Linehan)',
      definition: 'La desregulación emocional severa surge de la transacción recíproca continua entre una vulnerabilidad biológica innata (alta sensibilidad a estímulos afectivos, hiperreactividad extrema, lento retorno a la línea de base) y un ambiente invalidante.'
    },
    {
      term: 'Dialéctica Aceptación vs. Cambio',
      definition: 'Principio rector supremo: validar y aceptar incondicionalmente al consultante exactamente como es en este instante, mientras simultáneamente se le ayuda con firmeza compasiva a cambiar las conductas que destruyen su vida.'
    },
    {
      term: 'Sobrecontrol vs. Bajo Control (Lynch)',
      definition: 'Diferencial clínico crucial: DBT estándar aborda el bajo control (impulsividad, desregulación dramática, TLP); RO-DBT trata el sobrecontrol desadaptativo (hiper-rigidez, inhibición emocional encubierta, soledad profunda en TOCP, anorexia y depresión crónica).'
    },
    {
      term: 'Flexibilidad Psicológica y Hexaflex (Hayes - ACT)',
      definition: 'Habilidad de contactar el momento presente de forma plena y consciente, cambiando o persistiendo en la conducta según lo requieran los valores personales libremente elegidos.'
    },
    {
      term: 'Compromiso con el Tratamiento (CT) y Plan de Seguridad',
      definition: 'Sustituto empírico del desacreditado "contrato de no suicidio". Supone un acuerdo activo donde el consultante consiente permanecer con vida para someter a prueba la terapia y aplica el plan de 6 pasos de Stanley & Brown.'
    }
  ],

  view_of_psychopathology: 'El sufrimiento psicológico no es un déficit químico aislado ni un error de lógica racional, sino el resultado de la evitación experiencial, la fusión cognitiva inflexible, los déficits de habilidades de autorregulación y la ruptura de la señalización social de seguridad.',
  epistemological_foundation: 'Contextualismo funcional y pragmatismo radical. Un pensamiento o emoción no es intrínsecamente patológico o erróneo; su valor de verdad depende de su función adaptativa y de si conduce o no a construir una vida que merezca ser vivida.',
  historical_evolution: 'Nace como respuesta empírica a las limitaciones de la TCC clásica de 2ª ola al tratar consultantes con suicidialidad crónica, trastorno límite de la personalidad y dolor emocional extremo donde discutir racionalmente los pensamientos generaba mayor invalidación.',
  therapist_stance: 'Dialéctico, compasivo, genuino, irreverente y validante. En DBT es un entrenador activo (coach); en RO-DBT modela vulnerabilidad y apertura radical; en ACT es un compañero de viaje en la misma condición humana.',
  empirical_critiques: [
    'Alta demanda formativa y de recursos institucionales (la DBT estándar completa exige cuatro componentes simultáneos: terapia individual, grupo de habilidades, coaching telefónico y equipo de consulta para el terapeuta).',
    'La terminología contextual (RFT, marcos relacionales) puede resultar excesivamente compleja en la formación inicial.'
  ],
  related_treatment_ids: ['dbt_protocol', 'ro_dbt_protocol', 'eccs_crisis', 'act_valores'],

  // =========================================================================
  // MÓDULO 1: GLOSARIO EXHAUSTIVO DE PALABRAS CLAVE
  // =========================================================================
  keywords_glossary: [
    {
      term: 'Ambiente Invalidante',
      original_language_term: 'Invalidating Environment (Linehan)',
      definition: 'Entorno familiar o social que responde sistemáticamente a la expresión de experiencias privadas (emociones, dolor, preferencias) con respuestas erráticas, castigo, desestimación o burla ("No es para tanto", "Lloras por cualquier tontería").',
      clinical_distinction: '[VERDAD: Enseña al niño a desconfiar de sus propias emociones y a oscilar entre la inhibición extrema y la escalada desregulada para ser escuchado].'
    },
    {
      term: 'Mente Racional, Mente Emocional y Mente Sabia',
      original_language_term: 'Reasonable Mind, Emotion Mind & Wise Mind',
      definition: 'La Mente Racional es fría, lógica y despojada de afecto; la Mente Emocional está secuestrada por la urgencia del impulso; la Mente Sabia (Wise Mind) es la síntesis dialéctica e integración donde la razón y la emoción se encuentran en una intuición centrada y lúcida.',
      clinical_distinction: '[VERDAD: El entrenamiento en mindfulness busca que el consultante aprenda a acceder a su Mente Sabia en momentos de crisis].'
    },
    {
      term: 'Aceptación Radical',
      original_language_term: 'Radical Acceptance',
      definition: 'Aceptar la realidad exactamente como es en este momento, de corazón, mente y cuerpo, sin juzgarla, sin resistirse y sin intentar pelear contra los hechos ya ocurridos. Aceptar no significa aprobar ni resignarse; significa dejar de transformar el dolor inevitable en sufrimiento.',
      clinical_distinction: '[VERDAD: Dolor inevitable + No aceptación = Sufrimiento crónico. Aceptar es el requisito indispensable para poder cambiar].'
    },
    {
      term: 'Análisis en Cadena Conductual',
      original_language_term: 'Behavioral Chain Analysis',
      definition: 'Evaluación funcional paso a paso de una conducta problema (autolesión, atracón, explosión de ira): Vulnerabilidad basal -> Evento disparador -> Eslabón por eslabón (pensamientos, sensaciones somáticas, emociones) -> Conducta problema -> Consecuencias a corto y largo plazo.',
      clinical_distinction: '[VERDAD: Permite identificar exactamente en qué eslabones de la cadena fallaron las habilidades y dónde insertar soluciones preventivas].'
    },
    {
      term: 'Jerarquía de Blancos Terapéuticos DBT',
      original_language_term: 'Hierarchy of Treatment Targets',
      definition: 'Orden de prioridades estricto e innegociable en sesión individual: 1. Conductas que atentan contra la vida (suicidio, autolesión), 2. Conductas que atentan contra la terapia (llegadas tarde, no hacer tareas, deshonestidad), 3. Conductas que atentan contra la calidad de vida (adicciones, aislamiento, desempleo), 4. Adquisición de habilidades.',
      clinical_distinction: '[VERDAD: Si hay riesgo suicida activo, se suspende cualquier otro tema hasta restablecer la seguridad del consultante].'
    },
    {
      term: 'Habilidades TIPP (Tolerancia al Malestar)',
      original_language_term: 'TIPP Skills (Temperature, Intense Exercise, Paced Breathing, Paired Muscle Relaxation)',
      definition: 'Estrategias neurofisiológicas de choque para desactivar la hiperactivación simpática en segundos: 1. Temperatura (sumergir la cara en agua helada por 30s activa el reflejo de inmersión mamífero y desacelera el ritmo cardíaco vía nervio vago), 2. Ejercicio intenso, 3. Respiración acompasada (exhalación más larga que inhalación), 4. Relajación muscular pareada.',
      clinical_distinction: '[VERDAD: Cambian la química corporal sin necesidad de recurrir a conductas autodestructivas].'
    },
    {
      term: 'Acción Opuesta',
      original_language_term: 'Opposite Action',
      definition: 'Técnica de regulación emocional: cuando una emoción es injustificada por los hechos o su acción impulsiva resulta dañina, se actúa voluntariamente de forma diametralmente opuesta al impulso emocional (ej. en vergüenza tóxica: mostrarse con la frente en alto; en tristeza depresiva: activarse físicamente y salir).',
      clinical_distinction: '[VERDAD: Debe realizarse "con todo el cuerpo" para reprogramar la respuesta neuroafectiva cerebral].'
    },
    {
      term: 'Apertura Radical (Radical Openness - Lynch)',
      original_language_term: 'Radical Openness (RO-DBT)',
      definition: 'Disposición activa a buscar lo que el entorno puede enseñarnos, especialmente aquello que nos resulta incómodo o desafía nuestras certezas previas. Se compone de Receptividad abierta, Autocuestionamiento flexible y Señalización social auténtica.',
      clinical_distinction: '[VERDAD: Antídoto contra la rigidez moralista y el perfeccionamiento hipervigilante de las personalidades sobrecontroladas].'
    },
    {
      term: 'Señalización Social y Teoría Polivagal (Lynch / Porges)',
      original_language_term: 'Social Signaling & Polyvagal Theory',
      definition: 'La conexión humana depende de señales no verbales involuntarias (tono de voz prosódico, microexpresiones faciales, contacto visual cálido) que activan el Complejo Vagal Ventral de seguridad social en el cerebro del otro. El sobrecontrol exhibe caras inexpresivas que el entorno percibe inconscientemente como amenaza o frialdad.',
      clinical_distinction: '[VERDAD: En RO-DBT, cambiar la señalización social es más potente para curar la soledad que cambiar pensamientos en el aislamiento de la mente].'
    },
    {
      term: 'Fusión Cognitiva y Defusión (ACT)',
      original_language_term: 'Cognitive Fusion & Defusion',
      definition: 'Fusión es el estado donde el sujeto confunde sus pensamientos con la realidad misma (quedar atrapado en el lenguaje). Defusión es aprender a observar los pensamientos como lo que son: meras palabras, sonidos e imágenes transitorias, sin obedecerlos ni pelear contra ellos.',
      clinical_distinction: '[VERDAD: En ACT no se debate si un pensamiento es "lógico o distorsionado" (como en 2ª ola); se altera la relación con el pensamiento: "Noto que mi mente me está diciendo que soy un inútil"].'
    },
    {
      term: 'Evitación Experiencial (ACT)',
      original_language_term: 'Experiential Avoidance',
      definition: 'Tendencia desadaptativa a intentar escapar, suprimir o alterar la frecuencia de eventos privados dolorosos (ansiedad, recuerdos, tristeza), a expensas de abandonar conductas valiosas. Es la causa principal del estrechamiento vital y la psicopatología crónica.',
      clinical_distinction: '[VERDAD: Cuanto más intentas no pensar en algo o no sentir dolor, más grande se vuelve el dolor].'
    },
    {
      term: 'Valores vs. Metas (ACT)',
      original_language_term: 'Values vs. Goals',
      definition: 'Los valores son direcciones de vida elegidas libremente, continuas e inagotables (como una brújula que marca el Norte: ej. "ser un padre afectuoso y presente"). Las metas son hitos que se alcanzan y concluyen (ej. "llevar a mi hijo al parque hoy").',
      clinical_distinction: '[VERDAD: El éxito de la terapia no es sentirse feliz, sino vivir una vida orientada a valores significativos].'
    }
  ],

  // =========================================================================
  // MÓDULO 2: AUTORES CANÓNICOS Y OBRAS ORIGINALES
  // =========================================================================
  canonical_authors: [
    {
      name: 'Marsha M. Linehan',
      era_years: '1943 – Presente (Universidad de Washington, Seattle)',
      core_thesis: 'Las personas con alta vulnerabilidad biológica a la desregulación emocional criadas en ambientes invalidantes necesitan una síntesis de aceptación radical incondicional y entrenamiento riguroso en habilidades para construir una vida que merezca ser vivida.',
      key_works: [
        { title: 'Tratamiento cognitivo-conductual del trastorno límite de la personalidad (Cognitive-Behavioral Treatment of BPD)', year: 1993, significance: 'Manual fundacional de la DBT que demostró por primera vez en ensayos clínicos reducir a la mitad los intentos de suicidio.' },
        { title: 'Manual de entrenamiento en habilidades DBT (DBT Skills Training Manual)', year: 2014, significance: 'Protocolo estandarizado de los 4 módulos: Mindfulness, Tolerancia al Malestar, Regulación Emocional y Efectividad Interpersonal.' },
        { title: 'Construir una vida que merezca ser vivida: Una memoria', year: 2020, significance: 'Autobiografía donde revela su propia experiencia de internación psiquiátrica y superación personal.' }
      ]
    },
    {
      name: 'Thomas R. Lynch',
      era_years: '1959 – Presente (Universidad de Southampton)',
      core_thesis: 'El sobrecontrol emocional desadaptativo (hiper-rigidez, perfeccionismo, inhibición y necesidad compulsiva de aprobación) causa soledad profunda y trastornos refractarios (anorexia, TOCP, depresión crónica resistente). La cura es la Apertura Radical y la conexión social.',
      key_works: [
        { title: 'Terapia dialéctico conductual con apertura radical (Radically Open Dialectical Behavior Therapy)', year: 2018, significance: 'Fundación teórica del modelo de Sobrecontrol y su distinción neurobiológica frente a la DBT estándar.' },
        { title: 'Manual de entrenamiento de habilidades RO-DBT', year: 2018, significance: 'Guía práctica para activar el sistema neurofisiológico de seguridad social y modelar autenticidad.' }
      ]
    },
    {
      name: 'Steven C. Hayes',
      era_years: '1948 – Presente (Universidad de Nevada, Reno)',
      core_thesis: 'El sufrimiento humano deriva de los procesos normales del lenguaje simbólico que conducen a la fusión cognitiva y la evitación experiencial. La Terapia de Aceptación y Compromiso (ACT) enseña a abrazar el malestar en pos de valores.',
      key_works: [
        { title: 'Teoría de los marcos relacionales (Relational Frame Theory: A Post-Skinnerian Account of Human Language)', year: 2001, significance: 'Fundamento experimental riguroso de cómo el lenguaje humano vincula arbitrariamente palabras y estímulos aversivos.' },
        { title: 'Terapia de aceptación y compromiso (Acceptance and Commitment Therapy)', year: 1999, significance: 'Desarrollo del Hexaflex: Defusión, Aceptación, Contacto con el presente, Yo contexto, Valores y Acción comprometida.' },
        { title: 'Una mente liberada (A Liberated Mind)', year: 2019, significance: 'Síntesis clínica sobre la flexibilidad psicológica como habilidad central de resiliencia.' }
      ]
    },
    {
      name: 'Barbara Stanley & Gregory K. Brown',
      era_years: 'Stanley (1949–2023, Columbia) / Brown (Penn)',
      core_thesis: 'Las crisis suicidas son estados temporales y fluctuantes. Una intervención breve, estructurada y colaborativa de 6 pasos para restringir medios y activar afrontamientos escalonados reduce los intentos de suicidio hasta en un 45%.',
      key_works: [
        { title: 'Intervención del Plan de Seguridad: una intervención breve para el departamento de emergencias', year: 2012, significance: 'Estándar mundial de oro en prevención del suicidio en hospitales y consultorios clínicos.' }
      ]
    }
  ],

  // =========================================================================
  // MÓDULO 3: CITAS TEXTUALES ORIGINALES COMENTADAS
  // =========================================================================
  primary_quotes: [
    {
      author: 'Marsha M. Linehan',
      year: 1993,
      work_source: 'Cognitive-Behavioral Treatment of Borderline Personality Disorder',
      page_or_seminar: 'The Guilford Press, New York, p. 97',
      quote: 'Los consultantes con desregulación severa e impulsos suicidas están experimentando un dolor psíquico atroz. No están manipulando ni intentando chantajear a los demás; están haciendo lo mejor que pueden en este momento dado su nivel de vulnerabilidad y la falta de habilidades. Y, sin embargo, deben esforzarse más, aprender nuevas habilidades y cambiar para que su vida sea habitable. Esa es la tensión dialéctica central de la DBT.',
      clinical_reflection: 'Pilar absoluto del tratamiento de consultantes en riesgo: la postura terapéutica rechaza etiquetar al paciente como "manipulador" (Mito refutado) y sostiene con firmeza compasiva la necesidad innegociable de aprender habilidades de tolerancia al malestar.'
    },
    {
      author: 'Marsha M. Linehan',
      year: 2014,
      work_source: 'DBT Skills Training Manual (Segunda Edición)',
      page_or_seminar: 'The Guilford Press, New York, p. 342',
      quote: 'La aceptación radical de la realidad no significa que apruebes la realidad ni que renuncies a cambiar el futuro. Significa que dejas de luchar contra los hechos que ya sucedieron. Rechazar la realidad no cambia la realidad; solo convierte el dolor en sufrimiento agónico prolongado. Cuando aceptas lo que es, tu mente se vuelve lúcida para decidir qué hacer ahora.',
      clinical_reflection: 'Concepto clave para transmitir en sesión: el sufrimiento crónico se alimenta de la resistencia inútil a lo inevitable. Al aceptar radicalmente, la energía psíquica se libera para la acción comprometida.'
    },
    {
      author: 'Thomas R. Lynch',
      year: 2018,
      work_source: 'Radically Open Dialectical Behavior Therapy',
      page_or_seminar: 'Context Press / New Harbinger Publications, p. 12',
      quote: 'El sobrecontrol no es un simple rasgo de personalidad; es un biotemperamento caracterizado por una alta sensibilidad a la amenaza y una baja sensibilidad a la recompensa social. Estas personas rara vez explotan en público; en su lugar, contienen todo el dolor tras una máscara de compostura rígida, lo que paradójicamente impide que los demás se acerquen, condenándolas a la soledad más desoladora.',
      clinical_reflection: 'Revolución en el diagnóstico diferencial: mientras el consultante bajo-control pide ayuda a gritos y desborda el encuadre, el sobrecontrolado parece impecable pero acumula ideación suicida silenciosa y letal.'
    },
    {
      author: 'Steven C. Hayes',
      year: 1999,
      work_source: 'Acceptance and Commitment Therapy: An Experiential Approach to Behavior Change',
      page_or_seminar: 'The Guilford Press, New York, p. 77',
      quote: 'El problema no es que tengas pensamientos ansiosos o dolorosos; el problema es lo que haces con ellos cuando crees que debes eliminarlos antes de poder vivir. Si estás dispuesto a llevar tus dudas, miedos y dolores en tu mochila mientras caminas hacia lo que verdaderamente te importa, entonces eres libre. La libertad psicológica no es la ausencia de miedo; es la capacidad de actuar con significado a pesar del miedo.',
      clinical_reflection: 'Desplaza el objetivo de la cura: no se busca anestesiar el malestar o eliminar el dolor, sino desarmar la trampa de la evitación experiencial para que el consultante viva plenamente según sus valores.'
    }
  ],

  // =========================================================================
  // MÓDULO 4: LÍNEAS TEMPORALES DE EVOLUCIÓN Y REINTERPRETACIÓN CONCEPTUAL
  // =========================================================================
  conceptual_timelines: [
    {
      concept_title: '1. Línea Temporal de la Reestructuración Cognitiva a la Defusión Contextual',
      description: 'Cómo evolucionó la relación con el pensamiento: de debatir su veracidad lógica a cambiar la relación funcional con él.',
      steps: [
        {
          year_or_era: '1979',
          author_milestone: 'Aaron T. Beck — Terapia Cognitiva de la Depresión (2ª Ola)',
          definition_or_shift: 'Modificación del Contenido Cognitivo: El pensamiento disfuncional debe ser analizado, confrontado con evidencia empírica en el RPD y reemplazado por un pensamiento alternativo más realista.',
          clinical_impact: 'Eficaz en cuadros moderados, pero generaba frustración o invalidación en consultantes con dolor extremo que sentían que la terapia les decía que "pensaban mal".'
        },
        {
          year_or_era: '1993',
          author_milestone: 'Marsha M. Linehan — Terapia Dialéctico Conductual (DBT)',
          definition_or_shift: 'Validación Previa al Cambio: Antes de cualquier intento de cambio, se valida radicalmente el grano de verdad de la experiencia privada del consultante. El sufrimiento tiene sentido dadas sus circunstancias pasadas.',
          clinical_impact: 'Reduce el abandono terapéutico y desactiva la escalada defensiva en personalidades límite y de alta sensibilidad.'
        },
        {
          year_or_era: '1999–2001',
          author_milestone: 'Steven C. Hayes — Terapia de Aceptación y Compromiso (ACT / RFT)',
          definition_or_shift: 'Defusión Cognitiva y Contextualismo: Ya no importa si el pensamiento es racional o distorsionado; debatir contra él solo incrementa su prominencia. Lo crucial es defusionarse: observar el pensamiento como un evento mental pasajero sin obedecerlo.',
          clinical_impact: 'Se abandona la lucha contra los pensamientos automáticos para orientar toda la energía conductual a acciones guiadas por valores.'
        }
      ]
    },
    {
      concept_title: '2. Línea Temporal del Manejo del Riesgo Suicida en Psicoterapia',
      description: 'Del refutado contrato de no suicidio al protocolo interdisciplinario ECCS y plan colaborativo de Stanley & Brown.',
      steps: [
        {
          year_or_era: '1970s–1980s',
          author_milestone: 'Práctica psiquiátrica tradicional desaconsejada',
          definition_or_shift: '«Contrato de No Suicidio» (Mito Refutado): Se pedía al paciente firmar un papel comprometiéndose a no quitarse la vida, utilizado defensivamente por los profesionales para desligarse de responsabilidad.',
          clinical_impact: '[MITO REFUTADO: Los estudios empíricos demostraron que el contrato de no suicidio genera una falsa sensación de seguridad en el terapeuta, cierra la comunicación honesta del paciente y no previene el acto].'
        },
        {
          year_or_era: '1993',
          author_milestone: 'Marsha M. Linehan — Compromiso con el Tratamiento (CT) en DBT',
          definition_or_shift: 'Compromiso Terapéutico con la Vida: Se sustituye el contrato punitivo por un acuerdo colaborativo donde el consultante consiente acordar permanecer con vida durante el período acordado de terapia para aprender habilidades de afrontamiento.',
          clinical_impact: 'Permite hablar abiertamente del impulso suicida en sesión sin temor a internaciones punitivas automáticas.'
        },
        {
          year_or_era: '2012',
          author_milestone: 'Barbara Stanley & Gregory K. Brown — Safety Planning Intervention',
          definition_or_shift: 'Plan de Seguridad Escalonado de 6 Pasos: La crisis suicida es una curva temporal aguda. Un protocolo estructurado en hoja única que jerarquiza señales de alarma, afrontamiento interno, distracción social, red de apoyo, profesionales y restricción física innegociable de medios letales.',
          clinical_impact: 'Estándar mundial de oro en CISMA DBT y servicios de urgencia, con reducción del 45% en conductas suicidas demostrada en ensayos aleatorizados.'
        }
      ]
    },
    {
      concept_title: '3. Línea Temporal del Bajo Control (DBT) al Sobrecontrol (RO-DBT)',
      description: 'El descubrimiento del segundo gran espectro de desregulación: la hiper-rigidez y la inhibición emocional encubierta.',
      steps: [
        {
          year_or_era: '1993',
          author_milestone: 'Marsha M. Linehan — DBT Estándar',
          definition_or_shift: 'Foco en el Bajo Control: Cuadros con hiperreactividad afectiva abierta, impulsividad, cambios súbitos de humor y crisis dramáticas externas (TLP, bulimia, autolesiones impulsivas).',
          clinical_impact: 'Entrenamiento intensivo en habilidades de autorregulación emocional y tolerancia al malestar.'
        },
        {
          year_or_era: '2018',
          author_milestone: 'Thomas R. Lynch — Radically Open DBT (RO-DBT)',
          definition_or_shift: 'Descubrimiento del Sobrecontrol: Se evidencia que pacientes con depresión crónica resistente, anorexia nerviosa y TOCP fracasan con DBT estándar porque ya son híper-disciplinados y auto-controlados; su patología no es la falta de control, sino el exceso de control inhibitorio que les impide conectar auténticamente.',
          clinical_impact: 'La meta de RO-DBT no es regular las emociones, sino relajar el control, aprender a jugar, mostrar vulnerabilidad y activar la señalización social de seguridad.'
        }
      ]
    }
  ]
};
