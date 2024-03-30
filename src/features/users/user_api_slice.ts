import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMTI3NTc1NCwiZXhwIjoxNzExMjc5MzU0fQ.7xbC64cnaYFpbA0b56EWtbupq726MI26Zf152m6BULs'

export interface User {
    id: number,
    firstName: string,
    imageUrl: string,
    username:string,
    password: string,
    email: string,
    phone: string,
    image: string
}
export interface UserInfoResponse {
    users: User[]
}

export const apiSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
        prepareHeaders(headers){
            headers.set('Authorization',API_TOKEN);
            return headers;
        },
    }),
    endpoints(builder){
        return{
            fetchUser: builder.query<UserInfoResponse,number|void>({
                query(limit =10){
                    return `/users?limit=${limit}`;
                },
            }),
        };
    }
});


export const { useFetchUserQuery } = apiSlice;