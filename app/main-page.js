var fetchModule = require('tns-core-modules/fetch/fetch');

exports.bulkSelect = () => {
    fetchModule.fetch("http://192.168.0.10:5000/pond/checkusb", {
        method: "GET"
    })
    .then(function(response) {
        const status = response.status;
        if (parseInt(status) == 200) {
            alert(response._bodyText);
        } else {
            alert(JSON.stringify(response));
            // alert({title: "GET Response", message: JSON.stringify(response), okButtonText: "Close"});
        }
    }, function(error) {
        console.log(JSON.stringify(error));
    })

    // const page = args.object
    // page.frame.navigate('secundary')
}
