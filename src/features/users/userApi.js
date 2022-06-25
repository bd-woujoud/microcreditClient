import axios from "axios";
import { requests } from "../requests";



    export function updateUser(data) {
        return axios.put(requests.usersapi + '/update/'+data.id, data.data)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }
    export function uploadAvatar(data) {
        return axios.put(requests.usersapi + '/avatar/' +data.id, data.data)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }

    export function getclient() {

        return axios.get(requests.clientapi+"/getAllclient" )
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }
    export function getcomite() {

        return axios.get(requests.usersapi +"/getComite" )
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }

    export function deleteclient(id) {

        return axios.delete(requests.clientapi + '/deleteclientbyId/'+id)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    
    
        }
    
    export function deletecomite(id) {

        return axios.delete(requests.usersapi + '/deletecomite/'+id)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    
    
        }
    
    
 
    