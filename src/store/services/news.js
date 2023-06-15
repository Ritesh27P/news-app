import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const newsApi = createApi({
    reducerPath: "news",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.newscatcherapi.com/v2/"}),
    endpoints: (builder) => ({
        fetchNews: builder.query({
            query: (search) => {
                console.log(search);
                return {
                    url: "/search",
                    params: {
                        q: search
                    },
                    headers: {
                        'x-api-key': "N3TfVl4Se3oW5RiNSpOkBRkfgqoC8hrOVRehtANTqRY"
                    },
                    method: 'GET',
                }
            }
        })
    })
})

export default newsApi;
export const {useFetchNewsQuery} = newsApi;