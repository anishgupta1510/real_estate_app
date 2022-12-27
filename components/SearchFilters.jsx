import React from 'react'
import { useState , useEffect } from 'react'
import { Flex , Select , Input , Spinner , Box , Icon , Button, filter } from '@chakra-ui/react'
import Router, { useRouter } from 'next/router'
import {MdCancel} from 'react-icons/md'
import Image from 'next/image'
import { filterData, getFilterValues } from '../utils/filterData'
const SearchFilters = () => {
    const [filters,setFilters] = useState(filterData);
    const router = useRouter();


    const searchProperties = (filterValues) => {
        const path = router.pathname;
        // console.log(path);
        const {query} = router;
        // console.log(query);
        const values = getFilterValues(filterValues);
        values.forEach((item)=>{
            console.log(item);
            if( item.value && filterValues?.[item.name] ){
            query[item.name] = item.value
            }
        })
        router.push({pathname:path,query})
    }

  return (
    <>
    
        <Flex backgroundColor={"gray.100"} p="4" justifyContent={"center"} flexWrap="wrap" >
            {filters.map((filter)=>(
                <Box key={filter.queryName} >
                    <Select w={"fit-content"} p="2" placeholder={filter.placeholder} onChange={(e)=>searchProperties({[filter.queryName]:e.target.value})} >
                        {filter?.items?.map((item)=>(
                            <option value={item.value} key={item.value}  >{item.name}</option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    
    </>
  )
}

export default SearchFilters