const axios = require("axios");

function getZipsWithinRadius(zip, radius) {
    axios({
        "method": "GET",
        "url": `https://redline-redline-zipcode.p.rapidapi.com/rest/radius.json/${zip}/${radius}/mile`,
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "redline-redline-zipcode.p.rapidapi.com",
            "x-rapidapi-key": "97cdcb1c2cmshce790b7e04da626p14b3f9jsn19354f3661ba"
        }
    })
}

function getDistanceBetweenZips(zipOne, zipTwo){
    axios({
        "method":"GET",
        "url":`https://redline-redline-zipcode.p.rapidapi.com/rest/distance.json/${zipOne}/${zipTwo}/mile`,
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"redline-redline-zipcode.p.rapidapi.com",
            "x-rapidapi-key":"97cdcb1c2cmshce790b7e04da626p14b3f9jsn19354f3661ba"
        }
    })
}

function getLocationFromZip(zipCode){
    axios({
        "method":"GET",
        "url":`https://redline-redline-zipcode.p.rapidapi.com/rest/info.json/${zipCode}/degrees`,
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"redline-redline-zipcode.p.rapidapi.com",
            "x-rapidapi-key":"97cdcb1c2cmshce790b7e04da626p14b3f9jsn19354f3661ba"
        }
    })
}

function getZipFromCityState(city, state){
    return axios({
        "method":"GET",
        "url":`https://redline-redline-zipcode.p.rapidapi.com/rest/city-zips.json/${city}/${state}`,
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"redline-redline-zipcode.p.rapidapi.com",
            "x-rapidapi-key":"97cdcb1c2cmshce790b7e04da626p14b3f9jsn19354f3661ba"
        }
    })
}

module.exports = getZipFromCityState;
module.exports = getLocationFromZip;
module.exports = getDistanceBetweenZips;
module.exports = getZipsWithinRadius;