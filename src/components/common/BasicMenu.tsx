import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createStyles, mergeStyles, StyleProps } from "@/styles/styling";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode[];
  buttonContent: ReactNode;
  menuItemStyleOverrides?: StyleProps;
}

const styles = createStyles({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "hsla(0, 0%, 25%, 0.98)",
    },
  },
  menuItem: {
    backgroundColor: "hsla(0, 0%, 0%, 0)",
    color: "white",
    padding: 0,
    height: "1em",
  },
});

const BasicMenu = ({
  children,
  buttonContent,
  menuItemStyleOverrides,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemStyles = menuItemStyleOverrides
    ? mergeStyles(styles.menuItem, menuItemStyleOverrides)
    : styles.menuItem;

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {buttonContent}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={styles.menu}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        {children.map((element, index) => (
          <MenuItem key={index} onClick={handleClose} sx={menuItemStyles}>
            {element}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default BasicMenu;
