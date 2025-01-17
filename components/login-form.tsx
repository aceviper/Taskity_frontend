"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginSchema, LoginType } from "@/app/login/schema";
import { z } from "zod";
import { Card, CardContent } from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./custom/button";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "admin@gmail.com",
      password: "admin123",
    },
  });

  const onSubmit = async (data: LoginType) => {
    console.log("Form Submitted", data);
    router.push("/dashboard");
    alert(`Logged in as ${data.username}`);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen bg-gray-50",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md shadow-md">
        <CardContent className="p-6">
          <form className="flex flex-col gap-6" onSubmit={loginForm.handleSubmit(onSubmit)}>
            {/* Username Field */}
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="m@example.com"
                className="py-3 px-4 text-lg"
                {...loginForm.register("username")}
              />
              <p className="text-red-500">
                {loginForm.formState.errors.username?.message}
              </p>
            </div>
            {/* Password Field */}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                className="py-3 px-4 text-lg"
                {...loginForm.register("password")}
              />
              <p className="text-red-500">
                {loginForm.formState.errors.password?.message}
              </p>
            </div>
            <Button type="submit" className="w-full py-3 text-lg">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
