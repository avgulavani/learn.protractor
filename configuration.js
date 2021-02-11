/**
 * http://usejsdoc.org/
 */

exports.config = {
    //seleniumAddress : 'http://localhost:4444/wd/hub',
    
        specs: ['PractiseExercise/PractiseExercise.js'],

        // Capabilities to be passed to the webdriver instance
        /*
        capabilities:{
            'browserName': 'firefox'
        }
        */
       
       // For IE go to webdriver-manager folder and keep server file  there.
       // webdriver-manager update --ie 
       // For chrome ONLY even you don't start server protractor will start server and run test(directconnect)
     
    };