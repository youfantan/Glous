const fs = require('fs')
const os= require('os')
const sha=fs.readFileSync('sha').toString().slice(0,8)
const arch=fs.readFileSync('arch').toString()
const version=fs.readFileSync('version').toString()
const time=new Date().toUTCString()
const build_info={
    commit_id:sha,
    time:time,
    version:version,
    os:os.type()+' '+os.release(),
    arch:arch
}
fs.writeFileSync('src/assets/build_info.json',JSON.stringify(build_info))
console.log(build_info)