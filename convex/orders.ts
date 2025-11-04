'use server';

import { mutation } from './_generated/server';
import { v } from 'convex/values';
import { internal } from './_generated/api'; // Correct Convex import
import { sendEmail } from "./node/sendEmail";


export const createOrder = mutation({
  args: {
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.optional(v.string()), // Added optional phone (schema includes it)
    }),
    shipping: v.object({
      address: v.string(),
      city: v.string(),
      zip: v.string(),
      country: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.optional(v.string()),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      taxes: v.number(),
      grandTotal: v.number(),
    }),
  },

  handler: async (ctx, args) => {
    // 1️⃣ Save order
    const orderId = await ctx.db.insert('orders', {
      ...args,
      status: 'processing',
      createdAt: Date.now(),
    });

     await sendEmail(
  args.customer.email,
  `Order Confirmation #${orderId}`,
  `Thank you for your order, ${args.customer.name}!`
);


    // 2️⃣ Send confirmation email via Convex action
    await sendEmail({
  to: args.customer.email,
  subject: `Order Confirmation #${orderId}`,
  html: `
    <h2>Hi ${args.customer.name},</h2>
    <p>Thanks for your order!</p>
    <p><b>Order ID:</b> ${orderId}</p>
    <p><b>Total:</b> $${args.totals.grandTotal}</p>
    <h3>Items:</h3>
        <ul>
          ${args.items
            .map(
              (item) =>
                `<li>${item.name} × ${item.quantity} — $${item.price}</li>`
            )
            .join('')}
        </ul>
        <p>Shipping to: ${args.shipping.address}, ${args.shipping.city}, ${args.shipping.country}</p>
        <br/>
        <a href="https://yourshop.com/orders/${orderId}"
           style="padding:10px 15px;background:#000;color:#fff;text-decoration:none;border-radius:5px;">
           View Your Order
        </a>
      `,
    });

    return { success: true, orderId };
  },
});
