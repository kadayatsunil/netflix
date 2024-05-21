import express from "express";
const app = express();
// to make app understand json
app.use(express.json());
let movieList = [];
//routes
app.get('/say-hello', (req, res) => {
    return res.status(200).send('hello sunil kadayat')
});
//add movie 
app.post('/movie/add', (req, res) => {
    const newMovie = req.body;
    // add new movie to movieList
    movieList.push(newMovie);
    //send response
    return res.status(200).send({ message: 'is added successfully' });

});
// get movie
app.get('/movie/list', (req, res) => {
    return res.status(200).send({ message: "success", movie: movieList });

});
//

//network  prot service 
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`app is listening on port${PORT}`);

});

