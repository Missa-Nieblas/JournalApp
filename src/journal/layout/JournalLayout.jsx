import { Box } from "@mui/system"
import { NavBar } from "../components";

const drawerWidth = 241;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex'}}>

        {/* Navbar drawerWidth */}
        <NavBar drawerWidth={ drawerWidth }/>
        {/* SideBar drawerWidth*/}

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3}}
        >
            {/* Toolbar */}
            {children}

        </Box>

    </Box>
  )
}
