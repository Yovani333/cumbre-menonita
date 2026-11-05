# Cumbre Menonita

Sitio corporativo estático para un caso empresarial ficticio UABC, semestre 2026-2. HTML, CSS y JavaScript sin dependencias de producción, backend ni servicios de pago.

## Abrir localmente

Abre `index.html` en el navegador, o ejecuta desde la raíz:

```powershell
node scripts/serve.mjs
```

Visita http://127.0.0.1:4173/cumbre-menonita/ . Ctrl+C detiene el servidor. Node.js solo se necesita para esta previsualización, no para publicar.

## Archivos

- `index.html`: contenido, estructura semántica, SEO y navegación.
- `css/styles.css`: diseño adaptable, identidad, foco y movimiento reducido.
- `js/main.js`: menú móvil, cierre con Escape y sección activa.
- `assets/logo/`: logotipo original sin pérdida y favicon PNG.
- `assets/imagenes/`: fotografías WebP locales.
- `CREDITOS.md`: autores, fuentes, licencias y alcance ilustrativo.
- `scripts/serve.mjs`: vista HTTP local, también bajo `/cumbre-menonita/`.
- `scripts/verify.mjs`: comprobación de recursos, anclas y contenido.
- `.gitignore`: excluye PDF, documentos privados y resultados temporales.
- `VERIFICACION.md`: pruebas realmente realizadas y límites.

## Contenido y privacidad

El PDF original permanece fuera del repositorio. Solo se extrajo el logotipo y se utilizó información institucional autorizada. No se incluyen datos de clientes del expediente, cifras financieras, inventarios, contratos, contactos inventados ni certificados simulados. Misión y visión literales, historia y red comercial se identifican dentro del escenario ficticio. Catálogo y fotografías son ilustrativos, sin disponibilidad comercial comprobada.

No existen datos oficiales de contacto autorizados; la invitación comercial remite al representante durante la presentación. Para un uso comercial real será necesario validar datos corporativos, marca, recursos propios, catálogo y contacto.

## Publicar en GitHub Pages

GitHub Pages está configurado para publicar desde `main`, carpeta raíz, con HTTPS y el dominio personalizado de `CNAME`. Dirección del sitio: `https://cumbremenonita.com/`.

Para publicar actualizaciones autorizadas:

1. Guarda los archivos en un commit y envíalos a la rama `main` del repositorio.
2. En GitHub entra a **Settings → Pages → Build and deployment**.
3. Selecciona **Deploy from a branch**, rama **main**, carpeta **/(root)** y guarda.
4. Espera a que termine el despliegue de Pages y comprueba la dirección del sitio.

Rutas de recursos relativas compatibles con la subcarpeta del repositorio. Sin compilación ni secretos. Open Graph incluye título, descripción, locale e imagen de referencia; la URL canónica apunta a GitHub Pages. Si cambia el dominio, actualiza los metadatos absolutos en `index.html`.

## Validar

```powershell
node --check js/main.js
node scripts/verify.mjs
```

Estas revisiones no sustituyen una inspección visual. Consulta `VERIFICACION.md`.

## Revisión del documento actualizado

Consulta `ACTUALIZACIONES.md` para los cambios de catálogo, maduración y protección del producto, y para las secciones contrastadas que conservan su contenido. Los adjuntos fuente permanecen excluidos de Git.
