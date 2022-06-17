window.onload = function () {
  fixLines();

  window.addEventListener("orientationchange", function () {
      fixLines();
  });
}


function fixLines() {
  var container = document.getElementsByClassName("code");
  for (var i = 0; i < container.length; i++) {
      var height = container[i].getBoundingClientRect().height;
      var lines = container[i].innerHTML.split("<br>").length;
      container[i].style.backgroundSize = "100% " + (height / (lines - 1) * 2) + "px";
  }

  var container = document.getElementsByClassName("input");
  for (var i = 0; i < container.length; i++) {
      var height = container[i].getBoundingClientRect().height;
      var lines = container[i].innerHTML.split("<br>").length;
      container[i].style.backgroundSize = "100% " + (height / (lines - 1) * 2) + "px";
  }

  var container = document.getElementsByClassName("output");
  for (var i = 0; i < container.length; i++) {
      var height = container[i].getBoundingClientRect().height;
      var lines = container[i].innerHTML.split("<br>").length;
      container[i].style.backgroundSize = "100% " + (height / (lines - 1) * 2) + "px";
  }
  let noOfCharac = 150;
  let description = document.querySelectorAll(".description");
  description.forEach(description => {
    if(description.textDescription.length < noOfCharac){
      description.nextElementSibling.style.display =
        "none';
    }
    else{
      let displayText = description.textDescription.slice
      (0,noOfCharac);
      let moreText = description.textDescription.slice
      (noOfCharac);
      description.innerHTML = '${displayText}<span class="dots>...</span>
      <span class ="hide more">${moreText}</span> ;
    }
});
  
  
function readMore(btn){
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle
  ("hide");
  post.querySelector(".more").classList.toggle
  ("hide");
  btn.textDescription == "Read More" ? btn.textDescription = "Read Less" : btn.textDescription = "Read More";

}
  

    
    
      
}
