
import React, { useContext, useEffect, useState } from 'react'
import SideBarPrincipal from '../../layouts/SiderBarPrincipal'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegFilePdf } from 'react-icons/fa'
import { GetdemandeByID, selectDemandeById } from '../../features/Demande/demandeSlice'
import { useHistory } from 'react-router-dom'

function Details() {
   
   // const { user } = useContext(AuthContext)

   const history=useHistory()
   const dispatch=useDispatch()

   const demandeId=useSelector(selectDemandeById)

   useEffect(() => {

      dispatch(GetdemandeByID({id:demandeId._id}))

   }, [])

   return (

      <div>

         <SideBarPrincipal />

         {
            demandeId.user &&

            <div id="content" style={{ paddingTop: '70px' ,position:'fixed'}}>
               <div className="inner_page contact_page">
                  <div className="container-fluid ">
                     <div className="row column_title">
                        <div className="col-md-12">
                           <div className="page_title mb-3">
                              <h2 style={{margintop: "25px"}}> Dossier de demandeur du microcrédits </h2>
                           </div>
                        </div>
                     </div>
                     <div className="row column1 center">
                        <div className="col-md-10">
                           <div className="white_shd full margin_bottom_30 center">
                             
                              <div className="full price_table padding_infor_info"style={{ boxShadow:" 0 6px 8px 0 rgba(0, 0, 0, 0.8), 0 10px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                                 <div className="row">
                                    <div className="col-lg-12 col-md-10 col-sm-6 col-xs-12 profile_details margin_bottom_60">
                                       <div className="contact_blog">
                                          <div className="contact_inner">
                                             <div className="row">

                                                <div className="left">
                                                   <h3> {demandeId.civilite} : {demandeId.nom} {demandeId.prenom}</h3>
                                                   <p>CIN N°: {demandeId.num_piece} </p>
                                                   <ul className="list-unstyled">
                                                      <li><i className="fa fa-envelope-o"></i>  {demandeId.user.email}</li>
                                                      <li><i className="fa fa-phone"></i> : {demandeId.user.NumContact}</li>
                                                      <li><i className="fa fa-map-marker"></i> : {demandeId.gouvernorat}</li>
                                                   </ul>
                                                   <p> Nombre d'enfants en charge: {demandeId.enfants} </p>

                                                </div>
                                                <div className="right ">
                                                   <div className="profile_contacts float-right">
                                                      <img style={{ width: "100px", height: "100px" }} className="img-responsive" src={"http://localhost:5000/getfile/" + demandeId.user.avatar} alt="#" />
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="bottom_list"></div>
                                          <div className="row">
                                             <div className='col-md-4 '>
                                                <h4 >Informations professionnel:</h4>
                                                <p><strong>Statut_professionnel: </strong> {demandeId.statut_prof}</p>
                                                <p><strong>Revenu mensuel (Net): </strong> {demandeId.revenu}</p>
                                                <p><strong>crédit en cours: </strong> {demandeId.credit_cour}</p>
                                                <p><strong>Type de microcrédit souhaité : </strong> {demandeId.type}</p>
                                                <p><strong>Montant de microcrédit souhaité : </strong> {demandeId.montant}</p>
                                                <p><strong>Durée de remboursement souhaité : </strong> {demandeId.duree}</p>
                                             </div>

                                             <div className='col-md-4'>
                                                <h4 >Garant :</h4>
                                                <p><strong>Nom et prénom  du garant: </strong> {demandeId.nom_garant}</p>
                                                <p><strong>Montant_garant: </strong> {demandeId.montant_garant}</p>
                                             </div>
                                             <div className='col-md-4'>
                                                <h4> Documents:</h4>
                                                <p><strong>Fiche1:  <a href={'http://localhost:5000/getfile/' + demandeId.document1} target = "_blank" ><FaRegFilePdf style={{ fontSize: '20px' }} /></a></strong></p>
                                                <p><strong>Fiche2:  <a href={'http://localhost:5000/getfile/' + demandeId.document2} target = "_blank" ><FaRegFilePdf style={{ fontSize: '20px' }} /></a></strong></p>
                                                <p><strong>Fiche3:  <a href={'http://localhost:5000/getfile/' + demandeId.document3} target = "_blank" ><FaRegFilePdf style={{ fontSize: '20px' }} /></a></strong></p>
                                                <p><strong>Fiche4:  <a href={'http://localhost:5000/getfile/' + demandeId.document4} target = "_blank" ><FaRegFilePdf style={{ fontSize: '20px' }} /></a></strong></p>
                                             </div>
                                             </div>
                                             { !(demandeId.isvalid) &&
                                             <div className="bottom_list">
                                                <div className="right_button" >
                                                   <button type="button" className="btn btn-primary btn-xs">
                                                     <span  onClick={() => { localStorage.setItem('demande', demandeId._id); history.push('/CreateEcheancier') }} > calculer le plan 
                                                  </span>  </button>
                                                </div> </div>
                                             }
                                         

                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>}
      </div>
   )
}

export default Details