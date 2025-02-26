import { useEffect, useState } from "react"

export function useQueryCategories() {

    const [categories, setCategories] = useState([])
    
    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/categories/')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log('Error fetching data:', error))
    },[])    

    return {
      data: categories
    }
}