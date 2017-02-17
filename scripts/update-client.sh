#!/bin/bash

# Copyright 2015 The Kubernetes Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Script to fetch latest swagger spec.
# Puts the updated spec at api/swagger-spec/

set -o errexit
set -o nounset
set -o pipefail

if ! which mvn > /dev/null 2>&1; then
  echo "Maven is not installed."
  exit
fi

SCRIPT_ROOT=$(dirname "${BASH_SOURCE}")
CLIENT_ROOT="${SCRIPT_ROOT}/../kubernetes"

pushd "${SCRIPT_ROOT}" > /dev/null
SCRIPT_ROOT=`pwd`
popd > /dev/null

pushd "${CLIENT_ROOT}" > /dev/null
CLIENT_ROOT=`pwd`
popd > /dev/null

source "${SCRIPT_ROOT}/constants.sh"

echo "--- Downloading and processing OpenAPI spec"
python "${SCRIPT_ROOT}/preprocess_spec.py"

echo "--- Cleaning up previously generated folders"
rm -rf "${CLIENT_ROOT}/docs"
rm -rf "${CLIENT_ROOT}/src"
rm -rf "${CLIENT_ROOT}/target"
rm -rf "${CLIENT_ROOT}/gradle"


echo "--- Generating client ..."
mvn -f "${SCRIPT_ROOT}/pom.xml" clean generate-sources -Dgenerator.spec.path="${SCRIPT_ROOT}/swagger.json" -Dgenerator.output.path="${CLIENT_ROOT}" -Dgenerator.package.name=${K8SJS_PACKAGE_NAME}

echo "--- Patching generated code..."
#echo "package io.kubernetes.java.models;" > "${CLIENT_ROOT}/src/main/java/io/kubernetes/java/models/UnversionedPatch.java"
#echo "" >> "${CLIENT_ROOT}/src/main/java/io/kubernetes/java/models/UnversionedPatch.java"
#echo "public class UnversionedPatch {" >> "${CLIENT_ROOT}/src/main/java/io/kubernetes/java/models/UnversionedPatch.java"
#echo "}" >> "${CLIENT_ROOT}/src/main/java/io/kubernetes/java/models/UnversionedPatch.java"
echo "---Done."

