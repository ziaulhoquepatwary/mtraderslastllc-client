import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { packageId, title, price, image, userId, userPhone, userEmail, resourceLink } = body;

        // Validation Checks
        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized. User session required." },
                { status: 401 }
            );
        }

        if (!packageId || !price || !title) {
            return NextResponse.json(
                { error: "Missing required package information." },
                { status: 400 }
            );
        }

        const origin = req.nextUrl.origin;

        // Create Stripe Checkout Session
        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            customer_email: userEmail,
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: title,
                            images: image ? [image] : [],
                            description: `Package Order: ${title}`,
                        },
                        unit_amount: Math.round(Number(price) * 100),
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/canceled`,
            metadata: {
                userId: String(userId),
                packageId: String(packageId),
                userPhone: String(userPhone || ""),
                resourceLink: String(resourceLink || ""),
            },
        });

        return NextResponse.json({ url: checkoutSession.url });

    } catch (err) {
        console.error("Stripe Checkout Error:", err);
        return NextResponse.json(
            { error: err.message || "Failed to create checkout session" },
            { status: 500 }
        );
    }
}