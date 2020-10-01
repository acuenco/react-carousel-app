import React, {} from 'react';
import '../sass/vcButton.scss'
type Props = {
    name?: string
    handleClick: () => void
}

const VCButton = (props: Props) => {
    const {handleClick} = props
    return(
        <button
          className='vc-button'
          onClick={props.handleClick}>
            {props.name}
        </button>
    );
}

export default VCButton