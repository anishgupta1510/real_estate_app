import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '401548148bmshfb2e5512d33344ap1dc253jsn0ac6af503c09',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}