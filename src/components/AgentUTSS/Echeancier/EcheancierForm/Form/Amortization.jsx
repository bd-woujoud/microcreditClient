import React, { useEffect, useState } from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import {
    PercentageOutlined,
} from '@ant-design/icons';
import { calculateResults } from "../../Logique/FormLogique"
// import { PDFViewer } from '@react-pdf/renderer'
// import MyDocument from '../../components/PDFReact/PDFReact';
import { onlyNumbers, onlyNumbers2Digits } from '../../Logique/Regex';
import "./AmortizationStyle.scss"
import moment from 'moment';
import Plan from './Plan';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { GetdemandeByID, selectDemandeById, selectDemandeUpdate, UpdateDemande } from '../../../../../features/Demande/demandeSlice';
import axios from 'axios';



function Amortization() {

    const [form] = Form.useForm();
    const layout = "horizontal"
    const { Option } = Select;
    const dateFormat = 'MM/DD/YYYY';

    const dispatch = useDispatch()

    const demandeId = useSelector(selectDemandeById)
    console.log(demandeId, 'oooffffffffff');
    useEffect(() => {

        dispatch(GetdemandeByID({ id: demandeId._id }))


    }, [])

    let [dataArray, setDataArray] = useState({
        date: "",
        loanAmount: "",
        paymentMethod: "",
        loanTerm: "",
        interestRate: "",
    });

    let [results, setResults] = useState({
        monthlyPayment: '',
        totalPayment: '',
        totalInterest: '',
        isResult: false,
    });

    let [hideLoan, setHideLoan] = useState(false)
    let [hideInterest, setHideInterest] = useState(false)

    // const Toogle = () => {
    //     setHide(!hide)
    // }
    const onFinish = (values) => {
        if (dataArray.loanAmount.match(onlyNumbers()) && dataArray.interestRate.match(onlyNumbers2Digits())) {
            Swal.fire({
                icon: 'success',
                title: 'demande accepté',
            })
            let result = calculateResults(dataArray)
            setResults(result)
            setHideLoan(hideLoan = false)
            setHideInterest(hideInterest = false)
            console.log(dataArray, "Succès")

        }
        else {
            if (!dataArray.loanAmount.match(onlyNumbers())) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Entrez uniquement des valeurs numériques positives supérieures à 0',
                })
                setHideLoan(hideLoan = true)
            }
            else if (!dataArray.interestRate.match(onlyNumbers()) || dataArray.interestRate > 99) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Entrez uniquement des valeurs numériques positives supérieures à 0',
                })
                setHideInterest(hideInterest = true)
            }

        }
    };
    const handleInputChange = (event, name) => {
        setDataArray(() => ({
            ...dataArray = { // objet que nous voulons mettre à jour
                ...dataArray, // conserver toutes les autres paires clé-valeur
                [name]: event.target.value  // mettre à jour la valeur d'une clé spécifique
            }
        }))
        setResults(results = false)
        return;
    }

    const handleSelectChange = (event, name) => {
        if (name === 'date') {
            setDataArray(() => ({
                ...dataArray = {
                    ...dataArray,
                    [name]: moment(event).format('YYYY-MM-DD')
                }
            }))
            setResults(results = false)
        }
        else {
            setDataArray(() => ({
                ...dataArray = {
                    ...dataArray,
                    [name]: event
                }
            }))
            setResults(results = false)
        }
        console.log(dataArray)
      
        return;

    }

    const onFinishFailed = (errorInfo) => {
        Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: "Impossible d'envoyer des champs vides",
        })
        setHideInterest(hideInterest = false)
    };

    const updateDemande = () => {
       
        let data = {

            to: demandeId.user.email,
            isvalid: true 
        }
        
        axios.put('http://localhost:5000/demande/updatedemande/' + localStorage.getItem('demande'),data)
            .then(res => {

            })
    }





    const updatedemande = useSelector(selectDemandeUpdate)


    const [disabled, setdisabled] = useState(true)

    // onreset = () => {
    //     this.Form.current.resetFields();
    //   };

    /* eslint-disable no-template-curly-in-string */

    const validateMessages = {
        required: "${label} c'est obligatoire!",
        types: {
            email: "${label} L'e-mail! n'est pas valide",
            number: '${label} Nombre invalide!',
        },
        number: {
            range: '${label} doit être compris entre ${min} et ${max}',
        },
    };

    return (
        <>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-2'>
                        <label>Nom et prénom du client</label></div>
                    <div className='col-md-6'><input value={demandeId.nom+" "+ demandeId.nom} style={{ border: "1px solid #d9d9d9",padding:"4px 11px" ,fontSize: '14px', fontWeight: 'bold' }} />
                    </div>
                </div>
                <br></br>

                <div className='row'><div className='col-md-2'></div>
                    <div className='col-md-2'>
                        <label>Numéro piéce d'identité</label></div>
                    <div className='col-md-6'><input value={demandeId.num_piece} style={{border: "1px solid #d9d9d9",padding:"4px 11px" , fontSize: '14px', fontWeight: 'bold' }} /></div>

                </div>
                <br></br>

                <div className='row'><div className='col-md-2'></div>
                    <div className='col-md-2'>
                        <label name={['table', 'loanAmount']}>Montant demandé </label> </div>
                    <div className='col-md-6'><input  value={demandeId.montant} style={{ border: "1px solid #d9d9d9",padding:"4px 11px" , fontSize: '14px', fontWeight: 'bold' }} /></div>

                </div></div>
                <br></br>


            <Form
                layout={layout}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={validateMessages}
                style={{ marginTop: '12px' }}
                wrapperCol={{
                    span: 8,
                }}
                labelCol={{
                    span: 8,
                }}
            >



                <Form.Item name={['table', 'loanAmount']} label="Montant de microcrédit :" rules={[{ required: true }]}>
                    <Input maxLength={9} value={demandeId.montant} placeholder={demandeId.montant} onChange={(event, name) => handleInputChange(event, name = 'loanAmount')} />
                </Form.Item>

                <Form.Item name={['table', 'date']} label="Date" rules={[{ required: true }]}>
                    <DatePicker  placeholder={demandeId.date} style={{ width: '100%' }} onSelect={(event, name) => handleSelectChange(event, name = 'date')} format={dateFormat} />
                </Form.Item>
                
                {hideLoan ? <span className="no-valid"></span> : ""}
                <Form.Item name={['table', 'paymentMethod']} label="Méthode de paiement :" rules={[{ required: true }]}>
                    <Select onSelect={(event, name) => handleSelectChange(event, name = "paymentMethod")} placeholder="La fréquence de paiement">
                        <Option value="12">Monsuel</Option>
                    </Select>
                </Form.Item>
                <Form.Item name={['table', 'loanTerm']} label="Durée remboursement microcrédit(Ans)" rules={[{ required: true }]}>
                    <Select onSelect={(event, name) => handleSelectChange(event, name = 'loanTerm')} placeholder="Durée de remboursement en année">

                        <Option value="1">1 Année</Option>
                        <Option value="2">2 Années</Option>
                        <Option value="3">3 Années</Option>
                        <Option value="4">4 Années</Option>
                        <Option value="5">5 Années</Option>
                        <Option value="6">6 Années</Option>
                        <Option value="7">7 Années</Option>
                        <Option value="8">8 Années</Option>
                        <Option value="9">9 Années</Option>
                        <Option value="10">10 Années</Option>

                    </Select>
                </Form.Item>
                <Form.Item name={['table', 'interestRate']} label="Taux d'intérêt par année" rules={[{ required: true }]}>
                    <Input maxLength={2} suffix={<PercentageOutlined />} onChange={(event, name) => handleInputChange(event, name = 'interestRate')} placeholder="Le taux d'intérêt par an" />
                </Form.Item>
                {(hideInterest) || dataArray.interestRate > 99 ? <span className="no-valid"></span> : ""}
                <Form.Item>
                    {/* <Button type="primary" htmlType="submit">Calculer</Button> */}
                    <Button onClick={updateDemande} type="primary" htmlType="submit" style={{ marginLeft: "900px" }}>Calculer</Button>
                    {/* <Button htmlType="button" onClick={this.onReset}>Reset</Button> */}
                </Form.Item>

            </Form>

            {/* <PDFDownloadLink document={<MyDocument table={number} />} fileName="somename.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <Button type="primary" htmlType="submit">Previsualizar Tabla</Button>)}
            </PDFDownloadLink> */}

            {
                results.isResult ? (
                    <Plan inputs={dataArray} result={results} />
                ) : (
                    <span>{""}</span>
                )
            }


            {/* {hide ? <Button type="primary" onClick={Toogle} >Esconder Tabla</Button> : <Button type="primary" onClick={Toogle} >Previsualizar Tabla</Button>}

            {(hide) ? <PDFViewer style={{ width: '100%', height: '600px' }}>
                <MyDocument table={dataArray} />
            </PDFViewer> : ""} */}

        </>
    )
}

export default Amortization
