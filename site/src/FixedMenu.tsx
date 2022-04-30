import * as React from "react"
import Paper from "@mui/material/Paper"
import Divider from "@mui/material/Divider"
import Menu from "@mui/material/Menu"
import MenuList from "@mui/material/MenuList"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import Fade from "@mui/material/Fade"
import Box from "@mui/material/Box"

export default function FixeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <Box
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: "30px",
          height: "30px",
          backgroundImage: "url(/dot.svg)",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          position: "fixed",
          bottom: 0,
          right: 0,
          margin: 3,
        }}
      />
      <Paper sx={{ width: 320 }}>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuList dense>
            <Divider />

            <MenuItem onClick={handleClose}></MenuItem>
          </MenuList>
        </Menu>
      </Paper>
    </React.Fragment>
  )
}
