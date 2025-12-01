// app/hooks/useContactForm.ts
"use client";
import { useState, ChangeEvent } from 'react';
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormError {
  email: boolean;
  required: boolean;
}

export const useContactForm = () => {
  const [input, setInput] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState<FormError>({
    email: false,
    required: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    checkRequired();
    if (e.target.name === 'email') {
      setError((prev) => ({ ...prev, email: !isValidEmail(input.email) }));
    }
  };

  const handleSubmit = async () => {
    if (!input.email || !input.message || !input.name) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    }
    if (error.email) {
      return;
    }
    setError((prev) => ({ ...prev, required: false }));
    setIsLoading(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    if (!serviceID || !templateID || !options.publicKey) {
      toast.error("EmailJS environment variables are not set!");
      setIsLoading(false);
      return;
    }

    try {
      const res = await emailjs.send(serviceID, templateID, { ...input }, options);
      if (res.status === 200) {
        toast.success('Message sent successfully!');
        setInput({ name: '', email: '', message: '' });
      }
    } catch (err) {
      if (typeof err === 'object' && err !== null && 'text' in err) {
        toast.error(String((err as { text: unknown }).text));
      } else {
        toast.error('An unexpected error occurred!');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    input,
    error,
    isLoading,
    handleInputChange,
    handleBlur,
    handleSubmit,
  };
};
