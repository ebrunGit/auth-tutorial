import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

import CustomIcon from "components/atoms/CustomIcon";
import useToken from "hooks/useToken";

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;
const Icons = styled.div`
  display: flex;
  gap: 10px;
`;

const Header = () => {
  const { token } = useToken();
  const history = useHistory();

  const goToAccountDetail = () => {
    history.push("/accountdetail");
  };
  const goToLogin = () => {
    history.push("/login");
  };
  const handleLogOut = () => {
    console.log("handleLogOut");
  };

  return (
    <AppHeader>
      <Logo>WEBSITE LOGO</Logo>
      <Icons>
        <CustomIcon
          iconType="person_outline"
          onClick={token ? goToAccountDetail : goToLogin}
        />
        {token && <CustomIcon iconType="logout" onClick={handleLogOut} />}
      </Icons>
    </AppHeader>
  );
};

export default withRouter(Header);
