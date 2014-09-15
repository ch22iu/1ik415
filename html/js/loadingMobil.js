
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
		normalCss();
		return navigator.userAgent.match(/Windows/i);
	},
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || loadMobilCss() || isMobile.Windows());
    }
};
var fileref = document.createElement("link");
var loadMobilCss = function() {
		cssPath = "html/css/style_mobile2.css";
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", cssPath);
		document.getElementsByTagName("head")[0].appendChild(fileref);
}
var normalCss = function() {
		cssPath = "html/css/style.css";
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", cssPath);
		document.getElementsByTagName("head")[0].appendChild(fileref);
}


if( isMobile.any() ) alert('You are using a mobilephone!!!');


if( isMobile.iOS() ) alert('iOS');

if( isMobile.WindowsOS() );
// Testing



		