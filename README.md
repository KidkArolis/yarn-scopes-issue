# yarn-scopes-issue

Demonstrates yarn scope issue

## Usage

Add the following to your ~/.npmrc

```
//localhost:3300/:_authToken=abc123
@foo:registry=http://localhost:3300/
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
