const fetchModule = require('tns-core-modules/fetch/fetch');
const geolocation = require("nativescript-geolocation");
const server = '192.168.0.10:5000'

exports.bulkSelect = () => {
    var location = geolocation.getCurrentLocation(
        {desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}
    ).then(function(loc) {
        conole.log('on function')
        if (loc) {
            conole.log('on if')
            alert("Current location is: " + loc);
        }
    }, function(error) {
        console.log('on error')
        alert("Error: " + error.message);
    })
    console.log(location)

    // fetchModule.fetch("http:" + server + "/pond/checkusb", {
    //     method: "GET"
    // })
    // .then(function(response) {
    //     const status = response.status;
    //     if (parseInt(status) == 200) {
    //         alert({title: "GET Response", message: response._bodyText, okButtonText: "Close"});
    //     } else {
    //         alert({title: "GET Response", message: response._bodyText, okButtonText: "Close"});
    //     }
    // }, function(error) {
    //     console.log(JSON.stringify(error));
    // })

    // const page = args.object
    // page.frame.navigate('secundary')
}
