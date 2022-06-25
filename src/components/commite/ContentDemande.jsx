import React, { useEffect } from 'react'
import SideBarPrincipal from '../../layouts/SiderBarPrincipal'
import { BiCheckDouble } from 'react-icons/bi'
import { GrSend } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegFilePdf } from 'react-icons/fa'
import { DeleteDemande, GetAllDemande, selectdeleteDemande, selectGetAllDemande } from '../../features/Demande/demandeSlice'
import moment from 'moment'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


function ContentDemande({r}) {

  
    const demandes = useSelector(selectGetAllDemande)
    const deleted = useSelector(selectdeleteDemande)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(GetAllDemande())

    }, [deleted])

    const updateDemande = () => {
    
        axios.put('http://localhost:5000/demande/updatedemande/'+localStorage.getItem('demande'), { isvalid: true })
            .then(res => {

            })
    }
    

    return (

        <div>
            <SideBarPrincipal />
         
            <div id="content">
                <div class='main ml-2 ' style={{ marginTop: '100px' }}>
                    <div class='container-fluid'>
                        <div className="row column1">
                      
                            <div class="col-md-12 col-md-12">
                                <h2> Liste des demandes de microcrédits</h2>
                                <div class="table-responsive-sm mt-5">
                                            <table class="table table-hover">
                                                <thead class="thead-white ml-5">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Nom</th>
                                                        <th>prenom</th>
                                                        <th>statut</th>
                                                        <th>Type</th>
                                                        <th>Montant</th>
                                                        <th>Date de demande</th>
                                                        <th>Consulter</th>
                                                        <th>Action</th>
                                                        <th>Etat</th>
                                                    </tr>
                                                </thead>
                                                <tbody >

                                                    {

                                                        demandes.map((r, i) => {

                                                            return (
                                                                <tr  >
                                                                    <td>{i}</td> 
                                                                    <td>{r.nom}</td> 
                                                                    <td>{r.prenom}</td> 
                                                                    <td>{r.statut_prof}</td> 
                                                                    <td>{r.type}</td>
                                                                    <td>{r.montant}</td>
                                                                    <td>{moment(r.createdAt).format('DD-MM-YYYY')}</td>
                                                                    <td>

                                                        <NavLink to="/details">
                                                        <button onClick={()=> {localStorage.setItem('singledemandeid',r._id)} }
                                                         type="button" class="btn btn-primary btn-sm btn-icon-text"> voir
                                                        <i class="typcn typcn-delete-outline btn-icon-append">
                                                        </i>

                                                            </button>

                                                        </NavLink>

                                                            </td> 
                                                                    <td>
                                                                    {

                                                                        r.isvalid

                                                                        ?
                                                                        <BiCheckDouble style={{ fontSize: '25px', color: 'green' }} />
                                                                        :

                                                                        <span /*onClick={updateDemande}*/ ><GrSend  onClick={() => { localStorage.setItem('demande', r._id) }} style={{ cursor: 'pointer', fontSize: '20px' }} /></span>
                                                                }

                                                            </td>
                                                            
                                                            <td>

                                                                {
                                                                    r.isvalid && r.isvalid

                                                                        ?

                                                                        <button type="button" class="btn  mr-3 " style={{ backgroundColor: '#4fd192', color: 'white', cursor: 'default', width: '100px' }} >confirmer</button>
                                                                        :

                                                                        <button type="button" class="btn btn-secondary mr-3" style={{ fontSize: '15px', cursor: 'default', width: '100px' }}>en cours</button>
                                                                }

                                                            
                                                            <button onClick= {()=>dispatch(DeleteDemande(r._id))}  type="button" class="btn btn-danger ">
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
            </div></div>

    )
}

export default ContentDemande