import { createSlice } from "@reduxjs/toolkit";
import WatingForYou from "../../images/watingForYou.jpg";
import EmLa from "../../images/emLa.jpg";
const ReducerKara = createSlice({
    name: 'ReducerKara',
    initialState: [
        {
            id: '1',
            name: 'Wating For You',
            author: 'Mono',
            image: WatingForYou,
            love: false,
          },
          {
            id: '2',
            name: 'Em là',
            author: 'Mono',
            image: EmLa,
            love: true,
          },
    ],
    reducers: {
        
    }
});

export default ReducerKara;