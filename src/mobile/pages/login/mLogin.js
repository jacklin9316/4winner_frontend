import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MobileNavbar, MobileFooter } from '../../../mobile/components'
import { loginUser } from '../../../store/actions/authActions';
import { getTypeList } from '../../../store/actions/mobileSportsActions';
import './mLogin.css'
function MLogin() {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    useEffect(() => {
        dispatch(getTypeList())
    })
    useSelector(state => state.mobileSportsReducers.getTypeList)
    const login = () => {
        const user = {
            userName: name,
            password: pass
        }
        dispatch(loginUser(user));
    }
    return (
        <>
            <MobileNavbar />
            <div className='login_header'>
                <div className='d-flex justify-content-center'>Login</div>
                <div className='d-flex justify-content-end'><a href='/m_home'><i className="fa fa-times-circle-o" aria-hidden="true"></i></a></div>
            </div>
            <div className='p-3 login-form form'>
                <div className="form-group">
                    <label htmlFor="usr">Username:</label>
                    <input type="text" className="form-control p-2 pl-3" onChange={e => setName(e.target.value)} id="usr" name="username" placeholder='Username' />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control p-2 pl-3" onChange={e => setPass(e.target.value)} id="pwd" name="password" placeholder='Password' />
                </div>
                <input type="button" className="m_login_btn" value='Login' onClick={login} />
            </div>
            <MobileFooter />
        </>
    );
};
export default MLogin;