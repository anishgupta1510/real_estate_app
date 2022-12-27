import React from 'react'
import Link from 'next/link'
import { Menu , MenuButton , MenuList , MenuItem , IconButton , Flex , Box , Spacer } from '@chakra-ui/react' 
import {FcMenu , FcHome , FcAbout} from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import {Fikey} from 'react-icons/fi'
const Navbar = () => {
  return (
    <>
    
        <Flex p={"2"} borderBottom="1px" borderColor={"gray.100"}>
            <Box fontSize={"3xl"} color="blue.400" fontWeight={"bold"}>
                <Link href={"/"} paddingLeft="2">Realsearch</Link>
            </Box>
            <Spacer/>
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400"/>
                    <MenuList>
                        <Link href={"/"} passHref >
                            <MenuItem icon={<FcHome/>} >Home</MenuItem>
                        </Link>
                        <Link href={"/search"} passHref >
                            <MenuItem icon={<BsSearch/>} >search</MenuItem>
                        </Link>
                        <Link href={"/search?purpose=for-sale"} passHref >
                            <MenuItem icon={<FcAbout/>} >For Sale</MenuItem>
                        </Link>
                        <Link href={"/search?purpose=for-rent"} passHref >
                            <MenuItem icon={<FcHome/>} >For Rent</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    
    </>
  )
}

export default Navbar