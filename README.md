# Assignment_Cyp_DemoQA - ReadMe file

# All 7 functional tests have been implemented in two ways
    as direct scripts
    as page objects and tests via POM
  
Following npm packages have been used in this project\
    as a dependecny \
        cypress 12.7.0 \
    as dev dependencies
    \
      @4tw/cypress-drag-drop - drag and drop purposes for the last test \
      "cypress-file-upload"  - for file upload purposes in 4th test in form submission
      \
      \
Following configuration has been done
\
for intellisence 
\
jsconfig.json file is added in the root directory
\
\
for file upload and drag and drop purposes
\
entries have been added to the commands.js file

# Project folder structure is as following 

under e2e folder there are  3 customized folders
\
GM-Scripts
\
PageObjects
\
PageTests

Under GM-Scripts folder there are two test files for API and functional tests
\
functional test file (Testcases.cy.js) file consist of test-scripts which is written in linear approach (without using POM)
\
\
Under PageObjects folder you will find all the Page Objects (classes) used in this project
\
Under PageTests folder you will find all the functional tests pertaining to the PageObject classes in PageTests.cy.js
\
\
Under fixtures folder, the image has been added. (which is used in file upload instance)
\
\
# Project Optimizations
\
The web-elements which are being used for the verification purposes of tests could have been wrapped into another method
\
The test data could have been stored inside json files and could have been refferenced and used in tests without them being declared inside test scripts
\
The framework could have been written in more general much wider scope but was written only upto the extent sufficient to write the test scripts
