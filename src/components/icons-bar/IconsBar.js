import "./icons-bar.css"
import "./../../common/style.css"
import leftArrow from "./../../assets/images/left-arrow.svg"
import rightArrow from "./../../assets/images/right-arrow.svg"

const iconsList = [
    {
        name: "Icons",
        label: "icons.png"
    },
    {
        name: "Bed & breakfasts",
        label: "bed.jpg"
    },
    {
        name: "Camping",
        label: "camping.jpg"
    },
    {
        name: "Beach",
        label: "beach.jpg"
    },
    {
        name: "Lake",
        label: "lake.jpg"
    },
    {
        name: "Amazing Pools",
        label: "amazing_pools.jpg"
    },
    {
        name: "Amazing Views",
        label: "amazing_views.jpg"
    },
    {
        name: "Rooms",
        label: "rooms.jpg"
    },
    {
        name: "Containers",
        label: "containers.jpg"
    },
    {
        name: "Farms",
        label: "farms.jpg"
    },
    {
        name: "Luxe",
        label: "luxe.jpg"
    },
    {
        name: "Off-the-grid",
        label: "offthegrid.jpg"
    },
    {
        name: "Treehouses",
        label: "treehouses.jpg"
    },
    {
        name: "Castles",
        label: "castles.jpg"
    },
    {
        name: "BeachFront",
        label: "beachfronts.jpg"
    }
]

function getImageUrl(label) {
    return "http://localhost:3000/iconBar/" + label
}

const scrollIdPrefix = "scrollId"
function getImageCard(details,key) {
    let scrollId = null;
    if ((key % 5 === 0) ) {
        scrollId = scrollIdPrefix + Math.floor(key/5);
    } else if((key === iconsList.length - 1)) {
        scrollId = scrollIdPrefix + (Math.floor(key/5) + 1);
    }
    return <div className="image-card-border icon-bar-height icon-card-m" key={key} id={scrollId}>
        <div className="image-card-h image-card-pm">
            <div className=" m-auto h-50 w-fit-content">
                <img src={getImageUrl(details.label)} alt={details.name} className= "icon-bar-image-dims"></img>
            </div>
            <div className="image-label-font h-50 d-flex align-items-end ">
                <div className="text-nowrap">
                    {details.name}
                </div>
            </div>
        </div>
    </div>
}

let currentScroll = 0;

function handleScroll() {
    console.log('handle scroll called');

}

function leftClick() {
    if(currentScroll !== 0) {
        currentScroll -= 1;
    }
    
    findAndScroll(currentScroll);
}

function rightClick() {
    if(currentScroll !== Math.floor((iconsList.length)/5)) {
        currentScroll += 1;
    }

    findAndScroll(currentScroll);
}

function findAndScroll(currentScroll) {
    const scrollId = scrollIdPrefix + currentScroll;
    const scrollEle = document.getElementById(scrollId);
    scrollEle.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

export function IconsBar() {

    const iconCards = [];
    for(let i=0; i< iconsList.length; i++) {
        iconCards.push(getImageCard(iconsList[i],i))
    }

    return <div>
        <div className="icon-bar-spacer-dims"></div>
        <div className="icon-bar-pos std-bg-color w-100">
            <div className="icon-bar-dims icon-bar-height position-relative w-100">
                

                <div className="hide-scroll nav-bar-overflow d-flex" onScroll = {()=>{handleScroll()}}>
                    {iconCards}
                </div>
                <div className="left-arrow-pos arr-fader-width position-absolute d-flex align-items-center h-100 left-arr-bg">
                    <button className="naked-btn rounded-circle nav-btn-size bg-trans nav-btn-br" onClick = {() => {leftClick()}}>
                        <img src={leftArrow} alt="<" className="nav-arrow-size"></img>
                    </button>
                </div>
                <div className="right-arrow-pos arr-fader-width position-absolute d-flex align-items-center justify-content-end h-100 right-arr-bg">
                    <button className="naked-btn rounded-circle nav-btn-size bg-trans nav-btn-br" onClick = {() => {rightClick()}}>
                        <img src={rightArrow} alt=">" className="nav-arrow-size"></img>
                    </button>
                </div>
            </div>
        </div>
    </div>
}