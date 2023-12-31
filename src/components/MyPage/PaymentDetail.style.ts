import styled from 'styled-components';
import { Button, Pagination } from '@class101/ui';

export const PaymentDetail = styled.article`
  margin: 0 auto;
  width: 100%;
  height: 37rem;
`;

export const Group = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaymentHeadlineWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.5rem 0;
`;

export const PaymentTitle = styled.div`
  font-size: 1.25rem;
`;

export const PaymentBox = styled.div`
  width: 100%;
`;

export const PaymentTable = styled.table`
  width: 100%;
  thead {
    background-color: #ccc;
  }
  tbody {
  }
  th {
    vertical-align: middle;
    height: 3rem;
  }
  tr {
  }
  td {
    vertical-align: middle;
    height: 3.8rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
`;

export const DetailButton = styled(Button)`
  width: 7rem;
  height: 2rem;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1.2rem 0;
`;

export const StyledPagination = styled(Pagination)`
  margin-left: auto;
  padding-top: 1rem;

  .dKlNJd {
    background-color: #333;
  }
`;
