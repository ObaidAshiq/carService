import React from 'react'
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppointmentList from '../General/AppointmentList';
import { getAppointmentByAdmin, getAppointmentByUser } from '@/lib/action';

const AdminAppointment = async({isAdmin}:{isAdmin:boolean}) => {
    const myAppointments = await getAppointmentByAdmin('all')
    const pendingAppointments = await getAppointmentByAdmin('unread')
    const acceptedAppointments = await getAppointmentByAdmin('accepted')
    const rejectedAppointments = await getAppointmentByAdmin('rejected')
    console.log(acceptedAppointments)

  return (
    <>
    <Tabs defaultValue="unread">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="unread"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Unread
                </TabsTrigger>
                <TabsTrigger
                  value="accepted"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Accepted
                </TabsTrigger>
                <TabsTrigger
                  value="rejected"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Rejected
                </TabsTrigger>
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  All mail
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            {/* <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div> */}
            <TabsContent value="all" className="mt-10">
            <AppointmentList myAppointments={myAppointments} isAdmin={isAdmin} modalVisibility={false}/>
            </TabsContent>
            <TabsContent value="unread" className="mt-10">
            <AppointmentList myAppointments={pendingAppointments} isAdmin={isAdmin} modalVisibility={true}/>
            </TabsContent>
            <TabsContent value="accepted" className="mt-10">
            <AppointmentList myAppointments={acceptedAppointments} isAdmin={isAdmin} modalVisibility={false}/>
            </TabsContent>
            <TabsContent value="rejected" className="mt-10">
            <AppointmentList myAppointments={rejectedAppointments} isAdmin={isAdmin} modalVisibility={false}/>
            </TabsContent>
          </Tabs>
          </>
  )
}

export default AdminAppointment