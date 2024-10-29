import { Form, Row, Col } from 'react-bootstrap';

const FormDadosPessoais = ({ dadosPessoais, handleChangeDadosPessoais, error }) => (
    <>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formName">
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control type="text" name='nome' data-section="dadosPessoais" value={dadosPessoais.nome} onChange={handleChangeDadosPessoais} placeholder="Digite seu nome completo" isInvalid={error} />
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formDob">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control type="date" name='data_nascimento' data-section="dadosPessoais" value={dadosPessoais.data_nascimento} onChange={handleChangeDadosPessoais} required/>
        </Form.Group>
    </Row>
    </>
)
export default FormDadosPessoais;