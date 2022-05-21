const fs=require('fs'),
fsProm=require('fs').promises,
path=require('path'),dir=path.resolve(__dirname),
bun=path.resolve(dir+'\\project-dist','bundle.css'),cws=fs.createWriteStream(bun);
(async()=>{const files=await fsProm.readdir(dir+'\\styles',{withFileTypes:true})
 files.forEach(e=>{if(e.isFile()){curStl=path.resolve(dir+'\\styles',e.name)
 if(path.extname(curStl)=='.css')fs.createReadStream(curStl).pipe(cws)}})})()
