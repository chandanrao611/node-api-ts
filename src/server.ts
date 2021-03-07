import app from "./app";
const PORT = process.env.PORT || 9191;

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})