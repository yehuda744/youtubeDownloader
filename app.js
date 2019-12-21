var express = require('express');
var bodyParser = require('body-parser');
var ytdl  = require ('ytdl-core');

var app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public' ));
app.get('/', (req, res) => {
   res.render('index')
})

// step one : when someone goes here make a request to instagram to send back the information from the user that we want
// step two: parse that information and store the profile picture in a variable
// step three: res.send that profile picture
app.get('/search', (req, res) => {
    // makes a new variable from the input and u write .search because the object we sent from main was called search and it had the input in it
    var search = req.query.Q;
    var type = req.query.TYPE;
    console.log(req.query);
    console.log(search);
    console.log(type);


    res.header('Content-Disposition', `attachment; filename=video.${type}`);

    ytdl(search, {
        format: type
    }).pipe(res);
});


app.listen(process.env.PORT || 8000)
