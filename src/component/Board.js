"use client";
import React, { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';

const Board = () => {
  const canvasRef = useRef(null);

  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [brushSize, setBrushSize] = useState(2);
  const [brushColor, setBrushColor] = useState("#000000");

  const handleSizeToggle = () => {
    setIsSizeOpen(!isSizeOpen);
  };

  const handleColorToggle = () => {
    setIsColorOpen(!isColorOpen);
  };

  const handleSizeSelect = (size) => {
    setBrushSize(size);
    setIsSizeOpen(false);
  };

  const handleColorSelect = (color) => {
    setBrushColor(color);
    setIsColorOpen(false);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">brushyy - Whiteboard</h1>

      {/* Brush Size Dropdown */}
      <div className="relative inline-block mb-6">
        <button
          onClick={handleSizeToggle}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 focus:outline-none"
        >
          Brush Size: {brushSize}
        </button>

        {isSizeOpen && (
          <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-gray-300 z-10">
            <ul className="py-1">
              {[2, 5, 10, 15, 20].map((size) => (
                <li
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer transition duration-150"
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Brush Color Dropdown */}
      <div className="relative inline-block mb-6">
        <button
          onClick={handleColorToggle}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 focus:outline-none"
        >
          Brush Color
        </button>

        {isColorOpen && (
          <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-gray-300 z-10">
            <ul className="py-1">
              {[
                { color: "#FF0000", label: "Red" },
                { color: "#0000FF", label: "Blue" },
                { color: "#FFFF00", label: "Yellow" },
                { color: "#008000", label: "Green" },
                { color: "#000000", label: "Black" },
              ].map(({ color, label }) => (
                <li
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className="px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-blue-100 cursor-pointer transition duration-150"
                >
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                  ></span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Canvas */}
      <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <CanvasDraw
          ref={canvasRef}
          brushRadius={brushSize}
          lazyRadius={0}
          canvasWidth={800}
          canvasHeight={600}
          brushColor={brushColor}
          className="rounded-lg"
        />
      </div>

      {/* Control buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => canvasRef.current.undo()}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200 focus:outline-none"
        >
          Undo
        </button>
        <button
          onClick={() => canvasRef.current.clear()}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition duration-200 focus:outline-none"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Board;
