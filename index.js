#!/usr/bin/env node
let inquirer = require('inquirer');
let createProject = require('./create')
let promptList = [
  {
    type: 'input',
    message: '设置一个用户名:',
    name: 'name',
    default: "test_user" // 默认值
  },
  {
    type: "confirm",
    message: "是否使用监听？",
    name: "watch",
    prefix: "前缀"
  },
  {
    type: 'list',
    message: '请选择一种水果:',
    name: 'fruit',
    choices: [
      "Apple",
      "Pear",
      "Banana"
    ],
    filter: function (val) { // 使用filter将回答变为小写
      return val.toLowerCase();
    }
  }
]

inquirer.prompt(promptList).then(answers => {
  console.log(answers); // 返回的结果
})
