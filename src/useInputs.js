

// 커스텀 훅스인 useInputs 만드는 두가지방식: useState 와 useReducer

// 1. 커스텀훅스 useInputs를 useState방식으로 만들어 본다. 
import { useState, useCallback } from 'react';

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    // change
    
    const handleInputChange = useCallback(e => {
      const { name, value } = e.target;
      setForm(form => ({ ...form, [name]: value }));
    }, []);
    
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    
  return [form, handleInputChange, reset];
}

export default useInputs;





// // 2. 커스텀훅스만들때 위의 useState방식대신 아래의 useReducer방식으로 대체.
// import { useReducer, useCallback } from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE':
//       return {
//         ...state,
//         [action.name]: action.value
//       };
//     case 'RESET':
//       return Object.keys(state).reduce((acc, current) => {
//         acc[current] = '';
//         return acc;
//       }, {});
//     default:
//       return state;
//   }
// }

// function useInputs(initialForm) {
//   const [form, dispatch] = useReducer(reducer, initialForm);
//   // change
//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch({ type: 'CHANGE', name, value });
//   }, []);
//   const reset = useCallback(() => dispatch({ type: 'RESET' }), []);
//   return [form, onChange, reset];
// }

// export default useInputs;