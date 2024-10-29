import { Form, Row, Col } from 'react-bootstrap';

const FormContato = ({ contato, handleChangeContato, error }) => (
    <>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email' value={contato.email} data-section="contato" onChange={handleChangeContato} required title='insira um email valido' placeholder="Digite seu email"/>
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" name='telefone' data-section="contato" value={contato.telefone} onChange={handleChangeContato} required title='insira um numero de telefone' placeholder="Digite seu telefone" isInvalid={error}/>
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Endereço</Form.Label>
        <Form.Control type="text" name='endereco' data-section="contato" value={contato.endereco} onChange={handleChangeContato} required title='insira um endereco' placeholder="Rua, número, complemento, cidade, estado" />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Form.Group>
      </>
)
export default FormContato;