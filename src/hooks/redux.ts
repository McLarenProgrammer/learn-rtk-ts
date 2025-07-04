import { useDispatch, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch } from "../store/store";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector