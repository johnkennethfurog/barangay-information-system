import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import citizenReducer from "../features/citizens/citizenSlice";

export const store = configureStore({
  reducer: {
    citizen: citizenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
