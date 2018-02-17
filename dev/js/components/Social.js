import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAppLevelStateForSocial} from '../actions/index';
import App from './app';

export  class Social extends Component{
  constructor(props)
  {
    super(props);
    this.navToC=this.navToC.bind(this);
  }
  navToC(){
    this.props.history.push("/personal")
  }
    render(){
        return(
          <div className="progressDiv">
          <ul id="progressbar">
                 <li className="active">Account Setup</li>
                 <li className="active">Social Profiles</li>
                 <li>Personal Details</li>
               </ul>   
          <form data-toggle="validator" role="form" onSubmit={this.navToC}>
          <div className="form">
            <h5>SOCIAL PROFILES</h5>
            <h6>Your preference on the social network</h6>
            <App placeholders={[{index:0,key:"Twitter"},{key:"Facebook",index:1},{key:"Google Plus",index:2}]}
                  values={this.props.socialData}
                  setStateForThisComp={this.props.setAppLevelStateForSocial}
                  />
            <Link to="/">
              <button className="button">Previous</button>
            </Link>    
            
              <button type="submit" className="button">Next</button>
           
          </div>
          </form>
          </div>
        ) 

    }
}
function mapStateToProps(state){
  return {
       socialData:state.socialData
  }
}
export default connect(mapStateToProps,{setAppLevelStateForSocial})(Social);
