import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";

import { getAdminAuth, getAdminDb } from "@/lib/server/firebase-admin";

type BetaSignupPayload = {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  businessName: string;
  website?: string;
  idealCustomers: string;
  productDescription: string;
  businessStage: string;
  signupNumber: number;
};

function isValidPayload(payload: Partial<BetaSignupPayload>): payload is BetaSignupPayload {
  if (!payload) {
    return false;
  }

  const requiredStringFields: Array<keyof BetaSignupPayload> = [
    "uid",
    "email",
    "firstName",
    "lastName",
    "businessName",
    "idealCustomers",
    "productDescription",
    "businessStage",
  ];

  for (const field of requiredStringFields) {
    const value = payload[field];
    if (typeof value !== "string" || value.trim() === "") {
      return false;
    }
  }

  return typeof payload.signupNumber === "number" && Number.isFinite(payload.signupNumber);
}

export async function POST(request: Request) {
  try {
    const authorization = request.headers.get("authorization");
    const token = authorization?.startsWith("Bearer ")
      ? authorization.slice("Bearer ".length)
      : null;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    let decodedToken: { uid: string };
    try {
      decodedToken = await getAdminAuth().verifyIdToken(token);
    } catch (error) {
      console.error("Failed to verify ID token", error);
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const payload = (await request.json()) as Partial<BetaSignupPayload>;

    if (!isValidPayload(payload)) {
      return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
    }

    if (payload.uid !== decodedToken.uid) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const documentRef = getAdminDb().collection("users").doc(payload.uid);

    await documentRef.set(
      {
        uid: payload.uid,
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
        businessName: payload.businessName,
        website: payload.website ?? "",
        idealCustomers: payload.idealCustomers,
        productDescription: payload.productDescription,
        businessStage: payload.businessStage,
        signupNumber: payload.signupNumber,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to persist beta signup", error);
    return NextResponse.json(
      { error: "We couldn\'t save your application. Please try again later." },
      { status: 500 }
    );
  }
}
