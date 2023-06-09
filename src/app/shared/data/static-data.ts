export interface Book {
    id: number;
    title: string;
}
export const books = [
    {
        id: 1,
        title: "Genesis"
    },
    {
        title: "Matthew",
        id: 2
    },
    {
        id: 2,
        title: "Exodus"
    },
    {
        id: 3,
        title: "Leviticus"
    },
    {
        id: 4,
        title: "Numbers"
    },
    {
        id: 5,
        title: "Deuteronomy"
    },
    {
        id: 6,
        title: "Joshua"
    },
    {
        id: 7,
        title: "Judges"
    },
    {
        id: 8,
        title: "Ruth"
    }
];

export const getPromptFromBook = (title: string | string[]) => {
    let books: Book[];

    if (Array.isArray(title)) {
        books = title.map(title => books.find(book => book.title.toLowerCase() === title.toLowerCase()));
    } else {
        books = [books.find(book => book.title.toLowerCase() === title.toLowerCase())];
    }

    if (books) {
        return `based on the book of ${books.map(book => book.title).join(" and ")}`;
    } else {
        throw new Error(`Book not found: ${title}`);
    }
};

export const people = [
    {
        name: "Jesus",
        weight: 10001
    },
    {
        name: "John",
        weight: 101
    },
    {
        name: "Matthew",
        weight: 341
    },
    {
        name: "Paul",
        weight: 10301
    },
    {
        name: "Ringo",
        weight: 50041
    }
];

export const getPerson = (name: string) => {
    const person = people.find(person => person.name.toLowerCase() === name.toLowerCase());
    if (person) {
        return `according to ${name} in the bible`;
    } else {
        throw new Error(`Person not found: ${name}`);
    }
};
