// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function accedeix() {
	let query = $('#searchContent').val();
    $.ajax({
	  method: "GET",
	  url: "https://musicbrainz.org/ws/2/artist?query="+query,
	  dataType: "json",   // necessitem això pq ens retorni un objecte JSON
	}).done(function (msg) {
	  for(var item in msg.artists) {
	    console.log(msg.artists[item]);
	    // aquí caldría fer mes coses, of course...
	    // ...
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
