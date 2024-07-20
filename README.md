Purpose
-------

This demonstrates a problem with [sst/ion](https://github.com/sst/ion) where Nextjs projects in a sub-directory from
root are not able to access SST generated types (such a references to the secrets, nextjs url, DynamoDB table names,
etc).

See the [sst/ion issue 530](https://github.com/sst/ion/issues/530)

See the commit messages (multiline) which outline the steps taken to create.

Notes:

1. `/sst-env.d.ts` has generated references to the secret and nextjs resources
2. `/packages/dashboard/sst-env.d.ts` has a relative reference to the root `sst-env.d.ts`
3. Look in `/packages/dashboard/src/app/page.tsx` where there is a Resource import and attempt to use the secret value
1. I tried this with the placeholder value and after setting a value for the secret
2. My IDE (Jetbrains PHPStorm) says it can't find module 'sst' (this does work in my original project)
3. Unable to reference `Resource.MySecret` due to missing 'sst', but in my original project `Resource` is found but there are no known properties.
