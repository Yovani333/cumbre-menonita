import assert from 'node:assert/strict';
import {readFile,access,readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const html=await readFile(path.join(root,'index.html'),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(ids).size,ids.length,'IDs duplicados');
const links=[...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(m=>m[1]);
for(const link of links){if(link==='https://cumbremenonita.com/')continue;assert(!/^(https?:|\/\/)/.test(link),`Dependencia remota: ${link}`);if(link.startsWith('#'))assert(ids.includes(link.slice(1)),`Ancla inexistente: ${link}`);else await access(path.join(root,link));}
const text=html.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
for(const value of ['Pasión','Excelencia','Integridad','Compromiso','Respeto','Menonita de Crianza','Menonita Reserva','Menonita Añejo','Sitio demostrativo de Cumbre Menonita, desarrollado para un proyecto académico UABC 2026-2','Elaborar y distribuir quesos menonitas de calidad superior, con procesos artesanales y rigor en cada etapa, para llevar un sabor auténtico a las mesas de México y Norteamérica.','Somos una de las empresas líderes en la venta de quesos de Norteamérica, reconocida por su calidad, su variedad y la confianza de sus clientes.'])assert(text.includes(value),`Falta contenido: ${value}`);
assert(!text.includes('Menonita Estándar'), 'Nombre de producto desactualizado');
for (const value of ['14 a 30 días.', '1 a 3 meses.', '3 a 6 meses.', 'Empaque individual', 'Cajas de protección', 'Protección de la carga', 'preparación documental']) assert(text.includes(value), `Falta actualización: ${value}`);
assert.equal((html.match(/class="step"/g)||[]).length,8);
assert.equal((html.match(/<h1\b/g)||[]).length,1);
assert(!/\$\d|FDA|ISO\s*\d/i.test(html),'Contenido interno o ajeno');
for(const match of html.matchAll(/<img\b[^>]*>/g))assert(/alt="[^"]+"/.test(match[0]),'Imagen sin alt');
async function scan(dir){for(const item of await readdir(dir,{withFileTypes:true})){if(item.name.startsWith('.'))continue;const file=path.join(dir,item.name);if(item.isDirectory())await scan(file);else assert(!/\.pdf$/i.test(item.name),'PDF en el sitio');}}
await scan(root);
console.log(`OK: ${ids.length} IDs únicos, ${links.length} referencias válidas, 8 etapas, contenido obligatorio y ningún PDF.`);
