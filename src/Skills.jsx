import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { FaReact, FaHtml5, FaCss3Alt, FaGit } from 'react-icons/fa';
import { SiBootstrap, SiJavascript, SiNpm } from 'react-icons/si';


const skills = [
    { icon: <FaReact size={60} />, name: 'React' },
    { icon: <FaHtml5 size={60} />, name: 'HTML5' },
    { icon: <FaCss3Alt size={60} />, name: 'CSS3' },
    { icon: <SiBootstrap size={60} />, name: 'Bootstrap' },
    { icon: <FaGit size={60} />, name: 'Git' },
    { icon: <SiJavascript size={60} />, name: 'JavaScript' },
    { icon: <SiNpm size={60} />, name: 'NPM' },
];

const SkillsSection = () => {
    return (
        <Box sx={{ padding: 9.4 }}>
            <Typography variant="h4" gutterBottom align="center">
                Skills
            </Typography>
            <Grid container spacing={10} justifyContent="center">
                {skills.map((skill) => (
                    <Grid item xs={6} sm={4} md={3} key={skill.name} display="flex" flexDirection="column" alignItems="center">
                        {skill.icon}
                        <Typography variant="subtitle1" style={{ marginTop: 8 }}>
                            {skill.name}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SkillsSection;