import { ProjectsConstant } from "@/constants/projects";

const HomePage = () => {
	const projects = ProjectsConstant;

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="font-bold text-4xl text-primary">
				TIL (Today I Learn)
			</h1>
			<div className="w-full h-full">
				{projects.map((project, index) => (
					<p key={index}>a</p>
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
