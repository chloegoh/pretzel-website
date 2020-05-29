// load images one by one on gallery.html
function load_images() {
  var images = document.getElementsByTagName("IMG");
  for (let i = 0; i < images.length; ++i) {
    images[i].style.opacity = "1";
  }
}
