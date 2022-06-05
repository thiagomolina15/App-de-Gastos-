var cantPersonas = 0;
var suma = 0;
function myFunction() {
	var division;
	var persona;
	var paga;
	persona =
		String(document.getElementById("nombre").value) ||
		"Ingrese un nombre porfavor";
	paga = parseFloat(document.getElementById("monto").value) || 0;
	if (persona != "Ingrese un nombre porfavor") {
		cantPersonas++;
		suma = suma + paga;
	}
	division = suma / cantPersonas;
	amigos.innerHTML = amigos.innerHTML + `<p>${persona}: $${paga}</p>`;
	total.innerHTML = `<p>Total: ${suma} </br> A cada uno le toca aportar: $${division}</p>`;
}
