import { loginStart, loginSuccess, loginFailure } from 'redux/userSlice';
import { publicRequest } from './baseRequest';

export const loginCallApi = async (dispatch, user) => {
    dispatch(loginStart);
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure);
    }
}