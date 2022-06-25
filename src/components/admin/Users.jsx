

import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthContext'
import { DeleteClient,GetClient, selectAllClient, selectdeletestatus } from '../../features/users/userSlice'
import SideBarPrincipal from '../../layouts/SiderBarPrincipal'


function Users() {

    // const { user } = useContext(AuthContext)

    const dispatch = useDispatch()
    const allclient = useSelector(selectAllClient)

    console.log(allclient,'ooofffffff')
    const deleteclient = useSelector(selectdeletestatus)

    useEffect(() => {

    dispatch(GetClient())

   }, [deleteclient])


    return (

        <div>

            <SideBarPrincipal />
                <div id="content" style={{ paddingTop: '150px' }}>
                    <div class="midde_cont">
                        <div class="container-fluid">
                            <div className="row column1">
                                <div className="col-md-10">
                                    <div className="white_shd full margin_bottom_30">
                                        <div className="full graph_head">
                                            <div className="heading1 margin_0">
                                                <h2>Users_list</h2>
                                            </div>
                                        </div>
                                        <div class="table-responsive " >
                                            <table class="table table-bordered" >
                                                <thead >
                                                    <tr>
                                                        <th >#</th>
                                                        <th >Nom</th>
                                                        <th>Prenom</th>
                                                        <th>Email</th>
                                                        <th>adresse</th>
                                                        <th>téléphone</th> 
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        allclient.map((e, i) => {
                                                            
                                                            return (
                                                                <tr>
                                                                    <td> {i} </td>
                                                                    <td> {e.nom} </td>
                                                                    <td> {e.prenom} </td>
                                                                    <td> {e.email} </td>
                                                                    <td> {e.adresse} </td>
                                                                    <td> {e.NumContact} </td> 
                                                                    <td class="d-flex align-items-center">
                                                                        <button onClick= {()=>dispatch(DeleteClient(e._id))}  type="button" class="btn btn-danger btn-sm btn-icon-text">
                                                                            Supprimer
                                                                        <i class="typcn typcn-delete-outline btn-icon-append"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
    )
}

export default Users