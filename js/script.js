function load_gallery() {
  // get gallery columns
  var col1 = document.getElementsByClassName("col1");
  var col2 = document.getElementsByClassName("col2");

  // create slide in effect for columns
  for (let i = 0; i < col1.length; ++i) {
    col1[i].style.width = "100%";
  }

  for (let i = 0; i < col2.length; ++i) {
    col2[i].style.width = "100%";
  }

  load_images();
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

  // add caption after 1 second
  setTimeout(function () {
    for (let i = 0; i < divs.length; ++i) {
      var new_element = document.createElement("p");
      new_element.innerHTML = arr[i];
      divs[i].appendChild(new_element);
    }
  }, 1000);

  animate_caption();
}

function animate_caption() {
  // animate caption after 1 second
  setTimeout(function () {
    // get gallery captions
    var para = document.getElementById("gallery").getElementsByTagName("P");
    for (let i = 0; i < para.length; ++i) {
      para[i].style.fontSize = "50px";
    }
  }, 1040);
}
