"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../@/components/ui/form"
import { useNavigate } from 'react-router-dom';
import { Input } from "../@/components/ui/input"
import { useMutation } from "@tanstack/react-query"
import { create } from "../api/cyclistApi"
import MultiChoice from "./MultiChoice"
import Spinner from "./Spinner"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Meno musí mať aspon 2 znaky.",
  }),
  surname: z.string().min(2, {
    message: "Priezvisko musí mať aspon 2 znaky.",
  }),
  age: z.string(),
  gender: z.string(),
  email: z.string().email({ message: "Neplatný email." }).optional(),

})

export function Formular( props: {year: string} ) {
    const navigate = useNavigate();
    const createMutation = useMutation({
        mutationFn: create,
        onError: () => navigate("/registracia/error"),
        onSuccess: (data) => navigate("/registracia/" + props.year + "/cyklista/" + data.start_number.toString()),
      });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        const newVals = {
            ...values,
            age: parseInt(values.age),
            year: props.year
        }
        createMutation.mutate(newVals);
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meno</FormLabel>
              <FormControl>
                <Input placeholder="Ján" {...field} />
              </FormControl>
              <FormDescription>
                Meno cyklistu
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priezvisko</FormLabel>
              <FormControl>
                <Input placeholder="Novák" {...field} />
              </FormControl>
              <FormDescription>
                Priezvisko cyklistu
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vek</FormLabel>
              <FormControl>
                <Input placeholder="12" {...field} />
              </FormControl>
              <FormDescription>
                Vek cyklistu v deň pretekov (v rokoch)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <MultiChoice field={field}/>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={createMutation.isPending} type="submit">{createMutation.isPending? <Spinner/> : "Odoslať"}</Button>
      </form>
    </Form>
  )
}
