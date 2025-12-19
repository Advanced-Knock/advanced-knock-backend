#!/usr/bin/env node
/**
 * ⚡ AUTONOMOUS LAUNCH × ADVANCED KNOCK × ONE
 * Pattern: AUTONOMOUS × LAUNCH × ADVANCED × KNOCK × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META) × 530 Hz (JØHN × YAGNI)
 * ∞ AbëONE ∞
 * 
 * 100% AUTOMATED LAUNCH - NO MANUAL WORK
 * YAGNI Approved, JØHN Validated
 */

const fs = require('fs');
const path = require('path');

// Read marketing content
const marketingContentPath = path.join(__dirname, '../../MARKETING_ADVANCED_KNOCK_LAUNCH.md');
const marketingContent = fs.readFileSync(marketingContentPath, 'utf8');

// Parse content (simple extraction)
function extractContent() {
  const linkedinMatch = marketingContent.match(/### \*\*1\. LinkedIn Post\*\* 📱[\s\S]*?```[\s\S]*?```/);
  const redditMatch = marketingContent.match(/### \*\*2\. Reddit Posts\*\* 🔴[\s\S]*?```[\s\S]*?```/);
  const twitterMatch = marketingContent.match(/### \*\*5\. Twitter\/X Thread\*\* 🐦[\s\S]*?```[\s\S]*?```/);
  const productHuntMatch = marketingContent.match(/### \*\*3\. Product Hunt Description\*\* 🏆[\s\S]*?```[\s\S]*?```/);

  return {
    linkedin: linkedinMatch ? linkedinMatch[0].split('```')[1].trim() : '',
    reddit: {
      'r/SaaS': extractRedditContent(marketingContent, 'r/SaaS'),
      'r/startups': extractRedditContent(marketingContent, 'r/startups'),
      'r/artificial': extractRedditContent(marketingContent, 'r/artificial')
    },
    twitter: twitterMatch ? twitterMatch[0].split('```')[1].trim().split('\n').filter(l => l.trim()) : [],
    producthunt: extractProductHuntContent(marketingContent)
  };
}

function extractRedditContent(content, subreddit) {
  const regex = new RegExp(`#### \\*\\*${subreddit} Post:\\*\\*[\\s\\S]*?```[\\s\\S]*?````, 'i');
  const match = content.match(regex);
  return match ? match[0].split('```')[1].trim() : '';
}

function extractProductHuntContent(content) {
  const phSection = content.match(/### \*\*3\. Product Hunt Description\*\* 🏆[\s\S]*?```[\s\S]*?```/);
  if (!phSection) return null;

  const phText = phSection[0].split('```')[1].trim();
  
  return {
    tagline: 'AI-powered sales enablement for door-to-door teams',
    description: phText,
    topics: ['Sales', 'AI', 'Mobile App', 'SaaS', 'Field Sales', 'Sales Enablement']
  };
}

// Create launch config
const content = extractContent();
const launchConfig = {
  productId: 'advanced-knock-starter',
  productName: 'Advanced Knock',
  productUrl: `${process.env.FRONTEND_URL || 'https://yourdomain.com'}/products/advanced-knock`,
  launchDate: new Date(), // Launch immediately
  channels: [
    {
      platform: 'linkedin',
      enabled: true
    },
    {
      platform: 'reddit',
      enabled: true,
      subreddits: ['r/SaaS', 'r/startups', 'r/artificial']
    },
    {
      platform: 'twitter',
      enabled: true
    },
    {
      platform: 'producthunt',
      enabled: true
    },
    {
      platform: 'email',
      enabled: true
    }
  ],
  content: content,
  emailSequences: ['advanced_knock_signup', 'advanced_knock_conversion']
};

// Execute launch via API
async function executeLaunch() {
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:3001';
  
  console.log('⚡ AUTONOMOUS LAUNCH × ADVANCED KNOCK × ONE');
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('📋 Launch Config:');
  console.log(`   Product: ${launchConfig.productName}`);
  console.log(`   URL: ${launchConfig.productUrl}`);
  console.log(`   Channels: ${launchConfig.channels.filter(c => c.enabled).map(c => c.platform).join(', ')}`);
  console.log(`   Email Sequences: ${launchConfig.emailSequences.join(', ')}`);
  console.log('\n🚀 Scheduling launch...\n');

  try {
    const response = await fetch(`${backendUrl}/api/autonomous-launch/schedule`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(launchConfig)
    });

    const result = await response.json();

    if (result.success) {
      console.log(`✅ Launch scheduled: ${result.launchId}`);
      console.log(`   Status: ${result.status}`);
      console.log(`   Start Time: ${result.startTime}`);
      console.log('\n📊 Monitor launch status:');
      console.log(`   GET ${backendUrl}/api/autonomous-launch/${result.launchId}`);
    } else {
      console.error(`❌ Launch failed: ${result.error}`);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Launch execution failed:', error);
    process.exit(1);
  }
}

// Execute if run directly
if (require.main === module) {
  executeLaunch();
}

module.exports = { launchConfig, executeLaunch };
