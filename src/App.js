import { useEffect, useState } from "react";
import { Canva } from "./components/Canva/Canva";
import { Block } from "./App.styled";

function App() {
  // const [draw, setDraw] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // const [endX, setEndX] = useState(0);
  // const [endY, setEndY] = useState(0);
  // const [lastClick, setLastClick] = useState([0, 0]);
  const [clicks, setClicks] = useState(0);

  
  
  useEffect(() => { 
    function getCursorPosition(e) {  
      setX(e.offsetX);
      setY(e.offsetY);
      // const x = e.offsetX;
      // const y = e.offsetY;      
    }
  
    const canvas = document.getElementById('Canva');
    const context = canvas.getContext('2d');  
    canvas.addEventListener('click', drawLine, false);
    
    // let clicks = 0;
    const lastClick = [0, 0];


function drawLine(e) {   
  getCursorPosition(e);

    // const x = getCursorPosition(e)[0];
    // const y = getCursorPosition(e)[1];

    if (clicks !== 1) {
        // clicks++;
        setClicks(1);
    } else {
        context.beginPath();
        context.moveTo(lastClick[0], lastClick[1]);
        context.lineTo(x, y);

        context.strokeStyle = '#000000';
        context.stroke();
        context.closePath();

        // clicks = 0;
        setClicks(0);
    }

  lastClick[0] = x;
  lastClick[1] = y;
  // setLastClick([x, y]);
};        

  }, [clicks, x, y]);

    


  return (
    <Block>
      <Canva id="Canva"/>
    </Block>
  );
}

export default App;
