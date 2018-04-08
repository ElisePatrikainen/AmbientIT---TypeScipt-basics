var Human = /** @class */ (function () {
    function Human(firstName, lastName, name, legs, hair) {
        if (name === void 0) { name = 'être humain'; }
        if (legs === void 0) { legs = 2; }
        if (hair === void 0) { hair = true; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = name;
        this.legs = legs;
        this.hair = hair;
    }
    return Human;
}());
function describeAnimal(animal) {
    var fourrure;
    animal.hair ? fourrure = "des poils" : fourrure = "n'a pas de poils.";
    return "Un " + animal.name + " a " + animal.legs + " jambes\n            et " + fourrure;
}
function describeHuman(human) {
    var fourrure;
    human.hair ? fourrure = "des poils" : fourrure = "n'a pas de poils.";
    return "Un " + human.name + " a " + human.legs + " jambes\n            et " + fourrure + ". Notre humain s'appelle " + human.firstName + " \n            " + human.lastName + ".";
}
var animal1 = {
    name: 'Canard',
    legs: 2,
    hair: false
};
var humain1 = new Human('Elise', 'Patrik');
var toAppend = describeAnimal(animal1) + '<br>' + describeHuman(humain1);
document.body.innerHTML = toAppend;
