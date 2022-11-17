import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
export function Home(){
    const {data: catData, isLoading, refetch} = useQuery(["cat"], () =>{
        return axios.get("https://catfact.ninja/fact").then((res) =>{
            return res.data
        })
    })

    if(isLoading)
    {
        return <h1 className="App">...Loading</h1>
    }

    return(//if data is not null then return data.fact
        <div>
            <h1>THIS IS THE HOME PAGE</h1>
            <p>{catData?.fact}</p> 
            <button onClick={refetch}>generate fact</button>
        </div>
    )
}