"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 3000;
const server = app_1.default.listen(PORT, () => console.log(`App listening on port ${PORT}`));
module.exports = server;
//# sourceMappingURL=server.js.map