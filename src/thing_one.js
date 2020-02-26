import React from 'react'

class ThingOne extends React.Component{
  constructor(props) {
    super(props)
    this.ref1 = React.createRef()

    // if you don't bind your method then boxChecked will be called
    // without `this` in scope
    this.boxChecked = this.boxChecked.bind(this)
  }
  boxChecked(event) {
    // console.log("inside of boxChecked this is" , this)
    const dom_elem = this.ref1.current
    const is_checked = dom_elem.checked
    alert("This box is now " + (is_checked ? 'CHECKED' : 'UNCHECKED'))
  }
  
  render() {
    return (
      <div>
        this is an experiment into forwarded refs
        <br />
        Please check this box: &nbsp;
        <input type={"checkbox"} ref={this.ref1} onClick={this.boxChecked}  />
      </div>
    )
  }
}

export default ThingOne