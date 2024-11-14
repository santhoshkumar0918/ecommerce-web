import {  BasketIcon, TrolleyIcon } from "@sanity/icons";
import {  defineField, defineType } from "sanity";


export const orderType = defineType({
    name: "product",
    title: "Products",
    type: "document",
    icon: BasketIcon,
    fields: []

})