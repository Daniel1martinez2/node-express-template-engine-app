const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = []
//Register the view engine
app.set('view engine', 'pug');
//Set the folder where the views will lie
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res, next) => {
    //Omit the file extension
    res.render('index', {pageTitle: 'Add User'});

});

app.get('/users', (req, res, next) => {
    console.log(users)
    res.render('users', {
        pageTitle: 'User',
        users: users
    });
});

app.post('/add-user', (req, res, next) => {
    users.push({
        name: req.body.username
    })
    res.redirect('/users');
});

app.listen(3000)