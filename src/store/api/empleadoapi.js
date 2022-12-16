import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { swal, ToastSigned } from "../../components/swal";
import { setEmpleado } from "../slices/empleado.slice";

const empleadoapi = createApi({
    reducerPath: "empleadoapi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/api/v1/",
        prepareHeaders: headers => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Empleado"],
    endpoints: builder => ({
        getEmpleado: builder.query({
            query() {
                return {
                    url: `empleado`,
                    method: "GET",
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setEmpleado({
                            empleado: data,
                        })
                    );
                } catch (error) {}
            },
        }),
        postEmpleado: builder.mutation({
            query: body => ({
                url: `empleado`,
                method: "POST",
                body,
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    ToastSigned();
                } catch (error) {
                    console.log(error);
                    swal("Error", error.error.data.message, "error");
                }
            },
        }),
        putEmpleado: builder.mutation({
            query: body => ({
                url: `empleado`,
                method: "PUT",
                body,
            }),
        }),
        deleteEmpleado: builder.mutation({
            query: id => ({
                url: `empleado/${id}`,
                method: "DELETE",
            }),
        }),
        loginEmpleado: builder.mutation({
            query: body => ({
                url: `empleado/login`,
                method: "POST",
                body,
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem("token", data.token);
                    ToastSigned();
                } catch (error) {
                    console.log(error);
                    swal("Error", error.error.data.message, "error");
                }
            },
        }),
    }),
});

export default empleadoapi;

export const {
    useGetEmpleadoQuery,
    usePostEmpleadoMutation,
    usePutEmpleadoMutation,
    useDeleteEmpleadoMutation,
    useLoginEmpleadoMutation,
} = empleadoapi;
