import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  const mockProps = {
    imgPath: '/test-image.jpg',
    title: 'Test Project',
    description: 'Test Description',
    tags: ['React', 'JavaScript'],
    ghLink: 'https://github.com/test/repo',
    demoLink: 'https://demo.test.com'
  };

  test('renders project card with all props', () => {
    render(<ProjectCard {...mockProps} />);
    
    expect(screen.getByRole('img')).toHaveAttribute('src', mockProps.imgPath);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toHaveAttribute('href', mockProps.ghLink);
    expect(screen.getByText('Demo')).toHaveAttribute('href', mockProps.demoLink);
  });

  test('renders project card without optional demo link', () => {
    const propsWithoutDemo = { ...mockProps, demoLink: undefined };
    render(<ProjectCard {...propsWithoutDemo} />);
    
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.queryByText('Demo')).not.toBeInTheDocument();
  });

  test('renders project card without tags', () => {
    const propsWithoutTags = { ...mockProps, tags: undefined };
    render(<ProjectCard {...propsWithoutTags} />);
    
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('JavaScript')).not.toBeInTheDocument();
  });

  test('renders project card with empty tags array', () => {
    const propsWithEmptyTags = { ...mockProps, tags: [] };
    render(<ProjectCard {...propsWithEmptyTags} />);
    
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('JavaScript')).not.toBeInTheDocument();
  });

  test('links open in new tab', () => {
    render(<ProjectCard {...mockProps} />);
    
    const githubLink = screen.getByText('GitHub').closest('a');
    const demoLink = screen.getByText('Demo').closest('a');
    
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(demoLink).toHaveAttribute('target', '_blank');
  });
})
