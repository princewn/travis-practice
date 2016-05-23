'use strict';
require('should');
const mylib = require('../src/hello');
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