# Verificación realizada

Fecha: 4 de noviembre de 2026. Informe de la revisión local realizada antes de la autorización de publicación.

## Comprobaciones técnicas

- `node --check js/main.js` y `node --check scripts/serve.mjs`: sintaxis válida.
- `node scripts/verify.mjs`: 18 IDs únicos, 35 referencias a recursos/anclas válidas, un encabezado H1, ocho etapas, textos alternativos y contenido institucional obligatorio, incluidas misión y visión literales.
- Solicitudes HTTP locales: respuesta 200 para la página y sus recursos únicos (14 rutas), usando el prefijo `/cumbre-menonita/`.
- Pillow: diez imágenes locales válidas. Peso conjunto aproximado de 1.9 MiB.
- Comparación de píxeles RGBA: el logotipo WebP es idéntico a la imagen extraída del PDF, a 1536 × 1024 píxeles. El favicon conserva la composición completa reducida.
- El PDF original no está dentro del repositorio. `.gitignore` excluye archivos PDF y carpetas privadas/temporales. Se revisó el contenido de la página para excluir información financiera, clientes, inventarios, contratos, contactos inventados y certificaciones simuladas.

## Navegador

Se utilizó el navegador integrado contra el servidor local y se revisaron capturas de escritorio, portada móvil, menú, catálogo, historia, misión/visión, proceso y distribución.

- Anchos finales comprobados mediante geometría del DOM: 320, 390, 768 y 1440 píxeles. Sin desbordamiento horizontal del documento ni de textos en los elementos revisados.
- Menú móvil: abre, actualiza `aria-expanded`, navega a una sección y se cierra al elegirla. Escape lo cierra y devuelve el foco al botón.
- Se comprobaron enlaces de portada, navegación a secciones y regreso al inicio.
- Las once instancias de imagen de la página cargaron correctamente después de recorrer sus secciones. Las secundarias usan carga diferida.
- Consola del navegador: sin errores ni advertencias registrados durante las comprobaciones.
- No hay recursos remotos esenciales en el DOM; imágenes, CSS y JavaScript se sirven localmente.
- Captura de portada guardada en `.qa/escritorio.png`, excluida de Git.

Durante la revisión se corrigió el tamaño del titular móvil y se descartó una fotografía de queso azul que no correspondía a la dirección del catálogo. Se añadieron esquemas SVG de salmuera y empaque. El CSS incluye foco visible, ancla para saltar contenido y respeto por `prefers-reduced-motion`.

## Límites

No se publicó en GitHub Pages; la compatibilidad se comprobó en un servidor local con el mismo prefijo de ruta. No se realizaron pruebas en dispositivos físicos, otros motores de navegador, lector de pantalla, proyector ni una auditoría automática completa de accesibilidad o rendimiento. El ajuste de movimiento reducido se revisó en el código, sin emular la preferencia del sistema.

Los recursos del catálogo son fotografías gastronómicas de referencia, no imágenes de productos propios. Para esta demostración no falta ningún recurso obligatorio. Los datos reales de contacto y fotografías propias solo serán necesarios si se transforma el proyecto académico en un sitio comercial real.

Al cerrar esta revisión local no se habían creado commits, realizado push ni publicado el sitio. La publicación fue autorizada posteriormente por el usuario. La configuración remota comprobada corresponde a GitHub Pages, rama `main`, carpeta raíz y HTTPS.

## Revisión posterior del documento de 61 páginas

- Se comparó el texto completo de ambas versiones con independencia de la paginación. Misión y visión coinciden literalmente con el nuevo documento; el logotipo también coincide píxel por píxel.
- Se actualizó el catálogo a Menonita de Crianza, con maduración de referencia de 14 a 30 días. Se añadieron rangos de referencia de Reserva y Añejo, protección en tres niveles y una síntesis de preparación documental del modelo transfronterizo. El alcance está registrado en `ACTUALIZACIONES.md`.
- `node scripts/verify.mjs`: 19 IDs únicos, 36 referencias válidas, ocho etapas y contenido obligatorio actualizado. Sintaxis JavaScript y diferencias de Git comprobadas.
- Revisión de catálogo y empaque en navegador local. Geometría del documento y textos a 320, 390, 768 y 1440 píxeles: sin desbordamientos detectados. Consola sin errores ni advertencias registrados.
- El adjunto PDF y la carpeta de adjuntos están excluidos de Git. No se incorporan datos internos al sitio.
- Se preserva el dominio `cumbremenonita.com` de los commits remotos y se actualizan URL canónica y metadatos sociales. GitHub confirma certificado aprobado y HTTPS obligatorio para ese dominio.
