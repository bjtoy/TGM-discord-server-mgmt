#!/usr/bin/env node
/**
 * Post-launch health monitor for UnderbossHQ backend.
 *
 * Usage:
 *   node scripts/monitor-health.js https://tgm-backend.onrender.com
 *   node scripts/monitor-health.js https://tgm-backend.onrender.com --watch
 *   node scripts/monitor-health.js https://tgm-backend.onrender.com --watch --interval 300
 */

const args = process.argv.slice(2);
const baseUrl = args.find((arg) => arg.startsWith("http"))?.replace(/\/$/, "");
const watch = args.includes("--watch");
const intervalArg = args.find((arg) => arg.startsWith("--interval"));
const intervalSeconds = intervalArg
  ? Number(intervalArg.split("=")[1] || args[args.indexOf("--interval") + 1])
  : 60;

if (!baseUrl) {
  console.error("Usage: node scripts/monitor-health.js <backend-url> [--watch] [--interval 60]");
  process.exit(1);
}

async function checkHealth() {
  const url = `${baseUrl}/api/health`;
  const started = Date.now();

  try {
    const response = await fetch(url);
    const data = await response.json();
    const elapsed = Date.now() - started;

    const ok = response.ok && data.status === "healthy";

    const line = {
      timestamp: new Date().toISOString(),
      url,
      httpStatus: response.status,
      status: data.status,
      database: data.database,
      bot: data.bot?.enabled,
      envValid: data.env?.valid,
      elapsedMs: elapsed,
      ok,
    };

    console.log(JSON.stringify(line));

    if (!ok) {
      process.exitCode = 1;
    }
  } catch (error) {
    console.error(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        url,
        ok: false,
        error: error.message,
      })
    );
    process.exitCode = 1;
  }
}

if (watch) {
  console.log(`Watching ${baseUrl}/api/health every ${intervalSeconds}s`);
  checkHealth();
  setInterval(checkHealth, intervalSeconds * 1000);
} else {
  await checkHealth();
}
