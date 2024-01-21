import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Products from './Products';
const Searchitem = () => {
  const {term} = useParams()
  const[filterData,setFilterData] = useState([]);

  useEffect(()=>{
    const filterData = () =>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      setFilterData(data)
  
    }
    filterData()
  },[term])


  return (
    <Products items={filterData}/>
  )
}

export default Searchitem