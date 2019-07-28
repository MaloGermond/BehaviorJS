class Component{
  constructor(src){
    this.states = new Object()
    this.states["default"] = {
      src:src
    }

    this.el = document.createElement('img')
    this.el.setAttribute("src",src)

    this.el.style.width = "50px"
    this.el.style.height = "50px"

    this.el.style.transition = "all 1s"
    this.el.style.position = "relative"


    document.body.appendChild(this.el)

    this.el.addEventListener("click", this.onTap.bind(this))
    // this.el.addEventListener("mouseover", this.onHover.bind(this))
  }

  // addState(name, src){
  //   this.states[name] = src
  // }


  setState(name){
    if(name in this.states){
      this.el.setAttribute("src",this.states[name].src)
    }
  }

  switchState(name){

  }

  onTap(event){
    this.tap()
  }

  onHover(){
    this.hover()
  }

  animate(state){
    // console.log(state);
    // console.log(this.states[state])


    let obj = this.states[state]
    for (let el in obj) {
      if(el == "src"){

      }
      this.el.style.setProperty(el, obj[el])
    }
    // for (var i = 0; i < Object.values(this.states[state]).length; i++) {
    //   console.log(this.states[state])
    // }
    if(state in this.states){
      this.el.setAttribute("src",this.states[state].src)
    }else{
      // console.log("state: "+ state+" dosen't exist");
    }
  }

  cycle() {
    // console.log(arguments);
    // console.log(this.states);
    // console.log(this.lastState);

    for (let i = 0; i < arguments.length; i++){
      if(this.lastState == null || i >= arguments.length-1){
        this.animate(arguments[0])
        this.lastState = 0
        break
      }

      if (i == this.lastState) {
        this.animate(arguments[i+1])
        this.lastState = i+1
        break
      }
    }
  }

  updateStyle(){
    let obj = this.style
    for (let el in obj) {
      this.el.style.setProperty(el, obj[el])
    }
    // console.log(this.el.style);
  }
}
class Animation {
  constructor() {

  }
}
