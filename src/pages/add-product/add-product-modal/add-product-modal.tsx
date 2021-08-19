import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Backdrop from '../../../components/backdrop';
import Button from '../../../components/button';
import CircleLoader from '../../../components/circle-loader';
import { axios, useError } from '../../../hooks';

import {
  AddProductModalContainer,
  BackButton,
  CloseButton,
  AddProductModalTop,
  AddProductModalTopLeft,
  AddProductModalTopRight,
  ProductIcon,
  ProductTitle,
  AddProductBreadcrumb,
  AddProductModalMenu,
  AddProductModalMenuItem,
  ProductOrder,
  ProductName,
  AddProductScroll,
} from './style';

import { ReactComponent as Back } from '../../../assets/icons/add-product-arrow-back.svg';
import { ReactComponent as Close } from '../../../assets/icons/ic_close.svg';
import { ReactComponent as ListIcon } from '../../../assets/icons/ic_tv.svg';
import { useWindowSize } from '../../../hooks/useWindowSize';

interface AddProductModalProps {
  itemId?: any;
  modalClose: () => void;
}

const AddProductModal: FC<AddProductModalProps> = ({ itemId, modalClose }) => {
  const { checkError } = useError();
  const { push } = useHistory();
  const [width] = useWindowSize();

  const [menu, setMenu] = useState<any>(null);
  const [prevIds, setPrevIds] = useState<any>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [categoryId, setCategoryId] = useState<string>('');
  const [isSecond, setIsSecond] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await getChildMenuItem();
    })();
  }, []);

  const getChildMenuItem = async (ids?: string, reFetch?: boolean) => {
    setLoading(true);
    let idd = ids || itemId;

    try {
      const response = await axios.get('catalog?parentId=' + idd);
      const data = await response.data;
      if (data.length > 0) {
        setMenu(data);
        if (!reFetch) {
          setPrevIds([...prevIds, idd]);
        }
        setCategoryId(idd);
      } else {
        const res = await axios.get(`/meta_data/products/${idd}`);
        const d = await res.data;
        console.log('d => ', d);

        if (d.length > 0) {
          setMenu(d);
          setIsSecond(true);
          if (!reFetch) {
            setPrevIds([...prevIds, idd]);
          }
        } else if (d.length == 0 && !isSecond) {
          setMenu([]);
          setPrevIds([...prevIds, idd]);
        } else {
          push('/seller/add-product-form/' + categoryId + '/' + idd);
        }
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      checkError(error);
    }
  };

  const setItemId = async (id: string) => {
    await getChildMenuItem(id);
  };

  const backHandle = async () => {
    if (prevIds.length > 1) {
      let lastIds = [...prevIds];
      lastIds.pop();
      setPrevIds(lastIds);
      const lastIdd = lastIds[lastIds.length - 1];
      await getChildMenuItem(lastIdd, true);
    } else {
      closeModal();
    }
  };

  const closeModal = () => {
    modalClose();
  };

  console.log('categoryId => ', categoryId);

  return (
    <>
      <Backdrop close={closeModal} />

      <AddProductModalContainer isLoading={isLoading}>
        {isLoading ? (
          <CircleLoader
            style={{ position: 'absolute', borderRadius: '16px' }}
          />
        ) : (
          <>
            <BackButton onClick={backHandle}>
              <Back />
            </BackButton>

            <CloseButton onClick={closeModal}>
              <Close />
            </CloseButton>

            <AddProductModalTop>
              <AddProductModalTopLeft>
                <ProductIcon>
                  <ListIcon />
                </ProductIcon>

                <ProductTitle>Электроника</ProductTitle>
              </AddProductModalTopLeft>

              {width >= 768 ? (
                <AddProductModalTopRight>
                  <Button>Добавить товар в эту категорию</Button>
                </AddProductModalTopRight>
              ) : null}
            </AddProductModalTop>

            <AddProductBreadcrumb>
              Мобильные телефоны и аксессуары
            </AddProductBreadcrumb>

            {width < 768 ? (
              <AddProductModalTopRight>
                <Button>Добавить товар в эту категорию</Button>
              </AddProductModalTopRight>
            ) : null}

            <AddProductScroll>
              <AddProductModalMenu>
                {menu.length > 0 ? (
                  menu.map((item: any, index: number) => (
                    <AddProductModalMenuItem
                      key={item.id}
                      onClick={() => setItemId(item.id)}
                    >
                      <ProductOrder>{index + 1}</ProductOrder>
                      <ProductName>{item.name}</ProductName>
                    </AddProductModalMenuItem>
                  ))
                ) : (
                  <h1 style={{ fontSize: '30px' }}>Здесь нет темплета!</h1>
                )}
              </AddProductModalMenu>
            </AddProductScroll>
          </>
        )}
      </AddProductModalContainer>
    </>
  );
};

export default AddProductModal;
