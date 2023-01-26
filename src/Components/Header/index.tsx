import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import iLogo from "../../assets/img/logo.svg";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={iLogo} />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
