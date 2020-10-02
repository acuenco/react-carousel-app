import React, {} from 'react';
import '../sass/arrows.scss'
import RightArrowImage from '../assets/arrow-right.png'

type Props = {
    handleRightArrowClick: () => void
}
const RightArrow = (props: Props) => {
    return(
        <button
          className='arrow right-arrow'
          onClick={props.handleRightArrowClick}
          style={{backgroundImage: `url(${RightArrowImage})`}}
          ></button>
    );
}
export default RightArrow