import styled from "@emotion/styled";
import colors from "../../assets/theme/base/colors";
import { Button } from "@mui/material";

const SButtonRoot = styled(Button)(({onClick})=>{
    var loginstyles = {
        color: colors.black.main
    }
    return {
        ...(onClick && loginstyles )
    }
})
export default SButtonRoot;
