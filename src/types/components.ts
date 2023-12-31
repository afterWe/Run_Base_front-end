import { ReactNode } from 'react';

export interface GalleryProps {
  img: string;
}

export interface StyledInputProps {
  width?: string;
  margin?: string;
}

export interface StyledButtonProps {
  isMargin: boolean;
  margin?: string;
}

export interface ModalProps {
  opener: ReactNode;
  title?: string;
  contents: ReactNode | string;
  successText?: string;
  cancelText?: string;
  modalWidth?: string;
  onSuccess?: (() => void) | undefined;
  onCancel?: (() => void) | undefined;
}

export interface ModalSizeProps {
  width?: string;
}

export interface OrderInfoDataProps {
  orderId: number;
  orderDate: string;
  orderStatus: string;
  address: string;
  totalPrice: string;
  paymentsMethod: string;
  productsInfo: ProductsInfoProps[];
}

export interface ProductsInfoProps {
  orderId: number;
  imageUrl: string;
  name: string;
  category: string;
  color: string;
  size: string;
  quantity: number;
  purchasePrice: string;
}

export interface OrderInfoComponentProps {
  orderInfoData: OrderInfoDataProps[];
  // orderDetailData: OrderDetailDataProps[];
  onDelievery?: boolean;
}

// PaymentDetail 에서 OrderDetailComponent 사용할 때 (보류)
// export interface PaymentComponentsProps {
//   orderDetailData: OrderDetailProps[];
// }

export interface OrderDetailComponentProps {
  // orderDetailData: OrderDetailDataProps[];
}

export interface PaymentProps {
  id: number;
  name: string;
  image: string;
  type: string;
  quantity: string;
  price: number;
}

export interface PaymentInformProps {
  id?: number;
  productAmount: string;
  delieveryFee: string;
  totalPaymentAmount: string;
}

export interface PaymentShowRecipientProps {
  showRecipient: boolean;
  data?: boolean;
  width?: string;
  name?: string;
  addressData?: {
    id?: number;
    addressName?: string;
    recipient?: string;
    phoneNumber?: string;
    postCode?: number;
    address?: string;
    addressDetail?: string;
  };
}

export interface SelectColorProps {
  color: string;
}
export interface RadioBtnProps {
  value: string;
  name: string;
  contents: string | ReactNode;
  align?: 'top' | 'middle';
  btnMargin?: string;
  onChange: (value: string) => void;
}

export interface RadioBtnLabelProps {
  align?: 'top' | 'middle';
}

export interface StyledRadioBtnProps {
  btnMargin?: string;
}
export interface SelectColorProps {
  color: string;
}

export interface ProductCardProps {
  id?: number;
  imgUrl?: string;
  imgAlt: string;
  name: string;
  price: string;
  cardPadding?: string;
  cardWidth: string;
  index?: number;
  url?: string;
}

export interface ProductCardStyleProps {
  padding?: string;
  width: string;
}
export interface StyledTabBtnProps {
  active: boolean;
}
export interface OrderItemProps {
  id: number;
  orderNumber: string;
  products: Product[] | string;
}
export interface Product {
  productId: number;
  name: string;
  price: string;
  serialNumber: string;
  orderProductId: number;
}

export interface AddressDataProps {
  id?: number;
  addressName?: string;
  recipient?: string;
  phoneNumber?: string;
  postCode?: number;
  address?: string;
  addressDetail?: string;
}

export interface AddressTitleProps {
  showAddressTitle: boolean;
  showContents: boolean;
}

export interface AddressEditWidthProps {
  width?: string;
}

export interface BoldTextProps {
  isBold: boolean;
}

export interface PaginationProps {
  data: {
    total_pages: number;
  };
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export interface Size {
  sizeId: number;
  sizes: string;
}

export interface ImageInfo {
  productIdByImage: number;
  serialNumber: string;
  colorName: string;
  url: string;
}

export interface ProductDetailProps {
  productId: number;
  categoryName: string;
  serialNumber: string;
  name: string;
  price: number;
  color?: string;
  findSize?: Size[];
  colors?: string[];
  imageInfo: [];
}
export interface LoginProps {
  email: string;
  password: string;
}

// 카카오주소
// declare global {
//   interface Window {
//     daum: any;
//   }
// }

export interface IAddr {
  address: string;
  zonecode: string;
}
