import { createStore } from 'vuex';
import axiosClient from '../axios';
const tmpSurvey = [
    {
        id: 1,
        title: "Love Never Die",
        slug: "love never die",
        status: "draft",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",
        description: "My name is Amimul",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which Country are you",
                description: null,
                data: {
                    options: [
                        { uuid: "1", text: "USA" },
                        { uuid: "2", text: "FRANCE" },
                        { uuid: "3", text: "ETALY" },
                        { uuid: "4", text: "INDIA" },
                    ]
                }
            },
            {
                id: 1,
                type: "select",
                question: "From which Country are you",
                description: null,
                data: {
                    options: [
                        { uuid: "1", text: "USA" },
                        { uuid: "2", text: "FRANCE" },
                        { uuid: "3", text: "ETALY" },
                        { uuid: "4", text: "INDIA" },
                    ]
                }
            },
            {
                id: 2,
                type: "radio",
                question: "Who are you",
                description: null,
                data: {
                    options: [
                        { uuid: "1", text: "USA" },
                        { uuid: "2", text: "FRANCE" },
                        { uuid: "3", text: "ETALY" },
                        { uuid: "4", text: "INDIA" },
                    ]
                }
            },
            {
                id: 3,
                type: "checkbox",
                question: "What is name",
                description: null,
                data: {
                    options: [
                        { uuid: "1", text: "USA" },
                        { uuid: "2", text: "FRANCE" },
                        { uuid: "3", text: "ETALY" },
                        { uuid: "4", text: "INDIA" },
                    ]
                }
            },
            {
                id: 4,
                type: "select",
                question: "Who is your best palyer",
                description: null,
                data: {
                    options: [
                        { uuid: "1", text: "USA" },
                        { uuid: "2", text: "FRANCE" },
                        { uuid: "3", text: "ETALY" },
                        { uuid: "4", text: "INDIA" },
                    ]
                }
            },
            {
                id: 5,
                type: "select",
                question: "what is your channell",
                description: null,
                data: {
                    options: [
                        { uuid: "1", text: "USA" },
                        { uuid: "2", text: "FRANCE" },
                        { uuid: "3", text: "ETALY" },
                        { uuid: "4", text: "INDIA" },
                    ]
                }
            },
            {
                id: 7,
                type: "text",
                question: "What is favourite youtube channel",
                description: null,
                data: {}
            },
            {
                id: 8,
                type: "textarea",
                question: "What is favourite movie",
                description: "Write Honestly",
                data: {}
            },
        ]
    }, {
        id: 2,
        title: "Love is Blind",
        slug: "love is Blind",
        status: "activve",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
        description: "My name is Amimul",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions: []
    }
];
const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        surveys: [...tmpSurvey],
    },
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                })
        },
        login({ commit }, user) {
            return axiosClient.post('/login', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                })
        },
        logout({ commit }) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout');
                    return response;
                })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem('TOKEN');
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.token;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    getters: {},
    modules: {}
});
export default store;