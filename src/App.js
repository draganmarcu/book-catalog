// src/App.js
import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

const App = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleAddBook = (book) => {
        setBooks([...books, book]);
    };

    const handleDeleteBook = (bookToDelete) => {
        setBooks(books.filter((book) => book !== bookToDelete));
    };

    const handleSelectBook = (book) => {
        setSelectedBook(book);
    };

    return (
        <div>
            <h1>Catalog de Cărți</h1>
            <BookForm onAddBook={handleAddBook} />
            <BookList books={books} onDelete={handleDeleteBook} />
            <BookDetails book={selectedBook} />
        </div>
    );
};

export default App;
