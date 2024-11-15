import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
    name: "sale",
    title: "Sale",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            type:"string",
            title: "Sale Title",
        }),
        defineField({
            name: "description",
            type:"text",
            title: "Sale Description",
        }),
        defineField({
            name: "discountAmount",
            title: "Discount Amount",
            type:"number",
            description:"Amount off in percentage or  fixed values"
        }),
        defineField({
            name: "couponCode",
            title: "Coupon Code",
            type:"string",
        }),
        defineField({
            name: "validForm",
            title: "Valid Form",
            type:"datetime",
        }),
        defineField({
            name: "validUntil",
            title: "Valid Until",
            type:"datetime",
        }),
        defineField({
            name: "isActive",
            title: "Is Active",
            type: "boolean",
            description: "Toggle to activate/deactive the sale",
            initialValue:true
        })


    ],

    preview:{
        select: {
            title: "title",
            couponCode: "couponCode",
            discountAmount: "discountAmount",
            isActive:"isActive",
        },
        prepare(select) {
            const { title, discountAmount, couponCode, isActive } = select;
            const status = isActive ? "Active" : "Inactive";
            return {
                title,
                subtitle: `${discountAmount}% off - Code:${couponCode} - ${status}`,
                
            };
        }
}

})