import { toast } from "@/components/ui/use-toast";
import {
	FormValidationWithZodFormSchema,
	FormValidationWithZodFormValues,
} from "@/schemas/formValidationWithZod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useFormValidationWithZod = () => {
	const form = useForm<FormValidationWithZodFormValues>({
		resolver: zodResolver(FormValidationWithZodFormSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = (data: FormValidationWithZodFormValues) => {
		toast({
			title: "Form sent successfully!",
			description: JSON.stringify(data),
		});
	};

	return { form, onSubmit };
};

export default useFormValidationWithZod;
