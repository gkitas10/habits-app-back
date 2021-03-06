const dotenv = require('dotenv');

dotenv.config();

const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
console.log(domain)

if (!audience) {
    throw new Error(
        '.env is missing the definition of an AUTH0_AUDIENCE environmental variable'
    );
}

if (!domain) {
    throw new Error(
        '.env is missing the definition of an AUTH0_DOMAIN environmental variable'
    );
}

let clientOrigins = '';

if(process.env.NODE_ENV === 'dev') {
    clientOrigins = 'http://localhost:3000'
} 

if (process.env.NODE_ENV === 'production') {
    clientOrigins = 'https://aesthetic-semifreddo-67176a.netlify.app'
}
                   
module.exports = {
    audience,
    domain,
    clientOrigins
};