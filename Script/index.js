function autohabilitar(){//Automatic ON
  var url = "http://192.168.0.11:3000/auto";
  openWindow(url);
}
 
function autodeshabilitar(){//Automatic OFF
  var url = "http://192.168.0.11:3000/noauto";
  openWindow(url);
}

function f1habilitar(){//Led1 ON
    var url = "http://192.168.0.11:3000/led-on";
    openWindow(url);
}

function f1deshabilitar(){//Led1 OFF
    var url = 'http://192.168.0.11:3000/led-off';
    openWindow(url);    
}

async function openWindow(url)//Open new tab with the url
{
  openedWindow = window.open(url);
  await sleep(50);//Slep fo call the function of node
  closeOpenedWindow();
}
function closeOpenedWindow()//Close the new tab
{
  openedWindow.close();
}
function sleep(ms){
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }