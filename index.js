var app = express();
app.get('/', function(req, res) {
    res.sendFile('/index.html', {root: __dirname })
});
