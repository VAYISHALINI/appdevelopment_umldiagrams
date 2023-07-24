const initialState = {
    email: '',
    password: '',
    name:'',
    source:'',
    destination:'',
    checkpass: false,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return {
          ...state,
          email: action.payload,
        };
        case 'SET_NAME':
        return {
          ...state,
          name: action.payload,
        };
      case 'SET_PASSWORD':
        return {
          ...state,
          password: action.payload,
        };
      case 'SET_CHECKPASS':
        return {
          ...state,
          checkpass: action.payload,
        };
        case 'SET_SOURCE':
        return {
          ...state,
          source: action.payload,
        };
        case 'SET_DESTINATION':
        return {
          ...state,
           destination: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  