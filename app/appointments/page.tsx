import React, { ComponentProps, Suspense } from 'react'
import { auth } from "@/lib/auth";
import { getAppointmentByUser } from '@/lib/action';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import UserAppointment from '../Components/userAppointments/UserAppointment';

const AppointmentPage = async() => {
    
  const session:any = await auth();
  console.log(session)
  return (
    <div className='px-10'>
      <h1 className='text-3xl my-10'>My appointments</h1>
      <Suspense fallback={<div>Loading Appointments...</div>}>
       <UserAppointment session={session}/>
      </Suspense>
        
    </div>
  )
}

export default AppointmentPage

