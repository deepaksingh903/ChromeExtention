var tid = setTimeout(triggerAutoClick, 5000);

function triggerAutoClick()
{
  if (confirm("Press a button!") == true)
  {
    tid = setTimeout(autoClick, 3000);
  } else
  {
    //stop();
  }
}

function autoClick()
{
  var doc = document.getElementsByClassName('button Lts($ls-s) Z(0) Whs(nw) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) recsGamepad__button D(b) Bgc(#fff) recsGamepad__button--like')[0];
//  var className = 'abc';
//  var doc = document.getElementById('irc_ra');

  if (doc !== undefined)
  {
    doc.click();
  }
  tid = setTimeout(autoClick, 3000);
}

function stop()
{
 // clearTimeout(tid);
}
