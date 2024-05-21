import { useDispatch,useSelector,TypedUseSelectorHook } from "react-redux";
import { RootState,AppDispatch } from "../store/index1";
export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;
