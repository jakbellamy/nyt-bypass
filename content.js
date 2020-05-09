const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const hijackDOM = (interval) => {
	setTimeout(function(){
		//NYT COOKING
		if(document.querySelector(".nytc---modal-window---windowContainer.nytc---modal-window---isShown.nytc---shared---blackBG")){
			document.querySelector(".nytc---modal-window---windowContainer.nytc---modal-window---isShown.nytc---shared---blackBG").remove();
		};
		if(document.querySelector("body")){
			document.querySelector("body").style.overflow = 'auto';
		};
		//NYT REGULAR ARTICLES
		if(document.querySelector("#gateway-content")){
			document.querySelector("#gateway-content").remove();
		};
		if(document.querySelector(".css-1bd8bfl")){
			document.querySelector(".css-1bd8bfl").remove();
		};
		if(document.querySelector(".css-mcm29f")){
			document.querySelector(".css-mcm29f").style.overflow = 'auto';
		};
	}, interval);
	wait(interval + 500).then(() => {
		console.clear();
		console.log(`Paywall Removed! Stopping Forced DOM Loads...`);
	})
};

const killDOM = (interval) => {
	wait(interval).then(() => {
		console.log('DOM Activity Successfully Killed! Happy Browsing :)');
		window.stop();
	});
};

hijackDOM(800);
killDOM(2200);
