import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const SButtonRoot = styled(Button)(({ourstate})=>{

    const {login,logout, add, edit,confirm} = ourstate
    const theme = useTheme()
    const {white,black,primary} = theme.palette

    let loginStyles = {
        color:white.main,
        backgroundColor: primary.main,
        fontFamily: "Raleway, Arial",
        fontSize: "17px",
        fontWeight: 500,
        height: "50px",
         "&:hover": {
        backgroundColor: primary.dark ,
      },
    }
    let addStyle = {
        color: white.main,
        backgroundColor: primary.main,
        fontFamily: "Raleway, Arial",
        fontSize: "18px",
        height: "60px",
        width: "90px",
        "&:hover": {
            backgroundColor: primary.dark ,
          },
    }
    let editStyle = {
        color: white.main,
        backgroundColor: primary.main,
        fontFamily: "Raleway, Arial",
        fontSize: "18px",
        height: "60px",
        width: "90px",
        "&:hover": {
            backgroundColor: primary.dark ,
          },
    }
    let logOutStyle = {
        color: black.main,
        backgroundColor: primary.light,
        fontFamily: "Raleway, Arial",
        fontSize: "18px",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: primary.dark,
          },
    }
    let confirmStyle = {
        color: white.main,
        fontFamily: "Raleway, Arial",
        fontSize: "15px",
        fontWeight: "bold",
        width: "110px",
        "&:hover": {
            backgroundColor: primary.dark ,
          }
    }
    return {
        ...(login && loginStyles ),
        ...(add && addStyle),
        ...(edit && editStyle),
        ...(logout && logOutStyle),
        ...(confirm && confirmStyle)
    }
})
export default SButtonRoot;
