import "./footer-section.css";
import { SuggestionsComponent } from "../suggestions-component/SuggestionsComponent";
import { LinksComponent } from "../links-component/LinksComponent";
import { FooterBarComponent } from "../footer-bar-component/FooterBarComponent";


export function FooterSection() {
    return <div className="footer-section-bg">
        <SuggestionsComponent></SuggestionsComponent>
        <LinksComponent></LinksComponent>
        <FooterBarComponent></FooterBarComponent>
    </div>
}