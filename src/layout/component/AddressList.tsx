import React, { FC } from 'react';
import { Divider, TextButton, Icon } from '@class101/ui';
import * as S from './AddressList.style';

const AddressList: FC = () => {
  return (
    <S.AddressList>
      <S.HeadContainer>
        <S.HeadTitle>배송지목록</S.HeadTitle>
        <Divider color="black" />
        <S.HeadTitleEditBox>
          <TextButton>
            <Icon.Add fillColor="gray" size={16} />
            배송지추가
          </TextButton>
        </S.HeadTitleEditBox>
      </S.HeadContainer>
      <S.AddressInfoContainer>
        {ADDRESSINFO.map(({ name, addressDetail }, key) => (
          <S.AddressInfoWrap key={key}>
            <S.AddressInfoGroup>
              <input name="test" type="radio" value="33" />
              <S.AddressInfoBox>
                <S.AddressInfoUserName>{name}</S.AddressInfoUserName>
                <S.AddressInfoDetail>{addressDetail}</S.AddressInfoDetail>
              </S.AddressInfoBox>
            </S.AddressInfoGroup>
            <S.AddressEditGroup>
              <TextButton>수정</TextButton>
              <TextButton>삭제</TextButton>
            </S.AddressEditGroup>
          </S.AddressInfoWrap>
        ))}
      </S.AddressInfoContainer>
    </S.AddressList>
  );
};

export default AddressList;

const ADDRESSINFO = [
  {
    name: '유정인',
    addressDetail: '서울 용산구 한강대로 21'
  },
  {
    name: '이현아',
    addressDetail: '서울 강남구 서초대로 388'
  },
  {
    name: '김상중',
    addressDetail: '경기도 성남시 분당구 정자동 38'
  },
  {
    name: '김민영',
    addressDetail: '서울 강남구 테헤란로 427'
  }
];