/*!
GPII Universal Tests

Copyright 2013 OCAD University
Copyright 2014 Emergya
Copyright 2014 Technosite
Copyright 2014 Raising the Floor - International
Copyright 2017 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

The research leading to these results has received funding from the European Union's
Seventh Framework Programme (FP7/2007-2013) under grant agreement no. 289016.

You may obtain a copy of the License at
https://github.com/GPII/universal/blob/master/LICENSE.txt
*/

"use strict";

var fluid = require("infusion"),
    kettle = fluid.require("kettle");

// Ensure this happens first, to catch errors during code loading, especially before KETTLE-67 is fixed
kettle.loadTestingSupport();

// We must pass the current `require` to `fluid.require`, as nyc's instrumentation is hooked into it.
fluid.require("%gpii-universal", require);

var testIncludes = [
    "./DevelopmentTests.js",
    "./platform/cloud/AcceptanceTests_settingsGet.js",
    "./platform/cloud/AcceptanceTests_settingsPut.js",
    "./CloseConflictingAppsTests.js",
    "./ContextIntegrationTests.js",
    "./DeviceReporterErrorTests.js",
    "./ErrorTests.js",
    "./IntegrationTests.js",
    "./JournalIntegrationTests.js",
    "./MultiSettingsHandlerTests.js",
    "./PayloadSizeTest.js",
    "./PSPIntegrationTests.js",
    "./ResetAtStartTests.js",
    "./PreferencesServerErrorTests.js",
    "./StartupAPITests.js",
    "./UntrustedBrowserChannelTests.js",
    "./UntrustedContextIntegrationTests.js",
    "./UntrustedDevelopmentTests.js",
    "./UntrustedPSPIntegrationTests.js",
    "./UntrustedResetAtStartTests.js",
    "./UntrustedUserLogonHandlersTests.js",
    "./UntrustedUserLogonRequestTests.js",
    "./UserLogonHandlersEventsTests.js",
    "./UserLogonHandlersTests.js",
    "./UserLogonRequestTests.js",
    "../gpii/node_modules/accessRequester/test/AccessRequesterTests.js",
    "../gpii/node_modules/contextManager/test/ContextManagerTests.js",
    "../gpii/node_modules/eventLog/test/all-tests.js",
    "../gpii/node_modules/flatMatchMaker/test/FlatMatchMakerTests.js",
    "../gpii/node_modules/flowManager/test/BrowserChannelTests.js",
    "../gpii/node_modules/flowManager/test/DefaultSettingsLoaderTests.js",
    "../gpii/node_modules/flowManager/test/PSPChannelTests.js",
    "../gpii/node_modules/flowManager/test/SettingsDataSourceTests.js",
    "../gpii/node_modules/gpii-db-operation/test/DbDataStoreTests.js",
    "../gpii/node_modules/matchMakerFramework/test/MatchMakerFrameworkTests.js",
    "../gpii/node_modules/ontologyHandler/test/node/OntologyHandlerTests.js",
    "../gpii/node_modules/pouchManager/test/pouchManagerTests.js",
    "../gpii/node_modules/preferencesServer/test/preferencesServerTests.js",
    "../gpii/node_modules/settingsHandlers/test/JSONSettingsHandlerTests.js",
    "../gpii/node_modules/settingsHandlers/test/XMLSettingsHandlerTests.js",
    "../gpii/node_modules/settingsHandlers/test/INISettingsHandlerTests.js",
    "../gpii/node_modules/settingsHandlers/test/WebSocketsSettingsHandlerTests.js",
    "../gpii/node_modules/settingsHandlers/test/NoSettingsHandlerTests.js",
    "../gpii/node_modules/settingsHandlers/test/SettingsHandlerUtilitiesTests.js",
    "../gpii/node_modules/singleInstance/test/SingleInstanceTests.js",
    "../gpii/node_modules/userListeners/test/all-tests.js",
    "../gpii/node_modules/gpii-ini-file/test/iniFileTests.js"
];

fluid.each(testIncludes, function (path) {
    require(path);
});
