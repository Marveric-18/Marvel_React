import * as actionType from "./actionType"
import AxiosRequest from "../../utils/AxiosRequest";
import {API_LOGIN} from "../../constants";
import axios from "axios";

export const auth_login = (payLoad) => {
    return {
        type : actionType.AUTH_SET_TOKEN,
        payLoad : payLoad
    }
}


export function loginUser(data) {
    return function(dispatch) {
        console.log("Called LoginUser")
        const axreq = new AxiosRequest(dispatch,API_LOGIN, "post",  data, {}, {} , {});
        axreq.sendRequest()
        .then(({ data }) => {
          console.log(data)
        });
        return axios.post("https://api.myjson.com/bins/19dtxc")
        .then(({ data }) => {
        dispatch(auth_login(data));
      });
    };
  }