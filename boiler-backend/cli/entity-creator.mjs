#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import checkbox from '@inquirer/checkbox';
import { controllerCreator, errorCreator, routeCreator, schemaCreator, serviceCreator } from "./module-generator.mjs";
import fs from 'fs';
import { kebabToCamel } from "./helper.mjs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

program.version("1.0.0").description("My Node CLI");

program.action(async () => {
  const name = await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's your entity name (kebab case)?",
      },
    ]);

  const crud = await checkbox({
    message: 'Select the CRUD operations you want to generate',
    choices: [
      { name: 'Create', value: 'create'},
      { name: 'Read', value: 'read'},
      { name: 'Update', value: 'update'},
      { name: 'Delete', value: 'delete'}
    ]
  })

  _generatePrismaSchema(name.name);
  _generateModule(name.name, crud);

  console.log(chalk.green(`Generation completed for ${name.name}`));
});

program.parse(process.argv);




const _generatePrismaSchema = (entityName) => {
  const spinner = ora('Generating prisma schema...').start();

  //add prisma schema in prisma/schema.prisma
  const schema = `model ${kebabToCamel(entityName)} {
    id        Int      @id @default(autoincrement())
    key       String   @unique
  }`

  fs.appendFileSync(`${__dirname}/../prisma/schema.prisma`, schema);

  spinner.succeed('Prisma schema generated');
}

const _generateModule = (resourceName, crud) => {
  const spinner = ora('Generating module...').start();

  //create a folder in modules using fs
  fs.mkdirSync(`${__dirname}/../src/modules/${resourceName}`);
  routeCreator(resourceName, crud);
  serviceCreator(resourceName);
  controllerCreator(resourceName);
  errorCreator(resourceName);
  schemaCreator(resourceName);

  spinner.succeed('Module generated');
}