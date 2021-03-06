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
        date: demandeId.date ? demandeId.date : new Date(),
        loanAmount: demandeId.loanAmount ? demandeId.loanAmount : "",
        paymentMethod:demandeId.paymentMethod ? demandeId.paymentMethod : "",
        loanTerm: demandeId.loanTerm ? demandeId.loanTerm : "",
        interestRate:demandeId.interestRate ? demandeId.interestRate : "",
    });

    let [results, setResults] = useState({
        monthlyPayment: demandeId.monthlyPayment ? demandeId.monthlyPayment : "",
        totalPayment: demandeId.totalPayment ? demandeId.totalPayment : "",
        totalInterest:demandeId.totalInterest ? demandeId.totalInterest : "",
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
                title: 'demande accept??',
            })
            let result = calculateResults(dataArray)
            setResults(result)
            setHideLoan(hideLoan = false)
            setHideInterest(hideInterest = false)
            console.log(dataArray, "Succ??s")

        }
        else {
            if (!dataArray.loanAmount.match(onlyNumbers())) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Entrez uniquement des valeurs num??riques positives sup??rieures ?? 0',
                })
                setHideLoan(hideLoan = true)
            }
            else if (!dataArray.interestRate.match(onlyNumbers()) || dataArray.interestRate > 99) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Entrez uniquement des valeurs num??riques positives sup??rieures ?? 0',
                })
                setHideInterest(hideInterest = true)
            }

        }




    };
    const handleInputChange = (event, name) => {
        setDataArray(() => ({
            ...dataArray = { // objet que nous voulons mettre ?? jour
                ...dataArray, // conserver toutes les autres paires cl??-valeur
                [name]: event.target.value  // mettre ?? jour la valeur d'une cl?? sp??cifique
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
        // console.log(dataArray,'arayyyyyyyyyyyyyy')
        // console.log(dataArray.date, moment(dataArray.date).format('DD/MM/YYYY') )
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
    
        axios.put('http://localhost:5000/demande/updatedemande/' + localStorage.getItem('demande'), dataArray)
            .then(res => { console.log(res,'reeees');

            })
           
    }

    const updatedemande = useSelector(selectDemandeUpdate)

    // useEffect(()=>{

    //  if(updatedemande==="success"){
    //  let data={

    //       to:demandeId.email

    //  }
    //     axios.post('http://localhost:5000/user/sendMail',data)
    //     .then(res => {

    //     })

    //  }
    // },[updatedemande])

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
            range: '${label} doit ??tre compris entre ${min} et ${max}',
        },
    };

    return (
        <>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-2'>
                        <label>Nom et pr??nom du client</label></div>
                    <div className='col-md-6'><input value={demandeId.nom+" "+ demandeId.nom} style={{ border: "1px solid #d9d9d9",padding:"4px 11px" ,fontSize: '14px', fontWeight: 'bold' }} />
                    </div>
                </div>
                <br></br>

                <div className='row'><div className='col-md-2'></div>
                    <div className='col-md-2'>
                        <label>Num??ro pi??ce d'identit??</label></div>
                    <div className='col-md-6'><input value={demandeId.num_piece} style={{border: "1px solid #d9d9d9",padding:"4px 11px" , fontSize: '14px', fontWeight: 'bold' }} /></div>

                </div>
                <br></br>

                <div className='row'><div className='col-md-2'></div>
                    <div className='col-md-2'>
                        <label name={['table', 'loanAmount']}>Montant demand?? </label> </div>
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



                 <Form.Item name={['table', 'loanAmount']} label="Montant de microcr??dit :" rules={[{ required: true }]}>
                    <Input maxLength={9} value={demandeId.montant} placeholder={demandeId.montant} onChange={(event, name) => handleInputChange(event, name = 'loanAmount')} />
                </Form.Item> 

                 <Form.Item name={['table', 'date']} label="date:" rules={[{ required: true }]}>
                    <Input defaultValue={new Date()} onChange={(event, name) => handleInputChange(event, name = 'date')} />
                </Form.Item> 


                {hideLoan ? <span className="no-valid"></span> : ""}
                <Form.Item name={['table', 'paymentMethod']} label="M??thode de paiement :" rules={[{ required: true }]}>
                    <Select onSelect={(event, name) => handleSelectChange(event, name = "paymentMethod")} placeholder="La fr??quence de paiement">
                        <Option value="12">Monsuel</Option>
                    </Select>
                </Form.Item>
                <Form.Item name={['table', 'loanTerm']} label="Dur??e remboursement microcr??dit(Ans)" rules={[{ required: true }]}>
                    <Select onSelect={(event, name) => handleSelectChange(event, name = 'loanTerm')} placeholder="Dur??e de remboursement en ann??e">

                        <Option value="1">1 Ann??e</Option>
                        <Option value="2">2 Ann??es</Option>
                        <Option value="3">3 Ann??es</Option>
                        <Option value="4">4 Ann??es</Option>
                        <Option value="5">5 Ann??es</Option>
                        <Option value="6">6 Ann??es</Option>
                        <Option value="7">7 Ann??es</Option>
                        <Option value="8">8 Ann??es</Option>
                        <Option value="9">9 Ann??es</Option>
                        <Option value="10">10 Ann??es</Option>

                    </Select>
                </Form.Item>
                <Form.Item name={['table', 'interestRate']} label="Taux d'int??r??t par ann??e" rules={[{ required: true }]}>
                    <Input maxLength={2} suffix={<PercentageOutlined />} onChange={(event, name) => handleInputChange(event, name = 'interestRate')} placeholder="Le taux d'int??r??t par an" />
                </Form.Item>
                {(hideInterest) || dataArray.interestRate > 99 ? <span className="no-valid"></span> : ""}
                <Form.Item>
                    {/* <Button type="primary" htmlType="submit">Calculer</Button> */}
                    {/* <Button onClick={updateCredit} type="primary" htmlType="submit" style={{ marginLeft: "900px" }}>Calculer</Button> */}
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
                    <Plan inputs={dataArray} result={results} />
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
