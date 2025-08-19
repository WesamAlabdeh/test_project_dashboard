import React, { ReactNode } from 'react';
import { Row, Col } from 'antd';

interface ValidationFieldRowProps {
  children: ReactNode;
  gutter?: [number, number];
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const ValidationFieldRow: React.FC<ValidationFieldRowProps> = ({
  children,
  gutter = [16, 16],
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl = 12,
}) => {
  return (
    <Row gutter={gutter}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            {child}
          </Col>
        ) : null,
      )}
    </Row>
  );
};

export default ValidationFieldRow;
