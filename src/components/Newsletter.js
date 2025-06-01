import { useState, useEffect } from "react";
import { Col, Row, Alert, Container } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Container 
      fluid 
      className="newsletter-container" 
      style={{ 
        backgroundColor: '#f9f9f9', 
        color: '#333', 
        padding: '40px', 
        borderRadius: '15px',
        marginTop: '-50px',
        marginBottom: '50px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '2px solid #4a2fbd' 
      }}
    >
      <Row className="justify-content-center align-items-center newsletter-row">
        <Col xs={12} md={10} lg={8} className="text-center">
          <h3 className="newsletter-title" style={{ fontWeight: 'bold', marginBottom: '15px' }}>Subscribe to our Newsletter</h3>
          <p className="newsletter-subtitle" style={{ fontSize: '1.1em', marginBottom: '25px' }}>Stay updated with the latest news and offers</p>
          {status === 'sending' && <Alert variant="info">Sending...</Alert>}
          {status === 'error' && <Alert variant="danger">{message}</Alert>}
          {status === 'success' && <Alert variant="success">{message}</Alert>}
        </Col>
        <Col xs={12} md={10} lg={8}>
          <form onSubmit={(e) => {
            e.preventDefault();
            email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
          }} className="newsletter-form">
            <div className="new-email-bx" style={{ display: 'flex', alignItems: 'center', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' ,border:"2px solid #4a2fbd"}}>
              <input 
                value={email} 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                className="newsletter-input"
                style={{ flex: 1, padding: '15px', border: 'none', fontSize: '1em' }}
              />
              <button type="submit" className="newsletter-button" style={{ padding: '15px 30px', backgroundColor: '#4a2fbd', color: '#fff', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}>Submit</button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}