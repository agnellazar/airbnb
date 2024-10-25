import "./links-component.css"
import "../../common/style.css"

const linksData = {
    support: [
        {
            "title": "Help Centre",
            "link": "https://example.com/help-centre"
        },
        {
            "title": "AirCover",
            "link": "https://example.com/aircover"
        },
        {
            "title": "Anti-discrimination",
            "link": "https://example.com/anti-discrimination"
        },
        {
            "title": "Disability support",
            "link": "https://example.com/disability-support"
        },
        {
            "title": "Cancellation options",
            "link": "https://example.com/cancellation-options"
        },
        {
            "title": "Report neighbourhood concern",
            "link": "https://example.com/report-neighbourhood-concern"
        }      
    ],
    hosting: [
        {
            "title": "Airbnb your home",
            "link": "https://example.com/airbnb-your-home"
        },
        {
            "title": "AirCover for Hosts",
            "link": "https://example.com/aircover-for-hosts"
        },
        {
            "title": "Hosting resources",
            "link": "https://example.com/hosting-resources"
        },
        {
            "title": "Community forum",
            "link": "https://example.com/community-forum"
        },
        {
            "title": "Hosting responsibly",
            "link": "https://example.com/hosting-responsibly"
        },
        {
            "title": "Join a free Hosting class",
            "link": "https://example.com/join-free-hosting-class"
        }
    ],
    airbnb: [
        {
            "title": "Newsroom",
            "link": "https://example.com/newsroom"
        },
        {
            "title": "New features",
            "link": "https://example.com/new-features"
        },
        {
            "title": "Careers",
            "link": "https://example.com/careers"
        },
        {
            "title": "Investors",
            "link": "https://example.com/investors"
        },
        {
            "title": "Airbnb.org emergency stays",
            "link": "https://example.com/airbnb-org-emergency-stays"
        }
    ]    
}

function getLinkTags(title) {
    const linkItems = linksData[title];
    const linkTags = [];
    for(let i=0; i<linkItems.length; i++) {
        linkTags.push(<div key={i} className="links-row-ts">
            <a href={linkItems[i].link} target="blank" className="naked-link underline-on-hover links-color">
                {linkItems[i].title}
            </a>
        </div>)
    }
    return linkTags;
}

export function LinksComponent() {
    return <div className="link-list-p link-list-br">
        <div className="link-list-grid">
            <div className="links-column-p">
                <div className=" fw-medium links-col-header-ts links-col-header-p">
                    Support
                </div>
                <div className="links-grid">
                    {getLinkTags('support')}
                </div>
            </div>
            <div className="links-column-p">
                <div className=" fw-medium links-col-header-ts links-col-header-p">
                    Support
                </div>
                <div className="links-grid">
                    {getLinkTags('hosting')}
                </div>
            </div>
            <div className="links-column-p">
                <div className=" fw-medium links-col-header-ts links-col-header-p">
                    Support
                </div>
                <div className="links-grid">
                    {getLinkTags('airbnb')}
                </div>
            </div>
        </div>
    </div>
}