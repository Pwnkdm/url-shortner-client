import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { geturlData } from '../Redux/actions';
import ShortUrl from './ShortUrl';

const HomePage = () => {
      const disptch = useDispatch();

    useEffect(() => {
    //   disptch(geturlData('UBqna1kL'));        
    }, [disptch])
    
  return (
    <div>
        <ShortUrl/>
    </div>
  )
}

export default HomePage
