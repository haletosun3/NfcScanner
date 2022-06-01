import {useState} from 'react'
import axios from 'axios';

const usePost = () => {

    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const post = async (url, apiData) => {
        try {
            setLoading(true)
            const {data:responsData} = await axios.post(url,apiData);
            setData(responsData);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }
    return {data,loading,error,post}
}


export default usePost
