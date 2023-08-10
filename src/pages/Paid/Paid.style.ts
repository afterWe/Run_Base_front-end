import { Colors, Button } from '@class101/ui';
import { styled } from 'styled-components';
import { PageContainer } from '../../Styles/common.style';

export const Paid = styled(PageContainer)`
  box-sizing: border-box;
  ${props => props.theme.flexBox('', '', 'column')}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => theme.flexBox('', 'center', 'column')}
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 25px;
`;

export const BorderLine = styled.div`
  border-top: 1px solid gray;
  margin: 2.5rem 0;
`;

export const OrderProduct = styled.div`
  padding: 0.8rem 0;
`;

export const OrderWrap = styled.div`
  overflow-y: auto;
  height: 500px;
`;

export const DetailGroup = styled.div`
  ${({ theme }) => theme.flexBox('space-between', 'center', 'row')}
  background-color: ${Colors.gray200};
  margin-bottom: 1.3rem;
  padding: 0.8rem 1.8rem;
`;

export const ImageDetailBox = styled.div`
  ${({ theme }) => theme.flexBox('flex-start', 'center', 'row')}
`;

export const Image = styled.div`
  width: 10rem;
  display: flex;
  ${({ theme }) => theme.flexBox('center', 'center', '')}
  img {
    width: 100%;
  }
`;

export const OrderDetail = styled.div`
  ${({ theme }) => theme.flexBox('', '', 'column')}
  margin-left: 3rem;
`;

export const ProductName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const ProductDetailBox = styled.ul`
  ${({ theme }) => theme.flexBox('', 'flex-start', 'column')}
  padding-top: 1rem;
  font-size: 15px;
`;

export const ProductDeltail = styled.li`
  line-height: 1.45rem;
  color: ${({ theme }) => theme.darkGray};
`;

export const Price = styled.p`
  padding-right: 3.5rem;
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => theme.flexBox('space-between', '', '')}
`;

export const OnClickButton = styled(Button)`
  width: 40%;
  height: 5rem;
  margin-top: 8rem;
  background: ${Colors.gray300};
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background: ${Colors.gray500};
  }
`;
