import React, {} from 'react';
import Dot from '../images/ellipse.png'
import SelectedDot from '../images/current-ellipse.png'
import '../sass/elevator.scss'

type Props = {
    activeIdx: number
    totalSlides: number
}

const Elevator = (props: Props) => {
    const items = []
    for (let i = 0; i < props.totalSlides; i++) {
        let isOnActiveSlide = i+1 === props.activeIdx
        items.push(<img src={isOnActiveSlide ? SelectedDot : Dot} alt= {isOnActiveSlide ? "SelDot" : "Dot"} key={isOnActiveSlide ? i+10 : i+1 } style={{height:'10px'}}/>)
        if(i < props.totalSlides){
            items.push(<div className="spacer" key={i+50}></div>)
        }
    }
    return(
        <div className="elevator">
            {items}
        </div>
    );
}

export default Elevator