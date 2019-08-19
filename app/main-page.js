const fetchModule = require('tns-core-modules/fetch/fetch');
const geolocation = require("nativescript-geolocation");
const server = '192.168.0.10:5000'

exports.bulkSelect = () => {
    geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000})
    .then( loc => {
        if (loc) {
            alert("Current location: \n latitude=>" + loc.latitude + "\n longitude=>" + loc.longitude)
            // fetchModule.fetch("http:" + server + "/pond/checkusb", {
            //     method: "GET"
            // })
            // .then( response => {
            //     const status = response.status;
            //     if (parseInt(status) == 200) {
            //         alert({title: "GET Response", message: response._bodyText, okButtonText: "Close"});
            //     } else {
            //         alert({title: "GET Response", message: response._bodyText, okButtonText: "Close"});
            //     }
            // })
            // .catch( error => {
            //     console.log(JSON.stringify(error));
            // })
        }
    })
    .catch( error => {
        alert("Error: " + error.message)
    })
}
