import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
          <div>
            <h1>Welcome to the Docusaurus Site!</h1>
            <p>
              This site hosts the documentation for the Cursor AI Rules.
              Learn how to set up and use the rules to enhance your AI workflows.
            </p>
            <p>
              Check out the <a href="/docs/intro">documentation</a> to get started.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
