import React, { ComponentProps } from "react";
import { auth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MailIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AcceptDeleteModalContent from "../adminAppointments/AcceptDeleteModalContent";

const AppointmentList = ({ myAppointments, isAdmin, modalVisibility }: any) => {
  return (
    <ScrollArea className="max-h-screen border">
        <div className="flex flex-col gap-2 p-4 pt-0">
          {myAppointments &&
            myAppointments.map((_appointment: any) => (
              <React.Fragment key={_appointment._id.toString()}>
                <Dialog key={_appointment._id.toString()}>
                <DialogTrigger asChild>
                  <button
                    key={_appointment._id.toString()}
                    className={cn(
                      "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
                    )}
                  >
                    <div className="flex w-full flex-col gap-1">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">
                            {_appointment.username}
                          </div>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span
                                  className={`flex h-2 w-2 rounded-full ${
                                    _appointment.admin.isAccepted
                                      ? "bg-green-600"
                                      : _appointment.admin.isRejected
                                      ? "bg-red-600"
                                      : "bg-blue-600"
                                  } `}
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  {_appointment.admin.isAccepted
                                    ? "Accepted"
                                    : _appointment.admin.isRejected
                                    ? "Rejected"
                                    : "Pending"}{" "}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className={cn("ml-auto text-xs")}>
                          {formatDistanceToNow(
                            new Date(_appointment.appointmentDate),
                            {
                              addSuffix: true,
                            }
                          )}
                        </div>
                      </div>
                      <div className="text-xs font-medium space-x-4">
                        <Link href={`mailTo:${_appointment.email}`}>
                          {<MailIcon className="w-4 h-4 inline-block " />}{" "}
                          {_appointment.email}
                        </Link>
                        {
                          <Link href={`tel:${_appointment.contactNumber}`}>
                            <PhoneCallIcon className="w-4 h-4 inline-block" />{" "}
                            {_appointment.contactNumber}
                          </Link>
                        }
                      </div>
                    </div>
                    <div className="line-clamp-2 text-xs text-muted-foreground">
                      {_appointment.message.substring(0, 300)}
                    </div>
                    {_appointment.typeOfService.length ? (
                      <div className="flex items-center gap-2">
                        {_appointment.typeOfService.map((_service: string) => (
                          <Badge
                            key={_service}
                            variant={getBadgeVariantFromLabel(_service)}
                          >
                            {_service}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </button>
                </DialogTrigger>
                {modalVisibility && (
                  <AcceptDeleteModalContent
                    appointmentData={_appointment}
                    id={_appointment?._id?.toString()}
                  />
                )}
                </Dialog>
              </React.Fragment>
            ))}
        </div>
      </ScrollArea>
  );
};

export default AppointmentList;

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
