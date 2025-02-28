#!/usr/bin/env node
const alerts = require("atiur-cli-alerts");
const init = require("./utils/init");
const chalk = require("chalk");
const log = console.log;
// alert message
const symbl = require("log-symbols");
let success = chalk.green;
let info = chalk.blue;
let warning = chalk.keyword("orange");
let error = chalk.red;



(() => {
	
  init();

  log(`
    ${chalk.red("Atiurrahman Ansari")}

    ${chalk.italic(`I am a ${chalk.blue.inverse("Full Stack developer")} and learning CLI Development.`)}
    `);

  log(`
${symbl.success} ${success(" success ")} This is success alert

${symbl.info} ${info(" info ")} This is info messages

${symbl.warning} ${warning(" warning ")} This is warning message

${symbl.error} ${error(" error ")} This is error message
    `);

  alerts({ type: "success", msg: "Wow my first NPM module" });
})();
