import { useContext } from "react";
import kenziemovie from "../../assets/kenziemovie.svg";
import { UserContext } from "../../providers/userContext/userContext";
import { StyledParagraph } from "../../styles/typography";
import { StyledHeader } from "../Header/style";
import { StyledButton } from "../../styles/buttons";
import { StyledDiv } from "./style";
import { StyledFirstLetterTag } from "../../styles/tags";

export const LoggedHeader = () => {
  const { Logout } = useContext(UserContext);
  const UserName = localStorage.getItem("@USERNAME");
  const firstLetter = UserName ? UserName.charAt(0) : "";

  return (
    <StyledHeader>
      <img src={kenziemovie} alt="Logo com o nome do site na cor branca" />

      <StyledDiv>
        <div className="name_container">
          <StyledFirstLetterTag>{firstLetter}</StyledFirstLetterTag>
          <StyledParagraph>{UserName}</StyledParagraph>
        </div>
        <StyledButton buttonsize="transparent">Sair</StyledButton>
      </StyledDiv>
    </StyledHeader>
  );
}