import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components";
import { Toolbar } from "@mui/material";

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex'}} className="animate__animated animate__fadeIn animate__faster">

        {/* Navbar drawerWidth */}
        <NavBar drawerWidth={ drawerWidth }/>
        {/* SideBar drawerWidth*/}
        <SideBar drawerWidth={ drawerWidth }/>
        
        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 0}}
        >
            <Toolbar/>
            {children}

        </Box>

    </Box>
  )
}
