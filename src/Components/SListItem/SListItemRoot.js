import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { ListItem } from "@mui/material";

const SListItemRoot = styled(ListItem)(({ourstate}) => {
    const {todosList} = ourstate
    const theme = useTheme()
    const {secondary} = theme.palette
    
    let todosListStyle = {
        padding: "10px",
        marginTop: "10px",
        borderRadius: "5px",
        backgroundColor: secondary.light
        }
    return {
        ...(todosList && todosListStyle)
    }
})

export default SListItemRoot