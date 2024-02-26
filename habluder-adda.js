let data2 = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: "Habluder adda",
                category: "xyz",
                price: "20$",
            },
            bookCategory: "basic",
        },
        {
            bookId: 2,
            bookDetails: {
                Name: "Gobluder adda",
                category: "ABC",
                price: "40$",
            },
            bookCategory: "Beginner",
        }
    ]
};
const result = data2.data[0].bookDetails.name;
const result2 = data2.data[1].bookDetails.Name;

console.log(result, result2);