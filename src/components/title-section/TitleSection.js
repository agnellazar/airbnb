import "./title-section.css"
import "./../../common/style.css"
import titleIcon from '../../assets/images/title-icon.svg'
import profileIcon from '../../assets/images/profile-icon.svg'
import worldIcon from '../../assets/images/world-icon.svg'
import hamMenuIcon from '../../assets/images/ham-menu-icon.svg'

export function TitleSection() {
    return <div>
        <div id="header-section" className="header-height">
            <div id="title-bar" className="w-100 std-inline-padding d-flex justify-content-between align-items-center">
                <div className="title-sub-part-1-w">
                    <img src={titleIcon} alt=""/>
                </div>
                <div id="bar-1-1" className="padding-sub-title height_1_1 font-size-1 title-sub-part-2-w muted-color">
                    <div className="m-auto w-fit-content">
                        <div className="d-inline-block padding_1_1 br-1_1 btn-hover h-100 line-height-1_1 btn-focus muted-color">Stays</div>
                        <div className="d-inline-block padding_1_1 br-1_1 btn-hover h-100 line-height-1_1  muted-color">Experiences</div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-sm-between height_1_1 title-sub-part-1-w">
                    <div className="d-inline-block text-center br-1_1 btn-hover h-100 line-height-1_2 btn-focus pos-1_2 padding_1_3 font-size-2">Airbnb your home</div>
                    <div className="d-inline-block  br-1_1 btn-hover h-100 line-height-1_1 btn-focus">
                        <div className="d-flex align-items-center h-100 padding_1_3">
                            <img src={hamMenuIcon} className="world-icon-size" alt=""/>
                        </div>
                    </div>
                    <div className="d-flex align-items-center height_1_2 br-1_1 br-1_2 ms-2 btn-hover-2">
                        <div className="padding_1_2 d-flex align-items-center">
                            <div className="d-inline-block">
                                <div className="d-flex align-items-center h-100 ps-2">
                                    <img src={worldIcon} className="world-icon-size" alt=""/>
                                </div>
                            </div>
                            <div className="d-inline-block ps-2">
                                <div className="d-flex align-items-center h-100">
                                    <img src={profileIcon} className="profile-icon-size" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title-bar-2-hw d-flex align-items-center"  id="bar-1-2" >
                <div className="m-auto w-fit-content height_1_1 font-size-1 muted-color">
                    <div className="d-inline-block padding_1_1 br-1_1 btn-hover h-100 line-height-1_1 btn-focus muted-color">Stays</div>
                    <div className="d-inline-block padding_1_1 br-1_1 btn-hover h-100 line-height-1_1  muted-color">Experiences</div>
                </div>
            </div>
            <div id="search-bar">search bar</div>
            <div id="icon-bar">Icon</div>
        </div>
        <div id="header-spacer" className="header-height"></div>
        <div id="content-section">Content</div>
        <div id="footer-section">Footer</div>
    </div>
}