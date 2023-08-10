import {useState, useEffect} from 'react'

const useSpeaker = () => {

    const [speakers, setSpeakers] = useState([])

    useEffect(()=>{
        async function fetchData(){
            try {
                const res = await fetch('/speakers.json')
                const data = await res.json();
                setSpeakers(data);
            } catch (error) {
                console.log("Error fetching data", error)
            }
        }
        fetchData();
    }, [])

  return speakers
}

export default useSpeaker
