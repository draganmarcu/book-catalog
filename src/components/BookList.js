// src/components/BookList.js
import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onDelete }) => {
    return (
        <div className="book-list">
            {books.map((book, index) => (
                <BookCard key={index} book={book} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default BookList;
