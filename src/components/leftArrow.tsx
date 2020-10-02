import React, {} from 'react';
import '../sass/arrows.scss'
import LeftArrowImage from '../assets/arrow-left.png'

type Props = {
    handleLeftArrowClick: () => void
}
const LeftArrow = (props: Props) => {
    return(
        <button
          className='arrow left-arrow'
          onClick={props.handleLeftArrowClick}
          style={{backgroundImage: `url(${LeftArrowImage})`}}
          ></button>
    );
}
export default LeftArrow 