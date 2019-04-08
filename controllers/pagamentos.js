module.exports = (app) => {
    app.get('/pagamentos', (request, response) => {
        response.send('ok');
    });
};
