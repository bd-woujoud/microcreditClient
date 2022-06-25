
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DeleteComite, Getcomite, selectcomitestatus, selectdeletecomite } from '../../features/users/userSlice';
import SideBarPrincipal from '../../layouts/SiderBarPrincipal';
import comite from '../../assets/image/comite.png'
import AuthService from '../../services/AuthService';
import '../../assets/css/register.css'
import 'antd/dist/antd.css';

import {
    Form,
    Input,
    Button,
    Modal
} from 'antd';

function GetCommit() {

    const allcommit = useSelector(selectcomitestatus)
    const deletecomite = useSelector(selectdeletecomite)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(Getcomite())

    }, [deletecomite])


//Ajout Comite

        const [role, setrole] = useState('');
        const [isModalVisible, setIsModalVisible] = useState(false);
      
        const showModal = () => {
            setIsModalVisible(true);
        };
    
        const handleOk = () => {
            setIsModalVisible(false);
        };
    
        const handleCancel = () => {
            setIsModalVisible(false);
        };
    
        const onFinish = (values) => {
    
            console.log('Success:', values);
            values.role = role
    
            AuthService.register(values).then(jsonData => {
                console.log(jsonData, '%cabcdefgh', "color: blue");
    
                if (!jsonData.error) {

                    alert('Comite ajouter avec succès')
                   
                   window.location.reload()
                  
                }
    
                else {
                    console.log("%c...register error...", "color: blue", jsonData)
                }
            })
    
        };
    
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
            alert('Erreur inscription');
        };


    return (

        <div>

            <SideBarPrincipal />

            <div id="content" style={{ paddingTop: '150px', marginLeft: '80px' }}>
                <div class="midde_cont">
                    <div class="container"></div>

                    <div class="row">
                        <div class="col-md-8">
                            <div class="card" >
                                <div className="full graph_head " style={{ backgroundColor: 'lightgray', border: 'none' }}>
                                    <div className="heading1 margin_0">
                                        <h2>Comite-List</h2>
                                    </div>
                                </div>
                                <div class="table-responsive" >
                                    <table class="table table-striped project-orders-table" >
                                        <thead >
                                            <tr>
                                                <th >#</th>
                                                <th >Nom</th>
                                                <th>Prenom</th>
                                                <th>Email</th>
                                                <th>téléphone</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                allcommit.map((e, i) => {

                                                    return (

                                                        <tr>
                                                            <td>{i}</td>
                                                            <td>{e.nom}</td>
                                                            <td>{e.prenom}</td>
                                                            <td>{e.email}</td>
                                                            <td>{e.NumContact}</td>
                                                            <td class="d-flex align-items-center">
                                                                <button onClick={() => dispatch(DeleteComite(e._id))} type="button" class="btn btn-danger btn-sm btn-icon-text">
                                                                    Supprimé
                                                                    <i class="typcn typcn-delete-outline btn-icon-append" ></i>
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

                        <div class="col-md-2">
                            <img onClick={showModal} class=" ml-5" src={comite} alt="imgcomite"></img>
                            <Modal style={{marginTop:'100px'}} footer={null} title="Ajouter un nouveau Comite" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >

                                <div class="modal-body" >

                                    {/* <AjoutComite /> */}



                                        <Form name="basic"
                                            labelCol={{
                                                span: 8,
                                            }}
                                            wrapperCol={{
                                                span: 15,
                                            }}
                                            initialValues={{
                                                remember: true,
                                            }}
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            autoComplete="off"

                                        >

                                            <Form.Item
                                                name="nom"
                                                label="Nom"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'SVP entrer le Nom de la comite',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                name="prenom"
                                                label="Prenom"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'SVP entrer le Prenom de la comite',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name="NumContact"
                                                label="telephone"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'SVP entrer le numéro de contact',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                name="email"
                                                label="E-mail"

                                                rules={[
                                                    {
                                                        type: 'email',
                                                        message: 'Donnée entrée pas valide',
                                                    },
                                                    {
                                                        required: true,
                                                        message: 'SVP entrer votre E-mail',
                                                    },
                                                ]}
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                name="password"
                                                label="Mot de passe"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'SVP entrer votre mot de passe',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input.Password />
                                            </Form.Item>

                                            <Form.Item name='gender' style={{ align: "right" }}>
                                                <Button onClick={() => setrole('comite')} type="primary" htmlType="submit" style={{ align: "right", color: "primary", marginLeft: "250px" }}> Enregistrer </Button>
                                            </Form.Item>


                                        </Form>
                                

                                </div>



                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GetCommit
