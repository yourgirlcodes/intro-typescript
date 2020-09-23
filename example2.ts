// CLASSES
// Before refactoring for classes, app.ts looked like:


// function main() {
//     var appComponent = document.getElementById('app');

// note that this can actually be null 
// (null is a type in newer angular versions)
// opt-in strictNullChecks = true in config if you want to have the check for null
// if you do opt-in then include a check for if(app) INSIDE of the setInterval
// BEST PRACTICE: OPT-IN --> powerful 

//     setInterval(function () {
//         if (appComponent) {
//             appComponent.innerHTML = generateRandomPin({ letter: 'A', length: 7 });
//         }
//     }, 1000);
// }

// main();

// ------------------------------------------------
// In Typescript, you have class properties
// you have to declare what properties you are going to apply to the class 
// normal ES6 - you just declare properties on the fly

class Farm {
    id: string           
    // telling you that we have an id on this class and it has a type string
    // we don't need this (id) in ES6, but we do in TS
    constructor() {
        this.id = 'corn'
    }
}

// then:
function showFarmCode(ComponentClass) {
    const comp = new ComponentClass() // NEED TO SET AN INSTANCE!!
    var farms = document.getElementById('farm-list') // if there is this id
    if (farms) {
        farms.innerHTML = generateFarmCodes({
            name: comp.id,
            length: 7
        })
    }
}


type ValidFarms = 'corn' | 'cattle'

interface GenerateFarmConfigs {
    name: ValidFarms,
    length: number
}

function generateFarmCodes(name: ValidFarms, length: number): string // two params
function generateFarmCodes(options: GenerateFarmConfigs): string // single object
function generateFarmCodes(optionsOrFarm: GenerateFarmConfigs | ValidFarms): string {
    if (typeof optionsOrFarm === 'string') {
        return optionsOrFarm + ":" + " " + Math.random().toString(36).substr(2, length) // we haven't yet defined length

    }
    return optionsOrFarm.name + ":" + " " + Math.random().toString(36).substr(2, optionsOrFarm.length)
}

showFarmCode(Farm)