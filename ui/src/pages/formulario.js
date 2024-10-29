import React, { useState } from 'react';
import { Form, Button, Row} from 'react-bootstrap';
import FormDadosPessoais from '../components/dadosPessoais';
import FormContato from '../components/FormContato';
import FormExpProfissional from '../components/FormExpProfissional';
import FormExpAcademica from '../components/FormExpAcademica';
import apiService from '../services/apiService';
import { validateNome, validateTelefone } from '../utils/validation';
import ConfirmModal from '../components/modal';
const Formulario = () => {
    const [dados, setDados] = useState({
      dadosPessoais: {
        nome: '',
        data_nascimento: ''
      },
      contato: {
        email: '',
        telefone: '',
        endereco: ''
      },
      expProfissional: [{
        cargo: '',
        empresa: '',
        inicio: '',
        termino: '',
        descricao: ''
      }],
      expAcademica: [{
        instituicao: '',
        curso: '',
        inicio: '',
        termino: ''
      }]
    })
    const handleChange = (e) => {
      const {name, value, dataset} = e.target
      setDados((prevDados) => ({
        ...prevDados,
        [dataset.section]: {
          ...prevDados[dataset.section],
          [name]: value
        }
      }))
    }
    const handleChangeExp = (index, e) => {
      const {name, value, dataset} = e.target
      setDados((prevDados) => {
        const newExp = [...prevDados[dataset.section]]
        newExp[index] = {
          ...newExp[index],
          [name]: value
        }
        return {
          ...prevDados,
          [dataset.section]: newExp
        }
      })
    }
    
    const addExpProfissional = () => {
      setDados((prevDados) => ({
        ...prevDados,
        expProfissional: [
          ...prevDados.expProfissional,
          {
            cargo: '',
            empresa: '',
            inicio: '',
            termino: '',
            descricao: ''
          }
        ]
      }))
    }
    
    const addExpAcademica = () => {
      setDados((prevDados) => ({
        ...prevDados,
        expAcademica: [
          ...prevDados.expAcademica,
          {
            instituicao: '',
            curso: '',
            inicio: '',
            termino: ''
          }
        ]
      }))
    }
    
   

    const [errors, setErrors] = useState({
       nome: '',
       telefone: ''
    })
    const handleValidate = () => {
      const erroNome = validateNome(dados.dadosPessoais.nome)
      const erroTelefone = validateTelefone(dados.contato.telefone)
      if (erroNome){
        setErrors({nome: erroNome})
      }else{
        setErrors({nome: ''})
      }
      if (erroTelefone){
        setErrors({telefone: erroTelefone})
      }else{
        setErrors({telefone: ''})
      }
    }
    const [showModal, setShowModal] = useState()
    const [modalResponse, setModalResponse] = useState({
      titulo: '',
      texto: '',
      classe: ''
    })
    const handleCloseModal = () => setShowModal(false)
    const handleSubmit = async (e) => {
      e.preventDefault();

      handleValidate()

      try{
        const dadosPessoaisId = await apiService.apiDadosPessoais(dados.dadosPessoais);

        await apiService.apiContato(dados.contato, dadosPessoaisId.id)

        const promisesExpProfissional = dados.expProfissional.map(exp => 
          apiService.apiExpProfissional(exp, dadosPessoaisId.id)
        )
        await Promise.all(promisesExpProfissional)

        const promisesExpAcademica = dados.expAcademica.map(exp => 
          apiService.apiExpAcademica(exp, dadosPessoaisId.id)
        )
        await Promise.all(promisesExpAcademica)
        setModalResponse({
          'titulo': 'Sucesso',
          'texto': 'Seu curriculo foi enviado com sucesso!',
          'classe': 'primary'
        })
        setShowModal(true)
      }catch(e){
        setModalResponse({
          'titulo': 'Erro',
          'texto': 'Houve um erro ao enviar o seu curriculo!',
          'classe': 'danger'
        })
        setShowModal(true)
      }
      }

    
    return (
      <>
      <div className='container mt-5'>
        <Form onSubmit={handleSubmit}>
      {/* Dados Pessoais */}
      <h2 className="mb-3">Dados Pessoais</h2>
      <FormDadosPessoais dadosPessoais={dados.dadosPessoais} handleChangeDadosPessoais={handleChange} error={errors.nome}/>

      {/* Contato */}
      <h2 className="mb-3">Contato</h2>
      <FormContato contato={dados.contato} handleChangeContato={handleChange} error={errors.telefone}/>

      {/* Experiência Profissional */}
      <h2 className="mb-3">Experiência Profissional</h2>
      <FormExpProfissional expProfissional={dados.expProfissional} handleChangeExpProfissional={handleChangeExp} />

      <Row className='mb-3'>
          <Button variant="primary" className="mb-3" onClick={addExpProfissional}>
                Adicionar Nova Experiência Profissional
            </Button>
      </Row>
            

      {/* Formação Acadêmica */}
      <h2 className="mb-3">Formação Acadêmica</h2>
      <FormExpAcademica expAcademica={dados.expAcademica} handleChangeExpAcademica={handleChangeExp} />


      <Row className='mb-3'>
          <Button variant="primary" className="mb-3" onClick={addExpAcademica}>
                Adicionar Nova Formação Academica
            </Button>
        </Row>


      {/* Botão de Envio */}
      <Button variant="success" type="submit" className='mb-3'> 
        Enviar Currículo
      </Button>
    </Form>
    <ConfirmModal show={showModal} handleClose={handleCloseModal} modalResponse={modalResponse}></ConfirmModal>
    </div>
    </>
    );
};

export default Formulario;