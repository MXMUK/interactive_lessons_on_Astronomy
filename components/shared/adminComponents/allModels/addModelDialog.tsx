'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { BadgePlus } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const AddModelDialog = () => {
  const formSchema = z.object({
    nick: z.string().min(2).max(50),
    campaign_url: z.string().min(2).max(50),
    description: z.string().min(2).max(50),
    title: z.string().min(2).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nick: '',
      campaign_url: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex gap-2 rounded bg-[#008CCF] hover:bg-opacity-90 px-4 py-2 text-white">
          <BadgePlus /> Add model
        </div>
      </DialogTrigger>

      <DialogContent className="!rounded">
        <DialogHeader>
          <DialogTitle>Add model</DialogTitle>

          <DialogClose></DialogClose>

          <DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="nick"
                  render={({ field }) => (
                    <FormItem>
             
                      <FormControl>
                        <Input placeholder="nick" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="campaign_url"
                  render={({ field }) => (
                    <FormItem>
             
                      <FormControl>
                        <Input placeholder="campaign_url" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
             
                      <FormControl>
                        <Input placeholder="description" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
             
                      <FormControl>
                        <Input placeholder="title" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className='rounded text-white' >Submit</Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddModelDialog;
