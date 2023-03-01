import dummy from "../DB/number.json";
import styled from "styled-components";

const NumberList = ({ value }) => {
  // filter 함수
  // const items = dummy.filter((data) => {
  //   if (this.state.value === null) {
  //     return data;
  //   }else if(data.name.toLowerCase().includes(this.state.value.toLowerCase())){
  //     return data;
  //   }
  // });

  return (
    <Table>
      <thead>
        <HeadTr>
          <Th style={{ width: "140px" }}>사용자</Th>
          <Th style={{ width: "392px" }}>숫자</Th>
        </HeadTr>
      </thead>

      <tbody>
        {dummy.user.map((v) => (
          <BodyTr key={v.id}>
            <Td>{v.nickname}</Td>
            <Td>{v.number}</Td>
          </BodyTr>
        ))}
      </tbody>
    </Table>
  );
};

export default NumberList;

// styles
const trStyle = styled.tr`
  font-family: "Pretendard";
  font-style: normal;
`;

// styled-components
const Table = styled.table`
  border-width: 2px 1px 1px 1px;
  border-style: solid;
  border-color: #6c7139;
`;
const HeadTr = styled(trStyle)`
  height: 40px;
  background: #e5e8d4;
  font-size: 15px;
  font-weight: 500;
`;
const Th = styled.th`
  border: 1px solid #6c7139;
`;

const BodyTr = styled(trStyle)`
  height: 36px;
  font-size: 14px;
  font-weight: 400;
`;
const Td = styled.td`
  text-align: center;
  border: 1px solid #6c7139;
`;
