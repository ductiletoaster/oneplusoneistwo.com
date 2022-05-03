import * as React from "react"
import Box from "@mui/material/Box"

interface Props {
  height?: string,
  width?: string,
}

export default function Flower(props: Props) {
  const {
    height = "100px",
    width = "50px"
  } = props;
  return (
    <Box
      sx={{
        height,
        backgroundImage: "url(/grayscale-flower-1.svg)",
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        marginTop: 4,
        marginLeft: "auto",
        marginRight: "auto",
        width,
      }}
    />
  )
}
