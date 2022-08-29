 let message = 'Just learn it';

 function sendMessage(name) {
   const sender = 'Gromcode';

   console.log(`${name}, ${message}! Your ${sender}`);
 }

 function setMessage(text) {
   message = text;
 }

//--test data
 sendMessage('Ann');
 setMessage('Good job');
 sendMessage('Ann');