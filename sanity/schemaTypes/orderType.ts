import {  BasketIcon, TrolleyIcon } from "@sanity/icons";
import {  defineArrayMember, defineField, defineSearchFilter, defineType, RelativeTime } from "sanity";


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
           defineField({
            name: "stripePaymentIntentId",
            title: "Stripe Payment Intent Id",
            type: "string",
            validation: (Rule) => Rule.required()
           }),
           defineField({
            name: "product",
            title: "Products",
            type: "array",
               of: [
                   defineArrayMember({
                       type: "object",
                       fields: [
                           defineField({
                               name: "product",
                               title: 'Product Bougth',
                               type: "reference",
                               to: [{ type: "product" }]
                           }),
                           defineField({
                               name: "quantity",
                               title: 'Quanitity Purchased',
                               type: "number",
                           }),
                       ],
                       preview: {
                           select: {
                               product: "product.name",
                               quantity: "quantity",
                               image: "product.image",
                               price: "product.price",
                               currency:"product.currency",
                           },
                           prepare(select) {
                               return {
                                   title: `${select.product} x ${select.quantity},`,
                                   subtitle: `${select.quantity * select.price}`,
                                   media:select.image,
                               }
                           }
                       }
                })
            ]
           }),

          defineField({
            name: "totalPrice",
            title: "Total Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0)
           }),
            defineField({
            name: "currency",
            title: "Currency",
            type: "string",
            validation: (Rule) => Rule.required()
           }),
           defineField({
            name: "amountDiscount",
            title: "Amout Discount",
            type: "number",
            validation: (Rule) => Rule.min(0)
           }),
           defineField({
            name: "status",
            title: "Order Status",
            type: "string",
               options: {
                   list: [
                       { title: "Paid", value: "paid" },
                       { title: "Pending", value: "pending" },
                       { title: "Shipped", value: "shipped" },
                       { title: "Delivered", value: "delivered" },
                       { title: "Cancelled", value: "cancelled" },

                ]
            }
           }),
        defineField({
            name: "orderDate",
            title: "Order Date",
            type: "datetime",
            validation: (Rule) => Rule.required()
        }),

    ],
    preview: {
        select: {
            name: "customerName",
            amount: "totalPrice",
            currency: "currency",
            orderId: "orderNumber",
            email:"email"
        },
        prepare(select) {
            const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
            return {
                title: `${select.name} (${orderIdSnippet})`,
                subtitle: `${select.amount} ${select.currency} ${select.email}`,
                media:BasketIcon,
            }
        } 
    }

})