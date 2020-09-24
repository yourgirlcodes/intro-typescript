import { generateRandomPin } from './src/utils'


// EXTENDS & IMPLEMENTS

// when a class is created in ts:
// 1. forms INTERFACE OF OVERALL STRUCTURE OF CLASS
// 2. provides an IMPLEMENTATION of the class

// can IMPLEMENT INTERFACES AND CLASSES
// you'll use a class if you want it to be reusable and hold logic
// you'll use an interface if you just want the structure for type checking
// interfaces & classes: implemented
// classes: extended

interface Component2 { //interface is just type info 
    onInit(el: HTMLElement | null): void
}

// remember: interfaces are lighter, so only use a class if you want the logic etc

class XYZ implements Component2{ 
    // --> we just using the type def in the interface
    // or we can just use Component and extend because we want the log function
    onInit(el: HTMLElement | null): void {
            // just some logic here
    }
}

// -------------------------------------------------------------

class Component { // we can extend this and inherit the logic
    constructor() {
        this.log() // will be called every time the constructor is run 
        // - which will happen in any component that extends Component (inherits its properties/methods)
    }
    log() { //instance method
        console.log('Component created')
    }
}


class ABC extends Component {
    static id = "app" // static property just makes more sense

    onInit(el: HTMLElement | null): void {
        // this is an instance method
        //class method with el as a DEPENDENCY.
        setInterval(function () {
            if (el) {
                el.innerHTML = "Your PIN will change every 4 seconds" + "<br />" + "PIN: " + generateRandomPin({ letter: 'A', length: 4 });
            }
        }, 4000);
        el && (el.innerHTML = "your PIN is loading")

    }
}

function main(ClassComponent) { // main receives ABC with all methods etc

    const el = document.getElementById(ClassComponent.id);
    // we define el which can be whatever variable - like normal js

    // NEED TO SET AN INSTANCE of ABC
    const comp = new ClassComponent() 
    // new instance of Component is created (since it is extended by ABC) causes to log 'component created'
    // then we add onInit and inject el because it is a dependency
    comp.onInit(el)

}

main(ABC);

