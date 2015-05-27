$('body').append($('<div class="chat"></div>'));
$('.chat').append($('<div class="messages"></div>'));
$('.messages').append($('<ul class="list"></ul>'));
// Test messages
$('.messages .list').append('<li><span class="name">Ryan:</span> This is a test message. This is a test message. This is a test message');
for(var i = 0; i < 20; i++){
  $('.messages .list').append('<li><span class="name">Ryan:</span> This is a test message');
  
}

$('.chat').append($('<ul class="message"><li><span class="text">Message: </span></li><li class="last"><input type="text"/></li>'));
$('#playBtn').on('click', function(e){
  var nick = $('#nick').val();
  console.log(nick);
  e.preventDefault();
});
