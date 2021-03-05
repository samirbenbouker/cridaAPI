// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function accedeix() {
	$('#musics').empty();
	let query = $('#searchContent').val();
    $.ajax({
	  method: "GET",
	  url: "https://musicbrainz.org/ws/2/artist?query="+query,
	  dataType: "json",   // necessitem això pq ens retorni un objecte JSON
	}).done(function (msg) {
	  for(var item in msg.artists) {
	  	if(msg.artists[item].disambiguation == null) {
	  		$('#musics').append('<hr><li class="collection-item"><div><h5>'+msg.artists[item].name+'</h5>'+'<a href="#!" class="secondary-content"><hr>');
	  	}
	  	else{
	  		$('#musics').append('<hr><li class="collection-item"><div><h5>'+msg.artists[item].name+'</h5>'+'Type:' +msg.artists[item].disambiguation+'<a href="#!" class="secondary-content"><hr>');
	  	}
	  };
	}).fail(function () {
		alert("ERROR");
	});
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    $('#searchBtn').click( accedeix );
}
