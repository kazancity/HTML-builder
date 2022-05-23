const fs=require('fs'),path=require('path'),
fsPrms=fs.promises,root=path.join(__dirname),
dist=root+'\\project-dist',styl=root+'\\styles'

crtFile=async(dist,type)=>await fsPrms.writeFile(dist,type)
crtDir=async(dist)=>fs.access(dist,(e)=>{if(e){fsPrms.mkdir(dist)}})
joinCss=async()=>{allCss=await fsPrms.readdir(styl,{withFileTypes:1}),fromCss=Array(0)
 for(elf of allCss){ext=path.extname(styl+'\\'+elf.name)
 if(ext=='.css'){fromCss.push(`${await fsPrms.readFile(styl+'\\'+elf.name)}\n`)}}
 crtFile(dist+'\\style.css',fromCss)
}
copyDir=async(src,dest)=>{allFiles=await fsPrms.readdir(src,{withFileTypes:1})
await fsPrms.rm(dest,{force:true,recursive:true});await fsPrms.mkdir(dest,{recursive:true})
for(eld of allFiles){from=src+'\\'+eld.name;to=dest+'\\'+eld.name
 if(eld.isFile()){await fsPrms.copyFile(from,to)}
 else{await fsPrms.mkdir(to,{recursive:true});await copyDir(from,to)}}
}
joinHTML=async()=>{tmplHtml=await fsPrms.readFile(root+'\\template.html','utf8')
allHtml=await fsPrms.readdir(root+'\\components',{withFileTypes:1})
for(elh of allHtml){rex=new RegExp(`{{${elh.name.split('.')[0]}}}`,'g')
 tmplHtml=tmplHtml.replace(rex,await fsPrms.readFile(root+'\\components\\'+`${elh.name}`))}
 crtFile(dist+'\\index.html',tmplHtml)
}
(async()=>{crtDir(dist);joinCss();joinHTML();copyDir(root+'\\assets',dist+'\\assets')})
()
