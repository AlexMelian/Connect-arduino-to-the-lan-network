function autohabilitar(){
  var url = "http://192.168.0.11:3000/auto";
  openWindow(url);
}
 
function autodeshabilitar(){
  var url = "http://192.168.0.11:3000/noauto";
  openWindow(url);
}

function f1habilitar(){
    var url = "http://192.168.0.11:3000/led-on";
    openWindow(url);
}

function f1deshabilitar(){
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