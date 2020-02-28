import axiosOrders from "../axiosOrders";

export const FETCH_LINK_SUCCESS = 'FETCH_LINK_SUCCESS';

export const fetchLinkSuccess = linkResponseData => ({type: FETCH_LINK_SUCCESS, linkResponseData});

export const fetchLink = linkData => {
  return async dispatch => {
    try{
      const response = await axiosOrders.post('/links', linkData);

      dispatch(fetchLinkSuccess(response.data));
    }catch(e){
      console.log(e);
    }
  }
};