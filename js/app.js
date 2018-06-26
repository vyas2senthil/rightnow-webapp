
// Global Selectors 
const links   		 = document.querySelectorAll('.link'),
	  dropdownHeader = document.querySelectorAll('.dropdown-header'),
	  display 		 = document.querySelector('.iframe'),
	  tutorials		 = document.querySelector('.tutorials'),
	  dropdownMenu 	 = document.querySelector('.dropdown-menu'),
	  main    		 = document.getElementById('info'),
	  title   		 = document.getElementById('title');

// Window - Actions
window.onload = function() {
	if(getIEVersion() > 0) {
		// IE Window - Browswer Back and Forward Action
		window.onhashchange = function() {
			dynamicNavigation(location.hash);
		}
	} else {
		// Non-IE Window - Browser Back and forward Action 
		window.addEventListener('popstate', function(e) {
			dynamicNavigation(location.hash);
		}, false);
				
	}
	// Window - Browser Refresh
	dynamicNavigation(location.hash);
	
	for(let i = 0; i < links.length; ++i) {
		links[i].onclick = function() {
			dynamicNavigation(this.hash);
		}
	}
	return false;
}

// Dynamic Content Actions

function dynamicContent(content, subject) {
	if(location.hash === ''){
		display.innerHTML = '<iframe id="display"></iframe>';
		title.innerHTML = subject;
	} else {
		setTimeout(function(){
			display.innerHTML = '<iframe id="display" src="assets/'+content+'/index.html"></iframe>';
		}, 500);
		main.innerHTML = html[content];
		title.innerText = subject + ' Tutorial';
	}
};



function dynamicNavigation(val) {
	switch(val) {
		case '':
			dynamicContent('main', 'Training');
			break;

		case '#overview':
			dynamicContent('overview', 'Overview');
			break;

		case '#ticket':
			dynamicContent('ticket', 'Creating a Ticket');
			break;

		case '#implementation':
			dynamicContent('opportunity', 'Creating an Implementation');	
			break;

		case '#closing':
			dynamicContent('closing', 'Closing a Ticket');	
			break;

		case '#responding':
			dynamicContent('responding', 'Responding to a Ticket');
			break;

		case '#contact':
			dynamicContent('contact', 'Contact Records');
			break;

		case '#search':
			dynamicContent('search', 'Quick Search');
			break;
		
		default:
			return false;
	}
};

// Checking IE Version and browser
function getIEVersion() {
  const sAgent = window.navigator.userAgent;
  const Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
	if (Idx > 0) {
    	return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
  	}
  // If IE 11 then look for Updated user agent string.
  	else if (!!navigator.userAgent.match(/Trident\/7\./)) {
		return 11;
	} else {
	return false; //It is not IE
	}
}








	



