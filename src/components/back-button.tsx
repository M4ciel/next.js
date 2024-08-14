"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

const BackButton = () => {
	const router = useRouter();
	const pathname = usePathname();

	if (pathname === `/`) {
		return;
	}

	return (
		<Button onClick={() => router.back()} className="m-4">
			<ChevronLeft />
		</Button>
	);
};

export default BackButton;
