import "./carousel-component.css"
import "../../common/style.css"
import leftArrow from "../../assets/images/left-arrow.svg"
import rightArrow from "../../assets/images/right-arrow.svg"


const carImgIdPref = "carImgId";
let currentScroll = 0;

function getImageUrl(loc,index) {
    return  window.location.href + "/carousels/" + loc + "/" + index + ".webp"; 

}

function getImageTag(loc, index) {
    const imgUrl = getImageUrl(loc,index);
    const styleStr = {"backgroundImage" : "url(" + imgUrl + ")"};
    return <div className="car-img d-inline-block" style={styleStr} key={index} id={carImgIdPref + index}></div>
}

function getImageTags(loc) {
    const imageTags = [];
    for(let i=0; i<7; i++) {
        imageTags.push(getImageTag(loc,i+1));
    }
    return imageTags;
}
export function CarouselComponent(props) {

    return <div className="car-anchor position-relative">
        <div className="left-arr-wrapper-pos h-100 position-absolute d-flex align-items-center show-on-hover-on-anchor">
            <button className="naked-btn rounded-circle nav-btn-size" onClick = {() => {leftClick()}}>
                <img className="nav-arrow-size" src={leftArrow} alt="<"></img>
            </button>
        </div>
        <div className="right-arr-wrapper-pos h-100 position-absolute d-flex align-items-center show-on-hover-on-anchor">
            <button className="naked-btn rounded-circle nav-btn-size" onClick = {() => {rightClick()}}>
                <img className="nav-arrow-size" src={rightArrow} alt="<"></img>
            </button>
        </div>
        <div className="right-arr-wrapper-pos h-100 position-absolute bg1">
        </div>
        <div className="car-viewbox d-flex  hide-scroll">
                {getImageTags(props.details.location)}
        </div>
    </div>
}

function leftClick() {
    if(currentScroll !== 0) {
        currentScroll -= 1;
    }
    
    findAndScroll(currentScroll);
}

function rightClick() {
    if(currentScroll !== 6) {
        currentScroll += 1;
    }

    findAndScroll(currentScroll);
}

function findAndScroll(scrollTo) {
    const scrollId = carImgIdPref + (scrollTo+1);
    const scrollEle = document.getElementById(scrollId);
    scrollEle.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}