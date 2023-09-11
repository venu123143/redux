import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//it is the advance way of calling api's.
export const producsApi = createApi({ 
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes:["user"],
    endpoints: (builder) => ({
        // this will generate custom hook.
        getAllProducts: builder.query({
            query: () => "products",
        }),
        // registerUser:builder.mutation({
        //     query:(values)=>({
        //         url:'/register',
        //         method:"POST",
        //         body:values,
        //     }),
        //     invalidatesTags:["user"]
        // }),
        // loginUser:builder.mutation({
        //     query:(state)=>({
        //         url:'/login',
        //         method:"POST",
        //         body:state,
        //     }),
        //     invalidatesTags:["user"]
        // })
    })
});

export const {useGetAllProductsQuery} = producsApi

