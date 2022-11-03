import { configureStore } from "@reduxjs/toolkit";
import ReducerKara from "../screens/ProjectKaraoke/ReducerKara";


const store = configureStore({
    reducer: {
        projectKara: ReducerKara.reducer,
    },
});

export default store;