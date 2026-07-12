import path from 'node:path';
if(process.platform==='win32'){
  const original=path.relative.bind(path);
  path.relative=(from,to)=>original(from,to).split(path.sep).join('/');
}
