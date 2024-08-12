import "./EditForm.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../@/components/ui/form";
import { Input } from "../@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CyclistUpdate, update } from "../api/cyclistApi";
import { Button } from "../@/components/ui/button";
import Spinner from "./Spinner";

const timeRegex = /^(?:\d|0\d|1\d|2[0-3]):[0-5]\d:[0-5]\d:\d{2}$/;

function timeStringToSeconds(timeString: string) {  
    const timeRegex = /^(?:\d|0\d|1\d|2[0-3]):[0-5]\d:[0-5]\d:\d{2}$/;

  if (!timeRegex.test(timeString)) {
    throw new Error("Invalid time format. Expected format is h:mm:ss:MM");
  }

  const [hours, minutes, seconds, milliseconds] = timeString.split(':').map(Number);

  const totalSeconds = (hours * 3600) + (minutes * 60) + seconds + (milliseconds / 100);

  return Math.round(totalSeconds * 100) / 100;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Meno musí mať aspon 2 znaky.",
  }),
  surname: z.string().min(2, {
    message: "Priezvisko musí mať aspon 2 znaky.",
  }),
  age: z.string(),
  email: z.string().email({ message: "Neplatný email." }).optional(),
  time: z.string().regex(timeRegex, {
    message: "Invalid time format. Expected format is h:mm:ss:MM",
  }).optional()
});

function EditForm(props: { editing: any; setEditing: any }) {
    const queryClient = useQueryClient()
    const createMutation = useMutation({
        mutationFn: (item: CyclistUpdate) => update(props.editing.id, item),
        onError: (error) => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["race"]})
            props.setEditing(undefined)
        },
      });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: props.editing.name,
      surname: props.editing.surname,
      age: props.editing.age.toString(),
      time: (props.editing.time !== "---") ? props.editing.time : undefined,
    },
  });
  async function onSubmit(form: z.infer<typeof formSchema>) {
    const values: any = {...form, time_seconds: (form.time) ? timeStringToSeconds(form.time)*100 : undefined}
    createMutation.mutate(values)
  }
  return (
    <div className="edit-form__container rounded">
      <h1 className="text-center">
        Upraviť údaje o <br /> {props.editing.name + " " + props.editing.surname}.
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="lg:grid grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="lg:p-12 p-3 flex flex-col justify-center items-center">
                <FormLabel>Meno</FormLabel>
                <FormControl>
                  <Input placeholder="Ján" {...field} />
                </FormControl>
                <FormDescription>Meno cyklistu</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem className="lg:p-12 p-3 flex flex-col justify-center items-center">
                <FormLabel>Priezvisko</FormLabel>
                <FormControl>
                  <Input placeholder="Novák" {...field} />
                </FormControl>
                <FormDescription>Priezvisko cyklistu</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="lg:p-12 p-3 flex flex-col justify-center items-center">
                <FormLabel>Vek</FormLabel>
                <FormControl>
                  <Input placeholder="12" {...field} />
                </FormControl>
                <FormDescription>Vek cyklistu (v rokoch)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-6 col-span-2 justify-evenly">
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="lg:p-12 p-3 flex flex-col justify-center items-center">
                <FormLabel>Čas</FormLabel>
                <FormControl>
                  <Input placeholder="h:mm:ss:MM" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <div className="flex gap-6 col-span-2 justify-center">
            <Button
              className="bg-red-400 p-3 rounded hover:bg-red-500"
              onClick={() => props.setEditing(undefined)}
            >
              <span>Zavrieť</span>
            </Button>
            <Button
              disabled={createMutation.isPending}
              type="submit"
              className="bg-green-500 p-3 rounded hover:bg-green-600"
            >
              {createMutation.isPending ? <Spinner/> : <span>Uložiť</span>}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default EditForm;
