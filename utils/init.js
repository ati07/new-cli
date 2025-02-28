const checkNode =  require('cli-check-node')
const unhandled =  require('cli-handle-unhandled')
const welcome = require('cli-welcome')
const pkg = require('./../package.json')


module.exports = ()=>{

    unhandled()
    checkNode(20)

    welcome({
        title: pkg.name,
        tagLine: `Welcome Atiur CLI`,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        clear: true,
        version: pkg.version
    })
} 