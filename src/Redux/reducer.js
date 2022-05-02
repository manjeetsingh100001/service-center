import { USER_STATUS, USER_DETAILS, SHOW_ORDERS, CHANGE_ORDER, SORT_ORDER } from "./actions";

const init = {
    isLoggedIn: false,
    userDetails: null,
    orders: []
};

export const reducer = (store = init, { type, payload }) => {
    switch (type) {
        case USER_STATUS:
            return {
                ...store,
                isLoggedIn: payload
            }
        case USER_DETAILS:
            return {
                ...store,
                userDetails: payload
            }
        case SHOW_ORDERS:
            return {
                ...store,
                orders: payload
            }
        case CHANGE_ORDER:
            return {
                ...store,
                orders: payload
            }
        case SORT_ORDER:
            console.log('check')
            return {
                ...store,
                orders: [
                    store.orders.sort((a, b) => a.payload.localeCompare(b.payload))
                ]
            }
        default:
            return store;
    }
};