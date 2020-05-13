mkdir html
pushd tweets/step1
npx qx deploy --out=../../html/step1    --clean --source-maps
popd                             
pushd tweets/step2               
npx qx deploy --out=../../html/step2    --clean --source-maps
popd                             
pushd tweets/step3               
npx qx deploy --out=../../html/step3    --clean --source-maps
popd                             
pushd tweets/step4.1             
npx qx deploy --out=../../html/step4.1  --clean --source-maps
popd                             
pushd tweets/step4.2             
npx qx deploy --out=../../html/step4.2  --clean --source-maps
popd                             
pushd tweets/step4.2.1           
npx qx deploy --out=../../html/step4.2.1 --clean --source-maps
popd                             
pushd tweets/step4.3             
npx qx deploy --out=../../html/step4.3  --clean --source-maps
popd                             
pushd tweets/step4.4             
npx qx deploy --out=../../html/step4.4  --clean --source-maps
popd                             
pushd tweets/step4.5             
npx qx deploy --out=../../html/step4.5  --clean --source-maps
popd
pushd mobiletweets/step1
npx qx deploy --out=../../html/mobile  --clean --source-maps
popd

