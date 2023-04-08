// for click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btnhtml = this.innerHTML;
    makesound(btnhtml);
    btnanime(btnhtml);
  });
}
//for keyboard
document.addEventListener("keydown", function (event) {
  makesound(event.key);
  btnanime(event.key);
});

//animation
function btnanime(currentkey) {
  var btnselected = document.querySelector("." + currentkey);
  btnselected.classList.add("pressed");
  setTimeout(function () {
    btnselected.classList.remove("pressed");
  }, 100);
}

//switch function
function makesound(key) {
  switch (key) {
    case "w":
      var sound = new Audio("/sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("/sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("/sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("/sounds/tom-4.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("/sounds/snare.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("/sounds/crash.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("/sounds/kick-bass.mp3");
      sound.play();
      break;

    default:
      break;
  }
}

