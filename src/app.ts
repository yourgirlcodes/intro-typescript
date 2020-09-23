// import { generateRandomPin } from './utils'

// class App{
//     id
//     constructor(){
//         this.id="app"
//     }
// }

// function main() {
//     var appComponent = document.getElementById('app');
//     // note that this can actually be null 
//     // (null is a type in newer angular versions)
//     // opt-in strictNullChecks = true in config if you want to have the check for null
//     // if you do opt-in then include a check for if(app) INSIDE of the setInterval
//     // BEST PRACTICE: OPT-IN --> powerful 
//     setInterval(function () {
//         if (appComponent) {
//             appComponent.innerHTML = generateRandomPin({ letter: 'A', length: 7 });
//         }
//     }, 1000);
// }

// main();


class Farm {
    id: string           
    // telling you that we have an id on this class and it has a type string
    //- we dont need this (id) in ES6, but we do in TS
    constructor() {
        this.id = 'corn'
    }
}

// then:
function showFarmCode(ComponentClass) {
    const comp = new ComponentClass() // NEED TO SET AN INSTANCE!!
    var farms = document.getElementById('app')
    if (farms) {
        farms.innerHTML = generateFarmCodes({
            name: comp.id,
            length: 7
        })
    }
}


type ValidFarms = 'corn' | 'cattle'

interface GenerateConfigs {
    name: ValidFarms,
    length: number
}

function generateFarmCodes(name: ValidFarms, length: number): string // two params
function generateFarmCodes(options: GenerateConfigs): string // single object
function generateFarmCodes(optionsOrFarm: GenerateConfigs | ValidFarms): string {
    if (typeof optionsOrFarm === 'string') {
        return optionsOrFarm + ":" + " " + Math.random().toString(36).substr(2, length) // we haven't yet defined length

    }
    return optionsOrFarm.name + ":" + " " + Math.random().toString(36).substr(2, optionsOrFarm.length)
}

showFarmCode(Farm)