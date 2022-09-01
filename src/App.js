// import logo from './logo.svg';
// import './App.css';
import { useEffect } from "react";
import { Canva } from "./components/Canva/Canva";
function App() {
  useEffect(() => { 
    const canvas = document.getElementById('Canva');
    console.dir(canvas);
    const context = canvas.getContext('2d');
    context.moveTo(0,0);
    context.lineWidth = 1; // толщина линии

    canvas.addEventListener('click', draw);

    function draw(e) {
      const x = e.offsetX;
      const y = e.offsetY;
      context.lineTo(x, y); //рисуем линию
      context.stroke();
    }
  }, []);
  return (
    <div className="App">
      <Canva id="Canva"/>
    </div>
  );
}

export default App;
