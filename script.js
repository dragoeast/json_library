const library = [
    {
        "title": "Gone With the Wind",
        "author": "Margaret Mitchell",
        "status": {
            "own": true,
            "reading": false,
            "read": false,
        },
    },
    {
        "title": "The Unplugged Alpha",
        "author": "Richard Cooper",
        "status": {
            "own": true,
            "reading": false,
            "read": false,
        },
    },
    {
        "title": "Cracking the Coding Itnerview",
        "author": "Gayle Laakmann McDowell",
        "status": {
            "own": true,
            "reading": false,
            "read": false,
        },
    },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;



const {title: first_book} = library[0];

console.log(first_book);

const str = JSON.stringify(library)

console.log(str, typeof str);
