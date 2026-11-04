import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.png':'image/png','.md':'text/plain; charset=utf-8'};
http.createServer(async(req,res)=>{try{
 let urlPath=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 if(urlPath==='/cumbre-menonita'){res.writeHead(302,{Location:'/cumbre-menonita/'});return res.end();}
 urlPath=urlPath.replace(/^\/cumbre-menonita\//,'/');
 if(urlPath==='/')urlPath='/index.html';
 const file=path.resolve(root,`.${urlPath}`);
 if(!file.startsWith(root+path.sep)||urlPath.split('/').some(p=>p.startsWith('.'))||!types[path.extname(file)]){res.writeHead(404);return res.end('No encontrado');}
 const data=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)],'Cache-Control':'no-store'});res.end(data);
}catch{res.writeHead(404);res.end('No encontrado');}}).listen(4173,'127.0.0.1',()=>console.log('Vista local: http://127.0.0.1:4173/cumbre-menonita/'));
