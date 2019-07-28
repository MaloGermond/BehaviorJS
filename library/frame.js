var cssConvert = {
  borderWidth : "border-width",
  borderRadius : "border-radius",
  borderColor: "border-color",
  borderStyle: "border-style",
  backgroundColor: "background-color",
  boxShadow: "box-shadow"
}

class Component{
  constructor(){
    this.states = new Object()

    this.el = document.createElement('div')

    this.el.style.width = "50px"
    this.el.style.height = "50px"
    this.el.style.backgroundColor = "#61b1ff"
    this.el.style.borderRadius = "8px"

    this.el.style.transition = "all 1s"
    this.el.style.position = "relative"


    document.body.appendChild(this.el)

    this.el.addEventListener("click", this.onTap.bind(this))
    this.el.addEventListener("mouseover", this.onOver.bind(this))
    this.el.addEventListener("mousein", this.onOver.bind(this))
    this.el.addEventListener("mouseout", this.onLeave.bind(this))
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

  onOver(){
    this.lastState = this.onState
    this.over()
  }

  onLeave(){
    // console.log(this.lastState);
    this.animate(this.lastState)
  }

  animate(state){
    console.log(state);
    // console.log(this.states[state])

    let obj = this.states[state]
    this.onState = state

    // for (let arg in this.el.style) {
    //   console.log(arg);
    // }

    for (let el in obj) {
      if(el == "src"){
        this.el.setAttribute("src",this.states[state].src)
      }

      if(el == 'scale'){
        // not supported
        // this.el.style.width = this.el.style.width.slice(0, -2) * obj[el] + "px"
        // this.el.style.height = this.el.style.height.slice(0, -2)*obj[el] + "px"
      }

      if(cssConvert[el] != null){
        this.el.style.setProperty(cssConvert[el], obj[el])
      }else{
        this.el.style.setProperty(el, obj[el])
      }

    }
    // for (var i = 0; i < Object.values(this.states[state]).length; i++) {
    //   console.log(this.states[state])
    // }
    // if(state in this.states && this.states[state].src != null){
    //
    // }else{
    //   // console.log("state: "+ state+" dosen't exist");
    // }
  }

  cycle() {
    // console.log(arguments);
    // console.log(this.onState)
    // console.log(this.lastState);
    for (let i = 0; i < arguments.length-1; i++){
      if (arguments[i] == this.onState) {
        // console.log(arguments[i+1]);
        // this.lastState = arguments[i]
        this.animate(arguments[i+1])
      }
    }
    this.animate(arguments[0])
  }

}
