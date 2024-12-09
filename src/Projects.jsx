const Projects = () => {
    const projects = [
        { title: 'Project One', link: '#', description: 'Description of project one' },
        { title: 'Project Two', link: '#', description: 'Description of project two' },
    ];

    return (
        <section id="projects">
            <div id="project-div">
                <h2>Projects</h2>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>
                            <a href={project.link}>{project.title}</a>
                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
export default Projects;