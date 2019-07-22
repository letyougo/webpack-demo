#!/usr/bin/env node
let express = require('express')
let chalk = require('chalk')
let createProject = require('./create')
let app = express()
let fs = require('fs')
let path = require('path')
require('shelljs/global');
let log = (txt) => {
  console.log(chalk.magenta.bold(txt))
}
let program = require('commander')


program
  .version('1.0.2')
  .option('-i --info','my total resume',function(){
    log('这是一个简单的gongju')
  })
  .option('-t, --type <name>','project type')
  .option('-n, --name <name>','project name')


program.command('create')
  .action(function (name){
    console.log('hellosss')
    let projectType = program.type
    if(!projectType){
      log('create project_name -t project_type','jquery','react','vue')
      return
    }

    var projectlist= fs.readdirSync(path.join(__dirname,'projects'))

    if(projectlist.indexOf(projectType) == -1){
      log('目前只有以下几种模板类型'+projectlist.join(','))
      return
    }
    createProject(name,projectType)
  })

program.parse(process.argv);
