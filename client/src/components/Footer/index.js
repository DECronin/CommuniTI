import React from 'react';
import{FaGithub, FaEnvelope} from 'react-icons/fa'

function Footer(){
    return(<><footer className="footer row">
        <p className="col-4 d-flex justify-content-center">
            <a href="https://github.com/DECronin/CommuniTI" target="_blank">
                <FaGithub style={{ margin: '0 5px' }} />
            </a> Source Code</p>
        <p className="col-4 d-flex justify-content-center">Communi.T.I. | 2020</p>
        <p className="col-4 d-flex justify-content-center">
        <a href="mailto: decronintech@gmailcom" target="_blank">
                <FaEnvelope style={{ margin: '0 5px' }} />
            </a> decronintech@gmail.com
        </p>
    </footer></>)
}

export default Footer;