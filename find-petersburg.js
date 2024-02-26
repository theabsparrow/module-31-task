let students = {
    2222: {
        Name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building-no": 12,
            street: "st. Janson",
            city: "petersburg",
            country: "UK"
        }
    },
    3333: {
        Name: "Harry",
        section: "D",
        class: "X",
        address: {
            "building-no": 85,
            street: "DC road",
            city: "kachu khet",
            country: "Bangladesh"
        }
    }
}
const studentId = "2222";
const result = students[studentId].address.city;
console.log(result);

const studentId2 = "3333";
const result2 = students[studentId2].address.city;
console.log(result2);