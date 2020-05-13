npm install @qooxdoo/compiler -g
mkdir html
pushd tweets/step1
qx deploy --out=../../html/step1    --clean --source-maps
popd                             
pushd tweets/step2               
qx deploy --out=../../html/step2    --clean --source-maps
popd                             
pushd tweets/step3               
qx deploy --out=../../html/step3    --clean --source-maps
popd                             
pushd tweets/step4.1             
qx deploy --out=../../html/step4.1  --clean --source-maps
popd                             
pushd tweets/step4.2             
qx deploy --out=../../html/step4.2  --clean --source-maps
popd                             
pushd tweets/step4.2.1           
qx deploy --out=../../html/step4.2.1 --clean --source-maps
popd                             
pushd tweets/step4.3             
qx deploy --out=../../html/step4.3  --clean --source-maps
popd                             
pushd tweets/step4.4             
qx deploy --out=../../html/step4.4  --clean --source-maps
popd                             
pushd tweets/step4.5             
qx deploy --out=../../html/step4.5  --clean --source-maps
popd
pushd mobiletweets/step1
qx deploy --out=../../html/mobiletweets  --clean --source-maps
popd

