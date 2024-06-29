class Animal {
    constructor(public name: string) {}

    move(distance: number = 0): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}
let animal=new Animal("chat");
animal.move(20)