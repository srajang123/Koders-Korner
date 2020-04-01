const express = require('express');
const path = require('path');
const csurf = require('csurf');
const expHbs = require('express-handlebars');
const mail = require('./util/mail');
const db = require('./util/database');
const app = express();
app.use(express.static('.'));
app.use(express.urlencoded());
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/admin/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'admin', 'doubts.html'));
});
app.get('/subscriber/remove/:usr', (req, res, next) => {
    res.send(req.params.usr);
});
app.post('/subscribe', (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    db.execute('insert into subscribers values(?,?)', [name, email])
        .then(v => { res.redirect('/') })
        .catch(err => { console.log(err) });
});
app.post('/doubt', (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let link = req.body.link;
    let lang = req.body.lang;
    let doubt = req.body.doubt;
    let d = new Date();
    d = d.getTime();
    db.execute('insert into doubt values(?,?,?,?,?,?,?)', [email, name, link, lang, doubt, false, d])
        .then(e => { res.redirect('/') })
        .catch(err => { console.log(err) });
});
app.post('/contact', (req, res, next) => {
    let name = req.body.name;
    let email = req.body.mail;
    let yr = req.body.year;
    let branch = req.body.branch;
    let query = req.body.query;
    let d = new Date();
    d = d.getTime();
    db.execute('insert into contact values(?,?,?,?,?,?,?)', [name, email, yr, branch, query, false, d])
        .then(e => { res.redirect('/') })
        .catch(err => { console.log(err) });
});
app.post('/admin/subscriber-mail', (req, res, next) => {
    let list;
    let sub = req.body.subject;
    let body = req.body.body;
    list = ['srajan.oel@gmail.com']; //list of subscribers. Fetch from database
    list.forEach(e => {
        mail(e, sub, body);
    })
    res.redirect('/admin/subscribers.html');
});
app.post('/admin/doubt-mail', (req, res, next) => {
    let sub = 'You Doubt at Koders Korner';
    let body = 'Hello ' + req.body.name + ',<br>' + 'You were having the follwing the following doubt in <a href="' + req.body.link + '">this problem</a>:<br><i>' + req.body.doubt + '</i><br><br>Out Solution to the about problem is:<br><b>' + req.body.solution + '</b><br>Please try to understand our solution. If you face any problem, feel free to contact us.<br><br>Thank You<br>Koders Korner Team';
    let to = req.body.email;
    mail(to, sub, body);
});
app.use('/', (req, res, next) => {
    res.send('<h1>Error 404</h1><h2>Page Not Found</h2>');
});
app.listen(2000, () => { console.log('Server is Running at Port 2000') });