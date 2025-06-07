import { auth } from "@/auth";
import Settings from "@/components/settings/Settings";

export default async function SettingsPage() {
  const session = await auth();
  return <Settings session={session} />;
}
