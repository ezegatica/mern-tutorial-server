require('dotenv').config();

const app = require('./App');
require('./database')

async function main() {
    await app.listen(app.get('port'));
    console.log("server conectado!")
}


main();