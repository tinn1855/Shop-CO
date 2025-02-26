import { useEffect, useState } from "react"

export function UseQuerySingleCategory(categoryId) {
    const [singleCategory, setSingleCategory] = useState([])

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}`)
            .then(res => res.json())
            .then(data => setSingleCategory(data))
            .catch(error => console.log("Error fetching data:", error))
    },[categoryId])

    return(
        {
            data: singleCategory
        }
    )
}