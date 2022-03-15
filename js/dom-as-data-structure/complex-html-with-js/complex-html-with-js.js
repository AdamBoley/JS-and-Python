let books = [ //creates an array of objects
    {
        title: "The Girl With the Dragon Tattoo",
        author: "Stieg Larsson",
        published: 2005
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "JK Rowling",
        published: 2000
    },
    {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        published: 2011
    },
    {
        title: "Days Without End",
        author: "Sebastian Barry",
        published: 2016
    },
    {
        title: "The Silence of the Girls",
        author: "Pat Barker",
        published: 2018
    },
];

function buildTable() {
    
    let booksTableOpener = `
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Published</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    for (book of books) {
        
        let row = `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.published}</td>
        </tr>
        `;
        booksTableOpener += row;
    }
    
    booksTableOpener += `
        </tbody>
    </table>
    `;

    /*let booksTableCloser = `
    </tbody>
    </table>`*/
    //Declaring a variable to hold the closing tags, and then using += to append it to the booksTableOpener would also work

    /* 
    let booksTable = booksTableOpener + booksTableCloser
    would also work, using a variable to join the two parts of the table*/
    
    return booksTableOpener;
}

let table = buildTable();

document.getElementById('books-table').innerHTML = table;