import { useEffect,useState } from "react";
import axios from "axios";
import { CallEnd } from "styled-icons/material";


const useFetchVideo = (query) => {
    const [response, setResponse] = useState([])
    const [related, setRelated] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const YOUTUBE_VIDEOS_API =
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${query}&key=` +
    process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    const YOUTUBE_RELATED_API=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&relatedToVideoId=${query}&type=video&key=`+process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

   

    useEffect(() => {
        const getPopular =  () => {
            axios.get(YOUTUBE_VIDEOS_API)
            .then((res) => {
                setResponse(res.data.items)
            })
            .catch((err) => {
                setError(err)
            })
        }
        const getRelated = () => {
            fetch(YOUTUBE_RELATED_API)
            .then((res) => res.json())
            .then((res) => {
                setRelated(res.items)
                setIsLoading(false)
            })
        }

    
        getPopular()
        getRelated()
    }, [YOUTUBE_VIDEOS_API,YOUTUBE_RELATED_API])

 
    

    


    


    
    return {response,related, error, isLoading}
}

export default useFetchVideo;
