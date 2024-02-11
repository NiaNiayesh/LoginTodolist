import styled from "@emotion/styled";
import colors from "../../assets/theme/base/colors";
import { Button } from "@mui/material";

const SButtonRoot = styled(Button)(({state})=>{

    const {login, add, edit} = state

    let loginStyles = {
        color: colors.white.main,
        backgroundColor: colors.primary.main,
        fontFamily: "Raleway, Arial",
        fontSize: "17px",
        fontWeight: 500,
        height: "50px",
         "&:hover": {
        backgroundColor: colors.primary.light ,
      },
    }
    let addStyle = {
        color: colors.white.main,
        backgroundColor: colors.primary.main,
        fontFamily: "Raleway, Arial",
        fontSize: "18px",
        height: "60px",
        width: "90px",
        "&:hover": {
            backgroundColor: colors.primary.light ,
          },
    }
    let editStyle = {
        color: colors.white.main,
        backgroundColor: colors.primary.main,
        fontFamily: "Raleway, Arial",
        fontSize: "18px",
        height: "60px",
        width: "90px",
        "&:hover": {
            backgroundColor: colors.primary.light ,
          },
    }
    return {
        ...(login && loginStyles ),
        ...(add && addStyle),
        ...(edit && editStyle)
    }
})
export default SButtonRoot;
