function classDecorator(
    contructor: any
){
    return class extends contructor{
        newProperty = "New Property";
        hello= "override"
    }
}
@classDecorator
export class SuperClass {
    public myProperty: string = "ABCDEDEFE1231"
    print(){
        console.log ("Hola Mundo")
    }
}

console.log(SuperClass);
const myClass= new SuperClass();
console.log(myClass)