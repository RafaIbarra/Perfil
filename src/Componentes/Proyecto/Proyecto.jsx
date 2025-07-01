import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;
const Proyecto = ({itemdata}) => {

    return(
        <div style={{}}>
            
            <Title level={5}>{itemdata.Sistema}</Title>
        </div>
    )
}
export default Proyecto