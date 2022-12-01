export const LoginStart=(userCredential)=>({
    type:"LOGIN_START"
})
export const LoginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user
})
export const LoginFailiure=()=>({
    type:"LOGIN_FAILIURE",
   
})
export const UPDATEStart=(userCredential)=>({
    type:"UPDATE_START"
})
export const UPDATESuccess=(user)=>({
    type:"UPDATE_SUCCESS",
    payload:user
})
export const UPDATEFailiure=()=>({
    type:"UPDATE_FAILIURE",
   
})
export const LogOut=()=>({
    type:"LOGOUT",
   
})