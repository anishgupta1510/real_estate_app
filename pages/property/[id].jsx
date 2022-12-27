import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGrid, BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { baseUrl , fetchApi } from '../../utils/fetchApi';

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
    <>
    
        <Box maxWidth={"1000"} m="auto" p="4" >
            {title}
        </Box>
    
    </>
)

export default PropertyDetails;


export async function getServerSideProps({params:{id}}){
    const data = await fetchApi( `${baseUrl}/properties/detail?externalID=${id}` )

    return {
        props:{
            propertyDetails:data
        }
    }
}