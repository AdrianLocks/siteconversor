jQuery('#textSymbol').keypress(function(event){

	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		alert('Apertou "enter" na caixa de texto!');
	}

});