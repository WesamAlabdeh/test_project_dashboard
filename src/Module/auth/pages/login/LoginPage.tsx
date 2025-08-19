// import Form from '@Module/auth/components/login/LoginForm';
const Form = lazy(() => import('@Module/auth/components/login/LoginForm'));

import { Suspense } from 'react';

import '../../styles/app/index.scss';
import SpinContainer from '@Module/core/components/layout/SpinContainer';
const LoginPage = () => {
  return (
    <div className="Auth">
      <div className="InAuth">
       
        <div className="RightCol">
          <Suspense fallback={<SpinContainer />}>
            <Form />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
