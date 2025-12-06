"use client";

import React, { useState } from "react";
import { DatePicker } from "@heroui/date-picker";
import { TimeInput } from "@heroui/date-input";
import { Time } from "@internationalized/date";
import { Input, Button } from "@heroui/react";
import SelectMentor from "./SelectMentor";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import ReCAPTCHA from "react-google-recaptcha";
import { CheckCircle } from "lucide-react";

// Server API URL
const SERVER_URL = "http://localhost:4000"; // আপনার server URL দিন
const SITE_KEY = "6Lf0qBUsAAAAAKV3rnYEMkpDJdUloVMCYUDee6hO";

function OneByTwoGrid() {
  // Form state
  const [fullName, setFullName] = useState("");
  const [meetingTopic, setMeetingTopic] = useState("");
  const [startTime, setStartTime] = useState(new Time());
  const [endTime, setEndTime] = useState(new Time(11, 45));
  const [meetingDate, setMeetingDate] = useState(null);
  const [notes, setNotes] = useState("");
  const [mentor, setMentor] = useState("");
  const [email, setEmail] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);

  const [error, setError] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Save meeting function
  const saveMeeting = async () => {
    // Validation check
    if (
      !fullName ||
      !meetingTopic ||
      !startTime ||
      !endTime ||
      !meetingDate ||
      !mentor ||
      !email ||
      !captchaToken
    ) {
      setError("Please fill all fields and complete the reCAPTCHA!");
      return;
    }
    setError("");

    try {
      const id = Date.now().toString();

      // Server API call
      await axios.post(`/api/bookings`, {
        id,
        fullName,
        meetingTopic,
        startTime: startTime.toString(), // অথবা `${startTime.hour}:${startTime.minute}`
        endTime: endTime.toString(),
        meetingDate: meetingDate.toString(), // অথবা ISO string
        notes,
        mentor,
        email,
        captchaToken,
        createdAt: new Date().toISOString(),
      });

      // Open success modal
      onOpen();
    } catch (err) {
      console.error("Booking error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="p-4 sm:p-6 w-full bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Book a Meeting
      </h1>
      <p className="text-gray-600 mb-6">
        Talk to a web app consultant and schedule your meeting easily.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-6">
        {/* Form Inputs */}
        <div className="col-span-1 sm:col-span-2 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-5">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
            className="w-full"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Meeting Topic"
            placeholder="e.g. Web app consultation"
            type="text"
            className="w-full"
            value={meetingTopic}
            onChange={(e) => setMeetingTopic(e.target.value)}
            required
          />

          <TimeInput
            label="Start Time"
            className="w-full"
            value={startTime}
            onChange={setStartTime}
            required
          />

          <TimeInput
            label="End Time"
            className="w-full"
            value={endTime}
            onChange={setEndTime}
            required
          />

          <DatePicker
            className="w-full"
            label="Meeting Date"
            value={meetingDate}
            onChange={(date) => setMeetingDate(date)}
            required
          />

          <Input
            label="Additional Notes"
            placeholder="Write anything important…"
            type="text"
            className="w-full"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <ReCAPTCHA
            sitekey={SITE_KEY}
            onChange={(token) => setCaptchaToken(token)}
          />

          {error && <p className="text-red-500 font-medium">{error}</p>}
        </div>

        {/* Mentor selection & confirm button */}
        <div className="col-span-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <SelectMentor onSelect={(value) => setMentor(value)} />

          <Button
            color="primary"
            size="lg"
            radius="lg"
            className="w-full font-semibold text-white mt-4 flex items-center justify-center gap-2"
            onPress={saveMeeting}
          >
            Confirm Meeting
          </Button>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        classNames={{
          body: "py-6",
          backdrop: "bg-white/50 backdrop-opacity-40",
          base: "border border-gray-200 bg-white text-blue-600 dark:bg-white",
          header: "border-b border-white",
          footer: "border-t border-white",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2 items-center">
                <CheckCircle className="text-green-500 w-12 h-12" />
                <span className="text-xl font-bold">Meeting Confirmed</span>
              </ModalHeader>
              <ModalBody className="text-center">
                <p>Your meeting has been successfully booked!</p>
                <p>
                  You will get a confirmation email at <strong>{email}</strong>.
                </p>
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button variant="solid" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default OneByTwoGrid;
