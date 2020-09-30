module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins:[
    // "transform-remove-strict-mode"
      [
        "component",
        {
          "libraryName": "mint-ui",
          "style": true
        }
      ],
      //"transform-remove-strict-mode"
  ]
};
