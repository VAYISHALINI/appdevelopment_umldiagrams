export const setEmail = (email) => {
    return {
      type: 'SET_EMAIL',
      payload: email,
    };
  };
  export const setName = (name) => {
    return {
      type: 'SET_NAME',
      payload: name,
    };
  };
  
  export const setPassword = (password) => {
    return {
      type: 'SET_PASSWORD',
      payload: password,
    };
  };
  
  export const setCheckPass = (checkpass) => {
    return {
      type: 'SET_CHECKPASS',
      payload: checkpass,
    };
  };
  export const setSource= (source) => {
    return {
      type: 'SET_SOURCE',
      payload: source,
    };
  };
  export const setDestination= (destination) => {
    return {
      type: 'SET_DESTINATION',
      payload: destination,
    };
  };