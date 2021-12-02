import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';

const Home = ({history}) => {

    const userLogin = useSelector ((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        
        if (!userInfo) {
           history.push('/login')
       }
    }, [userInfo, history])
    return (
        <div>
            HOME PAGE
        </div>
    )
}

export default Home
