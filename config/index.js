require("dotenv/config");

const checkConfig = (value) => {
    if(!value)
        throw Error('Make sure you have all keys set in your .env file');
    else
        return value;
}

const config = {
    apiUrl: checkConfig(process.env.API_URL),
    port: checkConfig(process.env.PORT),
    mongoDB: checkConfig(process.env.MONGODB_CONNECT_URI)
}

module.exports = config;