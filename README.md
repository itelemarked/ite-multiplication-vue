# ite-multiplication-vue

## IDE setup

Recommended extensions (Workspace or user...):
- ESLint
- Prettier
- Volar

Recommended package.json modifications:

  "rules": {
      "no-multiple-empty-lines": 0,
      "no-undef": 1,
      "no-unused-vars": 1,
      "vue/require-v-for-key": 1,
      "vue/script-indent": ["warn", 2, { "baseIndent": 1 }]
    },
    "overrides": [],
    "globals": {
      "defineProps": "readonly",
      "defineEmits": "readonly"
    }
    "prettier": {
      "vueIndentScriptAndStyle": true,
      "semi": false,
      "trailingComma": "none"
    },
  }

  For "globals", [see] (https://eslint.org/docs/latest/user-guide/configuring/language-options#using-configuration-files-1)  --> no warnings on "defineProps" and "defineEmits" anymore...

  For "vue/script-indent" (overrides not needed???), [see] (https://eslint.vuejs.org/rules/script-indent.html) 
  
  For "prettier", [see] (https://prettier.io/docs/en/configuration.html) and (https://prettier.io/docs/en/options.html) --> enable tab formatting in script and styles (not Vue default...)
