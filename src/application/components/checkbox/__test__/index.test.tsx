import { screen, cleanup, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Checkbox } from '..';
import { renderAllProviders } from '../../../../utils/renderAllProvider';

describe('Checkbox', () => {
  beforeEach(() => {
    cleanup();
  });

  afterEach(() => {
    vi.clearAllMocks()
  })
  it('should render without crashing', () => {
    renderAllProviders(<Checkbox isActive />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render an active checbox', () => {
    const { container, getByRole } = renderAllProviders(<Checkbox isActive />);

    expect(getByRole('checkbox')).toBeInTheDocument();
    expect(
      container.querySelector('div[data-value="active"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('div[data-value="inactive"]')
    ).not.toBeInTheDocument();
  });

  it('should render an inactive checbox', () => {
    const { container, getByRole } = renderAllProviders(
      <Checkbox isActive={false} />
    );
    expect(getByRole('checkbox')).toBeInTheDocument();

    expect(
      container.querySelector('div[data-value="inactive"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('div[data-value="active"]')
    ).not.toBeInTheDocument();
  });

  it('should be clickeable the checkbox', () => {
    const { getByRole, container } = renderAllProviders(<Checkbox isActive />);

    expect(
      container.querySelector('div[data-value="active"]')
    ).toBeInTheDocument();
    
    fireEvent.click(getByRole('checkbox'));

    expect(
      container.querySelector('div[data-value="inactive"]')
    ).toBeInTheDocument();
  });
});
