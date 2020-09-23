import { generateRandomPin } from './utils'


function main() {
    var appComponent = document.getElementById('app');
    // note that this can actually be null 
    // (null is a type in newer angular versions)
    // opt-in strictNullChecks = true in config if you want to have the check for null
    // if you do opt-in then include a check for if(app) INSIDE of the setInterval
    // BEST PRACTICE: OPT-IN --> powerful 
    setInterval(function () {
        if (appComponent) {
            appComponent.innerHTML = generateRandomPin({ letter: 'A', length: 7 });
        }
    }, 1000);
}

main();