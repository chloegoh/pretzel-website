function load_gallery() {
  // get gallery columns
  var col1 = document.getElementsByClassName("col1");
  var col2 = document.getElementsByClassName("col2");
  // get gallery captions
  var para = document.getElementsByTagName("P");

  // create slide in effect for columns
  for (let i = 0; i < col1.length; ++i) {
    col1[i].style.width = "100%";
  }

  for (let i = 0; i < col2.length; ++i) {
    col2[i].style.width = "100%";
  }

  load_images();

  /*for (let i = 0; i < para.length; ++i) {
    para[i].style.visibility = "visible";
  }*/
  load_captions();
}

// load images one by one on gallery.html
function load_images() {
  var images = document.getElementsByTagName("IMG");
  for (let i = 0; i < images.length; ++i) {
    images[i].style.opacity = "1";
  }
}

function load_captions() {
  // get gallery divs
  var divs = document.getElementById("gallery").getElementsByTagName("DIV");

  // array of pretzel captions
  var arr = [
    "Original Pretzel",
    "Cinnamon Sugar Pretzel",
    "Almond Pretzel",
    "Raisin Pretzel",
    "Garlic Parmesan Pretzel",
    "Sour Cream and Onion Pretzel",
  ];

  setTimeout(function () {
    for (let i = 0; i < divs.length; ++i) {
      var new_element = document.createElement("p");
      new_element.innerHTML = arr[i];
      divs[i].appendChild(new_element);
    }
  }, 1000);
}
