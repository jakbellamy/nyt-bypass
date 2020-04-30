setTimeout(function(){
  console.log('extensy hity')
  if(jQuery(".nytc---modal-window---windowContainer.nytc---modal-window---isShown.nytc---shared---blackBG")){
  	jQuery(".nytc---modal-window---windowContainer.nytc---modal-window---isShown.nytc---shared---blackBG").remove();
  };
  if(jQuery("body")){
  	jQuery("body").css('overflow', 'auto');
  };
  if(document.querySelector("#gateway-content")){
  	document.querySelector("#gateway-content").remove();
  }
  if(document.querySelector(".css-1bd8bfl")){
	document.querySelector(".css-1bd8bfl").remove();
  }
  if(document.querySelector(".css-mcm29f")){
    document.querySelector(".css-mcm29f").style.overflow = 'auto';
  };
}, 800)

//for nyt

