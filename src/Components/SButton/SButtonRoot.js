import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const SButtonRoot = styled(Button)(({ourstate})=>{

    const {login, add, edit} = ourstate
    const theme = useTheme()
    const {white,primary} = theme.palette

    let loginStyles = {
        color:white.main,
        backgroundColor: primary.main,
        fontFamily: "Raleway, Arial",
        fontSize: "17px",
        fontWeight: 500,
        height: "50px",
         "&:hover": {
        backgroundColor: primary.light ,
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
            backgroundColor: primary.light ,
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
            backgroundColor: primary.light ,
          },
    }
    return {
        ...(login && loginStyles ),
        ...(add && addStyle),
        ...(edit && editStyle)
    }
})
export default SButtonRoot;
