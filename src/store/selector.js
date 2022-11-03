import { createSelector } from "@reduxjs/toolkit";

export const KaraSelector = (state) => {
    return state.ReducerKara.filter((kara)=>{
        return true
    })
}

export const KaraLoveSelector = (state) => {
    return state.ReducerKara.filter((kara)=>{
        return kara.love == true
    })
}