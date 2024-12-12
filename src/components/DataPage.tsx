import React, { useState, useEffect } from 'react';
import { Table, Button, Row, Col, Modal } from "antd";

import { invoke } from "@tauri-apps/api/core";

import AddDataForm from './AddDataForm';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
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
        title: '手机',
        dataIndex: 'phone',
        key: 'phone',
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
    const [dataSource, setDataSource] = useState<any[]>([]); // 添加状态变量

    const rowSelection = {
        selectedRowKeys,
        onChange: (keys: any) => {
            setSelectedRowKeys(keys);
        }
    };

    useEffect(() => {
        console.log('Fetching data...');
        invoke('data_get')
            .then((res) => {
                console.log('Received data:', res);
                setDataSource(res as any[]); // 更新 dataSource 状态变量
            })
            .catch((err) => console.error('Failed to fetch data:', err));
    }, []);

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