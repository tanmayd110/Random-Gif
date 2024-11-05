import axios from 'axios';
import { useEffect, useState } from 'react'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif, setGif]= useState('');
    const [loading, setLoading] = useState(false);
   

   async function fetchData(tag){
        setLoading(true);
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : `${url}`);
        const image_source = data.data.images.downsized_large.url;
        setGif(image_source);
        setLoading(false);
    }
    

    // const fetchData = async (tag) => {
    //     setLoading(true);
    //     let retryCount = 0;
    //     const maxRetries = 5;

    //     while (retryCount < maxRetries) {
    //         try {
    //             const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    //             const image_source = data.data.images.downsized_large.url;
    //             setGif(image_source);
    //             break; // Exit the loop on successful request
    //         } catch (error) {
    //             if (error.response && error.response.status === 429) {
    //                 retryCount++;
    //                 const waitTime = Math.pow(2, retryCount) * 1000; // Exponential backoff
    //                 console.log(`Rate limit hit. Retrying in ${waitTime / 1000} seconds...`);
    //                 await new Promise(resolve => setTimeout(resolve, waitTime));
    //             } else {
    //                 console.error('Error fetching data:', error);
    //                 break; // Exit the loop on other errors
    //             }
    //         }
    //     }

    //     setLoading(false);
    // };

    useEffect(()=>{
        fetchData(tag);
    }, [])

    

  return{gif, loading, fetchData};
}

export default useGif;
