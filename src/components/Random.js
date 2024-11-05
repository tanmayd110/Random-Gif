
import React from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const Random = () => {

    
    
    const {gif, loading, fetchData} = useGif();




    function clickHandler(){
        fetchData();

    }

  return (
    <div className="flex flex-col items-center bg-blue-700 w-full rounded-lg p-5 gap-4">
      <h1 className="mx-auto text-center rounded-lg mt-5 text-2xl font-semibold underline">Random GIF</h1>
        {
            loading ? (<Spinner/>) : (<img src= {gif} width="450"
            className="max-h-[450px]"
            loading="lazy"/>)
        }
      <button onClick={clickHandler}
        className="bg-white w-7/12 rounded-lg p-2"
      >Generate</button>
    </div>
  )
}

export default Random
