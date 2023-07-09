"use client"
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Jr. Web Developer",
            "Front-end Developer",
            "React Developer"
        ]
    })
    const { isType, isDelete, isDelay, isDone } = count;

    return (
        <div>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
        </div>
    )
}