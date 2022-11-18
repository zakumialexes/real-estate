import React, {useEffect, useState} from 'react';
import rVStyle from "./recently-viewed.module.scss"

function RecentlyViewed(props) {
    const [houses, setHouses] = useState([])
    useEffect(() => {
        fetch("http://localhost:3500/houses?=_limit=3").then(response => response.json()).then(data => {
            setHouses(data);
        })
    }, [])
    return (
        <div className={rVStyle.container}>
            <h4>Recently Viewed</h4>
            <div className={rVStyle.housesContainer}>
                {houses.map((house,i)=>(
                    <div className={rVStyle.featuredHouse} key={i}>
                        <div className={rVStyle.imgContainer}><img src={house.photos[0]} alt=""/></div>
                        <div className={rVStyle.content}>
                            <h4>{house.name}</h4>
                            <a href="">${house.rent} /<small>mo</small></a>
                            <ul className={rVStyle.infos}>
                                <li>Beds: 4</li>
                                <li>Baths: 2</li>
                                <li>Sq Ft: 5280</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentlyViewed;