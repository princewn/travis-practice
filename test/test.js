'use strict';
require('should');
const mylib = require('../index');
let bu = 'none';

describe('My First Test', () => {
  describe('Welcome to Tmall', () => {
    before(() => bu = 'Tmall');
    after(() => bu = 'none');
    it('should get "Hello Tmall"', () => {
      mylib(bu).should.be.eql('Hello Tmall');
    });
  });
  describe('Welcome to Taobao', () => {
    before(() => bu = 'Taobao');
    after(() => bu = 'none');
    it('should get "Hello Taobao"', () => {
      mylib(bu).should.be.eql('Hello Taobao');
    });
  });
});
// mocha.ui('bdd');
// describe('Welcome to Tmall', function() {
//   before(function() {
//     window.render();
//   });
//   it('Hello', function() {
//     document.getElementById('tmall').textContent.should.be.eql('天猫前端招人，有意向的请发送简历至lingyucoder@gmail.com');
//   });
// });
// mocha.run();