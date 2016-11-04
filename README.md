# yarn-scopes-issue

Demonstrates yarn scope issue

## Usage

Add the following to your ~/.npmrc

```
//yarn-scopes-issue-hplobdybcq.now.sh/:_authToken=abc123
@foo:registry=https://yarn-scopes-issue-hplobdybcq.now.sh/
```

Then execute

```
$ git clone git@github.com:KidkArolis/yarn-scopes-issue.git
$ cd yarn-scopes-issue/test
$ yarn
```

You should see the following printed during the `Fetching packages...` stage

```
error An unexpected error occured, please open a bug report with the information provided in "/Users/karolis/Documents/workspace/yarn-scopes-issue/test/yarn-error.log"
```

## Dev Usage

Instead of pointing `.npmrc` to `now.sh`, you could instead point it to `http://localhost:3300` and run `npm instlal && npm start` to reproduce this locally.
