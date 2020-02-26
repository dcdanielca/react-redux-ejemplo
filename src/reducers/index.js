const INITIAL_STATE = {
  counter: 0,
  counter2: 0
};

export function counterApp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        counter2: state.counter2
      }
    case 'DECREMENT':
        return {
            counter: state.counter - 1,
            counter2: state.counter2
        }
    case "INCREMENT2":
      return {
        counter: state.counter,
        counter2: state.counter2 + 1
      }
    case 'DECREMENT2':
        return {
          counter: state.counter,
          counter2: state.counter2 - 1
        }
    default:
        return state
  }
}
