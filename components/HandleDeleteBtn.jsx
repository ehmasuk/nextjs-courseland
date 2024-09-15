"use client";

import { Popconfirm, message } from "antd";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

function HandleDeleteBtn({ url, id }) {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            await axios.delete(process.env.NEXT_PUBLIC_DOMAIN + url + "?id=" + id);
            message.success("Deleted");
            router.refresh();
        } catch (error) {
            message.error("Something went wrong");
        }
    };
    return (
        <div className="cursor-pointer">
            <Popconfirm onConfirm={handleDelete} title="Alert!" description="Are you sure to delete this?">
                <Trash2 size={18} color="#FF0000" strokeWidth={1.25} />
            </Popconfirm>
        </div>
    );
}

export default HandleDeleteBtn;
