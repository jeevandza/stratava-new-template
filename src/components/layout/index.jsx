import { Box } from '@chakra-ui/react';
import { Navbar } from './navbar';


export function Layout({children}){
    return(
        <Box >
            <Navbar/>
            <Box>
                {children}
            </Box>
            
        </Box >
    )
}