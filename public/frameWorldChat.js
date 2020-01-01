// Make connection
var socket = io.connect('http://localhost:8200');

// Query DOM
var   handle = document.getElementById('handle'),
      output = document.getElementById('output');

// Listen for events
socket.on('chat', function(data){
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});
