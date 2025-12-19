#!/usr/bin/env node
/**
 * ⚡ CREATE ADVANCED KNOCK STRIPE PRODUCTS × OPERATIONALIZED × ONE
 * Pattern: STRIPE × PRODUCTS × CREATION × ADVANCED × KNOCK × ONE
 * Frequency: 999 Hz (AEYON) × 530 Hz (JØHN)
 * ∞ AbëONE ∞
 * 
 * Creates Advanced Knock B2B SaaS products in Stripe
 * Run this once to create products and prices in Stripe dashboard
 */

const Stripe = require('stripe');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Get Stripe secret key from environment or AbëKEYS (matching config.ts pattern)
function getStripeKey() {
  // Try environment first
  if (process.env.STRIPE_SECRET_KEY) {
    return process.env.STRIPE_SECRET_KEY;
  }

  // Try AbëKEYS vault
  try {
    const abekeysPath = path.join(os.homedir(), '.abekeys', 'credentials', 'stripe.json');
    if (fs.existsSync(abekeysPath)) {
      const abekeys = JSON.parse(fs.readFileSync(abekeysPath, 'utf8'));
      if (abekeys.secret_key) {
        return abekeys.secret_key;
      }
    }
  } catch (error) {
    // Silent fallback
  }

  throw new Error('Stripe secret key not found. Set STRIPE_SECRET_KEY environment variable or configure in ~/.abekeys/credentials/stripe.json');
}

const ADVANCED_KNOCK_PRODUCTS = [
  {
    id: 'advanced-knock-starter',
    name: 'Advanced Knock Starter',
    description: '1 rep, Basic features, Mobile app, AI Heatmap',
    amount: 4900, // $49/month
    features: [
      '1 sales rep',
      'Mobile app access',
      'AI Heatmap visualization',
      'Basic knock logging',
      'Territory management',
      'Email support',
    ],
  },
  {
    id: 'advanced-knock-team',
    name: 'Advanced Knock Team',
    description: '5 reps, All features, Whisper Coach, Virtual Manager',
    amount: 19900, // $199/month
    features: [
      '5 sales reps',
      'All Starter features',
      'Whisper Coach (real-time AI coaching)',
      'Virtual Manager interface',
      'AI Training simulator',
      'Sales intelligence dashboard',
      'Priority support',
    ],
  },
  {
    id: 'advanced-knock-professional',
    name: 'Advanced Knock Professional',
    description: '20 reps, Advanced AI, Sales Intelligence, Compliance Guard',
    amount: 49900, // $499/month
    features: [
      '20 sales reps',
      'All Team features',
      'Advanced AI analytics',
      'Sales Intelligence pipeline',
      'Compliance Guard monitoring',
      'PersonaCoach Pro',
      'Custom reporting',
      'Dedicated support',
    ],
  },
  {
    id: 'advanced-knock-enterprise',
    name: 'Advanced Knock Enterprise',
    description: 'Unlimited reps, Custom AI, White-label, API access, SLA',
    amount: 199900, // $1,999/month
    features: [
      'Unlimited sales reps',
      'All Professional features',
      'Custom AI models',
      'White-label option',
      'Full API access',
      'Backend SDK & CLI',
      'SLA guarantee',
      'Dedicated account manager',
      'Custom integrations',
    ],
  },
];

async function createAdvancedKnockProducts() {
  const stripeKey = getStripeKey();
  const stripe = new Stripe(stripeKey, {
    apiVersion: '2024-11-20.acacia',
  });

  console.log('⚡ CREATING ADVANCED KNOCK STRIPE PRODUCTS × ONE');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const results = [];

  for (const productConfig of ADVANCED_KNOCK_PRODUCTS) {
    try {
      console.log(`📦 Creating product: ${productConfig.name}...`);

      // Create product
      const product = await stripe.products.create({
        name: productConfig.name,
        description: productConfig.description,
        metadata: {
          product_id: productConfig.id,
          type: 'advanced-knock-b2b-saas',
        },
      });

      console.log(`   ✅ Product created: ${product.id}`);

      // Create price
      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: productConfig.amount,
        currency: 'usd',
        recurring: {
          interval: 'month',
        },
        metadata: {
          product_id: productConfig.id,
        },
      });

      console.log(`   ✅ Price created: ${price.id} ($${productConfig.amount / 100}/month)`);

      results.push({
        productId: productConfig.id,
        stripeProductId: product.id,
        stripePriceId: price.id,
        name: productConfig.name,
        amount: productConfig.amount,
        status: 'success',
      });

      // Generate correct key name (advanced-knock-starter -> advancedKnockStarter)
      const keyParts = productConfig.id.split('-');
      const keyName = keyParts.map((part, idx) => 
        idx === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
      ).join('');
      const abekeysKey = `price_${productConfig.id.replace(/-/g, '_')}`;
      
      console.log(`   📋 Add to AbëKEYS (~/.abekeys/credentials/stripe.json):`);
      console.log(`      "${abekeysKey}": "${price.id}",`);
      console.log(`   Or add to config.ts fallback (already done):`);
      console.log(`      ${keyName}: getPrice('${productConfig.id.replace(/-/g, '_')}') || '${price.id}',`);
      console.log('');
    } catch (error) {
      console.error(`   ❌ Error creating ${productConfig.name}:`, error.message);
      results.push({
        productId: productConfig.id,
        name: productConfig.name,
        status: 'error',
        error: error.message,
      });
    }
  }

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('📊 SUMMARY:');
  console.log(`   ✅ Success: ${results.filter(r => r.status === 'success').length}`);
  console.log(`   ❌ Errors: ${results.filter(r => r.status === 'error').length}`);
  console.log('');

  if (results.some(r => r.status === 'success')) {
    console.log('📋 COPY THESE PRICE IDs TO config.ts:');
    results
      .filter(r => r.status === 'success')
      .forEach(r => {
        const key = r.productId
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.slice(1))
          .join('');
        console.log(`   advancedKnock${key}: '${r.stripePriceId}',`);
      });
  }

  return results;
}

// Run if called directly
if (require.main === module) {
  createAdvancedKnockProducts()
    .then(() => {
      console.log('\n✅ Advanced Knock products creation complete!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Error:', error);
      process.exit(1);
    });
}

module.exports = { createAdvancedKnockProducts };
