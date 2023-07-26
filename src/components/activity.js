import React from 'react';
// import {dummyData} from '../data'
import { connect } from 'react-redux';

const Activity = ({suggestion}) =>{

    
    return (
        
        <>
 {suggestion.map(act =>{
           return (<div key={act.key}>
                { act.activity && <div>
                <p> Your suggested activity is to: {act.activity} </p>
                <p> You'll need {act.participants} {act.participants === 1? 'person': 'people'} for this activity</p>
                </div>}
            </div>)
        })}
        </>
    );

    
}

const mapStateToProps = state =>{
    return {
        suggestion: state.suggestion
    }
}

export default connect(mapStateToProps)(Activity);