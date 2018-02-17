import { combineReducers } from 'redux';
import accountReducer from './account_reducer';
import socialReducer from './social_reducer';
import personalReducer from './personal_reducer';

const rootReducer = combineReducers({
      accountData:accountReducer,
      socialData:socialReducer,
      personalData:personalReducer,

});
export default rootReducer;
