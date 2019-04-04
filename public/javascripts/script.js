
var url = "https://photorankapi-a.akamaihd.net/customers/215757/media/recent?version=v2.2&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&rights_given=true"

fetch('https://photorankapi-a.akamaihd.net/customers/215757/media/recent?version=v2.2&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&rights_given=true')
.then(resp => resp.json()).then(({ data }) => {
 return(data._embedded.media.map(m => m.images.mobile));
});







