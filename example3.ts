// EXTENDS & IMPLEMENTS

//lets say that we are looking at app.ts
// we add this class component which will just log every time a component is created


export class Component {
    constructor(){
        this.log() // will be called every time the constructor is run 
                 // - which will happen in any component that extends Component (inherits its properties/methods)
    }
    log() { //instance method
        console.log('Component created')
    }
}


// when a class is created in ts:
// 1. forms INTERFACE OF OVERALL STRUCTURE OF CLASS
// 2. provides an IMPLEMENTATION of the class

// can IMPLEMENT INTERFACES AND CLASSES

// this does a type check
export interface Component {
    onInit(el: HTMLElement | null): void
}

// and then 

class XYZ implements Component {
    onInit(el: HTMLElement | null): void {
        console.log('this will have logic')
    }
}
