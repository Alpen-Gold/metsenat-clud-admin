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
