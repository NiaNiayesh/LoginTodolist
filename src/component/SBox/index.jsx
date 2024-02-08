import { Box } from "@mui/material"

const SBox = ({sx,...other}) => {
    return <Box sx={sx} {...other}></Box>
}

export default SBox