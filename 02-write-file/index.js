const fs=require('fs'),
path=require('path'),
{stdin,stdout}=process,
output=fs.createWriteStream(path.join(__dirname,'text.txt'))
exit=()=>process.exit(stdout.write('Thanks!'))
stdout.write('Enter text>\n')
process.on('SIGINT',()=>exit())
stdin.on('data',a=>a.toString().slice(0,4)!='exit'?output.write(a):exit())
