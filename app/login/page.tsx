'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// import { adminLogin, saveToken } from '@/services/login';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'Must be email' }),

  password: z.string().min(1, {
    message: 'Password must be at least 1 character.',
  }),
});

const LoginPage = () => {
  const { push } = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;

    // try {
    //   const result = await adminLogin({ admin: { email, password } });

    //   // const token = result.headers.authorization.split(' ')[1];

    //   console.log(result);

    //   // Assuming JWT token is returned in the result
    //   // saveToken(token);
    //   push('/admin');
    //   // console.log(result);
    // } catch (error) {
    //   console.error('Login failed', error);
    // }
    const result = await axios.post('https://onlyreels-be-2ad7ba6db5a8.herokuapp.com/admin/login', {
      admin: { email, password },
    });

    // console.log(result);
    console.log(result);
  };

  // return (
  //   <div className="flex justify-center items-center h-full">
  //     <div className="border border-gray-700 rounded-xl py-8 px-8 w-80">
  //       <div className="mb-5 text-2xl text-center">Login</div>

  //       <Form {...form}>
  //         <form onSubmit={form.handleSubmit(onSubmit)}>
  //           <FormField
  //             control={form.control}
  //             name="email"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormControl>
  //                   <Input placeholder="Email" {...field} />
  //                 </FormControl>
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />

  //           <FormField
  //             control={form.control}
  //             name="password"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormControl>
  //                   <Input placeholder="Password" {...field} />
  //                 </FormControl>
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />

  //           <Button type="submit" className="mt-5 ml-auto mr-auto" variant="submit" size="lg">
  //             Submit
  //           </Button>
  //         </form>
  //       </Form>
  //     </div>
  //   </div>
  // );
  return <div className=""></div>;
};

export default LoginPage;
