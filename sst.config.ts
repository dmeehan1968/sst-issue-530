/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-issue-530",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {

    const secret = new sst.Secret('MySecret', 'placeholder-value')

    new sst.aws.Nextjs('MyWeb', {
      path: 'packages/dashboard',
      link: [ secret ]
    })

  },
});
