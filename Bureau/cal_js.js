var val1, val2, operator;

function recupOp1Val() {
	return document.getElementById("op1").value;
}

function recupOp2Val() {
	return document.getElementById("op2").value;
}

function recupOperatorVal() {
	return document.getElementById("choix").value;
}

function traitement() {
	alert("Ca marche !");
	var val1 = recupOp1Val();
	var val2 = recupOp2Val();
	var operator = recupOperatorVal();
}

	// tester les valeurs, pour voir si elles sont valides
	function validation() {
	if ((operator=="Division") && (val2==0)) { 
		alert("Diviseur = 0 -> division impossible")}	
	else if ((val1|| val2) == NaN) { 
			alert("Les deux termes doivent être numériques !")}
	else {
		//appel de la fonction au clic
		var o = document.querySelector('#run');
		o.addEventListener('click',traitement);

		//if (operator=="Addition") {addition}
	}
}
	
	//var resultat = calcul(val1, val2, operator);

	// afficher résultat
//	afficheResult(resultat);


//function calcul(val1, val2, operator) {


//}





	/* appel des fonctions calcul
	if (sel=="Addition") {
		var resultat = addition(val1, val2);
	}
	else if (sel=="Soustraction"){
	 	var resultat = soustraction();
	 }
	else if (sel=="Multiplication") {
		var resultat = multiplication();
	}
	else {
		var resultat = division();
	}
	//}  */
// fonctions calcul-----------
/*
function addition(a,b) {
	var resadd=a+b;
	return resadd;
}

function soustraction(a,b) {
	var ressou=a-b;
	return ressou;
}

function multiplication(a,b) {
	var resmul=a*b;
	return resmul;
}

function division(a,b) {
	var resdiv=a/b;
}
*/