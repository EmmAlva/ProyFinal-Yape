'use stric';
alert("kh");

const root = (root) => {
	root.empty();
	const wrapper = $('<div class = "wrapper"> </div>');
	wrapper.append(Header());
	if(state.screen == 2){
	wrapper.append(Screen2());
	}
	root.append(wrapper);
}

const state = {
	screen: null,
	dinamic: null
}

$( _)=>{
	$.getJSON('server.js', (error, json)=> {
		if(error) {
			return alert(error.message);
		}
		state.dinamic = json;
		console.log(json);
		const root=$('#root');
		render(root);
	});
}