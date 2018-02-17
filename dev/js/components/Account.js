import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAppLevelStateForAccount} from '../actions/index';
import App from './app';

export  class Account extends Component{
     constructor(props)
     {
       super(props);
     this.navToB=this.navToB.bind(this);
     }
    navToB()
    {
  
      this.props.history.push("/social");
    }
    render(){

        return(
         
          <div className="progressDiv">
          <ul id="progressbar">
                 <li className="active">Account Setup</li>
                 <li >Social Profiles</li>
                 <li>Personal Details</li>
               </ul>   
          
          <form data-toggle="validator" role="form" onSubmit={this.navToB}>
         
           
          <div className="form">
            <div className='form-group'>
          <h5>CREATE YOUR ACCOUNT</h5>
          <h6>This is step 1</h6>
          </div>
            <App placeholders={[{index:0,key:"Email"},{key:"Password",index:1},{key:"Confirm Password",index:2}]}
                values={this.props.accountData}
                setStateForThisComp={this.props.setAppLevelStateForAccount}
                shouldUsePassword={true}
                shouldUseNumber={true}
            />
         
              <button className="button" type="submit">Next</button>
            </div>
          </form>
          </div>
        ) 

    }
}

function mapStateToProps(state){
  return {
       accountData:state.accountData
  }
}
export default  connect(mapStateToProps,{setAppLevelStateForAccount})(Account);


