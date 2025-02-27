#!/usr/bin/env node
const pkg = require('./package.json')
const welcome = require('cli-welcome')
const chalk = require('chalk')
const log = console.log


welcome({
    title: pkg.name,
	tagLine: `Welcome Atiur CLI`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: pkg.version
})
log(`
    
    ${chalk.red("Atiurrahman Ansari")}

    ${chalk.italic(`I am a ${chalk.blue.inverse('Full Stack developer')} and learning CLI Development`)}
    
    `)