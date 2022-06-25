import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import {
    PercentageOutlined,
} from '@ant-design/icons';
import { calculateResults } from "../../Logique/FormLogique"
// import { PDFViewer } from '@react-pdf/renderer'
// import MyDocument from '../../components/PDFReact/PDFReact';
import { onlyNumbers,onlyNumbers2Digits } from '../../Logique/Regex';
import "./AmortizationStyle.scss"
import moment from 'moment';
import Plan from './Plan';
import Swal from 'sweetalert2'


const Amortization = () => {
    const [form] = Form.useForm();
    const layout = "horizontal"
    const { Option } = Select;
    const dateFormat = 'MM/DD/YYYY';

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
                title: 'Succès',
            })
            let result = calculateResults(dataArray)
            setResults(result)
            setHideLoan(hideLoan=false)
            setHideInterest(hideInterest=false)
            console.log(dataArray, "Succès")
            
        }
        else {
            if (!dataArray.loanAmount.match(onlyNumbers())) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Entrez uniquement des valeurs numériques positives supérieures à 0',
                })
                setHideLoan(hideLoan=true)
            }
            else if (!dataArray.interestRate.match(onlyNumbers())||dataArray.interestRate>99){
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Entrez uniquement des valeurs numériques positives supérieures à 0',
                })
                setHideInterest(hideInterest=true)
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
            setResults(results=false)
            return;
    }
    const handleSelectChange = (event, name) => {
        if (name==='date') {
            setDataArray(() => ({
                ...dataArray = {
                    ...dataArray,
                    [name]: moment(event).format('YYYY-MM-DD')
                }
            }))
            setResults(results=false)
        }
        else{
            setDataArray(() => ({
                ...dataArray = {
                    ...dataArray,
                    [name]: event
                }
            }))
            setResults(results=false)
        }
        console.log(dataArray)
        // console.log(dataArray.date, moment(dataArray.date).format('DD/MM/YYYY') )
        return;
    }

    const onFinishFailed = (errorInfo) => {
        Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: "Impossible d'envoyer des champs vides",
        })
        setHideInterest(hideInterest=false)
    };

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
                <Form.Item name='nom' label="Nom et prénom du client :" rules={[{ required: true }]}>
                    <Input onChange={(event, name) => handleInputChange(event, name = 'nom')} placeholder="L'identité du client" />
                </Form.Item>
                <Form.Item name='Num_piece' label="Numéro piéce d'identité :" rules={[{ required: true }]}>
                    <Input onChange={(event, name) => handleInputChange(event, name = 'Num_piece')} placeholder="Numéro de piéce d'identité" />
                </Form.Item>
                <Form.Item name={['table', 'date']} label="Date" rules={[{ required: true }]}>
                    <DatePicker onSelect={(event, name) => handleSelectChange(event, name = 'date')} placeholder="MM-DD-YYYY" style={{ width: '100%' }} format={dateFormat} />
                </Form.Item>
                <Form.Item name={['table', 'loanAmount']} label="Montant de microcrédit :" rules={[{ required: true }]}>
                    <Input maxLength={9} onChange={(event, name) => handleInputChange(event, name = 'loanAmount')} placeholder="Le montant total" />
                </Form.Item>
                {hideLoan?<span className="no-valid"></span>:""}
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
                {(hideInterest)||dataArray.interestRate>99?<span className="no-valid"></span>:""}
                <Form.Item>
                    {/* <Button type="primary" htmlType="submit">Calculer</Button> */}
                    <Button type="primary" htmlType="submit" style={{ marginLeft: "900px"}}>Calculer</Button>
                    {/* <Button htmlType="button" onClick={this.onReset}>Reset</Button> */}
                </Form.Item>
                
            </Form>

            {/* <PDFDownloadLink document={<MyDocument table={number} />} fileName="somename.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <Button type="primary" htmlType="submit">Previsualizar Tabla</Button>)}
            </PDFDownloadLink> */}

            {
                results.isResult ? (
                    <Plan inputs={dataArray} result={results}/>
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
