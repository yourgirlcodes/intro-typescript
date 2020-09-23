import { generateRandomPin } from './utils'

class App{
    id: string
    constructor(){
        this.id="app"
    }
}

function main(ClassComponent) {
    const comp = new ClassComponent()
    
    var appComponent = document.getElementById(comp.id);
    // note that this can actually be null 
    // (null is a type in newer angular versions)
    // opt-in strictNullChecks = true in config if you want to have the check for null
    // if you do opt-in then include a check for if(app) INSIDE of the setInterval
    // BEST PRACTICE: OPT-IN --> powerful 
    setInterval(function () {
        if (appComponent) {
            appComponent.innerHTML = "Your PIN will change every 2 seconds" + "<br />" + "PIN: " + generateRandomPin({ letter: 'A', length: 4 });
        }
    }, 2000);
}

main(App);


