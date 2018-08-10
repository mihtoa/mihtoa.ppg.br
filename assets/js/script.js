window.onload = function (e) {
  let wS = window.innerWidth
  if (wS >= 700) {
    var duration = anime({
      targets: '.content__image',
      translateY: -40,
      duration: 400,
      direction: 'alternate'
    });
    setTimeout(beforeContentImage, 900);
    }
}
function beforeContentImage() {
  var duration = anime({
    targets: '.information',
    translateX: -40,
    duration: 300,
    direction: 'alternate'
  });
  var duration = anime({
    targets: '.what-im',
    translateX: 40,
    duration: 300,
    direction: 'alternate'
  });
}







