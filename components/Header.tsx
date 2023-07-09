import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex flex-row items-start justify-between'>
            <div
                
                className='flex flex-row items-center'>
                {/* Social Icons */}
                <SocialIcon url="https://www.facebook.com/sabujhowlader0143/"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon url="https://www.linkedin.com/in/sabuj-howladar-16b467247/"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon url="https://www.instagram.com/sabujhowlader011/"
                    fgColor='gray'
                    bgColor='transparent' />
            </div>
            <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
                {/* Mail */}
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent' />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>GET IN TOUCH</p>
            </div>
        </header>
    )
}