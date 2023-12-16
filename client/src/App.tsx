import { useEffect, useState } from 'react';
import './App.css';
import Board from './component/Board';

const CanvasDrawing = () => {

  const [brushColor, setBrushColor] = useState('black');
  const [brushSize, setBrushSize] = useState<number>(5);

  useEffect(() => {
    console.log("CanvasDrawing ", brushSize);
  }, [brushSize]);

  return (
    <div className="App" >
      <h1>Collaborative Whiteboard</h1>
      <div>
        <Board brushColor={brushColor} brushSize={brushSize} />
        <div className='tools' >
          <div>
            <span>Color: </span>
            <input type="color" value={brushColor} onChange={(e) => setBrushColor(e.target.value)} />
          </div>
          <div>
            <span>Size: </span>
            <input type="range" color='#fac176'
              min="1" max="100" value={brushSize} onChange={(e) => setBrushSize(Number(e.target.value))} />
            <span>{brushSize}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasDrawing;
