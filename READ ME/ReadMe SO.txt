Installation
To run the code you must unzip the folder contents, then open the selected folder in visual studio. Open a new terminal and install the dependencies. Once this is complete, you must run react on your local host machine, and it will open in your default browser. Access to the database is handled via cloud services and requires no additional input.
If you are using node package manager, the commands are the following;
npm install
npm start


Folder Structure
The folder structure is identical to any react app with the following differences;
In the parent directory there is a folder named “lambda” - this documents the node.js code used in the AWS Lamdba microservices, they are not functional within the code.
The components have been renamed with the file extension jsx to identify them as jsx code, and are all stored in a folder named “components”.
The CSS has been moved to a folder named “CSS”.