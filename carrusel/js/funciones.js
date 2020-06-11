function cambia(idImg){
	let numero = 1;
	let numero1 = '1';
	let siono = true;
	let $imagen1 = document.getElementById('f1');
	let displays = ['none', 'inline'];
		if(idImg == 'f1') {
			$imagen1.style.display=displays[0];
			document.getElementById('f2').style.display=displays[1];
		}
		if(idImg == 'f2') {
			document.getElementById('f2').style.display='none';
			document.getElementById('f3').style.display='inline';
		}
		if(idImg == 'f3') {
			document.getElementById('f3').style.display='none';
			document.getElementById('f1').style.display='inline';
		}
	}