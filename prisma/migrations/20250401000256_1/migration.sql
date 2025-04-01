-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ApiQuota" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "requestsUsed" INTEGER NOT NULL DEFAULT 0,
    "maxRequests" INTEGER NOT NULL DEFAULT 1000,
    "lastResetDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "secretKey" TEXT NOT NULL,
    CONSTRAINT "ApiQuota_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ApiQuota" ("id", "lastResetDate", "maxRequests", "requestsUsed", "secretKey", "userId") SELECT "id", "lastResetDate", "maxRequests", "requestsUsed", "secretKey", "userId" FROM "ApiQuota";
DROP TABLE "ApiQuota";
ALTER TABLE "new_ApiQuota" RENAME TO "ApiQuota";
CREATE UNIQUE INDEX "ApiQuota_userId_key" ON "ApiQuota"("userId");
CREATE UNIQUE INDEX "ApiQuota_secretKey_key" ON "ApiQuota"("secretKey");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
