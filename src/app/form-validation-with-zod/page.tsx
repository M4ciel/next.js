"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useFormValidationWithZod from "@/hooks/useFormValidationWithZod";

const FormValidationWithZodPage = () => {
	const { form, onSubmit } = useFormValidationWithZod();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Card className="w-[500px]">
				<CardHeader className="w-full">
					<CardTitle className="mx-auto text-4xl">
						Form Validation With Zod
					</CardTitle>
				</CardHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<CardContent className="space-y-8">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												placeholder="John Doe"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel >Email</FormLabel>
										<FormControl>
											<Input
												placeholder="john@example.com"
												type="email"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel >Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</CardContent>
						<CardFooter>
							<Button type="submit">Submit</Button>
						</CardFooter>
					</form>
				</Form>
			</Card>
		</main>
	);
};

export default FormValidationWithZodPage;
