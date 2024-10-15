import { Button, Form, Input, Select, Space } from "antd"
import { updateUser } from "../../utils/modifyUser";
import { Result } from "../../global/type";
import { useParams } from "react-router-dom";


const { Option } = Select;



const Update = () => {
    const { user } = useParams<{ user: string }>()
    const [form] = Form.useForm()

    const storage = window.localStorage.getItem('user')
    let userToUpdate = {} as Partial<Result>
    let currentUsers = JSON.stringify(storage ?? '')
    currentUsers = JSON.parse(storage ?? '')
    if (currentUsers && user) {
        userToUpdate = currentUsers[Number(user)] as Partial<Result>
    }

    const submit = () => {
        const newUser = {
            gender: form.getFieldValue('gender'),

            name: {
                title: '',
                first: form.getFieldValue('name').split(' ').at(0),
                last: form.getFieldValue('name').split(' ').at(0)
            },
            email: form.getFieldValue('email'),
            dob: {
                date: '',
                age: form.getFieldValue('age')
            },
            phone: form.getFieldValue('phone'),
            picture: {
                large: 'https://tse1.mm.bing.net/th/id/OIP.d4aCLxnkE61dQKn4manesQHaEf?w=303&h=183&c=7&r=0&o=5&pid=1.7',
                medium: 'https://tse1.mm.bing.net/th/id/OIP.d4aCLxnkE61dQKn4manesQHaEf?w=303&h=183&c=7&r=0&o=5&pid=1.7',
                thumbnail: 'https://tse1.mm.bing.net/th/id/OIP.d4aCLxnkE61dQKn4manesQHaEf?w=303&h=183&c=7&r=0&o=5&pid=1.7'
            },
            nat: form.getFieldValue('nat'),
        }
        updateUser(newUser, Number(user))
    }

    return (
        <>
            <h2 className="text-5xl font-bold my-8">Update user</h2>
            <Form
                form={form}
                layout="vertical"
                name="control-hooks"
                onFinish={submit}
                className="bg-white w-full rounded-2xl p-4"
            >
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input defaultValue={userToUpdate.name?.first ?? '' + userToUpdate.name?.last ?? ''} />
                </Form.Item>
                <Form.Item name="age" label="Age" rules={[{ required: true }]}>
                    <Input type="number" defaultValue={userToUpdate.dob?.age} />
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select Gender"
                        allowClear
                        defaultValue={userToUpdate.gender}
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="nat" label="Nationality" rules={[{ required: true }]}>
                    <Input defaultValue={userToUpdate.nat} />
                </Form.Item>
                <Form.Item name="city" label="City" >
                    <Input defaultValue={userToUpdate.location?.city} />
                </Form.Item>
                <Form.Item name="email" label="Email" >
                    <Input defaultValue={userToUpdate.email} />
                </Form.Item>
                <Form.Item name="phone" label="Phone">
                    <Input defaultValue={userToUpdate.phone} />
                </Form.Item>
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