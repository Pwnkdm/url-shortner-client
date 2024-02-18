import { urlConstants } from "./actionTypes";


const initialState = {
    urlDataLoading: false,
    urlData:[],
    analyticalData:[],
    urldataError: false,
};

// Define the reducer function
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case urlConstants.POST_URL_DATA_LOADING:
      return {
        ...state,
        urlDataLoading:true,
      };
    case urlConstants.POST_URL_DATA_SUCCESS:
      return {
        ...state,
        urlDataLoading:false,
        urlData:[...state.urlData,action?.urlData]
      };
      case urlConstants.POST_URLDATA_ERROR:
        return {
          ...state,
          urlDataLoading:false,
          error:action?.error
        };
        case urlConstants.GET_ANALYTICS_LOADING:
          return {
            ...state,
            urlDataLoading:true,
          };
        case urlConstants.GET_ANALYTICS_SUCCESS:
          return {
            ...state,
            urlDataLoading:false,
            analyticalData:action?.data?.analytics
          };
          case urlConstants.GET_ANALYTICS_ERROR:
            return {
              ...state,
              urlDataLoading:false,
              error:action?.error
            };
    default:
      return state;
  }
};

