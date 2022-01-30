// <!-- ❗ ABRE VAR-AUX -->
let duration = 60 * 18;

let displayNFT = document.querySelector(".close");
// <!-- FECHA VAR-AUX -->

// <!-- ❗ ABRE CLICKVIDEO -->
let iframe = document.querySelector("iframe");
let player = new Vimeo.Player(iframe);

player.on("play", startTimer(duration));
// <!-- FECHA CLICKVIDEO -->

// <!-- ❗ ABRE TIMER -->
function startTimer(duration) {
  let timer = duration,
    minutes,
    seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (--timer < 0) {
      timer = duration;
    }
    if (minutes == 0 && seconds == 0) {
      displayNFT.classList.remove("close");
      displayNFT.classList.add("nft-infos");
    }
  }, 1000);
}
// <!-- FECHA TIMER -->
