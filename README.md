# gulp-typescript rootdirs example

This example is intended to demonstrate discrepancies in the
behavior between how the native typescript compiler and the 
typescript API handle the `rootDirs` tsconfig compiler option,
specifically when the typescript API is called through the 
[gulp-typescript](https://github.com/ivogabe/gulp-typescript)
plugin. I have not (at this time) created a testcase to indicate
whether this is an issue with how I am using the gulp-typescript
plugin, with how the gulp-typescript plugin is using the 
typescript API or with a discrepancy in how the typescript API
delegates to the typescript compiler.

## Simple Demonstration

note: the below commands will globally install typescript 2.0,
which [does not yet appear to be the default stable release on 
NPM](https://www.npmjs.com/package/typescript).

```
# 1. globally install typescript 2.0 (which supports the rootDirs configuration
npm install typescript@2.0 -g

# echo 2. install this example's dependencies
npm install

# 3. confirm the typescript 2.0 compiler compiles without error
tsc

# 4. attempt the same compilation through the gulp-typescript plugin
gulp tsc


```

## Expected Behavior

Steps 3 and 4 should behave identically

## Actual Behavior

Step 3 compiles without warning or error while step 4 compiles with
a semantic error.

## Note

I'm fairly fresh to Typescript development, so it's very possible
I'm doing something wrong or have an invalid expectation arising 
from a fundamental misunderstanding.
