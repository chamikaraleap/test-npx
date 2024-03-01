#!/user/bin/env node

const {execSync} = require("child_proces");


const runCommand = command => {
    try{
        execSync(`${command}`, {stdio :"inherit"});
    }
    catch(e)
    {
        console.error(e);
        return false
    }

    return true;
}

const repoName = process.argv[2];
const gitCheckOutCommand = `git clone --depth ${repoName}`;
const installDepsCommand =  `cd ${repoName} && npm install`;

const checkout =  runCommand(gitCheckOutCommand);

if(!checkout)
    process.exit(-1);

const installDeps = runCommand(installDepsCommand);
if(!installDeps)
    process.exit(-1);


console.log("cloning...")
