'use client';

import { useState } from 'react';
import InputText from "@/components/inputText";
import Head from 'next/head';
import Button from "@/components/Button";
import SourceCodeViewer from "@/components/SourceCodeViewer";
import '@/styles/pages/playground.scss';

export default function InputPlayground() {
    const [inputValue, setInputValue] = useState('');

    const handleValidate = () => {
        console.log(inputValue);
    }

    const handleChange = (value) => {
        setInputValue(value);
    }

    return (
        <>
            <Head>
                <title>input</title>
                <meta name="description" content="인풋 컴포넌트" />
            </Head>
            <div className="playground">
                <h1>Input</h1>
                <h2>1-1. Input 속성</h2>
                <ul>
                    <li>
                        <p>- size : md, lg, full</p>
                        <InputText size="md" /><br />
                        <InputText size="lg" /><br />
                        <InputText size="full" />
                    </li>
                    <li>
                        <p>- type : text, password, number, email, tel</p>
                        <InputText /><br />
                        <InputText type="password" /><br />
                        <InputText type="number" /><br />
                        <InputText type="email" /><br />
                        <InputText type="tel" />
                    </li>
                    <li>
                        <p>- 속성 : label, placeholder</p>
                        <InputText label="라벨입니다" />
                        <InputText placeholder="플레이스홀더입니다" />
                    </li>
                </ul>
                <h2>1-2. Input 설정</h2>
                <ul>
                    <li>
                        <p>- basic</p>
                        <InputText />
                    </li>
                    <li>
                        <p>- required</p>
                        <InputText required />
                    </li>
                    <li>
                        <p>- disabled</p>
                        <InputText disabled />
                    </li>
                    <li>
                        <p>- readonly</p>
                        <InputText readonly value="읽기만 가능" />
                    </li>
                    <li>
                        <p>- error</p>
                        <InputText error="에러메시지다" />
                    </li>
                    <li>
                        <p>- hint</p>
                        <InputText hint="힌트다" />
                    </li>
                </ul>
                <Button onClick={handleValidate} children="Validate" />
            </div>
        </>
    )
}