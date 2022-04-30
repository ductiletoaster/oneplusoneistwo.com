import * as React from 'react';
import Box from '@mui/material/Box';

export default function Flower() {
  return (
    <Box style={{
      width: "100%",
      height: "400px",
      backgroundImage: "url(/grayscale-flower-1.svg)",
      backgroundPosition: "left bottom",
      backgroundRepeat: "repeat-x",
      backgroundSize: "contain",
      position: "fixed",
      bottom: "64px",
      left: 0
    }}/>
  );
}
