# Playwright Automation Framework (JavaScript)

## Description

This project is an automation testing framework built using Playwright with JavaScript. It is designed to automate web applications like OrangeHRM and covers end-to-end UI testing scenarios.

## Tech Stack

* Playwright (JavaScript)
* Node.js
* JavaScript (ES6)
* Jenkins (CI/CD)
* GitHub

## Features

* Page Object Model (POM) design pattern
* Cross-browser testing (Chromium, Firefox, WebKit)
* Reusable test components
* Parallel test execution
* HTML reporting using Playwright
* Integration with Jenkins for CI/CD

## Project Structure

project/
│── tests/
│── pages/
│── utils/
│── testData/
│── playwright.config.js

## Test Scenarios Covered

* Login functionality
* Employee management (OrangeHRM)
* Search and validation scenarios
* UI element validations
* End-to-end workflows

## Installation & Setup

1. Clone the repository
   git clone <your-repo-link>

2. Install dependencies
   npm install

3. Install browsers
   npx playwright install

## How to Run Tests

Run all tests:
npx playwright test

Run in headed mode:
npx playwright test --headed

Run specific test:
npx playwright test tests/example.spec.js

## Reports

After execution, Playwright generates HTML reports:
npx playwright show-report

## Author

Mamatha Varaprasad
