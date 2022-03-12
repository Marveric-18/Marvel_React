import * as actionType from "./actionType"


export const showLoader = (payLoad = null) => {
    return {
        type : actionType.SHOW_LOADER,
        payLoad : payLoad
    }
}

export const hideLoader = (payLoad = null) => {
    return {
        type : actionType.HIDE_LOADER,
        payLoad : payLoad
    }
}