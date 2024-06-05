# WebDriverIO Introduction

This repository contains solutions for automated testing task 4 of the course Automated Testing in JavaScript using WebDriverIO, Mocha, and the Page Object Model pattern.

## Task Description

Automate the following script:


1. Open https://cloud.google.com/.
2. Click on the icon at the top of the portal page and enter "Google Cloud Platform Pricing Calculator" into the search field.
3. Perform the search.
4. Click "Google Cloud Platform Pricing Calculator" in the search results and go to the calculator page.
5. Click COMPUTE ENGINE at the top of the page.
6. Fill out the form with the following data:
   * Number of instances: 4
   * What are these instances for?: leave blank
   * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or another User-Provided OS
   * Provisioning model: Regular
   * Machine Family: General purpose
   * Series: N1
   * Machine type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)
   * Select “Add GPUs“
     * GPU type: NVIDIA Tesla V100
     * Number of GPUs: 1
   * Local SSD: 2x375 Gb
   * Datacenter location: Frankfurt (europe-west3)
   * Committed usage: 1 Year
     Other options leave in the default state.
7. Click 'Add to Estimate'.
8. Check the price is calculated in the right section of the calculator. There is a line “Total Estimated Cost: USD ${amount} per 1 month”
9. click "Share" to see Total estimated cost
10. click "Open estimate summary" to see Cost Estimate Summary, will be opened in separate tab browser.
11. verify that the 'Cost Estimate Summary' matches with filled values in Step 6.

# Criteria for successful completion
1. Page object concept is used for page abstractions. Page objects are well-designed and reflect the logical structure of the application.

2. Component classes for business objects of the required elements.
3. Property files are used to store test data for at least two different environments. There is a convenient way in the framework to choose a particular environment.
4. Suites are configured to run smoke tests and other tests separately.
5. If the test fails, a screenshot with the date and time should be taken. 
6. Scripts are stabilized. No intermittent failures during the run. It passes during 5 subsequent runs.



## Installation

Before you begin, ensure you have the following installed:

- Node.js 
- npm or yarn

Clone the repository and install the dependencies:

git clone https://github.com/yourusername/webdriverio_introduction_task4.git

cd webdriverio_introduction_task4

npm install

#### or

yarn install

## Running Tests
To run the tests, you can use the following commands depending on the environment and suite:

'npm run "wdio [ENVIRONMENT]:[SUITE]"'

#### For test environment:

Smoke tests: npm run wdio test:smoke 

Test suite: npm run wdio test:test

Regression tests: npm run wdio test:regression

#### For dev environment:

Smoke tests: npm run wdio dev:smoke

Test suite: npm run wdio dev:test

Regression tests: npm run wdio dev:regression

### Multiple times

To run the tests multiple times, you can use a loop in your terminal using Bash:

for i in {1..10}; do npm run wdio dev:test; done

## Reporting

The test framework generates detailed reports automatically to help you analyze the test results. It uses Allure for reporting, which provides a comprehensive and interactive overview of your test execution.
To view the Allure reports, you have two options:

You can navigate to the allure-report directory and open the index.html file.

#### or 

Run the following command:

npx allure serve allure-results
