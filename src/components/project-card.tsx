import { Card, CardHeader, CardTitle } from "./ui/card";

interface ProjectCardProps {
	project: ProjectsType.Item;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Card className="p-10">
			<CardHeader>
				<CardTitle>{project.title}</CardTitle>
			</CardHeader>
		</Card>
	);
};

export default ProjectCard;
