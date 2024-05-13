"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { acceptAppointment, rejectAppointment } from '@/lib/action';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { MailIcon, PhoneCallIcon } from 'lucide-react';
import Link from 'next/link';
import React, { ComponentProps, useState } from 'react'
import { useFormState } from "react-dom";

const AcceptDeleteModalContent = ({appointmentData,id}:{appointmentData:any,id:string}) => {
    const [stateAccept, formActionAccept] = useFormState(acceptAppointment, undefined);
    const [stateReject, formActionReject] = useFormState(rejectAppointment, undefined);


  console.log(appointmentData)
  return (
    <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>{appointmentData.username}</DialogTitle>
      <DialogDescription>
        Accept or reject the appointment.
      </DialogDescription>
      <DialogDescription asChild>
        <>
      <div className="flex w-full flex-col gap-1">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">
                            {appointmentData.username}
                          </div>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span
                                  className={`flex h-2 w-2 rounded-full ${
                                    appointmentData.admin.isAccepted
                                      ? "bg-green-600"
                                      : appointmentData.admin.isRejected
                                      ? "bg-red-600"
                                      : "bg-blue-600"
                                  } `}
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  {appointmentData.admin.isAccepted
                                    ? "Accepted"
                                    : appointmentData.admin.isRejected
                                    ? "Rejected"
                                    : "Pending"}{" "}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className={cn("ml-auto text-xs")}>
                          {appointmentData?.appointmentDate.toLocaleTimeString()}
                        </div>
                      </div>
                      <div className="text-xs font-medium space-x-4">
                        <Link href={`mailTo:${appointmentData.email}`}>
                          {<MailIcon className="w-4 h-4 inline-block " />}{" "}
                          {appointmentData.email}
                        </Link>
                        {
                          <Link href={`tel:${appointmentData.contactNumber}`}>
                            <PhoneCallIcon className="w-4 h-4 inline-block" />{" "}
                            {appointmentData.contactNumber}
                          </Link>
                        }
                      </div>
                    </div>
                    <div className="line-clamp-2 text-xs text-muted-foreground">
                      {appointmentData.message.substring(0, 300)}
                    </div>
                    {appointmentData.typeOfService.length ? (
                      <div className="flex items-center gap-2">
                        {appointmentData.typeOfService.map((_service: string) => (
                          <Badge
                            key={_service}
                            variant={getBadgeVariantFromLabel(_service)}
                          >
                            {_service}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                    </>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter >
      <form action={formActionAccept}>
      <input type="hidden" name="id" value={id} />
      <Button  className='disabled:opacity-70 disabled:cursor-not-allowed' >Accept</Button>
      </form>
      <form action={formActionReject}>
      <input type="hidden" name="id" value={id}/>
      <Button className='disabled:opacity-70 disabled:cursor-not-allowed' >Reject</Button>
      </form>
    </DialogFooter>
  </DialogContent>
  )
}

export default AcceptDeleteModalContent

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["oil change"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["pick and drop"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}