import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineExport } from "react-icons/ai";
export default function PrimaryBt({ type, name, onClick }) {
    return (
        <button type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            onClick={onClick}>
            {type == "add" ? <AiOutlinePlus className="w-6 h-5 ml-2 " />
                : <AiOutlineExport className="w-6 h-5 ml-2 " />}
            {name}
        </button>
    )
}
