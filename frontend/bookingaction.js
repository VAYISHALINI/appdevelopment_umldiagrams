import {BOOK_TICKET} from "./bookingType";
import {CANCEL_TICKET} from "./bookingType";
export const selectSeat = () => {
    return {
    type: BOOK_TICKET,
    
    };
    };
    export const cancelBus = (busId) => {
        return {
        type: CANCEL_TICKET,
      
        };
    };