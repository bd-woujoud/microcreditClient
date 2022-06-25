import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import '../assets/css/register.css'
import 'antd/dist/antd.css';
import avatar from '../assets/image/user-avatar.png'
import {
    Form,
    Input,
    Button,
} from 'antd';
import { Typography, Link, Grid, Box } from '@material-ui/core';

import AuthService from '../services/AuthService';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/#">
                UTSS-MICROCRED
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Register(props) {

    const [role, setrole] = useState('');
    const { setUser, setIsAuth } = useContext(AuthContext);

    const onFinish = (values) => {

        console.log('Success:', values);
        values.role = role

        AuthService.register(values).then(jsonData => {
            console.log(jsonData, '%cabcdefgh', "color: blue");

            if (!jsonData.error) {
                setUser(jsonData.user);
                // setIsAuth(jsonData.isAuthenticated);
                alert('Vous êtes inscrit avec succès')
                props.history.replace("/")
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
            <div className='registerform'>
                <div>   <img src={avatar} alt="" align="left" style={{ width: "450px", height: "350px" }} /> </div>
                <Form name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 10,
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
                                message: 'SVP entrer votre Nom',
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
                                message: 'SVP entrer votre prenom',
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
                                message: 'SVP entrer votre numéro de contact',
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
                        <Button onClick={() => setrole('client')} type="primary" htmlType="submit" style={{ align: "right", color: "primary", marginLeft: "400px" }}> S'inscrire </Button>
                    </Form.Item>

                    <Grid container>
                        <Grid item>
                            <Link href="/login" variant="body2" style={{ marginLeft: "880px" }}>
                                {"Vous avez un compte? coonecter"}
                            </Link>
                        </Grid>
                    </Grid>
                </Form>
            </div>
            <Box mt={0}>
                <Copyright />
            </Box>
        </div>
    )
}
export default Register
