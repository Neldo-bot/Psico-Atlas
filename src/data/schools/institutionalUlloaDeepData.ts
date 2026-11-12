import { SchoolOfThoughtEntity } from '../../types/vaultTypes';

export const institutionalUlloaDeepData: SchoolOfThoughtEntity = {
  id: 'institucional_ulloa',
  title: 'Psicología Institucional, Salud Mental y Escuela Rioplatense (Ulloa, Pichon-Rivière, Bleger)',
  entity_type: 'school',
  tags: ['#school/institutional', '#ulloa', '#pichon_riviere', '#bleger', '#ternura', '#encerrona_tragica', '#public_health'],
  summary: 'Paradigma clínico y psicosocial fundado en la intersección entre psicoanálisis, salud comunitaria, dinámica grupal e intervención institucional, pionero en los conceptos de Ternura ética, Encerrona Trágica y Grupo Operativo.',
  school_era: '1950s – Presente (Buenos Aires, Rosario, Montevideo)',
  school_founders: ['Fernando Ulloa', 'Enrique Pichon-Rivière', 'José Bleger', 'Marie Langer', 'Armando Bauleo'],
  parent_paradigm: 'Institutional & Public Health',

  core_concepts: [
    {
      term: 'La Ternura como Instancia Ética (Ulloa)',
      definition: 'Condición fundante de la humanización del cachorro humano. Conjunción indisoluble de Empatía (comprender la necesidad ajena) y Miramiento (reconocer al otro como un semejante con autonomía), operando como la primera barrera protectora frente a la desmesura de la crueldad.'
    },
    {
      term: 'La Encerrona Trágica (Ulloa)',
      definition: 'Situación de desamparo absoluto configurada por dos lugares sin tercero de apelación: la víctima depende para vivir o subsistir de quien la somete, maltrata o violenta, quedando privada de toda ley protectora o recurso de queja.'
    },
    {
      term: 'Síndrome de Padecimiento y Mortificación Institucional',
      definition: 'Estado de anestesia y acostumbramiento al malestar en hospitales, escuelas o cárceles, donde los trabajadores e internados pierden la capacidad de asombro y queja, viviendo el trabajo como una condena burocrática sin esperanza de cambio.'
    },
    {
      term: 'Grupo Operativo y el ECRO (Pichon-Rivière)',
      definition: 'Dispositivo centrado en una tarea explícita (aprendizaje, cura, resolución comunitaria) donde se movilizan las ansiedades básicas (miedo a la pérdida y miedo al ataque) a través del interjuego de roles (Portavoz, Chivo Emisario, Saboteador, Líder).'
    },
    {
      term: 'El Encuadre como Institución y Depósito Psíquico (Bleger)',
      definition: 'El encuadre analítico o institucional no es una mera formalidad organizativa; opera como el no-proceso, la institución que alberga y contiene la parte psicótica y sincrética de la personalidad del consultante.'
    }
  ],

  view_of_psychopathology: 'El malestar no es solo un conflicto intrapsíquico personal; es también el síntoma de la fractura, el disciplinamiento y la alienación que las instituciones sociales y las condiciones materiales de existencia imponen a los sujetos cuando se ausenta la ternura y prima la crueldad burocrática.',
  epistemological_foundation: 'Psicoanálisis extendido, materialismo dialéctico, psicología social rioplatense y derechos humanos. La salud mental se define como una adaptación activa a la realidad que transforma el medio y al propio sujeto, no como pasiva resignación homeostática.',
  historical_evolution: 'Nace en el Hospicio de las Mercedes y la Experiencia Rosario con Pichon-Rivière, se formaliza con los textos de Bleger sobre psicohigiene y culmina con las intervenciones institucionales y de derechos humanos de Fernando Ulloa tras la dictadura cívico-militar argentina.',
  therapist_stance: 'Analista de campo e intercesor ético. Se niega a ser cómplice de la encerrona trágica; opera como un tercero de apelación que rescata la palabra silenciada, desnaturaliza el padecimiento y promueve la resistencia poética y comunitaria.',
  empirical_critiques: [
    'Dificultad de estandarización en manuales cuantitativos tradicionales debido a la singularidad contextual de cada dispositivo institucional.',
    'Constante confrontación política y de poder con jerarquías burocráticas que resisten la desalienación del malestar.'
  ],
  related_treatment_ids: ['intervencion_institucional_salud_mental', 'dispositivo_grupo_operativo'],

  // =========================================================================
  // MÓDULO 1: GLOSARIO EXHAUSTIVO DE PALABRAS CLAVE
  // =========================================================================
  keywords_glossary: [
    {
      term: 'La Ternura (Miramiento y Empatía)',
      original_language_term: 'La Ternura (Fernando Ulloa)',
      definition: 'Operación fundante del psiquismo infantil donde el semejante primordial (la madre o cuidador) inhibe su propia pulsión hostil y aloja la vulnerabilidad del recién nacido a través de dos tiempos: la Empatía (sintonía afectiva para entender el dolor del bebé) y el Miramiento (mirar al niño reconociéndolo como un sujeto separado, no como una posesión o desecho).',
      clinical_distinction: '[VERDAD: La ternura no es debilidad sentimental; es un acto ético y político de resistencia frente a la crueldad social e institucional].'
    },
    {
      term: 'La Encerrona Trágica',
      original_language_term: 'Encerrona Trágica (Fernando Ulloa)',
      definition: 'Estructura perversa de dos términos (opresor y víctima) donde el sujeto depende para su supervivencia biológica o laboral de la misma instancia que lo vulnera, careciendo de un Tercero de Apelación (la ley, la justicia, un equipo que ampare). Es el núcleo del trauma en tortura, violencia intrafamiliar y maltrato hospitalario.',
      clinical_distinction: '[VERDAD: La intervención del psicólogo institucional consiste en fundar o encarnar ese Tercero de Apelación ausente para quebrar la encerrona].'
    },
    {
      term: 'Síndrome de Padecimiento y Mortificación',
      original_language_term: 'Mortificación Institucional (Ulloa)',
      definition: 'Cuadro institucional crónico donde los profesionales de la salud o educación sufren una disminución de la agudeza crítica, pérdida del humor, fatiga sin alegría y resignación pasiva ("Aquí nada va a cambiar jamás"), transformando la queja fecunda en un lamento estéril.',
      clinical_distinction: '[VERDAD: La mortificación institucional adormece la empatía y favorece que los profesionales terminen maltratando a los pacientes sin percibirlo].'
    },
    {
      term: 'Fractura Institucional y Articulación Patológica',
      original_language_term: 'Fractura Institucional (Ulloa, 1969)',
      definition: 'Quiebre o fisura formal dentro del organigrama de un hospital o institución (ej. disputa de poder entre médicos y enfermeros, o entre turnos mañana y noche) sobre la cual se monta una articulación patológica que paraliza el trabajo con los pacientes.',
      clinical_distinction: '[VERDAD: El síntoma del paciente internado a menudo no es su psicopatología de base, sino el reflejo de la fractura institucional no hablada].'
    },
    {
      term: 'El Numerario y el Tiempo Institucional',
      original_language_term: 'El Numerario (Ulloa)',
      definition: 'La relación cuantitativa entre los recursos materiales, el tiempo disponible y el número real de personas a atender en un dispositivo público. Cuando el numerario es desproporcionado (ej. 1 psicólogo para 500 pacientes), la institución entra en violencia objetiva.',
      clinical_distinction: '[VERDAD: No se puede hacer clínica ignorando las condiciones materiales de producción del acto terapéutico].'
    },
    {
      term: 'ECRO (Esquema Conceptual, Referencial y Operativo)',
      original_language_term: 'ECRO (Pichon-Rivière)',
      definition: 'Conjunto articulado de conocimientos teóricos, metodológicos y vivenciales que un equipo de trabajo o un psicólogo utiliza para operar sobre la realidad objetiva. Debe ser permanentemente rectificado y retroalimentado por la praxis en el terreno.',
      clinical_distinction: '[VERDAD: Un ECRO cerrado deviene ideología dogmática; un ECRO operativo es dialéctico y abierto a la sorpresa del campo].'
    },
    {
      term: 'Vectores del Cono Invertido (Pichon-Rivière)',
      original_language_term: 'Vectores de Evaluación Grupal',
      definition: 'Escala de 6 dimensiones para evaluar la madurez de un grupo: 1. Afiliación e Identificación, 2. Pertenencia genuina, 3. Cooperación activa, 4. Pertinencia a la tarea, 5. Comunicación fluida, 6. Aprendizaje y Telé (disposición afectiva de atracción o rechazo hacia los otros).',
      clinical_distinction: '[VERDAD: Permite diagnosticar con exactitud científica por qué un equipo de salud o un grupo comunitario está trabado].'
    },
    {
      term: 'Roles del Grupo Operativo: Portavoz y Chivo Emisario',
      original_language_term: 'Roles Grupales (Pichon-Rivière)',
      definition: 'El Portavoz es el miembro que enuncia el malestar latente o el secreto no dicho del grupo; el Chivo Emisario es aquel sobre quien el grupo deposita todas sus ansiedades y culpas para expulsarlo; el Saboteador se resiste al cambio; el Líder conduce hacia la tarea.',
      clinical_distinction: '[VERDAD: Los roles son móviles y funcionales; cristalizar a un miembro en el rol de "chivo expiatorio" es el fracaso del dispositivo].'
    },
    {
      term: 'Sociabilidad Sincrética (José Bleger)',
      original_language_term: 'Sincresis (Bleger, 1967)',
      definition: 'Nivel arcaico y primitivo de convivencia donde los límites individuales se hallan fusionados e indiferenciados en una masa común de pertenencia muda. Se deposita en las paredes físicas, horarios y rituales fijos de la institución.',
      clinical_distinction: '[VERDAD: Cuando se altera el encuadre o se reforma una institución, se despiertan angustias catastróficas porque se conmociona la sociabilidad sincrética].'
    },
    {
      term: 'Psicohigiene (José Bleger)',
      original_language_term: 'Psicohigiene (Bleger, 1966)',
      definition: 'Desplazamiento radical de la psicología: pasar de la clínica curativa sobre el enfermo terminal al ámbito profiláctico e institucional, asesorando a las organizaciones comunitarias para promover condiciones que impidan la gestación de la enfermedad mental.',
      clinical_distinction: '[VERDAD: La meta del psicólogo no es sólo asistir al paciente en el consultorio, sino intervenir en la higiene mental de la comunidad].'
    }
  ],

  // =========================================================================
  // MÓDULO 2: AUTORES CANÓNICOS Y OBRAS ORIGINALES
  // =========================================================================
  canonical_authors: [
    {
      name: 'Fernando Ulloa',
      era_years: '1924 – 2004 (Buenos Aires)',
      core_thesis: 'El psicoanálisis no puede desentenderse de las condiciones de crueldad social e institucional donde opera. La Ternura con Miramiento y Empatía es el acto ético primordial para rescatar a los sujetos de la Encerrona Trágica y la mortificación burocrática.',
      key_works: [
        { title: 'Psicología de las instituciones: una aproximación psicoanalítica', year: 1969, significance: 'Texto fundacional de la intervención institucional: conceptos de fractura, articulación patológica y tiempo institucional.' },
        { title: 'Novela clínica psicoanalítica: Historial de una práctica', year: 1995, significance: 'Obra cumbre: teorización de la Ternura, la Encerrona Trágica, el síndrome de violentar y la clínica en Derechos Humanos.' },
        { title: 'Sociedad y crueldad: Clínica de la ternura ante la encerrona trágica', year: 2000, significance: 'Articulación entre ética, política y salud mental comunitaria en contextos de exclusión.' }
      ]
    },
    {
      name: 'Enrique Pichon-Rivière',
      era_years: '1907 – 1977 (Buenos Aires / Ginebra)',
      core_thesis: 'El hombre es un ser de necesidades que solo se satisfacen socialmente en relaciones que lo determinan. El sujeto es el emergente de una trama vincular e histórica donde el grupo operativo es el instrumento de aprendizaje y cambio.',
      key_works: [
        { title: 'Del psicoanálisis a la psicología social (Volumen I y II)', year: 1971, significance: 'Sistematización de la teoría del vínculo, el ECRO y la superación dialéctica del psicoanálisis individualista.' },
        { title: 'El proceso grupal: Del psicoanálisis a la psicología social', year: 1971, significance: 'Metodología del Grupo Operativo, los roles grupales y el cono invertido.' }
      ]
    },
    {
      name: 'José Bleger',
      era_years: '1922 – 1972 (Ceres, Santa Fe / Buenos Aires)',
      core_thesis: 'La conducta es la unidad de estudio de la psicología en sus tres áreas (mente, cuerpo, mundo externo). El encuadre terapéutico actúa como el depósito institucional de la parte psicótica de la personalidad y la sociabilidad sincrética.',
      key_works: [
        { title: 'Psicoanálisis y dialéctica materialista', year: 1958, significance: 'Articulación pionera entre el descubrimiento freudiano y la dialéctica dialéctico-social.' },
        { title: 'Psicología de la conducta', year: 1963, significance: 'Manual clásico sobre las áreas de la conducta, situaciones y campos de interacción.' },
        { title: 'Psicohigiene y psicología institucional', year: 1966, significance: 'Texto canónico sobre el rol del psicólogo como consultor institucional y promotor de salud pública.' },
        { title: 'Simbiosis y ambigüedad', year: 1967, significance: 'Teoría de la parte sincrética de la personalidad y el depósito en el encuadre.' }
      ]
    }
  ],

  // =========================================================================
  // MÓDULO 3: CITAS TEXTUALES ORIGINALES COMENTADAS
  // =========================================================================
  primary_quotes: [
    {
      author: 'Fernando Ulloa',
      year: 1995,
      work_source: 'Novela clínica psicoanalítica: Historial de una práctica',
      page_or_seminar: 'Libros del Zorzal / Paidós, Buenos Aires, p. 238',
      quote: 'Defino la «Encerrona Trágica» como toda situación donde alguien, para vivir, trabajar, recuperar la salud o simplemente subsistir, depende de algo o alguien que lo maltrata, lo explota o lo desampara, sin que exista un tercero de apelación al cual recurrir. Es la situación de dos lugares donde la víctima no tiene salida reglada. El efecto inevitable de la encerrona trágica es la mortificación: el sujeto termina por naturalizar el horror y pierde la capacidad de decir «basta».',
      clinical_reflection: 'Concepto clave de la clínica hospitalaria e institucional: cuando el psicólogo atiende en servicios públicos, su primera función es no constituirse en un engranaje más de la encerrona trágica; debe operar como Tercero de Apelación que restituya la ley y la dignidad del consultante.'
    },
    {
      author: 'Fernando Ulloa',
      year: 1995,
      work_source: 'Novela clínica psicoanalítica: Historial de una práctica',
      page_or_seminar: 'Libros del Zorzal / Paidós, Buenos Aires, p. 245',
      quote: 'La Ternura es el primer dique contra la barbarie. No es debilidad blanda; es una instancia ética fundante que consta de dos ingredientes: la empatía, que es la capacidad de ponerse en el lugar del dolor del otro sin perder la propia identidad, y el miramiento, que es mirar al semejante con la consideración de que es un sujeto singular, no una cosa para ser usada o abusada. Si la cultura no garantiza la ternura, triunfa la crueldad.',
      clinical_reflection: 'Directriz ética indiscutible para el profesional de la salud mental: frente a los discursos que cosifican al consultante como un número o una patología deshumanizada, la clínica de la ternura sostiene la escucha hospitalaria y el miramiento de su singularidad.'
    },
    {
      author: 'Enrique Pichon-Rivière',
      year: 1971,
      work_source: 'El proceso grupal: Del psicoanálisis a la psicología social',
      page_or_seminar: 'Ediciones Nueva Visión, Buenos Aires, p. 11',
      quote: 'La salud mental consiste en un aprendizaje de la realidad, en una adaptación activa a la realidad que se manifiesta en la capacidad del sujeto para transformar su medio mientras se modifica a sí mismo. El enfermo mental, por el contrario, se caracteriza por una adaptación pasiva, una alienación donde renuncia a su proyecto vital para someterse estereotipadamente a las exigencias destructivas del entorno.',
      clinical_reflection: 'Revolución en la definición de salud mental: la salud no es "estar calmo y no quejarse" (adaptación pasiva homeostática); la salud es la capacidad activa y creadora de transformar la propia realidad vincular y social.'
    },
    {
      author: 'José Bleger',
      year: 1966,
      work_source: 'Psicohigiene y psicología institucional',
      page_or_seminar: 'Ediciones Paidós, Buenos Aires, p. 38',
      quote: 'El psicólogo institucional no debe ser un empleado de la empresa o del hospital que ejecute ciegamente las órdenes de la dirección, ni tampoco un agitador que destruya la organización. Debe ser un consultor independiente que estudia la dinámica de las tensiones institucionales para ayudar a que la organización cumpla sus fines explícitos sin alienar ni enfermar a las personas que trabajan en ella.',
      clinical_reflection: 'Criterio técnico de encuadre en psicología laboral, institucional y comunitaria: preservar la independencia técnica y la neutralidad activa para poder diagnosticar la institución sin quedar absorbido por sus pactos neuróticos.'
    }
  ],

  // =========================================================================
  // MÓDULO 4: LÍNEAS TEMPORALES DE EVOLUCIÓN Y REINTERPRETACIÓN CONCEPTUAL
  // =========================================================================
  conceptual_timelines: [
    {
      concept_title: '1. Línea Temporal del Psicoanálisis de Diván a la Intervención Institucional',
      description: 'Cómo la escuela rioplatense trasladó el inconsciente y el vínculo a los grupos, los hospitales y el campo comunitario.',
      steps: [
        {
          year_or_era: '1940s–1950s',
          author_milestone: 'Enrique Pichon-Rivière — Hospicio de las Mercedes y Experiencia Rosario (1958)',
          definition_or_shift: 'Del Paciente Aislado a la Trama Vincular: Pichon-Rivière abandona el diván tradicional para trabajar con enfermeros y pacientes en el hospital psiquiátrico público, fundando la técnica de los Grupos Operativos.',
          clinical_impact: 'Demuestra que los grupos comunitarios pueden autogestionar el aprendizaje y la resolución de crisis sin depender de un amo autoritario.'
        },
        {
          year_or_era: '1966',
          author_milestone: 'José Bleger — Psicohigiene y Psicología Institucional',
          definition_or_shift: 'El Encuadre como Institución Social: El psicólogo sale del consultorio privado para intervenir como asesor en fábricas, escuelas y hospitales, conceptualizando la psicohigiene como prevención comunitaria.',
          clinical_impact: 'Se define el rol profesional del psicólogo institucional en América Latina.'
        },
        {
          year_or_era: '1969–1995',
          author_milestone: 'Fernando Ulloa — Psicología de las Instituciones y Novela Clínica Psicoanalítica',
          definition_or_shift: 'Clínica de la Mortificación y Derechos Humanos: Intervenciones de campo en manicomios, juzgados y hospitales públicos durante y después de la dictadura. Teorización de la Encerrona Trágica, la Fractura y la Ternura ética.',
          clinical_impact: 'Metodología rigurosa para desarmar la crueldad institucional y el padecimiento burocrático en salud pública.'
        }
      ]
    },
    {
      concept_title: '2. Línea Temporal de la Clínica de la Ternura frente a la Encerrona Trágica',
      description: 'De la conceptualización de las instituciones represivas a la ética de la ternura en salud mental y derechos humanos.',
      steps: [
        {
          year_or_era: '1969',
          author_milestone: 'Fernando Ulloa — Psicología de las Instituciones',
          definition_or_shift: 'La Institución como Objeto Teórico: Toda institución humana posee una tendencia innata a la fragmentación y a la mortificación de sus integrantes si no se interviene sobre sus fracturas.',
          clinical_impact: 'Diagnóstico de la articulación patológica entre autoridades, trabajadores y usuarios.'
        },
        {
          year_or_era: '1983–1985',
          author_milestone: 'Fernando Ulloa — Intervenciones en la CONADEP y con Niños Recuperados de la Dictadura',
          definition_or_shift: 'Descubrimiento de la Encerrona Trágica Extrema: La tortura y la apropiación de menores como el desamparo absoluto donde el verdugo es el único proveedor de la vida.',
          clinical_impact: 'El dispositivo terapéutico se erige como un espacio donde la palabra de la víctima es escuchada y restituida con valor jurídico y de verdad histórica.'
        },
        {
          year_or_era: '1995–2000',
          author_milestone: 'Fernando Ulloa — La Ternura como Resistencia Poética y Política',
          definition_or_shift: 'La Ternura contra la Crueldad: Se establece que la empatía sin miramiento es invasión, y el miramiento sin empatía es frialdad. Solo la conjunción de ambos humaniza las instituciones y permite una práctica de salud mental digna.',
          clinical_impact: 'Brújula ética fundamental para la formación de psicólogos, residentes y equipos de salud pública en hospitales y centros comunitarios.'
        }
      ]
    }
  ]
};
