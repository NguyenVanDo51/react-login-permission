const defaultState = {
  text: 'initial',
  foo: {
    bar: 'zoo',
    nested: {
      veryDeep: true,
    },
  },
  user: {
    id: '',
    email: '',
    role: 'Member'
  }
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        text: action.text,
        foo: {
          ...state.foo,
          bar: action.text,
        },
      };
    case 'UPDATE USER':
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}