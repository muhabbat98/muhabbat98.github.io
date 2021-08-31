import React, { useState, FC } from 'react';
import Checkbox from '../../../components/checkbox';
import { StatusBox, Order } from './style';
import OptionBox from './option-box';

import { useItemChecked } from '../../pages/goods/goods-context';
import { TableBodyItem, TableBodyItemWrapper } from '../../../global-styles';

interface GoodsTableItemProps {
   id: string;
   isRowClickable?: boolean;
   rowSelected?: (item: any) => void | null;
}

const GoodsTableItem: FC<GoodsTableItemProps> = ({ id, isRowClickable, rowSelected }) => {
   const { addId } = useItemChecked();

   const [isChecked, setIsChecked] = useState<boolean>(false);

   const check = (id: string) => {
      addId(id);
   }

   const checkHandle = (ev: any) => {
      setIsChecked(ev.target.checked);

      if (rowSelected) {
         rowSelected(id);
      }
   }

   const clickHandler = (id: any, ev: any) => {
      if (getParents(ev.target)) {

      } else {

         // push('/sellers/about-seller/' + id);
      }
   }

   const getParents = (element: any) => {
      while (element.parentElement) {
         element = element.parentElement;
         if (element.classList.contains('option-box')) {
            return true;
         }
      }
      return false;
   }

   if (isRowClickable) {
      return (
         <TableBodyItemWrapper
            onClick={(ev: any) => clickHandler(id, ev)}
            isCursor={isRowClickable}
            grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
         >
            <TableBodyItem>
               <Order>1</Order>
            </TableBodyItem>
            <TableBodyItem>Игровая клавиатура </TableBodyItem>
            <TableBodyItem> Мобильные телефоны</TableBodyItem>
            <TableBodyItem>Филипп Назаров</TableBodyItem>
            <TableBodyItem>
               <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            </TableBodyItem>
            <TableBodyItem>
               <OptionBox />
            </TableBodyItem>
         </TableBodyItemWrapper>
      );
   }

   return (
      <TableBodyItemWrapper
         bgColor={isChecked!}
         isCursor={isRowClickable}
         grids={['1fr', '4fr', '4fr', '4fr', '4fr', '1fr']}
      >
         <TableBodyItem>
            <Order>1</Order>
            <Checkbox onClick={() => check(id)} callback={checkHandle} />
         </TableBodyItem>
         <TableBodyItem>Игровая клавиатура </TableBodyItem>
         <TableBodyItem> Мобильные телефоны</TableBodyItem>
         <TableBodyItem>Филипп Назаров</TableBodyItem>
         <TableBodyItem>
            <StatusBox isActiveStatus={true!}>Активный</StatusBox>
            <OptionBox />
         </TableBodyItem>
      </TableBodyItemWrapper>
   );
}

export default GoodsTableItem;