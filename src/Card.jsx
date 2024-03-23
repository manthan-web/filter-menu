import React from "react";

const Card = (props) => {
    return (
        <div className="gap-3 rounded-sm shadow-md">
            <img src={props.item.img} className="h-56 object-cover w-full rounded-t-sm" alt="itemImage" />
            <div className="px-8 py-4">
                <div className="flex justify-between items-center my-5">
                    <p className="text-xl capitalize font-medium">{props.item.title}</p>
                    <p className="px-6 py-1 bg-indigo-500 text-white rounded-md">${props.item.price}</p>
                </div>
                <p className="text-sm opacity-70 leading-relaxed">{props.item.desc}</p>
            </div>
        </div>
    )
}

export default Card