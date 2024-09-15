"use client";

import { Button, Form, Input, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import axios from "axios";
import { useRouter } from "next/navigation";

function AddCategory() {
    const router = useRouter();

    const [from] = Form.useForm();

    const handleSubmit = async (values) => {
        try {
            await axios.post(process.env.NEXT_PUBLIC_DOMAIN + "/api/categories", values);
            message.success("Category added");
            router.refresh();
            from.resetFields();
        } catch (error) {
            message.error(err);
        }
    };
    return (
        <div>
            <p className="mb-2">Add categories</p>
            <Form form={from} onFinish={handleSubmit}>
                <div className="flex gap-2">
                    <FormItem name="name">
                        <Input placeholder="Name" />
                    </FormItem>
                    <Button htmlType="submit" type="primary">
                        Add
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default AddCategory;
