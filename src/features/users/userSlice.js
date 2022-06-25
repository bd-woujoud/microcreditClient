import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteclient, deletecomite, getclient, getcomite, updateUser, uploadAvatar } from './userApi';
import { message} from 'antd';

const initialState = {

    avatarstatus: '',
    user: null,
    allClient: [],
    deleteclient: '',
    allComite: [],
    deletecomite:''

};

export const GetClient = createAsyncThunk(
    'client/getclient',
    async () => {

        const response = await getclient();
        // The value we return becomes the fulfilled action payload
        return response.data;
    }

);

//getComite
export const Getcomite = createAsyncThunk(
    'commit/getcommit',
    async () => {

        const response = await getcomite();
        // The value we return becomes the fulfilled action payload
        return response.data;
    }
);

//update user
export const UpdateUser = createAsyncThunk(
    'users/updateUser',
    async (data) => {
        const response = await updateUser(data);

        return response;
    }
)

// uploadd user avatar 
export const uploadavatar = createAsyncThunk(
    'users/avatar',
    async (data) => {
        const response = await uploadAvatar(data);

        return response;
    }
);

// delete client

export const DeleteClient = createAsyncThunk(

    'client/delete',
    async (id) => {

        const response = await deleteclient(id);
        // The value we return becomes the fulfilled action payload
        return response.data;
    }

);
// delete comite

export const DeleteComite = createAsyncThunk(

    'comite/delete',
    async (id) => {

        const response = await deletecomite(id);
        // The value we return becomes the fulfilled action payload
        return response.data;
    }

);



export const userSlice = createSlice({

    name: 'users',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {    //depond du server.js

        builder

            /// upload avaytar
            .addCase(uploadavatar.pending, (state, action) => {
                state.avatarstatus = 'loading'
            })

            .addCase(uploadavatar.fulfilled, (state, action) => {

                console.log(action.payload);

                if (action.payload.data) {
                    state.avatarstatus = 'success'
                    state.user = action.payload.data.data
                    message.success("image téléchargé avec succées")
                }
                else {

                    state.avatarstatus = 'failure'
                }
            })
            .addCase(uploadavatar.rejected, (state, action) => {
            })

            //get client
            .addCase(GetClient.pending, (state) => {

            })

            .addCase(GetClient.fulfilled, (state, action) => {

                if (action.payload.data) {
                    state.allClient = action.payload.data
                    console.log(state.allClient, 'aaaaaaaaaaaaa');
                }

                else {
                    console.log('failure');
                }
            })

            .addCase(GetClient.rejected, (state, action) => {
                console.log('rejected');
            })

            //get comite

            .addCase(Getcomite.pending, (state) => {

            })

            .addCase(Getcomite.fulfilled, (state, action) => {

                    state.allComite = action.payload.data
                   
            
            })

            .addCase(Getcomite.rejected, (state, action) => {
             
            })


            //delete

            .addCase(DeleteClient.pending, (state) => {
                state.deleteclient = "loading"

            })

            .addCase(DeleteClient.fulfilled, (state, action) => {

                if
                    (action.payload.data) {

                    state.deleteclient = "success"
                    message.success("compte supprimé avec succées")

                }
                else {

                    state.deleteclient = "failure"

                }
            })
            .addCase(DeleteClient.rejected, (state, action) => {
                console.log('rejected');
            })
            
            //delete

            .addCase(DeleteComite.pending, (state) => {
                state.deletecomite = "loading"

            })

            .addCase(DeleteComite.fulfilled, (state, action) => {

                if
                    (action.payload.data) {

                    state.deletecomite = "success"
                    message.success("Comite supprimé avec succées")

                }
                else {

                    state.deletecomite = "failure"

                }
            })
            .addCase(DeleteComite.rejected, (state, action) => {
            
            })
    }
})

export const { } = userSlice.actions;
export const selectAllClient = (state) => state.users.allClient;
export const selectavatarstatus = (state) => state.users.avatarstatus;
export const selectdeletestatus = (state) => state.users.deleteclient;
export const selectcomitestatus = (state) => state.users.allComite;
export const selectdeletecomite = (state) => state.users.deletecomite;

export default userSlice.reducer;

