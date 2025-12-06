export const runtime = "nodejs"; // Node.js runtime enforce

import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Helper function to safely serialize time/date
function serializeField(field) {
  if (!field) return "";
  if (field instanceof Date) return field.toISOString();
  if (typeof field.toString === "function") return field.toString();
  return String(field);
}

// GET all bookings
export async function GET() {
  try {
    const colRef = collection(db, "bookings");
    const snapshot = await getDocs(colRef);
    const bookings = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({
      message: "Firebase connected!",
      data: bookings,
    });
  } catch (err) {
    console.error("GET Error:", err);
    return NextResponse.json({
      message: "Error fetching bookings",
      error: err.message,
    });
  }
}

// POST new booking
export async function POST(req) {
  try {
    const data = await req.json();

    const safeData = {
      fullName: data.fullName || "",
      email: data.email || "",
      meetingTopic: data.meetingTopic || "",
      startTime: serializeField(data.startTime),
      endTime: serializeField(data.endTime),
      meetingDate: serializeField(data.meetingDate),
      notes: data.notes || "",
      mentor: data.mentor || "",
      createdAt: new Date().toISOString(),
    };

    console.log("Safe Data:", safeData);

    await addDoc(collection(db, "bookings"), { test: "hello" });

    return NextResponse.json({
      message: "Booking created successfully!",
      id: docRef.id,
      data: safeData,
    });
  } catch (err) {
    console.error("POST Error:", err);
    return NextResponse.json({
      message: "Error creating booking",
      error: err.message,
    });
  }
}
