module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      startServerCommand: "yarn serve",
      url: ["http://localhost:4222/"],
      settings: {
        skipAudits: ["uses-http2"],
        chromeFlags: "--no-sandbox",
      },
    },
    assert: {
      assertions: {
        "categories:performance": [
          "error",
          { minScore: 0.9, aggregationMethod: "median-run" },
        ],
        "categories:accessibility": [
          "error",
          { minScore: 1, aggregationMethod: "pessimistic" },
        ],
        "categories:best-practices": [
          "error",
          { minScore: 1, aggregationMethod: "pessimistic" },
        ],
        "categories:seo": [
          "error",
          { minScore: 1, aggregationMethod: "pessimistic" },
        ],
      },
    },
    upload: {
      target: "lhci",
      token: "f882df13-b3ed-4781-82fc-e22ace400523",
      serverBaseUrl: "https://lhci.mattycakes.ca",
    },
  },
}
