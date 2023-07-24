import {BOOK_TICKET} from "./bookingType";
const initialState = {
     bookedTickets: 0,
     availableTickets: 20
    };
    
const bookReducer=(state=initialState,action)=>{
switch(action.type){
case BOOK_TICKET:
return {
...state,
bookedTickets: state.bookedTickets+1,
availableTickets: state.availableTickets-1
};

}
}
export default bookReducer;