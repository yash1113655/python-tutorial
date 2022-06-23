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
let noOfCharac = 30;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
  if(content.textContent.length < noOfCharac){content.nextElementSibling.style.display = "none";
}
else{
    let displayText = content.textContent.slice
    (0,noOfCharac);
    let moreText = content.textContent.slice
    (noOfCharac);
    content.innerHTML = '${displayText}<span
    class="dots">...</span><span class="hide more">${moreText}</span>'
}
});
    
  
}
  
