import {  BasketIcon, TrolleyIcon } from "@sanity/icons";
import {  defineField, defineType } from "sanity";


export const orderType = defineType({
    name: "order",
    title: "Order",
    type: "document",
    icon: BasketIcon,
    fields: [
          defineField({
            name: "orderNumber",
            title: " Order Number",
            type: "string",
            validation:(Rule) => Rule.required(),
        }),
    ]

})