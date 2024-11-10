import { SxProps, Theme } from "@mui/material";

const primaryButtonStyle: SxProps<Theme> = {
    backgroundColor: "#F0FAFC",
    borderRadius: "22px",
    minWidth: "100px",
    flex: 1,
    //border: "0.5px solid #000000", 
    color: "#E89465", 
    fontWeight: 700, 
    padding: "8px 16px", 
    ":hover": { 
        backgroundColor: "#E0F5F8", 
    },
}

export default primaryButtonStyle;