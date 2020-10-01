import React, {Fragment} from 'react';
import '../sass/actionArea.scss'
import VCButton from './vcButton'

type Props = {
    actionProp: Action
}

const ActionArea = (props : Props) => {
    const handleClick = () => {
        alert("click")
    }

    let  shouldHideBtn2 = props.actionProp.btnName2 === ""

    return(
        <Fragment>
            <div className="action-area-container" style={{alignItems:props.actionProp.location}}>
            <div className='action-area'>
                <h1>{props.actionProp.title}</h1>
                <p>{props.actionProp.subtitle}</p>
                <div className="button-container">
                    <VCButton name = {props.actionProp.btnName1} handleClick = {handleClick}/>
                    {shouldHideBtn2 ?  null : <VCButton name = {props.actionProp.btnName2} handleClick = {handleClick}/>}
                </div>
             </div>
            </div>
        </Fragment>
    );
}
export default ActionArea