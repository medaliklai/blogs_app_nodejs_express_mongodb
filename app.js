const express = require( 'express' );
const mongoose = require( 'mongoose' );
const Blog = require( './models/blogs' );
// create express app
const app = express();
app.use( express.json() );

// connect to database
const db = "mongodb+srv://klai:klai@nodejstuts.ismq1.mongodb.net/blogs?retryWrites=true&w=majority";
mongoose.connect( db, {
        useNewUrlParser: true
    } )
    .then( ( result ) => {
        console.log( 'connectio done' );
        app.listen( 3001 );
    } )
    .catch( err => console.log( err ) );


// register view ejs
app.set( 'view engine', 'ejs' );

// configurer views folder
// app.set('views', 'views');

// listen for requests


app.use( express.static( 'public' ) );

// routes

// index page
app.get( '/', ( req, res ) => {
    res.redirect( '/blogs' );
} );
app.get( '/blogs', ( req, res ) => {
    Blog.find().then( ( result ) => {
        res.render( 'blogs', {
            blogs: result
        } );
    } );

} )
//about page
app.get( '/about', ( req, res ) => {

    res.render( 'about' );
} );

// create page
app.get( '/create', ( req, res ) => {
    res.render( 'create' );
} );

// 404 page
app.use( ( req, res ) => {

    res.status( 404 ).render( '404', {
        title: 'page not found'
    } );
} );