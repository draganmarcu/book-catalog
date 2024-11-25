// src/components/BookCard.js
import React from 'react';

const BookCard = ({ book, onDelete }) => {
    return (
        <div className="book-card">
            <h3>Titlu {book.title}</h3>
            <p>Autor {book.author}</p>
            <p>Genul {book.genre}</p>
            <p>Descriere {book.description}</p>
            <button onClick={() => onDelete(book)}>Delete</button>
        </div>
    );
};

export default BookCard;
