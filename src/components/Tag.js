
import React, {useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const Tag = () => {

    const [tag, setTag] = useState("car");

    const {gif, loading, fetchData} = useGif(tag);

    

  return (
    <div className="flex flex-col items-center bg-green-700 w-full rounded-lg p-5 gap-4">
      <h1 className="mx-auto text-center rounded-lg mt-5 text-2xl font-semibold underline capitalize">Random {tag} GIF</h1>
        {
            loading ? (<Spinner/>) : (<img src= {gif} width="450" loading="lazy" className="max-h-[450px]"
            />)
        }

      <input type="text"
             value={tag}
             onChange={ (event)=>setTag(event.target.value)}
             className="bg-white w-7/12 rounded-lg p-2 text-center capitalize"
      />  
      <button onClick={()=> fetchData(tag)}
        className="bg-white w-7/12 rounded-lg p-2"
      >Generate</button>
    </div>
  )
}

export default Tag
