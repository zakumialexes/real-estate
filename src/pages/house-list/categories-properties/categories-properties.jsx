import cPStyle from "./categories-properties.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";

const categoryList = [{
    name: "apartment", properties: 1,
}, {
    name: "condo", properties: 2,
}, {
    name: "family house", properties: 4,
}, {
    name: "modern villa", properties: 12,
}, {
    name: "town house", properties: 65,
}]

export default function CategoriesProperties() {
    return (
        <div className={cPStyle.categoriesPropertiesContainer}>
            <h4 className={cPStyle.header}>Categories Property</h4>
            <div>
                <ul className={cPStyle.list}>
                    {categoryList.map((category,i)=>(
                        <li key={i}>
                            <a href="#"><FontAwesomeIcon icon={faCaretRight}/>{category.name}
                                <span className="float-right">{category.properties} properties</span></a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}