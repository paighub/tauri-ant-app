import React, { useRef } from 'react';
import { Form, Input, InputNumber, Button, message, Divider } from 'antd';
import { Flex } from 'antd';

const DataPage: React.FC = () => {
    const [form] = Form.useForm();

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleInputChange = (index: number, value: number | null) => {
        const nextIndex = index + 1;
        if (value !== null && value.toString().length === 3 && nextIndex < 4) {
            inputRefs.current[nextIndex]?.focus();
        }

        // Update serverIp value
        const values = form.getFieldsValue(['serverIp1', 'serverIp2', 'serverIp3', 'serverIp4']);
        console.log('values', values);
        const serverIp = values.serverIp1 + '.' + values.serverIp2 + '.' + values.serverIp3 + '.' + values.serverIp4;
        form.setFieldsValue({ serverIp });
        console.log('serverIp', serverIp);
        console.log('form.getFieldsValue()', form.getFieldsValue());
    };

    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
        message.success('设置已保存');
    };

    return (
        <Flex vertical gap="large">
            <Form form={form}
                layout="horizontal"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}>

                <Divider orientation="left">服务器</Divider>
                <Form.Item
                    name="serverIp"
                    label="服务器 IP"
                    rules={[{ required: true, message: '请输入服务器 IP!' }]}
                >
                    <Input.Group compact>
                        {[0, 1, 2, 3].map((index) => (
                            <React.Fragment key={index}>
                                <Form.Item
                                    name={`serverIp${index + 1}`}
                                    noStyle
                                    rules={[{ required: true, message: '请输入服务器 IP!' }]}
                                >
                                    <InputNumber
                                        min={0}
                                        max={255}
                                        style={{ width: '20%' }}
                                        placeholder="0-255"
                                        onChange={(value) => handleInputChange(index, value)}
                                        ref={(ref) => (inputRefs.current[index] = ref)}
                                    />
                                </Form.Item>
                                {index < 3 && <span style={{ padding: '0 8px' }}>-</span>}
                            </React.Fragment>
                        ))}
                    </Input.Group>
                </Form.Item>

                <Form.Item
                    name="serverPort"
                    label="服务器端口"
                    rules={[{ required: true, message: '请输入服务器端口!' }]}
                >
                    <InputNumber min={1} max={65535} placeholder="1-65535" />
                </Form.Item>

                <Divider orientation="left">超时</Divider>

                <Form.Item
                    name="timeout"
                    label="超时配置 (秒)"
                    rules={[{ required: true, message: '请输入超时时间!' }]}
                >
                    <InputNumber min={1} max={600} placeholder="秒" />
                </Form.Item>

                <Form.Item
                    name="exportTimeout"
                    label="导出超时配置 (秒)"
                    rules={[{ required: true, message: '请输入超时时间!' }]}
                >
                    <InputNumber min={5} max={600} placeholder="秒" />
                </Form.Item>

                <Divider />
                <Form.Item label={null}>
                    <Button type="primary" block onClick={() => form.submit()}>
                        保存
                    </Button>
                </Form.Item>
            </Form>
        </Flex >
    );
};

export default DataPage;