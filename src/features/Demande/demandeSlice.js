import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { alldemande, createdemande, deletedemande, demandebyId, getDemandeUser, updatedemande } from './demandeApi';
import Swal from 'sweetalert2';
import { message} from 'antd';
const initialState = {
    
    addDemande: '',
    AllDemande: [],
    userdemande: [],
    deletedemande: '',
    updatedemande:'',
    getByid:[]
};

export const AddDemande = createAsyncThunk(

    'demande/createdemande',
    async (data) => {

        const response = await createdemande(data);
        // The value we return becomes the fulfilled action payload
        return response.data;
    }

);

export const GetAllDemande = createAsyncThunk(

    'demande/alldemande',
    async () => {

        const response = await alldemande();
        // The value we return becomes the fulfilled action payload
        return response.data;
    }

);

//getdemandebyuser

export const GetDemandeByUser = createAsyncThunk(

    'demande/Getbyuser',

    async (id) => {
        const response = await getDemandeUser(id);
        return response.data;
    }

);


//deletedemandebyuser

export const DeleteDemande = createAsyncThunk(

    'demande/deletedemande',

    async (id) => {
        const response = await deletedemande(id);
        return response;
    }

);

//update

export const UpdateDemande = createAsyncThunk(

    'demande/updatedemande',

    async (data) => {
        const response = await updatedemande(data);
        return response;
    }

);

export const GetdemandeByID = createAsyncThunk( // générer les créateurs d'action Redux
    'demande/getdemandeByID',
    async (id) => {
        const response = await demandebyId(id);
       
        return response.data;
    }
);

export const demandeSlice = createSlice({
  
    name: 'demandes',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {

        builder

            //create
            .addCase(AddDemande.pending, (state) => {

            })

            .addCase(AddDemande.fulfilled, (state, action) => {

                 if (state.addDemande = 'success') {

                    state.AllDemande.push(action.payload.data.data);

                    Swal.fire({
                        icon: 'success',
                        title: 'votre demande à été envoyer avec succés!',
                    })
                }

                else {
                    state.addDemande = 'failure'
                    window.location.href('/home')
                }

            })

            .addCase(AddDemande.rejected, (state, action) => {

            })


            //getall

            .addCase(GetAllDemande.pending, (state) => {

            })

            .addCase(GetAllDemande.fulfilled, (state, action) => {

                console.log(action.payload.data, "dataaaaaaaa");

                state.AllDemande = action.payload.data
                

            })

            .addCase(GetAllDemande.rejected, (state, action) => {

            })

            //getallbyuser

            .addCase(GetDemandeByUser.pending, (state) => {

            })

            .addCase(GetDemandeByUser.fulfilled, (state, action) => {


                state.userdemande = action.payload.data

            })

            .addCase(GetDemandeByUser.rejected, (state, action) => {

            })


            //deleteby id

            .addCase(DeleteDemande.pending, (state) => {

            })

            .addCase(DeleteDemande.fulfilled, (state, action) => {

                console.log(action.payload, "kkkkkkkkkkk");

                if (action.payload.data) {


                    state.deletedemande = "success"
                    message.success("votre demande retirée")
                }
                else {

                    state.deletedemande = "failure"

                }
            })

            .addCase(DeleteDemande.rejected, (state, action) => {

            })

            
            // GetdemandeByid
            .addCase(GetdemandeByID.pending, (state) => {

            })
            .addCase(GetdemandeByID.fulfilled, (state, action) => {
                console.log(action.payload,"offffffffffff");
                state.getByid = action.payload.data  // Ajouter un utilisateur au tableau d’état
            })

            .addCase(GetdemandeByID.rejected, (state, action) => {
            })

                //update

    .addCase(UpdateDemande.pending, (state) => {

    })

    .addCase(UpdateDemande.fulfilled, (state, action) => {

        console.log(action.payload);

        if (action.payload.data=200) {
          state.updatedemande = 'success'
          
        } else {

          state.updatedemande = 'failure'

        }   
    })
    .addCase(UpdateDemande.rejected, (state, action) => {

    })



    }
})

export const { } = demandeSlice.actions;
export const selectAddDemande = (state) => state.demandes.addDemande;
export const selectGetAllDemande = (state) => state.demandes.AllDemande;
export const selectUserDemande = (state) => state.demandes.userdemande;
export const selectdeleteDemande = (state) => state.demandes.deletedemande;
export const selectDemandeById = (state) => state.demandes.getByid;
export const selectDemandeUpdate = (state) => state.demandes.UpdateDemande;

export default demandeSlice.reducer;
