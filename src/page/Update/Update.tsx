import { Button, Col, Form, Input, Row, Select, Space } from "antd"
import { updateUser } from "../../utils/modifyUser";
import { Result } from "../../global/type";
import { useNavigate, useParams } from "react-router-dom";
import getUserList from "../../utils/getUser";
import { nameFormatting } from "../../utils/nameFormatting";


const { Option } = Select;



const Update = () => {
    const { user } = useParams<{ user: string }>()
    const navigate = useNavigate()
    const [form] = Form.useForm()
    let userToUpdate: Partial<Result> | null = null
    const currentUsers = getUserList()
    if (currentUsers && user) {
        userToUpdate = currentUsers[Number(user)] as Partial<Result>
        form.setFieldsValue({
            name: userToUpdate.name ? userToUpdate.name?.first + ' ' + userToUpdate.name?.last : '',
            gender: userToUpdate.gender,
            email: userToUpdate.email,
            age: userToUpdate.dob?.age,
            city: userToUpdate.location?.city,
            phone: userToUpdate.phone,
            nat: userToUpdate.nat,
        })
    }

    const submit = () => {
        const newUser = {
            gender: form.getFieldValue('gender'),
            name: nameFormatting(form.getFieldValue('name')),
            email: form.getFieldValue('email'),
            dob: {
                date: '',
                age: form.getFieldValue('age')
            },
            location: {
                street: null,
                city: form.getFieldValue('city'),
                state: null,
                country: null,
                postcode: null,
                coordinates: null,
                timezone: null,
            },
            phone: form.getFieldValue('phone'),
            picture: userToUpdate?.picture,
            nat: form.getFieldValue('nat'),
        }
        updateUser(newUser, Number(user))
        navigate('/')
    }

    if (!userToUpdate) return <h1>User Not Found</h1>

    return (
        <>
            <h2 className="text-5xl font-bold my-8">Update user</h2>
            <Form
                form={form}
                layout="vertical"
                name="control-hooks"
                onFinish={submit}
                className="bg-white w-1/2 rounded-2xl p-4 m-auto"
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
                                defaultValue={userToUpdate.gender}
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
                        <Button type="primary" htmlType="submit" >
                            Submit
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    )
}

export default Update