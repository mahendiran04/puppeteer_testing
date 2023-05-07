# puppeteer_testing

## Puppeteer Automation Suite Instruction (Executing End-to-End Tests)
Run the following command to execute end-to-end tests

npx jest

## Running Test Cases for a Specific File
To run the tests in a specific file, use the following command

npx jest <file_name>    

## Running Test Cases in Debug Mode
To run the test cases in debug mode, use the following command

npx jest --debug

## Generating Test Cases
To generate the test cases using Puppeteer, use the following command

npx jest --config=puppeteer.config.js --runInBand --forceExit --verbose --testMatch="<glob_pattern>"

## Recording Scripts for Test Cases
To record the script for a test case, use the following command

npx playwright codegen <url>

## Headless Test Execution
To run the test cases in headless mode, use the following command

npx jest --config=puppeteer.config.js --runInBand --forceExit --verbose --testMatch="<glob_pattern>" --headless
