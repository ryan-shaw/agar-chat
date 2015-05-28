// var s = document.createElement('script');
// s.src = chrome.extension.getURL('socket.io.js');
// s.onload = function() {
//     this.parentNode.removeChild(this);
// };
// (document.head||document.documentElement).appendChild(s);
//

var s = document.createElement('script');
s.src = 'https://cdn.socket.io/socket.io-1.3.5.js';
(document.head||document.documentElement).appendChild(s);

// s = document.createElement('script');
// s.src = chrome.extension.getURL('file.js');
// s.onload = function() {
//     this.parentNode.removeChild(this);
// };
// (document.head||document.documentElement).appendChild(s);
