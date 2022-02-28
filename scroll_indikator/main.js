window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // how far i scroll
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  //  full page height
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  //   the percentage we've scroll
  var scrolled = (winScroll / height) * 100;

  document.getElementById('progress-bar').style.width = scrolled + '%';

  console.log('winscroll:' + winScroll);
  console.log('height:' + height);
  console.log('scrolled:' + scrolled);
}
