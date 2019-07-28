window.onload = function setup() {
  let shapes = document.getElementsByClassName('shape')
  for (el of shapes) {
    el.addEventListener("mouseover", function(){testEvent("over")})
    el.addEventListener("mouseleave", function(){testEvent("out")})
    el.addEventListener("mousedown", function(){testEvent("down")})
    el.addEventListener("mousemove", function(){testEvent("move")})
  }
}

function testEvent(type){
  console.log(type);
}
