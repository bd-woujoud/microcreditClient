import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
import { DeleteDemande, GetDemandeByUser, selectAddDemande, selectdeleteDemande, selectUserDemande } from '../../features/Demande/demandeSlice';
import moment from 'moment'
import { FaRegFilePdf } from 'react-icons/fa'


function GetDemandeClient() {

    const {user}=useContext(AuthContext)
    const mesdemandes = useSelector(selectUserDemande)
    const deletedemandes = useSelector(selectAddDemande)
    const adddemandes = useSelector(selectdeleteDemande)
  

    const dispatch=useDispatch()
    useEffect(() => {

        dispatch(GetDemandeByUser(user._id))

    }, [mesdemandes,adddemandes,deletedemandes])


    return (

        <div>
            <div class="dash_blog">
                <div class="dash_blog_inner">
                    <div class="dash_head"> {/*boutton + create*/}
                        <h3 style={{ color: 'black' }}><span><i class="fa fa-reorder"></i>Demandes de microcrédits</span> <NavLink to='/createdemande'><span class="plus_green_bt" style={{ cursor: 'pointer' }}>+</span></NavLink></h3>
                    </div>
                    <div class="list_cont">
                        <p>***Liste de mes  demandes de microcrédits***</p> {/*Tableau contient liste des demandes de microcrédits crées par le client 
                        avec une boutton delete pour annuler(supprimer) la demande */}
                    </div>
                    <div class="table-responsive-sm">
                                            <table class="table table-striped projects">
                                                <thead class="thead-dark">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Date de demande</th>
                                                        
                                                        <th>Type_microcrédit</th>
                                                        <th>Montant_demandé</th>
                                                      <th>Documents</th>
                                                        <th>Etat</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody >

                                                    {

                                                        mesdemandes.map((r, i) => {

                                                            return (
                                                                <tr  >
                                                                    <td>{i}</td> 
                                                                    <td>{moment(r.createdAt).format('DD-MM-YYYY')}</td>
                                                                   <td>{r.type}</td>
                                                                   <td>{r.montant}</td>
                                                                    <td> <a href={'http://localhost:5000/getfile/' + r.document1} target='_blank' ><FaRegFilePdf style={{ fontSize: '20px' ,color:'red'}} /></a>
                                                                    
                                                                    <a href={'http://localhost:5000/getfile/' + r.document2} target='_blank' ><FaRegFilePdf style={{ fontSize: '20px' ,color:'red'}} /></a>
                                                                    <a href={'http://localhost:5000/getfile/' + r.document3} target='_blank' ><FaRegFilePdf style={{ fontSize: '20px' ,color:'red'}} /></a>
                                                                    <a href={'http://localhost:5000/getfile/' + r.document4} target='_blank' ><FaRegFilePdf style={{ fontSize: '20px',color:'red' }} /></a>
                                                                    
                                                                    </td>
                                                                    <td> {

                                                                    r.isvalid && r.isvalid
                                                                        ?
                                                                        <button type="button" class="btn btn-secondary " style={{ backgroundColor: 'green', color: 'white', cursor: 'default', width: '100px' }} >confirmer</button>
                                                                        :

                                                                        <button type="button" class="btn btn-secondary " style={{ fontSize: '15px', cursor: 'default', width: '100px' }}>en cours</button>
                                                                    }</td>
                                                                   
                                                                    <td> { r.isvalid && r.isvalid  ?
                                                                   <button type="button" class="btn btn-danger" disabled="true" >retiré</button>
                                                                    :
                                                                   
                                                                  <button  onClick={()=>{dispatch(DeleteDemande(r._id))}}type="button" class="btn btn-danger" >retiré</button>
                                                                    }</td>
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
    )
}

export default GetDemandeClient