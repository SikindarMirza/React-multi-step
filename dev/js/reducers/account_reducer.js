export default function(state= [
                                {key:"",index:0},
                                {key:"",index:1},
                                {key:"",index:2}
                               ],
                        action) {
    if(action.type == 'ACCOUNT_ACTION') {
      return action.payload;    
    }
    else
      {
        return state;
      }
        
}
