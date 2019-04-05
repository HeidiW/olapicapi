

var url = "https://photorankapi-a.akamaihd.net/customers/215757/media/recent?version=v2.2&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&rights_given=true"

const createImageGrid = (data) => {
    //console.log(data);
    jQuery( function() {
        var li = jQuery( '<li/>' ),
            ul = jQuery( '<ul/>' );
        $.each( data, function( i, v ) {
          ul.append( li.clone().html( '<img src="' + v.images.normal + '"/>' ) );
        });
        console.log(ul)
        $('body').append(ul);
    //a for loop iterates through the image url array
    //and appends them to DOM in the proper div elements
});
};

fetch(url)
.then((resp) => { 
  return resp.json();
})
.then((resp_json) => { 
  data = JSON.parse(JSON.stringify(resp_json));
  console.log(data);
  createImageGrid(data.data._embedded.media)
});
