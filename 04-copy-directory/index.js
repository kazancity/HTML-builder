const{resolve}=require('path'),
dir=resolve(__dirname),{rm,mkdir,copyFile,readdir}=require('fs').promises
copy=async(from,to)=>{await rm(to,{recursive:true,force:true});await mkdir(to)
for(item of await readdir(from))copyFile(resolve(from,item),resolve(to,item))}
copy(resolve(__dirname,'files'),resolve(__dirname,'files-copy'));