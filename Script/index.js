function autohabilitar(){
  var url = "http://192.168.0.11:3000/auto";
  openWindow(url);
}
 
function autodeshabilitar(){
  var url = "http://192.168.0.11:3000/noauto";
  openWindow(url);
}

function f1habilitar(){
    //document.getElementById("f1h").disabled=true;
    //document.getElementById("f1d").disabled=false;
    var url = "http://192.168.0.11:3000/led-on";
    openWindow(url);
}

function f1deshabilitar(){
    //document.getElementById("f1d").disabled=true;
    //document.getElementById("f1h").disabled=false;
    var url = 'http://192.168.0.11:3000/led-off';
    openWindow(url);    
}


async function openWindow(url)
{
  openedWindow = window.open(url);
  await sleep(50);
  closeOpenedWindow();
}
function closeOpenedWindow()
{
  openedWindow.close();
}
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }