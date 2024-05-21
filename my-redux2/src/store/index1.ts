import { configureStore } from "@reduxjs/toolkit";
import todoReduser from './todoSlice.ts'
// export default configureStore(
//     {
//         reducer:{
//             todosA:todoReduser,
//         }
//     }
// )
const store = configureStore(
    {
        reducer:{
            todosA:todoReduser,
        },
        
    }
)
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch