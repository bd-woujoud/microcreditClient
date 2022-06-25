
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../context/AuthContext'
import { AddDemande, selectAddDemande } from '../features/Demande/demandeSlice';
import SideBarPrincipal from '../layouts/SiderBarPrincipal';
import { cities, civilities, situation } from '../mock/cities'

function CreateDemandes(props) {

    const { user } = useContext(AuthContext)
    const dispatch = useDispatch()

    const [civilite, setCivilite] = useState("madame");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [file1, setFile1] = useState(null)
    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)
    const [file4, setFile4] = useState(null)
    const [date_naissance, setDate_naissance] = useState("");
    const [num_piece, setNum_piece] = useState("");
    const [tel, settel] = useState("");
    const [famille, setFamille] = useState("");
    const [enfants, setEnfants] = useState("");
    const [gouvernorat, setGouvernorat] = useState("");
    const [statut_prof, setStatut_prof] = useState("");
    const [revenu, setRevenu] = useState("");
    const [credit_cour, setCredit_cour] = useState("");
    const [type, setType] = useState("");
    const [montant, setMontant] = useState("");
    const [duree, setDuree] = useState("");
    const [nom_garant, setNom_garant] = useState("");
    const [montant_garant, setMontant_garant] = useState("");


    const handleOk = (e) => {

        e.preventDefault();

        let data = new FormData()

        data.append("nom", nom)
        data.append('civilite', civilite)
        data.append('prenom', prenom)
        data.append('date_naissance', date_naissance)
        data.append("num_piece", num_piece)
        data.append("tel", tel)
        data.append("famille", famille)
        data.append("enfants", enfants)
        data.append("gouvernorat", gouvernorat)
        data.append("statut_prof", statut_prof)
        data.append("revenu", revenu)
        data.append("credit_cour", credit_cour)
        data.append("type", type)
        data.append("montant", montant_garant)
        data.append("duree", duree)
        data.append("nom_garant", nom_garant)
        data.append("montant_garant", montant_garant)
        data.append('document1', file1)
        data.append('document2', file2)
        data.append('document3', file3)
        data.append('document4', file4)
        data.append('user', user._id)
        console.log("ccccc", data);

        dispatch(AddDemande(data))
        props.history.replace("/ContentClient")
    }


    return (
        <div >

            <SideBarPrincipal />
            <div id="content">
                <div class='main ml-2 ' style={{ marginTop: '100px' }}>
                    <div class="container">
                        <div className="row">
                            <div className="row">
                                <div className='card' style={{ width: '100%', marginBottom: "100px", color: 'black' }}>
                                    <div class="col-md-12" >
                                        <form style={{ width: '1000px', margin: '50px', color: 'black' }}><h2>Coordonnées</h2>
                                            <h5 style={{ margin: '40px', fontWeight: 'bold' }}>Informations personnels :</h5>
                                            <div className="form-row" style={{ marginTop: '50px' }}>
                                                <div className="form-group col-md-3">
                                                    <label htmlFor="inputnom">Nom<color style={{ color: 'red' }}>*</color></label>
                                                    <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" className="form-control" id="inputnom" placeholder="Tapez votre nom" />
                                                </div>
                                                <div className="form-group col-md-3">
                                                    <label htmlFor="inputPrenom">Prenom<color style={{ color: 'red' }}>*</color></label>
                                                    <input value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" className="form-control" id="inputPrenom" placeholder="Tapez votre prenom" required />
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="inputcivilite">Civilité<color style={{ color: 'red' }}>*</color></label>

                                                    <select value={civilite} onChange={(e) => setCivilite(e.target.value)} class="form-control" style={{ color: 'black', fontSize: '15px' }} id="inputcivilite" required>
                                                        {
                                                            civilities.map((c, i) => {
                                                                return (
                                                                    <option key={i} value={c}>{c}</option>
                                                                )
                                                            })
                                                        }


                                                    </select>


                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="inputnaissance">Date_Naissance<color style={{ color: 'red' }}>*</color></label>
                                                    <input onChange={(e) => setDate_naissance(e.target.value)} value={date_naissance} type="date" className="form-control" id="inputnaissance" required />
                                                </div>
                                            </div>


                                            <div className="form-row">
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="inputGouvernorat">Gouvernorat<color style={{ color: 'red' }}>*</color></label>

                                                    <select value={gouvernorat} onChange={(e) => setGouvernorat(e.target.value)} class="form-control" style={{ color: 'black', fontSize: '15px' }} id="inputGouvernorat" required>
                                                        {
                                                            cities.map((c, i) => {
                                                                return (
                                                                    <option key={i} value={c}>{c}</option>
                                                                )
                                                            })
                                                        }


                                                    </select>
                                                </div>

                                                <div className="form-group col-md-2">
                                                    <label htmlFor="inputcin">Num_CIN<color style={{ color: 'red' }}>*</color></label>
                                                    <input value={num_piece} onChange={(e) => setNum_piece(e.target.value)} type="text" className="form-control" id="inputcin" required />
                                                </div>

                                                <div className="form-group col-md-2">
                                                    <label htmlFor="inputtel">Téléphone<color style={{ color: 'red' }}>*</color></label>
                                                    <input value={tel} onChange={(e) => settel(e.target.value)} type="text" className="form-control" id="inputtel" required />
                                                </div>
                                            </div>


                                            <div className="form-row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputfamille">Situation familiale<color style={{ color: 'red' }}>*</color></label>

                                                    <select value={famille} onChange={(e) => setFamille(e.target.value)} class="form-control" style={{ color: 'black', fontSize: '15px' }} id="inputfamille" required >
                                                        {
                                                            situation.map((c, i) => {
                                                                return (
                                                                    <option key={i} value={c}>{c}</option>
                                                                )
                                                            })
                                                        }


                                                    </select>



                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputenfant">Nombre d'enfants en charge<color style={{ color: 'red' }}>*</color></label>
                                                    <input value={enfants} onChange={(e) => setEnfants(e.target.value)} type="text" className="form-control" id="inputenfant" required />
                                                </div>

                                            </div>

                                            <h5 style={{ margin: '40px', fontWeight: 'bold' }}>Informations professionnel:</h5>

                                            <div className="form-row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputstatut"> Statut professionnel<color style={{ color: 'red' }}>*</color></label>
                                                    <input value={statut_prof} onChange={(e) => setStatut_prof(e.target.value)} type="text" className="form-control" id="inputstatut" required />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputrevenu">Revenu mensuel (Net)<color style={{ color: 'red' }}>*</color></label>
                                                    <input value={revenu} onChange={(e) => setRevenu(e.target.value)} type="text" className="form-control" id="inputrevenu" required />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputecredit">crédit en cours<color style={{ color: 'red' }}>*</color></label>

                                                    <select value={credit_cour} onChange={(e) => setCredit_cour(e.target.value)} class="form-control" style={{ color: 'black', fontSize: '15px' }} id="inputecredit" required>
                                                        <option value="Oui">Oui</option>
                                                        <option value="Non">Non</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <h5 style={{ margin: '40px', fontWeight: 'bold' }}>Type de microcrédit souhaité :</h5>

                                            <div className="form-row">
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputtype">Type de microcrédit souhaité <color style={{ color: 'red' }}>*</color> </label>
                                                    <input value={type} onChange={(e) => setType(e.target.value)} type="text" className="form-control" id="inputtype" required />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputmontant">Montant de microcrédit souhaité <color style={{ color: 'red' }}>*</color></label>
                                                    <input value={montant} onChange={(e) => setMontant(e.target.value)} type="text" className="form-control" id="inputmontant" required />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputduree">Durée de remboursement souhaité <color style={{ color: 'red' }}>*</color></label>
                                                    <input value={duree} onChange={(e) => setDuree(e.target.value)} type="text" className="form-control" id="inputduree" required />
                                                </div>

                                            </div>


                                            <h5 style={{ margin: '40px', fontWeight: 'bold' }}>Garant :</h5>

                                            <div className="form-row">

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputtype">Nom et prénom <color style={{ color: 'red' }}>*</color> </label>
                                                    <input value={nom_garant} onChange={(e) => setNom_garant(e.target.value)} type="text" className="form-control" id="inputtype" required />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputmontantg">montant_garant <color style={{ color: 'red' }}>*</color></label>
                                                    <input value={montant_garant} onChange={(e) => setMontant_garant(e.target.value)} type="text" className="form-control" id="inputmontantg" required />
                                                </div>
                                            </div>

                                            <h5 style={{ margin: '40px', fontWeight: 'bold' }}> Documents:</h5>
                                            <div className="form-row">
                                            <div className="col-md-3 mb-5">
                                                <div class="my-3"><color style={{ color: 'red' }}>*</color>
                                                    <input onChange={(e) => setFile1(e.target.files[0])} class="form-control" type="file" name="document" id="formFile" required />
                                                </div>
                                            </div>
                                            <div className="col-md-3 mb-5">
                                                <div class="my-3"><color style={{ color: 'red' }}>*</color>
                                                    <input onChange={(e) => setFile2(e.target.files[0])} class="form-control" type="file" name="document" id="formFile" required />
                                                </div>
                                            </div>
                                            <div className="col-md-3 mb-5">
                                                <div class="my-3"><color style={{ color: 'red' }}>*</color>
                                                    <input onChange={(e) => setFile3(e.target.files[0])} class="form-control" type="file" name="document" id="formFile" required /> 
                                                </div>
                                            </div>
                                          
                                                <div className="col-md-3 mb-5">
                                                    <div class="my-3"><color style={{ color: 'red' }}>*</color>
                                                        <input onChange={(e) => setFile4(e.target.files[0])} class="form-control" type="file" name="document" id="formFile" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="left_button">
                                                <button type="submit" onClick={handleOk} className="btn btn-primary float-right mb-5">Confirmer</button>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}
export default CreateDemandes