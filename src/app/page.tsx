import ProjectCard from "@/components/project-card";
import { ProjectsConstant } from "@/constants/projects";

const HomePage = () => {
	const projects = ProjectsConstant;

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="font-bold text-4xl text-primary">
				TIL (Today I Learn)
			</h1>
			<div className="w-full h-full grid grid-cols-2 lg:grid-cols-4">
				{projects.map((project, index) => (
					<div key={index}>
						<ProjectCard project={project} />
					</div>
				))}
			</div>
			<h4>
				by{" "}
				<a
					href="https://www.linkedin.com/in/caio-maciel/"
					target="_blank"
					className="text-blue-400 underline"
				>
					Caio Maciel
				</a>
			</h4>
		</main>
	);
};

export default HomePage;
