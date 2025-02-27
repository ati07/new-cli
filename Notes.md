-npm addUser
-npm link

- I learn from lesson 12. We can publish own CLI using npm and github. So to create CLI, we need to make an account on npmjs. After that we need to make package.json where we need to make a attribute that is 'bin'. 
In bin we can add our command name and corresponding js file in way that whenever we run the command it will call that js file. Now after that
to check the CLI we need to first run npm link then is will install this CLI in local. Now we can run CLI command.
- If we want to publish on npmjs then we need to run npm publish command. After the pulishing the CLI we can install the CLI using the npm install -globally or locally or we can use npx <CLI Name>. After using the npx, npx will search this CLI first if it not get any 
then it will install and execute the CLI.
- I learn from lesson 13. When we install using npx if it find out the CLI then it will use local CLI. If we update the code it will execute changes in local. If we want to remove the CLI then we just need to use npm unlink -g CLI, it is similar to the npm uninstall -g CLI.
- To Clear the console we can use clear-any-console module instead of console.clear() because that module can run any system. 
- In packages.json, we can make changes in version accoridng to our changes for example version has major.minor.patch format, we can update these field according to the changes suppose we changes very minute in code then we can increase patch by 1. And if there some changes in code then we can increase minor by 1. If there is huge change or completaly different or added new feature then we can increase major by 1.


- I learned some async method like series, each, eachSeries, waterfall and do the experiments with these methods. Where async.series method is used whenever we want to run multiple asynchronous module in series means one by one. And each method is used in when we want to run tasks in parallel. And eachSeries method task run one by one and pass to a function to make process and also handle the error callback. And Waterfall method is just like pipline means one function passes the result to next function and at the end handle the last function result and error.



I learned about several asynchronous methods, such as series, each, eachSeries, and waterfall, and experimented with them.

- The async.series method is used when we want to run multiple asynchronous functions in sequence, meaning one function runs only after the previous one completes.

- The async.each method is used when we need to run tasks in parallel, executing multiple asynchronous functions simultaneously.

- The async.eachSeries method runs tasks one by one, passing each task to a function for processing while also handling error callbacks.

- The async.waterfall method works like a pipeline, where the output of one function is passed as input to the next function. At the end of the process, the final function receives the last result and handles any errors.

- From Lesson 12, I learned that we can publish our own CLI using npm and GitHub. To create a CLI, we first need to create an account on npmjs.com. After that, we need to create a package.json file, where we define a special attribute called bin.

- The bin field specifies our CLI command and maps it to a corresponding JavaScript file. This ensures that whenever we run the command, the linked JavaScript file is executed.

- To test our CLI locally, we first run: npm link
- This installs the CLI globally on our local system. Once linked, we can execute the CLI command directly in the terminal.

- To publish the CLI on npm, we use: npm publish

-After publishing, the CLI can be installed globally or locally using: npm install -g <CLI-Name>
Alternatively, we can use npx <CLI-Name>, which will first check if the CLI is available locally. If not, npx will install and execute it automatically.

- From Lesson 13, I learned that when we run a CLI using npx, it first checks for a local version. If the CLI exists locally, it runs that version. If we update the code, the changes are reflected immediately.

To remove the globally installed CLI, we can use: npm unlink -g <CLI-Name>
This works similarly to: npm uninstall -g <CLI-Name>

- To clear the console, instead of using console.clear(), we can use the clear-any-console module. This module works across different operating systems, ensuring better compatibility.

- In the package.json file, we can update the version number based on the type of changes made. The version follows the major.minor.patch format:

 - If we make a small bug fix, we increment the patch (e.g., 1.0.0 → 1.0.1).
 - If we introduce minor updates or improvements, we increment the minor version (e.g., 1.0.0 → 1.1.0).
 - If we make significant changes or add major features, we increment the major version (e.g., 1.0.0 → 2.0.0).

- However we can also use the npm version command to increase the version format:
 - If we want to increase the patch version then we need to run npm version minor so it will incrase by 1 (e.g 1.0.1 -> 1.0.2)
 - If we want to increase the minor version then just run npm version patch, it will increase by 1 (e.g 1.0.0 -> 1.1.0)
 - If we want to incrase the major version then need to run npm version major, it will increase by 1 (e.g 1.0.0 -> 2.0.0)

- And whenever we want to publish the CLI then we need to update the version otherwise it will not publish on npmjs.