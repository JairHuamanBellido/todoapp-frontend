import { describe, expect, it } from 'vitest';
import { Spinner } from '..';
import { renderAllProviders } from '../../../../utils/renderAllProvider';

describe('Spinner', () => {
  it('shoul be render without crashing', () => {
    const { container } = renderAllProviders(<Spinner />);

    expect(
      container.querySelector('div[data-component="spinner"]')
    ).toBeInTheDocument();
  });
});
