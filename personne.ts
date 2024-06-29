interface Personne {
    name:string;
    age : number;
}

function affiche (person:Personne) : void{console.log(`Name: ${person.name}, Age: ${person.age}`);}

let person: Personne={name:"donia",age:5};
affiche(person);