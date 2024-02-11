import styled from "@emotion/styled";
import { ListItem } from "@mui/material";
import colors from "../../assets/theme/base/colors";

const SListItemRoot = styled(ListItem)(({ourstate}) => {
    const {todosList} = ourstate

    let todosListStyle = {
        padding: "10px",
        marginTop: "10px",
        borderRadius: "5px",
        backgroundColor: colors.secondary.light
        }
    return {
        ...(todosList && todosListStyle)
    }
})

export default SListItemRoot