const learningData = [
    { id: 1, 
      title: 'Habilidades Gerenciales LIVE.', 
      image: require('../assets/ITESM.jpeg'),
      description:'Instituto Tecnológico y de estudios Superiores de Monterrey',
      fulldescription: 'Objetivo \n'
                  +'Desarrollar habilidades y competencias básicas de liderazgo mediante herramientas prácticas que permitan impulsar la entrega de resultados.\n \n '
                  +'Dirigido a gerentes. \n \n' 
                  +'Duración \n 8 sesiones virtuales de 2 horas. \n2 horas de trabajo individual en plataforma entre sesiones \n\n'
                  +'Periodicidad \n1 sesión virtual quincenal. \n \n'
                  +'Enfoque didáctico \n• Recursos didácticos como videos, cápsulas y lecturas.\n• Prácticas y feedback sobre las actividades en plataforma. \n \n'
                  +'Requisitos de inscripción\n'
                  +'• Puestos de nivel gerencia con al menos una persona a su cargo.\n• Antigüedad mínima en el Banco: Un año.\n• Última calificación de desempeño: Aceptable o Superior. \n\n'
                  +'Criterios de aprobación \n'
                  +'• Asistencia a la sesión síncrona (aprender) 15%\n'
                  +'• Examen de las sesiones (aprender y profundizar) 35%\n'
                  +'Asistencia a la sesión (preparar para aplicar) 15%\n'
                  +'Evaluación de Competencia (aplicación en el trabajo) 35%\n'},
                  
    { id: 2, 
      title: 'Liderazgo Transformacional.', 
      image: require('../assets/HBP.jpg'), 
      description:'Harvard HBP',
      fulldescription: 'Objetivo\n'
                      +'Desarrollar las habilidades de los subdirectores para gestionar'
                      +'exitosamente a sus equipos por medio de herramientas que les'
                      +'permitan convertirse en líderes capaces, comprometidos y'
                      +'orientados a resultados.\n\n'
                      +'Dirigido a: Subdirectores.\n\n'
                      +'Duración\n'
                      +'8 sesiones virtuales\n'
                      +'1 sesión de arranque y sesión de cierre\n'
                      +'4 semanas de trabajo en línea por módulo\n\n'
                      +'Periodicidad\n'
                      +'Semanal (6 semanas por Módulo)\n\n'
                      +'Enfoque didáctico\n'
                      +'Recursos didácticos como videos, infografías y artículos de'
                      +'Harvard Business Review.\n' },
    { id: 3, 
      title: 'Liderazgo y Empresa OnLine.', 
      image: require('../assets/ICAMI.png'), 
      description: 'ICAMI, Centro de Formación y Perfeccionamiento Directivo.',
      fulldescription: 'Objetivo\n\n'
                      +'Perfeccionar las habilidades de negocio en los subdirectores de'
                      +'la institución, desarrollando la capacidad de análisis para la'
                      +'toma de decisiones eficaces y oportunas.\n\n'
                      +'Dirigido a subdirectores.\n\n'
                      +'Duración\n'
                      +'24 sesiones en aula virtual de 2 horas.\n'
                      +'48 horas de estudio individual.\n\n'
                      +'Periodicidad\n'
                      +'Semanal\n\n'
                      +'Enfoque didáctico\n'
                      +'Método del caso\n'
                      +'Actividades de estudio individual\n'},
    { id: 4, 
      title: 'Alta Dirección Banorte.', 
      image: require('../assets/IPADE.png'), 
      description:'IPADE, Universidad Panamericana.',
      fulldescription: 'Objetivo\n'
                      +'Desarrollar y perfeccionar las habilidades de los directivos para mejorar la'
                      +'toma de decisiones, perspicacia financiera, orientación al cliente, así'
                      +'como pensamiento innovador y estratégico.\n\n'
                      +'Dirigido a: Directores.\n\n'
                      +'Duración\n'
                      +'10 módulos divididos en:\n'
                      +'• 38 sesiones virtuales de 2 horas.\n'
                      +'• 2 módulos presenciales* de 18 horas al final del programa.\n'
                      +'• 84 horas de trabajo individual.\n\n'
                      +'Periodicidad\n'
                      +'1 o 2 sesiones virtuales por semana\n'
                      +'2 módulos presenciales de 2 días completos*\n\n'
                      +'Enfoque didáctico\n'
                      +'Método del caso\n'
                      +'Actividades de estudio individual.\n\n'
                      +'Requisitos de inscripción\n'
                      +'Puestos de nivel dirección con tres años de experiencia directiva.\n'
                      +'Antigüedad mínima en el Banco: Dos años.\n'
                      +'Calificación de desempeño 2019: Aceptable o superior\n\n'
                      +'Criterios de aprobación\n'
                      +'80% de asistencia a las sesiones en vivo\n'
                      +'80% de entrega de las actividades en línea.\n'},
    { id: 5, 
      title: 'Dirección de Personas.', 
      image: require('../assets/IPADE.png'), 
      description:'IPADE, Universidad Panamericana.',
      fulldescription: 'Objetivo\n'
                      +'Desarrollar y perfeccionar las habilidades de los directivos, de manera'
                      +'que les permitan crear diagnósticos y tomar decisiones asertivas'
                      +'relacionadas con las personas con las que interactúa.\n\n'
                      +'Dirigido a: Directores.\n\n'
                      +'Duración\n'
                      +'10 sesiones virtuales de 2 horas.\n'
                      +'4 horas de trabajo individual entre sesiones.\n\n'
                      +'Periodicidad\n'
                      +'Semanal\n'
                      +'Enfoque didáctico\n'
                      +'Método del caso enriquecido con metodologías digitales.\n\n'
                      +'Requisitos de inscripción\n'
                      +'Puestos de nivel dirección con tres años de experiencia directiva.\n'
                      +'Antigüedad mínima en el Banco: Dos años.\n'
                      +'Calificación de desempeño 2019: Aceptable o superior \n\n'
                      +'Criterios de aprobación\n'
                      +'80% de asistencia a las sesiones en vivo\n'
                      +'80% de entrega de las actividades en línea.\n'},
    { id: 6, 
      title: 'Continuidad y Actualización.', 
      image: require('../assets/IPADE.png'), 
      description:'IPADE, Universidad Panamericana.',
      fulldescription: 'Objetivo\n'
      +'Perfeccionar las habilidades directivas mediante su práctica'
      +'intensiva, motivando a desarrollar sus cualidades para la toma de'
      +'decisiones, ejercitando la flexibilidad y amplitud de criterio, así como'
      +'la construcción de firmeza de carácter que debe acompañar a toda'
      +'acción directiva.\n\n'
      +'Dirigido a: Directores Ejecutivos con experiencia que hayan'
      +'participado en el programa de Alta Dirección Banorte.\n\n'
      +'Duración:\n'
      +'9 módulos divididos en:\n'
      +'• 45 sesiones virtuales de 1:50 horas\n'
      +'• 120 horas de lectura individual.\n\n'
      +'Periodicidad\n'
      +'1 módulo mensual, (5 sesiones virtuales por semana)\n'
      +'Enfoque didáctico Método del caso.\n\n'
      +'Requisitos de inscripción\n'
      +'Haber participado en el programa de Alta Dirección Banorte.\n'
      +'Antigüedad mínima en el Banco: Dos años.\n'
      +'Última calificación de desempeño: Aceptable o Superior.\n\n'
      +'Criterios de aprobación\n'
      +'Asistencia al 80 % de sesiones.\n'
      +'Participación activa y significativa en cada sesión.\n'
      +'Cumplir satisfactoriamente con el mecanismo de evaluación definido para el programa.\n'},
   { id: 7, 
      title: 'Coaching Ejecutivo.', 
      image: require('../assets/SHERPA.png'), 
      description: 'SHERPA COACHING',
      fulldescription: 'Objetivo\n'
      +'Fortalecer las habilidades requeridas para dirigir personas a través'
      +'de un proceso de coaching individual.\n\n'
      +'Dirigido a: Directores Ejecutivos\n\n'
      +'Duración\n'
      +'1 sesión de arranque\n'
      +'7 sesiones virtuales individuales\n\n'
      +'Periodicidad\n'
      +'Mensual\n\n'
      +'Enfoque didáctico\n'
      +'• Basado en el modelo de coaching sistémico el cual contempla'
      +'principios, prácticas y procedimientos con aplicaciones claras.\n'
      +'• Integración de acciones y compromisos al plan de Desarrollo individual.\n'
      +'• Asistencia y soporte continuo para cada participante una vez'
      +'concluidas las sesiones (telefónico y por correo electrónico).\n\n'
      +'Requisitos de inscripción\n'
      +'• Puestos de nivel Dirección Ejecutiva.\n'
      +'• Antigüedad mínima en el Banco: 1 año.\n'
      +'• Última calificación de desempeño: Aceptable o Superior.\n\n'
      +'Criterios de aprobación\n'
      +'• 80 % de asistencia durante todo el programa.\n'
    }
  ];
export default learningData;