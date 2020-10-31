import React from 'react';
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import axios from 'axios';
import { loginUserSuccess, loginUserFailure } from '../redux/auth/actions';
import { useDispatch } from 'react-redux';

const layout = {
    labelCol: {
        offset: 3,
        span: 24
    },
    wrapperCol: {
        offset: 3,
        span: 18
    }
};
const tailLayout = {
    wrapperCol: {
        offset: 3,
        span: 24
    }
};

const Register = () => {
    const dispatch = useDispatch();
    const onFinish = (values) => {
        const { firstName, lastName, email, password, gender, avatar, age } = values;
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/managers/register',
            data: {
                firstName,
                lastName,
                email,
                password,
                gender,
                avatar,
                age
            }
        })
            .then((res) => {
                console.log(res);
                dispatch(loginUserSuccess(res.data));
            })
            .catch((err) => {
                console.log(err);
                dispatch(loginUserFailure(err));
            });
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div
            style={{
                margin: 'auto',
                width: '500px',
                padding: '20px',
                borderRadius: '5px'
            }}
            className="box"
        >
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    gender: 'male',
                    avatar: '',
                    age: '',
                    remember: false
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size="middle"
                className="itemSpacing"
            >
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name!'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!'
                        }
                    ]}
                >
                    <Input type="email" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!'
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label="Gender" name="gender" rules={[ { required: true, message: 'Please pick an item!' } ]}>
                    <Radio.Group label="Gender" name="gender">
                        <Radio value={'male'}>Male</Radio>
                        <Radio value={'female1'}>Female</Radio>
                        <Radio value={'other'}>Want to keep it secret</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="Avatar" name="avatar">
                    <Input type="text" />
                </Form.Item>

                <Form.Item label="Age" name="age">
                    <Input type="number" />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
