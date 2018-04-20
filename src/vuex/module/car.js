const state = {
    test:'wzyzzzz'
}

const actions = {
    updateStatus({commit, state}, payload){
        commit('UPDATESTATUS', payload);
    }
}

const mutations ={
    UPDATESTATUS:(state, payload) =>{
        state.test = payload;
    }
}
const getters = {
    test: state => state.test
}

export default({
    namespaced:true,
    state,
    getters,
    actions,
    mutations,
})