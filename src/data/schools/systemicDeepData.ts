import { SchoolOfThoughtEntity } from '../../types/vaultTypes';

export const systemicDeepData: SchoolOfThoughtEntity = {
  id: 'sistemica_relacional',
  title: 'Psicología Sistémica, Cibernética y Terapia Familiar',
  entity_type: 'school',
  tags: ['#school/systemic', '#family_therapy', '#watzlawick', '#minuchin', '#milan', '#bateson', '#cybernetics'],
  summary: 'Paradigma interaccional y cibernético que desplaza el foco clínico del individuo aislado hacia la pauta que conecta: los axiomas de comunicación, las estructuras familiares, las reglas homeostáticas y las causalidades circulares.',
  school_era: '1950s – Presente (Palo Alto MRI, Filadelfia, Milán, Roma)',
  school_founders: ['Ludwig von Bertalanffy (TGS)', 'Gregory Bateson', 'Paul Watzlawick (MRI)', 'Salvador Minuchin (Estructural)', 'Mara Selvini Palazzoli (Milán)', 'Jay Haley'],
  parent_paradigm: 'Systemic & Relational',

  core_concepts: [
    {
      term: 'Axiomas de la Comunicación Humana (Watzlawick)',
      definition: '1. Es imposible no comunicar. 2. Toda comunicación tiene un nivel de contenido y uno de relación. 3. La puntuación de la secuencia de hechos define la naturaleza de la relación. 4. Comunicación digital (verbal) y analógica (no verbal). 5. Interacción simétrica o complementaria.'
    },
    {
      term: 'Cambio de 1º Orden vs. Cambio de 2º Orden',
      definition: 'Cambio-1: Variaciones cuantitativas superficiales dentro de las mismas reglas del sistema ("más de lo mismo", homeostasis). Cambio-2: Modificación cualitativa discontinua de la estructura de reglas del sistema (morfogénesis transformadora).'
    },
    {
      term: 'Estructura Familiar y Límites (Minuchin)',
      definition: 'Organización del sistema en subsistemas (conyugal, parental, fraterno) con límites: Claros (funcionales), Difusos (familias aglutinadas / enredo) o Rígidos (familias desligadas).'
    },
    {
      term: 'Tríada de Conducción de Sesión (Milán)',
      definition: 'Hipotetización (elaboración previa de hipótesis sistémica circular), Circularidad (habilidad de interrogar triádicamente sobre las diferencias entre miembros) y Neutralidad (aliarse con todos y con ninguno).'
    },
    {
      term: 'Paciente Identificado (PI) y Función del Síntoma',
      definition: 'El miembro que porta el síntoma no es un enfermo aislado, sino el emergente que equilibra o denuncia la disfunción homeostática del juego familiar.'
    }
  ],

  view_of_psychopathology: 'El síntoma no reside intrapsíquicamente en el individuo, sino en los circuitos de interacción y retroalimentación del sistema. Cumple una función protectora o mantenedora del equilibrio familiar frente a una crisis o cambio de ciclo vital no resuelto.',
  epistemological_foundation: 'Teoría General de los Sistemas (Bertalanffy), Cibernética de 1er Orden (sistemas observados y homeostasis) y Cibernética de 2º Orden (sistemas observantes: el terapeuta no es un observador externo neutral, sino un perturbador co-partícipe del sistema relacional).',
  historical_evolution: 'Nace con los estudios de Bateson sobre el doble vínculo en la esquizofrenia y la Teoría General de Sistemas, se bifurca en la Terapia Breve Estratégica del MRI de Palo Alto, el Modelo Estructural de Minuchin, la Escuela de Milán y culmina en los enfoques narrativos y colaborativos posmodernos.',
  therapist_stance: 'Activo, directivo, relacional y curioso. En el modelo estructural entra y sale del sistema (coping / joining / desestabilización); en el modelo de Milán mantiene una neutralidad curiosa y realiza preguntas circulares.',
  empirical_critiques: [
    'Riesgo de diluir la responsabilidad individual o jurídica en situaciones de violencia de género o abuso si se aplica una causalidad circular dogmática sin perspectiva de derechos.',
    'Menor desarrollo en tratamientos individuales aislados sin involucramiento del entorno significativo.'
  ],
  related_treatment_ids: ['terapia_familiar_sistemica', 'terapia_breve_estrategica_mri'],

  // =========================================================================
  // MÓDULO 1: GLOSARIO EXHAUSTIVO DE PALABRAS CLAVE
  // =========================================================================
  keywords_glossary: [
    {
      term: 'Causalidad Circular vs. Lineal',
      original_language_term: 'Circular vs. Linear Causality',
      definition: 'En los sistemas humanos, A no causa unidireccionalmente B; A influye en B, y B simultáneamente retroalimenta a A en un circuito recurrente continuo (ej. "Ella se queja porque él se retrae, y él se retrae porque ella se queja").',
      clinical_distinction: '[VERDAD: La pregunta terapéutica no es "¿Quién empezó?", sino "¿Cómo se mantiene el circuito interaccional en el presente?"].'
    },
    {
      term: 'Homeostasis y Morfogénesis',
      original_language_term: 'Homeostasis & Morphogenesis',
      definition: 'La Homeostasis (retroalimentación negativa) es la tendencia del sistema familiar a mantener su equilibrio y reglas constantes ante perturbaciones; la Morfogénesis (retroalimentación positiva) es la capacidad de cambiar de estructura de reglas frente a crisis o cambios de ciclo vital.',
      clinical_distinction: '[VERDAD: El síntoma familiar surge con frecuencia cuando la familia responde con homeostasis rígida a una crisis que exige morfogénesis].'
    },
    {
      term: 'Doble Vínculo (Bateson)',
      original_language_term: 'Double Bind (Bateson, 1956)',
      definition: 'Situación comunicacional patógena con 4 condiciones: 1. Relación de dependencia vital intensa, 2. Mandato primario negativo ("Haz esto o te castigo"), 3. Mandato secundario abstracto contradictorio a nivel analógico ("Sé espontáneo", "No me obedezcas por miedo"), 4. Terciario: Prohibición absoluta de metacomunicar sobre la trampa.',
      clinical_distinction: '[VERDAD: Fue la primera formulación interaccional de la génesis de cuadros psicóticos y disfunciones severas].'
    },
    {
      term: 'Puntuación de la Secuencia de Hechos (3º Axioma)',
      original_language_term: 'Punctuation of Sequence of Events',
      definition: 'Cada miembro de una relación introduce arbitrariamente un punto de partida para justificar su propia conducta como mera reacción defensiva ante la conducta del otro ("Yo me aíslo porque me gritas" vs. "Yo te grito porque te aíslas").',
      clinical_distinction: '[VERDAD: La intervención del terapeuta consiste en mostrar la circularidad desarmando la puntuación rígida de cada cónyuge].'
    },
    {
      term: 'Interacción Simétrica vs. Complementaria (5º Axioma)',
      original_language_term: 'Symmetrical vs. Complementary Interaction',
      definition: 'La relación simétrica se basa en la igualdad y la emulación recíproca (riesgo: escalada simétrica y peleas de poder); la complementaria se basa en la diferencia funcional donde la conducta de uno complementa la del otro (uno arriba / uno abajo, cuidador / dependiente; riesgo: rigidez complementaria).',
      clinical_distinction: '[VERDAD: La salud relacional reside en la flexibilidad para alternar entre simetría y complementariedad según el contexto].'
    },
    {
      term: 'Familias Aglutinadas vs. Desligadas (Minuchin)',
      original_language_term: 'Enmeshed vs. Disengaged Families',
      definition: 'Aglutinadas: Límites internos difusos entre subsistemas; si a uno le duele la cabeza, todos toman aspirina; pérdida de autonomía individual. Desligadas: Límites externos rígidos e impermeables; falta de empatía, calidez y apoyo mutuo ante las crisis individuales.',
      clinical_distinction: '[VERDAD: El modelo estructural interviene flexibilizando los límites rígidos en desligadas y fortaleciendo las fronteras individuales en aglutinadas].'
    },
    {
      term: 'Triangulación y Coalición Intergeneracional',
      original_language_term: 'Triangulation & Cross-Generational Coalition',
      definition: 'La triangulación ocurre cuando una díada conyugal en conflicto desvía su tensión involucrando a un hijo; la coalición intergeneracional se produce cuando un progenitor se alía encubiertamente con un hijo contra el otro progenitor violando la jerarquía generacional.',
      clinical_distinction: '[VERDAD: Fuente principal de problemas conductuales infantiles y fracaso escolar: el síntoma del niño une a los padres en cuidarlo para no hablar del divorcio].'
    },
    {
      term: 'Connotación Positiva (Escuela de Milán)',
      original_language_term: 'Positive Connotation',
      definition: 'Intervención terapéutica donde se reelaboran todas las conductas sintomáticas de los miembros de la familia como motivadas por la lealtad y el deseo protector de mantener la cohesión del sistema.',
      clinical_distinction: '[VERDAD: Reduce las defensas familiares al no acusar a nadie de "culpable" y prepara el terreno para la prescripción paradójica].'
    },
    {
      term: 'Preguntas Circulares (Escuela de Milán)',
      original_language_term: 'Circular Questioning',
      definition: 'Técnica de interrogación triádica: se pide a un miembro de la familia que describa la relación y las diferencias entre otros dos miembros en su presencia ("Cuando tu padre se enoja, ¿qué hace tu madre? Y en ese momento, ¿hacia quién mira tu hermana?").',
      clinical_distinction: '[VERDAD: Introduce información relacional nueva en el sistema sin confrontación directa].'
    },
    {
      term: 'Cibernética de 2º Orden y Sistemas Observantes',
      original_language_term: 'Second-Order Cybernetics (von Foerster)',
      definition: 'Revolución epistemológica: el terapeuta no es un experto externo neutral que "arregla" una familia-máquina; el terapeuta, con sus propios prejuicios y lenguaje, pasa a ser un miembro más del sistema terapéutico observante.',
      clinical_distinction: '[VERDAD: Desemboca en las terapias narrativas de Michael White y el enfoque colaborativo de Anderson].'
    }
  ],

  // =========================================================================
  // MÓDULO 2: AUTORES CANÓNICOS Y OBRAS ORIGINALES
  // =========================================================================
  canonical_authors: [
    {
      name: 'Paul Watzlawick',
      era_years: '1921 – 2007 (Mental Research Institute - MRI Palo Alto)',
      core_thesis: 'La realidad es el resultado de la comunicación. Las soluciones intentadas por las familias para resolver un problema son a menudo las que lo transforman en crónico e irresoluble ("más de lo mismo"). El cambio terapéutico requiere un cambio de 2º orden.',
      key_works: [
        { title: 'Teoría de la comunicación humana (Pragmatics of Human Communication)', year: 1967, significance: 'Texto fundacional con Beavin y Jackson: sistematiza los 5 axiomas metacomunicacionales.' },
        { title: 'Cambio: formación y solución de los problemas humanos (Change)', year: 1974, significance: 'Con Weakland y Fisch: formula la teoría del Cambio 1 vs. Cambio 2 y las prescripciones de la paradoja.' },
        { title: '¿Es real la realidad? Confusión, desinformación y comunicación', year: 1976, significance: 'Fundamento constructivista de la percepción de los problemas humanos.' }
      ]
    },
    {
      name: 'Salvador Minuchin',
      era_years: '1921 – 2017 (Clínica de Orientación Infantil de Filadelfia)',
      core_thesis: 'La familia es una estructura viva organizada en subsistemas con fronteras jerárquicas. Las patologías surgen cuando los límites son difusos (aglutinamiento) o rígidos (desligamiento). La intervención reestructura el mapa espacial y las jerarquías en la sesión.',
      key_works: [
        { title: 'Familias y terapia familiar (Families and Family Therapy)', year: 1974, significance: 'Manual canónico de la Terapia Estructural: conceptos de límites, mapa familiar y técnicas de unión (joining).' },
        { title: 'Técnicas de terapia familiar', year: 1981, significance: 'Con Fishman: protocolos de escenificación (enactment), desequilibramiento y reencuadre en vivo.' }
      ]
    },
    {
      name: 'Mara Selvini Palazzoli',
      era_years: '1916 – 1999 (Centro de Terapia Familiar de Milán)',
      core_thesis: 'Los síntomas psicóticos y anoréxicos severos son "juegos familiares psicóticos" donde el paciente identificado queda atrapado en embrollos e instigaciones intergeneracionales. La neutralidad, la hipótesis circular y la prescripción invariable desmantelan el juego.',
      key_works: [
        { title: 'Paradoja y contraparadoja: Un nuevo modelo en la terapia de la familia de transacción esquizofrénica', year: 1975, significance: 'Manifiesto de la Escuela de Milán: connotación positiva de todo el sistema y prescripción del síntoma.' },
        { title: 'Hipotetización, circularidad y neutralidad: Tres directrices para la conducción de la sesión', year: 1980, significance: 'Artículo metodológico más influyente de la terapia sistémica mundial.' },
        { title: 'Los juegos psicóticos en la familia', year: 1988, significance: 'Descripción de las 6 fases del embrollo e instigación en anorexia y psicosis infantil.' }
      ]
    },
    {
      name: 'Gregory Bateson',
      era_years: '1904 – 1980 (Palo Alto, California)',
      core_thesis: 'La mente no está confinada en el cerebro; es inmanente a los circuitos cibernéticos de retroalimentación de la ecología total. El síntoma es un mensaje metafórico que revela una incongruencia en los niveles lógicos del sistema relacional.',
      key_works: [
        { title: 'Hacia una teoría de la esquizofrenia (Toward a Theory of Schizophrenia)', year: 1956, significance: 'Primera formulación formal de la teoría del Doble Vínculo.' },
        { title: 'Pasos hacia una ecología de la mente (Steps to an Ecology of Mind)', year: 1972, significance: 'Obra cumbre sobre epistemología sistémica, información y niveles de aprendizaje.' }
      ]
    }
  ],

  // =========================================================================
  // MÓDULO 3: CITAS TEXTUALES ORIGINALES COMENTADAS
  // =========================================================================
  primary_quotes: [
    {
      author: 'Paul Watzlawick, Janet Beavin & Don D. Jackson',
      year: 1967,
      work_source: 'Teoría de la comunicación humana (Pragmatics of Human Communication)',
      page_or_seminar: 'Editorial Herder, Barcelona, p. 52',
      quote: 'Hay una propiedad de la conducta de la cual difícilmente puede dudarse: no hay nada que sea lo contrario de conducta. En otras palabras, no existe la no-conducta o, para decirlo más simplemente: es imposible no comportarse. Ahora bien, si se acepta que toda conducta en una situación de interacción tiene valor de mensaje, es decir, es comunicación, se deduce que por mucho que uno lo intente, no puede dejar de comunicar.',
      clinical_reflection: 'Primer axioma fundacional: el silencio, el mutismo catatónico, la evasión de la mirada o la desconexión son mensajes activos de relación que determinan la interacción. En terapia familiar, se analiza el valor pragmático de todo comportamiento.'
    },
    {
      author: 'Paul Watzlawick, John H. Weakland & Richard Fisch',
      year: 1974,
      work_source: 'Cambio: Formación y solución de los problemas humanos (Change)',
      page_or_seminar: 'Editorial Herder, Barcelona, p. 45',
      quote: 'El Cambio de 1º Orden tiene lugar dentro de un sistema determinado que en sí permanece invariable. El Cambio de 2º Orden es un cambio que modifica al sistema mismo (...) La mayor parte de los problemas humanos crónicos surgen de intentar resolver una dificultad mediante más de la misma solución fallida. Paradójicamente, la solución intentada se convierte en el problema real.',
      clinical_reflection: 'Clave de la Terapia Breve Estratégica: el terapeuta no busca que los padres "hablen más" si hablar más ya provocó discusiones; introduce una maniobra contraintuitiva (paradoja) para cortar el intento fallido de solución y provocar un salto cualitativo de 2º orden.'
    },
    {
      author: 'Salvador Minuchin',
      year: 1974,
      work_source: 'Familias y terapia familiar (Families and Family Therapy)',
      page_or_seminar: 'Editorial Gedisa, Buenos Aires, p. 89',
      quote: 'Los límites de un subsistema son las reglas que definen quiénes participan y de qué manera. Para que el funcionamiento familiar sea adecuado, los límites entre los subsistemas deben ser claros. Deben definirse con suficiente precisión como para permitir a los miembros del subsistema el desarrollo de sus funciones sin interferencias indebidas, pero deben permitir el contacto recíproco con los otros subsistemas.',
      clinical_reflection: 'Criterio operativo de salud relacional: si los padres permiten que los abuelos o los hijos invadan el subsistema conyugal (límites difusos), la pareja entra en crisis; si los padres no escuchan el sufrimiento de los hijos (límites rígidos), surge la conducta disocial o el aislamiento.'
    },
    {
      author: 'Mara Selvini Palazzoli, Luigi Boscolo, Gianfranco Cecchin & Giuliana Prata',
      year: 1980,
      work_source: 'Hipotetización, circularidad y neutralidad: Tres directrices para la conducción de la sesión',
      page_or_seminar: 'Family Process, Vol. 19, No. 1, p. 3',
      quote: 'Por neutralidad entendemos una disposición pragmática del terapeuta orientada a no aliarse con ninguna de las partes en conflicto y a no emitir juicios de valor moral sobre las conductas de los miembros de la familia. Cuanto más el terapeuta asimila el modelo sistémico, más se convence de que el síntoma de uno es el mejor equilibrio posible que el sistema ha sido capaz de hallar en ese momento histórico.',
      clinical_reflection: 'Regla de conducción en clínica compleja: aliarse con el paciente identificado o con los padres acusadores destruye la eficacia terapéutica. La neutralidad curiosa valida la función de cada parte y abre la posibilidad de nuevas pautas de conexión.'
    }
  ],

  // =========================================================================
  // MÓDULO 4: LÍNEAS TEMPORALES DE EVOLUCIÓN Y REINTERPRETACIÓN CONCEPTUAL
  // =========================================================================
  conceptual_timelines: [
    {
      concept_title: '1. Línea Temporal de la Causalidad Lineal a la Cibernética de 2º Orden',
      description: 'Cómo evolucionó el pensamiento sistémico: de la caja negra conductual al terapeuta como observador co-participante de la realidad familiar.',
      steps: [
        {
          year_or_era: '1950s',
          author_milestone: 'Ludwig von Bertalanffy & Gregory Bateson — Teoría General de Sistemas y Doble Vínculo',
          definition_or_shift: 'Ruptura con el Reduccionismo Mecanicista: El todo es más que la suma de sus partes. Las propiedades de un sistema relacional no pueden explicarse diseccionando al individuo por separado.',
          clinical_impact: 'Se convoca por primera vez a la familia completa a la sala de consulta en lugar de atender al paciente solo.'
        },
        {
          year_or_era: '1967–1974',
          author_milestone: 'Paul Watzlawick & Salvador Minuchin — MRI Palo Alto y Terapia Estructural',
          definition_or_shift: 'Cibernética de 1er Orden (Sistemas Observados): El sistema familiar es tratado como una entidad objetiva externa ("caja negra" o estructura de límites) que el terapeuta-experto diagnostica y reestructura desde afuera.',
          clinical_impact: 'Desarrollo de técnicas directivas: escenificación en vivo, reencuadre, tareas paradójicas y delimitación espacial.'
        },
        {
          year_or_era: '1980s',
          author_milestone: 'Heinz von Foerster & Escuela de Milán — Cibernética de 2º Orden',
          definition_or_shift: 'Sistemas Observantes y Constructivismo: El terapeuta no está fuera del sistema; el sistema terapéutico se crea por la inclusión del terapeuta. Toda descripción de la familia dice tanto del observador como de lo observado.',
          clinical_impact: 'La terapia abandona las prescripciones autoritarias; se convierte en una danza de preguntas circulares y co-construcción de significados.'
        },
        {
          year_or_era: '1990s–Presente',
          author_milestone: 'Michael White & Harlene Anderson — Terapia Narrativa y Prácticas Colaborativas',
          definition_or_shift: 'Enfoques Posmodernos y Deconstrucción: Las familias están atrapadas en "relatos saturados de problemas" impuestos por discursos culturales dominantes. Se externaliza el problema ("El problema es el problema, la persona no es el problema").',
          clinical_impact: 'Rescate de relatos alternativos y empoderamiento de la agencia personal en red comunitaria.'
        }
      ]
    },
    {
      concept_title: '2. Línea Temporal del "Paciente Identificado" y la Función del Síntoma',
      description: 'De considerar al miembro sintomático un paciente enfermo a entenderlo como regulador homeostático de la ecología familiar.',
      steps: [
        {
          year_or_era: '1956',
          author_milestone: 'Gregory Bateson — Toward a Theory of Schizophrenia',
          definition_or_shift: 'El Síntoma como Respuesta Adaptativa a un Contexto Loco: La conducta esquizofrénica o delirante no es un defecto cerebral intrínseco, sino la única respuesta posible frente a un patrón continuo de doble vínculo comunicacional.',
          clinical_impact: 'Desestigmatización radical del paciente psiquiátrico en el contexto de su familia de origen.'
        },
        {
          year_or_era: '1974',
          author_milestone: 'Salvador Minuchin — Familias y terapia familiar',
          definition_or_shift: 'El Síntoma como Chivo Expiatorio Estructural: El "paciente identificado" porta el síntoma para desviar el conflicto del subsistema conyugal (triangulación), preservando la unión de los padres a costa de su propio desarrollo.',
          clinical_impact: 'El terapeuta protege al niño, devuelve el conflicto conyugal a los adultos y libera al menor de su rol sacrificial.'
        },
        {
          year_or_era: '1975–1988',
          author_milestone: 'Mara Selvini Palazzoli — Paradoja y contraparadoja / Los juegos psicóticos',
          definition_or_shift: 'El Síntoma como Jugada Estratégica en un Embrollo: El síntoma es un acto supremo de lealtad sistémica donde el hijo se sacrifica para rescatar a uno de los progenitores en un juego intergeneracional secreto.',
          clinical_impact: 'Uso de la prescripción invariable para cortar el juego secreto y devolver a los padres su intimidad jerárquica.'
        }
      ]
    }
  ]
};
