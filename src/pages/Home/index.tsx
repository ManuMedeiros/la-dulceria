import { Button } from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Input } from "../../components/Input";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Header } from "../../components/common/header";

export const Home = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassWord, setShowPassWord] = useState(false);

  const { user, signinWithGoogle } = useAuth();

  async function handleLoginGoogle() {
    if (!user) {
      await signinWithGoogle();
    }
    navigate("/admin/meus-produtos");
  }

  const handleBuyWithoutLogin = () => {
    navigate("/comprar-produtos");
  };
  return (
    <S.Container>
      <Header />
      <S.Content>
        <form>
          <S.DivInputs>
            <label>E-mail</label>
            <Input
              type="e-mail"
              placeholder="Digite seu e-mail"
              value={password}
              onChange={() => {}}
            />
          </S.DivInputs>
          <S.DivInputs>
            <label>Senha</label>
            <Input
              type={showPassWord ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(event: any) => setPassword(event.target.value)}
            />
            <S.buttonShowPassWord
              onClick={() => setShowPassWord(!showPassWord)}
            >
              Mostrar senha
            </S.buttonShowPassWord>
          </S.DivInputs>
          <S.ButtonsLogin>
            <Button>Entrar</Button>
            <span>Ou</span>
          </S.ButtonsLogin>
        </form>

        <S.ButtonsLogin>
          <Button
            isOutline
            isBackgoundNone
            isColorNone
            onClick={handleLoginGoogle}
          >
            <FcGoogle />
            Entrar com google
          </Button>
        </S.ButtonsLogin>
        <S.ButtonsLogin>
          <Button onClick={handleBuyWithoutLogin}>Comprar sem login</Button>
        </S.ButtonsLogin>
      </S.Content>
    </S.Container>
  );
};
