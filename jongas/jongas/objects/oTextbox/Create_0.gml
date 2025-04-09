
/// Customizable 

//Imput
confirm_key = vk_space; // botão q faz ir pra proxima pag

//position
margin = 16; // o quanto de espaço vai ter entre a text box e a borda da tela
padding = 8; // espaço dentro da text box
width = display_get_gui_width() - margin * 2;
height = sprite_height;

x = (display_get_gui_width() - width) / 2;
y = display_get_gui_height() - height - margin;

// text
text_font =  fnt_text;
text_color = c_white;
text_speed = 0.6
text_x = padding;
text_y = padding;
text_width = width - padding * 2;

/// propriedade privada 
// não edita nada aqui

actions = [];
current_action = -1;

text = "";
text_progress = 0;
text_length = 0;

/// metodos

//começar uma conversa
setTopic = function(topic) {
	actions = global.topics[$ topic];
	current_action = -1;
	
	next();
}

// mover para a proxima ação
next = function() {
	current_action++;
	if (current_action >= array_length(actions)) {
		instance_destroy();
	}
	else {
		actions [current_action].act(id);
	}
}

//Bota oq o texto deve falar
setText = function(newText) {
	text = newText;
	text_length = string_length(newText);
	text_progress = 0;
}
	

