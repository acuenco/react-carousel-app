import React, {useState, useEffect} from 'react';
import Slide from './slide';
import '../sass/carousel.scss'
import SlideData from '../data/SlideData'
import RightArrow from './rightArrow';
import LeftArrow from './leftArrow';
import Elevator from './elevator'

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleRightArrowClick()
        }, 5000);
        return () => clearInterval(interval);
    }, [activeSlide]); // eslint-disable-line react-hooks/exhaustive-deps
    
    const handleRightArrowClick = () => {
        if (activeSlide === SlideData.length - 1) {
            setActiveSlide(0)
        } else {
            setActiveSlide(activeSlide => activeSlide + 1)
        }
    }

    const handleLeftArrowClick = () => {
        if (activeSlide === 0) {
            setActiveSlide(SlideData.length - 1)
        } else {
            setActiveSlide(activeSlide - 1)
        }
    }

    return( 
        <div className = 'carousel'>
            <RightArrow handleRightArrowClick={handleRightArrowClick}/>
            <Slide action = {SlideData[activeSlide]} />
            <LeftArrow handleLeftArrowClick={handleLeftArrowClick}/>
            <Elevator activeIdx={activeSlide + 1} totalSlides={SlideData.length} />
        </div>
    );
} 

export default Carousel


// import React, {Fragment} from 'react';
// type Props = {
//     name?: string
// }
// const Carousel = (props: Props) => {
//     return(
//         <Fragment>
//              <h1>Hello, {props.name ?? 'No Name' }</h1>
//         </Fragment>
       
//     );
// }
// export default Carousel