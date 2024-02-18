// Footer.js

import React from 'react';
import { Col, Layout, Row } from 'antd';

const { Footer } = Layout;

const MyFooter = () => {
  return (
    <Footer style={{ textAlign: 'center',color:"black",justifyContent:"space-between",display:"flex",flexDirection:"column",alignItems:"center", }}>
       <span>Url Shortner © {new Date().getFullYear()} Developed by Pawanraje Kadam.</span>
        {/* Social Links  */}
        <div style={{display:"flex",justifyContent:"space-around",margin:"5px",}}>
            <a href='https://www.linkedin.com/in/pwnkdm/' strong>
              <img src="/linkedin.png" height='30px' width='30px' style={{margin:"5px"}} alt="linkedin" /> 
            </a>
            <a href='https://www.instagram.com/pwn_kdm/'>
              <img src="/instagram.png" height='30px' width='30px' style={{margin:"5px"}} alt="instagram" />
           </a>
           <a href='https://github.com/Pwnkdm'>
              <img src="/github.png" height='30px' width='30px' style={{margin:"5px"}} alt="github" />
           </a>
        </div>
    </Footer>
  );
};

export default MyFooter;
