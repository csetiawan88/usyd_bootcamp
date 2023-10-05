import pretty from 'pretty';
import { render } from '@testing-library/react';
// TODO: Import the IssueItem component here
import IssueItem from './IssueItem';

const issue = {
  url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
  html_url: 'https://github.com/microsoft/vscode/issues/68',
  id: 117635943,
  node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
  number: 68,
  title: 'Git: Support git history in VSCode',
};

describe('IssueItem', () => {
  it('should contain the expected text', () => {
    // TODO: Add a render code block that checks to see if the component renders properly
    // HINT: The render method needs a target element
    // Render the IssueItem component
    render(<IssueItem issue={issue} />);

    expect(document.querySelector('.item').textContent).toBe(
      'Git: Support git history in VSCode'
    );
  });

  // TODO: render the IssueItem component and format the rendered HTML with the pretty package before saving it as an snapshot.
  it('should match snapshot', () => {
        // Render the IssueItem component
        const renderedHtml = render(<IssueItem issue={issue} />).container.innerHTML;

        // Format the rendered HTML with the pretty package
        const formattedHtml = pretty(renderedHtml);
    
        // Save the formatted HTML as a snapshot
        expect(formattedHtml).toMatchSnapshot();
  });
});
