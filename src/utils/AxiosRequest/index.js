
import axios from "axios";
import { useDispatch } from 'react-redux'
import {showLoader, hideLoader} from "../../redux/action";


export default class AxiosRequest{
    baseURL= "http://localhost:8000";


    constructor(dispatch,url,  method= "get", data, param={} , header={} ) { 
        console.log(url, method, data, header)
        this.dispatch = dispatch;
        this.data = data;
        this.url = url;
        this.method = method;
        this.header = header;
        this.param = param;
    }

    loaderInterceptor = (dispatch) => {
        //  https://microeducate.tech/know-if-there-are-pending-request-in-axios/
        let numberOfAjaxCAllPending = 0;

        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            numberOfAjaxCAllPending++;
            dispatch(showLoader);
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        // Add a response interceptor
        axios.interceptors.response.use(function (response) {
            numberOfAjaxCAllPending--;
            console.log("------------  Ajax pending", numberOfAjaxCAllPending);

            if (numberOfAjaxCAllPending == 0) {
                this.distatch(hideLoader);
            }
            return response;
        }, function (error) {
            numberOfAjaxCAllPending--;
            if (numberOfAjaxCAllPending == 0) {
                dispatch(hideLoader);
            }
            return Promise.reject(error);
        });
    }

    sendRequest = async (secure = false) =>{
        // start loader
        const headers = secure ? {...this.header, "Authorization" : `Bearer ${"token"}`} : this.header;
        
        const options =  {
            baseURL: this.baseURL,
            url: this.url,
            method: this.method,
            headers: headers,
            data: this.data,
            param : this.param
        }
        console.log("Options: ", options);
        return new Promise((resolve, reject) => {
            this.loaderInterceptor(this.dispatch);
            axios(options).then(response => {
                resolve(response);
            }).catch(error => { 
                reject(error)
            })
        });
    }
}

// const req = new AxiosRequest("http://localhost:8000", "post");
// req.httpRequest()