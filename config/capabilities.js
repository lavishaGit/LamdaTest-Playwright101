export const capabilities=[{
    "browserName": "Chrome",
	"browserVersion": "133.0",// Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  
    "LT:Options": 
    {
        "platform": "Windows 10",
        "build": "Playwright Test from config",
        "name": "Chrome on Windows 10",
          "user":process.env.LT_USERNAME,
        "accessKey": process.env.LT_ACCESS_KEY,
      
        "video": 'on',
        
        "headless": true,
        "screenshot": 'on',
        "trace": 'on', 
    },
  },
    {   
      "browserName": "pw-firefox",
	"browserVersion": "134.0",
      "LT:Options": {
    "platform": "macOS Big sur",
        "build": "Playwright Build - Firefox Mac",
        "name": "Firefox on macOS Ventura",
        "user":process.env.LT_ACCESS_KEY,
        "accessKey":process.env.LT_ACCESS_KEY,

        "video": 'on',
     
        "headless": true,
        "screenshot": 'on',
        "trace": 'on',
      },
   },
 ]
