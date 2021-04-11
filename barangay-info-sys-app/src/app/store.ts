import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import citizenReducer from "../features/citizens/citizenSlice";
import commonReducer from "./commonSlice";

export const store = configureStore({
  reducer: {
    citizen: citizenReducer,
    common: commonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
