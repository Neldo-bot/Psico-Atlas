import { SchoolOfThoughtEntity } from '../../types/vaultTypes';

export const psychoanalysisDeepData: SchoolOfThoughtEntity = {
  id: 'psicoanalisis',
  title: 'Psicoanálisis (Freud, Klein, Winnicott, Lacan)',
  entity_type: 'school',
  tags: ['#school/psychoanalysis', '#freud', '#lacan', '#klein', '#winnicott', '#unconscious'],
  summary: 'Paradigma clínico fundado en el descubrimiento del Inconsciente, la dinámica pulsional, la transferencia y la constitución subjetiva a través del lenguaje y la falta.',
  school_era: '1895 – Presente (Viena -> Londres -> París / Buenos Aires)',
  school_founders: ['Sigmund Freud', 'Melanie Klein', 'Donald W. Winnicott', 'Jacques Lacan'],
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
  epistemological_foundation: 'Ruptura epistemológica con el positivismo médico-biológico. Reconocimiento de una causalidad psíquica subjetiva basada en la palabra, el significante y la historicidad infantil singular.',
  historical_evolution: 'Nace con el método catártico de Freud y Breuer, se consolida con la técnica de asociación libre y atención flotante, se diversifica con la psicología del yo y la escuela inglesa de relaciones objetales (Klein/Winnicott) y se renueva radicalmente con el "retorno a Freud" de Lacan a través de la lingüística estructural.',
  therapist_stance: 'Abstinencia y neutralidad. El analista ocupa el lugar del "Sujeto Supuesto Saber" para posibilitar la neurosis de transferencia y luego destituir esa suposición, operando como corte significante y causa del deseo.',
  empirical_critiques: [
    'Dificultad histórica para operacionalizar sus constructos en ensayos clínicos controlados aleatorizados (ECA).',
    'Tratamientos habitualmente prolongados que pueden resultar inaccesibles para demandas de crisis agudas o contextos institucionales de alta rotación.'
  ],
  related_treatment_ids: ['cura_psicoanalitica', 'psicoterapia_psicodinamica'],

  // =========================================================================
  // MÓDULO 1: GLOSARIO EXHAUSTIVO DE PALABRAS CLAVE
  // =========================================================================
  keywords_glossary: [
    {
      term: 'Inconsciente',
      original_language_term: 'Das Unbewusste',
      definition: 'Conjunto de contenidos no presentes en el campo actual de la conciencia, reprimidos por ser incompatibles con el Yo, pero dotados de eficacia psíquica indestructible y pugnantes por retornar a través de formaciones sustitutivas.',
      clinical_distinction: '[VERDAD: Eficacia dinámica demostrada en actos fallidos, sueños y síntomas] vs [MITO: No es un "sótano pasivo de recuerdos olvidados", sino un proceso activo en constante producción significante].'
    },
    {
      term: 'Pulsión vs. Instinto',
      original_language_term: 'Trieb vs. Instinkt',
      definition: 'Concepto límite entre lo anímico y lo somático. A diferencia del instinto biológico (conducta fija predeterminada y objeto específico), la pulsión humana no tiene objeto natural predeterminado; consta de Empuje (Drang), Meta (Ziel), Objeto (Objekt) y Fuente (Quelle).',
      clinical_distinction: '[VERDAD: El objeto pulsional es contingente e infinitamente sustituible] vs [MITO: La pulsión no busca una descarga adaptativa biológica, sino una satisfacción que a menudo bordea la autodestrucción (más allá del principio de placer)].'
    },
    {
      term: 'Represión Originaria y Secundaria',
      original_language_term: 'Urverdrängung & Nachdrängen',
      definition: 'La represión originaria fija un primer representante pulsional en lo inconsciente constituyendo su núcleo fundante; la represión secundaria atrae por afinidad y rechaza desde el Yo preconsciente las representaciones asociadas a ese núcleo.',
      clinical_distinction: '[VERDAD: Lo reprimido originario nunca fue consciente] vs [MITO: Reprimir no es "olvidar voluntariamente un recuerdo", sino una operación de defensa inconsciente].'
    },
    {
      term: 'Representante-Representación',
      original_language_term: 'Vorstellungsrepräsentanz',
      definition: 'Inscripción psíquica de la pulsión en la cadena de representaciones o significantes. Cuando la defensa opera, separa el representante-representación (que es reprimido al inconsciente) del Monto de Afecto.',
      clinical_distinction: '[VERDAD: El afecto no se reprime; el afecto se transmuda en angustia, se desplaza a otra idea (obsesión) o se convierte al cuerpo (histeria)].'
    },
    {
      term: 'Nachträglichkeit (Acción Posterior / Après-coup)',
      original_language_term: 'Nachträglichkeit',
      definition: 'Principio temporal donde una vivencia infantil prematura adquiere significación traumática y eficacia patógena solo en un segundo tiempo posterior (a posteriori), cuando la pubertad o un nuevo suceso le otorga retroactivamente sentido sexual.',
      clinical_distinction: '[VERDAD: La causalidad freudiana es retroactiva y no meramente lineal histórica].'
    },
    {
      term: 'Compulsión de Repetición',
      original_language_term: 'Wiederholungszwang',
      definition: 'Tendencia ciega e incoercible del sujeto a repetir en actos vivencias displacenteras del pasado, más allá del principio del placer, operando al servicio de la pulsión de muerte en un intento fallido de ligadura energética.',
      clinical_distinction: '[VERDAD: El sujeto repite activamente lo que padeció pasivamente para intentar dominar el trauma].'
    },
    {
      term: 'Transferencia',
      original_language_term: 'Übertragung',
      definition: 'Proceso por el cual los deseos inconscientes infantiles se actualizan sobre la persona del analista. Es a la vez el motor supremo del tratamiento y la resistencia más tenaz cuando se manifiesta como actuación (Agieren).',
      clinical_distinction: '[VERDAD: La neurosis de transferencia sustituye a la neurosis ordinaria en el dispositivo analítico].'
    },
    {
      term: 'Narcisismo Primario y Secundario',
      original_language_term: 'Primärer & Sekundärer Narzissmus',
      definition: 'El narcisismo primario es el estado temprano donde el Yo del niño es catectizado por la libido tomada como objeto ("His Majesty the Baby"); el narcisismo secundario surge cuando la libido retorna al Yo retirada de los objetos del mundo exterior.',
      clinical_distinction: '[VERDAD: En la psicosis se produce un repliegue masivo al narcisismo secundario con desasimiento de la realidad].'
    },
    {
      term: 'Posición Esquizoparanoide',
      original_language_term: 'Schizoid-paranoide Position (Klein)',
      definition: 'Configuración mental de los primeros 3 a 4 meses de vida donde el Yo escindido divide al objeto en "Pecho Bueno" idealizado y "Pecho Malo" persecutorio, recurriendo a la proyección masiva y sufriendo angustia de aniquilación.',
      clinical_distinction: '[VERDAD: No es una fase que se supera para siempre, sino una posición a la que el adulto puede regresar en crisis severas o funcionamientos límites].'
    },
    {
      term: 'Posición Depresiva',
      original_language_term: 'Depressive Position (Klein)',
      definition: 'Hito del desarrollo (hacia los 6 meses) donde el infante reconoce a la madre como un objeto total (buena y mala a la vez). Nace la culpa por haber dañado al objeto con los ataques sádicos previos y surge la capacidad de duelo y reparación.',
      clinical_distinction: '[VERDAD: La capacidad de sentir culpa y empatía genuina depende de la integración de la posición depresiva].'
    },
    {
      term: 'Identificación Proyectiva',
      original_language_term: 'Projective Identification (Klein / Bion)',
      definition: 'Mecanismo de defensa donde partes intolerables del Self son escindidas y proyectadas dentro de otra persona, provocando en el otro la sensación real inducida de portar ese afecto o estado interno.',
      clinical_distinction: '[VERDAD: Piedra angular de la comprensión de la contratransferencia en cuadros límites y psicóticos].'
    },
    {
      term: 'Objeto Transicional y Espacio Potencial',
      original_language_term: 'Transitional Object (Winnicott)',
      definition: 'Primera posesión "no-yo" del bebé (mantita, osito) que se ubica en la zona intermedia entre la realidad interna subjetiva y la realidad externa compartida, permitiendo tramitar la separación de la madre.',
      clinical_distinction: '[VERDAD: Base del juego, el arte, la cultura y la creatividad humana en la adultez].'
    },
    {
      term: 'Significante y Cadena Significante',
      original_language_term: 'Le Signifiant (Lacan)',
      definition: 'Elemento material del lenguaje tomado de Saussure. Un significante es aquello que representa a un sujeto para otro significante ($S_1 \rightarrow S_2$), careciendo de significado intrínseco aislado.',
      clinical_distinction: '[VERDAD: «El inconsciente está estructurado como un lenguaje»].'
    },
    {
      term: 'Nombre-del-Padre y Metáfora Paterna',
      original_language_term: 'Le Nom-du-Père (Lacan)',
      definition: 'Operación significante primordial que sustituye el deseo arbitrario materno por la Ley de la interdicción del incesto, anclando al sujeto en el orden simbólico y permitiendo la sexuación y la estabilización neurótica.',
      clinical_distinction: '[VERDAD: La carencia de esta sustitución define la forclusión estructural de la psicosis].'
    },
    {
      term: 'Forclusión',
      original_language_term: 'Verwerfung (Freud) / Forclusion (Lacan)',
      definition: 'Mecanismo psíquico fundante de la psicosis: rechazo radical de un significante primordial (Nombre-del-Padre) del registro simbólico. Lo no admitido en lo simbólico reaparece en lo Real bajo la forma de alucinación.',
      clinical_distinction: '[VERDAD: La alucinación no es un error de percepción sensorial, sino el retorno en lo real de lo forcluido en lo simbólico].'
    },
    {
      term: 'Objeto a y Fantasma',
      original_language_term: 'Objet petit a & Fantasme ($ \\diamond a$)',
      definition: 'El objeto $a$ es el residuo irreductible de la entrada del ser hablante en el lenguaje; no es un objeto que se pueda tener, sino la causa del deseo. El fantasma es el axioma subjetivo que fija la relación del sujeto dividido ($) con ese objeto de goce.',
      clinical_distinction: '[VERDAD: El fin de análisis implica el atravesamiento del fantasma y la caída del analista como objeto $a$].'
    },
    {
      term: 'El Sinthome y Nudo Borromeo',
      original_language_term: 'Le Sinthome (Lacan, 1975)',
      definition: 'Cuarto anillo que enlaza y repara el desanudamiento de los registros Real, Simbólico e Imaginario. Es el modo singular e incurable con el que cada sujeto se las arregla con su goce sin someterse al Nombre-del-Padre (ej. la escritura en James Joyce).',
      clinical_distinction: '[VERDAD: El objetivo del psicoanálisis lacaniano tardío no es eliminar el síntoma, sino saber hacer con él (savoir-y-faire)].'
    }
  ],

  // =========================================================================
  // MÓDULO 2: AUTORES CANÓNICOS Y OBRAS ORIGINALES
  // =========================================================================
  canonical_authors: [
    {
      name: 'Sigmund Freud',
      era_years: '1856 – 1939 (Viena / Londres)',
      core_thesis: 'El psiquismo humano está dividido: el Yo no es amo en su propia casa. La sexualidad infantil, las pulsiones y la defensa configuran los síntomas neuróticos como formaciones de compromiso entre el deseo inconsciente y la censura.',
      key_works: [
        { title: 'La interpretación de los sueños (Die Traumdeutung)', year: 1900, significance: 'Vía regia hacia el conocimiento de lo inconsciente. Establece el proceso primario: condensación y desplazamiento.' },
        { title: 'Tres ensayos de teoría sexual', year: 1905, significance: 'Revoluciona el concepto de sexualidad: desvinculación de la genitalidad, fases del desarrollo libidinal y polimorfismo perverso infantil.' },
        { title: 'Pulsiones y destinos de pulsión (Triebe und Triebschicksale)', year: 1915, significance: 'Texto metapsicológico nuclear sobre la pulsión, su empuje, meta, objeto y los cuatro destinos pulsionales.' },
        { title: 'Duelo y melancolía', year: 1917, significance: 'Diferencial clínico: en el duelo el mundo queda pobre; en la melancolía el Yo queda empobrecido por la sombra del objeto que cae sobre él.' },
        { title: 'Más allá del principio de placer', year: 1920, significance: 'Giro metapsicológico radical: introducción de la pulsión de muerte (Tánatos) y la compulsión de repetición.' },
        { title: 'El yo y el ello (Das Ich und das Es)', year: 1923, significance: 'Segunda tópica freudiana estructural: Ello, Yo y Superyó.' },
        { title: 'Inhibición, síntoma y angustia', year: 1926, significance: 'Revisión total de la angustia: la angustia es la señal de alarma ante el peligro y la causa de la represión (no su consecuencia).' }
      ]
    },
    {
      name: 'Melanie Klein',
      era_years: '1882 – 1960 (Viena / Berlín / Londres)',
      core_thesis: 'El mundo interno temprano del infante está poblado de fantasías inconscientes sádicas, escisiones extremas y relaciones de objeto parciales, donde la pulsión de muerte se manifiesta como angustia persecutoria desde el nacimiento.',
      key_works: [
        { title: 'El psicoanálisis de niños', year: 1932, significance: 'Fundación de la técnica del juego como equivalente directo de la asociación libre del adulto.' },
        { title: 'Una contribución a la psicogénesis de los estados maníaco-depresivos', year: 1935, significance: 'Formulación de la Posición Depresiva, el objeto total y la culpa reparatoria.' },
        { title: 'Notas sobre algunos mecanismos esquizoides', year: 1946, significance: 'Conceptualización de la Posición Esquizoparanoide y la Identificación Proyectiva.' },
        { title: 'Envidia y gratitud', year: 1957, significance: 'Distingue la envidia primaria destructiva (ataca a la fuente de la bondad) de los celos edípicos.' }
      ]
    },
    {
      name: 'Donald W. Winnicott',
      era_years: '1896 – 1971 (Londres)',
      core_thesis: 'Un bebé solo no existe: existe siempre una diada con el ambiente materno facilitador. Si la madre es "suficientemente buena" y sostiene (Holding / Handling), se consolida el Self Verdadero; de lo contrario, se erige un Falso Self defensivo.',
      key_works: [
        { title: 'Objetos transicionales y fenómenos transicionales', year: 1951, significance: 'Concepto del objeto transicional como puente entre la realidad psíquica interna y la externa.' },
        { title: 'La teoría de la relación entre progenitores e infante', year: 1960, significance: 'Descripción de la Preocupación Maternal Primaria y el Holding facilitador.' },
        { title: 'La distorsión del yo en términos de self verdadero y falso', year: 1960, significance: 'El Falso Self como coraza adaptativa complaciente ante la intrusión del ambiente.' },
        { title: 'Realidad y juego (Playing and Reality)', year: 1971, significance: 'La psicoterapia se define como el encuentro entre dos personas que juegan juntas.' }
      ]
    },
    {
      name: 'Jacques Lacan',
      era_years: '1901 – 1981 (París)',
      core_thesis: 'Retorno riguroso a Freud atravesado por la lingüística y la topología: el inconsciente no es instinto ni profundidad biológica, sino el discurso del Otro estructurado como un lenguaje. El sujeto sufre por su relación con el significante y el goce.',
      key_works: [
        { title: 'El estadio del espejo como formador de la función del yo', year: 1949, significance: 'La génesis del Yo en el registro Imaginario a partir de la identificación con la imagen especular anticipatoria.' },
        { title: 'Función y campo de la palabra y del lenguaje en psicoanálisis (Discurso de Roma)', year: 1953, significance: 'Manifiesto fundante: restitución de la primacía de la palabra plena y el orden simbólico.' },
        { title: 'Seminario 3: Las psicosis', year: 1955, significance: 'Operacionalización de la Forclusión (Verwerfung) del Nombre-del-Padre como causa de la psicosis.' },
        { title: 'Seminario 11: Los cuatro conceptos fundamentales del psicoanálisis', year: 1964, significance: 'Formalización de Inconsciente, Repetición, Transferencia y Pulsión, y nacimiento del concepto de Objeto a.' },
        { title: 'Seminario 23: El sinthome', year: 1975, significance: 'Topología de nudos borromeos (RSI) y el Sinthome como enganche singular sin el Nombre-del-Padre.' }
      ]
    }
  ],

  // =========================================================================
  // MÓDULO 3: CITAS TEXTUALES ORIGINALES COMENTADAS
  // =========================================================================
  primary_quotes: [
    {
      author: 'Sigmund Freud',
      year: 1915,
      work_source: 'Pulsiones y destinos de pulsión (Triebe und Triebschicksale)',
      page_or_seminar: 'Obras Completas, Amorrortu Editores (AE), Tomo XIV, p. 117',
      quote: 'Si ahora, desde el aspecto biológico, pasamos a la consideración de la vida anímica, la «pulsión» nos aparece como un concepto fronterizo entre lo anímico y lo somático, como un representante psíquico de los estímulos que provienen del interior del cuerpo y alcanzan el alma, como una medida de la exigencia de trabajo que es impuesta a lo anímico a consecuencia de su trabazón con lo corporal.',
      clinical_reflection: 'Fundamento epistemológico del síntoma neurótico: la pulsión no es un instinto de objeto fijo, sino una exigencia continua de trabajo para el aparato psíquico. Cuando la tramitación simbólica fracasa, el cuerpo o el pensamiento obsesivo soportan el exceso pulsional.'
    },
    {
      author: 'Sigmund Freud',
      year: 1914,
      work_source: 'Recordar, repetir y reelaborar (Erinnern, Wiederholen und Durcharbeiten)',
      page_or_seminar: 'Obras Completas, Amorrortu Editores (AE), Tomo XII, p. 152',
      quote: 'El analizado no recuerda, en general, nada de lo olvidado y reprimido, sino que lo actúa. No lo reproduce como recuerdo, sino como acción; lo repite, sin saber, desde luego, que lo hace (...) Mientras el paciente lo vivencia como algo real y actual, nosotros tenemos que realizar el trabajo terapéutico, que consiste en gran parte en reconducirlo al pasado.',
      clinical_reflection: 'Establece la regla de oro de la clínica de la transferencia: la actuación (Agieren) es la modalidad compulsiva que sustituye al recuerdo reprimido. La labor del terapeuta no es moralizar la conducta, sino interpretarla para devolverle su estatuto de memoria inconsciente.'
    },
    {
      author: 'Sigmund Freud',
      year: 1926,
      work_source: 'Inhibición, síntoma y angustia (Hemmung, Symptom und Angst)',
      page_or_seminar: 'Obras Completas, Amorrortu Editores (AE), Tomo XX, p. 104',
      quote: 'Es la angustia la que produce la represión, y no, como antes creíamos, la represión la que produce o engendra la angustia (...) La angustia es la reacción a una situación de peligro; se la ahorra mediante el hecho de que el Yo haga algo para evitar la situación o sustraerse de ella: es la formación de síntoma.',
      clinical_reflection: 'Viraje copernicano en la psicopatología freudiana: el síntoma neurótico se construye activamente como un dique protector para no confrontar el desamparo o la castración anticipados por la angustia-señal.'
    },
    {
      author: 'Melanie Klein',
      year: 1946,
      work_source: 'Notas sobre algunos mecanismos esquizoides',
      page_or_seminar: 'Obras Completas, Tomo 3 (Envidia y gratitud y otros trabajos), Paidós, p. 14',
      quote: 'Junto con la escisión del objeto primario, se produce una escisión del Yo. Cuando el Yo se fragmenta para desviar la pulsión de muerte, expulsa partes de sí mismo y las proyecta en el objeto externo para librarse del peligro de ser aniquilado desde dentro.',
      clinical_reflection: 'Clave para el diagnóstico de la desintegración psicótica y los estados límites: la angustia no es solo miedo a la pérdida del amor (como en la neurosis), sino angustia de aniquilación y fragmentación del propio Yo.'
    },
    {
      author: 'Donald W. Winnicott',
      year: 1971,
      work_source: 'Realidad y juego (Playing and Reality)',
      page_or_seminar: 'Editorial Gedisa, Buenos Aires, p. 64',
      quote: 'La psicoterapia tiene lugar ahí donde se superponen dos áreas de juego, la del paciente y la del terapeuta. Si el paciente no puede jugar, entonces el trabajo del terapeuta consiste en ayudarlo a pasar de un estado en que no puede jugar a un estado en que puede hacerlo.',
      clinical_reflection: 'Define el encuadre analítico no como un tribunal de interpretación dogmática, sino como un espacio transicional lúdico donde la capacidad de crear sentido subjetivo es el verdadero indicador de salud psíquica.'
    },
    {
      author: 'Jacques Lacan',
      year: 1964,
      work_source: 'Seminario 11: Los cuatro conceptos fundamentales del psicoanálisis',
      page_or_seminar: 'Ediciones Paidós, Buenos Aires, Clase del 22 de enero de 1964, p. 29',
      quote: 'El estatuto del inconsciente no es óntico, sino ético. Si el inconsciente está estructurado como un lenguaje, es en la medida en que el sujeto es el efecto de la discontinuidad del significante. En la hiancia del inconsciente, algo se produce como tropiezo, fallo, corte.',
      clinical_reflection: 'Desmitifica el inconsciente como sustrato cerebral u ontológico: el inconsciente aparece en la sorpresa del equívoco y el fallido. El analista debe intervenir en la hiancia antes de que vuelva a cerrarse.'
    },
    {
      author: 'Jacques Lacan',
      year: 1962,
      work_source: 'Seminario 10: La angustia',
      page_or_seminar: 'Ediciones Paidós, Buenos Aires, Clase del 14 de noviembre de 1962, p. 19',
      quote: 'La angustia no es sin objeto. La angustia es lo que no engaña. A diferencia del miedo, que tiene un objeto del mundo en el registro imaginario, la angustia surge ante el advenimiento del objeto que no puede ser negativizado: cuando la falta llega a faltar.',
      clinical_reflection: 'La angustia no nace de la pérdida del objeto, sino de su presencia asfixiante e intrusiva cuando el sujeto se siente a merced del capricho o del goce del Otro sin la mediación del significante de la castración.'
    }
  ],

  // =========================================================================
  // MÓDULO 4: LÍNEAS TEMPORALES DE EVOLUCIÓN Y REINTERPRETACIÓN CONCEPTUAL
  // =========================================================================
  conceptual_timelines: [
    {
      concept_title: '1. Línea Temporal de la Teoría de la Angustia',
      description: 'Cómo evolucionó el concepto de angustia desde una intoxicación física somática hasta la brújula irreductible de lo Real.',
      steps: [
        {
          year_or_era: '1895',
          author_milestone: 'Sigmund Freud — Sobre la justificación de separar de la neurastenia un determinado síndrome en calidad de «neurosis de angustia»',
          definition_or_shift: '1ª Teoría: La angustia es excitación sexual somática acumulada (estasis libidinal) que, al no poder ser tramitada psíquicamente, se descarga directamente en forma de angustia física.',
          clinical_impact: 'Diferencia las neurosis actuales (somáticas, sin mecanismo psíquico) de las psiconeurosis de defensa (histeria y fobia).'
        },
        {
          year_or_era: '1915',
          author_milestone: 'Sigmund Freud — La represión (Die Verdrängung, AE XIV)',
          definition_or_shift: 'Transición Metapsicológica: La represión recae sobre la representación, mientras que el monto de afecto liberado se muda o transforma en angustia.',
          clinical_impact: 'Se creía erróneamente que la represión causaba la angustia como producto derivado del afecto estrangulado.'
        },
        {
          year_or_era: '1926',
          author_milestone: 'Sigmund Freud — Inhibición, síntoma y angustia (AE XX)',
          definition_or_shift: '2ª Teoría (Giro Copérnico): El Yo es la única sede de la angustia. La angustia no es consecuencia de la represión: ¡la angustia-señal es la causa que activa la represión! Señala el peligro inminente de castración o desamparo.',
          clinical_impact: 'El síntoma neurótico se comprende como un intento defensivo de evitar que la angustia automática desborde al Yo.'
        },
        {
          year_or_era: '1946',
          author_milestone: 'Melanie Klein — Notas sobre algunos mecanismos esquizoides',
          definition_or_shift: 'Angustia Persecutoria vs. Angustia Depresiva: La angustia más primaria es la de aniquilación y fragmentación por la proyección de la pulsión de muerte en la posición esquizoparanoide; luego deviene angustia depresiva por el daño inferido a la madre amada.',
          clinical_impact: 'Permite comprender el pánico arcaico en niños y personalidades fronterizas que no responden al esquema de castración edípica clásica.'
        },
        {
          year_or_era: '1962–1963',
          author_milestone: 'Jacques Lacan — Seminario 10: La angustia',
          definition_or_shift: 'La angustia no es sin objeto: Lo que no engaña. La angustia no surge cuando falta el objeto, sino cuando «la falta llega a faltar» y el sujeto queda atrapado como objeto de goce en el campo del Otro.',
          clinical_impact: 'El analista no debe calmar precipitadamente la angustia con sugestión, sino utilizarla como brújula clínica para localizar la emergencia del Objeto a.'
        }
      ]
    },
    {
      concept_title: '2. Línea Temporal del Trauma y la Constitución del Síntoma',
      description: 'De la seducción infantil fáctica a la realidad psíquica, la pulsión de muerte y el Sinthome.',
      steps: [
        {
          year_or_era: '1893–1896',
          author_milestone: 'Sigmund Freud — Estudios sobre la histeria y Neuropsicosis de defensa',
          definition_or_shift: 'Teoría de la Seducción Real: El síntoma procede de un atentado sexual pasivo real perpetrado por un adulto en la infancia prematura, resignificado por efecto retardado (Nachträglichkeit).',
          clinical_impact: 'Búsqueda arqueológica de la escena histórica traumática concreta mediante hipnosis y método catártico.'
        },
        {
          year_or_era: '1897',
          author_milestone: 'Sigmund Freud — Carta 69 a Wilhelm Fliess (21 de septiembre de 1897)',
          definition_or_shift: '«Ya no creo más en mi neurótica»: Descubrimiento de la Realidad Psíquica y el Fantasma. El síntoma no responde a un hecho biográfico externo, sino a las fantasías inconscientes de la sexualidad infantil.',
          clinical_impact: 'Nacimiento formal del psicoanálisis: la asociación libre reemplaza a la búsqueda de sucesos fácticos externos.'
        },
        {
          year_or_era: '1905–1917',
          author_milestone: 'Sigmund Freud — El sentido de los síntomas (Conferencias de introducción al psicoanálisis)',
          definition_or_shift: 'El Síntoma como Formación de Compromiso: Sustituto de una satisfacción pulsional reprimida que halla una vía indirecta de retorno, preñada de sentido inconsciente descifrable.',
          clinical_impact: 'El síntoma tiene sentido susceptible de ser interpretado y disuelto por la vía significante de la palabra.'
        },
        {
          year_or_era: '1920',
          author_milestone: 'Sigmund Freud — Más allá del principio de placer',
          definition_or_shift: 'El Trauma como Agujero en el Escudo Protector: Fracaso de la ligadura energética. La compulsión de repetición demuestra que hay síntomas que no buscan placer ni sentido, sino reiterar la catástrofe.',
          clinical_impact: 'Comprensión de las neurosis de guerra, el masoquismo primordial y las reacciones terapéuticas negativas.'
        },
        {
          year_or_era: '1975–1976',
          author_milestone: 'Jacques Lacan — Seminario 23: El sinthome',
          definition_or_shift: 'El Síntoma como Sinthome: No todo en el síntoma es descifrable. El síntoma es un nudo de goce singular que amarra lo Real, lo Simbólico y lo Imaginario impidiendo el desencadenamiento de la psicosis.',
          clinical_impact: 'El fin del análisis no es erradicar el síntoma, sino identificar qué función de sostén cumple y aprender a «saber hacer allí con él».'
        }
      ]
    },
    {
      concept_title: '3. Línea Temporal de la Transferencia y la Posición del Analista',
      description: 'De obstáculo perturbador de la cura a pivote del tratamiento y destitución del saber.',
      steps: [
        {
          year_or_era: '1895',
          author_milestone: 'Sigmund Freud — Psicoterapia de la histeria (Caso Emmy von N., Elisabeth von R.)',
          definition_or_shift: 'La transferencia como perturbación: El paciente transfiere al médico una representación penosa (falso enlace) que detiene el flujo de la asociación libre.',
          clinical_impact: 'Se consideraba un obstáculo molesto que debía sortearse aclarando la confusión temporal.'
        },
        {
          year_or_era: '1905',
          author_milestone: 'Sigmund Freud — Fragmento de análisis de un caso de histeria (Caso Dora)',
          definition_or_shift: 'Descubrimiento de la Transferencia como Aliada: La interrupción prematura del análisis de Dora enseña que la transferencia no puede ignorarse; quien no la maneja, pierde al paciente.',
          clinical_impact: 'La transferencia pasa de ser un error colateral a la condición sine qua non del tratamiento.'
        },
        {
          year_or_era: '1912–1914',
          author_milestone: 'Sigmund Freud — Sobre la dinámica de la transferencia y Puntualizaciones sobre el amor de transferencia',
          definition_or_shift: 'Neurosis de Transferencia: El paciente reproduce en el aquí-y-ahora con el analista todo su conflicto infantil reprimido. La transferencia es simultáneamente la mayor resistencia y el motor del cambio.',
          clinical_impact: 'Regla de abstinencia: no responder a la demanda de amor como un objeto real para preservar el espacio analítico.'
        },
        {
          year_or_era: '1950s',
          author_milestone: 'Paula Heimann & Heinrich Racker — Estudios sobre Contratransferencia',
          definition_or_shift: 'Revalorización de la Contratransferencia: Los sentimientos y fantasías inconscientes despertados en el analista son un instrumento diagnóstico crucial de lo que el paciente proyecta.',
          clinical_impact: 'Uso de las resonancias contratransferenciales como brújula técnica en sesión.'
        },
        {
          year_or_era: '1964',
          author_milestone: 'Jacques Lacan — Seminario 11: Los cuatro conceptos fundamentales',
          definition_or_shift: 'Sujeto Supuesto Saber (SSS): La transferencia se articula cuando el analizante supone que el analista posee la clave secreta de su síntoma. El acto analítico culmina con la caída de esa suposición.',
          clinical_impact: 'El analista se rehúsa a ocupar el lugar del amo o del sabio que aconseja; opera desde la falta y como causa del deseo del sujeto.'
        }
      ]
    }
  ]
};
