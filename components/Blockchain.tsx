"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export function Blockchain() {
  return (
    <div className='flex flex-col justify-center items-center gap-6 '>
      <h1 className='text-3xl font-bold '>Our Blockchains</h1>
      <div className='flex flex-col md:flex-row gap-10'>
        <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
          <Image
            src={`/solana.png`}
            alt='Solana'
            height='400'
            width='400'
            className='object-contain'
          />
          <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
            SOLANA
          </p>

          <p className='text-sm text-neutral-600 dark:text-neutral-400'>
            Solana is a high-performance blockchain known for its fast
            transactions (65,000 TPS) and low fees, using Proof of History (PoH)
            for efficiency. It is widely used in DeFi, NFTs, and gaming
            applications. With a market cap of around $50 billion, Solana is
            among the top blockchain networks.
          </p>
        </BackgroundGradient>
        <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
          <Image
            src={`/eth.png`}
            alt='Ethereum'
            height='300'
            width='300'
            className='object-contain'
          />
          <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
            Ethereum
          </p>

          <p className='text-sm text-neutral-600 dark:text-neutral-400'>
            Ethereum is the leading smart contract platform, powering DeFi,
            NFTs, and dApps with strong security. It transitioned to Proof of
            Stake (PoS) with Ethereum 2.0, enhancing scalability and
            sustainability. With a market cap of around $300 billion, it remains
            the second-largest cryptocurrency. 
          </p>
          
        </BackgroundGradient>
      </div>
    </div>
  );
}
