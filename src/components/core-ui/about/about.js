import { Container } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import './about.css';
import '../../core-ui/landing/landing.css';

function About() {
    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="about" id="about">
                <div className="line-styling">
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
                </div>
                <div className="about-body">
                    <div className="about-description">
                        <h2 style={{ color: theme.primary }}>Sobre mim</h2>
                        <p style={{ color: theme.tertiary, textAlign:"justify" }}>
                            Olá, me chamo Paula e sou uma desenvolvedora Front-end Jr com experiência em react,
                            javascript, typescript, material ui, integração de APIs, responsividade,
                            componentização, git e um pouco de node, express, context API, redux, dentre outros.
                            Trabalhei por cerca de 6 meses na Avanade Brasil e lá desenvolvia o front end de
                            um sistema web. Sou apaixonada por desafios, por solucionar problemas através
                            da programação e meu objetivo é crescer como desenvolvedora aprendendo novas
                            tecnologias e aprimorando minhas habilidades para me desenvolver profissionalmente.
                            Atualmente estou em busca de realocação no mercado.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;
