// var add = require('../src/index.js');
// require('should');

// describe('加法函数的测试', function() {
//   it('1 加 1 应该等于 2', function() {
//     add(1, 1).should.be.eql(2);
//   });
// });

// 'use strict';
// require('should');
// const mylib = require('../src/index');
// let bu = 'none';

// describe('My First Test', () => {
//   describe('Welcome to Tmall', () => {
//     before(() => bu = 'Tmall');
//     after(() => bu = 'none');
//     it('should get "Hello Tmall"', () => {
//       mylib(bu).should.be.eql('Hello Tmall');
//     });
//   });
//   describe('Welcome to Taobao', () => {
//     before(() => bu = 'Taobao');
//     after(() => bu = 'none');
//     it('should get "Hello Taobao"', () => {
//       mylib(bu).should.be.eql('Hello Taobao');
//     });
//   });
// });

var requireHelper = require('../require_helper');
var formValidator = requireHelper('form_validator');

mocha.ui('bdd');
describe('Welcome to Tmall', function() {
  before(function() {
    window.render();
  });
  it('Hello', function() {
    document.getElementById('tmall').textContent.should.be.eql('天猫前端招人，有意向的请发送简历至lingyucoder@gmail.com');
  });
});
mocha.run();