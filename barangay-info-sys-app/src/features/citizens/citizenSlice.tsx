import { createSlice, Dictionary, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { AppThunk, RootState } from "../../app/store";
import { Citizen } from "../../models/citizen";
import { CitizenDetail } from "../../models/citizen-detail";
import { LookupItem } from "../../models/lookup-item";
import { clientApiRequest } from "../../utils/client";

interface CitizenState {
  citizens: Citizen[];
  citizenDetail?: CitizenDetail;
  isLoading: boolean;
  error: any;
  lookups: Dictionary<LookupItem>;
}

const initialState: CitizenState = {
  citizens: [],
  error: null,
  isLoading: false,
  lookups: {},
};

// REDUCERS
const citizenSlice = createSlice({
  name: "citizens",
  initialState,
  reducers: {
    resetForm: (state) => {
      const { citizenDetail } = state;
    },
    addNew: (state) => {
      state.citizenDetail = { ...new CitizenDetail() };
    },
    onError: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    loadCitizenDetail: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loadCitizenDetailSuccess: (
      state: CitizenState,
      action: PayloadAction<CitizenDetail>
    ) => {
      state.isLoading = false;
      state.citizenDetail = action.payload;
    },
    loadCitizens: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loadCitizensSuccess: (
      state: CitizenState,
      action: PayloadAction<Citizen[]>
    ) => {
      state.isLoading = false;
      state.citizens = action.payload;
    },
  },
});

const {
  onError,
  loadCitizens,
  loadCitizensSuccess,
  loadCitizenDetail,
  loadCitizenDetailSuccess,
  addNew,
  resetForm,
} = citizenSlice.actions;

// ASYNC ACTION
export const fetchCitizens = (): AppThunk => (dispatch) => {
  dispatch(loadCitizens());

  clientApiRequest()
    .get("/clients")
    .then((response: AxiosResponse<Citizen[]>) => {
      dispatch(loadCitizensSuccess(response.data));
    })
    .catch((err: any) => {
      dispatch(onError(err));
    });
};

export const fetchCitizenDetail = (citizenId: number): AppThunk => (
  dispatch
) => {
  dispatch(loadCitizenDetail());

  clientApiRequest()
    .get(`/clientsDetail/${citizenId}`)
    .then((response: AxiosResponse<CitizenDetail>) => {
      dispatch(loadCitizenDetailSuccess(response.data));
    })
    .catch((err: any) => {
      dispatch(onError(err));
    });
};

export const addNewCitizen = (): AppThunk => (dispatch) => {
  dispatch(addNew());
};

export const resetCitizenForm = (): AppThunk => (dispatch) => {
  dispatch(resetForm());
};

// SELECTOR
export const selectCitizens = (state: RootState) => state.citizen.citizens;
export const selectError = (state: RootState) => state.citizen.error;
export const selectIsLoading = (state: RootState) => state.citizen.isLoading;
export const selectCitizenDetail = (state: RootState) =>
  state.citizen.citizenDetail;

export default citizenSlice.reducer;
