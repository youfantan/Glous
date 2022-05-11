const fs = require('fs')
const sha=fs.readFileSync('sha').toString().slice(0,8)
const os=fs.readFileSync('os').toString()
const arch=fs.readFileSync('arch').toString()
const version=fs.readFileSync('version').toString()
const time=new Date().toUTCString()
const build_info={
    commit_id:sha,
    time:time,
    version:version,
    os:os,
    arch:arch
}
fs.writeFileSync('src/assets/build_info.json',JSON.stringify(build_info))