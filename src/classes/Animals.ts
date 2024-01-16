import {IAnimal} from "../interfaces/animal.interface";

// Тварини
export class Animals {
    private animalData: IAnimal[] = [];

    addAnimalData(animal:IAnimal):void {
        this.animalData.push(animal);
    }
}
