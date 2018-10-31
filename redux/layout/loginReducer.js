import _ from 'lodash';

const initialState = {
  user: null
};

const loginReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case 'LOG_OUT': {
      newState = { user: false };
      console.log('Logged out! State is now: ', newState);
      break;
    }

    case 'LOG_IN': {
      newState.user = action.user || false;
      console.log('Logging in! State is now: ', newState);
      break;
    }
  }

  return newState;
};

export default loginReducer;
