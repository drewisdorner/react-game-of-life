import React, { useCallback, useRef, useState } from "react";
import produce from "immer";
import useWindowDimensions from "./utils/windowSize";
import 'typeface-ibm-plex-mono';
import './App.css';

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];

const App: React.FC = () => {

  const { width, height } = useWindowDimensions();

  const [ numRows ] = useState(() => {
    return Math.floor(height / 23)
  });
  const [ numCols ] = useState(() => {
    return Math.floor(width / 21)
  });

  const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));    
    }

    return rows;
  }

  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    console.log("runSimulation!")
    if (!runningRef.current) {
      return;
    }

    setGrid(g => {
      console.log("setGrid!")
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }          
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, [numCols, numRows]);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      flexFlow: "column"
    }}>
      <div style={{
        display: "block"
      }}>
        <button
          className="btn"
          onClick={() => {
            console.log("start/stop click!")
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {running ? "stop" : "start"}
        </button>
        <button
          className="btn"
          onClick={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
              );
            }

            setGrid(rows);
          }}
        >
          random
        </button>
        <button
          className="btn"
          onClick={() => {
            setGrid(generateEmptyGrid());
          }}
        >
          clear
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "#732d91" : undefined,
                border: "solid 0.5px lightgray"
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
