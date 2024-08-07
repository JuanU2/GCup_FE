"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "../@/lib/utils"
import { Button } from "../@/components/ui/button"
import "./DatePicker.css"
import { sk } from 'date-fns/locale'
import { Calendar } from "../@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../@/components/ui/popover"
import { useNavigate } from "react-router-dom"
import { useRaceCreate } from "../hooks/race"

const FormSchema = z.object({
  raceDate: z.date({
    required_error: "A date of birth is required.",
  }),
})

export function DatePickerForm() {
    const {mutateAsync: createRace} = useRaceCreate()
    const navigate = useNavigate()
    
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
        await createRace(data);
        navigate("/registracia");
      } catch (e) {
        console.error(e);
      }
  
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="raceDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Dátum preteku</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Vyberte dátum</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    locale={sk}
                    disabled={(date) =>
                        date < new Date("1900-01-01")
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit">Vytvoriť pretek</Button>
      </form>
    </Form>
  )
}
