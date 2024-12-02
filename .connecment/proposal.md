# ConnecMent Proposal: Arbit
> Note: This proposal is for [ConnecMent](https://github.com/ConnecMent) only.

## TL;DR;
- A team of 3-4 members
- Average 2 hours of mentees time commitment for 15 days
- An arbitrage app (NextJS SSR), simply displaying some data to the user

## Team info
- **Owner**: @fatemeh-ra
- **Mentors**: @mkermani144, @fatemeh-ra
- **Mentees**: @SeyedMojtaba1

## What is Arbit?
### A metaphor
Suppose two cities: Abunland, in which there are lots of apples, and Starvland, in which apples are very rare. You, as a magician, has the ability to teleport between the two. Other than a magician, you know a bit about economy and markets. You want to make some money. What do you do?
Apple, in Abunland, costs you $1, but $10 in Starvland. You have $100, so you simply buy 100 apples in Abunland, teleport to Starvland, and sell them for $1000. Congrats! You made $900.
After a while, thanks to your teleportations, an equilibrium occurs. Starvland becomes full of apples, and its cost is reduced to $3. On the other hand, in Abunland, the number of apples reduces, so its cost increases to, say, $6.
As long as there is a mismatch in apple price (or more precisely, apple/usd pair) in Abunland or Starvland markets, you can make a profit by buying cheap in one market, and selling expensive in the other. This is called "arbitrage".

### Arbit description
Arbit is an app that computes and illustrates arbitrage opportunities based on a token pair price (from a limited list of tokens for MVP) in different markets. For MVP, only [Ergo dex](ergodex.io) and [Splash](splash.trade) are used. It computes the most profitable change amount based on pools' liquidity on backend, and shows arbitrage profits (in USD) for different token swaps on frontend.

## Technical Architecture
### System Components
- **Frontend**: NextJS with React, Server-Side Rendering
- **Backend**: NextJS
- **Data Sources**: Ergo DEX and Splash APIs
- **Styling**: Tailwind CSS (probably)

### Architecture Diagram
```
[User Interface] ←→ [NextJS Backend] ←→ [NextJS Backend] ←→ [Market APIs]
        │                   │                   │
    Render Arbitrage    Server-Side      Price Computation
    Opportunities       Rendering        & Liquidity Analysis
```

## Timing
- **Start Date**: 30 Nov 2024
- **Duration**: 15 days
  - 10 days for learning and development
  - 5 days for release preparation and going live
  - Possible 2-3 days break in between

## Mentees qualifications
### Technical Skills (at least one of the following)
- Basic Frontend knowledge: HTML, CSS, JS basics, React basics
- NodeJS basics

### Time Commitment
- Average 2 hours per day (total of around 30 hours)
- Potential to commit less time if learning or finishing tasks quickly

## What mentees learn
### Technical Skills
- React
- NextJS
- Server-Side Rendering (SSR)
- Potentially Tailwind CSS
- Mobile-first development
- API integration

### Soft Skills
- Understanding of Decentralized Exchanges (DEXs)

## Future of the project
### Feature Roadmap
On successful implementation of the MVP, and upon attracting initial users, future phases may introduce:
1. Multi-step, multi-pair arbitrage algorithms
2. Cross-platform notifications (Push, Telegram, Discord)
3. Support for more tokens, markets, and blockchains
4. Profit & Loss (P&L) analysis
5. Arbitrage automation (on-chain or off-chain)

### Advanced Learning Paths
Technically, in the future, mentees may explore:
- Working with databases (e.g., Postgres), including advanced queries
- Messenger SDK integration
- Smart contract development
- Blockchain development (off-chain)
- Cloud provider interactions (e.g., Vercel)

## Success Metrics
- Functional MVP
- Successful API integration
- Accurate arbitrage calculations
- Responsive design
- Knowledge transfer to mentees

## Conclusion
Arbit represents an innovative learning journey in modern web development, blockchain technologies, and market analysis, providing mentees with practical experience in cutting-edge technological domains.

<sub>Note: This proposal is written by a human, and improved via [Claude](https://claude.ai/).</sub>
