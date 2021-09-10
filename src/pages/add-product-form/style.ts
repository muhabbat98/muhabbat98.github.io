import styled from 'styled-components';
import { ReactComponent as Star } from '../../assets/icons/add-product-star.svg';

export const AddProductFormContainer = styled.div``;

export const AddProductFormBreadcrumb = styled.div`
  background: #f4f6f9;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 8px 12px;
  }
`;

export const AddProductFormBreadcrumbItem = styled.div`
  color: #797979;
  font-weight: 500;
  font-size: 24px;
  position: relative;
  padding-right: 33px;

  @media (max-width: 768px) {
    padding-right: 0;
    font-size: 14px;
    display: flex;
  }

  & > svg {
    margin-left: 16px;

    @media (max-width: 768px) {
      width: 10px;
    }
  }

  &.main {
    color: #000;
    font-weight: 600;
  }
`;

export const AddProductFormItem = styled.div``;

export const AddProductFormItemBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
    border: none;
  }
`;

export const AddProductFormItemBodyItem = styled.div``;

export const AddProductFormBottom = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;

    & > button {
      width: 100%;
      max-width: 350px;

      &:first-child {
        margin-bottom: 16px;
      }
    }
  }
`;

export const Deleivery = styled.div`
  padding: 36px 180px;
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0;
    border: none;
  }
`;

export const DeleiveryItem = styled.div`
  & * {
    font-size: 24px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 16px;
    }
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    border: none;
    padding: 0;
  }
`;

export const DeleiveryZoneItem = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const AddProductPhotoBox = styled.div``;

export const AddProductPhotoBoxItem = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 0;
    border: none;
  }
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

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 14px;
    row-gap: 16px;
  }
`;

export const PtotoApparatBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > svg {
    @media (max-width: 768px) {
      width: 28px;
    }
  }
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

export const FirstViewIcon = styled.div``;

export const AddProductPhotoItem = styled.div`
  width: 123px;
  height: 123px;
  background: #f4f6f9;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  & > ${FirstViewIcon} {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100px;
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

export const AddProductWrapp = styled.div`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  padding: 24px;

  & {
    .wrap {
      margin-top: 16px;
      position: relative;
    }
  }
`;

export const TextareaLabel = styled.label`
  position: absolute;
  top: 24px;
  left: 24px;
  color: #797979;
  font-size: 20px;
  font-weight: 700;
  pointer-events: none;

  &.active {
    top: 7px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.blue};
  }
`;

export const Textarea = styled.textarea`
  padding: 24px;
  background: #f4f6f9;
  border-radius: 16px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  height: 146px;

  /* input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label{ */

  &:focus ~ ${TextareaLabel} {
    top: 7px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.blue};
  }
`;

export const AddPhotoButton = styled.button`
  border: 2px solid #e9ecf4;
  border-radius: 16px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ClearButton = styled.input`
  background: #f4f6f9;
  color: ${({ theme }) => theme.primary_color};
  max-width: 350px;
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  height: 56px;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
`;

export const AddProductFormSaleBox = styled.div`
  margin-bottom: 24px;

  & * {
    font-size: 24px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
