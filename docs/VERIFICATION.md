# Verificación de la experiencia CodyWork

Fecha: 16 de septiembre de 2026. Entorno: Windows, Node 26.5.1, navegador Chromium integrado. Repositorio de entrega: `codyworksoporte-dot/CodyWork`, rama `main`.

## Ampliación del portafolio: Fashion Storefront

Se añadió la novena demo con su enlace original, descripción y captura de portada optimizada a WebP (52 kB). El contador del archivo se calcula a partir de los proyectos disponibles.

- `npm test`: las tres pruebas existentes pasan.
- `npm run build`: comprobación de TypeScript, compilación, prerenderizado y verificación de los nueve proyectos y sus recursos correctos.
- Navegador: la tarjeta y su imagen se muestran en escritorio y móvil (375 × 812), sin desbordamiento horizontal ni errores o advertencias de consola durante la revisión de escritorio.
- Las comprobaciones que siguen corresponden a la entrega inicial de ocho demos.

## Compilación y pruebas

| Comprobación | Resultado |
| --- | --- |
| TypeScript estricto: `npm run lint` | Correcto; incluye tipos, parámetros y variables sin usar. |
| `npm test` | 3 pruebas correctas: composición del mensaje, ambos números de WhatsApp y correo; incluye tildes, símbolos y saltos de línea. |
| `npm run build` | Correcto: aplicación cliente y prerenderizado HTML. |
| `scripts/verify-build.mjs` | Contenido en HTML, 8 proyectos, recursos locales, enlaces externos seguros, canonical, JSON-LD, robots, sitemap y reglas de movimiento reducido. |
| Recursos | Ocho vistas previas WebP de aproximadamente 16–75 kB cada una. Logo original: 44 kB. |
| Bundle cliente | Aproximadamente 79 kB de JavaScript y 8 kB de CSS comprimidos con gzip. |

## Recorridos en navegador

- Activación: selección de los cuatro nodos; cambian el estado visual, la explicación y el resultado anunciado.
- Capacidades: selección de las cinco necesidades; cambian problema, producto, piezas, resultado y referencias relacionadas.
- Proceso: selección de las cinco etapas y verificación del texto y el entregable.
- Inicializador: envío vacío muestra error comprensible y enfoca el campo; un texto válido genera una vista previa.
- Selecciones de Ecommerce y negocio existente aparecen en el mensaje generado.
- Canales: ambos números de WhatsApp y la dirección de correo reciben el texto correctamente codificado en el enlace.
- Copiar mensaje muestra confirmación. Editar el resultado esperado invalida la vista previa anterior.
- No se enviaron mensajes externos durante las pruebas.
- Teclado: primer Tab muestra «Saltar al contenido»; Enter enfoca el contenido. Enter activa nodos y capacidades; Espacio activa etapas. El foco es visible y no hay atrapamiento.
- Portafolio: ocho imágenes cargadas, ocho destinos verificables, anclas internas existentes, `noopener noreferrer` en todas las aperturas externas.
- Navegación: el indicador sigue la sección visible y las anclas permiten acceder a cada parte. Se corrigió un cálculo inicial de la sección activa.
- Producción: HTML servido directamente desde `dist/`, sin errores o advertencias de consola en la pestaña de verificación.

## Revisión responsive

| Vista | Resultado |
| --- | --- |
| 375 × 812 | Núcleo táctil, índice superior, contenido en una columna, formulario utilizable y sin desbordamiento horizontal. |
| 768 × 1024 | Navegación superior, mapa y texto simultáneos, secciones adaptadas, sin desbordamiento horizontal. |
| 1440 × 900 | Índice lateral, composición editorial y núcleo completo, sin desbordamiento horizontal. |

Se revisaron el inicio, el archivo, los selectores y el formulario. Se corrigió un enlace de navegación móvil que tenía menos de 44 px de anchura. Las capturas locales de evidencia están en `docs/verification/` y se excluyen del repositorio para mantenerlo liviano.

## Accesibilidad y límites

El contenido usa landmarks, encabezados, etiquetas, controles nativos, foco visible, textos de error y regiones anunciables. Una comprobación de contraste sobre texto renderizado detectó una flecha secundaria por debajo de 4.5:1; su color se corrigió. Esta comprobación calculada no sustituye una auditoría completa de accesibilidad.

`prefers-reduced-motion` desactiva transiciones, animaciones, desplazamiento suave e inclinación del núcleo; se verificaron las reglas de producción y la condición de la interacción con puntero. El navegador disponible no expone emulación de esa preferencia ni desactivación global de JavaScript: no se afirma una prueba nativa de sistema de esos dos modos. El HTML prerenderizado contiene todos los proyectos, capacidades, contactos y enlaces antes de la hidratación.

No se ejecutó Lighthouse ni una prueba con lector de pantalla real. Los objetivos de puntuación del brief no se presentan como mediciones obtenidas. No se añadieron librerías de auditoría fuera de las dependencias autorizadas. Tampoco se afirman métricas de Core Web Vitals en dispositivos reales.

## Publicación

La entrega solicitada es el código en GitHub. Se incluye un flujo que compila y publica en GitHub Pages con cada cambio en `main`, además de permitir ejecución manual. El dominio de producción puede configurarse con `SITE_URL`.
