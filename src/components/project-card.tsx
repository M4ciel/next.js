"use client";

import { useRouter } from "next/navigation";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProjectCardProps {
	project: ProjectsType.Item;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const router = useRouter();
	return (
		<Card
			className="p-10 cursor-pointer hover:bg-muted transition-colors"
			onClick={() => router.push(project.link)}
		>
			<CardHeader>
				<CardTitle>{project.title}</CardTitle>
				{project.description && (
					<CardDescription>{project.description}</CardDescription>
				)}
			</CardHeader>
		</Card>
	);
};

export default ProjectCard;
