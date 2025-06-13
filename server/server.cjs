require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    try {
        const { price } = req.body;

        if (!price) {
            return res.status(400).json({ error: 'Missing price in request body' });
        }
        const paymentIntent = await stripe.paymentIntents.create({
            amount: price,
            currency: 'usd',
            automatic_payment_methods: { enabled: true },
        });
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




app.listen(4242, () => console.log('🚀 Stripe server running on port 4242'));
