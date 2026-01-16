'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader, AlertTriangle, CheckCircle } from 'lucide-react';
import { submitInquiry, InquiryState } from '@/app/contact/actions';
import { cn } from '@/lib/utils';

const initialState: InquiryState = {
  message: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      className={cn(
        "w-full flex items-center justify-center gap-3 px-8 py-4 bg-truffle-dark text-white hover:bg-stone-700 transition-all text-[10px] tracking-[0.3em] uppercase rounded-sm font-bold disabled:bg-stone-400 disabled:cursor-not-allowed",
        pending && "bg-stone-500"
      )}
      whileHover={{ scale: pending ? 1 : 1.02 }}
      whileTap={{ scale: pending ? 1 : 0.98 }}
    >
      {pending ? (
        <>
          <Loader className="animate-spin h-4 w-4" />
          <span>Submitting...</span>
        </>
      ) : (
        <>
          <span>Send Inquiry</span>
          <Send className="h-3 w-3" />
        </>
      )}
    </motion.button>
  );
}

interface InquiryFormProps {
    defaultSubject?: string;
}

export default function InquiryForm({ defaultSubject = '' }: InquiryFormProps) {
  const [state, formAction] = useFormState(submitInquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.errors) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
        
        {/* Name Input */}
      <div>
        <label htmlFor="name" className="sr-only">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          required
          className="form-input"
        />
        <AnimatePresence>
            {state.errors?.name && (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-xs mt-1 flex items-center gap-1"
            >
                <AlertTriangle className="h-3 w-3" />
                {state.errors.name[0]}
            </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          required
          className="form-input"
        />
        <AnimatePresence>
            {state.errors?.email && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs mt-1 flex items-center gap-1"
                >
                    <AlertTriangle className="h-3 w-3" />
                    {state.errors.email[0]}
                </motion.div>
            )}
        </AnimatePresence>
      </div>

        {/* Subject Input */}
      <div>
        <label htmlFor="subject" className="sr-only">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          defaultValue={defaultSubject}
          required
          className="form-input"
        />
        <AnimatePresence>
            {state.errors?.subject && (
                 <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs mt-1 flex items-center gap-1"
                 >
                    <AlertTriangle className="h-3 w-3" />
                    {state.errors.subject[0]}
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="form-input"
        />
        <AnimatePresence>
            {state.errors?.message && (
                 <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs mt-1 flex items-center gap-1"
                 >
                    <AlertTriangle className="h-3 w-3" />
                    {state.errors.message[0]}
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      <SubmitButton />

      <AnimatePresence>
        {state.message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "text-sm text-center mt-4 rounded-md p-3 flex items-center justify-center gap-2",
              state.errors 
                ? 'bg-red-50 text-red-700 border border-red-200' 
                : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
            )}
          >
            {state.errors ? <AlertTriangle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
            {state.message}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}