export const addUserInfo = (data)=>{
  return {
    type:"addUserInfo",
    payload:data
  }
}

export const removeUserInfo = ()=>{
  return {
    type:"removeUserInfo"
  }
}