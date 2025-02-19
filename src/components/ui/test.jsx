import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function Test() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => setProduct(data))
          .catch((error) => console.error('Error fetching product:', error));
      }, [id]);
    return (
        <div className="container mx-auto px-5 mt-10">
            <div className="grid grid-cols-2 gap-10">
                <div className="col-span-1 grid grid-cols-4 gap-4">
                    <div className="col-span-1 grid grid-rows-3 gap-4">
                        <div className="row-span-1">
                            <img src="/images/tshirt.png" alt="" />
                        </div>
                        <div className="row-span-1">
                            <img src="/images/tshirt.png" alt="" />
                        </div>
                        <div className="row-span-1">
                            <img src="/images/tshirt.png" alt="" />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <img src="/images/tshirt.png" alt="" />
                    </div>
                </div>
                <div className="col-span-1">
                    
                </div>
            </div>
        </div>
    )
}