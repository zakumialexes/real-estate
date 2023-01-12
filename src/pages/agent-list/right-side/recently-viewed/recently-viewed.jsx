import rVStyle from "./recently-viewed.module.scss"
import { useGetByParametersQuery } from "../../../../api/api"

function RecentlyViewed(props) {
    const { data: houses, isSuccess } = useGetByParametersQuery("/houses?_limit=3")
    if (isSuccess)
        return (
            <div className={rVStyle.container}>
                <h4>Recently Viewed</h4>
                <div className={rVStyle.housesContainer}>
                    {houses.map((house, i) => (
                        <div className={rVStyle.featuredHouse} key={i}>
                            <div className={rVStyle.imgContainer}>
                                <img src={house.photos[0]} alt="" />
                            </div>
                            <div className={rVStyle.content}>
                                <h4>{house.name}</h4>
                                <a href="">
                                    ${house.rent} /<small>mo</small>
                                </a>
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
        )
}

export default RecentlyViewed
