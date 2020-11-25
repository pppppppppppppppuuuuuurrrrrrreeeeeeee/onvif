var onvif = require('./node_modules/onvif');
onvif.Discovery.probe(function(err, cams) {
// function will be called only after timeout (5 sec by default)
    console.log(cams);
	if (err) { throw err; }
	cams.forEach(function(cam) {
		// cam.username = <USERNAME>;
		// cam.password = <PASSWORD>;
		// cam.connect(console.log);
	});
});