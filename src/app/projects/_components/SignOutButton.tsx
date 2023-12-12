// TODO: 4. Call the signOut() function when the button is clicked
// hint: You may want to change the first line of this file
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  return <Link href={`/auth/signout`}><Button data-testid="sign-out-button" variant={"outline"}>Sign Out</Button></Link>;
}
// TODO: 4. end
