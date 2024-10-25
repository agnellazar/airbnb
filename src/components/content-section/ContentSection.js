import { IconsBar } from "../icons-bar/IconsBar"
import { ProductCardComponent } from "../product-card-component/ProductCardComponent"
import "./content-section.css"
import { ApiSerivice } from "../../services/api.service"
import { urls } from "../../constants/urlConstants";
import {useEffect, useState} from "react";


function getProductCards(items) {
    const productCards = [];
    for(let i=0; i<items.length; i++) {
        productCards.push(<ProductCardComponent key={i} id={i} details={items[i]}></ProductCardComponent>)
    }
    return productCards;
}


export function ContentSection() {

    const apiSerivice = new ApiSerivice();
    const [feed, setFeed] = useState({items:[]});

    let productCards = [];

    useEffect(() => {
        apiSerivice.httpGet(urls.feed_icons).then(feed => {
            setFeed(feed);
        });
    });

    productCards = getProductCards(feed.items);
    
    return <div>
        <div id="icon-bar" className="content-pm">
            <IconsBar></IconsBar>
            <div className="content-grid">
                {productCards}
            </div>
        </div>
    </div>
}