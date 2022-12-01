import { useEffect, useState } from "react";
import axios from "axios";
import { HeaderUser } from "../../components/HeaderUser";
import { useAuth } from "../../hooks/auth";
import * as S from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import Modal from "../../components/Modal";
import { FiEdit } from "react-icons/fi";
import { database } from "../../service/firebase";

export const MyProduct = () => {
  const { user } = useAuth();
  const [product, setProduct] = useState();
  const [updateProduct, setUpdateProduct] = useState<any>();
  const [nameProduct, setNameProduct] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [toHome, setToHome] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://la-duceria-default-rtdb.firebaseio.com/product.json")
      .then((res) => {
        setProduct(res?.data);
      });
  }, []);

  const handleEdit = (productId: string) => {
    const filterProduct =
      product &&
      Object.entries(product).filter((item) => {
        return item[0] === productId;
      });
    setUpdateProduct(filterProduct);

    const products: any = filterProduct?.[0]?.[1];
    console.log(products);
    setNameProduct(products?.nameProduct);
    setDescription(products?.description);
    setDiscount(products?.discount);
    setImage(products?.image);
    setPrice(products?.price);
    setToHome(products?.toHome);

    setOpenModal(!openModal);
  };

  const handleUpdateProduct = (id: string) => {
    console.log(id, "id");
    database
      .ref(`product/${id}`)
      .update({
        nameProduct: nameProduct,
        description: description,
        discount: discount,
        image: image,
        price: price,
        toHome: toHome,
      })
      .then(() => {
        setOpenModal(!openModal);
      })
      .catch(() => {
        alert("não foi possivel editar esse produto");
      });
    console.log("ok");
  };

  return (
    <S.Container>
      <HeaderUser nameUser={user?.name} imgUser={user?.avatar} />
      <h1>Meus Produtos</h1>
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
                <button onClick={() => handleEdit(items[0])}>
                  <FiEdit />
                </button>
              </S.Content>
            );
          })}
      </S.Section>
      {openModal && (
        <Modal title="Editar" hideModal={() => setOpenModal(!openModal)}>
          <S.Form>
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
                value={price}
                onChange={(e: any) => setPrice(e.target.value)}
              />
            </S.DivInputs>
            <S.DivInputs>
              <label>Preço com desconto</label>
              <Input
                type="text"
                placeholder="Preço do produto"
                value={discount}
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
                  checked={toHome}
                  onChange={() => setToHome(!toHome)}
                />
                <label>Para entregar</label>
              </div>
            </S.DivInputs>
            <Button onClick={() => handleUpdateProduct(updateProduct[0]?.[0])}>
              Editar
            </Button>
          </S.Form>
        </Modal>
      )}
    </S.Container>
  );
};
