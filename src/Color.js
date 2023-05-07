import React from 'react';
const ColorPalette = () => {
  const app = document.getElementById('root');
  const colors = ['white', 'red', 'blue', 'yellow'];
  return (
    <>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => {
            app.style.backgroundColor = color;
          }}
        >
          {color}
        </button>
      ))}
      <hr />
    </>
  );
};
export default ColorPalette;
