const axios = require("axios");

function getZipsWithinRadius(zip, radius) {
    let allZips = [];
    return axios({
        "method": "GET",
        "url": `https://redline-redline-zipcode.p.rapidapi.com/rest/radius.json/${zip}/${radius}/mile`,
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "redline-redline-zipcode.p.rapidapi.com",
            "x-rapidapi-key": "97cdcb1c2cmshce790b7e04da626p14b3f9jsn19354f3661ba"
        }
    })
        .then( response => {
            response.data.zip_codes.forEach( e => {
                allZips.push([e.zip_code, e.distance])
            });
        allZips.sort(([,a],[,b]) => a - b);
            return allZips;
    })
}

function getDistanceBetweenZips(zipOne, zipTwo){
    return axios({
        "method":"GET",
        "url":`https://redline-redline-zipcode.p.rapidapi.com/rest/distance.json/${zipOne}/${zipTwo}/mile`,
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"redline-redline-zipcode.p.rapidapi.com",
            "x-rapidapi-key":"97cdcb1c2cmshce790b7e04da626p14b3f9jsn19354f3661ba"
        }
    })
        .then( response => {
        console.log(response);
    })
}

function getLocationFromZip(zipCode){
   return axios({
        "method":"GET",
        "url":`https://redline-redline-zipcode.p.rapidapi.com/rest/info.json/${zipCode}/degrees`,
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"redline-redline-zipcode.p.rapidapi.com",
            "x-rapidapi-key":"97cdcb1c2cmshce790b7e04da626p14b3f9jsn19354f3661ba"
        }
    })
        .then( response => {
        console.log(response);
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
        .then( response => {
        console.log(response);
    })
}

module.exports = {
    getZipFromCityState, getZipsWithinRadius, getLocationFromZip, getDistanceBetweenZips
};