
var isMobile = {
    Android: function() {
	var fileref = document.createElement("link");

fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", cssPath);

document.getElementsByTagName("head")[0].appendChild(fileref);
	var cssPath = "html/css/standard.css";
		cssPath = "mobile.css";
		
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if( isMobile.any() ) alert('You are using a mobile');

if( isMobile.iOS() ) alert('iOS');

if( isMobile.Windows() ) alert('Windows');

// Testing