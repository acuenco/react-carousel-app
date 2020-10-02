import React, {Fragment} from 'react';
import ActionArea from './actionArea';
import '../sass/slide.scss'
import { Action } from '../models/Action'
type Props = {
    action: Action
}

const Slide = (props: Props) => {
    return(
        <Fragment>
             <div className="slide" style={{backgroundImage:props.action.imagebg, justifyContent:props.action.location}}>
                <ActionArea actionProp = {props.action} />
             </div>
        </Fragment> 
    );
}
export default Slide


