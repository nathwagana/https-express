class Controller {
    async index(request, response) {
        try {

            const message = "Hello World HTTPS";
            
            return response
                .status(200)
                .send({
                    message
                });

        } catch (err) {
            return response
                .status(500)
                .send({
                    error: 'Internal error when loading products'
                });
        }
    };

}

module.exports = Controller;