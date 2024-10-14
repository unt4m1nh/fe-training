import { Button, Form, Input, Select, Space } from "antd"
import { createUser } from "../../utils/modifyUser";


const { Option } = Select;


const Update = () => {
    const [form] = Form.useForm()
    return (
        <>
            <h2 className="text-5xl font-bold my-8">Create user</h2>
            <Form
                form={form}
                layout="vertical"
                //form={form}
                name="control-hooks"
                //onFinish={}
                className="bg-white w-full rounded-2xl p-4"
            >
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input  />
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="age" label="Age" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        //onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="nat" label="Nationality" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="city" label="City" >
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="Email" >
                    <Input />
                </Form.Item>
                <Form.Item name="phone" label="Phone">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit" onClick={() => createUser({})}>
                            Submit
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    )
}

export default Update