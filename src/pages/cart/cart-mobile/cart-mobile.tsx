import React, { FC } from 'react'

import Container from '../../../components/grid/container';
import formatMoney from '../../../utils/format-money';
import Title from '../../../components/products-title';
import Checkbox from '../../../components/checkbox';
import CartIncrementButton from '../../../components/cart-increment-button';
import { useActionCreators } from '../../../hooks';

import {
   CartMobileContainer, CartMobileList, CartMobileItem, CartMobileItemLeft, CartMobileItemRight,
   CartMobileItemImgLink, CartMobileImg, Price, Sum, Name, CartMobileInfo, Manufactor, ManufactorName,
   CheckboxWrapper, CartDeleteWrapper
} from './style';

import { ReactComponent as CartDelete } from '../../../assets/icons/cart-delete.svg';

interface CartMobileProps {
   items: any[]
}

const CartMobile: FC<CartMobileProps> = ({ items }) => {
   const { getTotalSum, removeCart } = useActionCreators();

   const deleteCart = (data: any) => {
      removeCart(data);
   };

   const getCheckedTotalSum = (id: any, ev: any) => {
      if (ev.target.checked) {
         getTotalSum({ id, isChecked: true });
      } else {
         getTotalSum({ id, isChecked: false });
      }
   };

   return (
      <CartMobileContainer>
         <Container>
            <Title title="Корзина" />
         </Container>

         <CartMobileList>
            {
               items.map((item: any) => {
                  return (
                     <CartMobileItem >
                        <CartMobileItemLeft>
                           <CartMobileItemImgLink isChecked={item.isChecked} to="">
                              <CartMobileImg src={item.images[0]} />
                           </CartMobileItemImgLink>
                           <CartIncrementButton item={item} isMobile={true} />
                        </CartMobileItemLeft>
                        <CartMobileItemRight>
                           <CheckboxWrapper>
                              <Checkbox onChange={(ev) => getCheckedTotalSum(item.id, ev)} isMobileVersion={true} />
                           </CheckboxWrapper>
                           <Price>{formatMoney(item.priceResponse.value)} <Sum>сум</Sum></Price>
                           <Name>{item.name}</Name>
                           <CartMobileInfo>
                              <Manufactor>Продавец:</Manufactor>
                              <ManufactorName>ООО "ДИХАУС"</ManufactorName>
                           </CartMobileInfo>
                           <CartDeleteWrapper onClick={() => deleteCart(item)}>
                              <CartDelete />
                           </CartDeleteWrapper>
                        </CartMobileItemRight>
                     </CartMobileItem>
                  )
               })
            }
         </CartMobileList>
      </CartMobileContainer >
   )
}

export default CartMobile
