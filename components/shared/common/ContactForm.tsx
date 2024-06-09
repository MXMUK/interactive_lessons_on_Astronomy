'use client';

import React from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { sendContactFrom } from '@/services/contactForm';
import { toast } from 'sonner';

const ContactForm = () => {
  const formSchema = z.object({
    name: z.string().min(1, { message: 'This field has to be filled.' }),
    email: z.string().email('This is not a valid email.'),
    message: z.string().min(1, { message: 'This field has to be filled.' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await sendContactFrom({
      contact_us_request: values,
    });

    form.reset();

    response.status == 201 &&
      toast('Your message has been sent successfully.', {
        action: {
          label: 'Hide',
          onClick: () => {},
        },
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex gap-6 flex-grow-0">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>Name</FormLabel>

                <FormControl>
                  <Input variant="form" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input variant="form" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>

              <FormControl>
                <Textarea variant="form" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Button size="lg" type="submit" className="rounded text-white mt-8">
            Create
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
