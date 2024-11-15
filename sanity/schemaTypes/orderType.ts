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
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "stripeCheckoutSessionId",
            title: "Stripe Checkout Session Id",
            type: "string",
        }),
        defineField({
            name: "stripeCustomerId",
            title: "Stripe Customer Id",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "clerkUserId",
            title: "Store User Id",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "customerName",
            title: "Customer Name",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
          defineField({
            name: "email",
            title: "Customer Email",
            type: "string",
            validation: (Rule) => Rule.required().email()
        }),
        
    ]

})