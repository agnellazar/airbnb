import "./title-section.css"
import "./../../common/style.css"
import profileIcon from '../../assets/images/profile-icon.svg'
import worldIcon from '../../assets/images/world-icon.svg'
import hamMenuIcon from '../../assets/images/ham-menu-icon.svg'
import searchIcon from '../../assets/images/search-icon.svg'

export function TitleSection() {

    return <div>
        <div id="header-section" className="header-height header-border header-background">
            <div id="title-bar" className="w-100 std-inline-padding d-flex justify-content-between align-items-center">
                <div className="title-sub-part-1-w">
                    <svg id="title-img-id" alt=""/>
                </div>
                <div id="bar-1-1" className="padding-sub-title height_1_1 font-size-1 title-sub-part-2-w">
                    <div className="m-auto w-fit-content">
                        <div className="d-inline-block padding_1_1 br-1_1 btn-hover h-100 line-height-1_1 btn-focus muted-color">Stays</div>
                        <div className="d-inline-block padding_1_1 br-1_1 btn-hover h-100 line-height-1_1  muted-color">Experiences</div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-sm-end height_1_1 title-sub-part-1-w">
                    <div className="d-inline-block text-center br-1_1 btn-hover h-100 line-height-1_2 pos-1_2 padding_1_3 brand-color-1 font-size-2">Airbnb your home</div>
                    <div className="d-inline-block  br-1_1 btn-hover h-100 line-height-1_1">
                        <div className="d-flex align-items-center h-100 padding_1_3">
                            <img src={worldIcon} className="world-icon-size" alt=""/>
                        </div>
                    </div>
                    <div className="d-flex align-items-center height_1_2 br-1_1 br-1_2 ms-2 btn-hover-2">
                        <div className="padding_1_2 d-flex align-items-center">
                            <div className="d-inline-block">
                                <div className="d-flex align-items-center h-100 ps-2">
                                    <img src={hamMenuIcon} className="world-icon-size" alt=""/>
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
            <div className="title-bar-2proxy">
                <div className="title-bar-2-hw d-flex align-items-center title-bar-2-pos"  id="bar-1-2" >
                    <div className="m-auto w-fit-content height_1_1 font-size-1 muted-color">
                        <div className="d-inline-block padding_1_1 br-1_1 btn-hover h-100 line-height-1_1 btn-focus muted-color">Stays</div>
                        <div className="d-inline-block padding_1_1 br-1_1 btn-hover h-100 line-height-1_1  muted-color">Experiences</div>
                    </div>
                </div>
            </div>
            <div id="search-bar" className="search-bar-dim m-auto">
                <div className="w-100 search-border search-box-shadow clear-both search-bar-height overflow-hidden d-flex align-items-center">
                    <div className="float-start w-33">
                        <div className="search-3-1-padding highlight-border-1-1 highlight-effect-1-1">
                            <div className="font-3-1-1">
                                <b>
                                    Where
                                </b>
                            </div>
                            <div className="font-3-1-2">
                                Search Destinations
                            </div>
                        </div>
                    </div>
                    <div className="search-spacers float-start"></div>
                    <div className="float-start w-33">
                        <div className="w-100 clear-both search-bar-height d-flex align-items-center">
                            <div className="search-bar-semi-widths float-start">
                                <div className="search-3-2-padding highlight-border-1-1 highlight-effect-1-1">
                                    <div className="font-3-1-1">
                                        <b>
                                            Check in
                                        </b>
                                    </div>
                                    <div className="font-3-1-2 text-truncate">
                                        Add Dates
                                    </div>
                                </div>
                            </div>
                            <div className="search-spacers float-start"></div>
                            <div className="search-bar-semi-widths float-start">
                                <div className="search-3-2-padding highlight-border-1-1 highlight-effect-1-1">
                                    <div className="font-3-1-1">
                                        <b>
                                            Check out
                                        </b>
                                    </div>
                                    <div className="font-3-1-2 text-truncate">
                                        Add Dates
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-spacers float-start">
                    </div>
                    <div className="float-start w-33">
                        <div className="d-flex align-items-center search-bar-height highlight-border-1-1 highlight-effect-1-1">
                            <div className="search-bar-1-1w">
                                <div className="search-3-1-padding">
                                    <div className="font-3-1-1">
                                        <b>
                                            Who
                                        </b>
                                    </div>
                                    <div className="font-3-1-2">
                                        Add guests
                                    </div>
                                </div>
                            </div>
                            <div className="search-bar-1-2w search-mr">
                                <button className="naked-btn search-btn-wrapper ">
                                    <div className="search-sym-dims m-auto">
                                        <img
                                        src={searchIcon} className="search-sym-dims align-top" alt="S" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="header-spacer" className="header-height"></div>            
    </div>
}