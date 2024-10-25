
import { useEffect, useState } from "react";
import "./suggestions-component.css"
import { ApiSerivice } from "../../services/api.service";
import { urls } from "../../constants/urlConstants";

function getTablistTags() {
    const tabs = ["Popular", "Art & Culture", "Outdoor", "Mountain", "Beach", "Unique stays", "Categories", "Things to do"];
    const tabTags = [];
    for (let i=0; i<tabs.length; i++) {
        tabTags.push(
                <button className="tabList-button-pm naked-btn bg-trans fw-medium muted-text-color tabItem-fs position-relative" key={i}>
                    {tabs[i]}
                </button>
        )
    }
    return tabTags;
}

function getSuggestionItemTags(suggestions) {
    const suggestionItemList = [];
    for(let i=0; i<suggestions.length; i++) {
        suggestionItemList.push(<button className="naked-btn bg-trans text-start" key={i}>
            <div className="suggestions-heading-fs tabItem-fs fw-medium sugg-cont-lh">{suggestions[i].location}</div>
            <div className="tabItem-fs muted-text-color sugg-cont-lh">{suggestions[i].type}</div>
        </button>
        )
    }
    return suggestionItemList;
}

export function SuggestionsComponent() {
    const apiSerivice = new ApiSerivice();
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        apiSerivice.httpGet(urls.suggestions).then(suggestionsRecv => {
            setSuggestions(suggestionsRecv);
        })
    })


    return <div>
        <div className="suggestions-padding suggestion-content-br">
            <div className="suggestions-heading-fs suggestions-heading-mb fw-medium">
                Inspiration for future getaways
            </div>
            <div className="w-100 d-flex tabList-br" id="tabList">
                {getTablistTags()}
            </div>
            <div className="suggestion-content-p">
                <div className="sugg-cont-grid">
                    {getSuggestionItemTags(suggestions)}
                </div>
            </div>
        </div>
    </div>
}