# 1. Checkout to dev and pull changes
git checkout dev
git pull origin dev
# 2. Checkout to feature branch
git checkout -b rest-api
# 3. Create a front-end folder and move all files and folders into that folder
mkdir front-end
mv * front-end/ (this will throw an error when it tries to put the front-end folder into itself, it still moves all files other than .gitignore.)
mv .gitignore front-end/
# 4. Copy back-end folder from this repo and paste into parent directory
# 5. Install dependancies for back-end, then run seed, and finally run the API
cd back-end
npm i
npm run seed
npm start
# 6. Open a second terminal and run the front-end
npm run dev
# Go to App.jsx

# 20. Git workflow
git add .
git commit -m "some message"
git push --set-upstream origin rest-api