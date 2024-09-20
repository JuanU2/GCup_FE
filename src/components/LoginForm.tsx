"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../@/components/ui/form"
import { Input } from "../@/components/ui/input"
import { useMutation } from "@tanstack/react-query"
import { login } from "../api/adminApi"
import useAuth from "../hooks/auth"
import { useNavigate } from 'react-router-dom';
import Spinner from "./Spinner"

const formSchema = z.object({
  username: z.string(),
  password: z.string()
})

export function LoginForm() {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();
    const createMutation = useMutation({
        mutationFn: login
      });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password: ""
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        createMutation.mutateAsync(values).then((data) => {
            if (data) {
                setIsAuthenticated(true);
                navigate('/');
                document.cookie = "session=" + data
            }
        });
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Login</FormLabel>
              <FormControl>
                <Input placeholder="login" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Heslo</FormLabel>
              <FormControl>
                <Input type="password" placeholder="heslo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={createMutation.isPending} type="submit">{createMutation.isPending? <Spinner/> : "Prihlásiť sa"}</Button>
      </form>
    </Form>
  )
}
