"use server";

type FormState = {
  message: string;
};

export async function bookingSalon(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string | null;
  const phone = formData.get("phone") as string | null;
  const address = formData.get("address") as string | null;
  const date = formData.get("date") as string | null;
  const email = formData.get("email") as string | null;
  const message = formData.get("message") as string | null;
  if (!name || !phone || !address || !date) {
    return { message: "Please fill all fields" };
  }

  await new Promise((r) => setTimeout(r, 1000));
  return { message: "Booking created successfully" };
}
