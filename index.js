const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don\'t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!
console.log("JavaScript is working!");

const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = "Flatbooks";

const bookList = document.getElementById("book-list");



function displayBooks() {
    bookList.innerHTML = "";

    bookStore.books.forEach(book => {

        const li = document.createElement("li");

        const title = document.createElement("h3");
        const author = document.createElement("p");
        const img = document.createElement("img");

        title.textContent = book.title;
        author.textContent = book.author;
        img.src = book.imageUrl;
        img.alt = book.title;
        img.style.width = "120px";

        li.appendChild(title);
        li.appendChild(author);
        li.appendChild(img);
    

        bookList.appendChild(li);
    });
}
displayBooks();

const form = document.getElementById("book-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted!");

    const newBook = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        image: document.getElementById("imageUrl").value,
        
    };

    fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Book added:", data);
        bookStore.books.push(data);
        displayBooks(data);
    })
});