const mongoose = require( 'mongoose' );

const blogSheme = mongoose.Schema( {
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestam: true
} );

const Blog = mongoose.model( 'Blog', blogSheme );

module.exports = Blog;