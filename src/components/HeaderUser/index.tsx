import { Link } from "react-router-dom";
import * as S from "./styles";
import { HeaderUserProps } from "./types";

export const HeaderUser = (props: HeaderUserProps) => {
  return (
    <S.Container>
      <div className="content">
        <S.imgLogo src={""} alt="La dulceria logo" />
        <Link to="/admin/cadastro-de-produto">Novo produto</Link>
        <Link to="/admin/meus-produtos">Meus produtos</Link>
        <div className="div-user">
          <S.imgUser
            src={
              "https://lh3.googleusercontent.com/a/ALm5wu3HaSodWMDV0-L1-P0MY7g3r3QIt70DvdrEmFpYBQ=s96-c"
            }
            alt={props?.nameUser}
          />
          <S.nameUser>{props?.nameUser}</S.nameUser>
        </div>
      </div>
    </S.Container>
  );
};
