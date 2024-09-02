#!/usr/bin/env node

const { execSync } = require('child_process');
const { program } = require('commander');

program
    .version('1.0.0')
    .description('CLI to create a Next.js project with JigsawStack integration')
    .argument('<project-name>', 'Name of the Next.js project')
    .action((projectName) => {
        const templateRepo = 'https://github.com/sumitsaurabh927/jss';

        console.log('Creating Next.js project with JigsawStack integration...');

        execSync(`npx create-next-app ${projectName} --example ${templateRepo}`, {
            stdio: 'inherit',
        });

        console.log('Project created successfully. Remember to add your JigsawStack API key in the .env.local file.');
    });

program.parse(process.argv);
