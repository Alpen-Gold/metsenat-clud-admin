import styled from "styled-components";
import { Radio } from "antd";
import { blue } from "@ant-design/colors";

export const StyledTab = styled(Radio.Group)`
  .ant-radio-button-wrapper-checked {
    background-color: ${blue[5]};
    color: white;

    &:hover {
      color: white;
    }
  }
`;

export const TableTr = styled.div`
  .ant-table-row,
  .ant-table-row-level-0 {
    margin: 10px 0;
    padding: 10px 0;
  }
`;
