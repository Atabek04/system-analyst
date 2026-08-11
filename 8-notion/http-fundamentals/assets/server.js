const http = require('http');
const fs = require('fs');
const path = require('path');
const base = __dirname;
http.createServer((q, s) => {
  let u = decodeURIComponent(q.url.split('?')[0]);
  if (q.method === 'POST' && u === '/save') {
    const name = (new URL(q.url, 'http://x')).searchParams.get('name') || 'out.png';
    const chunks = [];
    q.on('data', c => chunks.push(c));
    q.on('end', () => {
      fs.writeFile(path.join(base, name), Buffer.concat(chunks), e => {
        s.writeHead(e ? 500 : 200, { 'access-control-allow-origin': '*' });
        s.end(e ? 'err' : 'ok');
      });
    });
    return;
  }
  if (u === '/' || u === '') u = '/_render.html';
  const fp = path.join(base, u);
  fs.readFile(fp, (e, d) => {
    if (e) { s.writeHead(404); s.end('not found'); return; }
    const ext = path.extname(fp);
    const ct = ext === '.html' ? 'text/html'
      : ext === '.excalidraw' ? 'application/json'
      : ext === '.js' ? 'text/javascript'
      : 'text/plain';
    s.writeHead(200, { 'content-type': ct, 'access-control-allow-origin': '*' });
    s.end(d);
  });
}).listen(8797, () => console.log('excalidraw render server up on 8797'));
