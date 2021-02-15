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

            const { data } = await axios({
                method: "post",
                url: "/front/auth",
                headers,
                data: dataA,
            }).catch((err) => {
                return err
            });
            if (data.token) {
                response = data.token
            }
            return response
        },
    },
}
