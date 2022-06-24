import { AuthWrapper } from "components/auth-wrapper";
import { useUserContext } from "hooks";
import { Redirect } from "react-router";
import { LoginWrapper } from "../containers";

const Login = () => {
  const { userState } = useUserContext();

  if (userState.user) return <Redirect to={"/profile"} />;
  return (
    <AuthWrapper>
      <LoginWrapper />
    </AuthWrapper>
  );
};

export default Login;
