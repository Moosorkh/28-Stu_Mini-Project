import ZooAnimals from "../interfaces/ZooAnimals"

class Animal implements ZooAnimals{
    species: string;
    hungry: boolean;
    amount: number;
    weight: number;

    constructor(species: string, hungry: boolean, amount: number, weight: number){
        this.species = species;
        this.hungry = hungry;
        this.amount = amount;
        this.weight = weight;
    }
    makeRollCall(): string{
        return `The ${this.species} is here! ${this.amount} of them! They weigh ${this.weight} lbs each! Are they hungry? ${this.hungry}`;
    }
}

export default Animal;