import axios from "axios";
import { requests } from "../requests";

export function createdemande(data) {

    return axios.post(requests.demandeapi + '/createdemande',data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }

    export function getAlldemande() {
    return axios.get(requests.demandeapi + '/getAlldemande')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }


    export function getDemandeUser(id) {

        return axios.get(requests.demandeapi +'/getbyuser/'+id)
    
        .then(res => {
            return res
        }
        )
        .catch(err => {
            return err
        }
        )
    
        }



      
        
        export function deletedemande(id){

            return axios.delete(requests.demandeapi+'/deletedemandebyId/'+id)
            .then(res=>{
                return res
            }
            )
            .catch(err=>{
                return err
            })

        }
        
        export function alldemande(){

            return axios.get(requests.demandeapi+'/getAlldemande')
            .then(res=>{
                return res
            }
            )
            .catch(err=>{
                return err
            })

        }


        export function updatedemande(data){

            return axios.update(requests.demandeapi+'/updatedemande/'+data.id,data)
            .then(res=>{
                return res
            }
            )
            .catch(err=>{
                return err
            })

        }

        export function demandebyId(id){

            return axios.get(requests.demandeapi+'/getdemandebyId/' + localStorage.getItem('singledemandeid'))
            .then(res=>{
                return res
            }
            )
            .catch(err=>{
                return err
            })

        }
        export function updatedemandebyId(id){

            return axios.put('http://localhost:5000/demande/updatedemande/'+localStorage.getItem('demande'), { isvalid: true })
            .then(res=>{
                return res
            }
            )
            .catch(err=>{
                return err
            })

        }