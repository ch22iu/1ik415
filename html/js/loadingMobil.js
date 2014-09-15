
var isMobile = {
    Android: function() {
	
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
	WindowsOS: function() {
		return navigator.userAgent.match(/Windows/i);
	},
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || is.WindowsOS() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var fileref = document.createElement("link");
var loadMobilCss = function() {
		cssPath = "html/css/style_mobile.css";
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", cssPath);
		document.getElementsByTagName("head")[0].appendChild(fileref);
}

if( isMobile.any() ) alert('You are using a mobilephone!!!');


// Testing



		