import { useEffect,useState } from "react";
import axios from "axios";


const useFetchPopular = () => {
    const [response, setResponse] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    process.env.NEXT_PUBLIC_GOOGLE_API_KEY;


    


    useEffect(() => {
        const getPopular =  () => {
            axios.get(YOUTUBE_VIDEOS_API)
            .then((res) => {
                console.log('called')
                setResponse(res.data.items)
                cache[YOUTUBE_VIDEOS_API] = res.data.items
                // console.log(res.data.items)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    
        }
    

        getPopular()
    }, [YOUTUBE_VIDEOS_API])

 
    return {response, error, isLoading}
}

export default useFetchPopular;
