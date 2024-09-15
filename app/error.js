"use client";

import { Header } from "antd/es/layout/layout";

function error({ error, reset }) {
    return (
        <div>
            <Header />
            <p>{error.message || "Something went wrong"}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => reset()}>Try again</button>
        </div>
    );
}

export default error;
