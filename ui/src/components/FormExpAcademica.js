import { Form, Row, Col } from 'react-bootstrap';

const FormExpAcademica = ({ expAcademica, handleChangeExpAcademica, error}) => (
    <>
    {expAcademica.map((exp, index) => (
    <div key={index}>
    <Row className="mb-3">
        <Form.Group as={Col} controlId={'formInstitution'}>
          <Form.Label>Instituição</Form.Label>
          <Form.Control type="text" name='instituicao' data-section="expAcademica" value={exp.instituicao} onChange={(e) => handleChangeExpAcademica(index, e)} placeholder="Nome da instituição" />
          
        </Form.Group>

        <Form.Group as={Col} controlId="formCourse">
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" name='curso' data-section="expAcademica" value={exp.curso} onChange={(e) => handleChangeExpAcademica(index, e)} placeholder="Nome do curso" />
          
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEducationStart">
          <Form.Label>Início</Form.Label>
          <Form.Control type="date" name='inicio' data-section="expAcademica" value={exp.inicio} onChange={(e) => handleChangeExpAcademica(index, e)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formEducationEnd">
          <Form.Label>Término</Form.Label>
          <Form.Control type="date" name='termino' data-section="expAcademica" value={exp.termino} onChange={(e) => handleChangeExpAcademica(index, e)} />
        </Form.Group>
        
      </Row>
    </div>
    ))}
    </>
)
export default FormExpAcademica