import path from 'node:path';
const original=path.relative;
path.relative=(from,to)=>original(from,to).split(path.sep).join('/');
