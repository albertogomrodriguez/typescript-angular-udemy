export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Alberto",
};
const passenger2: Passenger = {
  name: "Fernando",
  children: ["Natalia", "Melissa"],
};

const printChildren= (passenger: Passenger)=>{
    const howManyChildren= passenger.children?.length || 0;
    console.log (passenger.name, howManyChildren)
}

printChildren( passenger1)