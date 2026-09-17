# CodyWork — Del impulso al producto

Experiencia oficial de productos digitales de CodyWork, El Salvador. Un núcleo de señal conecta idea, sistema, experiencia y resultado. El recorrido incluye once demos, cinco capacidades, el proceso de trabajo y un inicializador que prepara mensajes para WhatsApp o correo.

## Desarrollo

Requiere Node.js 22.8 o superior y npm.

```sh
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

`lint` ejecuta la comprobación estricta de TypeScript, incluyendo variables y parámetros sin usar. No se añadió ESLint ni otra dependencia ajena al stack solicitado. Las pruebas usan el ejecutor nativo de Node.

## Producción y SEO

`npm run build` genera `dist/` con HTML prerenderizado: titulares, once proyectos, servicios y contactos están disponibles antes de ejecutar JavaScript. React hidrata los controles interactivos. No se necesita servidor de aplicaciones, base de datos ni claves.

El canonical, sitemap, datos Organization y tarjetas sociales toman `SITE_URL` durante la compilación. Por defecto: `https://codyworksoporte-dot.github.io/CodyWork/`. Configurar esta variable si se usa otro dominio. Vite utiliza rutas relativas para funcionar en GitHub Pages o cualquier alojamiento estático.

La fuente está en `main`. Cada cambio guardado en esa rama ejecuta `Publicar web`: comprueba tipos y pruebas, compila la aplicación y publica `dist` en GitHub Pages. También se puede iniciar manualmente desde Actions.

## Archivos principales

- `src/components/`: navegación, marca y símbolos de interfaz.
- `src/sections/`: activación, archivo, capacidades, proceso e inicializador.
- `src/data/`: contenido del portafolio y capacidades separado de la presentación.
- `src/styles/`: tokens, estilos por sección y adaptación responsive.
- `src/utils/projectMessage.mjs`: mensajes y direcciones de contacto.
- `scripts/prerender.mjs`: HTML estático y metadatos configurables.
- `docs/PORTFOLIO-SOURCES.md`: enlaces, observaciones y procedencia de capturas.
- `docs/VERIFICATION.md`: pruebas realizadas y límites de la verificación.

## Identidad y recursos

Se conserva el símbolo CW proporcionado, con proporción original y sin redibujarlo. Su fondo negro se integra mediante composición CSS. La paleta usa negro azulado, cian, azul, violeta y magenta; los tonos de interfaz se aclaran para legibilidad. Las tipografías son locales: Segoe UI y Consolas, con fallbacks de sistema. No hay peticiones a proveedores de fuentes.

Las capturas del portafolio se obtuvieron de los once enlaces proporcionados, se optimizaron a WebP y se identifican como vistas previas con enlace a la fuente. No se descargaron por separado fotografías, modelos ni otros recursos de los sitios. Los conceptos no implican afiliación con las marcas.

## Interacción y privacidad

- Botones nativos, radio buttons, enlaces de ancla y foco visible.
- Navegación de secciones por scroll, teclado y toque, sin secuestrar el desplazamiento.
- `prefers-reduced-motion` elimina transiciones, inclinación y desplazamiento animado.
- Sin reproducción automática, rastreadores, almacenamiento local ni backend.
- El mensaje no se envía automáticamente: la persona revisa el texto y continúa en su aplicación.
- WhatsApp principal: +503 7530 8948. Alternativo: +503 6848 3548.
- Correo: codyworksoporte@gmail.com.
