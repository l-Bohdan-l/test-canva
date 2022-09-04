// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";
import { Canva } from "./components/Canva/Canva";
import { Block } from "./App.styled";

function App() {
  // const [draw, setDraw] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [startY, setStartY] = useState(0);
  // const [endX, setEndX] = useState(0);
  // const [endY, setEndY] = useState(0);
  // const [lastClick, setLastClick] = useState([0, 0]);

  function getCursorPosition(e) {
  // var x;
  // var y;
    // setStartX(e.offsetX);
    // setStartY(e.offsetY);
    const x = e.offsetX;
    const y = e.offsetY;
    const arr = [x, y];
    
    return arr
}

useEffect(() => { 
    const canvas = document.getElementById('Canva');
    const context = canvas.getContext('2d');
    canvas.addEventListener('click', drawLine, false);
    
    let clicks = 0;
    const lastClick = [0, 0];


function drawLine(e) {
    // context = this.getContext('2d');
  getCursorPosition(e);

    const x = getCursorPosition(e)[0];
    const y = getCursorPosition(e)[1];

    if (clicks !== 1) {
        clicks++;
    } else {
        context.beginPath();
        context.moveTo(lastClick[0], lastClick[1]);
        context.lineTo(x, y);

        context.strokeStyle = '#000000';
        context.stroke();
        context.closePath();

        clicks = 0;
    }

    // lastClick = [x, y];
  lastClick[0] = x;
  lastClick[1] = y;
};
          

    // const mouse = { x:0, y:0};

    // function firstClick(e) {      
    //     console.log('1', firstClick);
    //       mouse.x = e.offsetX;
    //       mouse.y = e.offsetY;          
    //       context.beginPath();
    //       context.moveTo(mouse.x, mouse.y);
    //       setDraw(true);    
    // };

    // function secondClick(e) {      
    //     console.log('2', secondClick);
    //     const x = e.offsetX;
    //     const y = e.offsetY;
    //     context.lineTo(x, y);
    //     context.stroke();
    //     context.closePath();
    //     setDraw(false);     
      
    // }
    // canvas.addEventListener('mousedown', firstClick);
    // canvas.addEventListener('mouseup', secondClick);
    
    
    // canvas.addEventListener("mouseup", function(e){
        
    //    const x = e.offsetX;
    //    const y = e.offsetY;
    //     context.lineTo(x, y);
    //     context.stroke();
    //     context.closePath();
    //     setDraw(false);
    //   });
      // canvas.addEventListener("mousemove", function(e){
      //   // console.log('x', e.pageX, 'y', e.pageY);
      //   // console.log('x1', e.offsetX, 'y1', e.offsetY);
      // 	if(draw===true){
        
      // 		const x = e.offsetX;
      //     const y = e.offsetY;
      //     console.log('x: ', x, 'y: ', y);
      // 		context.lineTo(x, y);
      // 		context.stroke();
      // 	}
      // });
  }, []);

    


  return (
    <Block>
      <Canva id="Canva"/>
    </Block>
  );
}

export default App;
