import Image from "next/image";
import React from "react";
import carPickAndDrop from "@/public/Homepage/carPickAndDrop.jpg";
import carWash from "@/public/Homepage/carWash.jpg";
import oilChange from "@/public/Homepage/oilChange.jpg";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import BookingForm from "./BookingForm";
import { userDetailsType } from "@/types";

const OurServices = ({ userDetails }: { userDetails: userDetailsType }) => {
  console.log(userDetails);
  return (
    <div className="mt-8">
      <Drawer>
        <section className="py-20 container ">
          <div className="px-8">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Services
              </h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                We focus on your comfort, ease, and capital while providing
                suitable packages that fulfil your needs. Drop your details and
                we will back to you asap
              </p>
            </div>

            <DrawerContent>
              <DrawerHeader className="mx-auto">
                <DrawerTitle>
                  {userDetails.name
                    ? "Are you absolutely sure?"
                    : "You need to login before booking"}
                </DrawerTitle>
                <DrawerDescription>
                  {userDetails.name ? (
                    "This action cannot be undone."
                  ) : (
                    <Link className="block text-center mt-6 mb-3" href={"/login"}>
                      <span className="text-center mt-6 mb-3">
                        To login{"->"}
                      </span>
                    </Link>
                  )}
                </DrawerDescription>
              </DrawerHeader>

              {userDetails.name && (
                <BookingForm className="mx-auto" userDetails={userDetails} />
              )}
            </DrawerContent>

            <div className="grid grid-cols-3 gap-14 mt-16">
              <div className=" ">
                <div className="card text-left light:border overflow-clip border-black  rounded-[10px_50px_10px_10px] hover:shadow-[13px_15px_0px_0px_#7B61FF,0px_1px_2px_0px_#7F56D9] transition-shadow  flex flex-col h-full">
                  <div className="w-full">
                    <Image
                      src={carPickAndDrop}
                      alt="Cab Service"
                      width={400}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="px-3 font-semibold mt-3 text-lg text-left">
                    Pick-up and Drop-off Service
                  </h3>

                  <p className="px-3 mt-3">
                    Need vehicle maintenance? Our pick-up and drop-off service
                    makes it easy. We collect your car, service it meticulously,
                    and return it promptly.
                  </p>
                  <div className="mt-auto px-4 py-4">
                    <DrawerTrigger asChild>
                      <Button className="bg-primary hover:text-primary hover:bg-white hover:drop-shadow-lg text-white px-6 py-2 rounded-full shadow-sm mt-3">
                        Book Now
                      </Button>
                    </DrawerTrigger>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="card text-left light:border overflow-clip border-black  rounded-[10px_50px_10px_10px] hover:shadow-[13px_15px_0px_0px_#7B61FF,0px_1px_2px_0px_#7F56D9] transition-shadow  flex flex-col h-full">
                  <div className="w-full">
                    <Image
                      src={carWash}
                      alt="Car wash"
                      width={400}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="px-3 font-semibold mt-3 text-lg text-left">
                    Comprehensive Car Wash
                  </h3>

                  <p className="px-3 mt-3">
                    Give your car a makeover with our top-quality car wash. We
                    remove stains and restore shine, leaving your vehicle
                    looking its best.
                  </p>
                  <div className="mt-auto px-4 py-4">
                    <DrawerTrigger asChild>
                      <Button className="bg-primary hover:text-primary hover:bg-white hover:drop-shadow-lg text-white px-6 py-2 rounded-full shadow-sm mt-3">
                        Book Now
                      </Button>
                    </DrawerTrigger>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="card text-left light:border overflow-clip border-black  rounded-[10px_50px_10px_10px] hover:shadow-[13px_15px_0px_0px_#7B61FF,0px_1px_2px_0px_#7F56D9] transition-shadow  flex flex-col h-full">
                  <div className="w-full">
                    <Image
                      src={oilChange}
                      alt="Oil change"
                      width={400}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="px-3 font-semibold mt-3 text-lg text-left">
                    Professional Oil Changes
                  </h3>

                  <p className="px-3 mt-3">
                    Keep your engine running smoothly with our professional oil
                    change service. We use premium oils and filters for optimal
                    performance.
                  </p>
                  <div className="mt-auto px-4 py-4">
                    <DrawerTrigger asChild>
                      <Button className="bg-primary hover:text-primary hover:bg-white hover:drop-shadow-lg text-white px-6 py-2 rounded-full shadow-sm mt-3">
                        Book Now
                      </Button>
                    </DrawerTrigger>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex justify-center mt-14">
                            <Link
                                className="w-12 h-12 rounded-full border-2 border-primary flex justify-center items-center text-primary"
                                href="/"
                            >
                                <ArrowRightIcon height="10" />
                            </Link>
                        </div> */}
          </div>
        </section>
      </Drawer>
    </div>
  );
};

export default OurServices;
