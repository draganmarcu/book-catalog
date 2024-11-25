// src/components/BookDetails.js
import React from 'react';

const BookDetails = ({ book }) => {
    if (!book) return null;

    return (
        <div className="book-details">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Description:</strong> {book.description}</p>
        </div>
    );
};

export default BookDetails;
