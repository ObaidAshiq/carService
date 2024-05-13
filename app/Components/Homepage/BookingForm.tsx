"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addAppointment } from "@/lib/action";
import { cn } from "@/lib/utils";
import { userDetailsType } from "@/types";
import { useFormState } from "react-dom";
function BookingForm({
  className,
  userDetails,
}: {
  className?: React.ComponentProps<"form">;
  userDetails: userDetailsType;
}) {
  const [state, formAction] = useFormState(addAppointment, undefined);
  return (
    <form
    action={formAction}
    className={cn("grid items-start gap-4", className)}
    >
      {console.log(state)}
      <div className="grid gap-2">
        <Input
          type="hidden"
          name="userId"
          id="userId"
          value={userDetails?.userId}
        />
        <Input
          type="hidden"
          name="username"
          id="username"
          value={userDetails?.name}
        />
        <Input
          type="hidden"
          name="email"
          id="email"
          value={userDetails?.email}
        />
        <Label htmlFor="contactNumber">Contact</Label>
        <Input
          required
          type="tel"
          pattern="^\+91[7-9][0-9]{9}$"
          name="contactNumber"
          id="contactNumber"
          placeholder="+919100334291"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dateTime">Appointment Time</Label>
        <Input
          type="datetime-local"
          required
          id="dateTime"
          name="appointmentDate"
        />
      </div>
      <Label htmlFor="checkboxContainer">Services</Label>
      <div id="checkboxContainer" className="grid grid-cols-3 place-items-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <Label htmlFor="pickAndDrop">Pick and Drop</Label>
          <Checkbox  id="pickAndDrop" name="typeOfService" value='Pick and Drop' />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Label htmlFor="carWash">Car wash</Label>
          <Checkbox  id="carWash" name="typeOfService" value='Car wash' />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Label htmlFor="oilChange">Oil change</Label>
          <Checkbox  id="oilChange" name="typeOfService" value='Oil change' />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea  id="message" name="message" placeholder="More details if there are" />
      </div>
      {!(state?.success) && <div className="text-xs text-red-600">
          {state?.message}
        </div>}
      <Button type="submit">Book</Button>
    </form>
  );
}
export default BookingForm;
