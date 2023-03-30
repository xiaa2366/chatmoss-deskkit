module.exports = {
    packagerConfig: {
      name: "ChatMoss",
      executableName: "ChatMoss",
      icon: "images/icon",
      osxSign: {},
    },
    makers: [
        {
          name: '@electron-forge/maker-squirrel',
          config: {
            certificateFile: './cert.pfx',
            certificatePassword: 'chatmoss',
          },
        },
    ]
}