import "./../../common/style.css"
import "./product-card-component.css"
import { CarouselComponent } from "../carousel-component/CarouselComponent"
import ratingIcon from "../../assets/images/rating-icon.svg"

function getLabelType1Tag(details) {
    return <div className="label-grid-type-1">
            <div className="d-flex justify-content-between label-emphasis-font">
                <div className="text-truncate">{details.title}</div>
                <div>
                    <img src={ratingIcon} alt="*" className="rating-icon-dims align-baseline me-2"></img>
                    {details.rating}
                </div>
            </div>
            <div className="label-muted-font text-truncate">{details.distance} kilometers away</div>
            <div className="label-muted-font text-truncate">{details.duration}</div>
            <div className="lh-200 price-mt">
                <span className="label-emphasis-font me-1 text-truncate">
                    ₹{details.price}  
                </span>
                night
            </div>
        </div>
}

function getLabelType2Tag(details) {
    return <div className="label-grid-type-2" >
        <div className="label-emphasis-font text-truncate">{details.title}</div>
        <div className="label-muted-font text-truncate">{details.subtitle1}</div>
        <div className="label-emphasis-font text-truncate">{details.bookingStatus}</div>
    </div>
}

export function ProductCardComponent(props) {
    const imgDetails = mapToImgDetails(props.details);
    const labelType = props.details.displayType;
    const labelTag = labelType === 1? getLabelType1Tag(props.details) : getLabelType2Tag(props.details)
    return <div>
        <CarouselComponent key={props.id} details={imgDetails}></CarouselComponent>
        {labelTag}
    </div>

}

function mapToImgDetails(detail) {
    return {
        location: detail.imgs
    }
}