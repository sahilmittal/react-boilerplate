## Available Scripts

In the project directory, you can run:

### `yarn`

Install all the dependencies.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn predeploy`
### `yarn predeploy:stg`
### `yarn predeploy:prd`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!

### `yarn deploy`
### `yarn deploy:stg`
### `yarn deploy:prd`

Deploy the app to the specified s3 bucket mentioned in the `package.json` file.