import React, { useEffect, useState } from 'react'
import '../Arrivals/Arrivals.css'
function Arrivals() {
    const [product, setproduct] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        fetch("http://localhost:3000/")
            .then(res => res.json())
            .then(data => setproduct(data))


    }, [])
console.log(product)
    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className="cards">

                {
                    product
                        .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))

                        .map((x) => (
                            <div className="card" key={x._id}>
                                <p>{x.title}</p>
                                <p>{x.price}</p>
                            </div>


                        ))
                }
            </div>


        </>
    )
}

export default Arrivals