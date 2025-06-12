import { auth } from "@/auth";
import Settings from "@/components/settings/Settings";
import { getUser } from "@/lib/getUser";

export default async function SettingsPage() {
  const session = await auth();
  const user = await getUser();
  if (!user) {
    return <div>User not found</div>;
  }
  return <Settings session={session} user={user} />;
}
