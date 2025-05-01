import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../cutomHooks/useLocalStorage";
const mainSlice = createSlice({
    name: 'main',
    initialState: {
        cart: [],
        isRegistrated: false,
        userAuthActivity : false,
        authStatus : "Регистрация",
        catalogue: {data: []},
        userInfo: undefined,
        isLoggedIn: false,
        mightWantToLogOut: false,
    },
    reducers:{
        setAuthentification(state){
            if(state.authStatus==="Регистрация"){
                state.authStatus = "Вход"
                localStorage.setItem("sushiUser", JSON.stringify(state.userInfo))
                state.isRegistrated = true
                console.log("регистрация прошел успешно")
            }
            else if(state.authStatus==="Вход"){
                state.authStatus = "Имя пользователя"
                console.log("вход прошел успешно")
                setUserAuthActivity()
            }
        },

        setCatalogue(state, action){
            state.catalogue = action.payload
        },
        
        setUserInfo(state, action){
            state.userInfo = action.payload
        },

        setUserAuthActivity(state){
            if(state.mightWantToLogOut){
                state.userAuthActivity = false
                state.authStatus = "Вход"
                state.isLoggedIn = false
                state.mightWantToLogOut = false
            }
            else{
                state.userAuthActivity = !state.userAuthActivity
            }
            
        },

        authentificateUser(state, action){
            let oldUser = JSON.parse(localStorage.getItem("sushiUser"))
            let userEmail = action.payload.email
            let userPassword = action.payload.password
            if(userEmail===oldUser.email && userPassword===oldUser.password){
                state.authStatus = oldUser.username
                console.log("вход прошел успешно")
                state.isLoggedIn = true
                state.mightWantToLogOut = true
            }
            else{
                alert("Неверный логин или пароль")
            }
        },

        setRegistration(state){
            state.isRegistrated = true
        },

        setIsLoggedIn(state){
            state.isLoggedIn = true
        },

        setMightWantToLogOut(state){
            state.mightWantToLogOut = true
        },

        addToCart(state, action){
            
        },

        removeFromCart(state, action){

        },

    }
})

export const { setCatalogue,setIsLoggedIn, setMightWantToLogOut, authentificateUser, setRegistration, setAuthentification, setUserAuthActivity, setUserInfo} = mainSlice.actions;
export const mainReducer = mainSlice.reducer;