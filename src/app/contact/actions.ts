'use server';

import { z } from 'zod';

const inquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

export type InquiryState = {
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  message?: string | null;
}

export async function submitInquiry(prevState: InquiryState, formData: FormData): Promise<InquiryState> {
  const validatedFields = inquirySchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check the fields.',
    };
  }

  // Simulate a delay for the server action
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Here you would typically handle the form data, e.g., save to a database or send an email
  console.log('Received inquiry:', validatedFields.data);

  return { message: "Your inquiry has been submitted successfully! We will get back to you shortly." };
}
