const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var jf = require("johnny-five");
var circuito = new jf.Board({port:"COM3"});
//---------------------------------------------------------------------------
circuito.on("ready", inicioard);
global.gauto;//Compare auto
//---------------------------------------------------------------------
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
//----------------------------------------------------------------------
app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/Script'));
//-----------------------------------------------------------------------------
app.get('/led-off', (req, res) => {
  apagarf1();
 return res.send('LED-1 OFF');
});
app.get('/led-on', (req, res) => {
  prenderf1();
  return res.send('LED-1 ON');
});
app.get('/auto', (req, res) => {
  gauto = 1;
  auto();
  console.log("Auto ON");
  return res.send('AUTO ON');
});
app.get('/noauto', (req, res) => {
  gauto = 0;
  auto();
  console.log("Auto OFF");
  return res.send('AUTO OFF');
});
app.use('/', router);
app.listen(process.env.port || 3000);
//-----------------------------------------------------------------------
function inicioard(){
  var configuracion1 = {pin:"A0", freq: 50};//
  var configuracion2 = {pin:"A1", freq: 50};//
  celda1 = new jf.Sensor(configuracion1);
  celda2 = new jf.Sensor(configuracion2);
  led1 = new jf.Led(13);
  led1.on();
  console.log("Working")
}
//-------------------------------------------------------------------------

function prenderf1(){
  led1.on();
}
function apagarf1(){
  led1.off();
}
//-------------------------------------------------------------------------
function auto(){
  if (gauto == 1)
  {
    var luz1 = celda1.value;
    var luz2 = celda2.value;
    console.log("Luz: "+ celda1.value + " " + celda2.value);
    if (luz1 < 500 && luz2 < 500){
      led1.on();
    }else{
      led1.off();
    }
    setTimeout(auto,1000);
  }
}
//------------------------------------------------------------------------
console.log('Running at Port 3000');