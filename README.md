# LamdaTest-Playwright101
# ✅ Playwright Automation: LambdaTest Cloud Integration

This project uses https://www.lambdatest.com/selenium-playground page to run UI automation tests on the **LambdaTest Cloud Playwright Grid**, configured with Gitpod for an easy one-click dev environment.
Used  3 different locators while performing the test.
This project is based on Playwright-Javascript framwork with latest version.
Network logs, video recordings, screenshots, and
console logs are enabled in all the test runs.

---

## 🚀 Quick Start (via Gitpod)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/lavishaGit/LamdaTest-Playwright101)

1. Click the **Gitpod badge** above to launch the dev environment.
2. It will install dependencies and run tests automatically via `.gitpod.yml`.
3. You’ll see test logs in the terminal.

---

## 🧪 Running Tests on LambdaTest Cloud

Tests are configured to run on LambdaTest using Playwright’s `connect()` method via a secure WebSocket:


const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodedCapabilities}`);
