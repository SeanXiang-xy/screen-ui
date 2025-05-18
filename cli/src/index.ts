#!/usr/bin/env node
import { Command } from "commander";
import create from "./commands/create";
import remove from "./commands/remove";

const program = new Command();
program
  .command("create")
  .description("创建一个组件模版和文档模板")
  .option("-t --type <type>", "创建类型")
  .action(create);

program.command("remove").description("删除组件和文档").action(remove);

program.parse(process.argv);
