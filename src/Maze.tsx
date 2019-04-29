import React, { useState, useCallback, useEffect } from 'react'
import './Maze.css'

export interface MazeProps {
  rows: number
  cols: number
  cellWidth: number
  cellHeight: number
  bgColor1: string
  bgColor2: string
}

export const Maze: React.FunctionComponent<MazeProps> =
  ({ rows, cols, cellWidth, cellHeight, bgColor1, bgColor2 }) => {
    const width = cols * cellWidth;
    const height = rows * cellHeight;

    let [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

    const canvasRef = useCallback((canvas: HTMLCanvasElement) => {
      setCtx(canvas.getContext('2d'));
    }, []);

    useEffect(() => {
      if (!ctx) {
        return;
      }

      for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
          const x = col * cellWidth;
          const y = row * cellHeight;
          if ((row + col) % 2 === 0) {
            ctx.fillStyle = bgColor1;
          } else {
            ctx.fillStyle = bgColor2;
          }
          ctx.fillRect(x, y, cellWidth, cellHeight);
        }
      }
    }, [rows, cols, cellWidth, cellHeight, bgColor1, bgColor2, ctx])

    return (
      <div className='Maze'>
        <canvas ref={canvasRef} width={width} height={height}></canvas>
      </div>
    )
  }
