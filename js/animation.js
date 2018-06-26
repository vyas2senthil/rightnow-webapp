// Boolean Value For Animation
let boolean = true;

// Tutorial Navigation Animation
window.addEventListener('click', function(){
	animationLoop('0', '0', true);
	setTimeout(function(){
		dropdownMenu.style.display = 'none';		
	}, 300)
}, false);

tutorials.addEventListener('click', function(e){
	if(boolean) {
		dropdownMenu.style.display = 'block';
		setTimeout(function(){
		 animationLoop('600px', '1', false);
		}, 100);
	} else {
		animationLoop('0', '0', true);
		setTimeout(function(){
			dropdownMenu.style.display = 'none';		
		}, 300);
	}
}, false);

// Animation Actions
function animationLoop(maxHeight, opacity, booLean) {
	for(let i = 0; i < dropdownHeader.length; ++i) {
		dropdownHeader[i].style.opacity = opacity;
	}
	dropdownMenu.style.maxHeight = maxHeight;
	dropdownMenu.style.opacity = opacity;
	boolean = booLean;
}