import { Canvas } from "./Canva.styled";


export const Canva = function () { 


// canvas.addEventListener('mousedown', function (e) {   
//           mouse.x = e.offsetX;
//           mouse.y = e.offsetY;          
//           context.beginPath();
//           context.moveTo(mouse.x, mouse.y);
//           setDraw(true);    

        
// 			});
//       canvas.addEventListener("mouseup", function(e){
        
//        const x = e.offsetX;
//        const y = e.offsetY;
//         context.lineTo(x, y);
//         context.stroke();
//         context.closePath();
//         setDraw(false);
//       });
    return (
        <Canvas id="Canva"></Canvas>
    );
}