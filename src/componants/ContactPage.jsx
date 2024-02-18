// ContactPage.js

import React from 'react';
import { Row, Col, Typography, Image } from 'antd';

const { Title, Text, Paragraph } = Typography;

const ContactPage = () => {
  return (
    <div style={{ padding: '20px',maxHeight:"75svh"}}>
      <Title>Contact Info</Title>
      <Row gutter={16}>
        <Col xs={24} sm={8}>
          <Image preview={false} src="pwnkdm.png" alt="Contact Image" 
          style={{position:"relative",top:"-100px",height:"75vh",}}/>
        </Col>
        <Col xs={24} sm={16}>
          <div>
            <Paragraph style={{textAlign:"left",fontSize:"17px",}}>
            As a Full Stack Web Developer proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), I have extensive experience designing and implementing robust, scalable, and user-friendly web applications. With expertise in both front-end and back-end development, I excel at crafting dynamic and interactive user interfaces using React.js, as well as designing and developing RESTful APIs and backend services with Node.js and Express.js. 
            </Paragraph>
            <Paragraph style={{textAlign:"left",fontSize:"17px",}}>
            My hands-on experience with MongoDB allows me to design efficient database schemas and manage data storage in NoSQL databases. With a strong foundation in HTML, CSS, and JavaScript, I create pixel-perfect designs and ensure cross-browser compatibility and accessibility. My ability to work collaboratively in cross-functional teams and communicate effectively with clients allows me to deliver high-quality solutions that meet business requirements and exceed user expectations. I am passionate about staying up-to-date with the latest technologies and trends in web development, and I am dedicated to continuous learning and professional growth.
            </Paragraph>
          </div>
          <div style={{ paddingTop: '-30px',marginBottom:"20px",}}>
            <div style={{display:"flex",justifyContent:"start"}}>
            <img height='20px' width='20px' src='/man.png' alt='logo' /> <Text style={{fontSize:"17px",marginLeft:"10px"}} strong>Pawanrahe Kadam</Text>
            </div>
            <div style={{display:"flex",justifyContent:"start"}}>
            <img src='/gmail.png' height='20px' width='20px' alt='gmail' /><Text copyable style={{fontSize:"17px",marginLeft:"10px"}} strong> PawanrajKadam@gmail.com</Text>
            </div>
            <div style={{display:"flex",justifyContent:"start"}}>
            <img src='/map.png' height='20px' width='20px' alt='map'  /><Text style={{fontSize:"17px",marginLeft:"10px"}} strong> Pune, Maharashtra</Text>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
