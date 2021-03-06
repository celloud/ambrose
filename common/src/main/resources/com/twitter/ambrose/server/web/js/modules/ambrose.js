/*
Copyright 2012 Twitter, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Main entry point. Depends on all built-in modules and returns core Ambrose object.
 */
define([
  // core module extended by sibling modules
  'ambrose/core',
  // sibling modules
  'ambrose/client',
  'ambrose/dashboard',
  'ambrose/graph',
  'ambrose/PathExpression',
  'ambrose/view',
  'ambrose/workflow',
], function(Ambrose) {
  return window.Ambrose = Ambrose;
});
