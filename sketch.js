var rect

window.onload = function setup() {
  rect = new Component()

  rect.states["default"]={
    width: "100px",
    height: "100px",
    borderWidth: "4px",
    borderRadius: "8px",
    backgroundColor: "#61b1ff",
    top: "50vh",
    left: "50vw"
  }

  rect.states["hover"]={
    //boxShadow: "0px 0px 8px"
    backgroundColor: "aqua",
    borderRadius: "100%"
  }

  rect.animate("default")


  rect.tap = function() {
    // console.log("tap");
    rect.animate({
      top: Math.random(0,innerHeight)+"px",
      width: Math.random(0,innerWidth)+"px"
    })
    //rect.cycle("hover","default")
  }

  rect.over = function(){
    // console.log("hover")
    rect.animate("hover")
  }

}


function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function random(){
  return Math.random() * (max - min) + min;
}
