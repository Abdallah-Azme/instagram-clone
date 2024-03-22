"use client";
import { cn } from "@/lib/utils";
import type { User } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import UserAvatar from "../commen/UserAvatar";

type ProfileLinkProps = {
  user: User | undefined;
};
export default function ProfileLink({ user }: ProfileLinkProps) {
  const pathname = usePathname();

  const href = `/dashboard/${user?.name
    ?.split(" ")
    .join("")
    .toLocaleLowerCase()}`;
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: isActive ? "secondary" : "ghost",
        className: "navLink",
        size: "lg",
      })}
    >
      <UserAvatar
        user={user}
        className={`h-6 w-6 ${isActive && "border-2 border-white"}`}
      />

      <p
        className={`${cn("hidden lg:block", {
          "font-extrabold": isActive,
        })}`}
      >
        Profile
      </p>
    </Link>
  );
}
