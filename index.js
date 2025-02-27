#!/usr/bin/env node
const pkg = require('./package.json')
const welcome = require('cli-welcome')

welcome({
    title: pkg.name,
	tagLine: `Welcome Atiur CLI`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: pkg.version
})
console.log(`
    
    Atiurrahman Ansari

    I am a Full Stack developer
    
    `)