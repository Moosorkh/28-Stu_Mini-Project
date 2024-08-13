class Animal {
    constructor(species, hungry, amount, weight) {
        this.species = species;
        this.hungry = hungry;
        this.amount = amount;
        this.weight = weight;
    }
    makeRollCall() {
        return `The ${this.species} is here! ${this.amount} of them! They weigh ${this.weight} lbs each! Are they hungry? ${this.hungry}`;
    }
}
export default Animal;
