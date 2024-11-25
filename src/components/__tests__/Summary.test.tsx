import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Summary from '../Home/Summary';
import { getSummary } from '@/lib/actions';

jest.mock('@/lib/actions', () => ({
  getSummary: jest.fn(),
}));

describe('Summary Component', () => {
  it('renders the correct data from getSummary', async () => {
    const mockData = {
      data: {
        name: 'Rifky Alfarez',
        role: 'Frontend Developer',
        summary:
          'Experienced in building web applications using Next.js and React.',
        cv_link: '/cv/rifky-alfarez.pdf',
      },
    };
    (getSummary as jest.Mock).mockResolvedValue(mockData);

    render(await Summary());

    expect(screen.getByText('Rifky Alfarez')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Experienced in building web applications using Next.js and React.'
      )
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Download CV/i })).toHaveAttribute(
      'href',
      '/cv/rifky-alfarez.pdf'
    );
  });
});
