const axios = require("axios");
const util = require('util');

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
        return response.data;
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







/*let austin = [
    '78701', '78799', '73301', '73344', '78708',
    '78709', '78710', '78711', '78713', '78714',
    '78715', '78716', '78718', '78720', '78755',
    '78760', '78761', '78762', '78763', '78764',
    '78765', '78766', '78767', '78768', '78769',
    '78772', '78773', '78774', '78778', '78779',
    '78780', '78781', '78783', '78785', '78788',
    '78789', '78712', '78705', '78702', '78703',
    '78722', '78704', '78751', '78741', '78721',
    '78756', '78723', '78746', '78752', '78742',
    '78745', '78731', '78757', '78744', '78719',
    '78735', '78724', '78749', '78786', '78798',
    '78754', '78758', '78725', '78748', '78753',
    '78730', '78733', '78759', '78747'
];

let sanAntonio = ['78023', '78254', '78255', '78256', '78249', '78250', '78066'];

let houston = ['77004', '77276', '77285', '77021', '77006', '77010', '77003',
    '77002', '77097', '77296', '77298', '77030', '77001', '77052',
    '77202', '77203', '77204', '77205', '77206', '77207', '77208',
    '77209', '77210', '77212'];

let dallas = ['75043', '75088', '75030',
    '75150', '75182', '75045',
    '75046', '75047', '75049',
    '75041', '75040', '75089',
    '75149', '75228', '75185',
    '75187', '75042', '75218',
    '75048', '75238', '75032',
    '75044', '75227', '75181',
    '75087', '75081'];

let cityArr = [austin, sanAntonio, houston, dallas];

let allZipArr = [];

cityArr.forEach( e => {
    for(let i = 0; i < e.length; i++) {
        allZipArr.push(e[i]);
    }
});

let formattedArr = [];

function createPromises(arr){
    let promises = [];
    let result = [];
    arr.forEach( e => {
        promises.push(getLocationFromZip(e))
    })
    Promise.all(promises).then( e => {
        result = e;
    }).then( () => {
        result.forEach(e => {
            formattedArr.push([e.zip_code, e.lat, e.lng])
        })
    })
        .then( () => {
            console.log(util.inspect(formattedArr, { maxArrayLength : 40000000}));
        })
}

let coordsArr = createPromises(allZipArr);*/

