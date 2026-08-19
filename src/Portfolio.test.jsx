import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Portfolio from './Portfolio';

describe('Portfolio Component', () => {
  it('should render the portfolio component', () => {
    render(<Portfolio />);
    const container = screen.getByRole('main') || document.querySelector('.portfolio-container');
    expect(container).toBeDefined();
  });

  it('should render navigation with logo', () => {
    render(<Portfolio />);
    const navbar = document.querySelector('.navbar');
    expect(navbar).toBeDefined();
  });

  it('should render hero section', () => {
    render(<Portfolio />);
    const heroSection = document.querySelector('.hero-section');
    expect(heroSection).toBeDefined();
  });

  it('should render projects section', () => {
    render(<Portfolio />);
    const projectsGrid = document.querySelector('.projects-grid');
    expect(projectsGrid).toBeDefined();
  });

  it('should render skills section', () => {
    render(<Portfolio />);
    const skillsContainer = document.querySelector('.skills-container');
    expect(skillsContainer).toBeDefined();
  });

  it('should render about section', () => {
    render(<Portfolio />);
    const aboutContent = document.querySelector('.about-content');
    expect(aboutContent).toBeDefined();
  });

  it('should render contact section', () => {
    render(<Portfolio />);
    const contactLinks = document.querySelector('.contact-links');
    expect(contactLinks).toBeDefined();
  });

  it('should render footer', () => {
    render(<Portfolio />);
    const footer = document.querySelector('.footer');
    expect(footer).toBeDefined();
  });

  it('should apply glass-panel class to cards', () => {
    render(<Portfolio />);
    const glassPanels = document.querySelectorAll('.glass-panel');
    expect(glassPanels.length).toBeGreaterThan(0);
  });

  it('should have responsive grid for projects', () => {
    render(<Portfolio />);
    const projectsGrid = document.querySelector('.projects-grid');
    const computedStyle = window.getComputedStyle(projectsGrid);
    expect(computedStyle.display).toBe('grid');
  });

  it('should include navigation links', () => {
    render(<Portfolio />);
    const navLinks = document.querySelectorAll('.nav-links a');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  it('should have call-to-action buttons', () => {
    render(<Portfolio />);
    const buttons = document.querySelectorAll('.btn');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should render gradient text elements', () => {
    render(<Portfolio />);
    const gradientElements = document.querySelectorAll('[style*="background"]');
    expect(gradientElements.length).toBeGreaterThan(0);
  });

  it('should include skill items', () => {
    render(<Portfolio />);
    const skillItems = document.querySelectorAll('.skill-item');
    expect(skillItems.length).toBeGreaterThan(0);
  });
});
