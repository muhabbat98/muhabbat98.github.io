import styled from 'styled-components';
import { ReactComponent as Star } from '../../assets/icons/add-product-star.svg';

export const AddProductFormContainer = styled.div``;

export const AddProductFormBreadcrumb = styled.div`
  background: #f4f6f9;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
`;

export const AddProductFormBreadcrumbItem = styled.div`
  color: #797979;
  font-weight: 500;
  font-size: 24px;
  position: relative;
  padding-right: 33px;

  & > svg {
    margin-left: 16px;
  }

  &.main {
    color: #000;
    font-weight: 600;
  }
`;

export const AddProductFormItem = styled.div``;

export const AddProductFormItemBody = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 16px;
`;

export const AddProductFormItemBodyItem = styled.div``;

export const Textarea = styled.textarea`
  padding: 24px;
  background: #f4f6f9;
  border-radius: 16px;
  width: 100%;
  border: none;
  outline: none;
`;

export const AddProductFormBottom = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Deleivery = styled.div`
  padding: 36px 180px;
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
`;

export const DeleiveryItem = styled.div`
  & * {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const DeleiveryZoneBox = styled.div``;

export const DeleiveryBox = styled.div``;

export const DeleiveryZone = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  padding: 24px;
  display: grid;
  column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
`;

export const DeleiveryZoneItem = styled.div``;

export const AddProductPhotoBox = styled.div``;

export const AddProductPhotoBoxItem = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  padding: 24px;
`;

export const AddProductPhotoAttention = styled.div`
  color: ${({ theme }) => theme.primary_color};
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 24px;
`;

export const AddProductPhoto = styled.div`
  display: grid;
  column-gap: 24px;
  grid-template-columns: repeat(8, 1fr);
`;

export const PtotoApparatBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DeleteIconBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  z-index: 0;
  opacity: 0;
  transition: all 0.25s ease;
`;

export const AddProductPhotoItem = styled.div`
  width: 123px;
  height: 123px;
  background: #f4f6f9;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:first-child {
    border: 1px solid red;

    &::after {
      content: url('../../assets/icons/add-product-star.svg');
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
    }
  }

  & > input[type='file'] {
    width: 100%;
    height: 100%;
    background: red;
    opacity: 0;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
  }

  & > img {
    width: 123px;
    height: 123px;
    object-fit: cover;
  }

  &:hover {
    & ${DeleteIconBox} {
      opacity: 1;
      z-index: 10;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
