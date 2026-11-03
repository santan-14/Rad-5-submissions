// Build a simple library program that keeps a list of books and whether each one is available or borrowed. Let a user search for a book and show whether they can borrow it.


const library: {title: string; available: boolean}[] = [
    {title: "The Great Gatsby", available: true },
    {title: "To Kill A Mockingbird", available: false},
    {title: "Cocoon", available: true},
    {title: "Things fall Apart", available: false},
    {title: "The 100", available: true},
    {title: "Jurassic park", available: false}
];
function checkBookAvailability(bookTitle: string): void{
    let found = false;

    for (let a = 0; a < library.length; a++) {
        if (library[a].title.toLowerCase() === bookTitle.toLowerCase()) {
            found = true;

            if (library[a].available) {
                console.log(`"${library[a].title}" is available! You can borrow it.`)
            } else {
                console.log(`Sorry, "${library[a].title}" is currently borrowed and cannot be checked out.`)
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
checkBookAvailability("Rich Dad Poor Dad");

export{}