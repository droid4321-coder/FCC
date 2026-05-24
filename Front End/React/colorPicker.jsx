//I did this myself i am so happy :)

const { useState } = React;

export const ColorPicker = () => {

const [color, setColor] = useState("#ffffff");

const changeColor = () => {
  setColor(document.getElementById("color-input").value);
}

return (

  <div id="color-picker-container" style={{backgroundColor: color}}>

    <input id="color-input" type="color" value={color} onChange={changeColor}/>

  </div>

)

};