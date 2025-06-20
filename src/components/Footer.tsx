import React from 'react'

// define props type
type FooterProps = {
    mode?: 'inside' | 'outside';
}

function Footer(props:FooterProps) {
    const { mode = 'inside' } = props;

    const footerText = () => (
        <>
            <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} SnippetVerse. Made with ❤️ for developers. Open source.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
                Built by{" "}
                <a
                    href="https://github.com/PankajBaliyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                    PankajBaliyan
                </a>{" "}
                and{" "}
                <a
                    href="https://github.com/PankajBaliyan/snippetverse/contributors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                    the contributors
                </a>
                .
            </p>
        </>
    )

    return (
      <>
        {mode === "outside" && (
          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
            {footerText()}
          </div>
        )}
        {mode === "inside" && (
          <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
            <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 sm:py-6 md:py-8">
              <div className="text-center">{footerText()}</div>
            </div>
          </footer>
        )}
      </>
    );
}

export default Footer
