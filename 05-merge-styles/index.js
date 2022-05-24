const fs=require('fs'),
fsProm=require('fs').promises,path=require('path')
bun=path.resolve(path.resolve(__dirname,'project-dist'),'bundle.css'),cws=fs.createWriteStream(bun);
(async()=>{const files=await fsProm.readdir(path.resolve(__dirname,'styles'),{withFileTypes:true})
 files.forEach(e=>{if(e.isFile()){curStl=path.resolve(path.resolve(__dirname,'styles'),e.name)
 if(path.extname(curStl)=='.css')fs.createReadStream(curStl).pipe(cws)}})})()
