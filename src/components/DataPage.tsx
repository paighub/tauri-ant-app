import React, { useState } from 'react';
import { Table, Button, Row, Col, Modal } from "antd";

import AddDataForm from './AddDataForm';

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];

const DataPage: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const rowSelection = {
        selectedRowKeys,
        onChange: (keys: any) => {
            setSelectedRowKeys(keys);
        }
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <div >
                        <Button onClick={() => setSelectedRowKeys(dataSource.map(item => item.key))}>
                            全选
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={() => setSelectedRowKeys([])}>
                            取消全选
                        </Button>

                        <Button type="primary" style={{ marginLeft: 8 }} onClick={showModal}>
                            添加
                        </Button>

                        <Button type="primary" style={{ float: 'right' }}>
                            导出
                        </Button>
                    </div>
                </Col>
                <Col span={24}>
                    <Table
                        rowSelection={rowSelection}
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                        scroll={{ y: '68vh' }}
                    />
                </Col>
            </Row>

            <Modal
                title="添加新设备"
                open={isModalVisible}
                footer={null}
                onCancel={handleCancel}
            >
                <AddDataForm onCancel={handleCancel} />
            </Modal>
        </div>
    );
};

export default DataPage;