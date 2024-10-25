import "./footer-bar-component.css"
import worldIcon from "../../assets/images/world-icon.svg"
import fbIcon from "../../assets/images/facebook-icon.svg"
import twIcon from "../../assets/images/twitter-icon.svg"
import igIcon from "../../assets/images/instagram-icon.svg"

export function FooterBarComponent() {
    return <div className="footer-bar-p d-flex justify-content-between footer-bar-1-fs">
        <div className="">
            © 2024 Airbnb, Inc.
            <span className="dot-spacer">.</span>
            <a className="naked-link underline-on-hover footer-bar-link-c" href="dummy"> Privacy </a> 
            <span className="dot-spacer">.</span>
            <a className="naked-link underline-on-hover footer-bar-link-c" href="dummy"> Terms </a> 
            <span className="dot-spacer">.</span>
            <a className="naked-link underline-on-hover footer-bar-link-c" href="dummy"> Sitemap </a> 
            <span className="dot-spacer">.</span>
            <a className="naked-link underline-on-hover footer-bar-link-c"href="dummy"> Company Details </a> 
        </div>
        <div>
            <button className="naked-btn bg-trans">
                <img src={worldIcon} className="footer-bar-icon-size-1 footer-bar-4-m" alt=""></img>
                <span className="footer-bar-2-m underline-on-hover">
                    English (IN)
                </span>
            </button>
            <button className="naked-btn bg-trans">
                ₹ 
                <span className="footer-bar-2-m underline-on-hover">
                INR
                </span>
            </button>

            <button className="naked-btn bg-trans"><img src={fbIcon} className="footer-bar-icon-size-2 footer-bar-3-m" alt=""></img></button>
            <button className="naked-btn bg-trans"><img src={twIcon} className="footer-bar-icon-size-2 footer-bar-3-m" alt=""></img></button>
            <button className="naked-btn bg-trans"><img src={igIcon} className="footer-bar-icon-size-2" alt=""></img></button>
        </div>
    </div>
}