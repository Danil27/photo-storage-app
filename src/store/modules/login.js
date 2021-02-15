import axios from "../../plugins/axios";

export default {
    namespaced: true,

    actions: {
        async authorization({ commit }, { user }) {
            (commit)
            let response = null;
            const headers = {
                "content-type": "application/json"
            };
            const dataA = JSON.stringify({
                login: user.login,
                password: user.password,
            });

            try {
                const {
                    data
                } = await axios({
                    method: "post",
                    url: "/front/auth",
                    headers,
                    data: dataA,
                });
                if (data.token) {
                    response =  data.token
                }

            } catch (e) {
                response = {
                    message: e.message
                };
            }
            return response
        },
    },
}