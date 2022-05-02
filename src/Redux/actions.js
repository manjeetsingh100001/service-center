export const USER_STATUS = "USER_STATUS";
export const USER_DETAILS = "USER_DETAILS";
export const SHOW_ORDERS = "SHOW_ORDERS";
export const CHANGE_ORDER = "CHANGE_ORDER";
export const SORT_ORDER = "SORT_ORDER";

export const sortOrder = (data) => {
    return {
        type: SORT_ORDER,
        payload: data
    }
}

export const changeOrder = (data) => {
    // data received is id of order whose status should be change to "accepted"
    return {
        type: CHANGE_ORDER,
        payload: data
    }
}
export const userStatus = (data) => {
    return {
        type: USER_STATUS,
        payload: data
    };
};

export const userDetails = (data) => {
    return {
        type: USER_DETAILS,
        payload: data
    };
};

export const showOrders = (data) => {
    return {
        type: SHOW_ORDERS,
        payload: data
    };
};