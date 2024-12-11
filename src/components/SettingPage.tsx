import React from 'react';
import { Flex, Radio } from 'antd';

const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

const DataPage: React.FC = () => {
    return (
        <Flex vertical gap="middle">
            <Radio.Group block options={options} defaultValue="Apple" />
            <Radio.Group
                block
                options={options}
                defaultValue="Apple"
                optionType="button"
                buttonStyle="solid"
            />
            <Radio.Group block options={options} defaultValue="Pear" optionType="button" />
        </Flex>
    );
};

export default DataPage;