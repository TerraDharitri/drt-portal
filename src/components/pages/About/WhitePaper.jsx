import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import GithubSlugger from 'github-slugger';
import whitepaperContent from '../../ui/PaperContent';

// Initialize slugger
const slugger = new GithubSlugger();

// Table of Contents Component
const TableOfContents = ({ headings, onHeadingClick }) => (
  <div className="sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto">
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-900">
        Table of Contents
      </h2>
      <nav>
        <ul className="space-y-2">
          {headings.map(({ id, level, text }) => (
            <li 
              key={id} 
              style={{ marginLeft: `${(level - 1) * 12}px` }}
            >
              <a
                href={`#${id}`}
                onClick={(e) => onHeadingClick(e, id)}
                className="text-gray-600 hover:text-green-500 transition-colors duration-200 text-sm block py-1"
              >
                {text.replace(/^\*\*(.*?)\*\*$/, "$1")}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);


const Whitepaper = () => {
  const [headings, setHeadings] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    // Extract headings from the content
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const extractedHeadings = [];
    let match;
    
    slugger.reset();
    
    while ((match = headingRegex.exec(whitepaperContent)) !== null) {
      const headingText = match[2];
      extractedHeadings.push({
        level: match[1].length,
        text: headingText,
        id: slugger.slug(headingText)
      });
    }
    
    setHeadings(extractedHeadings);
  }, []);

  const scrollToHeading = (e, headingId) => {
    e.preventDefault();
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

      // Update URL without page reload
      window.history.pushState({}, '', `#${headingId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: "90px" }}>
      {/* Hero Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 mt-6">
          Whitepaper
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Technical documentation of Dharitri's blockchain infrastructure and ecosystem
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_300px] gap-8">
          {/* Article */}
          <article 
            ref={contentRef}
            className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg
              prose-headings:text-gray-900
              prose-h1:text-4xl prose-h1:font-bold
              prose-h2:text-3xl prose-h2:font-semibold
              prose-h3:text-2xl prose-h3:font-medium
              prose-p:text-gray-600 
              prose-a:text-green-600 hover:prose-a:text-green-700
              prose-strong:text-gray-900
              prose-code:text-green-600
              prose-pre:bg-gray-50
              prose-pre:shadow-sm
              prose-blockquote:border-l-green-500
              prose-blockquote:bg-gray-50
              prose-blockquote:py-2
              prose-blockquote:text-gray-600
              prose-img:rounded-xl
              prose-img:shadow-lg
              order-2 xl:order-1"
          >
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({node, children, ...props}) => {
                  const id = slugger.slug(children[0]?.toString() || '');
                  return <h1 id={id} className="scroll-mt-32" {...props}>{children}</h1>;
                },
                h2: ({node, children, ...props}) => {
                  const id = slugger.slug(children[0]?.toString() || '');
                  return <h2 id={id} className="scroll-mt-32" {...props}>{children}</h2>;
                },
                h3: ({node, children, ...props}) => {
                  const id = slugger.slug(children[0]?.toString() || '');
                  return <h3 id={id} className="scroll-mt-32" {...props}>{children}</h3>;
                },
                table: ({node, ...props}) => (
                  <div className="overflow-x-auto my-8 rounded-xl shadow-sm border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200" {...props} />
                  </div>
                ),
                thead: ({node, ...props}) => (
                  <thead className="bg-gray-50" {...props} />
                ),
                th: ({node, ...props}) => (
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r last:border-r-0" 
                    {...props} 
                  />
                ),
                td: ({node, ...props}) => (
                  <td 
                    className="px-6 py-4 whitespace-normal text-sm text-gray-600 border-r last:border-r-0" 
                    {...props} 
                  />
                ),
                tr: ({node, ...props}) => (
                  <tr 
                    className="hover:bg-gray-50 border-b last:border-b-0" 
                    {...props} 
                  />
                ),
                code: ({node, inline, ...props}) => (
                  inline ? 
                    <code className="bg-gray-100 rounded px-1 py-0.5 text-sm text-green-600" {...props} /> :
                    <code className="block bg-gray-50 rounded-lg p-4 text-sm text-gray-800 shadow-sm overflow-x-auto" {...props} />
                ),
                blockquote: ({node, ...props}) => (
                  <blockquote className="border-l-4 pl-4 italic my-6 bg-gray-50 py-2 rounded-r-lg" {...props} />
                ),
              }}
            >
              {whitepaperContent}
            </ReactMarkdown>
          </article>
          
          {/* Table of Contents Sidebar */}
          <aside className="order-1 xl:order-2">
            <TableOfContents 
              headings={headings} 
              onHeadingClick={scrollToHeading} 
            />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;