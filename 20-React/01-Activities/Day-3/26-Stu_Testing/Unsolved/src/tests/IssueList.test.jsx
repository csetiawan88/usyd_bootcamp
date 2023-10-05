import pretty from 'pretty';
import { render } from '@testing-library/react';
// TODO: Import the IssueList component
import IssueList from './IssueList';

const issues = [
  {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
    html_url: 'https://github.com/microsoft/vscode/issues/68',
    id: 117635943,
    node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
    number: 68,
    title: 'Git: Support git history in VSCode',
  },
  {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/127',
    html_url: 'https://github.com/microsoft/vscode/issues/127',
    id: 117711073,
    node_id: 'MDU6SXNzdWUxMTc3MTEwNzM=',
    number: 127,
    title: 'Provide option to opt out of line ending normalisation for files',
  },
];

describe('IssueList', () => {
  // In this example, we render the IssueList component and format the rendered HTML with the pretty package before saving it as an snapshot.
  it('should render', () => {
    // Render the component inside the target container
    render(<IssueList issues={issues} />);

    // TODO: Format the rendered HTML with the pretty package
        // Format the rendered HTML with the pretty package
        const renderedHtml = render(<IssueList issues={issues} />).container.innerHTML;
        const formattedHtml = pretty(renderedHtml);

    // TODO: Expect the rendered component to match the snapshot
    
    // Expect the rendered component to match the snapshot
    expect(formattedHtml).toMatchSnapshot();
  });

  // In this example, we check to see if the issueList contains the text "Git: Support git history in VSCode"
  it('should contain text', () => {
    // Render the component
    render(<IssueList issues={issues} />);

    // TODO: Check to see if the rendered HTML contains the text "Git: Support git history in VSCode"
    expect(document.querySelector('.list .item:nth-child(1)').textContent).toContain('Git: Support git history in VSCode');
  });
});
