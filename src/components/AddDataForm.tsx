import React from 'react';
import { Form, Input, Button, TimePicker } from 'antd';

import dayjs from 'dayjs';

const format = 'HH:mm';

const AddDataForm: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        onCancel(); // 关闭表单
    };

    return (
        <Form form={form} onFinish={onFinish}
            layout="horizontal"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
        >
            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Please input your age!' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="time" label="Time" rules={[{ required: true, message: 'Please select a time!' }]}>
                <TimePicker defaultValue={dayjs('20:55', format)} format={format} />
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={onCancel}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddDataForm;