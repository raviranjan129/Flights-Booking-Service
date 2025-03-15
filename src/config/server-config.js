
const dotenv=require('dotenv');

dotenv.config(); //it will load env variable file


module.exports={
    PORT:process.env.PORT,
    FLIGHT_SERVICE:process.env.FLIGHT_SERVICE
}
