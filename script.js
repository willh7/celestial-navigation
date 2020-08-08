function calculate() {
	var dr = {
		lat: document.getElementById("drlat").value*Math.PI/180,
		long: document.getElementById("drgha").value*Math.PI/180
	};
	var sun = {
		lat: document.getElementById("dec").value*Math.PI/180,
		long: document.getElementById("gha").value*Math.PI/180
	};
	var hc = (Math.cos(dr.long - sun.long)*Math.cos(dr.lat)*Math.cos(sun.lat)) + (Math.sin(dr.lat)*Math.sin(sun.lat));
	hc = Math.asin(hc);
	var z = (Math.sin(sun.lat)-(Math.sin(dr.lat)*Math.sin(hc)))/(Math.cos(dr.lat)*Math.cos(hc));
	if(z < 0) {
		z = Math.acos(z);
	} else {
		z = 2*Math.PI - Math.acos(z);
	}
	hc = hc*180/Math.PI;
	z = z*180/Math.PI;
	if(dr.lat - sun.lat > 0 && dr.long - sun.long < 0 || dr.lat - sun.lat < 0 && dr.long - sun.long > 0) {
		z += 90;
		if(z > 360) {
			z-=360;
		}
	}
	z-=180;
	if(z < 0) {
		z = 360 + z;
	}
	document.getElementById("hc").innerHTML = hc;
	document.getElementById("z").innerHTML = z;
}