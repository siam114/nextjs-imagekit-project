"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const router = useRouter();
    
  return (
    <div>
      register page
    </div>
  )
}

export default RegisterPage