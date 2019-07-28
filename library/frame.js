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
    this.el.style.top = "0px"
    this.el.style.left ="0px"

    this.el.style.transition = "all 1s"
    this.el.style.position = "relative"


    document.body.appendChild(this.el)

    this.el.addEventListener("click", this.onTap.bind(this))
    this.el.addEventListener("mouseover", this.onOver.bind(this))
    this.el.addEventListener("mousein", this.onOver.bind(this))
    this.el.addEventListener("mouseout", this.onLeave.bind(this))
    this.el.addEventListener("mousedown", this.onPress.bind(this))
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
    this.animate(this.lastState)
  }

  onPress(){
    if(this.draggable == true){
      dragElement(this.el)
    }
  }

  animate(value){
    console.log(value);
    if(Object.keys(this.states).indexOf(value)){
      this.animateState(value)
    }

    if(Object.keys(this.states).indexOf(value) === -1){
      console.log("it's value");
      for (let el in value) {
        this.animateValue(el,value[el])
      }
    }
  }

  animateState(state){
    let obj = this.states[state]
    this.onState = state

    for (let el in obj) {
      if(el == "src"){
        this.el.setAttribute("src",this.states[state].src)
      }

      if(el == 'scale'){
        // not supported
        // this.el.style.width = this.el.style.width.slice(0, -2) * obj[el] + "px"
        // this.el.style.height = this.el.style.height.slice(0, -2)*obj[el] + "px"
      }

      this.animateValue(el, obj[el])
    }
  }

  animateValue(type, value){

    if(cssConvert[type] != null){
      this.el.style.setProperty(cssConvert[type], value)
    }else{
      this.el.style.setProperty(type, value)
    }
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
