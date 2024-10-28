import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const FormExpProfissional = ({ expProfissional, handleChangeExpProfissional}) => (
    <>
    {expProfissional.map((exp, index) => (
        <div key={index}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId={`formJobTitle${index}`}>
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control type="text" name='cargo' data-section="expProfissional" value={exp.cargo} onChange={(e) => handleChangeExpProfissional(index, e)} placeholder="Digite o cargo ocupado" />
                </Form.Group>
                <Form.Group as={Col} controlId={`formCompany${index}`}>
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control type="text" name='empresa' data-section="expProfissional" value={exp.empresa} onChange={(e) => handleChangeExpProfissional(index, e)} placeholder="Nome da empresa" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId={`formStartDate${index}`}>
                    <Form.Label>Início</Form.Label>
                    <Form.Control type="date" name='inicio' data-section="expProfissional" value={exp.inicio} onChange={(e) => handleChangeExpProfissional(index, e)} />
                </Form.Group>
                <Form.Group as={Col} controlId={`formEndDate${index}`}>
                    <Form.Label>Término</Form.Label>
                    <Form.Control type="date" name='termino' data-section="expProfissional" value={exp.termino} onChange={(e) => handleChangeExpProfissional(index, e)} />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId={`formJobDescription${index}`}>
                <Form.Label>Descrição das Atividades</Form.Label>
                <Form.Control as="textarea" rows={3} name='descricao' data-section="expProfissional" value={exp.descricao} onChange={(e) => handleChangeExpProfissional(index, e)} placeholder="Descreva suas atividades na empresa" />
            </Form.Group>
        </div>
    ))}
    </>
)
export default FormExpProfissional;