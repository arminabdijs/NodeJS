// When we install a package globally, it is installed on drive C and is available for all projects.
//npm i express --global
//npm i express -g



//To find out what dependencies our project has, we use the following comment
//npm list

// In the old versions, it announced the dependencies of each package, in order not to see this, the following command was used: zero here means depth, that is, don't show me the subsets.
// npm list --depth 0


// In the new versions, the following method is used to show the subcategories
// npm list --depth 1

// Delete global dependencies
// npm rm express -g
// npm remove express -g
// npm uninstall express -g