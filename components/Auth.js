// components/Auth.js
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';



const Auth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Please sign in</p>;
  }

  return children;
};

export default Auth;
