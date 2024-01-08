import React, { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

export const Newsletter = ({ status, message, onValidated }) => {
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (subscriptionMessage) {
     
      const serviceID = 'service_epnux1c';
      const templateID = 'template_seztfil';
      const userID = 'afTczlenoD8EGesFH';
	

      try {
        const result = await emailjs.send(serviceID, templateID, { MESSAGE: subscriptionMessage }, userID);
        console.log(result);

        
        onValidated({
          MESSAGE: subscriptionMessage,
          status: 'success',
          message: 'Message sent successfully!'
        });
      } catch (error) {
        console.error(error);

        onValidated({
          MESSAGE: subscriptionMessage,
          status: 'error',
          message: 'Failed to send message. Please try again later.'
        });
      }
    }
  };

  const clearFields = () => {
    setSubscriptionMessage('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h4>FOR  CONTACT <br /> please type the message below will revert back as soon as possible</h4>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx ">
                <textarea
                  value={subscriptionMessage}
                  onChange={(e) => setSubscriptionMessage(e.target.value)}
                  placeholder="Your Message"
                />
                <button type="submit">Send </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};


