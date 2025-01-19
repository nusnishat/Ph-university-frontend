import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
          query: (userInfo) => ({
            url: '/auth/login',
            method: 'POST',
            body: userInfo, // Pass the user information in the request body
          }),
        }),
    }),
});

export const {useLoginMutation} = authApi