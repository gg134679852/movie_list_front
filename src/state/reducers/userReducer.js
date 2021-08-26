
const initialState = {
  id:'',
  name:'',
  email:'',
  isAdmin:'user'
}

const reducer = (state,action)=>{
  const {type,payload} = action
  state = initialState
  switch (type) {
    
    case 'addUserInfo':
    return state = {...state,...payload}

    default:
    return state
  }
}

export default reducer