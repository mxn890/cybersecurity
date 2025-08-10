import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'Why Cybersecurity Is Important for Individuals and Organizations',
    content: `Why Cybersecurity Is Important for Individuals and Organizations

Hackers often target individuals and organizations because they usually don’t have strong security systems. Just one attack can:
- Steal your customer’s private information
- Shut down your website
- Lose your money or damage your reputation

Cybersecurity is the practice of protecting computer systems, networks, programs, and data from digital attacks, damage, or unauthorized access. That's why you wouldn’t leave your shop unlocked overnight, right? The same goes for your computers and data.

Cybersecurity Matters in Organizations
Businesses are prime targets for cybercriminals. According to recent reports, nearly 43% of cyberattacks are aimed at small and medium-sized enterprises. Why? Because they often lack robust threat protection, making them easy prey.

Without proper cybersecurity tools, a single breach can lead to:
- Loss of customer trust
- Legal liabilities
- Financial ruin

Simple Tips for Strong Cyber Defense
Cybersecurity doesn’t have to be scary or expensive. With the right mix of tools and awareness, even the smallest business can block hackers and protect its data.

You don’t need to be a tech expert to keep your business safe. Just follow these basic steps:
- Use authentic, affordable tools
- Train your staff not to click on suspicious links
- Test your systems regularly
- Watch for unusual computer activity
- Pick services designed for small businesses

Building an Affordable Cyber Defense Strategy
To maximize protection while minimizing costs:
- Use cybersecurity tools
- Train employees on phishing and social engineering
- Schedule regular penetration testing
- Monitor systems with threat detection software
- Choose platforms tailored for SMBs


Ethical Hacking: How it Works
An approach, helping you find weaknesses before hackers do.

Ethical hacking means hiring someone (or using a tool) to break into your system on purpose to find and fix problems. It’s like a security guard testing the doors and windows to make sure everything is locked tight.

Ethical hacking, also known as penetration testing, is a powerful way to simulate real-world attacks and known vulnerabilities before malicious actors do. Tools like Nmap, Wireshark, and Kali Linux allow businesses to:
- Audit network security
- Identify weak points
- Test incident response protocols

By integrating ethical hacking into your cybersecurity strategy, you move from reactive to proactive defense.

Why rely on scattered, unreliable free tools? WolfGuider provides complete, up-to-date protection with active threat reproduction and expert support — all at a budget-friendly price. Do check the link: https://cybersecurity-dsh6.vercel.app/`,
    date: 'June 15, 2025',
    slug: 'cybersecurity-threats-2025',
    category: 'Threat Intelligence',
    readTime: '8 min read',
    image: '/images/blog1.png'
  },
  {
    id: 2,
    title: 'How to Spot a Fake Website Before You Click',
    content:`In today’s digital world, fake websites are everywhere, and they’re becoming increasingly difficult to spot. Cybercriminals use them to steal your personal information, trick you into downloading malware, or even hijack your accounts. Whether you're shopping online, checking emails, or browsing social media, knowing how to identify a fake site can save you from serious trouble.

Why Fake Websites Are Dangerous
Fake websites are often designed to closely resemble real ones. They may:
- Steal your login details (like email or banking passwords)
- Trick you into entering credit card info
- Install malware or viruses on your device
- Collect personal data for identity theft

These scams are part of larger cybercrime tactics such as phishing, credential stealing, and malware attacks.

How to Spot a Fake Website
1. Check the URL Carefully
Real websites usually start with https:// (the “s” means secure).
Watch out for misspellings like faceb00k.com or amaz0n.net.

2. Look for a Padlock Icon
A padlock in the address bar means the site is encrypted.
No padlock? Don’t enter any personal info.

3. Avoid Clicking Suspicious Links
Links from unknown emails, Telegram bots, or pop-ups can lead to fake sites.
Use a link checker tool or preview the URL before clicking.

4. Check for Poor Design or Grammar
Fake sites often have sloppy layouts, broken images, or spelling mistakes.
Legit companies invest in clean, professional websites.

5. Search the Website Name Online
Look for reviews or warnings.
Use OSINT tools like a real-time dashboard or open-source recon engine to investigate.

6. Don’t Trust Urgent Messages
“Your account will be deleted!” or “Claim your prize now!” are classic phishing tactics.
Stay calm and verify the source.

7. Use a Breach Scanner
Tools like a breached email scan API or a compromised account finder can help you check if your data has already been exposed.

Tools That Can Help You Stay Safe
- Phishing Page Detector: Scans websites for fake login pages
- Dark Web Scanner: Checks if your info is leaked online
- Username Search Tool: Finds where your username is being used
- Email Tracker: Traces suspicious email sources
- Browser OSINT Toolkit: Investigates websites directly from the browser

Remember
You don't have to be a cybersecurity expert to protect yourself. A few simple habits can make a big difference, such as checking URLs and avoiding suspicious links. Cybercriminals are getting smarter, but so can you. Stay alert, stay informed, and never click blindly.`,
    date: ' 2025',
    slug: 'zero-trust-architecture',
    category: 'Network Security',
    readTime: '10 min read',
    image: '/images/blog2.png'
  },
  // ...baaki posts ka data yahan add karo
];

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <div className="max-w-4xl mx-auto">
        <Image
          src={post!.image}
          alt={post!.title}
          width={1200}
          height={600}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />
        <span className="text-[#00FF94] text-sm uppercase">{post!.category}</span>
        <h1 className="text-4xl font-bold mt-2 mb-4">{post!.title}</h1>
        <div className="text-gray-400 text-sm mb-8">
          {post!.date} • {post!.readTime}
        </div>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {post!.content}
        </p>
      </div>
    </div>
  );
}
