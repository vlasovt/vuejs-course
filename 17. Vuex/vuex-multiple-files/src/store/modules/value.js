// const state = {
//     value: 0
//  };
 
//  const getters = {
//     value: state => {
//         return state.value;
//     }
//  };
 
//    //cannot run asynchrounous code inside mutations
//  const mutations = {
//     updateValue:(state, payload) =>{
//         state.value = payload;
//     }
//  };
 
//  // can be asynchronous
//  const actions = {
//     updateValue: (context, payload) => {
//         context.commit('updateValue', payload);
//     }
//  };

//  export default{
//     state,
//     getters,
//     mutations,
//     actions
// };