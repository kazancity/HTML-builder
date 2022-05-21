const fs=require('fs'),
path=require('path'),
{stdout}=require('process'),
dir=require('path').join(__dirname,'secret-folder')
fs.readdir(dir,{withFileTypes:true},(err,items)=>{
 files=items.filter(e => e.isFile())
 files.forEach(e=>{let file=path.join(dir,e.name);fs.stat(file,(err,stats)=>
 stdout.write([path.parse(file).name,path.extname(file).slice(1),stats.size+' bytes\n'].join(' - ')))})})
