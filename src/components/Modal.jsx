import { useEffect } from 'react';
import ReactDOM from 'react-dom'

const Modal = ({handleClose, actionBar, children, setShowModal}) => {
    useEffect(()=> {
        document.body.classList.add('overflow-hidden');

        return ()=> {
            document.body.classList.remove('overflow-hidden')
        }
    })


    return ReactDOM.createPortal(
        <div className=''>
            <div onClick={handleClose} className="portalBG"></div>
            {/* <div className="parent"> */}
            <div className="portal">
                <div className='child'>
                    {children}
                    <div className="action">
                        {/* {actionBar} */}
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>,
        document.querySelector('.modal-container')
    )
}

export default Modal;