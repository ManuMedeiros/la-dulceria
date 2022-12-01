import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import Modal from "../../components/Modal";
import { database } from "../../service/firebase";
import { Header } from "../../components/common/header";

export const BuyProduct = () => {
  const [product, setProduct] = useState();
  const [updateProduct, setUpdateProduct] = useState<any>();
  const [nameClient, setNameClient] = useState("");
  const [description, setDescription] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [toHome, setToHome] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://la-duceria-default-rtdb.firebaseio.com/product.json")
      .then((res) => {
        setProduct(res?.data);
      });
  }, []);

  const handleBuyProduct = (productId: string) => {
    const filterProduct =
      product &&
      Object.entries(product).filter((item) => {
        return item[0] === productId;
      });
    setUpdateProduct(filterProduct);
    setOpenModal(!openModal);
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    const roomRef = database.ref("buyClient");

    await roomRef
      .push({
        nameProduct: updateProduct[0]?.[1]?.nameProduct,
        priceTotal:
          updateProduct[0]?.[1]?.discount === ""
            ? updateProduct[0]?.[1]?.price
            : updateProduct[0]?.[1]?.discount,
        nameClient: nameClient,
        street: nameClient,
        city: city,
        state: state,
        cep: cep,
        toHome: toHome,
        description: description,
      })
      .then(() => {
        alert("Obrigado pela compra!");
        setOpenModal(!openModal);
      })
      .catch(() => {
        alert("algo deu errado");
      });
  };

  return (
    <S.Container>
      <Header />
      <h1>Nossos Produtos</h1>
      <S.Section>
        {product &&
          Object.entries(product).map((items: any) => {
            return (
              <S.Content key={items[0]}>
                <S.imgCard
                  src="https://www.qplace.com.br/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/icone-imag.jpg"
                  alt="imagem do produto"
                />
                <S.nameCard>{items[1].nameProduct}</S.nameCard>
                <S.priceCard subline={items[1].discount !== ""}>
                  Original: {items[1].price}
                </S.priceCard>
                {items[1].discount !== "" && (
                  <S.priceCard>Desconto: {items[1].discount}</S.priceCard>
                )}

                <S.descriptionCard>{items[1].description}</S.descriptionCard>
                <Button onClick={() => handleBuyProduct(items[0])}>
                  Comprar
                </Button>
              </S.Content>
            );
          })}
      </S.Section>
      {openModal && (
        <Modal title="Editar" hideModal={() => setOpenModal(!openModal)}>
          <S.nameCard>{updateProduct[0]?.[1]?.nameProduct}</S.nameCard>
          <S.priceCard>{`${
            updateProduct[0]?.[1]?.discount === ""
              ? updateProduct[0]?.[1]?.price
              : updateProduct[0]?.[1]?.discount
          }`}</S.priceCard>
          <S.Form onSubmit={handleRegister}>
            <S.DivInputs>
              <label>Nome completo</label>
              <Input
                type="text"
                placeholder="Nome completo"
                value={nameClient}
                onChange={(e: any) => setNameClient(e.target.value)}
              />
            </S.DivInputs>
            <S.DivInputs>
              <label>Endereço</label>
              <Input
                type="text"
                placeholder="Rua, n° ex: Avenida Santo André, 01"
                value={street}
                onChange={(e: any) => setStreet(e.target.value)}
              />
            </S.DivInputs>
            <S.DivInputs>
              <label>Cidade</label>
              <Input
                type="text"
                placeholder="Cidade"
                value={city}
                onChange={(e: any) => setCity(e.target.value)}
              />
            </S.DivInputs>
            <S.DivInputs>
              <label>Estado</label>
              <Input
                type="text"
                placeholder="Estado"
                value={state}
                onChange={(e: any) => setState(e.target.value)}
              />
            </S.DivInputs>
            <S.DivInputs>
              <label>CEP</label>
              <Input
                type="text"
                placeholder="CEP"
                value={cep}
                onChange={(e: any) => setCep(e.target.value)}
              />
            </S.DivInputs>
            <S.DivInputs>
              <label>Alguma observação?</label>
              <textarea
                placeholder="Ponto de referencia ou detalhe no produto"
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
              />
            </S.DivInputs>
            <S.DivInputs>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={toHome}
                  onChange={() => setToHome(!toHome)}
                />
                <label>Para entregar</label>
              </div>
              <span>
                Caso não seja para entrega, o produto deverá ser retirado na
                loja.
              </span>
            </S.DivInputs>
            <Button type="submit">Comprar</Button>
          </S.Form>
        </Modal>
      )}
    </S.Container>
  );
};
