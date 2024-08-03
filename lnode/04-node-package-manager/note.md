package.json
tells the browser What package you need to install

npm i date-fns ; install date-fns packaage with npm

https://date-fns.org/docs/Getting-Started ; you need to read date-fns documentation online, How to install and How to use those packages

in .gitignore ; you'll store which folder you want to exclude When you push to github

npm install ; When you clone a GitHub repo then you want to install node modules in required as dependencies apps

npm i nodemon --save-dev, or npm i nodemon -D ; save nodemon as dev dependencies (nodemon will be listed in package.json)

in package.JSON you can set in scripts Object passing "start": "node index" starting node with index.js as main file
and "dev": "nodemon index" to run nodemon with index.js as reference file
npm run dev ; to run all of those

npm i uuid ; install uuid as dependencies

"uuid": "^10.0.0" ; semantic version numbers
first number ; major version
second number ; minor version
third number ; patch
^ ; update minor version only (not major version) saver
"10.0.0" ; only this version is work
"~10.0.0" ; update patch version only (not minor or major version)
"*" ; go ahead and update everything all the time 

npm I uuid@11.0.0 ; install specific version

npm update ; check is there any update;

# same result;
npm uninstall nodemon
npm un nodemon
npm rm nodemon;
in production you don't need a flag;
npm rm nodemon -D ; remove from dependencies (It still listed on script object)
