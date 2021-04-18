import '../assets/scss/showinfo.css';
import insta from '../assets/images/insta.png'
import gmail from '../assets/images/gmail.png'

const ShowInfo = ({ show, showFun }) => {
    return (
        show && <div className="show-ShowInfo">
            <span onClick={showFun} className="close">X</span>
            <div className="info-heading">Developed by NGRJ</div>
            <div className="img">
                <div>
                    <div>ngrj_offical</div>
                    <div><a target="_blank" href="https://www.instagram.com/ngrj_official/">
                        <img style={{ width: '55px' }} src={insta} />
                    </a></div>
                </div>
                <div>
                    <div>ngrjsaravanan@gmail.com</div>
                    <div>
                        <a href="mailto:ngrjsaravanan@gmail.com?subject = Smart Calc - Feedback&body = Message">
                            <img style={{ width: '43px', height: '49px' }} src={gmail} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowInfo;
