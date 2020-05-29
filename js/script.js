/************************************************************* 
This function is called when gallery.html has finished loading 
*************************************************************/
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

function enlarge_caption(x) {
  x.style.fontSize = "65px";
}

function shrink_caption(x) {
  x.style.fontSize = "50px";
}

/********************************** 
Implementation of Helper functions 
**********************************/
function load_images() {
  var images = document.getElementsByTagName("IMG");
  // load images one by one on gallery.html
  // (delayed by 0.5s)
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
      // create new p element
      var new_element = document.createElement("p");
      new_element.innerHTML = arr[i];

      // add attributes for transition
      var att1 = document.createAttribute("onmouseover");
      att1.value = "enlarge_caption(this)";
      new_element.setAttributeNode(att1);

      var att2 = document.createAttribute("onmouseout");
      att2.value = "shrink_caption(this)";
      new_element.setAttributeNode(att2);

      // append p element to div
      divs[i].appendChild(new_element);
    }
  }, 1000);

  animate_caption();
}

function animate_caption() {
  // animate caption after 1.04 second
  setTimeout(function () {
    // get gallery captions
    var para = document.getElementById("gallery").getElementsByTagName("P");
    for (let i = 0; i < para.length; ++i) {
      para[i].style.fontSize = "50px";
    }
  }, 1040);
}
