const instructors = [
    {name: "Nodi", age: 28, position: "senior"},
    {name: "Akil", age: 26, position: "Junior"},
    {name: "Shaobuj", age: 30, position: "senior"}
];

const seniorPersons = instructors.filter(p => {
    const position = p.position;
    const Name = p.name;
    if(position === "senior"){
        return Name;
    }
})
for(let seniorPerson of seniorPersons){
    const senior = seniorPerson.name;
    console.log(senior);
}

