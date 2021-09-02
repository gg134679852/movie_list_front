
const initialState = {
  id:'',
  name:'',
  email:'',
  token:'',
  isAdmin:'user'
}

const reducer = (state,action)=>{
  const {type,payload} = action
  state = initialState
  switch (type) {
    
    case 'addUserInfo':
    return state = {...state,...payload}
    
    case 'removeUserInfo':
    return state = initialState

    default:
    return state
  }
}

export default reducer