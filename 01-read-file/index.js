const fs=require('fs')
const path=require('path').join(__dirname,'text.txt')
fs.createReadStream(path).on('data',(a)=>process.stdout.write(a))
