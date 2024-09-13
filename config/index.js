require("dotenv/config");

const checkConfig = (value) => {
    if(!value)
        throw Error('Make sure you have all keys set in your .env file');
    else
        return value;
}

const config = {
    mongoDB: checkConfig(process.env.MONGODB_CONNECT_URI)
}

module.exports = config;