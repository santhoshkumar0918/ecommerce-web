import { TagIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const salesType = defineType({
    name: "sale",
    title: "Sale",
    type: "document",
    icon: TagIcon,
    fields: [
        defineType({
            name: "title",
            type:"string",
            title: "Sale Title",
           
        }),
          defineType({
            name: "description",
            type:"text",
            title: "Sale Description",
          }),
           defineType({
            name: "discountAmount",
            type:"number",
               title: "Discount Amount",
            description:"Amount off in percentage or  fixed values"
        }),


    ]

})