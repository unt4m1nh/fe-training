import { Button, Col, Form, Input, Row, Select, Space } from "antd"
import { createUser } from "../../utils/modifyUser";
import { useNavigate } from "react-router-dom";
import { nameFormatting } from "../../utils/nameFormatting";


const { Option } = Select;


const Create = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()

    const submit = () => {
        const newUser = {
            gender: form.getFieldValue('gender'),

            name: nameFormatting(form.getFieldValue('name')),
            email: form.getFieldValue('email'),
            dob: {
                date: '',
                age: form.getFieldValue('age')
            },
            phone: form.getFieldValue('phone'),
            city: form.getFieldValue('city'),
            picture: {
                large: 'https://tse1.mm.bing.net/th/id/OIP.d4aCLxnkE61dQKn4manesQHaEf?w=303&h=183&c=7&r=0&o=5&pid=1.7',
                medium: 'https://tse1.mm.bing.net/th/id/OIP.d4aCLxnkE61dQKn4manesQHaEf?w=303&h=183&c=7&r=0&o=5&pid=1.7',
                thumbnail: 'https://tse1.mm.bing.net/th/id/OIP.d4aCLxnkE61dQKn4manesQHaEf?w=303&h=183&c=7&r=0&o=5&pid=1.7'
            },
            nat: form.getFieldValue('nat'),
        }
        createUser(newUser)
        navigate('/')
    }
    return (
        <>
            <h2 className="text-5xl font-bold my-8">Create user</h2>
            <Form
                form={form}
                layout="vertical"
                //form={form}
                name="control-hooks"
                onFinish={submit}
                //onFinish={}
                className="bg-white w-full rounded-2xl p-4"
            >
                <Row gutter={16}>
                    <Col span={14}>
                        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col >
                        <Form.Item name="age" label="Age" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select Gender"
                                allowClear
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="nat" label="Nationality" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="city" label="City" >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={11}>
                        <Form.Item name="email" label="Email" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={11}>
                        <Form.Item name="phone" label="Phone">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    )
}

export default Create