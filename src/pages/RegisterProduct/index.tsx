import { FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { HeaderUser } from "../../components/HeaderUser";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { database } from "../../service/firebase";
import * as S from "./styles";

export const RegisterProduct = () => {
  const { user } = useAuth();
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("0,00");
  const [description, setDescription] = useState("");
  const [checked, setChecked] = useState(false);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    const roomRef = database.ref("product");

    await roomRef
      .push({
        nameProduct: nameProduct,
        image: "",
        price: price,
        discount: discount,
        description: description,
        toHome: checked,
      })
      .then(() => {
        alert("produto cadastrado");
      })
      .catch(() => {
        alert("algo deu errado");
      });
  };

  return (
    <S.Container>
      <HeaderUser nameUser={user?.name} imgUser={user?.avatar} />
      <h1>Novo Produto</h1>
      <S.Form onSubmit={handleRegister}>
        <S.DivInputs>
          <label>Nome do produto</label>
          <Input
            type="text"
            placeholder="Nome do produto"
            value={nameProduct}
            onChange={(e: any) => setNameProduct(e.target.value)}
          />
        </S.DivInputs>
        <S.DivInputs>
          <label>Imagem</label>
          <input type="file" name="Imagem do produto" />
        </S.DivInputs>
        <S.DivInputs>
          <label>Preço</label>
          <Input
            type="text"
            placeholder="Preço do produto"
            value={`${price}`}
            onChange={(e: any) => setPrice(e.target.value)}
          />
        </S.DivInputs>
        <S.DivInputs>
          <label>Preço com desconto</label>
          <Input
            type="text"
            placeholder="Preço do produto"
            value={`${discount}`}
            onChange={(e: any) => setDiscount(e.target.value)}
          />
        </S.DivInputs>
        <S.DivInputs>
          <label>Descrição do Produto</label>
          <textarea
            placeholder="O que você quer perguntar?"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
          />
        </S.DivInputs>
        <S.DivInputs>
          <div>
            <input
              className="checkbox"
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label>Para entregar</label>
          </div>
        </S.DivInputs>
        <Button type="submit">Cadastrar</Button>
      </S.Form>
    </S.Container>
  );
};
