<<<<<<< HEAD
function drawSquares(){
  document.getElementById('box').innerHTML="";
  let box = document.getElementById('box');
  for (var i = 0; i < document.getElementById('number').value; i++){
      let squares = document.createElement('box').appendChild(document.createElement('b'));
      squares.className = "squares";
      box.appendChild(squares);
  }
  document.getElementById('number').value = '';
  //document.getElementById('box').innerHTML="";
}

=======
>>>>>>> c3cd3552fdda34849d2a4e038705b208ba0bbf7e
//var n = document.getElementById("number").value;
// function drawSquares(){
//   let theInput = document.getElementById("number");
//   var n = theInput.value;
//   var col = 20;
//   var row = n/column;
//   var x = 20;
//   var y = 20;
//   var w = 20;
//   var h = 20;
//   for (var i = 0; i <= row; i++) {
//     for (var j = 0; j <= col; j++) {
//       var c = document.getElementById("myCanvas");
//       var ctx = c.getContext("2d");
//       ctx.fillRect(x, y, w, h);
//       x = x + 30;
//          }
//       y = y + 30;
//        }
// }
<<<<<<< HEAD
=======

function drawSquares(){
  document.getElementById('box').innerHTML="";
  let box = document.getElementById('box');
  for (var i = 0; i < document.getElementById('number').value; i++){
      let squares = document.createElement('box').appendChild(document.createElement('b'));
      squares.className = "squares";
      box.appendChild(squares);
  }
  document.getElementById('number').value = '';
  //document.getElementById('box').innerHTML="";
}
>>>>>>> c3cd3552fdda34849d2a4e038705b208ba0bbf7e
