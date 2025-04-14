"use client"
import { UserButton, useUser } from "@stackframe/stack";

export default function Home() {
  const user = useUser({ or: "redirect" });
  const permissions = user.usePermissions()
  return (
    <div>
      <UserButton />
      {permissions.map((permission) => (
        <div key={permission.id}>{permission.id}</div>
      ))}
    </div>
  );
}
