import React, { useState } from 'react';
import { Table, Button, Row, Col } from "antd";

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
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },

    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: 'uname',
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

const DevicesPage: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

    const rowSelection = {
        selectedRowKeys,
        onChange: (keys: any) => {
            setSelectedRowKeys(keys);
        }
    };

    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <div >
                        <Button type="primary" onClick={() => setSelectedRowKeys(dataSource.map(item => item.key))}>
                            全选
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={() => setSelectedRowKeys([])}>
                            取消全选
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
        </div>
    );
};

export default DevicesPage;