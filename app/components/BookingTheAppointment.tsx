"use client";

import React from "react";
import { DatePicker } from "@heroui/date-picker";
import { TimeInput } from "@heroui/date-input";
import { Time } from "@internationalized/date";
import { Input, Select, SelectItem, Button } from "@heroui/react";
import SelectMentor from "./SelectMentor";

function OneByTwoGrid() {
  return (
    <div className="p-4 sm:p-6 w-full bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Book a Meeting
      </h1>
      <p className="text-gray-600 mb-6">
        Talk to a web app consultant and schedule your meeting easily.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-6">
        {/* LEFT SIDE — FORM */}
        <div className="col-span-1 sm:col-span-2 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-5">
          <h2 className="text-xl font-semibold text-gray-800">
            Meeting Information
          </h2>
          <p className="text-sm text-gray-500 -mt-1">
            Fill out the details below to schedule your meeting.
          </p>

          <Input
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
            className="w-full"
          />

          <Input
            label="Meeting Topic"
            placeholder="e.g. Web app consultation"
            type="text"
            className="w-full"
          />

          <TimeInput label="Start Time" className="w-full" />

          <TimeInput
            defaultValue={new Time(11, 45)}
            label="End Time"
            className="w-full"
          />

          <DatePicker className="w-full" label="Meeting Date" />

          <Input
            label="Additional Notes"
            placeholder="Write anything important…"
            type="text"
            className="w-full"
          />
        </div>

        {/* RIGHT SIDE — MENTOR */}
        <div className="col-span-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Select Consultant
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Choose a web app consultant for this meeting.
          </p>

          <SelectMentor />

          <Button
            color="primary"
            size="lg"
            radius="lg"
            className="w-full font-semibold text-white mt-4"
          >
            Confirm Meeting
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OneByTwoGrid;
