# KataBankOCR
[![Build Status](https://travis-ci.org/dan-nl/kata-bank-ocr.svg?branch=master)](https://travis-ci.org/dan-nl/kata-bank-ocr) [![Coverage Status](https://coveralls.io/repos/github/dan-nl/kata-bank-ocr/badge.svg?branch=master)](https://coveralls.io/github/dan-nl/kata-bank-ocr?branch=master)

http://www.codingdojo.org/cgi-bin/index.pl?KataBankOCR

## user story 1
You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices. The machine scans the paper documents, and produces a file with a number of entries which each look like this:
```
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
```
Each entry is 4 lines long, and each line has 27 characters. The first 3 lines of each entry contain an account number written using pipes and underscores, and the fourth line is blank. Each account number should have 9 digits, all of which should be in the range 0-9. A normal file contains around 500 entries.

Your first task is to write a program that can take this file and parse it into actual account numbers.

## installation
* `npm install`

## use
output is to the console
* `npm start` - runs the application
* `npm test` - runs the tests
* `npm run cover` - runs a test coverage analysis
