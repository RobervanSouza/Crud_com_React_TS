import * as S from "./style";
import logo from "assets/logo/logo.jpg";
import ButtonLarge from "components/BottonLarge";
import { HTMLAttributes, useState } from "react";

type BoxLoginType = HTMLAttributes<HTMLDivElement>;

export type BoxLoginProps = {
  onSubmitData: (data: { nickname: string; password: string }) => void;
  errorMessage: string;
} & BoxLoginType;

const BoxLogin = ({ onSubmitData, errorMessage }: BoxLoginProps) => {
  const [nikname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (): void => {
    const data = { nickname: nikname, password: password };
    onSubmitData(data);
  };

  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
          <span>Convites</span>
          <span>Perola</span>
          <span>Negra</span>
        </S.BoxLoginLogoText>
        <S.BoxLoginLogoImage src={logo} alt="Logo" />
      
      </S.BoxLoginLogo>
      <S.BoxLoginForm>
        <input
          type="text"
          placeholder="digite seu email"
          value={nikname}
          onChange={({ target }) => setNickname(target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <ButtonLarge value="Entrar" type="button" onClick={handleSubmit} />
      </S.BoxLoginForm>
      {Boolean(errorMessage.length) && (
        <S.BoxLoginError> {errorMessage} </S.BoxLoginError>
      )}
    </S.BoxLogin>
  );
};

export default BoxLogin;
