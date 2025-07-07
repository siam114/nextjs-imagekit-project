'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const router = useRouter();
    
  return (
    <div>
      login page
    </div>
  )
}

export default LoginPage
