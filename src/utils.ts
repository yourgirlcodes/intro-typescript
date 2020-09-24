
export function Component(options: { id: string }) {
    console.log(options, 'target') // logs {id: 'app'}
    return (target) => console.log(target.id = options.id) // logs app and we setting App.id
}



export type ValidLetter = 'A' | 'B' | 'C'

export interface GenerateConfigs {
    letter: ValidLetter,
    length: number
}

export function generateRandomPin(letter: ValidLetter, length: number): string // two params
export function generateRandomPin(options: GenerateConfigs): string // single object
export function generateRandomPin(optionsOrletter: GenerateConfigs | ValidLetter): string {
    if (typeof optionsOrletter === 'string') {
        return optionsOrletter + Math.random().toString(36).substr(2, length) // we haven't yet defined length

    }
    return optionsOrletter.letter + Math.random().toString(36).substr(2, optionsOrletter.length)
}
