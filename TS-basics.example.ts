interface Animal {
    name: string; 
    legs: number; 
    hair: boolean; 
}

class Human implements Animal {
    constructor(public firstName,public lastName, 
        public name = 'être humain', public legs: number = 2,
        public hair: boolean = true) {}
}

function describeAnimal(animal : Animal): string {
    let fourrure : string
    animal.hair ? fourrure = "des poils" : fourrure = "n'a pas de poils." 
    return `Un ${animal.name} a ${animal.legs} jambes
            et ${fourrure}`
}

function describeHuman(human: Human): string {
    let fourrure : string
    human.hair ? fourrure = "des poils" : fourrure = "n'a pas de poils." 
    return `Un ${human.name} a ${human.legs} jambes
            et ${fourrure}. Notre humain s'appelle ${human.firstName} 
            ${human.lastName}.`
}

let animal1: Animal = {
    name: 'Canard',
    legs: 2,
    hair: false
}
let humain1: Human = new Human('Elise', 'Patrik')

let toAppend: string = describeAnimal(animal1) + '<br>' + describeHuman(humain1);
document.body.innerHTML = toAppend