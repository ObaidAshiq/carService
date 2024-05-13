import { getAppointmentByAdmin, getAppointmentByUser } from '@/lib/action';
import AppointmentList from '../General/AppointmentList';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { redirect } from 'next/navigation';


const UserAppointment = async ({session}:any) => {
  const isAdmin = session?.user?.isAdmin
  if(isAdmin){
    redirect('/admin')
  }

   const myAppointments = await getAppointmentByUser(session?.user?.id)

     


  return (
    <div>
      
      {<AppointmentList myAppointments={myAppointments} /> }
    </div>
  )
}

export default UserAppointment