// one time letters = "abcdefghistuv"
// two times letters = "jklmnopqrwxyz"

var result = document.getElementById("result");
var times = 0;

function pigpen(onetime, twotimes) {
  times++;
  if (times >= 3) {
    times = 0;
  }

  result.innerHTML = ``;

  if (times != 0 && times % 2 == 0) {
    result.innerHTML += `${twotimes}`;
  } else if (times == 0) {
    return;
  } else {
    result.innerHTML += `${onetime}`;
  }
}
