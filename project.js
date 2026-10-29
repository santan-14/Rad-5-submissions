const library = [
    {title: "The Great Gatsby", available: true },
    {title: "To Kill A Mockingbird", available: false},
    {title: "Cocoon", available: true},
    {title: "Things fall Apart", available: false},
    {title: "The 100", available: true},
    {title: "Jurassic park", available: false}
];
function checkBookAvailability(bookTitle) {
    let found = false;

    for (let a = 0; a < library.length; a++) {
        if (library[a].title.toLowerCase() === bookTitle.toLowerCase()) {
            found = true;

            if (library[a].available) {
                console.log(`"${library[a].title}" is available! You can vorrow it.`)
            } else {
                console.log(`sorry, "${library[a].title}" is currently borrowed and cannot be checked out.`)
            }
            break;
        }
    }
    if (!found) {
        console.log(`Sorry, "${bookTitle}" is not in the library catalog.`);
    }
}

checkBookAvailability("Things fall Apart");
checkBookAvailability("The Great Gatsby");