import styled from "styled-components";

interface Props{
  isLoading?:boolean;
}

export const ViewAddressContainer = styled.div<Props>`
  border: 2px solid #E9ECF4;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px 24px;
  position: relative;
  height: ${({ isLoading }) => (isLoading ? "400px" : "auto")};
  /* overflow: ${({ isLoading }) => (isLoading ? "hidden" : "auto")}; */
  overflow: hidden !important;
  @media(max-width: 768px){
    border:none;
    padding:0px;
  }
`;
export const BorderBoxContainer = styled.div`
  background: #ffffff;
  border: 2px solid #E9ECF4;
  box-sizing: border-box;
  border-radius: 16px;
  width: 100%;
  padding: 16px 24px;
  margin-bottom:16px;
`;
export const HouseCircle = styled.div`
  width: 32px;
  height: 32px;
  background: #e5faf3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: center;
  svg {
    margin: -2px 0px 0px 3px;
    width: 16px;
    height: 16px;
  }
`;
export const AddresTitiles = styled.div`
  margin-left: 16px;
  p {
    &:nth-child(1) {
      margin: 0px 0px 8px 0px;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: -0.155556px;
      color: #000000;
    }
    &:nth-child(2) {
      margin: 0px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.155556px;
      color: #797979;
    }
  }
`;

export const ActionsContainer = styled.div`
  align-self: center;
  display: flex;

  div {
    cursor: pointer;
    padding: 15px 12px;
    border-radius:16px;
    &:hover{
        background:#F4F6F9;
        transition:0.3s;

    }
    &:first-child {
      display: flex;
      span {
        align-self: center;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-items: center;
        letter-spacing: -0.155556px;
        color: #264796;
        margin-left: 13px;
      }
    }
    /* &:nth-child(2){
      display: flex;
      span {
        align-self: center;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-items: center;
        letter-spacing: -0.155556px;
        color: #264796;
        margin-left: 13px;
      }
    } */
    &:nth-child(2) {
      &:hover{
            background:#f4eaef;
        }
      display: flex;
      span {
        align-self: center;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-items: center;
        letter-spacing: -0.155556px;
        color: red;
        margin-left: 13px;
      }
    }
    &:nth-child(3) {
        height:35px;
        width:35px;
        padding:0px;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top:10px;
        @media(min-width: 768px){
            display:none
        }
    }
  }
`;


export const PlusButton = styled.div`
    
    display:flex;
    justify-content:center;
    button{
      width:auto;
    }
    div{
      display:flex;
      justify-content:center;
    svg{
      margin-right:12px;
    }
  }
`;


// ----------------------->

export const SecondContainer =styled.div`
    
`;
export const Titlee = styled.div`
    margin: 0px 0px 8px 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.155556px;
    color: #000000;
    cursor: pointer;
`;
export const MobileDescription = styled.div`
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    width: 261px;
    letter-spacing: -0.155556px;
    color: #797979;
    margin-top:12px;
`;
export const AddressInfo = styled.div`
    display:flex;
    /* justify-content:space-between; */
    flex-wrap:wrap;
    margin-top:8px;
    div{
        width:190px;
        margin-top:16px;
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            display: flex;
            align-items: center;
            letter-spacing: -0.155556px;
            color: ${({theme})=>theme.grey1};
            margin:0px;
        }
        h5{
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            display: flex;
            align-items: center;
            letter-spacing: -0.155556px;
            color: #000000;
            margin:4px 0px 0px 0px;
        }
    }
`;
export const Line = styled.div`
    height:1px;
    width:100%;
    background:#F2F2F2;
    margin-top:24px;
`;
