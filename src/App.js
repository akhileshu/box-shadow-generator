import { useState } from "react";
import "./App.css";

function App() {
  const [offsetx, setoffsetx] = useState(0);
  const [offsety, setoffsety] = useState(0);
  const [blurradius, setblurradius] = useState(10);
  const [spreadradius, setspreadradius] = useState(10);
  const [color, setcolor] = useState("black");
  const [checkon, setcheckon] = useState(false)

  return (
    <>
    <h1>box shadow generator</h1>
    <div className="app">
    
      <div className="controls ">
        <div>
        offset x : {offsetx}
          <input
          className="form-range"
            type="range"
            min={-200}
            max={200}
            value={offsetx}
            onChange={(e) => setoffsetx(e.target.value)}
          />
        </div>
        <div>offset y : {offsety}
          <input
          className="form-range"
            type="range"
            min={-200}
            max={200}
            value={offsety}
            onChange={(e) => setoffsety(e.target.value)}
          />
        </div>
        <div>blur radius : {blurradius}
          <input
          className="form-range"
            type="range"
            min={-200}
            max={200}
            value={blurradius}
            onChange={(e) => setblurradius(e.target.value)}
          />
        </div>
        <div>spread radius : {spreadradius}
          <input
          className="form-range"
            type="range"
            min={-200}
            max={200}
            value={spreadradius}
            onChange={(e) => setspreadradius(e.target.value)}
          />
        </div>
        <div>color : {color}
          <input
          className="form-range"
            type="color"
            value={color}
            onChange={(e) => setcolor(e.target.value)}
          />
        </div>
        <div>
          <label>
           check for inset | uncheck for outline{' '}
            <input
              type="checkbox"
              checked={checkon}
              onChange={() => setcheckon(!checkon)}
            />
            
          </label>
        </div>
      </div>
      <div
        className="output"
        style={{
          boxShadow: ` ${checkon ? "inset":""} ${offsetx}px ${offsety}px ${blurradius}px ${spreadradius}px ${color}`,
        }}
      ></div>
      <span>box-shadow: {`${checkon ? "inset":""} ${offsetx}px ${offsety}px ${blurradius}px ${spreadradius}px ${color};`}</span>
    </div>
    </>
  );
}

export default App;
