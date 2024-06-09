'use client';

import React, { useEffect, useState } from 'react';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Orbit } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

type Checked = DropdownMenuCheckboxItemProps['checked'];

const ForModelsPage = () => {
  const [showEarth, setShowEarth] = useState<Checked>(false);
  const [showSun, setShowSun] = useState<Checked>(false);
  const [showMoon, setShowMoon] = useState<Checked>(false);
  const [showJupiter, setShowJupiter] = useState<Checked>(false);
  const [showSolarSystem, setShowSolarSystem] = useState<Checked>(false);
  const [showNightSky, setShowNightSky] = useState<Checked>(false);
  const [showMeteoroid, setShowMeteoroid] = useState<Checked>(false);

  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const formSchema = z.object({
    name: z.string().min(1, { message: 'This field has to be filled.' }),
    lessonDescription: z.string().min(1, { message: 'This field has to be filled.' }),
    video: z.string().min(1, { message: 'This field has to be filled.' }),
    additionalVideo: z.string(),
    explanation: z.string().min(1, { message: 'This field has to be filled.' }),
    notes: z.string(),
    rating: z.coerce.number().int().gte(1).lte(5),
    priority: z.coerce.number().int().gte(1).lte(5),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lessonDescription: '',
      video: '',
      additionalVideo: '',
      explanation: '',
      notes: '',
      rating: 1,
      priority: 1,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const models: string[] = [];
    if (showEarth) models.push('Earth');
    if (showSun) models.push('Sun');
    if (showMoon) models.push('Moon');
    if (showJupiter) models.push('Jupiter');
    if (showSolarSystem) models.push('Solar System');
    if (showNightSky) models.push('Night Sky');
    if (showMeteoroid) models.push('Meteoroid');

    const newLesson = {
      id: Math.random().toString(16).slice(2),
      additionalVideo: values.additionalVideo,
      explanation: values.explanation,
      description: values.lessonDescription,
      title: values.name,
      created_at: new Date(),
      rating: values.rating,
      priority: values.priority,
      notes: values.notes,
      video: values.video,
      selectedModels: models,
      author_id: 1,
    };

    const lessonsString = localStorage.getItem('lessons');
    const allLessons = lessonsString ? JSON.parse(lessonsString) : [];

    localStorage.setItem('lessons', JSON.stringify([...allLessons, newLesson]));

    form.reset();

    toast('Your lesson has been created!.', {
      action: {
        label: 'Hide',
        onClick: () => {},
      },
    });
  };

  return (
    <div className="flex flex-col items-center font-notoSans">
      <div className="max-w-3xl w-full px-4 pt-5 pb-12 ">
        <h1 className="text-2xl font-bold">Create lesson</h1>

        <hr className="my-4" />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>Lesson title</FormLabel>

                  <FormControl>
                    <Input variant="form" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lessonDescription"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>lesson description</FormLabel>

                  <FormControl>
                    <Textarea variant="form" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-10">
              <FormField
                control={form.control}
                name="video"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video URL</FormLabel>

                    <FormControl>
                      <Input variant="form" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalVideo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional video</FormLabel>

                    <FormControl>
                      <Input variant="form" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="pt-10">
              <FormField
                control={form.control}
                name="explanation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Explanation</FormLabel>

                    <FormControl>
                      <Textarea variant="form" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes</FormLabel>

                    <FormControl>
                      <Input variant="form" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="pt-5 flex gap-2">
              Choose a 3D demonstration <Orbit />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Select</Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Available 3D models</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuCheckboxItem checked={showEarth} onCheckedChange={setShowEarth}>
                  Earth
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem checked={showSun} onCheckedChange={setShowSun}>
                  Sun
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem checked={showMoon} onCheckedChange={setShowMoon}>
                  Moon
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem checked={showJupiter} onCheckedChange={setShowJupiter}>
                  Jupiter
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem
                  checked={showSolarSystem}
                  onCheckedChange={setShowSolarSystem}>
                  Solar System
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem checked={showNightSky} onCheckedChange={setShowNightSky}>
                  Night Sky
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem
                  checked={showMeteoroid}
                  onCheckedChange={setShowMeteoroid}>
                  Meteoroid
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="pt-5">
              <Input type="file" />

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>

                    <FormControl>
                      <Input variant="form" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority from 1 to 5</FormLabel>

                    <FormControl>
                      <Input variant="form" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <Button size="lg" type="submit" className="rounded text-white mt-8">
                Create
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ForModelsPage;
